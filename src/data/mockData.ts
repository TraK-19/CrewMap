import { Crew, RaceStar } from '../types';

export const crews: Crew[] = [
  {
    id: 'crew-1',
    name: 'Roads Unlimited',
    themeColor: '#969696',
    memberCount: 9,
    conqueredStars: 12,
    description: 'Masters of the streets, known for their precision driving and tactical racing.',
    logo: 'https://cdn.discordapp.com/attachments/1357317530896695332/1380163308631363594/Roads_Unlimited.png?ex=684826be&is=6846d53e&hm=16ebb8d6c9cc1a5ae79f1b7cc7bcbc25ecf4ec1ac3ac644f59a0e98385e870f8&'
  },
  {
    id: 'crew-2',
    name: 'Walkers',
    themeColor: '#ffc900',
    memberCount: 7,
    conqueredStars: 8,
    description: 'Speed demons who rule the night, leaving their mark on every street they conquer.',
    logo: 'https://cdn.discordapp.com/attachments/1341062158397734912/1353312383275237417/Screenshot_20250323-1020012.png?ex=684806df&is=6846b55f&hm=2156b762cd316c32dc88f2c721c470b3684327963a8805db8197d61454dd75a0&'
  },
  {
    id: 'crew-3',
    name: 'The ACES',
    themeColor: '#001f8d',
    memberCount: 7,
    conqueredStars: 6,
    description: 'Elite racers who dominate with skill and strategy.',
    logo: 'https://cdn.discordapp.com/attachments/1341062158397734912/1371577326122303662/ACES_2000s_f.png?ex=6847e5ad&is=6846942d&hm=8993175309a1ab156b8c5130129929efeeb40eafb5d63f1c0704e2f699b1bd97&'
  },
  {
    id: 'crew-4',
    name: 'Speed Of Light',
    themeColor: '#fcff92',
    memberCount: 9,
    conqueredStars: 10,
    description: 'Lightning-fast racers who strike before you even see them coming.',
    logo: 'https://cdn.discordapp.com/attachments/1362592376635523222/1364744028830044190/Logo.png?ex=6848162c&is=6846c4ac&hm=e01775f91ba0f40c73e2b2ae8bf26096a36e7ca2b08bf1fcb6416d1e86d9f4b9&'
  },
  {
    id: 'crew-5',
    name: 'Void Cascade',
    themeColor: '#810db6',
    memberCount: 6,
    conqueredStars: 5,
    description: 'Masters of the shadows, they emerge only to claim victory.',
    logo: 'https://cdn.discordapp.com/attachments/1373754829460996256/1380169233136222218/VOID_LOGO_FINAL.png?ex=68482c43&is=6846dac3&hm=fe9b62011f48d1c4edbf6b741bdbb85e35aba9424a753efb0915e91eea316c84&'
  },
  {
    id: 'crew-6',
    name: 'Ex-Machina',
    themeColor: '#00ffe5',
    memberCount: 2,
    conqueredStars: 0,
    description: 'Tech-savvy racers who merge machine precision with human instinct.',
    logo: 'https://cdn.discordapp.com/attachments/1357366499731574944/1357368401328078898/Logo_no_text.png?ex=68479f15&is=68464d95&hm=29482d002206157e977a730a64aa8bce88a4709578c3cd33b5e5ee8150e9a7de&'
  },
  {
    id: 'crew-7',
    name: 'The Impostors',
    themeColor: '#ff0000',
    memberCount: 2,
    conqueredStars: 0,
    description: 'Mysterious newcomers with unpredictable tactics and hidden agendas.'
  },
  {
    id: 'crew-8',
    name: 'Grayhats',
    themeColor: '#555555',
    memberCount: 6,
    conqueredStars: 0,
    description: 'Operating in the moral gray area, these skilled hackers turned street racers never play by the rules.',
    logo: 'https://cdn.discordapp.com/attachments/1353086033226367098/1363545274835931226/GRAY_No4.png?ex=6847ae3e&is=68465cbe&hm=0e46f339ec3d50d84929ff93c7d84c37d667b946bb37693b2fba16f7bd580103&'
  },
  {
    id: 'crew-9',
    name: 'Red Knights',
    themeColor: '#aa0004',
    memberCount: 1,
    conqueredStars: 0,
    description: 'A lone wolf with the skill and determination to challenge entire crews.',
    logo: 'https://cdn.discordapp.com/attachments/1360956293749280910/1371167138366095421/red_knights_logo_circle_only.png?ex=6847b928&is=684667a8&hm=06938954f5671a588416d9850c0f188f7e9b836dcffee22db3e25ca48cf4e5fa&'
  }
];

