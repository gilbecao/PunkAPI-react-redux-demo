export default [
  {
    id: 192,
    name: 'Punk IPA 2007 - 2010',
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    first_brewed: '04/2007',
    description: "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
    image_url: 'https://images.punkapi.com/v2/192.png',
    abv: 6.0,
    ibu: 60.0,
    target_fg: 1010.0,
    target_og: 1056.0,
    ebc: 17.0,
    srm: 8.5,
    ph: 4.4,
    attenuation_level: 82.14,
    volume: {
      value: 20,
      unit: 'liters',
    },
    boil_volume: {
      value: 25,
      unit: 'liters',
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 19.0,
          unit: 'celsius',
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 5.3,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Ahtanum',
          amount: {
            value: 17.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Chinook',
          amount: {
            value: 15,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: [
      'Spicy carne asada with a pico de gallo sauce',
      'Shredded chicken tacos with a mango chilli lime salsa',
      'Cheesecake with a passion fruit swirl sauce',
    ],
    brewers_tips: "While it may surprise you, this version of Punk IPA isn't dry hopped but still packs a punch! To make the best of the aroma hops make sure they are fully submerged and add them just before knock out for an intense hop hit.",
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 116,
    name: "Morag's Mojito - B-Sides",
    tagline: 'Cocktail Meets Beer.',
    first_brewed: '08/2015',
    description: 'A cunning cocktail blend of grapefruit hops, ginger spice and refreshing mint.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 6.7,
    ibu: 40,
    target_fg: 1010,
    target_og: 1063,
    ebc: 15,
    srm: 7.5,
    ph: 5.2,
    attenuation_level: 84,
    volume: { value: 20, unit: 'litres' },
    boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 60, unit: 'celsius' }, duration: 10 }, { temp: { value: 65, unit: 'celsius' }, duration: 30 }, { temp: { value: 72, unit: 'celsius' }, duration: 10 }, { temp: { value: 78, unit: 'celsius' }, duration: 5 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: 'Fresh mint leaves after fermentation, Grains of Paradise: 6.5g at end, Fresh Limes: 50g at end.' },
    ingredients: {
      malt: [{ name: 'Extra Pale', amount: { value: 5.63, unit: 'kilograms' } }, { name: 'Ginger Root', amount: { value: 0.13, unit: 'kilograms' } }],
      hops: [{
        name: 'Citra', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
      }, {
        name: 'Citra', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
      }, {
        name: 'Citra', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
      }],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Tamale', 'Salt cod croquettes', 'Mint cheesecake'],
    brewers_tips: 'Use more freshly grated ginger in the mash to get a real spicy nature to the beer.',
    contributed_by: 'Matt Ball <GeordieMatt>',
  },
  {
    id: 24,
    name: 'The End Of History',
    tagline: "The World's Strongest Beer.",
    first_brewed: '06/2011',
    description: 'The End of History: The name derives from the famous work of philosopher Francis Fukuyama, this is to beer what democracy is to history. Complexity defined. Floral, grapefruit, caramel and cloves are intensified by boozy heat.',
    image_url: 'https://images.punkapi.com/v2/24.png',
    abv: 55,
    ibu: null,
    target_fg: 1000,
    target_og: 1112,
    ebc: null,
    srm: null,
    ph: 4.4,
    attenuation_level: 100,
    volume: { value: 20, unit: 'litres' },
    boil_volume: { value: 25, unit: 'litres' },
    method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: 'Nettles: 25g at end, Juniper: 25g at end' },
    ingredients: {
      malt: [{ name: 'Extra Pale', amount: { value: 12.5, unit: 'kilograms' } }],
      hops: [{
        name: 'Nelson Sauvin', amount: { value: 6.25, unit: 'grams' }, add: 'start', attribute: 'bitter',
      }, {
        name: 'Centennial', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
      }, {
        name: 'Nelson Sauvin', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
      }, {
        name: 'Amarillo', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
      }, {
        name: 'Centennial', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
      }],
      yeast: 'Wyeast 3522 - Belgian Ardennes™',
    },
    food_pairing: ['Roasted wood pigeon with black pudding', 'Pan seared venison fillet with juniper sauce', 'Apricot coconut cake'],
    brewers_tips: "You'll have to get this one all the way down to -70°C. Taxidermy is not optional.",
    contributed_by: 'Sam Mason <samjbmason>',
  },
];
