// ================== UNIT DEFINITIONS ==================

const grainUnits = [
  "250 g",
  "500 g",
  "1 kg",
  "2 kg",
  "3 kg",
  "5 kg",
  "10 kg",
];

const dairyUnits = [
  "250 ml",
  "500 ml",
  "1 litre",
  "2 litres",
  "1 packet",
  "2 packets",
];

const oilUnits = [
  "250 ml",
  "500 ml",
  "1 litre",
  "2 litres",
  "5 litres",
];

const householdLiquidUnits = [
  "50 ml",
  "100 ml",
  "250 ml",
  "500 ml",
  "1 litre",
  "2 litres",
];

const pieceUnits = [
  "1 piece",
  "2 pieces",
  "3 pieces",
  "5 pieces",
];

const personalCareUnits = [
  "50 g",
  "100 g",
  "200 g",
  "250 ml",
  "500 ml",
  "1 piece",
];

// ================== GROCERIES DATA ==================

export const groceries = [
  // 🌾 Grains & Pulses
  {
    category: "Grains & Pulses (ధాన్యాలు & పప్పులు)",
    items: [
      { id: 1, name: "Rice", teluguName: "బియ్యం", units: grainUnits },
      { id: 2, name: "Wheat Flour", teluguName: "గోధుమ పిండి", units: grainUnits },
      { id: 3, name: "Bansi Rava", teluguName: "బన్సీ రవ్వ", units: grainUnits },
      { id: 4, name: "Sooji Rava", teluguName: "బొంబాయి రవ్వ", units: grainUnits },
      { id: 5, name: "Idli Rava", teluguName: "ఇడ్లీ రవ్వ", units: grainUnits },
      { id: 6, name: "Poha", teluguName: "అటుకులు", units: grainUnits },
      { id: 7, name: "Corn Flour", teluguName: "మొక్కజొన్న పిండి", units: grainUnits },
      { id: 8, name: "Maida", teluguName: "మైదా", units: grainUnits },

      { id: 9, name: "Besan (Chickpea Flour)", teluguName: "శెనగ పిండి", units: grainUnits },
      { id: 10, name: "Groundnuts", teluguName: "వేరుశెనగలు", units: grainUnits },

      { id: 11, name: "Toor Dal (Kandi Pappu)", teluguName: "కందిపప్పు", units: grainUnits },
      { id: 12, name: "Urad Dal (Minapappu)", teluguName: "మినపప్పు", units: grainUnits },
      { id: 13, name: "Moong Dal (Pesara Pappu)", teluguName: "పెసరపప్పు", units: grainUnits },
      { id: 14, name: "Green Gram (Pesalu)", teluguName: "పెసలు", units: grainUnits },
      { id: 15, name: "Black Gram Whole", teluguName: "మినుములు", units: grainUnits },
      { id: 16, name: "Chana Dal", teluguName: "సెనగపప్పు", units: grainUnits },

      { id: 17, name: "Whole Wheat", teluguName: "గోధుమలు", units: grainUnits },
      { id: 18, name: "Sago", teluguName: "సబుడానా", units: grainUnits },
      { id: 19, name: "Barley", teluguName: "జవలు", units: grainUnits },

      { id: 20, name: "Jowar", teluguName: "జొన్నలు", units: grainUnits },
      { id: 21, name: "Bajra", teluguName: "సజ్జలు", units: grainUnits },
      { id: 22, name: "Ragi Flour", teluguName: "రాగి పిండి", units: grainUnits },
      { id: 23, name: "Foxtail Millet", teluguName: "కొర్రలు", units: grainUnits },
      { id: 24, name: "Little Millet", teluguName: "సామలు", units: grainUnits },
      { id: 25, name: "Vermicelli(Semiya)", teluguName: "సేమియా", units: grainUnits }
    ]
  },

  // 🥛 Dairy
  {
    category: "Dairy (పాల ఉత్పత్తులు)",
    items: [
      { id: 26, name: "Milk", teluguName: "పాలు", units: dairyUnits },
      { id: 27, name: "Curd", teluguName: "పెరుగు", units: dairyUnits },
      { id: 28, name: "Butter", teluguName: "వెన్న", units: ["100 g", "200 g", "500 g"] },
      { id: 29, name: "Paneer", teluguName: "పనీర్", units: ["200 g", "500 g", "1 kg"] },
      { id: 30, name: "Ghee", teluguName: "నెయ్యి", units: oilUnits },
    ],
  },

  // 🛢️ Essentials
  {
    category: "Essentials (అత్యవసర సరుకులు)",
    items: [
      { id: 31, name: "Cooking Oil", teluguName: "వంట నూనె", units: oilUnits },
      { id: 32, name: "Sugar", teluguName: "చక్కెర", units: grainUnits },
      { id: 33, name: "Salt", teluguName: "ఉప్పు", units: grainUnits },
      { id: 34, name: "Jaggery", teluguName: "బెల్లం", units: grainUnits },
      { id: 35, name: "Tea Powder", teluguName: "టీ పొడి", units: ["250 g", "500 g", "1 kg"] },
      { id: 36, name: "Coffee Powder", teluguName: "కాఫీ పొడి", units: ["250 g", "500 g", "1 kg"] },
    ],
  },

  // 🌶️ Spices
  {
    category: "Spices (మసాలాలు)",
    items: [
      { id: 37, name: "Red Chilli Powder", teluguName: "కారం", units: ["100 g", "250 g", "500 g"] },
      { id: 38, name: "Turmeric Powder", teluguName: "పసుపు", units: ["100 g", "250 g", "500 g"] },
      { id: 39, name: "Coriander Powder", teluguName: "ధనియాల పొడి", units: ["100 g", "250 g", "500 g"] },
      { id: 40, name: "Cumin Seeds", teluguName: "జీలకర్ర", units: ["100 g", "250 g", "500 g"] },
      { id: 41, name: "Mustard Seeds", teluguName: "ఆవాలు", units: ["100 g", "250 g", "500 g"] },
      { id: 42, name: "Pepper", teluguName: "మిరియాలు", units: ["100 g", "250 g", "500 g"] },
    ],
  },

  // 🥦 Vegetables
  {
    category: "Vegetables (కూరగాయలు)",
    items: [
      { id: 43, name: "Onion", teluguName: "ఉల్లిపాయ", units: grainUnits },
      { id: 44, name: "Potato", teluguName: "బంగాళాదుంప", units: grainUnits },
      { id: 45, name: "Tomato", teluguName: "టమోటా", units: grainUnits },
      { id: 46, name: "Brinjal", teluguName: "వంకాయ", units: grainUnits },
      { id: 47, name: "Lady Finger", teluguName: "బెండకాయ", units: grainUnits },
      { id: 48, name: "Drumstick", teluguName: "మునగకాయ", units: grainUnits },
    ],
  },

  // 🍎 Fruits
  {
    category: "Fruits (పండ్లు)",
    items: [
      { id: 49, name: "Apple", teluguName: "ఆపిల్", units: grainUnits },
      { id: 50, name: "Banana", teluguName: "అరటి పండ్లు", units: grainUnits },
      { id: 51, name: "Orange", teluguName: "నారింజ", units: grainUnits },
      { id: 52, name: "Papaya", teluguName: "బొప్పాయి", units: grainUnits },
      { id: 53, name: "Pomegranate", teluguName: "దానిమ్మ", units: grainUnits },
      { id: 54, name: "Guava", teluguName: "జామకాయ", units: grainUnits },
    ],
  },

  // 🧼 Household
  {
    category: "Household (ఇంటి అవసరాలు)",
    items: [
      { id: 55, name: "Bath Soap", teluguName: "స్నాన సబ్బు", units: pieceUnits },
      { id: 56, name: "Washing Powder", teluguName: "బట్టల పొడి", units: grainUnits },
      { id: 57, name: "Dish Wash Liquid", teluguName: "పాత్రలు కడిగే ద్రావణం", units: householdLiquidUnits },
      { id: 58, name: "Floor Cleaner", teluguName: "నేల శుభ్రపరిచే ద్రావణం", units: householdLiquidUnits },
      { id: 59, name: "Phenyl", teluguName: "ఫెనైల్", units: householdLiquidUnits },
    ],
  },

  // 🧴 Personal Care
  {
    category: "Personal Care (వ్యక్తిగత సంరక్షణ)",
    items: [
      { id: 60, name: "Toothpaste", teluguName: "పళ్ల మంజనం", units: ["50 g", "100 g", "150 g", "200 g"] },
      { id: 61, name: "Shampoo", teluguName: "షాంపూ", units: ["100 ml", "200 ml", "500 ml"] },
      { id: 62, name: "Hair Oil", teluguName: "జుట్టు నూనె", units: ["100 ml", "200 ml", "500 ml"] },
      { id: 63, name: "Face Wash", teluguName: "ముఖ శుభ్రపరిచే ద్రావణం", units: ["100 ml", "200 ml"] },
      { id: 64, name: "Handwash", teluguName: "చేతుల శుభ్రపరిచే ద్రావణం", units: householdLiquidUnits },
    ],
  },
];