// Fixed positions for race stars distributed across the entire 2048x2048 map
const FIXED_STAR_POSITIONS = [
  // Top row (North)
  { x: 256, y: 200 },   // Northwest
  { x: 512, y: 150 },   // North-center-left
  { x: 768, y: 180 },   // North-center
  { x: 1024, y: 160 },  // North-center-right
  { x: 1280, y: 190 },  // North-center-far
  { x: 1536, y: 170 },  // North-far-right
  { x: 1792, y: 210 },  // Northeast

  // Upper-middle row
  { x: 200, y: 450 },   // West-upper
  { x: 400, y: 380 },   // Left-upper
  { x: 680, y: 420 },   // Center-left-upper
  { x: 900, y: 350 },   // Center-upper
  { x: 1200, y: 400 },  // Center-right-upper
  { x: 1450, y: 360 },  // Right-upper
  { x: 1700, y: 430 },  // Far-right-upper
  { x: 1900, y: 380 },  // East-upper

  // Center row
  { x: 150, y: 700 },   // West-center
  { x: 350, y: 750 },   // Left-center
  { x: 550, y: 680 },   // Center-left
  { x: 800, y: 720 },   // Center
  { x: 1050, y: 690 },  // Center-right
  { x: 1300, y: 740 },  // Right-center
  { x: 1550, y: 710 },  // Far-right-center
  { x: 1800, y: 680 },  // East-center

  // Lower-middle row
  { x: 220, y: 1000 },  // West-lower
  { x: 480, y: 1050 },  // Left-lower
  { x: 720, y: 980 },   // Center-left-lower
  { x: 950, y: 1020 },  // Center-lower
  { x: 1180, y: 1060 }, // Center-right-lower
  { x: 1420, y: 990 },  // Right-lower
  { x: 1680, y: 1040 }, // Far-right-lower
  { x: 1850, y: 1010 }, // East-lower

  // Bottom row (South)
  { x: 180, y: 1300 },  // Southwest-upper
  { x: 400, y: 1350 },  // South-left-upper
  { x: 650, y: 1320 },  // South-center-left-upper
  { x: 900, y: 1380 },  // South-center-upper
  { x: 1150, y: 1340 }, // South-center-right-upper
  { x: 1400, y: 1360 }, // South-right-upper
  { x: 1650, y: 1330 }, // South-far-right-upper
  { x: 1880, y: 1370 }, // Southeast-upper

  // Far south row
  { x: 250, y: 1600 },  // Southwest-lower
  { x: 500, y: 1650 },  // South-left-lower
  { x: 750, y: 1620 },  // South-center-left-lower
  { x: 1000, y: 1680 }, // South-center-lower
  { x: 1250, y: 1640 }, // South-center-right-lower
  { x: 1500, y: 1660 }, // South-right-lower
  { x: 1750, y: 1630 }, // South-far-right-lower
  { x: 1900, y: 1670 }, // Southeast-lower

  // Bottom edge
  { x: 300, y: 1850 },  // Southwest-bottom
  { x: 600, y: 1900 },  // South-left-bottom
  { x: 900, y: 1880 },  // South-center-bottom
  { x: 1200, y: 1920 }, // South-center-right-bottom
  { x: 1500, y: 1890 }, // South-right-bottom
  { x: 1800, y: 1870 }, // Southeast-bottom
];

