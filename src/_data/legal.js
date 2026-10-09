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
  // Repris du guide de bienvenue. Ne JAMAIS écrire ici de code d'accès ni de mot de passe Wi-Fi :
  // cette page est publique pour quiconque connaît son adresse. Ces informations sont envoyées sur WhatsApp.
  houseRules: {
    updated: "2026-10-09",
    en: {
      sections: [
        { h: "Arrival", p: [
          "Check-in from {checkIn}. If you arrive late, please let us know by message.",
          "Have your passport ready to register with the building's security guards. On your first entry, go to reception to access the lift. Your lift badge is in the apartment, on the shoe cabinet by the entrance.",
        ] },
        { h: "Guests and visitors", p: [
          "Maximum {guests} guests. For any additional guest, please contact us first.",
          "Outside visitors are welcome for occasional visits but may not stay overnight.",
        ] },
        { h: "In the apartment", p: [
          "Smoking is allowed on the balcony only.", // TODO : la version française du guide dit « interdiction de fumer » : à trancher
          "No parties or events. No pets.",
          "Please do not walk on the rug with shoes.",
          "Respect the neighbors and the building's common areas.",
        ] },
        { h: "Safety", p: [
          "Before cooking, check that all cooker knobs are off, then turn the gas regulator (in the cupboard) to ON. Turn it back to OFF when you have finished.",
          "If you smell gas: do not switch on the cooker or any electrical switch, turn the regulator to OFF, open the windows and contact us immediately.",
          "Emergency numbers in Kenya: 999 or 112.",
        ] },
        { h: "Waste", p: ["Full rubbish bags are taken to the bins in the building's courtyard, except on cleaning days."] },
        { h: "Damage", p: ["Please report any damage or breakdown to us immediately on WhatsApp."] },
        { h: "Departure", p: [
          "Check-out by {checkOut}. Late check-out is possible on request, for an additional fee.",
          "Before leaving: close all windows, switch off all appliances, place used towels on the shower floor, close the rubbish bags and leave them in the kitchen bin, check you have all your belongings.",
          "Return the lift badge to the first shelf of the shoe cabinet by the entrance, next to the vase.",
        ] },
      ],
    },
    fr: {
      sections: [
        { h: "Arrivée", p: [
          "Arrivée dès {checkIn}. En cas d'arrivée tardive, merci de nous prévenir par message.",
          "Munissez-vous de votre passeport pour vous enregistrer auprès des gardes de la résidence. Lors du premier passage, présentez-vous à l'accueil pour accéder à l'ascenseur. Votre badge d'ascenseur se trouve dans l'appartement, sur le meuble à chaussures de l'entrée.",
        ] },
        { h: "Voyageurs et visiteurs", p: [
          "{guests} voyageurs au maximum. Pour toute personne supplémentaire, contactez-nous au préalable.",
          "Les visiteurs extérieurs sont acceptés pour une visite ponctuelle, mais ne peuvent pas dormir sur place.",
        ] },
        { h: "Dans l'appartement", p: [
          "Il est interdit de fumer, sauf sur le balcon.", // TODO : à trancher avec la version française du guide (« interdiction de fumer »)
          "Fêtes et événements interdits. Animaux non autorisés.",
          "Pas de chaussures sur le tapis.",
          "Merci de respecter le voisinage et les espaces communs de la résidence.",
        ] },
        { h: "Sécurité", p: [
          "Avant de cuisiner, vérifiez que tous les boutons de la cuisinière sont sur arrêt, puis tournez le régulateur de gaz (dans le placard) sur « ON ». Remettez-le sur « OFF » une fois la cuisson terminée.",
          "En cas d'odeur de gaz : n'allumez pas la cuisinière, n'actionnez aucun interrupteur, mettez le régulateur sur « OFF », ouvrez les fenêtres et contactez-nous immédiatement.",
          "Numéros d'urgence au Kenya : 999 ou 112.",
        ] },
        { h: "Déchets", p: ["Les sacs pleins sont à déposer dans les poubelles de la cour de l'immeuble, sauf les jours de ménage."] },
        { h: "Dommages", p: ["Merci de nous signaler immédiatement sur WhatsApp toute casse ou panne."] },
        { h: "Départ", p: [
          "Départ avant {checkOut}. Départ tardif possible sur demande, avec supplément.",
          "Avant de partir : fermez toutes les fenêtres, éteignez tous les appareils, déposez les serviettes utilisées au sol de la douche, fermez les sacs poubelle et laissez-les dans la poubelle de la cuisine, vérifiez que vous n'oubliez rien.",
          "Reposez le badge d'ascenseur sur la première étagère du meuble à chaussures de l'entrée, à côté du vase.",
        ] },
      ],
    },
  },
};
