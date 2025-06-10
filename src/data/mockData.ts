import { Crew, RaceStar } from '../types';

export const crews: Crew[] = [
  {
    id: 'crew-1',
    name: 'Roads Unlimited',
    themeColor: '#969696',
    memberCount: 9,
    conqueredStars: 16,
    description: 'Masters of the streets, known for their precision driving and tactical racing.',
    logo: 'https://cdn.discordapp.com/attachments/1357317530896695332/1380163308631363594/Roads_Unlimited.png?ex=684826be&is=6846d53e&hm=16ebb8d6c9cc1a5ae79f1b7cc7bcbc25ecf4ec1ac3ac644f59a0e98385e870f8&'
  },
  {
    id: 'crew-2',
    name: 'Walkers',
    themeColor: '#ffc900',
    memberCount: 7,
    conqueredStars: 46,
    description: 'Speed demons who rule the night, leaving their mark on every street they conquer.',
    logo: 'https://cdn.discordapp.com/attachments/1341062158397734912/1353312383275237417/Screenshot_20250323-1020012.png?ex=684806df&is=6846b55f&hm=2156b762cd316c32dc88f2c721c470b3684327963a8805db8197d61454dd75a0&'
  },
  {
    id: 'crew-3',
    name: 'The ACES',
    themeColor: '#001f8d',
    memberCount: 7,
    conqueredStars: 7,
    description: 'Elite racers who dominate with skill and strategy.',
    logo: 'https://cdn.discordapp.com/attachments/1341062158397734912/1371577326122303662/ACES_2000s_f.png?ex=6847e5ad&is=6846942d&hm=8993175309a1ab156b8c5130129929efeeb40eafb5d63f1c0704e2f699b1bd97&'
  },
  {
    id: 'crew-4',
    name: 'Speed Of Light',
    themeColor: '#fcff92',
    memberCount: 9,
    conqueredStars: 15,
    description: 'Lightning-fast racers who strike before you even see them coming.',
    logo: 'https://cdn.discordapp.com/attachments/1362592376635523222/1364744028830044190/Logo.png?ex=6848162c&is=6846c4ac&hm=e01775f91ba0f40c73e2b2ae8bf26096a36e7ca2b08bf1fcb6416d1e86d9f4b9&'
  },
  {
    id: 'crew-5',
    name: 'Void Cascade',
    themeColor: '#810db6',
    memberCount: 6,
    conqueredStars: 1,
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
    conqueredStars: 2,
    description: 'Operating in the moral gray area, these skilled hackers turned street racers never play by the rules.',
    logo: 'https://cdn.discordapp.com/attachments/1353086033226367098/1363545274835931226/GRAY_No4.png?ex=6847ae3e&is=68465cbe&hm=0e46f339ec3d50d84929ff93c7d84c37d667b946bb37693b2fba16f7bd580103&'
  },
  {
    id: 'crew-9',
    name: 'Red Knights',
    themeColor: '#aa0004',
    memberCount: 1,
    conqueredStars: 1,
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
    name: 'Beachfront',
    position: { x: 908, y: 1509 }, // Manual position. Should be used to all other stars, instead of FIXED_STAR_POSITIONS[]
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-2',
    name: 'Steyne Aqueduct',
    position: FIXED_STAR_POSITIONS[1],
    type: 'racewar',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-3',
    name: 'Dover and Lepus',
    position: FIXED_STAR_POSITIONS[2],
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-4',
    name: 'Gold Valley Run',
    position: FIXED_STAR_POSITIONS[3],
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-5',
    name: 'Morgan Beach Offramp',
    position: FIXED_STAR_POSITIONS[4],
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-6',
    name: 'Waterfront Road',
    position: FIXED_STAR_POSITIONS[5],
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-7',
    name: 'Dover Street',
    position: FIXED_STAR_POSITIONS[6],
    type: 'circuit',
    conqueredBy: 'crew-3',
  },
  {
    id: 'star-8',
    name: 'Francis Tunnel',
    position: FIXED_STAR_POSITIONS[7],
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-9',
    name: 'Main Street',
    position: FIXED_STAR_POSITIONS[8],
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-10',
    name: 'Main Street',
    position: FIXED_STAR_POSITIONS[9],
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-11',
    name: 'Petersburg',
    position: FIXED_STAR_POSITIONS[10],
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-12',
    name: 'Kempton Holdings',
    position: FIXED_STAR_POSITIONS[11],
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-13',
    name: 'Kempton Docks',
    position: FIXED_STAR_POSITIONS[12],
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-14',
    name: 'Lofty Heights Uphill',
    position: FIXED_STAR_POSITIONS[13],
    type: 'canyon',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-15',
    name: 'Highway 142',
    position: FIXED_STAR_POSITIONS[14],
    type: 'racewar',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-16',
    name: 'Robinson Bay',
    position: FIXED_STAR_POSITIONS[15],
    type: 'cicuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-17',
    name: 'Eskuri Loop',
    position: FIXED_STAR_POSITIONS[16],
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-18',
    name: 'Eskuri Plaza',
    position: FIXED_STAR_POSITIONS[17],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-19',
    name: 'Knifes Edge',
    position: FIXED_STAR_POSITIONS[18],
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-20',
    name: 'Eskuri Loop',
    position: FIXED_STAR_POSITIONS[19],
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-21',
    name: 'Mission Street',
    position: FIXED_STAR_POSITIONS[20],
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-22',
    name: 'Newport Industrial Park',
    position: FIXED_STAR_POSITIONS[21],
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-23',
    name: 'Devils Creek Pass',
    position: FIXED_STAR_POSITIONS[22],
    type: 'drift',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-24',
    name: 'North Road',
    position: FIXED_STAR_POSITIONS[23],
    type: 'circuit',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-25',
    name: 'Gold Valley Run',
    position: FIXED_STAR_POSITIONS[24],
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-26',
    name: 'Billings District',
    position: FIXED_STAR_POSITIONS[25],
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-27',
    name: 'Knight Street',
    position: FIXED_STAR_POSITIONS[26],
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-28',
    name: 'Silk Road',
    position: FIXED_STAR_POSITIONS[27],
    type: 'circuit',
    conqueredBy: 'crew-9',
  },
  {
    id: 'star-29',
    name: 'Kimei Temple',
    position: FIXED_STAR_POSITIONS[28],
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-30',
    name: 'Chinatown Tram',
    position: FIXED_STAR_POSITIONS[29],
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-31',
    name: 'Desperation Ridge',
    position: FIXED_STAR_POSITIONS[30],
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-32',
    name: 'Chinatown Delivery / Welcome to Palmont',
    position: FIXED_STAR_POSITIONS[31],
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-33',
    name: 'Campbell Tunnel',
    position: FIXED_STAR_POSITIONS[32],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-34',
    name: 'Lincoln Boulevard',
    position: FIXED_STAR_POSITIONS[33],
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-35',
    name: 'Construction Route',
    position: FIXED_STAR_POSITIONS[34],
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-36',
    name: 'Main Street / Kimei Temple',
    position: FIXED_STAR_POSITIONS[35],
    type: 'circuit',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-37',
    name: 'Sutherden Bell Tower',
    position: FIXED_STAR_POSITIONS[36],
    type: 'racewar',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-38',
    name: 'Devils Creek Pass',
    position: FIXED_STAR_POSITIONS[37],
    type: 'canyon',
    conqueredBy: 'crew-3',
  },
  {
    id: 'star-39',
    name: 'Lookout Point',
    position: FIXED_STAR_POSITIONS[38],
    type: 'drift',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-40',
    name: 'Lincoln Circuit',
    position: FIXED_STAR_POSITIONS[39],
    type: 'circuit',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-41',
    name: 'Mason Street',
    position: FIXED_STAR_POSITIONS[40],
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-42',
    name: 'Garden Boulevard',
    position: FIXED_STAR_POSITIONS[41],
    type: 'circuit',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-43',
    name: 'Kings Park',
    position: FIXED_STAR_POSITIONS[42],
    type: 'drift',
    conqueredBy: 'crew-3',
  },
  {
    id: 'star-44',
    name: 'Downtown Tunnel',
    position: FIXED_STAR_POSITIONS[43],
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-45',
    name: 'Old Quarter',
    position: FIXED_STAR_POSITIONS[44],
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-46', //After this one, everything repeats (Except for star number)
    name: 'Kings Park',
    position: FIXED_STAR_POSITIONS[45],
    type: 'circuit',
    conqueredBy: 'crew-3',
  },
  {id: 'star-47',
    name: 'City Courthouse / City Courthouse',
    position: FIXED_STAR_POSITIONS[0],
    type: 'drift', //Needs to be drift OR circuit (Street-X)
    conqueredBy: 'crew-8',
  },
  {
    id: 'star-48',
    name: 'Ocean Drive',
    position: FIXED_STAR_POSITIONS[1],
    type: 'sprint',
    conqueredBy: 'crew-8',
  },
  {
    id: 'star-49',
    name: 'Palmont University',
    position: FIXED_STAR_POSITIONS[2],
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-50',
    name: 'University Way',
    position: FIXED_STAR_POSITIONS[3],
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-51',
    name: 'University Avenue',
    position: FIXED_STAR_POSITIONS[4],
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-52',
    name: 'Fortuna Heights',
    position: FIXED_STAR_POSITIONS[5],
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-53',
    name: 'Skyline Avenue',
    position: FIXED_STAR_POSITIONS[6],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-54',
    name: 'Verona Tunnel',
    position: FIXED_STAR_POSITIONS[7],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-55',
    name: 'Library Square',
    position: FIXED_STAR_POSITIONS[8],
    type: 'racewar',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-56',
    name: 'Route 21',
    position: FIXED_STAR_POSITIONS[9],
    type: 'racewar',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-57',
    name: 'Lofty Heights Downhill',
    position: FIXED_STAR_POSITIONS[10],
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-58',
    name: 'Lofty Heights Downhill',
    position: FIXED_STAR_POSITIONS[11],
    type: 'canyon',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-59',
    name: 'North Bellezza',
    position: FIXED_STAR_POSITIONS[12],
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-60',
    name: 'Mason St Bridge',
    position: FIXED_STAR_POSITIONS[13],
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-61',
    name: 'Eternity Pass',
    position: FIXED_STAR_POSITIONS[14],
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-62',
    name: 'South Fortuna',
    position: FIXED_STAR_POSITIONS[15],
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-63',
    name: 'Ocean View',
    position: FIXED_STAR_POSITIONS[16],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-64',
    name: 'York Road',
    position: FIXED_STAR_POSITIONS[17],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-65',
    name: 'Rabinowitz Drive',
    position: FIXED_STAR_POSITIONS[18],
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-66',
    name: 'Copper Ridge',
    position: FIXED_STAR_POSITIONS[19],
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-67',
    name: 'Condo Row',
    position: FIXED_STAR_POSITIONS[20],
    type: 'circuit',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-68',
    name: 'Agostini Avenue',
    position: FIXED_STAR_POSITIONS[21],
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-69',
    name: 'Eternity Pass',
    position: FIXED_STAR_POSITIONS[22],
    type: 'canyon',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-70',
    name: 'Hills Borough Parkway',
    position: FIXED_STAR_POSITIONS[23],
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-71',
    name: 'Deadfall Junction',
    position: FIXED_STAR_POSITIONS[24],
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-72',
    name: 'Savannah Street',
    position: FIXED_STAR_POSITIONS[25],
    type: 'circuit',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-73',
    name: 'Shady Pine',
    position: FIXED_STAR_POSITIONS[26],
    type: 'drift',
    conqueredBy: 'crew-3',
  },
  {
    id: 'star-74',
    name: 'Blackwell Bridge',
    position: FIXED_STAR_POSITIONS[27],
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-75',
    name: 'Hills Borough Run',
    position: FIXED_STAR_POSITIONS[28],
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-76',
    name: 'North Broadway',
    position: FIXED_STAR_POSITIONS[29],
    type: 'circuit',
    conqueredBy: 'crew-3',
  },
  {
    id: 'star-77',
    name: 'Silverton Way',
    position: FIXED_STAR_POSITIONS[30],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-78',
    name: 'Troy',
    position: FIXED_STAR_POSITIONS[31],
    type: 'sprint',
    conqueredBy: 'crew-3',
  },
  {
    id: 'star-79',
    name: 'Platinum Condos',
    position: FIXED_STAR_POSITIONS[32],
    type: 'racewar',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-80',
    name: 'Starlight Strip',
    position: FIXED_STAR_POSITIONS[33],
    type: 'drift',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-81',
    name: 'The Neon Mile',
    position: FIXED_STAR_POSITIONS[34],
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-82',
    name: 'Lucky Towers',
    position: FIXED_STAR_POSITIONS[35],
    type: 'circuit',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-83',
    name: 'Infinity Park',
    position: FIXED_STAR_POSITIONS[36],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-84',
    name: 'Tram Boundary',
    position: FIXED_STAR_POSITIONS[37],
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-85',
    name: 'Deadfall Junction',
    position: FIXED_STAR_POSITIONS[38],
    type: 'drift',
    conqueredBy: 'crew-5',
  },
  {
    id: 'star-86',
    name: 'Starlight Street',
    position: FIXED_STAR_POSITIONS[39],
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-87',
    name: 'Blackwell Road',
    position: FIXED_STAR_POSITIONS[40],
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-88',
    name: 'After Hours',
    position: FIXED_STAR_POSITIONS[41],
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-89',
    name: 'Copper Ridge',
    position: FIXED_STAR_POSITIONS[42],
    type: 'canyon',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-90',
    name: 'Paradise Hotel',
    position: FIXED_STAR_POSITIONS[43],
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-91',
    name: 'Spade Street',
    position: FIXED_STAR_POSITIONS[44],
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-92',
    name: 'Eagle Drive',
    position: FIXED_STAR_POSITIONS[45],
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-93',
    name: 'Copper Ridge',
    position: FIXED_STAR_POSITIONS[0],
    type: 'canyon',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-94',
    name: 'Infinity Park',
    position: FIXED_STAR_POSITIONS[1],
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-95',
    name: 'Gray Street',
    position: FIXED_STAR_POSITIONS[2],
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-96',
    name: 'Desperation Ridge',
    position: FIXED_STAR_POSITIONS[3],
    type: 'canyon',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-97',
    name: 'Brooks Street',
    position: FIXED_STAR_POSITIONS[4],
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-98',
    name: 'Journeymans Bane',
    position: FIXED_STAR_POSITIONS[5],
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-99',
    name: 'Royal Avenue',
    position: FIXED_STAR_POSITIONS[6],
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-100',
    name: 'Garcia Street',
    position: FIXED_STAR_POSITIONS[7],
    type: 'racewar',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-101',
    name: 'Montezuma Avenue',
    position: FIXED_STAR_POSITIONS[8],
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-102',
    name: 'Mesa Bridge',
    position: FIXED_STAR_POSITIONS[9],
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-103',
    name: 'Salazar Street',
    position: FIXED_STAR_POSITIONS[10],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-104',
    name: 'Journeymans Bane',
    position: FIXED_STAR_POSITIONS[11],
    type: 'canyon',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-105',
    name: 'Knifes Edge',
    position: FIXED_STAR_POSITIONS[12],
    type: 'canyon',
    conqueredBy: 'crew-3',
    },
  {
    id: 'star-106',
    name: 'Lookout Point',
    position: FIXED_STAR_POSITIONS[12],
    type: 'canyon',
    conqueredBy: 'crew-3',
    },
];