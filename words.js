const WORDS = [
  [
    "Bonjour Madame",
    "Hello Madam",
    "bon-zhoor mah-dam",
    "Polite"
  ],
  [
    "Bonjour Monsieur",
    "Hello Sir",
    "bon-zhoor muh-syuh",
    "Polite"
  ],
  [
    "Bonsoir Madame",
    "Good evening Madam",
    "bon-swahr mah-dam",
    "Polite"
  ],
  [
    "Bonsoir Monsieur",
    "Good evening Sir",
    "bon-swahr muh-syuh",
    "Polite"
  ],
  [
    "Merci beaucoup",
    "Thank you very much",
    "mehr-see bo-koo",
    "Polite"
  ],
  [
    "Non merci",
    "No thank you",
    "nohn mehr-see",
    "Polite"
  ],
  [
    "Oui merci",
    "Yes thank you",
    "wee mehr-see",
    "Polite"
  ],
  [
    "Très bien",
    "Very good",
    "tray byan",
    "Polite"
  ],
  [
    "À bientôt",
    "See you soon",
    "ah byan-toh",
    "Polite"
  ],
  [
    "Bonne journée",
    "Have a good day",
    "bun zhoor-nay",
    "Polite"
  ],
  [
    "Bonne soirée",
    "Have a good evening",
    "bun swah-ray",
    "Polite"
  ],
  [
    "Bonne nuit",
    "Good night",
    "bun nwee",
    "Polite"
  ],
  [
    "Excusez-moi",
    "Excuse me",
    "ex-koo-zay mwah",
    "Polite"
  ],
  [
    "Pardon Madame",
    "Sorry Madam",
    "par-don mah-dam",
    "Polite"
  ],
  [
    "Avec plaisir",
    "With pleasure",
    "ah-vek play-zeer",
    "Polite"
  ],
  [
    "Un café",
    "A coffee",
    "un kah-fay",
    "Café"
  ],
  [
    "Un thé",
    "A tea",
    "un tay",
    "Café"
  ],
  [
    "Un croissant",
    "A croissant",
    "un krwah-son",
    "Bakery"
  ],
  [
    "Une baguette",
    "A baguette",
    "une bah-get",
    "Bakery"
  ],
  [
    "Du pain",
    "Some bread",
    "dew pan",
    "Bakery"
  ],
  [
    "De l’eau",
    "Some water",
    "duh low",
    "Café"
  ],
  [
    "Sans sucre",
    "Without sugar",
    "son sew-kruh",
    "Café"
  ],
  [
    "Avec lait",
    "With milk",
    "ah-vek lay",
    "Café"
  ],
  [
    "Sans lait",
    "Without milk",
    "son lay",
    "Café"
  ],
  [
    "Très chaud",
    "Very hot",
    "tray show",
    "Café"
  ],
  [
    "Pas chaud",
    "Not hot",
    "pah show",
    "Café"
  ],
  [
    "Une table",
    "A table",
    "une tahbl",
    "Café"
  ],
  [
    "La carte",
    "The menu",
    "lah kart",
    "Café"
  ],
  [
    "L’addition",
    "The bill",
    "lah-dee-see-on",
    "Café"
  ],
  [
    "Un sac",
    "A bag",
    "un sak",
    "Shopping"
  ],
  [
    "Un reçu",
    "A receipt",
    "un ruh-sew",
    "Shopping"
  ],
  [
    "Par carte",
    "By card",
    "par kart",
    "Shopping"
  ],
  [
    "En espèces",
    "In cash",
    "on es-pess",
    "Shopping"
  ],
  [
    "C’est combien",
    "How much is it",
    "say kom-by-an",
    "Shopping"
  ],
  [
    "Trop cher",
    "Too expensive",
    "troh shair",
    "Shopping"
  ],
  [
    "Pas cher",
    "Not expensive",
    "pah shair",
    "Shopping"
  ],
  [
    "C’est bon",
    "It is good",
    "say bon",
    "Shopping"
  ],
  [
    "C’est parfait",
    "It is perfect",
    "say par-fay",
    "Shopping"
  ],
  [
    "Je prends",
    "I’ll take",
    "zhuh pron",
    "Shopping"
  ],
  [
    "Je voudrais",
    "I would like",
    "zhuh voo-dray",
    "Shopping"
  ],
  [
    "Où est",
    "Where is",
    "oo ay",
    "Directions"
  ],
  [
    "C’est où",
    "Where is it",
    "say oo",
    "Directions"
  ],
  [
    "Par ici",
    "This way",
    "par ee-see",
    "Directions"
  ],
  [
    "Par là",
    "That way",
    "par lah",
    "Directions"
  ],
  [
    "À gauche",
    "To the left",
    "ah gosh",
    "Directions"
  ],
  [
    "À droite",
    "To the right",
    "ah drwat",
    "Directions"
  ],
  [
    "Tout droit",
    "Straight ahead",
    "too drwah",
    "Directions"
  ],
  [
    "Très loin",
    "Very far",
    "tray lwan",
    "Directions"
  ],
  [
    "Pas loin",
    "Not far",
    "pah lwan",
    "Directions"
  ],
  [
    "Près d’ici",
    "Near here",
    "preh dee-see",
    "Directions"
  ],
  [
    "Au village",
    "In/to the village",
    "oh vee-lazh",
    "Directions"
  ],
  [
    "Au marché",
    "To the market",
    "oh mar-shay",
    "Directions"
  ],
  [
    "À Nice",
    "To Nice",
    "ah nees",
    "Directions"
  ],
  [
    "À Grasse",
    "To Grasse",
    "ah grass",
    "Directions"
  ],
  [
    "Chez moi",
    "At my place",
    "shay mwah",
    "Home"
  ],
  [
    "Chez vous",
    "At your place",
    "shay voo",
    "Home"
  ],
  [
    "Rendez-vous",
    "Appointment",
    "ron-day-voo",
    "Appointment"
  ],
  [
    "Demain matin",
    "Tomorrow morning",
    "duh-man mah-tan",
    "Appointment"
  ],
  [
    "Demain soir",
    "Tomorrow evening",
    "duh-man swahr",
    "Appointment"
  ],
  [
    "Cet après-midi",
    "This afternoon",
    "set ah-preh mee-dee",
    "Appointment"
  ],
  [
    "Aujourd’hui",
    "Today",
    "oh-zhoor-dwee",
    "Appointment"
  ],
  [
    "C’est urgent",
    "It is urgent",
    "say zur-zhon",
    "Doctor"
  ],
  [
    "J’ai mal",
    "I have pain",
    "zhay mal",
    "Doctor"
  ],
  [
    "Mal ici",
    "Pain here",
    "mal ee-see",
    "Doctor"
  ],
  [
    "Très fatiguée",
    "Very tired",
    "tray fah-tee-gay",
    "Doctor"
  ],
  [
    "Pas bien",
    "Not well",
    "pah byan",
    "Doctor"
  ],
  [
    "La pharmacie",
    "The pharmacy",
    "lah far-mah-see",
    "Pharmacy"
  ],
  [
    "Le médecin",
    "The doctor",
    "luh med-san",
    "Doctor"
  ],
  [
    "Une ordonnance",
    "A prescription",
    "une or-doh-nons",
    "Doctor"
  ],
  [
    "Mes médicaments",
    "My medication",
    "may may-dee-kah-mon",
    "Doctor"
  ],
  [
    "Je rappelle",
    "I will call back",
    "zhuh rah-pell",
    "Phone"
  ],
  [
    "Plus tard",
    "Later",
    "ploo tar",
    "Phone"
  ],
  [
    "Un moment",
    "One moment",
    "un mo-mon",
    "Phone"
  ],
  [
    "Je comprends",
    "I understand",
    "zhuh kom-pron",
    "Phone"
  ],
  [
    "Je répète",
    "I repeat",
    "zhuh ray-pet",
    "Phone"
  ],
  [
    "Parlez lentement",
    "Speak slowly",
    "par-lay lon-tuh-mon",
    "Phone"
  ],
  [
    "Mon fils",
    "My son",
    "mon fees",
    "Family"
  ],
  [
    "Mon mari",
    "My husband",
    "mon mah-ree",
    "Family"
  ],
  [
    "Mon partenaire",
    "My partner",
    "mon par-tuh-nair",
    "Family"
  ],
  [
    "Ma maison",
    "My house",
    "mah may-zon",
    "Home"
  ],
  [
    "Ma famille",
    "My family",
    "mah fah-mee",
    "Family"
  ],
  [
    "Mes voisins",
    "My neighbours",
    "may vwah-zan",
    "Social"
  ],
  [
    "Je suis",
    "I am",
    "zhuh swee",
    "Identity"
  ],
  [
    "Je viens",
    "I come",
    "zhuh vee-an",
    "Identity"
  ],
  [
    "J’habite ici",
    "I live here",
    "zha-beet ee-see",
    "Identity"
  ],
  [
    "Australie",
    "Australia",
    "oh-strah-lee",
    "Identity"
  ],
  [
    "Iranienne",
    "Iranian woman",
    "ee-rah-nyen",
    "Identity"
  ],
  [
    "En France",
    "In France",
    "on frons",
    "Identity"
  ],
  [
    "Très contente",
    "Very happy",
    "tray kon-tont",
    "Social"
  ],
  [
    "Très heureuse",
    "Very happy",
    "tray uh-ruhz",
    "Social"
  ],
  [
    "C’est joli",
    "It is pretty",
    "say zho-lee",
    "Social"
  ],
  [
    "C’est magnifique",
    "It is beautiful",
    "say mah-nyee-feek",
    "Social"
  ],
  [
    "J’aime beaucoup",
    "I like it a lot",
    "zhem bo-koo",
    "Social"
  ],
  [
    "Moi aussi",
    "Me too",
    "mwah oh-see",
    "Social"
  ],
  [
    "Pas encore",
    "Not yet",
    "pah zon-kor",
    "Social"
  ],
  [
    "Bien sûr",
    "Of course",
    "byan sewr",
    "Social"
  ],
  [
    "Je veux",
    "I want",
    "zhuh vuh",
    "Learning"
  ],
  [
    "Je dois",
    "I have to",
    "zhuh dwah",
    "Learning"
  ],
  [
    "Je peux",
    "I can",
    "zhuh puh",
    "Learning"
  ],
  [
    "Je vais",
    "I am going",
    "zhuh veh",
    "Learning"
  ]
];