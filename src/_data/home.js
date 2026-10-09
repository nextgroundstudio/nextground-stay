// Contenu « structuré » de la page d accueil : photos, équipements, quartier, avis.
// Chaque libellé existe en anglais (en) et en français (fr).

export default {
  // Photos de l'appartement, dans l'ordre d'affichage.
  // Déposer les fichiers originaux (jpg/png) dans src/assets/photos/ et indiquer le nom ici.
  // Tant que « file » est vide, un emplacement neutre s'affiche à la place.
  // La première photo sert de grande image d'accueil.
  photos: [
    // 0 : grande image d'accueil (format paysage de préférence)
    { file: "hero-living-room.jpg", alt: { en: "Bright living room with green sofa", fr: "Séjour lumineux avec canapé vert" } },
    // 1 à 5 : mosaïque de la section « L'appartement » (même ordre que l'annonce)
    { file: "living-room.jpg", alt: { en: "Living room", fr: "Séjour" } },
    { file: "bedroom.jpg", alt: { en: "Bedroom with queen-size bed and balcony", fr: "Chambre avec lit queen size et balcon" } },
    { file: "rooftop-pool.jpg", alt: { en: "Rooftop pool overlooking Nairobi", fr: "Piscine sur le toit avec vue sur Nairobi" } },
    { file: "kitchen.jpg", alt: { en: "Equipped kitchen and dining table", fr: "Cuisine équipée et table à manger" } }, // TODO : remplacer par la photo de la salle de bain
    { file: "balcony-night.jpg", alt: { en: "Balcony at night, city view", fr: "Balcon de nuit, vue sur la ville" } },
    // Suite de la galerie complète
    { file: "city-view-night.jpg", alt: { en: "Night view of Westlands from the living room", fr: "Vue de nuit sur Westlands depuis le séjour" } },
    { file: "city-view-day.jpg", alt: { en: "Day view over Westlands", fr: "Vue de jour sur Westlands" } },
    { file: "living-kitchen.jpg", alt: { en: "Open-plan living room and kitchen", fr: "Séjour et cuisine ouverte" } },
    { file: "dining-kitchen.jpg", alt: { en: "Kitchen with washing machine", fr: "Cuisine avec lave-linge" } },
    { file: "table-detail.jpg", alt: { en: "Table setting", fr: "Table dressée" } },
    { file: "rooftop-terrace.jpg", alt: { en: "Rooftop terrace", fr: "Terrasse sur le toit" } },
    { file: "pool-table.jpg", alt: { en: "Pool table area", fr: "Espace billard" } },
    { file: "gym.jpg", alt: { en: "Residents' gym", fr: "Salle de sport de la résidence" } },
    { file: "garden.jpg", alt: { en: "Garden and walkway of the residence", fr: "Jardin et allée de la résidence" } },
    { file: "building.jpg", alt: { en: "Misty Springs building, Westlands Road", fr: "Immeuble Misty Springs, Westlands Road" } },
    { file: "entrance.jpg", alt: { en: "Building entrance", fr: "Entrée de l'immeuble" } },
    { file: "lobby-lounge.jpg", alt: { en: "Lobby lounge", fr: "Salon du hall d'entrée" } },
  ],

  // Équipements mis en avant (6 à 8 maximum). « icon » renvoie à src/_includes/partials/icons.njk.
  amenities: [
    { icon: "bed", en: "1 bedroom, en-suite · queen bed", fr: "1 chambre en-suite · lit queen size" },
    { icon: "people", en: "Up to 2 guests · 58 m²", fr: "Jusqu'à 2 voyageurs · 58 m²" },
    { icon: "view", en: "8th floor, balcony, view over GTC", fr: "8e étage, balcon, vue sur le GTC" },
    { icon: "wifi", en: "Fast Wi-Fi · smart TV (Netflix, YouTube)", fr: "Wi-Fi rapide · smart TV (Netflix, YouTube)" },
    { icon: "kitchen", en: "Equipped kitchen · washing machine", fr: "Cuisine équipée · lave-linge" },
    { icon: "lock", en: "Self check-in, smart lock", fr: "Arrivée autonome, serrure connectée" },
    { icon: "shield", en: "Security 24/7 · backup generator", fr: "Sécurité 24 h/24 · groupe électrogène" },
    { icon: "pool", en: "Rooftop pool · gym · pool table", fr: "Piscine sur le toit · salle de sport · billard" },
    { icon: "car", en: "Free secured parking", fr: "Parking gratuit et surveillé" },
    { icon: "gift", en: "Welcome basket and essentials", fr: "Panier d'accueil et produits de première nécessité" },
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