// Race star data with fixed positions
export const raceStars: RaceStar[] = [
  {
    id: 'star-1',
    name: 'Northern Gateway',
    position: { x: 100, y: 50 }, // Manual position. Should be used to all other stars, instead of FIXED_STAR_POSITIONS[]
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-2',
    name: 'Arctic Circuit',
    position: FIXED_STAR_POSITIONS[1],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-3',
    name: 'Frost Valley',
    position: FIXED_STAR_POSITIONS[2],
    type: 'drift',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-4',
    name: 'Ice Peak Rally',
    position: FIXED_STAR_POSITIONS[3],
    type: 'offroad',
    conqueredBy: undefined,
  },
  {
    id: 'star-5',
    name: 'Crystal Highway',
    position: FIXED_STAR_POSITIONS[4],
    type: 'drag',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-6',
    name: 'Glacier Point',
    position: FIXED_STAR_POSITIONS[5],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-7',
    name: 'Blizzard Corner',
    position: FIXED_STAR_POSITIONS[6],
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-8',
    name: 'Mountain Pass',
    position: FIXED_STAR_POSITIONS[7],
    type: 'offroad',
    conqueredBy: undefined,
  },
  {
    id: 'star-9',
    name: 'Canyon Drift',
    position: FIXED_STAR_POSITIONS[8],
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-10',
    name: 'Thunder Valley',
    position: FIXED_STAR_POSITIONS[9],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-11',
    name: 'Steel Bridge',
    position: FIXED_STAR_POSITIONS[10],
    type: 'circuit',
    conqueredBy: 'crew-3',
  },
  {
    id: 'star-12',
    name: 'River Crossing',
    position: FIXED_STAR_POSITIONS[11],
    type: 'offroad',
    conqueredBy: undefined,
  },
  {
    id: 'star-13',
    name: 'City Lights',
    position: FIXED_STAR_POSITIONS[12],
    type: 'drag',
    conqueredBy: 'crew-3',
  },
  {
    id: 'star-14',
    name: 'Urban Circuit',
    position: FIXED_STAR_POSITIONS[13],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-15',
    name: 'Neon Strip',
    position: FIXED_STAR_POSITIONS[14],
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-16',
    name: 'Harbor Drift',
    position: FIXED_STAR_POSITIONS[15],
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-17',
    name: 'Industrial Zone',
    position: FIXED_STAR_POSITIONS[16],
    type: 'offroad',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-18',
    name: 'Port Authority',
    position: FIXED_STAR_POSITIONS[17],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-19',
    name: 'Warehouse District',
    position: FIXED_STAR_POSITIONS[18],
    type: 'sprint',
    conqueredBy: 'crew-5',
  },
  {
    id: 'star-20',
    name: 'Midnight Mile',
    position: FIXED_STAR_POSITIONS[19],
    type: 'drag',
    conqueredBy: undefined,
  },
  {
    id: 'star-21',
    name: 'Desert Highway',
    position: FIXED_STAR_POSITIONS[20],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-22',
    name: 'Badlands Circuit',
    position: FIXED_STAR_POSITIONS[21],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-23',
    name: 'Dust Bowl',
    position: FIXED_STAR_POSITIONS[22],
    type: 'offroad',
    conqueredBy: undefined,
  },
  {
    id: 'star-24',
    name: 'Mirage Strip',
    position: FIXED_STAR_POSITIONS[23],
    type: 'drag',
    conqueredBy: undefined,
  },
  {
    id: 'star-25',
    name: 'Sandstorm Valley',
    position: FIXED_STAR_POSITIONS[24],
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-26',
    name: 'Oasis Run',
    position: FIXED_STAR_POSITIONS[25],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-27',
    name: 'Mesa Peak',
    position: FIXED_STAR_POSITIONS[26],
    type: 'offroad',
    conqueredBy: undefined,
  },
  {
    id: 'star-28',
    name: 'Canyon Bridge',
    position: FIXED_STAR_POSITIONS[27],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-29',
    name: 'Sunset Boulevard',
    position: FIXED_STAR_POSITIONS[28],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-30',
    name: 'Twilight Drag',
    position: FIXED_STAR_POSITIONS[29],
    type: 'drag',
    conqueredBy: undefined,
  },
  {
    id: 'star-31',
    name: 'Coastal Highway',
    position: FIXED_STAR_POSITIONS[30],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-32',
    name: 'Beach Circuit',
    position: FIXED_STAR_POSITIONS[31],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-33',
    name: 'Lighthouse Point',
    position: FIXED_STAR_POSITIONS[32],
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-34',
    name: 'Pier Pressure',
    position: FIXED_STAR_POSITIONS[33],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-35',
    name: 'Seaside Sprint',
    position: FIXED_STAR_POSITIONS[34],
    type: 'drag',
    conqueredBy: undefined,
  },
  {
    id: 'star-36',
    name: 'Marina Mile',
    position: FIXED_STAR_POSITIONS[35],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-37',
    name: 'Boardwalk Burn',
    position: FIXED_STAR_POSITIONS[36],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-38',
    name: 'Dockyard Drift',
    position: FIXED_STAR_POSITIONS[37],
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-39',
    name: 'Lagoon Loop',
    position: FIXED_STAR_POSITIONS[38],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-40',
    name: 'Tidal Wave',
    position: FIXED_STAR_POSITIONS[39],
    type: 'offroad',
    conqueredBy: undefined,
  },
  {
    id: 'star-41',
    name: 'Southern Cross',
    position: FIXED_STAR_POSITIONS[40],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-42',
    name: 'Bayou Circuit',
    position: FIXED_STAR_POSITIONS[41],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-43',
    name: 'Swamp Runner',
    position: FIXED_STAR_POSITIONS[42],
    type: 'offroad',
    conqueredBy: undefined,
  },
  {
    id: 'star-44',
    name: 'Backwater Drag',
    position: FIXED_STAR_POSITIONS[43],
    type: 'drag',
    conqueredBy: undefined,
  },
  {
    id: 'star-45',
    name: 'Muddy Waters',
    position: FIXED_STAR_POSITIONS[44],
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-46', //After this one, everything repeats (Except for star number)
    name: 'Final Frontier',
    position: FIXED_STAR_POSITIONS[45],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {id: 'star-47',
    name: 'Northern Gateway',
    position: FIXED_STAR_POSITIONS[0],
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-48',
    name: 'Arctic Circuit',
    position: FIXED_STAR_POSITIONS[1],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-49',
    name: 'Frost Valley',
    position: FIXED_STAR_POSITIONS[2],
    type: 'drift',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-50',
    name: 'Ice Peak Rally',
    position: FIXED_STAR_POSITIONS[3],
    type: 'offroad',
    conqueredBy: undefined,
  },
  {
    id: 'star-51',
    name: 'Crystal Highway',
    position: FIXED_STAR_POSITIONS[4],
    type: 'drag',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-52',
    name: 'Glacier Point',
    position: FIXED_STAR_POSITIONS[5],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-53',
    name: 'Blizzard Corner',
    position: FIXED_STAR_POSITIONS[6],
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-54',
    name: 'Mountain Pass',
    position: FIXED_STAR_POSITIONS[7],
    type: 'offroad',
    conqueredBy: undefined,
  },
  {
    id: 'star-55',
    name: 'Canyon Drift',
    position: FIXED_STAR_POSITIONS[8],
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-56',
    name: 'Thunder Valley',
    position: FIXED_STAR_POSITIONS[9],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-57',
    name: 'Steel Bridge',
    position: FIXED_STAR_POSITIONS[10],
    type: 'circuit',
    conqueredBy: 'crew-3',
  },
  {
    id: 'star-58',
    name: 'River Crossing',
    position: FIXED_STAR_POSITIONS[11],
    type: 'offroad',
    conqueredBy: undefined,
  },
  {
    id: 'star-59',
    name: 'City Lights',
    position: FIXED_STAR_POSITIONS[12],
    type: 'drag',
    conqueredBy: 'crew-3',
  },
  {
    id: 'star-60',
    name: 'Urban Circuit',
    position: FIXED_STAR_POSITIONS[13],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-61',
    name: 'Neon Strip',
    position: FIXED_STAR_POSITIONS[14],
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-62',
    name: 'Harbor Drift',
    position: FIXED_STAR_POSITIONS[15],
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-63',
    name: 'Industrial Zone',
    position: FIXED_STAR_POSITIONS[16],
    type: 'offroad',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-64',
    name: 'Port Authority',
    position: FIXED_STAR_POSITIONS[17],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-65',
    name: 'Warehouse District',
    position: FIXED_STAR_POSITIONS[18],
    type: 'sprint',
    conqueredBy: 'crew-5',
  },
  {
    id: 'star-66',
    name: 'Midnight Mile',
    position: FIXED_STAR_POSITIONS[19],
    type: 'drag',
    conqueredBy: undefined,
  },
  {
    id: 'star-67',
    name: 'Desert Highway',
    position: FIXED_STAR_POSITIONS[20],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-68',
    name: 'Badlands Circuit',
    position: FIXED_STAR_POSITIONS[21],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-69',
    name: 'Dust Bowl',
    position: FIXED_STAR_POSITIONS[22],
    type: 'offroad',
    conqueredBy: undefined,
  },
  {
    id: 'star-70',
    name: 'Mirage Strip',
    position: FIXED_STAR_POSITIONS[23],
    type: 'drag',
    conqueredBy: undefined,
  },
  {
    id: 'star-71',
    name: 'Sandstorm Valley',
    position: FIXED_STAR_POSITIONS[24],
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-72',
    name: 'Oasis Run',
    position: FIXED_STAR_POSITIONS[25],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-73',
    name: 'Mesa Peak',
    position: FIXED_STAR_POSITIONS[26],
    type: 'offroad',
    conqueredBy: undefined,
  },
  {
    id: 'star-74',
    name: 'Canyon Bridge',
    position: FIXED_STAR_POSITIONS[27],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-75',
    name: 'Sunset Boulevard',
    position: FIXED_STAR_POSITIONS[28],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-76',
    name: 'Twilight Drag',
    position: FIXED_STAR_POSITIONS[29],
    type: 'drag',
    conqueredBy: undefined,
  },
  {
    id: 'star-77',
    name: 'Coastal Highway',
    position: FIXED_STAR_POSITIONS[30],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-78',
    name: 'Beach Circuit',
    position: FIXED_STAR_POSITIONS[31],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-79',
    name: 'Lighthouse Point',
    position: FIXED_STAR_POSITIONS[32],
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-80',
    name: 'Pier Pressure',
    position: FIXED_STAR_POSITIONS[33],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-81',
    name: 'Seaside Sprint',
    position: FIXED_STAR_POSITIONS[34],
    type: 'drag',
    conqueredBy: undefined,
  },
  {
    id: 'star-82',
    name: 'Marina Mile',
    position: FIXED_STAR_POSITIONS[35],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-83',
    name: 'Boardwalk Burn',
    position: FIXED_STAR_POSITIONS[36],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-84',
    name: 'Dockyard Drift',
    position: FIXED_STAR_POSITIONS[37],
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-85',
    name: 'Lagoon Loop',
    position: FIXED_STAR_POSITIONS[38],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-86',
    name: 'Tidal Wave',
    position: FIXED_STAR_POSITIONS[39],
    type: 'offroad',
    conqueredBy: undefined,
  },
  {
    id: 'star-87',
    name: 'Southern Cross',
    position: FIXED_STAR_POSITIONS[40],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-88',
    name: 'Bayou Circuit',
    position: FIXED_STAR_POSITIONS[41],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-89',
    name: 'Swamp Runner',
    position: FIXED_STAR_POSITIONS[42],
    type: 'offroad',
    conqueredBy: undefined,
  },
  {
    id: 'star-90',
    name: 'Backwater Drag',
    position: FIXED_STAR_POSITIONS[43],
    type: 'drag',
    conqueredBy: undefined,
  },
  {
    id: 'star-91',
    name: 'Muddy Waters',
    position: FIXED_STAR_POSITIONS[44],
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-92',
    name: 'Final Frontier',
    position: FIXED_STAR_POSITIONS[45],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-93',
    name: 'Northern Gateway',
    position: FIXED_STAR_POSITIONS[0],
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-94',
    name: 'Arctic Circuit',
    position: FIXED_STAR_POSITIONS[1],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-95',
    name: 'Frost Valley',
    position: FIXED_STAR_POSITIONS[2],
    type: 'drift',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-96',
    name: 'Ice Peak Rally',
    position: FIXED_STAR_POSITIONS[3],
    type: 'offroad',
    conqueredBy: undefined,
  },
  {
    id: 'star-97',
    name: 'Crystal Highway',
    position: FIXED_STAR_POSITIONS[4],
    type: 'drag',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-98',
    name: 'Glacier Point',
    position: FIXED_STAR_POSITIONS[5],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-99',
    name: 'Blizzard Corner',
    position: FIXED_STAR_POSITIONS[6],
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-100',
    name: 'Mountain Pass',
    position: FIXED_STAR_POSITIONS[7],
    type: 'offroad',
    conqueredBy: undefined,
  },
  {
    id: 'star-101',
    name: 'Canyon Drift',
    position: FIXED_STAR_POSITIONS[8],
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-102',
    name: 'Thunder Valley',
    position: FIXED_STAR_POSITIONS[9],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-103',
    name: 'Steel Bridge',
    position: FIXED_STAR_POSITIONS[10],
    type: 'circuit',
    conqueredBy: 'crew-3',
  },
  {
    id: 'star-104',
    name: 'River Crossing',
    position: FIXED_STAR_POSITIONS[11],
    type: 'offroad',
    conqueredBy: undefined,
  },
  {
    id: 'star-105',
    name: 'City Lights',
    position: FIXED_STAR_POSITIONS[12],
    type: 'drag',
    conqueredBy: 'crew-3',
    },
];