// Contenu « structuré » de la page d accueil : photos, équipements, quartier, avis.
// Chaque libellé existe en anglais (en) et en français (fr).

export default {
  // Photos de l'appartement, dans l'ordre d'affichage.
  // Déposer les fichiers originaux (jpg/png) dans src/assets/photos/ et indiquer le nom ici.
  // Tant que « file » est vide, un emplacement neutre s'affiche à la place.
  // La première photo sert de grande image d'accueil.
  photos: [
    { file: "", alt: { en: "Living room and balcony overlooking Westlands", fr: "Séjour et balcon avec vue sur Westlands" } },
    { file: "", alt: { en: "Bedroom with queen-size bed", fr: "Chambre avec lit queen size" } },
    { file: "", alt: { en: "Equipped kitchen", fr: "Cuisine équipée" } },
    { file: "", alt: { en: "En-suite bathroom", fr: "Salle de bain attenante" } },
    { file: "", alt: { en: "Balcony view over GTC", fr: "Vue du balcon sur le GTC" } },
  ],

  // Équipements mis en avant (6 à 8 maximum). « icon » renvoie à src/_includes/partials/icons.njk.
  amenities: [
    { icon: "bed", en: "1 bedroom, en-suite · queen bed", fr: "1 chambre en-suite · lit queen size" },
    { icon: "people", en: "Up to 2 guests", fr: "Jusqu'à 2 voyageurs" },
    { icon: "view", en: "8th floor, balcony, GTC view", fr: "8e étage, balcon, vue sur le GTC" },
    { icon: "wifi", en: "Fast Wi-Fi · smart TV", fr: "Wi-Fi rapide · smart TV" },
    { icon: "kitchen", en: "Equipped kitchen · washing machine", fr: "Cuisine équipée · lave-linge" },
    { icon: "lock", en: "Self check-in, smart lock", fr: "Arrivée autonome, serrure connectée" },
    { icon: "shield", en: "Security & concierge 24/7", fr: "Sécurité et conciergerie 24 h/24, 7 j/7" },
    { icon: "pool", en: "Rooftop pool & gym", fr: "Piscine sur le toit et salle de sport" }, // TODO : confirmer
  ],

  // Lieux proches et temps de trajet INDICATIFS.
  // TODO : chronométrer sur place (aéroport à 7 h, 12 h et 18 h) et ajuster.
  places: [
    { name: "GTC — Global Trade Centre", time: { en: "5 min walk", fr: "5 min à pied" } },
    { name: "Eden Square", time: { en: "5–10 min walk", fr: "5–10 min à pied" } },
    { name: "The Mall Westlands · Naivas", time: { en: "5 min by car", fr: "5 min en voiture" } },
    { name: "Sarit Centre", time: { en: "5–10 min by car", fr: "5–10 min en voiture" } },
    { name: "Westgate Mall", time: { en: "5–10 min by car", fr: "5–10 min en voiture" } },
    { name: { en: "Nairobi CBD", fr: "Centre-ville (CBD)" }, time: { en: "10–20 min by car", fr: "10–20 min en voiture" } },
    { name: { en: "JKIA airport", fr: "Aéroport JKIA" }, time: { en: "25–45 min via the Expressway", fr: "25–45 min via l'Expressway" } },
  ],

  // Repères courts affichés sous la photo d'accueil (3 maximum).
  highlights: [
    { name: "GTC", time: { en: "5 min walk", fr: "5 min à pied" } },
    { name: "Sarit Centre", time: { en: "5–10 min", fr: "5–10 min" } },
    { name: { en: "Airport", fr: "Aéroport" }, time: { en: "25–45 min", fr: "25–45 min" } },
  ],

  // Avis voyageurs, avec leur accord. Texte d'origine, seules les fautes de frappe sont corrigées.
  reviews: {
    rating: "5.0",
    count: 2,
    items: [
      {
        name: "Nancy",
        lang: "en",
        text: "I had a lovely stay at Amanda's. The home is exactly as pictured, with many thoughtful touches and provisions for guests.",
        meta: { en: "2026", fr: "2026" },
      },
      {
        name: "Andreas",
        lang: "en",
        text: "Amanda and Lysiane were great hosts. Always responsive, helpful and friendly. The apartment is practical and beautifully decorated. It has everything you could wish for. I want to highlight how cozy the couch is. Thank you so much for hosting us!",
        meta: { en: "Stayed more than a week · 2026", fr: "Séjour de plus d'une semaine · 2026" },
      },
    ],
  },
};
