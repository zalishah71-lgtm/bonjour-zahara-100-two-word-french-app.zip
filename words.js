const WORDS = [
  [
    "Bonjour Madame",
    "Hello Madam",
    "bon-zhoor mah-dam",
    "1 Polite"
  ],
  [
    "Bonjour Monsieur",
    "Hello Sir",
    "bon-zhoor muh-syuh",
    "1 Polite"
  ],
  [
    "Bonsoir Madame",
    "Good evening Madam",
    "bon-swahr mah-dam",
    "1 Polite"
  ],
  [
    "Bonsoir Monsieur",
    "Good evening Sir",
    "bon-swahr muh-syuh",
    "1 Polite"
  ],
  [
    "Merci beaucoup",
    "Thank you very much",
    "mehr-see bo-koo",
    "1 Polite"
  ],
  [
    "Merci bien",
    "Thank you kindly",
    "mehr-see byan",
    "1 Polite"
  ],
  [
    "Non merci",
    "No thank you",
    "nohn mehr-see",
    "1 Polite"
  ],
  [
    "Oui merci",
    "Yes thank you",
    "wee mehr-see",
    "1 Polite"
  ],
  [
    "Bonne journée",
    "Have a good day",
    "bun zhoor-nay",
    "1 Polite"
  ],
  [
    "Bonne soirée",
    "Have a good evening",
    "bun swah-ray",
    "1 Polite"
  ],
  [
    "Un café",
    "A coffee",
    "un kah-fay",
    "2 Café"
  ],
  [
    "Un thé",
    "A tea",
    "un tay",
    "2 Café"
  ],
  [
    "Un verre",
    "A glass",
    "un vair",
    "2 Café"
  ],
  [
    "De l’eau",
    "Some water",
    "duh low",
    "2 Café"
  ],
  [
    "Une baguette",
    "A baguette",
    "une bah-get",
    "2 Café"
  ],
  [
    "Un croissant",
    "A croissant",
    "un krwah-son",
    "2 Café"
  ],
  [
    "Du pain",
    "Some bread",
    "dew pan",
    "2 Café"
  ],
  [
    "Sans sucre",
    "Without sugar",
    "son sew-kruh",
    "2 Café"
  ],
  [
    "Avec lait",
    "With milk",
    "ah-vek lay",
    "2 Café"
  ],
  [
    "L’addition",
    "The bill",
    "lah-dee-see-on",
    "2 Café"
  ],
  [
    "Un sac",
    "A bag",
    "un sak",
    "3 Shopping"
  ],
  [
    "Un panier",
    "A basket",
    "un pah-nyay",
    "3 Shopping"
  ],
  [
    "Un chariot",
    "A trolley",
    "un shah-ree-oh",
    "3 Shopping"
  ],
  [
    "Un reçu",
    "A receipt",
    "un ruh-sew",
    "3 Shopping"
  ],
  [
    "Par carte",
    "By card",
    "par kart",
    "3 Shopping"
  ],
  [
    "En espèces",
    "In cash",
    "on es-pess",
    "3 Shopping"
  ],
  [
    "C’est combien",
    "How much is it",
    "say kom-by-an",
    "3 Shopping"
  ],
  [
    "Je prends",
    "I’ll take it",
    "zhuh pron",
    "3 Shopping"
  ],
  [
    "Trop cher",
    "Too expensive",
    "troh shair",
    "3 Shopping"
  ],
  [
    "C’est tout",
    "That is all",
    "say too",
    "3 Shopping"
  ],
  [
    "Où est",
    "Where is",
    "oo ay",
    "4 Directions"
  ],
  [
    "C’est où",
    "Where is it",
    "say oo",
    "4 Directions"
  ],
  [
    "Par ici",
    "This way",
    "par ee-see",
    "4 Directions"
  ],
  [
    "Par là",
    "That way",
    "par lah",
    "4 Directions"
  ],
  [
    "À gauche",
    "To the left",
    "ah gosh",
    "4 Directions"
  ],
  [
    "À droite",
    "To the right",
    "ah drwat",
    "4 Directions"
  ],
  [
    "Tout droit",
    "Straight ahead",
    "too drwah",
    "4 Directions"
  ],
  [
    "Pas loin",
    "Not far",
    "pah lwan",
    "4 Directions"
  ],
  [
    "Très loin",
    "Very far",
    "tray lwan",
    "4 Directions"
  ],
  [
    "Près d’ici",
    "Near here",
    "preh dee-see",
    "4 Directions"
  ],
  [
    "La boulangerie",
    "The bakery",
    "lah boo-lon-zhuh-ree",
    "5 Places"
  ],
  [
    "La pharmacie",
    "The pharmacy",
    "lah far-mah-see",
    "5 Places"
  ],
  [
    "Le marché",
    "The market",
    "luh mar-shay",
    "5 Places"
  ],
  [
    "Le supermarché",
    "The supermarket",
    "luh sew-pair-mar-shay",
    "5 Places"
  ],
  [
    "Le café",
    "The café",
    "luh kah-fay",
    "5 Places"
  ],
  [
    "Le restaurant",
    "The restaurant",
    "luh res-toh-ron",
    "5 Places"
  ],
  [
    "La mairie",
    "The town hall",
    "lah may-ree",
    "5 Places"
  ],
  [
    "La poste",
    "The post office",
    "lah post",
    "5 Places"
  ],
  [
    "La banque",
    "The bank",
    "lah bonk",
    "5 Places"
  ],
  [
    "La maison",
    "The house",
    "lah may-zon",
    "5 Places"
  ],
  [
    "Un rendez-vous",
    "An appointment",
    "un ron-day-voo",
    "6 Appointment"
  ],
  [
    "Demain matin",
    "Tomorrow morning",
    "duh-man mah-tan",
    "6 Appointment"
  ],
  [
    "Demain soir",
    "Tomorrow evening",
    "duh-man swahr",
    "6 Appointment"
  ],
  [
    "Cet après-midi",
    "This afternoon",
    "set ah-preh mee-dee",
    "6 Appointment"
  ],
  [
    "Ce soir",
    "Tonight",
    "suh swahr",
    "6 Appointment"
  ],
  [
    "Plus tard",
    "Later",
    "ploo tar",
    "6 Appointment"
  ],
  [
    "Un moment",
    "One moment",
    "un mo-mon",
    "6 Appointment"
  ],
  [
    "Je rappelle",
    "I’ll call back",
    "zhuh rah-pell",
    "6 Appointment"
  ],
  [
    "Je confirme",
    "I confirm",
    "zhuh kon-feerm",
    "6 Appointment"
  ],
  [
    "C’est urgent",
    "It is urgent",
    "say zur-zhon",
    "6 Appointment"
  ],
  [
    "J’ai mal",
    "I have pain",
    "zhay mal",
    "7 Health"
  ],
  [
    "Mal ici",
    "Pain here",
    "mal ee-see",
    "7 Health"
  ],
  [
    "Pas bien",
    "Not well",
    "pah byan",
    "7 Health"
  ],
  [
    "Très fatiguée",
    "Very tired",
    "tray fah-tee-gay",
    "7 Health"
  ],
  [
    "Ça pique",
    "It stings",
    "sah peek",
    "7 Health"
  ],
  [
    "Ça brûle",
    "It burns",
    "sah brool",
    "7 Health"
  ],
  [
    "Une ordonnance",
    "A prescription",
    "une or-doh-nons",
    "7 Health"
  ],
  [
    "Mes médicaments",
    "My medication",
    "may may-dee-kah-mon",
    "7 Health"
  ],
  [
    "Le médecin",
    "The doctor",
    "luh med-san",
    "7 Health"
  ],
  [
    "La douleur",
    "The pain",
    "lah doo-luhr",
    "7 Health"
  ],
  [
    "Ça va",
    "How are you / I’m okay",
    "sah vah",
    "8 Social"
  ],
  [
    "Très bien",
    "Very well",
    "tray byan",
    "8 Social"
  ],
  [
    "Et vous",
    "And you",
    "ay voo",
    "8 Social"
  ],
  [
    "Moi aussi",
    "Me too",
    "mwah oh-see",
    "8 Social"
  ],
  [
    "Pas encore",
    "Not yet",
    "pah zon-kor",
    "8 Social"
  ],
  [
    "Bien sûr",
    "Of course",
    "byan sewr",
    "8 Social"
  ],
  [
    "Avec plaisir",
    "With pleasure",
    "ah-vek play-zeer",
    "8 Social"
  ],
  [
    "C’est gentil",
    "That is kind",
    "say zhon-tee",
    "8 Social"
  ],
  [
    "C’est joli",
    "It is pretty",
    "say zho-lee",
    "8 Social"
  ],
  [
    "À bientôt",
    "See you soon",
    "ah byan-toh",
    "8 Social"
  ],
  [
    "Mon fils",
    "My son",
    "mon fees",
    "9 Family"
  ],
  [
    "Mon mari",
    "My husband",
    "mon mah-ree",
    "9 Family"
  ],
  [
    "Mon partenaire",
    "My partner",
    "mon par-tuh-nair",
    "9 Family"
  ],
  [
    "Ma maison",
    "My house",
    "mah may-zon",
    "9 Family"
  ],
  [
    "Ma famille",
    "My family",
    "mah fah-mee",
    "9 Family"
  ],
  [
    "Mes voisins",
    "My neighbours",
    "may vwah-zan",
    "9 Family"
  ],
  [
    "Chez moi",
    "At my place",
    "shay mwah",
    "9 Family"
  ],
  [
    "Chez vous",
    "At your place",
    "shay voo",
    "9 Family"
  ],
  [
    "J’habite ici",
    "I live here",
    "zha-beet ee-see",
    "9 Family"
  ],
  [
    "Je viens",
    "I come",
    "zhuh vee-an",
    "9 Family"
  ],
  [
    "Je veux",
    "I want",
    "zhuh vuh",
    "10 Starters"
  ],
  [
    "Je dois",
    "I have to",
    "zhuh dwah",
    "10 Starters"
  ],
  [
    "Je peux",
    "I can / Can I",
    "zhuh puh",
    "10 Starters"
  ],
  [
    "Je vais",
    "I am going",
    "zhuh veh",
    "10 Starters"
  ],
  [
    "Je voudrais",
    "I would like",
    "zhuh voo-dray",
    "10 Starters"
  ],
  [
    "Je comprends",
    "I understand",
    "zhuh kom-pron",
    "10 Starters"
  ],
  [
    "Je pratique",
    "I practise",
    "zhuh prak-teek",
    "10 Starters"
  ],
  [
    "Vous voulez",
    "Do you want",
    "voo voo-lay",
    "10 Starters"
  ],
  [
    "Vous aimez",
    "Do you like",
    "voo zay-may",
    "10 Starters"
  ],
  [
    "Parlez lentement",
    "Speak slowly",
    "par-lay lon-tuh-mon",
    "10 Starters"
  ]
];