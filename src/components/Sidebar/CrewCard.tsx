import React from 'react';
import { Crew } from '../../types';
import { Users, Trophy } from 'lucide-react';

interface CrewCardProps {
  crew: Crew;
  isSelected: boolean;
  onClick: () => void;
}

const CrewCard: React.FC<CrewCardProps> = ({ crew, isSelected, onClick }) => {
  return (
    <div 
      className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
        isSelected 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-gray-900 border-gray-800 hover:bg-gray-800'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        {/* Crew logo/icon */}
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
          style={{ backgroundColor: `${crew.themeColor}20`, color: crew.themeColor }}
        >
          {crew.logo ? (
            <img src={crew.logo} alt={crew.name} className="w-6 h-6" />
          ) : (
            <div className="font-bold text-lg">{crew.name.charAt(0)}</div>
          )}
        </div>
        
        {/* Crew name and stats */}
        <div className="flex-1">
          <h3 className="font-bold text-white">{crew.name}</h3>
          <div className="flex items-center text-xs text-gray-400 mt-1">
            <div className="flex items-center mr-3">
              <Users size={12} className="mr-1" />
              <span>{crew.memberCount}</span>
            </div>
            <div className="flex items-center" style={{ color: crew.themeColor }}>
              <Trophy size={12} className="mr-1" />
              <span>{crew.conqueredStars}</span>
            </div>
          </div>
        </div>
        
        {/* Color indicator */}
        <div 
          className="w-3 h-8 rounded-full"
          style={{ backgroundColor: crew.themeColor }}
        ></div>
      </div>
    </div>
  );
};

export default CrewCard;