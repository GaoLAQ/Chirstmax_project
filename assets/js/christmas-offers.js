let christmasTandCs =
  "T&Cs: *Saving compares to buying full-priced issues from the UK newsstand. On Print & Digital Pack or Print Only Pack your gift card will be sent to you once the order has been processed for you to give on Christmas Day. We must receive your order by the 16/12/2020 to guarantee you will receive your gift card before Christmas. Personal orders will start with the next available issue, unless requested otherwise. This is a UK only offer. Please call +44 (0)1858 438840 for overseas rates. Lines are open 8am-9:30pm Mon-Fri, 8am-4pm Saturday. Offer ends 01/01/2021.";

let ChristmasAdditionalPoints = {
  digital: [],
  printAndDigital: ["Printed Christmas card included"],
  print: [],
};

let christmasOffers = {
  cheshire: {
    id: "che",
    name: "Cheshire Life",
    digital: {
      pricePointText: "£38 for 12 months",
      savingText: "Save 30% compared to newsstand",
      url: "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CE1&prom=MMMXS20F",
    },
    printAndDigital: {
      pricePointText: "£37 for 12 months",
      savingText: "Save 31% compared to newsstand",
      url: "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CHLCE1&prom=MMMXS20E",
    },
    print: {
      pricePointText: "£39 for 12 months",
      savingText: "Save 28% compared to newsstand",
      url: "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CHL&prom=MMMXS20D",
    },
  },

  cornwall: {
    id: "cwl",
    name: "Cornwall Life",
    digital: {
      pricePointText: "£33 for 12 months",
      savingText: "Save 31% compared to newsstand",
      url: "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CL1&prom=MMMXS20F",
    },
    printAndDigital: {
      pricePointText: "£34 for 12 months",
      savingText: "Save 29% compared to newsstand",
      url: "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CLICI1&prom=MMMXS20E",
    },
    print: {
      pricePointText: "£35 for 12 months",
      savingText: "Save 27% compared to newsstand",
      url: "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CLI&prom=MMMXS20D",
    },
  },

  cotswold: {
    id: "cwl",
    name: "Cotswold Life",
    digital: {
      pricePointText: "£30 for 12 months",
      savingText: "Save 31% compared to newsstand",
      url: "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CL1&prom=MMMXS20F",
    },
    printAndDigital: {
      pricePointText: "£31 for 12 months",
      savingText: "Save 32% compared to newsstand",
      url: "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CLICI1&prom=MMMXS20E",
    },
    print: {
      pricePointText: "£32 for 12 months",
      savingText: "Save 33% compared to newsstand",
      url: "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CLI&prom=MMMXS20D",
    },
  },

  derbyshire: {
    id: "der",
    name: "Derbyshire Life",
    digital: {
      pricePointText: "£40 for 12 months",
      savingText: "Save 20% compared to newsstand",
      url: "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=DL1&prom=MMMXS20F",
    },
    printAndDigital: {
      pricePointText: "£41 for 12 months",
      savingText: "Save 21% compared to newsstand",
      url: "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=DL1DI1&prom=MMMXS20F",
    },
    print: {
      pricePointText: "£42 for 12 months",
      savingText: "Save 22% compared to newsstand",
      url: "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=DI1&prom=MMMXS20F",
    },
  },
};

// json data from index.html showing "Cheshire, Cornwall Life, Cotswold Life ......"
const indexOffers = [
  {
    id: "1",
    imageURL: "assets/images/life-logos/cheshire-life.svg",
    queryKeyName: "cheshire",
  },
  {
    id: "2",
    imageURL: "assets/images/life-logos/cornwall-life.svg",
    queryKeyName: "cornwall",
  },
  {
    id: "3",
    imageURL: "assets/images/life-logos/cotswold-life.svg",
    queryKeyName: "cotswold",
  },
  {
    id: "4",
    imageURL: "assets/images/life-logos/derbyshire-life.svg",
    queryKeyName: "derbyshire",
  },
  {
    id: "5",
    imageURL: "assets/images/life-logos/devon-life.svg",
    queryKeyName: "devon",
  },
  {
    id: "6",
    imageURL: "assets/images/life-logos/dorset-life.svg",
    queryKeyName: "dorset",
  },
  {
    id: "7",
    imageURL: "assets/images/life-logos/essex-life.svg",
    queryKeyName: "essex",
  },
  {
    id: "8",
    imageURL: "assets/images/life-logos/hampshire-life.svg",
    queryKeyName: "hampshire",
  },
  {
    id: "9",
    imageURL: "assets/images/life-logos/hertfordshire-life.svg",
    queryKeyName: "hertfordshire",
  },
  {
    id: "10",
    imageURL: "assets/images/life-logos/kent-life.svg",
    queryKeyName: "kent",
  },
  {
    id: "11",
    imageURL: "assets/images/life-logos/norfolk.svg",
    queryKeyName: "norfolk",
  },
  {
    id: "12",
    imageURL: "assets/images/life-logos/somerset-life.svg",
    queryKeyName: "somerset",
  },
  {
    id: "13",
    imageURL: "assets/images/life-logos/suffolk-magazine.svg",
    queryKeyName: "suffolk",
  },
  {
    id: "14",
    imageURL: "assets/images/life-logos/surrey-life.svg",
    queryKeyName: "surrey",
  },
  {
    id: "15",
    imageURL: "assets/images/life-logos/sussex-life.svg",
    queryKeyName: "sussex",
  },
  {
    id: "16",
    imageURL: "assets/images/life-logos/yorkshire-life.svg",
    queryKeyName: "yorkshire",
  },
];

// json data from store-html to generate different cards 
const indexCardOffers = [
  {
    target: "#print_digital",
    subTarget: "sub_print_digital",
    deal: "pad", 
    title: "Print &amp Digital",
    cardText: "Printed monthly magazine with E-Edition",
    type: "featured",
    items: [
      { subitem: "Save 31% compared to newsstand" },
      { subitem: "Free UK delivery" },
      { subitem: "Digital edition" },
      { subitem: "Available on mobile and web" },
      { subitem: "Printed gift card included" },
    ],
  },
  {
    target: "#print",
    subTarget: "sub_print",
    deal: "print", 
    title: "Print",
    cardText: "Printed monthly magazine",
    type: "standard",
    items: [
      { subitem: "Save 28% compared to newsstand" },
      { subitem: "Free UK delivery" },
      { subitem: "Printed gift card included" },
    ],
  },
  {
    target: "#digital",
    subTarget: "sub_digital",
    deal: "digital", 
    title: "Digital",
    cardText: "Monthly E-Edition",
    type: "standard",
    items: [
      { subitem: "Digital edition" },
      { subitem: "Available on mobile and web" },
    ],
  },
];

