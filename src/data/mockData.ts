import { Crew, RaceStar } from '../types';

export const crews: Crew[] = [
  {
    id: 'crew-1',
    name: 'Neon Drifters',
    themeColor: '#FF36AB', // Neon pink
    memberCount: 32,
    conqueredStars: 12,
    description: 'Masters of the night streets, known for their flashy cars and perfect drifting techniques.'
  },
  {
    id: 'crew-2',
    name: 'Velocity Demons',
    themeColor: '#3B82F6', // Blue
    memberCount: 28,
    conqueredStars: 8,
    description: 'Speed is their religion. They dominate straight-line races and high-speed circuits.'
  },
  {
    id: 'crew-3',
    name: 'Off-Grid Rebels',
    themeColor: '#10B981', // Green
    memberCount: 18,
    conqueredStars: 6,
    description: 'No road is too rough. They specialize in off-road racing and wilderness navigation.'
  },
  {
    id: 'crew-4',
    name: 'Asphalt Monarchs',
    themeColor: '#F59E0B', // Amber
    memberCount: 24,
    conqueredStars: 10,
    description: 'The original street kings, respected by all for their technical precision and class.'
  },
  {
    id: 'crew-5',
    name: 'Midnight Phantoms',
    themeColor: '#8B5CF6', // Purple
    memberCount: 15,
    conqueredStars: 5,
    description: 'Mysterious and elusive, they appear only at night and vanish before dawn.'
  }
];

// Generate a grid of race stars across the map
export const generateRaceStars = (): RaceStar[] => {
  const stars: RaceStar[] = [];
  const types: Array<'sprint' | 'circuit' | 'drift' | 'drag' | 'offroad'> = ['sprint', 'circuit', 'drift', 'drag', 'offroad'];
  const difficulties: Array<'easy' | 'medium' | 'hard' | 'extreme'> = ['easy', 'medium', 'hard', 'extreme'];
  
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
        x: 100 + Math.random() * 800, // Spread across the 1000x600 map
        y: 100 + Math.random() * 400,
      },
      difficulty: difficulties[Math.floor(Math.random() * difficulties.length)],
      type: types[Math.floor(Math.random() * types.length)],
      conqueredBy: crewAssignments[starId as keyof typeof crewAssignments],
      rewardPoints: 100 + Math.floor(Math.random() * 400),
    });
  }

  return stars;
};

export const raceStars = generateRaceStars();