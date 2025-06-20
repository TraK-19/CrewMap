import React from 'react';
import { useGame } from '../../context/GameContext';
import CrewCard from './CrewCard';
import CrewDetails from './CrewDetails';
import { Search, Trophy, Map, X } from 'lucide-react';
import Button from '../UI/Button';

const Sidebar: React.FC = () => {
  const { crews, selectedCrew, setSelectedCrew } = useGame();
  
  const handleCrewClick = (crew: typeof crews[0]) => {
    setSelectedCrew(selectedCrew?.id === crew.id ? null : crew);
  };

  const closeSidebar = () => {
    const sidebar = document.getElementById('sidebar-container');
    if (sidebar) {
      sidebar.style.transform = 'translateX(100%)';
    }
  };
  
  return (
    <div className="h-full flex flex-col bg-gray-900 border-l border-gray-800 will-change-transform">
      {/* Header */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Crews</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={closeSidebar}
            className="md:hidden w-8 h-8 flex items-center justify-center"
          >
            <X size={20} />
          </Button>
        </div>
        
        {/* Search bar */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search crews..." 
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search size={16} className="absolute left-3 top-2.5 text-gray-500" />
        </div>
      </div>
      
      {/* Crews list */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 overscroll-contain">
        {crews.map((crew) => (
          <CrewCard
            key={crew.id}
            crew={crew}
            isSelected={selectedCrew?.id === crew.id}
            onClick={() => handleCrewClick(crew)}
          />
        ))}
      </div>
      
      {/* Stats bar */}
      <div className="p-3 border-t border-gray-800 bg-gray-900 text-xs text-gray-400">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Trophy size={14} className="mr-1 text-blue-500" />
            <span>105 Total Race Stars</span>
          </div>
          <div className="flex items-center">
            <Map size={14} className="mr-1 text-blue-500" />
            <span>9 Crews Active</span>
          </div>
        </div>
      </div>
      
      {/* Selected crew details */}
      {selectedCrew && (
        <CrewDetails 
          crew={selectedCrew} 
          onClose={() => setSelectedCrew(null)} 
        />
      )}
    </div>
  );
};

export default Sidebar;