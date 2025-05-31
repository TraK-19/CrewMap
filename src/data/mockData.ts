import { Crew, RaceStar } from '../types';

export const crews: Crew[] = [
  {
    id: 'crew-1',
    name: 'Roads Unlimited',
    themeColor: '#969696',
    memberCount: 9,
    conqueredStars: 12,
    description: 'Masters of the streets, known for their precision driving and tactical racing.'
  },
  {
    id: 'crew-2',
    name: 'Walkers',
    themeColor: '#ffc900',
    memberCount: 7,
    conqueredStars: 8,
    description: 'Speed demons who rule the night, leaving their mark on every street they conquer.'
  },
  {
    id: 'crew-3',
    name: 'The ACES',
    themeColor: '#001f8d',
    memberCount: 7,
    conqueredStars: 6,
    description: 'Elite racers who dominate with skill and strategy.'
  },
  {
    id: 'crew-4',
    name: 'Speed Of Light',
    themeColor: '#fcff92',
    memberCount: 9,
    conqueredStars: 10,
    description: 'Lightning-fast racers who strike before you even see them coming.'
  },
  {
    id: 'crew-5',
    name: 'Void Cascade',
    themeColor: '#810db6',
    memberCount: 5,
    conqueredStars: 5,
    description: 'Masters of the shadows, they emerge only to claim victory.'
  },
  {
    id: 'crew-6',
    name: 'Ex-Machina',
    themeColor: '#00ffe5',
    memberCount: 2,
    conqueredStars: 0,
    description: 'Tech-savvy racers who merge machine precision with human instinct.'
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
    description: 'Operating in the moral gray area, these skilled hackers turned street racers never play by the rules.'
  },
  {
    id: 'crew-9',
    name: 'Red Knights',
    themeColor: '#aa0004',
    memberCount: 1,
    conqueredStars: 0,
    description: 'A lone wolf with the skill and determination to challenge entire crews.'
  }
];

// Generate a grid of race stars across the map
export const generateRaceStars = (): RaceStar[] => {
  const stars: RaceStar[] = [];
  const types: Array<'sprint' | 'circuit' | 'drift' | 'drag' | 'offroad'> = ['sprint', 'circuit', 'drift', 'drag', 'offroad'];
  
  // Assign some stars to crews
  const crewAssignments = {
    'star-1': 'crew-1',
    'star-3': 'crew-1',
    'star-5': 'crew-1',
    'star-7': 'crew-2',
    'star-9': 'crew-2',
    'star-11': 'crew-3',
    'star-13': 'crew-3',
    'star-15': 'crew-4',
    'star-17': 'crew-4',
    'star-19': 'crew-5',
  };

  // Create 20 race stars spread across the map
  for (let i = 0; i < 20; i++) {
    const starId = `star-${i + 1}`;
    stars.push({
      id: starId,
      name: `Race ${i + 1}`,
      position: {
        x: 100 + Math.random() * 800,
        y: 100 + Math.random() * 400,
      },
      type: types[Math.floor(Math.random() * types.length)],
      conqueredBy: crewAssignments[starId as keyof typeof crewAssignments],
      rewardPoints: 100 + Math.floor(Math.random() * 400),
    });
  }

  return stars;
};

export const raceStars = generateRaceStars();