export interface Coordinates {
  x: number;
  y: number;
}

export interface Crew {
  id: string;
  name: string;
  themeColor: string;
  logo?: string;  // URL to the crew's logo image
  memberCount: number;
  conqueredStars: number;
  description?: string;
}

export interface RaceStar {
  id: string;
  name: string;
  position: Coordinates;
  type: 'sprint' | 'circuit' | 'drift' | 'canyon' | 'racewar';
  conqueredBy?: string; // Crew ID
  rewardPoints: number;
}

export interface MapViewport {
  x: number;
  y: number;
  zoom: number;
}