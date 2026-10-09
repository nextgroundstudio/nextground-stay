// Pages légales et règlement intérieur, en anglais et en français.
// Chaque page = un titre, une date de mise à jour et une liste de sections { h: titre, p: [paragraphes] }.
// Les valeurs entre {accolades} viennent de src/_data/site.js.
// À faire relire par un juriste avant toute modification importante.

export default {
  // ------------------------------------------------------------------ Mentions légales
  legal: {
    updated: "2026-10-09",
    en: {
      title: "Legal notice",
      sections: [
        { h: "Publisher", p: [
          "This website is published by {company}, a private limited company registered in Nairobi, Kenya.",
          "Registered office: Nairobi, Kenya. Contact: {email} · {phone}.",
          "Publication directors: Amanda and Lysiane, co-founders.",
        ] },
        { h: "Hosting", p: ["The website is hosted by Netlify, Inc., San Francisco, California, United States (netlify.com)."] },
        { h: "Intellectual property", p: [
          "The texts, photographs, logos and visual identity of Next Ground Stay belong to {company}. Any reproduction without prior written consent is prohibited.",
          "The Jost typeface is used under the SIL Open Font License.",
        ] },
        { h: "Information", p: ["Prices, availability and travel times shown on this website are indicative. Only the written confirmation sent with your booking is binding."] },
      ],
    },
    fr: {
      title: "Mentions légales",
      sections: [
        { h: "Éditeur", p: [
          "Ce site est édité par {company}, société à responsabilité limitée immatriculée à Nairobi, Kenya.",
          "Siège : Nairobi, Kenya. Contact : {email} · {phone}.",
          "Directrices de la publication : Amanda et Lysiane, co-fondatrices.",
        ] },
        { h: "Hébergement", p: ["Le site est hébergé par Netlify, Inc., San Francisco, Californie, États-Unis (netlify.com)."] },
        { h: "Propriété intellectuelle", p: [
          "Les textes, photographies, logos et l'identité visuelle de Next Ground Stay appartiennent à {company}. Toute reproduction sans accord écrit préalable est interdite.",
          "La police Jost est utilisée sous licence SIL Open Font License.",
        ] },
        { h: "Informations", p: ["Les prix, disponibilités et temps de trajet indiqués sur ce site sont donnés à titre indicatif. Seule la confirmation écrite envoyée avec votre réservation fait foi."] },
      ],
    },
  },

  // ------------------------------------------------------------------ Confidentialité
  privacy: {
    updated: "2026-10-09",
    en: {
      title: "Privacy policy",
      sections: [
        { h: "Who is responsible", p: ["{company}, Nairobi, Kenya, is responsible for the personal data collected on this website. Contact: {email}."] },
        { h: "What we collect", p: [
          "Booking request form: name, WhatsApp number or email address, dates, number of guests and your message.",
          "House rules confirmation: full name, dates of stay, contact details and typed signature, with the date and time of confirmation.",
          "If you contact us on WhatsApp, your messages are handled through WhatsApp (Meta) under its own privacy policy.",
        ] },
        { h: "Why", p: ["To answer your request, manage your booking and your stay, and keep a record of the house rules you accepted. We never sell your data or use it for advertising."] },
        { h: "Who processes it", p: ["Form submissions are stored by Netlify, Inc. (United States), our hosting provider. Visit statistics are measured with Cloudflare Web Analytics, without cookies and without identifying you."] },
        { h: "How long", p: ["Booking requests that do not lead to a stay are deleted after 12 months. Data related to a stay is kept for 5 years after the stay, for accounting and legal purposes."] },
        { h: "Cookies", p: ["This website does not use advertising or tracking cookies. The Google map is only loaded if you click to display it; Google may then set its own cookies."] },
        { h: "Your rights", p: [
          "Under the Kenya Data Protection Act 2019 and, for visitors in the European Union, the GDPR, you can access, correct or delete your data and object to its use. Write to {email}.",
          "You can also lodge a complaint with the Office of the Data Protection Commissioner (Kenya) or the data protection authority of your country.",
        ] },
      ],
    },
    fr: {
      title: "Politique de confidentialité",
      sections: [
        { h: "Responsable", p: ["{company}, Nairobi, Kenya, est responsable des données personnelles collectées sur ce site. Contact : {email}."] },
        { h: "Données collectées", p: [
          "Formulaire de demande de réservation : nom, numéro WhatsApp ou adresse e-mail, dates, nombre de voyageurs et votre message.",
          "Confirmation du règlement intérieur : nom complet, dates du séjour, coordonnées et signature saisie, avec la date et l'heure de la confirmation.",
          "Si vous nous écrivez sur WhatsApp, vos messages transitent par WhatsApp (Meta), selon sa propre politique de confidentialité.",
        ] },
        { h: "Finalités", p: ["Répondre à votre demande, gérer votre réservation et votre séjour, et conserver la trace du règlement accepté. Vos données ne sont jamais vendues ni utilisées à des fins publicitaires."] },
        { h: "Sous-traitants", p: ["Les formulaires sont stockés par Netlify, Inc. (États-Unis), notre hébergeur. Les statistiques de visite sont mesurées avec Cloudflare Web Analytics, sans cookies et sans vous identifier."] },
        { h: "Durée de conservation", p: ["Les demandes sans suite sont supprimées après 12 mois. Les données liées à un séjour sont conservées 5 ans après le séjour, pour des raisons comptables et légales."] },
        { h: "Cookies", p: ["Ce site n'utilise pas de cookies publicitaires ni de suivi. La carte Google ne se charge que si vous cliquez pour l'afficher ; Google peut alors déposer ses propres cookies."] },
        { h: "Vos droits", p: [
          "Conformément au Kenya Data Protection Act 2019 et, pour les visiteurs situés dans l'Union européenne, au RGPD, vous pouvez accéder à vos données, les rectifier, les supprimer ou vous opposer à leur utilisation. Écrivez à {email}.",
          "Vous pouvez aussi adresser une réclamation à l'Office of the Data Protection Commissioner (Kenya) ou à l'autorité de protection des données de votre pays.",
        ] },
      ],
    },
  },

  // ------------------------------------------------------------------ Conditions de réservation
  terms: {
    updated: "2026-10-09",
    en: {
      title: "Booking terms",
      sections: [
        { h: "How to book", p: [
          "Send your dates by WhatsApp or through the form. We check availability and confirm in writing the total price, currency, payment terms and cancellation policy.",
          "The booking is confirmed once payment has been received under the terms stated in that written confirmation.",
        ] },
        { h: "Price and payment", p: [
          "The price shown is a starting nightly rate. The total price confirmed in writing includes cleaning every {cleaning} days. There are no service fees.",
          "Payment by bank transfer or M-Pesa. The nightly rate is reduced from {reduced} nights; stays of {long} nights or more are quoted on request.",
        ] },
        { h: "Cancellation", p: [
          "More than 72 hours before arrival: free cancellation, full refund.",
          "Between 72 and 24 hours before arrival: 50% of the booking amount is due.",
          "Less than 24 hours before arrival: 75% of the booking amount is due.",
        ] },
        { h: "Arrival and departure", p: [
          "Check-in from {checkIn} (self check-in with a smart lock), check-out by {checkOut}. Early check-in is possible for an additional fee, subject to availability.",
          "The apartment hosts a maximum of {guests} guests.",
        ] },
        { h: "During your stay", p: ["Guests agree to follow the house rules, sent before arrival. Any damage must be reported to us without delay."] },
      ],
    },
    fr: {
      title: "Conditions de réservation",
      sections: [
        { h: "Réserver", p: [
          "Envoyez vos dates sur WhatsApp ou par le formulaire. Nous vérifions la disponibilité et vous confirmons par écrit le prix total, la devise, les modalités de paiement et les conditions d'annulation.",
          "La réservation est ferme à réception du paiement, selon les modalités indiquées dans cette confirmation écrite.",
        ] },
        { h: "Prix et paiement", p: [
          "Le prix affiché est un tarif de départ par nuit. Le prix total confirmé par écrit comprend le ménage tous les {cleaning} jours. Aucun frais de service n'est ajouté.",
          "Paiement par virement bancaire ou M-Pesa. Tarif dégressif à partir de {reduced} nuits ; séjours de {long} nuits ou plus sur devis.",
        ] },
        { h: "Annulation", p: [
          "Plus de 72 heures avant l'arrivée : annulation gratuite, remboursement intégral.",
          "Entre 72 et 24 heures avant l'arrivée : 50 % du montant de la réservation est dû.",
          "Moins de 24 heures avant l'arrivée : 75 % du montant de la réservation est dû.",
        ] },
        { h: "Arrivée et départ", p: [
          "Arrivée dès {checkIn} (en autonomie, serrure connectée), départ avant {checkOut}. Arrivée anticipée possible moyennant un supplément, selon les disponibilités.",
          "L'appartement accueille {guests} voyageurs au maximum.",
        ] },
        { h: "Pendant le séjour", p: ["Les voyageurs s'engagent à respecter le règlement intérieur, envoyé avant l'arrivée. Tout dommage doit nous être signalé sans délai."] },
      ],
    },
  },

  // ------------------------------------------------------------------ Règlement intérieur (page non référencée)
  // TODO : aligner ces règles sur le guide de bienvenue. Ne JAMAIS écrire ici de code d'accès ni de mot de passe :
  // cette page est publique pour quiconque connaît son adresse.
  houseRules: {
    updated: "2026-10-09",
    en: {
      sections: [
        { h: "Arrival and departure", p: ["Check-in from {checkIn}, check-out by {checkOut}. Early check-in or late check-out only with our prior written agreement."] },
        { h: "Guests", p: ["Maximum {guests} guests. Only registered guests may stay overnight. Please tell us in advance about any visitor; the building's security team may ask for identification."] },
        { h: "Respect for the building", p: ["No parties or events. Quiet hours from 10 pm to 7 am. Shared facilities (pool, gym, lifts) are used according to the building's own rules."] },
        { h: "Smoking", p: ["Smoking is not allowed inside the apartment."] },
        { h: "Care of the apartment", p: ["Please treat the apartment as your own. Report any damage or breakdown to us immediately on WhatsApp. Close the windows and balcony door when you go out."] },
        { h: "Access", p: ["Your access code is personal: do not share it. It is deactivated at the end of your stay."] },
        { h: "Departure", p: ["Before leaving, please put dishes away, take out the rubbish, switch off the lights and appliances, and close the door properly."] },
      ],
    },
    fr: {
      sections: [
        { h: "Arrivée et départ", p: ["Arrivée dès {checkIn}, départ avant {checkOut}. Arrivée anticipée ou départ tardif uniquement avec notre accord écrit préalable."] },
        { h: "Voyageurs", p: ["{guests} voyageurs au maximum. Seuls les voyageurs déclarés peuvent dormir sur place. Prévenez-nous de toute visite ; la sécurité de l'immeuble peut demander une pièce d'identité."] },
        { h: "Respect de l'immeuble", p: ["Pas de fêtes ni d'événements. Calme de 22 h à 7 h. Les espaces communs (piscine, salle de sport, ascenseurs) s'utilisent selon le règlement de l'immeuble."] },
        { h: "Tabac", p: ["Il est interdit de fumer à l'intérieur de l'appartement."] },
        { h: "Soin de l'appartement", p: ["Merci de prendre soin de l'appartement comme du vôtre. Signalez-nous immédiatement sur WhatsApp toute casse ou panne. Fermez les fenêtres et la porte du balcon en sortant."] },
        { h: "Accès", p: ["Votre code d'accès est personnel : ne le communiquez pas. Il est désactivé à la fin de votre séjour."] },
        { h: "Départ", p: ["Avant de partir, merci de ranger la vaisselle, sortir les poubelles, éteindre les lumières et les appareils, et bien fermer la porte."] },
      ],
    },
  },
};
