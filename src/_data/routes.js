// Adresse de chaque page dans chaque langue.
// Sert au sélecteur de langue, aux balises hreflang, au sitemap et aux liens du pied de page.
// « hidden: true » = page non référencée (absente du sitemap, interdite aux moteurs de recherche).
export default {
  home: { en: "/", fr: "/fr/" },
  legal: { en: "/legal/", fr: "/fr/mentions-legales/" },
  privacy: { en: "/privacy/", fr: "/fr/confidentialite/" },
  terms: { en: "/booking-terms/", fr: "/fr/conditions-de-reservation/" },
  // Règlement intérieur : version publique (lecture avant réservation) et version à signer
  // (lien envoyé aux voyageurs après leur demande, non référencée).
  houseRules: { en: "/house-rules/", fr: "/fr/reglement-interieur/" },
  houseRulesSign: { en: "/house-rules/sign/", fr: "/fr/reglement-interieur/signer/", hidden: true },
};
