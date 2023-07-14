// Shop Filter Categories
export const shopFilters = [
  "All Products",
  "Tables",
  "Signs",
  "Cutting Boards",
  "Coasters",
  "Other",
];

// custom item images
export const customItemImages = [
  // eslint-disable-next-line no-undef
  process.env.PUBLIC_URL + "/images/1.png",
  // eslint-disable-next-line no-undef
  process.env.PUBLIC_URL + "/images/2.png",
  // eslint-disable-next-line no-undef
  process.env.PUBLIC_URL + "/images/3.png",
  // eslint-disable-next-line no-undef
  process.env.PUBLIC_URL + "/images/4.png",
];

// Shop items for sale
export const shopItems = [
  {
    id: 1,
    category: "Tables",
    images: [
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/table5.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/table5.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/table5.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/table5.png",
    ],
    title: "Table",
    subtitle: "4 person kitchen table",
    description:
      "Consectetur mollit cillum pariatur quis culpa anim et. Velit commodo velit est proident aliqua ex ipsum culpa velit exercitation. Exercitation est ex nulla dolore non. Ea eu id laboris quis elit ipsum cupidatat esse labore pariatur nulla. Sunt mollit aute quis consectetur duis cillum voluptate dolor velit amet laboris mollit tempor sint.",
    basePrice: 2000,
    options: {
      length: [
        {
          value: 48,
          addedCost: 0,
        },
        {
          value: 60,
          addedCost: 0,
        },
        {
          value: 66,
          addedCost: 100,
        },
        {
          value: 72,
          addedCost: 150,
        },
        {
          value: 78,
          addedCost: 200,
        },
      ],
      width: [
        {
          value: 30,
          addedCost: 0,
        },
        {
          value: 36,
          addedCost: 50,
        },
        {
          value: 42,
          addedCost: 100,
        },
        {
          value: 48,
          addedCost: 150,
        },
      ],
      wood: [
        {
          value: "Pine",
          addedCost: 0,
        },
        {
          value: "Alder",
          addedCost: 1000,
        },
        {
          value: "Walnut",
          addedCost: 2000,
        },
      ],
      finish: [
        {
          value: "Natural (clear coat)",
          addedCost: 0,
        },
        {
          value: "Painted",
          addedCost: 100,
        },
      ],
      leafExtension: [
        {
          value: 0,
          addedCost: 0,
        },
        {
          value: 24,
          addedCost: 50,
        },
        {
          value: 48,
          addedCost: 100,
        },
        {
          value: 60,
          addedCost: 150,
        },
      ],
    },
  },
  {
    id: 2,
    category: "Tables",
    images: [
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/table2.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/table2.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/table2.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/table2.png",
    ],
    title: "Table",
    subtitle: "6 person kitchen table",
    description:
      "Consectetur mollit cillum pariatur quis culpa anim et. Velit commodo velit est proident aliqua ex ipsum culpa velit exercitation. Exercitation est ex nulla dolore non. Ea eu id laboris quis elit ipsum cupidatat esse labore pariatur nulla. Sunt mollit aute quis consectetur duis cillum voluptate dolor velit amet laboris mollit tempor sint.",
    basePrice: 2500,
    options: {
      length: [
        {
          value: 60,
          addedCost: 0,
        },
        {
          value: 66,
          addedCost: 0,
        },
        {
          value: 72,
          addedCost: 100,
        },
        {
          value: 78,
          addedCost: 150,
        },
        {
          value: 84,
          addedCost: 200,
        },
      ],
      width: [
        {
          value: 36,
          addedCost: 0,
        },
        {
          value: 42,
          addedCost: 50,
        },
        {
          value: 48,
          addedCost: 100,
        },
        {
          value: 54,
          addedCost: 150,
        },
      ],
      wood: [
        {
          value: "Pine",
          addedCost: 0,
        },
        {
          value: "Alder",
          addedCost: 1000,
        },
        {
          value: "Walnut",
          addedCost: 2000,
        },
      ],
      finish: [
        {
          value: "Natural (clear coat)",
          addedCost: 0,
        },
        {
          value: "Painted",
          addedCost: 100,
        },
      ],
      leafExtension: [
        {
          value: 0,
          addedCost: 0,
        },
        {
          value: 24,
          addedCost: 50,
        },
        {
          value: 48,
          addedCost: 100,
        },
        {
          value: 60,
          addedCost: 150,
        },
      ],
    },
  },
  {
    id: 3,
    category: "Signs",
    images: [
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/sign.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/sign.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/sign.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/sign.png",
    ],
    title: "A-frame Sign",
    subtitle: "",
    description:
      "Consectetur mollit cillum pariatur quis culpa anim et. Velit commodo velit est proident aliqua ex ipsum culpa velit exercitation. Exercitation est ex nulla dolore non. Ea eu id laboris quis elit ipsum cupidatat esse labore pariatur nulla. Sunt mollit aute quis consectetur duis cillum voluptate dolor velit amet laboris mollit tempor sint.",
    basePrice: 300,
    options: {
      height: [
        {
          value: 36,
          addedCost: 0,
        },
        {
          value: 42,
          addedCost: 25,
        },
        {
          value: 48,
          addedCost: 50,
        },
      ],
      width: [
        {
          value: 18,
          addedCost: 0,
        },
        {
          value: 24,
          addedCost: 25,
        },
        {
          value: 30,
          addedCost: 50,
        },
      ],
      wood: [
        {
          value: "Pine",
          addedCost: 0,
        },
        {
          value: "Alder",
          addedCost: 100,
        },
        {
          value: "Walnut",
          addedCost: 200,
        },
      ],
      finish: [
        {
          value: "Natural (clear coat)",
          addedCost: 0,
        },
        {
          value: "Painted",
          addedCost: 50,
        },
      ],
    },
  },
  {
    id: 4,
    category: "Cutting Boards",
    images: [
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/board.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/board.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/board.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/board.png",
    ],
    title: "Cutting Board",
    subtitle: "",
    description:
      "Consectetur mollit cillum pariatur quis culpa anim et. Velit commodo velit est proident aliqua ex ipsum culpa velit exercitation. Exercitation est ex nulla dolore non. Ea eu id laboris quis elit ipsum cupidatat esse labore pariatur nulla. Sunt mollit aute quis consectetur duis cillum voluptate dolor velit amet laboris mollit tempor sint.",
    basePrice: 100,
    options: {
      size: [
        {
          value: "small - 10x8x1.5 inches",
          addedCost: 0,
        },
        {
          value: "medium - 18x12x1.5 inches",
          addedCost: 20,
        },
        {
          value: "large - 20x15x1.5 inches",
          addedCost: 30,
        },
        {
          value: "extra large - 24x18x1.5 inches",
          addedCost: 40,
        },
      ],
      wood: [
        {
          value: "Pine",
          addedCost: 0,
        },
        {
          value: "Maple",
          addedCost: 100,
        },
        {
          value: "Walnut",
          addedCost: 200,
        },
      ],
      customizations: ["No", "Yes"],
    },
  },
  {
    id: 5,
    category: "Coasters",
    images: [
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/coasters.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/coasters.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/coasters.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/coasters.png",
    ],
    title: "Coaster",
    subtitle: "",
    description:
      "Consectetur mollit cillum pariatur quis culpa anim et. Velit commodo velit est proident aliqua ex ipsum culpa velit exercitation. Exercitation est ex nulla dolore non. Ea eu id laboris quis elit ipsum cupidatat esse labore pariatur nulla. Sunt mollit aute quis consectetur duis cillum voluptate dolor velit amet laboris mollit tempor sint.",
    basePrice: 10,
    options: {
      wood: [
        {
          value: "Pine",
          addedCost: 0,
        },
        {
          value: "Maple",
          addedCost: 100,
        },
        {
          value: "Walnut",
          addedCost: 200,
        },
      ],
      customizations: ["No", "Yes"],
    },
  },
  {
    id: 6,
    category: "Other",
    images: [
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/custom-engraving.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/custom-engraving.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/custom-engraving.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/images/custom-engraving.png",
    ],
    title: "Custom Engravings",
    subtitle: "",
    description:
      "Consectetur mollit cillum pariatur quis culpa anim et. Velit commodo velit est proident aliqua ex ipsum culpa velit exercitation. Exercitation est ex nulla dolore non. Ea eu id laboris quis elit ipsum cupidatat esse labore pariatur nulla. Sunt mollit aute quis consectetur duis cillum voluptate dolor velit amet laboris mollit tempor sint.",
    basePrice: 10,
    options: {
      wood: [
        {
          value: "Pine",
          addedCost: 0,
        },
        {
          value: "Maple",
          addedCost: 100,
        },
        {
          value: "Walnut",
          addedCost: 200,
        },
      ],
    },
  },
];
