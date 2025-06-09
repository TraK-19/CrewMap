export interface Coordinates {
  x: number;
  y: number;
}

export interface Crew {
  id: string;
  name: string;
  themeColor: string;
  logo?: string;
  memberCount: number;
  conqueredStars: number;
  description?: string;
}

export interface RaceStar {
  id: string;
  name: string;
  position: Coordinates;
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme';
  type: 'sprint' | 'circuit' | 'drift' | 'racewar' | 'canyon';
  conqueredBy?: string; // Crew ID
  rewardPoints: number;
}

export interface MapViewport {
  x: number;
  y: number;
  zoom: number;
}