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
    { file: "bathroom.jpg", alt: { en: "En-suite bathroom with walk-in shower", fr: "Salle de bain attenante avec douche à l'italienne" } },
    { file: "balcony-night.jpg", alt: { en: "Balcony at night, city view", fr: "Balcon de nuit, vue sur la ville" } },
    { file: "kitchen.jpg", alt: { en: "Equipped kitchen and dining table", fr: "Cuisine équipée et table à manger" } },
    { file: "bathroom-wide.jpg", alt: { en: "Bathroom", fr: "Salle de bain" } },
    { file: "bathroom-shower.jpg", alt: { en: "Walk-in shower", fr: "Douche à l'italienne" } },
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
    { icon: "pool", en: "Heated rooftop pool · gym · pool table", fr: "Piscine chauffée sur le toit · salle de sport · billard" },
    { icon: "car", en: "Free secured parking", fr: "Parking gratuit et surveillé" },
    { icon: "gift", en: "Welcome basket and essentials", fr: "Panier d'accueil et produits de première nécessité" },
  ],

  // Liste complète des équipements, affichée dans « Voir tous les équipements ».
  amenitiesAll: [
    { title: { en: "Bedroom and bathroom", fr: "Chambre et salle de bain" }, items: {
      en: ["Queen-size bed", "En-suite bathroom", "Hot water", "Towels and bed linen", "Wardrobe", "Iron", "Fan", "Toiletries: shampoo, shower gel, body lotion", "Slippers, toothbrushes and toothpaste", "Sanitary pads and tampons"],
      fr: ["Lit queen size", "Salle de bain attenante", "Eau chaude", "Serviettes et linge de lit", "Armoire", "Fer à repasser", "Ventilateur", "Produits de toilette : shampoing, gel douche, crème pour le corps", "Chaussons, brosses à dents et dentifrice", "Serviettes hygiéniques et tampons"],
    } },
    { title: { en: "Kitchen", fr: "Cuisine" }, items: {
      en: ["Refrigerator", "Cooker and oven", "Microwave", "Kettle", "Toaster", "Cooker hood", "Cookware and tableware", "Dining table", "Washing machine", "Bottled water, tea, coffee, oil, salt, sugar and pepper"],
      fr: ["Réfrigérateur", "Cuisinière et four", "Micro-ondes", "Bouilloire", "Grille-pain", "Hotte", "Ustensiles de cuisine et vaisselle", "Table à manger", "Lave-linge", "Eau en bouteille, thé, café, huile, sel, sucre et poivre"],
    } },
    { title: { en: "Living and work", fr: "Séjour et travail" }, items: {
      en: ["Fast Wi-Fi", "Smart TV with Netflix and YouTube (your own accounts)", "Sofa", "Private balcony with city view"],
      fr: ["Wi-Fi rapide", "Smart TV avec Netflix et YouTube (vos propres comptes)", "Canapé", "Balcon privé avec vue sur la ville"],
    } },
    { title: { en: "Residence", fr: "Résidence" }, items: {
      en: ["Heated rooftop pool", "Rooftop terrace", "Gym", "Pool table area", "Children's playroom", "Free secured parking", "Lifts with badge access", "Security 24/7", "Backup generator"],
      fr: ["Piscine chauffée sur le toit", "Terrasse sur le toit", "Salle de sport", "Espace billard", "Salle de jeux pour enfants", "Parking gratuit et surveillé", "Ascenseurs avec badge", "Sécurité 24 h/24", "Groupe électrogène"],
    } },
    { title: { en: "Services", fr: "Services" }, items: {
      en: ["Self check-in with smart lock", "Cleaning every 3 days, included", "Welcome basket", "Hosts reachable on WhatsApp"],
      fr: ["Arrivée autonome, serrure connectée", "Ménage tous les 3 jours, inclus", "Panier d'accueil", "Hôtes joignables sur WhatsApp"],
    } },
  ],

  // Lieux proches et temps de trajet, tels qu'indiqués dans l'annonce et le guide de bienvenue.
  places: [
    { name: "GTC — Global Trade Centre", time: { en: "Walking distance", fr: "À pied" } },
    { name: "Eden Square", time: { en: "Walking distance", fr: "À pied" } },
    { name: { en: "Cafés and restaurants", fr: "Cafés et restaurants" }, time: { en: "Walking distance", fr: "À pied" } },
    { name: "The Mall Westlands · Naivas", time: { en: "A few minutes by car", fr: "Quelques minutes en voiture" } },
    { name: "Sarit Centre", time: { en: "A few minutes by car", fr: "Quelques minutes en voiture" } },
    { name: "Westgate Mall", time: { en: "A few minutes by car", fr: "Quelques minutes en voiture" } },
    { name: { en: "JKIA airport", fr: "Aéroport JKIA" }, time: { en: "About 25 min via the Expressway", fr: "Environ 25 min via l'Expressway" } },
  ],

  // Repères courts affichés sous la photo d'accueil (3 maximum).
  highlights: [
    { name: "GTC", time: { en: "walking distance", fr: "à pied" } },
    { name: "Sarit Centre", time: { en: "a few minutes", fr: "à quelques minutes" } },
    { name: { en: "Airport", fr: "Aéroport" }, time: { en: "about 25 min", fr: "environ 25 min" } },
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
