// Langues du site. La première est la langue par défaut, servie à la racine « / ».
// Chaque page est générée une fois par langue (voir la pagination dans src/pages).
// currency : devise affichée par défaut (le visiteur peut en changer dans l'en-tête).
export default [
  { code: "en", locale: "en-US", label: "EN", prefix: "", currency: "USD" },
  { code: "fr", locale: "fr-FR", label: "FR", prefix: "/fr", currency: "EUR" },
];
