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
          "Payment by M-Pesa or bank transfer. The nightly rate is reduced from {reduced} nights; long stays are quoted on request.",
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
          "Paiement par M-Pesa ou virement bancaire. Tarif dégressif à partir de {reduced} nuits ; séjours longs sur devis.",
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
    updated: "2026-10-11",
    // Une entrée de p peut être un paragraphe (texte) ou un intertitre : { heading: "Gaz" }.
    en: {
      sections: [
        { h: "Arrival", p: [
          "Check-in from {checkIn}. If you arrive late, please let us know by message.",
          "Before your arrival, please send us the name of each guest.",
          "Have your passport ready to register with the building's security guards. On your first entry, go to reception to access the lift. Your lift badge is in the apartment, on the shoe cabinet by the entrance.",
          "Within 3 hours of your arrival, report any damage or missing item to us, with a photo, on WhatsApp or through the platform used for your booking. After this time, the apartment is considered received in good condition.",
        ] },
        { h: "Guests and visitors", p: [
          "Maximum {guests} guests. For any additional person, please contact us beforehand.",
          "Outside visitors are welcome for an occasional visit but may not stay overnight. They register with the building's security guards.",
          "You are responsible for your visitors while they are in the apartment and the building.",
        ] },
        { h: "In the apartment", p: [
          "Smoking is allowed on the balcony only, never inside the apartment. Please use the ashtray provided.",
          "No parties or events. No pets.",
          "No candles, incense or open flames.",
          "No shoes on the rug.",
          "Please respect the neighbors and the building's common areas. Quiet hours from 9 pm to 7 am.",
          "On the balcony, do not sit on the railing or place anything on it.",
        ] },
        { h: "Safety", p: [
          { heading: "Gas" },
          "Before cooking, check that all cooker knobs are off, then turn the gas regulator (in the cupboard) to ON. Turn it back to OFF when you have finished cooking.",
          "If you smell gas: do not light the cooker, do not touch any switch, turn the regulator to OFF, open the windows and contact us immediately.",
          { heading: "Electricity" },
          "Plug your devices into the power strips provided. Please do not use high-power appliances of your own (heaters, hot plates).",
          "During a power cut, unplug sensitive devices and plug them back in once the power is restored.",
          { heading: "Water" },
          "Never leave a tap, the shower or the washing machine running unattended.",
          "During a water cut, close any open taps: the water can come back at any time.",
          "Report any leak, damp patch or blocked drain to us immediately. A leak can damage the apartment below.",
          "Emergency numbers in Kenya: 999 or 112.",
        ] },
        { h: "Access and personal belongings", p: [
          "Every time you leave the apartment, close all windows and check that the door is locked. To enter, use your access code.",
          "Do not share your access code or lend the lift badge to anyone outside your booking.",
          "Keep your valuables (passport, cash, jewelry, laptop) with you or stored out of sight.",
          "We cannot be held responsible for the loss or theft of your personal belongings, unless we are at fault. We recommend travel insurance.",
        ] },
        { h: "Deposit and payment", p: [
          "For a stay of less than a month, a deposit of 50% of the stay amount is required at booking. The balance is paid no later than the day before arrival.",
          "For a stay of 30 days or more, a deposit of 50% of one month's price is required at booking; each month is then paid in two instalments: 50% at the start of the month, the balance no later than the 28th of the month.",
          "For a booking made through a platform, its payment terms apply.",
        ] },
        { h: "Damage and incidents", p: [
          "Please report any breakage, breakdown or incident to us immediately, on WhatsApp or through the platform used for your booking. Accidents happen: telling us quickly often helps limit the cost.",
          "Normal wear and tear is never charged. Damage, breakage or missing items caused during your stay, by you or your visitors, are at your expense (cost of repair or replacement).",
          "The same applies to damage caused to the building or to neighbors, for example a leak from a tap left running.",
          "In case of theft or break-in: tell us immediately, do not touch anything and wait for our instructions before reporting it to the police.",
          "In the event of a serious breach of these rules (party, undeclared guests, danger to people or property), we may end the stay without refunding the remaining nights.",
        ] },
        { h: "Waste", p: ["Full rubbish bags go to the bins in the building's courtyard, except on cleaning days."] },
        { h: "Departure", p: [
          "Check-out by {checkOut}. Late check-out is possible on request, for an additional fee.",
          "Before leaving: close all windows, switch off all appliances and close the taps, place used towels on the shower floor, close the rubbish bags and leave them in the kitchen bin, check you have all your belongings.",
          "Return the lift badge to the first shelf of the shoe cabinet by the entrance, next to the vase.",
        ] },
      ],
    },
    fr: {
      sections: [
        { h: "Arrivée", p: [
          "Arrivée dès {checkIn}. En cas d'arrivée tardive, merci de nous prévenir par message.",
          "Avant votre arrivée, merci de nous envoyer le nom de chaque voyageur.",
          "Munissez-vous de votre passeport pour vous enregistrer auprès des gardes de la résidence. Lors du premier passage, présentez-vous à l'accueil pour accéder à l'ascenseur. Votre badge d'ascenseur se trouve dans l'appartement, sur le meuble à chaussures de l'entrée.",
          "Dans les 3 h suivant votre arrivée, signalez-nous tout dommage ou équipement manquant, avec une photo, sur WhatsApp ou via la plateforme utilisée pour votre réservation. Passé ce délai, l'appartement est considéré comme reçu en bon état.",
        ] },
        { h: "Voyageurs et visiteurs", p: [
          "{guests} voyageurs au maximum. Pour toute personne supplémentaire, contactez-nous au préalable.",
          "Les visiteurs extérieurs sont acceptés pour une visite ponctuelle, mais ne peuvent pas dormir sur place. Ils s'enregistrent auprès des gardes de la résidence.",
          "Vous êtes responsable de vos visiteurs pendant leur présence dans l'appartement et la résidence.",
        ] },
        { h: "Dans l'appartement", p: [
          "Il est permis de fumer uniquement sur le balcon, jamais dans l'appartement. Merci d'utiliser le cendrier mis à disposition.",
          "Fêtes et événements interdits. Animaux non autorisés.",
          "Pas de bougies, d'encens ni de flamme nue.",
          "Pas de chaussures sur le tapis.",
          "Merci de respecter le voisinage et les espaces communs de la résidence. Silence entre 21 h et 7 h.",
          "Sur le balcon, ne vous asseyez pas sur le garde-corps et ne posez rien dessus.",
        ] },
        { h: "Sécurité", p: [
          { heading: "Gaz" },
          "Avant de cuisiner, vérifiez que tous les boutons de la cuisinière sont sur arrêt, puis tournez le régulateur de gaz (dans le placard) sur « ON ». Remettez-le sur « OFF » une fois la cuisson terminée.",
          "En cas d'odeur de gaz : n'allumez pas la cuisinière, n'actionnez aucun interrupteur, mettez le régulateur sur « OFF », ouvrez les fenêtres et contactez-nous immédiatement.",
          { heading: "Électricité" },
          "Branchez vos appareils sur les multiprises fournies. Merci de ne pas utiliser d'appareils de forte puissance apportés par vous (chauffage, plaque de cuisson).",
          "En cas de coupure de courant, débranchez les appareils sensibles et rebranchez-les une fois le courant revenu.",
          { heading: "Eau" },
          "Ne laissez jamais un robinet, la douche ou la machine à laver fonctionner sans surveillance.",
          "En cas de coupure d'eau, fermez les robinets ouverts : l'eau peut revenir à tout moment.",
          "Signalez-nous immédiatement toute fuite, trace d'humidité ou évacuation bouchée. Une fuite peut endommager l'appartement du dessous.",
          "Numéros d'urgence au Kenya : 999 ou 112.",
        ] },
        { h: "Accès et objets personnels", p: [
          "Chaque fois que vous quittez l'appartement, fermez toutes les fenêtres et vérifiez que la porte est bien verrouillée. Pour entrer, utilisez votre code d'accès.",
          "Ne communiquez pas votre code d'accès et ne confiez pas le badge d'ascenseur à une personne extérieure.",
          "Gardez vos objets de valeur (passeport, argent, bijoux, ordinateur) sur vous ou rangés hors de vue.",
          "Nous ne pouvons être tenus responsables de la perte ou du vol de vos effets personnels, sauf faute de notre part. Nous vous recommandons une assurance voyage.",
        ] },
        { h: "Acompte et paiement", p: [
          "Pour un séjour de moins d'un mois, un acompte de 50 % du montant du séjour est demandé à la réservation. Le solde est réglé au plus tard la veille de l'arrivée.",
          "Pour un séjour de 30 jours ou plus, un acompte de 50 % du prix d'un mois est demandé à la réservation, puis chaque mois est réglé en deux fois : 50 % en début de mois, le solde au plus tard le 28 du mois.",
          "Pour une réservation via une plateforme, ses conditions de paiement s'appliquent.",
        ] },
        { h: "Dommages et incidents", p: [
          "Merci de nous signaler immédiatement toute casse, panne ou incident, sur WhatsApp ou via la plateforme utilisée pour votre réservation. Un accident peut arriver : prévenir vite nous permet souvent d'en limiter le coût.",
          "L'usure normale n'est jamais facturée. Les dégâts, casses ou objets manquants causés pendant votre séjour, par vous ou vos visiteurs, sont à votre charge (coût de réparation ou de remplacement).",
          "Il en va de même pour les dégâts causés à la résidence ou aux voisins, par exemple une fuite due à un robinet laissé ouvert.",
          "En cas de vol ou d'effraction : prévenez-nous immédiatement, ne touchez à rien et attendez nos instructions pour la déclaration à la police.",
          "En cas de manquement grave à ce règlement (fête, personnes non déclarées, danger pour les personnes ou les biens), nous pouvons mettre fin au séjour sans remboursement des nuits restantes.",
        ] },
        { h: "Déchets", p: ["Les sacs pleins sont à déposer dans les poubelles de la cour de l'immeuble, sauf les jours de ménage."] },
        { h: "Départ", p: [
          "Départ avant {checkOut}. Départ tardif possible sur demande, avec supplément.",
          "Avant de partir : fermez toutes les fenêtres, éteignez tous les appareils et fermez les robinets, déposez les serviettes utilisées au sol de la douche, fermez les sacs poubelle et laissez-les dans la poubelle de la cuisine, vérifiez que vous n'oubliez rien.",
          "Reposez le badge d'ascenseur sur la première étagère du meuble à chaussures de l'entrée, à côté du vase.",
        ] },
      ],
    },
  },
};
