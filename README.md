# Next Ground Stay — site web

Site vitrine et de réservation directe de l'appartement Next Ground Stay (Westlands, Nairobi).
Anglais par défaut (`/`), français sur `/fr/`.

- **Générateur** : [Eleventy](https://www.11ty.dev/) (HTML statique, aucun framework côté navigateur).
- **Hébergement** : Netlify (offre gratuite), déployé automatiquement à chaque `git push`.
- **Formulaires** : Netlify Forms (demandes de réservation, signature du règlement intérieur).
- **Disponibilités** : fonction Netlify qui lit les calendriers iCal Airbnb et Booking.

---

## Modifier le contenu

Presque tout se change dans `src/_data/`, sans toucher aux gabarits :

| Fichier | Contenu |
|---|---|
| `site.js` | Contacts (WhatsApp, e-mail…), adresse, horaires, prix « à partir de » par devise |
| `i18n.js` | Tous les textes du site, en anglais et en français (accueil, FAQ, formulaires) |
| `home.js` | Photos, équipements, lieux du quartier et temps de trajet, avis |
| `legal.js` | Mentions légales, confidentialité, conditions de réservation, règlement intérieur |
| `routes.js` | Adresse de chaque page dans chaque langue |

Les valeurs entre accolades dans les textes (`{checkIn}`, `{guests}`…) sont remplacées
automatiquement : voir le filtre `fill` dans `eleventy.config.js`.

### Ajouter les photos

1. Déposer les fichiers originaux (jpg ou png, grande taille) dans `src/assets/photos/`.
2. Indiquer le nom de chaque fichier dans `src/_data/home.js` (champ `file`), dans l'ordre d'affichage.
   La première photo est la grande image d'accueil.

Au build, chaque photo est convertie automatiquement en plusieurs tailles (webp + jpeg).

### Ce qu'il ne faut jamais publier

Le dépôt et le site sont publics : **aucun code d'accès, mot de passe Wi-Fi ou lien iCal** dans le code.
Les liens iCal se règlent dans Netlify (voir plus bas).

---

## Travailler en local

Prérequis : Node.js 22.

```bash
npm install
npm start        # aperçu sur http://localhost:8080, rechargé à chaque modification
npm run build    # génère le site final dans _site/
```

En local, le calendrier des disponibilités et l'envoi des formulaires ne fonctionnent pas
(ils dépendent de Netlify). Pour les tester : `npx netlify-cli dev`.

---

## Structure

```
src/
  _data/            contenu et réglages (voir tableau ci-dessus)
  _includes/
    layouts/        gabarit commun (balises <head>, en-tête, pied de page)
    partials/       en-tête, pied de page, pictogrammes, monogramme
    sections/       sections de la page d'accueil, dans l'ordre d'affichage
  assets/           css, js, polices (Jost, licence OFL), images, photos
  index.njk         page d'accueil (générée en anglais et en français)
  legal.njk         pages légales
  house-rules.njk   règlement intérieur + signature (page non référencée)
netlify/functions/  availability.mjs : calendrier des disponibilités
eleventy.config.js  configuration et filtres
netlify.toml        build, fonctions, en-têtes HTTP
```

---

## Mise en ligne (une seule fois)

1. **GitHub** : créer un dépôt (privé ou public) et y pousser ce dossier.
2. **Netlify** : *Add new site > Import an existing project > GitHub*, choisir le dépôt.
   Les réglages de build sont lus dans `netlify.toml`, rien à saisir.
3. **Nom du site** : *Site configuration > Change site name* → `next-ground-stay`
   (adresse : https://next-ground-stay.netlify.app). Si le nom est pris, mettre à jour `url` dans `src/_data/site.js`.
4. **Calendriers** : *Site configuration > Environment variables > Add a variable*
   - Clé : `ICAL_URLS`
   - Valeur : le lien iCal Airbnb et le lien iCal Booking, séparés par une virgule.
   Puis *Deploys > Trigger deploy*.
5. **Formulaires** : *Forms > Enable form detection*, puis redéployer.
   Pour recevoir chaque demande par e-mail : *Site configuration > Notifications > Emails and webhooks > Form submission notifications*.
   Les signatures du règlement arrivent dans le formulaire `house-rules`, avec la date d'envoi.

Ensuite, chaque `git push` sur la branche principale met le site à jour en une minute environ.

### Statistiques de visite (facultatif, gratuit, sans cookies)

1. Créer un compte Cloudflare, puis *Analytics & Logs > Web Analytics > Add a site*, saisir l'adresse du site.
2. Copier le jeton (`token`) affiché dans l'extrait de code.
3. Le coller dans `src/_data/site.js` > `analytics.cloudflareToken`, puis pousser.

---

## Règlement intérieur

Page non référencée par les moteurs de recherche, à envoyer aux voyageurs avant l'arrivée :

- anglais : https://next-ground-stay.netlify.app/house-rules/
- français : https://next-ground-stay.netlify.app/fr/reglement-interieur/

Le voyageur coche, signe en saisissant son nom, et la confirmation arrive dans Netlify Forms.
Le code d'accès est ensuite envoyé par WhatsApp, jamais affiché sur le site.
En cas de modification du règlement, changer aussi la date `updated` dans `legal.js` :
elle est enregistrée avec chaque signature.

---

## À compléter avant la mise en ligne

Rechercher `TODO` dans le code :

- [ ] numéro WhatsApp et téléphone (`site.js`)
- [ ] prix en dollars et en shillings (`site.js`)
- [ ] relecture juridique des pages légales
