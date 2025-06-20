import { Crew, RaceStar } from '../types';

export const crews: Crew[] = [
  {
    id: 'crew-1',
    name: 'Roads Unlimited',
    themeColor: '#969696',
    memberCount: 8,
    conqueredStars: 16,
    description: 'Masters of the streets, known for their precision driving and tactical racing.',
    logo: 'https://cdn.discordapp.com/attachments/1357317530896695332/1380163308631363594/Roads_Unlimited.png?ex=684826be&is=6846d53e&hm=16ebb8d6c9cc1a5ae79f1b7cc7bcbc25ecf4ec1ac3ac644f59a0e98385e870f8&'
  },
  {
    id: 'crew-2',
    name: 'Walkers',
    themeColor: '#ffc900',
    memberCount: 8,
    conqueredStars: 44,
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
    conqueredStars: 17,
    description: 'Lightning-fast racers who strike before you even see them coming.',
    logo: 'https://cdn.discordapp.com/attachments/1362592376635523222/1364744028830044190/Logo.png?ex=6848162c&is=6846c4ac&hm=e01775f91ba0f40c73e2b2ae8bf26096a36e7ca2b08bf1fcb6416d1e86d9f4b9&'
  },
  {
    id: 'crew-5',
    name: 'Void Cascade',
    themeColor: '#810db6',
    memberCount: 6,
    conqueredStars: 4,
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
    conqueredStars: 0,
    description: 'A lone wolf with the skill and determination to challenge entire crews.',
    logo: 'https://cdn.discordapp.com/attachments/1360956293749280910/1371167138366095421/red_knights_logo_circle_only.png?ex=6847b928&is=684667a8&hm=06938954f5671a588416d9850c0f188f7e9b836dcffee22db3e25ca48cf4e5fa&'
  }
];

