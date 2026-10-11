/* ==========================================================================
   Next Ground Stay — scripts du site (sans dépendance).
   Chaque bloc est indépendant et ne s'active que si son élément existe sur la page.
   Les textes et réglages viennent de window.NGS (injecté par layouts/base.njk).
   ========================================================================== */

(() => {
  const NGS = window.NGS || {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  // Lecture/écriture du stockage local, protégées (navigation privée, stockage bloqué…).
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* ignoré */ } },
  };

  /* --- 0. En-tête translucide une fois la page défilée ---------------------- */
  const header = $(".header");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", scrollY > 8);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* --- 1. Trait du logo qui s'allonge avec le défilement ------------------- */
  const line = $("[data-scroll-line]");
  if (line) {
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
      line.style.width = `${(6 + p * 94).toFixed(2)}%`;
    };
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    update();
  }

  /* --- 2. Choix de la devise (mémorisé pour les visites suivantes) ---------- */
  const select = $("[data-currency-select]");
  if (select) {
    const format = (amount, cur) => {
      const n = new Intl.NumberFormat(NGS.locale, { maximumFractionDigits: 0 }).format(amount);
      return NGS.lang === "fr" ? `${n}\u00a0${NGS.symbols[cur].trim()}` : `${NGS.symbols[cur]}${n}`;
    };
    const apply = (cur) => {
      $$("[data-price]").forEach((el) => {
        const amounts = JSON.parse(el.dataset.price);
        if (amounts[cur] != null) el.textContent = format(amounts[cur], cur);
      });
    };
    const saved = store.get("ngs-currency");
    if (saved && NGS.currencies.includes(saved)) { select.value = saved; apply(saved); }
    select.addEventListener("change", () => { store.set("ngs-currency", select.value); apply(select.value); });
  }

  /* --- 3. Visionneuse de photos (plein écran) ------------------------------- */
  const viewer = $("[data-viewer]");
  if (viewer && typeof viewer.showModal === "function") {
    const slides = $$("[data-slide]", viewer);
    const count = $("[data-viewer-count]", viewer);
    let current = 0;
    const show = (i) => {
      current = (i + slides.length) % slides.length; // boucle : après la dernière, la première
      slides.forEach((s, n) => { s.hidden = n !== current; });
      count.textContent = `${current + 1} / ${slides.length}`;
    };
    $$("[data-open-photo]").forEach((el) =>
      el.addEventListener("click", () => {
        // Sur mobile, la grande photo de la galerie est la vue d'ensemble (photo n° 0)
        const mobile = el.dataset.openPhotoMobile && matchMedia("(max-width: 759px)").matches;
        show(Number(mobile ? el.dataset.openPhotoMobile : el.dataset.openPhoto)); viewer.showModal();
      })
    );
    $("[data-viewer-close]", viewer).addEventListener("click", () => viewer.close());
    $("[data-viewer-prev]", viewer).addEventListener("click", () => show(current - 1));
    $("[data-viewer-next]", viewer).addEventListener("click", () => show(current + 1));
    viewer.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });
    // Clic sur le fond sombre : ferme la visionneuse.
    viewer.addEventListener("click", (e) => { if (e.target === viewer || e.target.classList.contains("viewer__slides")) viewer.close(); });
    // Glissement du doigt sur mobile.
    let startX = null;
    viewer.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
    viewer.addEventListener("touchend", (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) show(current + (dx < 0 ? 1 : -1));
      startX = null;
    });
  }

  /* --- 4. Carte Google chargée seulement au clic ---------------------------- */
  const map = $("[data-map]");
  $("[data-map-load]")?.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = map.dataset.map;
    iframe.loading = "lazy";
    iframe.title = "Google Maps";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    map.replaceChildren(iframe);
  });

  /* --- 4 bis. Avis : défilement avec les flèches (au doigt, c'est natif) ------ */
  const reviews = $("[data-reviews]");
  if (reviews) {
    const step = () => (reviews.firstElementChild?.getBoundingClientRect().width || 300) + 24;
    $("[data-reviews-prev]")?.addEventListener("click", () => reviews.scrollBy({ left: -step(), behavior: "smooth" }));
    $("[data-reviews-next]")?.addEventListener("click", () => reviews.scrollBy({ left: step(), behavior: "smooth" }));
  }

  /* --- 5. Dates : outils communs --------------------------------------------- */
  // Les dates sont manipulées en texte « AAAA-MM-JJ » (pas de fuseau horaire à gérer).
  const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const today = iso(new Date());
  const arrival = $("[data-arrival]");
  const departure = $("[data-departure]");
  const form = $("[data-booking-form]");
  if (arrival) arrival.min = today;
  if (departure) departure.min = today;

  /* --- 6. Calendrier des disponibilités -------------------------------------- */
  // Les nuits réservées viennent de /api/availability (fonction Netlify qui lit les
  // calendriers Airbnb et Booking). Une réservation { start, end } occupe les nuits
  // de start (inclus) à end (exclu), comme dans les fichiers iCal.
  const cal = $("[data-calendar]");
  let booked = []; // [{ start: "2026-11-02", end: "2026-11-05" }]
  const isBooked = (day) => booked.some((b) => day >= b.start && day < b.end);

  if (cal) {
    const T = NGS.t.calendar;
    const months = $("[data-cal-months]", cal);
    const prev = $("[data-cal-prev]", cal);
    const next = $("[data-cal-next]", cal);
    const now = new Date();
    let offset = 0; // décalage en mois par rapport au mois courant
    const MAX_OFFSET = 11;

    const dayNames = [...Array(7)].map((_, i) =>
      new Intl.DateTimeFormat(NGS.locale, { weekday: "narrow" }).format(new Date(2024, 0, 1 + i)) // 1er janv. 2024 = lundi
    );

    const renderMonth = (year, month) => {
      const first = new Date(year, month, 1);
      const days = new Date(year, month + 1, 0).getDate();
      const lead = (first.getDay() + 6) % 7; // semaine commençant le lundi
      const name = new Intl.DateTimeFormat(NGS.locale, { month: "long", year: "numeric" }).format(first);
      const a = arrival?.value, d = departure?.value;
      let cells = dayNames.map((n) => `<span class="dow">${n}</span>`).join("");
      cells += "<span></span>".repeat(lead);
      for (let i = 1; i <= days; i++) {
        const day = iso(new Date(year, month, i));
        const cls = ["day"];
        if (day < today) cls.push("day--past");
        else if (isBooked(day)) cls.push("day--booked");
        if (a && d && day >= a && day < d) cls.push("day--selected");
        if (a && !d && day === a) cls.push("day--selected");
        if (d && day === d) cls.push("day--end");
        // Jours à venir : boutons (1er toucher = arrivée, 2e = départ). Les nuits réservées
        // ne peuvent pas servir d'arrivée, mais peuvent servir de départ (le voyageur part le matin).
        const choosingArrival = !a || d || day <= a;
        if (day < today || (choosingArrival && isBooked(day))) cells += `<span class="${cls.join(" ")}">${i}</span>`;
        else cells += `<button type="button" class="${cls.join(" ")}" data-day="${day}" aria-pressed="${cls.includes("day--selected") || cls.includes("day--end")}">${i}</button>`;
      }
      return `<div class="month"><p class="month__name">${name}</p><div class="month__grid">${cells}</div></div>`;
    };

    // Un mois affiché à la fois, les flèches font défiler.
    // Texte sous le calendrier : arrivée à choisir, puis départ, puis rappel du nombre de nuits.
    const hint = $("[data-cal-hint]", cal);
    const updateHint = () => {
      if (!hint) return;
      const a = arrival?.value, d = departure?.value;
      if (a && d && d > a) {
        const n = Math.round((new Date(d + "T12:00") - new Date(a + "T12:00")) / 864e5);
        hint.textContent = n === 1 ? T.hintDoneOne : T.hintDone.replace("{n}", n);
      } else hint.textContent = a ? T.hintDeparture : T.hintArrival;
    };
    const render = () => {
      updateHint();
      const m = new Date(now.getFullYear(), now.getMonth() + offset, 1);
      months.innerHTML = renderMonth(m.getFullYear(), m.getMonth());
      prev.disabled = offset === 0;
      next.disabled = offset >= MAX_OFFSET;
    };

    // Toucher un jour remplit les champs Arrivée puis Départ du formulaire.
    months.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-day]");
      if (!btn || !arrival || !departure) return;
      const day = btn.dataset.day;
      if (!arrival.value || departure.value || day <= arrival.value) { arrival.value = day; departure.value = ""; }
      else departure.value = day;
      form?.dispatchEvent(new Event("input"));
      $(`[data-day="${day}"]`, months)?.focus();
    });

    prev.addEventListener("click", () => { offset = Math.max(0, offset - 1); render(); });
    next.addEventListener("click", () => { offset = Math.min(MAX_OFFSET, offset + 1); render(); });

    fetch("/api/availability")
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => { booked = data.booked || []; render(); checkDates(); })
      .catch(() => { render(); months.insertAdjacentHTML("afterbegin", `<p class="small muted">${T.unavailable}</p>`); });

    cal.render = render;
  }

  // Message sous les dates : disponibles ou en conflit avec une réservation.
  const status = $("[data-dates-status]");
  function checkDates() {
    if (!status || !arrival?.value || !departure?.value) { if (status) status.hidden = true; return; }
    if (departure.value <= arrival.value) { status.hidden = true; return; }
    let conflict = false;
    for (let d = new Date(arrival.value + "T12:00"); iso(d) < departure.value; d.setDate(d.getDate() + 1)) {
      if (isBooked(iso(d))) { conflict = true; break; }
    }
    status.hidden = false;
    status.textContent = conflict ? NGS.t.calendar.conflict : NGS.t.calendar.ok;
    status.classList.toggle("is-warning", conflict);
  }

  /* --- 7. Liens WhatsApp pré-remplis avec les dates saisies ------------------- */
  const updateWhatsApp = () => {
    const B = NGS.t.book;
    const lines = [B.waIntro.replace("{name}", NGS.apartmentName)];
    if (form) {
      const f = new FormData(form);
      if (f.get("arrival") && f.get("departure")) lines.push(`${B.waDates}: ${f.get("arrival")} → ${f.get("departure")}`);
      if (f.get("guests")) lines.push(`${B.waGuests}: ${f.get("guests")}`);
      if (f.get("message")) lines.push(f.get("message"));
    }
    const href = `https://wa.me/${NGS.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    $$("[data-wa-link]").forEach((a) => { a.href = href; a.target = "_blank"; a.rel = "noopener"; });
  };
  updateWhatsApp();
  form?.addEventListener("input", () => {
    if (arrival?.value) departure.min = arrival.value;
    updateWhatsApp();
    checkDates();
    cal?.render?.();
  });

  /* --- 8. Envoi des formulaires sans quitter la page (Netlify Forms) --------- */
  const sendForm = (el, texts) => {
    el.addEventListener("submit", async (e) => {
      e.preventDefault();
      const button = $("button[type=submit]", el);
      const result = $("[data-form-result]", el);
      const label = button.textContent;
      button.disabled = true;
      button.textContent = NGS.t.book.sending;
      try {
        const res = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(new FormData(el)).toString(),
        });
        if (!res.ok) throw new Error(res.status);
        el.reset();
        result.textContent = texts.sent;
      } catch {
        result.textContent = texts.error;
      }
      result.hidden = false;
      button.disabled = false;
      button.textContent = label;
    });
  };
  if (form) sendForm(form, NGS.t.book);
  const signForm = $("[data-sign-form]");
  if (signForm) sendForm(signForm, NGS.t.houseRules);
})();
