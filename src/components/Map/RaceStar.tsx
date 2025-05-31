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
  
  // Determine color based on race type
  const getTypeColor = () => {
    switch(star.type) {
      case 'sprint': return '#3B82F6'; // Blue
      case 'circuit': return '#10B981'; // Green
      case 'drift': return '#FF36AB';  // Pink
      case 'drag': return '#F59E0B';   // Amber
      case 'offroad': return '#8B5CF6'; // Purple
      default: return '#3B82F6';
    }
  };

  const starColor = ownerCrew ? ownerCrew.themeColor : getTypeColor();
  const starOpacity = ownerCrew ? '1' : '0.6';

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
        className="w-8 h-8 relative flex items-center justify-center transition-all duration-300"
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
            <ArrowUpCircle size={12} style={{ color: ownerCrew.themeColor }} />
          </div>
        )}
      </div>
      
      {/* Race info tooltip (only shows when selected) */}
      {isSelected && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 p-2 bg-gray-900 bg-opacity-90 rounded-md border border-gray-700 shadow-lg z-30">
          <h3 className="font-bold text-white">{star.name}</h3>
          <div className="mt-2 text-xs text-gray-300">
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