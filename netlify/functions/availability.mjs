// Fonction Netlify : renvoie les nuits déjà réservées, lues dans les calendriers iCal
// d'Airbnb et de Booking. Appelée par le site à l'adresse /api/availability.
//
// Les liens iCal contiennent un jeton privé : ils ne sont PAS dans le code mais dans
// les variables d'environnement Netlify (Site configuration > Environment variables) :
//   ICAL_URLS = lien1,lien2   (liens séparés par une virgule)
//
// Réponse : { booked: [{ start: "2026-11-02", end: "2026-11-05" }], updated: "…" }
// « end » est exclu (jour du départ), comme dans le format iCal.

const CACHE_SECONDS = 15 * 60; // le navigateur et Netlify gardent la réponse 15 minutes

export default async () => {
  const urls = (process.env.ICAL_URLS || "").split(",").map((u) => u.trim()).filter(Boolean);

  const results = await Promise.allSettled(urls.map((url) => fetch(url).then((r) => (r.ok ? r.text() : Promise.reject(r.status)))));
  const failed = results.filter((r) => r.status === "rejected").length;
  const booked = results.filter((r) => r.status === "fulfilled").flatMap((r) => parseIcal(r.value));

  // Si aucun calendrier n'a pu être lu, on le signale : le site affiche alors un message.
  if (urls.length === 0 || failed === urls.length) {
    return Response.json({ error: "calendars unavailable" }, { status: 502 });
  }

  return Response.json(
    { booked: merge(booked), updated: new Date().toISOString() },
    { headers: { "Cache-Control": `public, max-age=${CACHE_SECONDS}`, "Netlify-CDN-Cache-Control": `public, s-maxage=${CACHE_SECONDS}` } }
  );
};

export const config = { path: "/api/availability" };

// Extrait les périodes { start, end } des événements d'un fichier iCal.
function parseIcal(text) {
  // Les lignes longues peuvent être « pliées » (suite sur la ligne suivante commençant par un espace).
  const lines = text.replace(/\r?\n[ \t]/g, "").split(/\r?\n/);
  const events = [];
  let current = null;
  for (const line of lines) {
    if (line === "BEGIN:VEVENT") current = {};
    else if (line === "END:VEVENT") { if (current?.start && current?.end) events.push(current); current = null; }
    else if (current && line.startsWith("DTSTART")) current.start = toIsoDate(line);
    else if (current && line.startsWith("DTEND")) current.end = toIsoDate(line);
  }
  return events;
}

// « DTSTART;VALUE=DATE:20261102 » -> « 2026-11-02 »
function toIsoDate(line) {
  const m = line.split(":").pop().match(/^(\d{4})(\d{2})(\d{2})/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : null;
}

// Trie et fusionne les périodes qui se chevauchent (un même séjour peut figurer sur deux calendriers).
function merge(periods) {
  const sorted = periods.filter((p) => p.start < p.end).sort((a, b) => a.start.localeCompare(b.start));
  const out = [];
  for (const p of sorted) {
    const last = out[out.length - 1];
    if (last && p.start <= last.end) last.end = p.end > last.end ? p.end : last.end;
    else out.push({ ...p });
  }
  // On ne garde que les périodes à venir.
  const today = new Date().toISOString().slice(0, 10);
  return out.filter((p) => p.end > today);
}
