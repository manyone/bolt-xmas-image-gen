export const themes = ['cozy', 'magical', 'traditional', 'whimsical'] as const;

export const scenes = {
  cozy: [
    'Fireplace with Stockings',
    'Christmas Morning Living Room',
    'Snowy Cottage Window',
    'Family Kitchen Baking Cookies',
    'Reading Christmas Stories',
    'Hot Cocoa by the Tree',
    'Wrapping Presents Scene',
    'Christmas Eve Bedroom',
    'Winter Cabin Interior',
    'Holiday Dining Table'
  ],
  magical: [
    'Santa\'s Workshop',
    'Northern Lights Christmas',
    'Enchanted Winter Forest',
    'Flying Reindeer in Moonlight',
    'Magic Snow Globe Scene',
    'Christmas Star Night Sky',
    'Elf Village Celebration',
    'Polar Express Journey',
    'Winter Fairy Garden',
    'Magical Gift Shop'
  ],
  traditional: [
    'Victorian Christmas Street',
    'Church Nativity Scene',
    'Carolers in the Snow',
    'Classic Christmas Tree',
    'Village Christmas Market',
    'Horse-Drawn Sleigh Ride',
    'Town Square Celebration',
    'Christmas Eve Service',
    'Vintage Toy Shop Window',
    'Traditional Family Gathering'
  ],
  whimsical: [
    'Gingerbread Village',
    'Dancing Snowmen Party',
    'Candy Cane Forest',
    'Christmas Animal Concert',
    'Toy Parade',
    'North Pole Post Office',
    'Ice Skating Penguins',
    'Cookie Decorating Party',
    'Reindeer Games',
    'Snowflake Ball'
  ]
} as const;

export const characters = [
  '(none)',
  'Santa Claus',
  'Mrs. Claus',
  'Reindeer',
  'Elves',
  'Snowman',
  'Children',
  'Family',
  'Carolers',
  'Gingerbread People',
  'Polar Bears',
  'Penguins'
] as const;

export const styles = [
  'Cozy Watercolor',
  'Festive Oil Painting',
  'Holiday Digital Art',
  'Snowy Photography',
  'Christmas Card Style',
  'Vintage Illustration',
  'Storybook Art',
  'Nordic Folk Art',
  'Glittery Fantasy',
  'Classic Animation'
] as const;

export const colorings = [
  'Traditional Red and Green',
  'Winter Blues and Silver',
  'Golden Holiday',
  'Nordic White and Red',
  'Candlelight Warm',
  'Jewel Tones',
  'Pastel Christmas',
  'Frosty White',
  'Victorian Christmas',
  'Aurora Lights'
] as const;

export const effects = [
  'Twinkling Lights',
  'Falling Snow',
  'Candlelight Glow',
  'Frosty Window',
  'Starlit Night',
  'Cozy Firelight',
  'Glitter Sparkle',
  'Northern Lights',
  'Christmas Magic',
  'Soft Snowfall'
] as const;

export type Theme = typeof themes[number];
export type Scene = typeof scenes[Theme][number];
export type Character = typeof characters[number];
export type Style = typeof styles[number];
export type Coloring = typeof colorings[number];
export type Effect = typeof effects[number];

export interface PromptOptions {
  theme: Theme;
  scene: Scene;
  character: Character;
  style: Style;
  coloring: Coloring;
  effect: Effect;
}