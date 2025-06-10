import React from 'react';
import { RaceStar as RaceStarType, Crew } from '../../types';
import { Star as MapStar, ArrowUpCircle } from 'lucide-react';

interface RaceStarProps {
  star: RaceStarType;
  crews: Crew[];
  isSelected: boolean;
  onClick: () => void;
  scale: number;
}

const RaceStar: React.FC<RaceStarProps> = ({ 
  star, 
  crews, 
  isSelected, 
  onClick,
  scale = 1
}) => {
  // Find the crew that has conquered this star
  const ownerCrew = crews.find(crew => crew.id === star.conqueredBy);
  
  // Determine color based on ownership
  const starColor = ownerCrew ? ownerCrew.themeColor : '#FFFFFF';
  const starOpacity = ownerCrew ? '1' : '1';

  // Get race type display name and color
  const getRaceTypeInfo = (type: string) => {
    switch(type) {
      case 'sprint': return { name: 'Sprint', color: '#0d9b0d' };
      case 'circuit': return { name: 'Circuit', color: '#6413d6' };
      case 'drift': return { name: 'Drift', color: '#c6ef87' };
      case 'racewar': return { name: 'Race War', color: '#F59E0B' };
      case 'canyon': return { name: 'Canyon', color: '#138af4' };
      case 'streetx': return { name: 'Street-X', color: '#7eb9e0' };
      default: return { name: type, color: '#3B82F6' };
    }
  };

  const raceTypeInfo = getRaceTypeInfo(star.type);

  return (
    <div 
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-10 cursor-pointer
                ${isSelected ? 'scale-125 z-20' : 'hover:scale-110'}`}
      style={{ 
        left: `${star.position.x}px`, 
        top: `${star.position.y}px`,
        transform: `translate(-50%, -50%) scale(${scale})`,
      }}
      onClick={onClick}
    >
      {/* Main star icon */}
      <div 
        className="w-6 h-6 relative flex items-center justify-center transition-all duration-300"
        style={{ 
          color: starColor,
          opacity: starOpacity,
          filter: `drop-shadow(0 0 6px ${starColor})`
        }}
      >
        <MapStar className="w-full h-full" />
        
        {/* Ownership indicator */}
        {ownerCrew && (
          <div className="absolute -bottom-1 -right-1 bg-gray-900 rounded-full p-0.5 border-2" 
               style={{ borderColor: ownerCrew.themeColor }}>
            <ArrowUpCircle size={6} style={{ color: ownerCrew.themeColor }} />
          </div>
        )}
      </div>
      
      {/* Race info tooltip (only shows when selected) */}
      {isSelected && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 p-3 bg-gray-900 bg-opacity-95 rounded-md border border-gray-700 shadow-lg z-30">
          <h3 className="font-bold text-white mb-2">{star.name}</h3>
          
          {/* Race type badge */}
          <div className="mb-2">
            <span 
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border"
              style={{ 
                backgroundColor: `${raceTypeInfo.color}20`,
                color: raceTypeInfo.color,
                borderColor: `${raceTypeInfo.color}40`
              }}
            >
              {raceTypeInfo.name}
            </span>
          </div>
          
          {/* Conquest status */}
          <div className="text-xs text-gray-300">
            {ownerCrew ? (
              <p>
                Conquered by: <span style={{ color: ownerCrew.themeColor }}>{ownerCrew.name}</span>
              </p>
            ) : (
              <p className="text-gray-400 italic">Unconquered</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RaceStar;