//Fixed positions for race stars distributed across the entire 2048x2048 map
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
    position: { x: 935, y: 1550 },
    type: 'racewar',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-3',
    name: 'Dover and Lepus',
    position: { x: 1032, y: 1560 },
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-4',
    name: 'Gold Valley Run',
    position: { x: 975, y: 1481 },
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-5',
    name: 'Morgan Beach Offramp',
    position: { x: 927, y: 1355 },
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-6',
    name: 'Waterfront Road',
    position: { x: 1167, y: 1390 },
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-7',
    name: 'Dover Street',
    position: { x: 1117, y: 1299 },
    type: 'circuit',
    conqueredBy: 'crew-3',
  },
  {
    id: 'star-8',
    name: 'Francis Tunnel',
    position: { x: 979, y: 1338 },
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-9',
    name: 'Main Street',
    position: { x: 1072, y: 1413 },
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-10',
    name: 'Main Street',
    position: { x: 1062, y: 1375 },
    type: 'streetx',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-11',
    name: 'Petersburg Dam',
    position: { x: 1161, y: 1507 },
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-12',
    name: 'Kempton Holdings',
    position: { x: 1145, y: 1462 },
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-13',
    name: 'Kempton Docks',
    position: { x: 1223, y: 1424 },
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-14',
    name: 'Lofty Heights Uphill',
    position: { x: 1093, y: 1505 },
    type: 'canyon',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-15',
    name: 'Highway 142',
    position: { x: 1086, y: 1452 },
    type: 'racewar',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-16',
    name: 'Robinson Bay',
    position: { x: 1218, y: 1362 },
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-17',
    name: 'Eskuri Loop',
    position: { x: 1234, y: 1247 },
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-18',
    name: 'Eskuri Plaza',
    position: { x: 1280, y: 1325 },
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-19',
    name: 'Knifes Edge',
    position: { x: 1272, y: 1271 },
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-20',
    name: 'Eskuri Loop',
    position: { x: 1187, y: 1251 },
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-21',
    name: 'Mission Street',
    position: { x: 1383, y: 1353 },
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-22',
    name: 'Newport Industrial Park',
    position: { x: 1418, y: 1268 },
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-23',
    name: 'Devils Creek Pass',
    position: { x: 1358, y: 1399 },
    type: 'drift',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-24',
    name: 'North Road',
    position: { x: 1221, y: 977 },
    type: 'circuit',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-25',
    name: 'Gold Valley Run',
    position: { x: 1171, y: 1055 },
    type: 'canyon',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-26',
    name: 'Billings District',
    position: { x: 1268, y: 982 },
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-27',
    name: 'Knight Street',
    position: { x: 1215, y: 1025 },
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-28',
    name: 'Silk Road',
    position: { x: 1195, y: 1180 },
    type: 'circuit',
    conqueredBy: 'crew-5',
  },
  {
    id: 'star-29',
    name: 'Kimei Temple',
    position: { x: 1248, y: 1186 },
    type: 'drift',
    conqueredBy: 'crew-3',
  },
  {
    id: 'star-30',
    name: 'Chinatown Tram',
    position: { x: 1163, y: 1143 },
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-31',
    name: 'Desperation Ridge',
    position: { x: 1107, y: 1171 },
    type: 'drift',
    conqueredBy: 'crew-5',
  },
  {
    id: 'star-32',
    name: 'Chinatown Delivery / Welcome to Palmont',
    position: { x: 1127, y: 1140 },
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-33',
    name: 'Campbell Tunnel',
    position: { x: 1370, y: 1052},
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-34',
    name: 'Lincoln Boulevard',
    position: {x: 1390, y: 1189},
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-35',
    name: 'Construction Route',
    position: {x: 1352, y: 1194},
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-36',
    name: 'Main Street / Kimei Temple',
    position: { x: 1333, y: 1106},
    type: 'circuit', //Needs to be circuit OR street-X
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-37',
    name: 'Sutherden Bell Tower',
    position: { x: 1353, y: 965},
    type: 'racewar',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-38',
    name: 'Devils Creek Pass',
    position: { x: 1416, y: 999},
    type: 'canyon',
    conqueredBy: 'crew-3',
  },
  {
    id: 'star-39',
    name: 'Lookout Point',
    position: { x: 1488, y: 1129},
    type: 'drift',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-40',
    name: 'Lincoln Circuit',
    position: { x: 1439, y: 1172},
    type: 'circuit',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-41',
    name: 'Mason Street',
    position: { x: 1463, y: 1067},
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-42',
    name: 'Garden Boulevard',
    position: { x: 1540, y: 1159},
    type: 'circuit',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-43',
    name: 'Kings Park',
    position: { x: 1568, y: 999},
    type: 'drift',
    conqueredBy: 'crew-3',
  },
  {
    id: 'star-44',
    name: 'Downtown Tunnel',
    position: { x: 1583, y: 1148},
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-45',
    name: 'Old Quarter',
    position: { x: 1502, y: 1173},
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-46', //After this one, everything repeats (Except for star number)
    name: 'Kings Park',
    position: { x: 1589, y: 1039},
    type: 'streetx',
    conqueredBy: 'crew-3',
  },
  {id: 'star-47',
    name: 'City Courthouse / City Courthouse',
    position: { x: 631, y: 923},
    type: 'drift', //Needs to be drift OR Street-X
    conqueredBy: 'crew-8',
  },
  {
    id: 'star-48',
    name: 'Ocean Drive',
    position: { x: 519, y: 915},
    type: 'sprint',
    conqueredBy: 'crew-8',
  },
  {
    id: 'star-49',
    name: 'Palmont University',
    position: { x: 578, y: 972},
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-50',
    name: 'University Way',
    position: { x: 547, y: 857},
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-51',
    name: 'University Avenue',
    position: { x: 473, y: 935},
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-52',
    name: 'Fortuna Heights',
    position: { x: 618, y: 1085},
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-53',
    name: 'Skyline Avenue',
    position: { x: 587, y: 1055},
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-54',
    name: 'Verona Tunnel',
    position: { x: 535, y: 1176},
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-55',
    name: 'Library Square',
    position: { x: 533, y: 1081},
    type: 'racewar',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-56',
    name: 'Route 21',
    position: { x: 595, y: 1218},
    type: 'racewar',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-57',
    name: 'Lofty Heights Downhill',
    position: { x: 718, y: 1025},
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-58',
    name: 'Lofty Heights Downhill',
    position: { x: 798, y: 982},
    type: 'canyon',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-59',
    name: 'North Bellezza',
    position: { x: 682, y: 981},
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-60',
    name: 'Mason St Bridge',
    position: { x: 739, y: 1060},
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-61',
    name: 'Eternity Pass',
    position: { x: 795, y: 1132},
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-62',
    name: 'South Fortuna',
    position: { x: 819, y: 1165},
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-63',
    name: 'Ocean View',
    position: { x: 646, y: 1232},
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-64',
    name: 'York Road',
    position: { x: 800, y: 1199},
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-65',
    name: 'Rabinowitz Drive',
    position: { x: 742, y: 1147},
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-66',
    name: 'Copper Ridge',
    position: { x: 960, y: 1177},
    type: 'drift',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-67',
    name: 'Condo Row',
    position: { x: 916, y: 1066},
    type: 'circuit',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-68',
    name: 'Agostini Avenue',
    position: { x: 840, y: 1089},
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-69',
    name: 'Eternity Pass',
    position: { x: 904, y: 1190},
    type: 'canyon',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-70',
    name: 'Hills Borough Parkway',
    position: { x: 937, y: 1032},
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-71',
    name: 'Deadfall Junction',
    position: { x: 1090, y: 511},
    type: 'canyon',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-72',
    name: 'Savannah Street',
    position: { x: 1171, y: 531},
    type: 'circuit',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-73',
    name: 'Shady Pine',
    position: { x: 1211, y: 518},
    type: 'drift',
    conqueredBy: 'crew-3',
  },
  {
    id: 'star-74',
    name: 'Blackwell Bridge',
    position: { x: 1209, y: 580},
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-75',
    name: 'Hills Borough Run',
    position: { x: 1145, y: 615},
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-76',
    name: 'North Broadway',
    position: { x: 1259, y: 570},
    type: 'circuit',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-77',
    name: 'Silverton Way',
    position: { x: 1296, y: 525},
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-78',
    name: 'Troy',
    position: { x: 1305, y: 657},
    type: 'sprint',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-79',
    name: 'Platinum Condos',
    position: { x: 1276, y: 693},
    type: 'racewar',
    conqueredBy: 'crew-4',
  },
  {
    id: 'star-80',
    name: 'Starlight Strip',
    position: { x: 1295, y: 747},
    type: 'drift',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-81',
    name: 'The Neon Mile',
    position: { x: 1220, y: 711},
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-82',
    name: 'Lucky Towers',
    position: { x: 1255, y: 767},
    type: 'circuit',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-83',
    name: 'Infinity Park',
    position: { x: 1356, y: 778},
    type: 'streetx',
    conqueredBy: undefined,
  },
  {
    id: 'star-84',
    name: 'Tram Boundary',
    position: { x: 1162, y: 845},
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-85',
    name: 'Deadfall Junction',
    position: { x: 1330, y: 830},
    type: 'drift',
    conqueredBy: 'crew-5',
  },
  {
    id: 'star-86',
    name: 'Starlight Street',
    position: { x: 1216, y: 819},
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-87',
    name: 'Blackwell Road',
    position: { x: 1276, y: 811},
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-88',
    name: 'After Hours',
    position: { x: 1395, y: 585},
    type: 'sprint',
    conqueredBy: undefined,
  },
  {
    id: 'star-89',
    name: 'Paradise Hotel',
    position: { x: 1340, y: 618},
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-90',
    name: 'Spade Street',
    position: { x: 1354, y: 548},
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-91',
    name: 'Eagle Drive',
    position: { x: 1412, y: 676},
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-92',
    name: 'Copper Ridge',
    position: { x: 1424, y: 749},
    type: 'canyon',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-93',
    name: 'Infinity Park',
    position: { x: 1433, y: 784},
    type: 'drift',
    conqueredBy: 'crew-5',
  },
  {
    id: 'star-94',
    name: 'Gray Street',
    position: { x: 1465, y: 642},
    type: 'sprint',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-95',
    name: 'Desperation Ridge',
    position: { x: 1472, y: 588},
    type: 'canyon',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-96',
    name: 'Brooks Street',
    position: { x: 1438, y: 576},
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-97',
    name: 'Journeymans Bane',
    position: { x: 1434, y: 513},
    type: 'drift',
    conqueredBy: undefined,
  },
  {
    id: 'star-98',
    name: 'Royal Avenue',
    position: { x: 798, y: 750},
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-99',
    name: 'Garcia Street',
    position: { x: 649, y: 744},
    type: 'racewar',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-100',
    name: 'Montezuma Avenue',
    position: { x: 664, y: 700},
    type: 'circuit',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-101',
    name: 'Mesa Bridge',
    position: FIXED_STAR_POSITIONS[9],
    type: 'sprint',
    conqueredBy: 'crew-1',
  },
  {
    id: 'star-102',
    name: 'Salazar Street',
    position: FIXED_STAR_POSITIONS[10],
    type: 'circuit',
    conqueredBy: undefined,
  },
  {
    id: 'star-103',
    name: 'Journeymans Bane',
    position: FIXED_STAR_POSITIONS[11],
    type: 'canyon',
    conqueredBy: 'crew-2',
  },
  {
    id: 'star-104',
    name: 'Knifes Edge',
    position: FIXED_STAR_POSITIONS[12],
    type: 'canyon',
    conqueredBy: 'crew-3',
    },
  {
    id: 'star-105',
    name: 'Lookout Point',
    position: FIXED_STAR_POSITIONS[12],
    type: 'canyon',
    conqueredBy: 'crew-3',
    },
];