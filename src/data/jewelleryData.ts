export interface CategoryItem {
  id: string;
  name: string;
  image: string;
  count: string;
  tagline: string;
  description: string;
}

export interface StoryItem {
  id: string;
  hindiTitle: string;
  englishSub: string;
  tagline: string;
  image: string;
  description: string;
}

export interface CustomJewelleryItem {
  id: string;
  title: string;
  craft: string;
  goldPurity: string;
  gemstone: string;
  image: string;
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'necklaces',
    name: 'NECKLACES',
    image: '/assets/categories/cat_necklaces.jpg',
    count: '142 Designs',
    tagline: 'Imperial Chokers & Layered Harams',
    description: 'Masterpieces in 22K yellow gold adorned with uncut Polki diamonds and Zambian emeralds.',
  },
  {
    id: 'earrings',
    name: 'EARRINGS',
    image: '/assets/categories/cat_earrings.jpg',
    count: '98 Designs',
    tagline: 'Chandbalis & Temple Jhumkas',
    description: 'Intricately handcrafted filigree jhumkis with delicate natural pearl drops and ruby accents.',
  },
  {
    id: 'bangles',
    name: 'BANGLES',
    image: '/assets/categories/cat_bangles.jpg',
    count: '86 Designs',
    tagline: 'Royal Kadas & Jadau Bangles',
    description: 'Hand-engraved nakshi bangles inspired by vintage Rajasthani royal dynasties.',
  },
  {
    id: 'banges',
    name: 'BANGES',
    image: '/assets/categories/cat_banges.jpg',
    count: '45 Designs',
    tagline: 'Gemstone Cuffs & Navratna Bands',
    description: 'Statement gold cuffs featuring bezel-set rubies, emeralds, and south-sea pearls.',
  },
  {
    id: 'rings',
    name: 'RINGS',
    image: '/assets/categories/cat_rings.jpg',
    count: '112 Designs',
    tagline: 'Solitaire & Polki Cocktail Rings',
    description: 'Architectural cocktail rings sculpted in solid gold with floral enamel work.',
  },
  {
    id: 'pendants',
    name: 'PENDANTS & SETS',
    image: '/assets/categories/cat_pendants.jpg',
    count: '64 Designs',
    tagline: 'Bridal Naths & Pendant Suites',
    description: 'Graceful diamond pendant suites and celestial studs embodying feminine grace.',
  },
];

export const STORIES: StoryItem[] = [
  {
    id: 'swarn-shringaar',
    hindiTitle: 'स्वर्ण श्रृंगार',
    englishSub: 'Swarn Shringaar',
    tagline: 'The kingdom was adorned, not just in gold — but in grace she makes do rule.',
    image: '/assets/story/swarn_story_card_2x.png',
    description: 'Celebrating the timeless beauty and poised authority of the royal matriarch, adorned with ceremonial bridal adornments handcrafted over 400 hours.',
  },
  {
    id: 'parampara',
    hindiTitle: 'परम्परा',
    englishSub: 'Parampara',
    tagline: 'Rooted in heritage, every piece has a story to tell.',
    image: '/assets/story/parampara_story_card_2x.png',
    description: 'Honoring centuries-old antique craftsmanship, elephant-motif jhumkas with Basra pearl cascades symbolizing regal heritage and generational lore.',
  },
  {
    id: 'chhankaar',
    hindiTitle: 'छनकार',
    englishSub: 'Chhankaar',
    tagline: 'Tradition that moves with every step.',
    image: '/assets/story/chhankaar_story_card_2x.png',
    description: 'The rhythmic melody of ghungroos and antique silver-gold payals that celebrate auspicious homecoming and joyous festivities.',
  },
];

export const CUSTOM_DESIGNS: CustomJewelleryItem[] = [
  {
    id: 'cust-1',
    title: 'The Nizam Polki Choker',
    craft: 'Kundan Meenakari',
    goldPurity: '22K Hallmarked Gold',
    gemstone: 'Uncut Diamonds & Colombian Emeralds',
    image: '/assets/customisation/custom_1_highres.jpg',
  },
  {
    id: 'cust-2',
    title: 'Gaja Makara Antique Kadas',
    craft: 'Nakshi Repoussé',
    goldPurity: '22K Antique Yellow Gold',
    gemstone: 'Natural Cabochon Rubies',
    image: '/assets/customisation/custom_2_highres.jpg',
  },
  {
    id: 'cust-3',
    title: 'Maharani Chandelier Earrings',
    craft: 'Jadau Filigree',
    goldPurity: '22K Hallmarked Gold',
    gemstone: 'Basra Seed Pearls & Rubies',
    image: '/assets/customisation/custom_3_highres.jpg',
  },
  {
    id: 'cust-4',
    title: 'Rani Haar Emerald Cascade',
    craft: 'Temple Heritage Setting',
    goldPurity: '22K Solid Gold',
    gemstone: 'Russian Emerald Drops & Polki',
    image: '/assets/customisation/custom_4_highres.jpg',
  },
];

export const FOOTER_SECTIONS = {
  shop: [
    'Necklace Sets',
    'Earrings',
    'Bangles & Bracelets',
    'Rings',
    'Nose Pins',
    'Mangalsutra',
    "Children's Wear",
    'Gift Hampers',
  ],
  support: [
    'FAQs',
    'Track Order',
    'Shipping Policy',
    'Return Policy',
    'Size Guide',
    'Jewellery Care',
    'Store Locator',
    'Contact Us',
  ],
  information: [
    'About Us',
    'Our Heritage',
    'Craftsmanship',
    'Blog',
    'Careers',
    'Press',
  ],
  policies: [
    'Terms & Conditions',
    'Privacy Policy',
    'Secure Payments',
    'Lifetime Exchange',
    'Hallmark Promise',
  ],
  contact: {
    brand: 'HK Jewellers',
    address: '1502, Karol Bagh, New Delhi, 110005',
    phone: '+91 98765 43210',
    email: 'hello@hkjewellers.com',
  },
};
