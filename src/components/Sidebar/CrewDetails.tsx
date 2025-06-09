import React from 'react';
import { Crew } from '../../types';
import { Users, Trophy, X } from 'lucide-react';
import Button from '../UI/Button';
import { useGame } from '../../context/GameContext';

interface CrewDetailsProps {
  crew: Crew;
  onClose: () => void;
}

const CrewDetails: React.FC<CrewDetailsProps> = ({ crew, onClose }) => {
  const { filterStarsByCrew } = useGame();
  
  return (
    <div className="p-4 bg-gray-900 border-t border-gray-800">
      <div className="flex justify-between items-start mb-4">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center mr-3 overflow-hidden"
          style={{ backgroundColor: `${crew.themeColor}20`, color: crew.themeColor }}
        >
          {crew.logo ? (
            <img 
              src={crew.logo} 
              alt={`${crew.name} logo`} 
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                // Fallback to initial letter if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
          ) : null}
          <div 
            className={`font-bold text-2xl w-full h-full flex items-center justify-center ${crew.logo ? 'hidden' : 'flex'}`}
            style={{ display: crew.logo ? 'none' : 'flex' }}
          >
            {crew.name.charAt(0)}
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onClose}
          className="w-8 h-8 p-0 flex items-center justify-center"
        >
          <X size={16} />
        </Button>
      </div>
      
      <h2 className="text-xl font-bold mb-1" style={{ color: crew.themeColor }}>
        {crew.name}
      </h2>
      
      <div className="flex items-center text-gray-400 mb-4">
        <div className="flex items-center mr-4">
          <Users size={16} className="mr-1" />
          <span>{crew.memberCount} members</span>
        </div>
        <div className="flex items-center" style={{ color: crew.themeColor }}>
          <Trophy size={16} className="mr-1" />
          <span>{crew.conqueredStars} stars</span>
        </div>
      </div>
      
      {crew.description && (
        <p className="text-gray-300 text-sm mb-4">{crew.description}</p>
      )}
      
      <div className="flex space-x-2 mt-4">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => filterStarsByCrew(crew.id)}
          className="flex-1"
        >
          View Stats
        </Button>
        <Button 
          variant="primary"
          size="sm"
          className="flex-1"
          style={{ 
            backgroundColor: crew.themeColor,
            boxShadow: `0 0 10px ${crew.themeColor}40`
          }}
          onClick={() => {}}
        >
          Join Crew
        </Button>
      </div>
    </div>
  );
};

export default CrewDetails;