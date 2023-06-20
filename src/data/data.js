// Shop Filter Categories
export const shopFilters = [
  "All Products",
  "Furniture",
  "Signs",
  "Cutting Boards",
  "Coasters",
  "Other",
];

// Shop items for sale
export const shopItems = [
  {
    id: 1,
    category: "Furniture",
    images: [
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
    ],
    title: "Table",
    subtitle: "4 person kitchen table",
    basePrice: 1999,
    options: {
      length: [
        {
          inches: 48,
          addedCost: 0,
        },
        {
          inches: 60,
          addedCost: 0,
        },
        {
          inches: 66,
          addedCost: 100,
        },
        {
          inches: 72,
          addedCost: 150,
        },
        {
          inches: 78,
          addedCost: 200,
        },
      ],
      width: [
        {
          inches: 30,
          addedCost: 0,
        },
        {
          inches: 36,
          addedCost: 50,
        },
        {
          inches: 42,
          addedCost: 100,
        },
        {
          inches: 48,
          addedCost: 150,
        },
      ],
      woodType: [
        {
          type: "Pine",
          addedCost: 0,
        },
        {
          type: "Alder",
          addedCost: 1000,
        },
        {
          type: "Walnut",
          addedCost: 2000,
        },
      ],
      finish: [
        {
          type: "Natural (clear coat)",
          addedCost: 0,
        },
        {
          type: "Painted",
          addedCost: 100,
        },
      ],
      leafExtension: [
        {
          inches: 0,
          addedCost: 0,
        },
        {
          inches: 24,
          addedCost: 50,
        },
        {
          inches: 48,
          addedCost: 100,
        },
        {
          inches: 60,
          addedCost: 150,
        },
      ],
    },
  },
  {
    id: 2,
    category: "Furniture",
    // eslint-disable-next-line no-undef
    images: [
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
    ],
    title: "Table",
    subtitle: "6 person kitchen table",
    price: 3999,
  },
  {
    id: 3,
    category: "Furniture",
    // eslint-disable-next-line no-undef
    images: [
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
    ],
    title: "Coffee Table",
    subtitle: null,
    price: 3999,
  },
  {
    id: 4,
    category: "Furniture",
    // eslint-disable-next-line no-undef
    images: [
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
    ],
    title: "Coffee Table",
    subtitle: null,
    price: 3999,
  },
  {
    id: 5,
    category: "Signs",
    // eslint-disable-next-line no-undef
    images: [
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
    ],
    title: "A-Frame",
    subtitle: "Customized engraving",
    price: 3999,
  },
  {
    id: 6,
    category: "Cutting Boards",
    // eslint-disable-next-line no-undef
    images: [
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
    ],
    title: "Cutting Board",
    subtitle: "Subtitle",
    price: 99,
  },
  {
    id: 7,
    category: "Coasters",
    // eslint-disable-next-line no-undef
    images: [
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
    ],
    title: "Coaster",
    subtitle: "Custom engraving",
    price: 19,
  },
  {
    id: 8,
    category: "Other",
    // eslint-disable-next-line no-undef
    images: [
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
      // eslint-disable-next-line no-undef
      process.env.PUBLIC_URL + "/blue.png",
    ],
    title: "Other",
    subtitle: "Subtitle",
    price: 50,
  },
];
