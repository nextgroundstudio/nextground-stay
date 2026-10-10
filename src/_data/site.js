// Informations générales du site : contacts, adresse, tarifs, règles de séjour.
// C'est le fichier à modifier en priorité pour mettre à jour les infos pratiques.
// Les textes affichés (FR / EN) sont dans src/_data/i18n.js.

export default {
  name: "Next Ground Stay",
  // Nom de l'appartement, affiché dans la section « L'appartement ».
  apartmentName: "Amani",
  // Adresse publique du site (sert aux liens de partage, au sitemap et au SEO).
  url: "https://nextground-stay.netlify.app",
  company: "Djo & Don Management Limited",

  contact: {
    // Numéro WhatsApp au format international, chiffres uniquement (sans +, sans espaces).
    whatsapp: "254723642373", // WhatsApp Business Next Ground Stay
    whatsappDisplay: "+254 723 642 373",
    phone: "+254 723 642 373",
    email: "nextground.corp@gmail.com",
    instagram: "https://www.instagram.com/nextgroundstay/",
    // Les horaires de réponse (9 h – 22 h, heure de Nairobi) sont écrits dans i18n.js.
  },

  address: {
    building: "Misty Springs",
    street: "Westlands Road",
    district: "Westlands",
    city: "Nairobi",
    country: "Kenya",
    countryCode: "KE",
    floor: 8,
    // Position exacte de l'immeuble, utilisée pour la carte et le lien Google Maps.
    // Pour la modifier : clic droit sur le bâtiment dans Google Maps > copier les coordonnées.
    lat: -1.267943,
    lng: 36.80698,
  },

  stay: {
    checkIn: "15:00", // format 24 h, pour les moteurs de recherche
    checkOut: "11:00",
    // Mêmes horaires, tels qu'écrits dans les textes de chaque langue.
    checkInLabel: { en: "3 pm", fr: "15 h" },
    checkOutLabel: { en: "11 am", fr: "11 h" },
    maxGuests: 2,
    sizeM2: 58,
    reducedRateFromNights: 15,
    longStayFromNights: 30,
    cleaningEveryDays: 3,
  },

  // Devises proposées. La première de la liste est affichée par défaut.
  currencies: ["USD", "EUR", "KES"],
  currencySymbols: { USD: "$", EUR: "€", KES: "KSh " },

  // Prix « à partir de » par nuit, saisis à la main dans chaque devise
  // (pas de conversion automatique : ce sont vos prix, arrondis comme vous le souhaitez).
  prices: {
    nightlyFrom: { USD: 70, EUR: 60, KES: 8720 },
  },

  // Statistiques de visite Cloudflare Web Analytics (gratuit, sans cookies).
  // Laisser vide pour désactiver. Voir README > Statistiques.
  analytics: {
    cloudflareToken: "",
  },
};
