import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Crew, RaceStar, MapViewport } from '../types';
import { crews, raceStars } from '../data/mockData';

interface GameContextType {
  crews: Crew[];
  raceStars: RaceStar[];
  selectedStar: RaceStar | null;
  selectedCrew: Crew | null;
  filteredStars: RaceStar[];
  mapViewport: MapViewport;
  setSelectedStar: (star: RaceStar | null) => void;
  setSelectedCrew: (crew: Crew | null) => void;
  filterStarsByType: (type: string | null) => void;
  filterStarsByCrew: (crewId: string | null) => void;
  filterUnconqueredStars: () => void;
  updateMapViewport: (viewport: Partial<MapViewport>) => void;
  resetFilters: () => void;
}

const defaultViewport: MapViewport = {
  x: 0,
  y: 0,
  zoom: 1
};

// Create context with undefined as default to ensure proper error handling
const GameContext = createContext<GameContextType | undefined>(undefined);

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [selectedStar, setSelectedStar] = useState<RaceStar | null>(null);
  const [selectedCrew, setSelectedCrew] = useState<Crew | null>(null);
  const [filteredStars, setFilteredStars] = useState<RaceStar[]>(raceStars);
  const [activeFilters, setActiveFilters] = useState<{
    type: string | null;
    crew: string | null;
    unconquered: boolean;
  }>({ type: null, crew: null, unconquered: false });
  const [mapViewport, setMapViewport] = useState<MapViewport>(defaultViewport);

  const filterStarsByType = (type: string | null) => {
    const newFilters = { ...activeFilters, type, unconquered: false };
    applyFilters(newFilters);
  };

  const filterStarsByCrew = (crewId: string | null) => {
    const newFilters = { ...activeFilters, crew: crewId, unconquered: false };
    applyFilters(newFilters);
  };

  const filterUnconqueredStars = () => {
    const newFilters = { type: null, crew: null, unconquered: true };
    applyFilters(newFilters);
  };

  const applyFilters = (filters: typeof activeFilters) => {
    setActiveFilters(filters);
    
    let filtered = [...raceStars];
    
    if (filters.type) {
      filtered = filtered.filter(star => star.type === filters.type);
    }
    
    if (filters.crew) {
      filtered = filtered.filter(star => star.conqueredBy === filters.crew);
    }

    if (filters.unconquered) {
      filtered = filtered.filter(star => !star.conqueredBy);
    }
    
    setFilteredStars(filtered);
  };

  const resetFilters = () => {
    setActiveFilters({ type: null, crew: null, unconquered: false });
    setFilteredStars(raceStars);
  };

  const updateMapViewport = (viewport: Partial<MapViewport>) => {
    setMapViewport(prev => ({ ...prev, ...viewport }));
  };

  const contextValue: GameContextType = {
    crews,
    raceStars,
    selectedStar,
    selectedCrew,
    filteredStars,
    mapViewport,
    setSelectedStar,
    setSelectedCrew,
    filterStarsByType,
    filterStarsByCrew,
    filterUnconqueredStars,
    updateMapViewport,
    resetFilters
  };

  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};