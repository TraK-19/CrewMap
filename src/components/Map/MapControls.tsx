import React from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Filter, Users } from 'lucide-react';
import Button from '../UI/Button';
import { useGame } from '../../context/GameContext';

interface MapControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  onFilterClick: () => void;
  showFilters: boolean;
}

const MapControls: React.FC<MapControlsProps> = ({
  onZoomIn,
  onZoomOut,
  onReset,
  onFilterClick,
  showFilters
}) => {
  const { resetFilters } = useGame();
  
  const toggleSidebar = () => {
    const sidebar = document.getElementById('sidebar-container');
    if (sidebar) {
      const isHidden = sidebar.style.transform === 'translateX(100%)' || !sidebar.style.transform;
      sidebar.style.transform = isHidden ? 'translateX(0)' : 'translateX(100%)';
    }
  };
  
  return (
    <div className="absolute bottom-6 right-6 flex flex-col gap-2">
      {/* Mobile Crews button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleSidebar}
        className="md:hidden w-9 h-9 flex items-center justify-center bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-lg border border-gray-800"
      >
        <Users size={18} />
      </Button>

      <div className="flex flex-col gap-2 p-2 bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-lg border border-gray-800 z-30">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onZoomIn}
          className="w-9 h-9 flex items-center justify-center"
        >
          <ZoomIn size={18} />
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onZoomOut}
          className="w-9 h-9 flex items-center justify-center"
        >
          <ZoomOut size={18} />
        </Button>
        
        <div className="w-full h-px bg-gray-800 my-1"></div>
        
        <Button 
          variant="ghost" 
          size="sm"
          onClick={onReset}
          className="w-9 h-9 flex items-center justify-center"
        >
          <RotateCcw size={18} />
        </Button>
        
        <div className="w-full h-px bg-gray-800 my-1"></div>
        
        <Button 
          variant={showFilters ? "secondary" : "ghost"}
          size="sm"
          onClick={onFilterClick}
          className="w-9 h-9 flex items-center justify-center"
        >
          <Filter size={18} />
        </Button>
      </div>
      
      {showFilters && (
        <div className="absolute right-12 bottom-0 p-3 bg-gray-900 border border-gray-800 rounded-lg shadow-lg w-48 max-w-[calc(100vw-6rem)]">
          <h3 className="text-sm font-bold mb-2">Filter By:</h3>
          
          <div className="space-y-2">
            <h4 className="text-xs text-gray-400">Race Type</h4>
            <div className="grid grid-cols-2 gap-1">
              <FilterButton type="sprint" label="Sprint" />
              <FilterButton type="circuit" label="Circuit" />
              <FilterButton type="drift" label="Drift" />
              <FilterButton type="canyon" label="Canyon" />
              <FilterButton type="racewar" label="Race War" />
            </div>
            
            <h4 className="text-xs text-gray-400 mt-3">Status</h4>
            <div className="grid grid-cols-2 gap-1">
              <Button
                variant="outline"
                size="sm"
                className="text-xs py-1"
                onClick={resetFilters}
              >
                Show All
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs py-1"
                onClick={() => {}}
              >
                Unconquered
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper component for filter buttons
const FilterButton: React.FC<{ type: string, label: string }> = ({ type, label }) => {
  const { filterStarsByType } = useGame();
  
  const getTypeColor = () => {
    switch(type) {
      case 'sprint': return '#3B82F6'; // Blue
      case 'circuit': return '#10B981'; // Green
      case 'drift': return '#FF36AB';  // Pink
      case 'canyon': return '#F59E0B';   // Amber
      case 'racewar': return '#8B5CF6'; // Purple
      default: return '#3B82F6';
    }
  };
  
  return (
    <button
      className="text-xs py-1 px-2 rounded border"
      style={{ 
        backgroundColor: `${getTypeColor()}20`,
        borderColor: getTypeColor(),
        color: getTypeColor()
      }}
      onClick={() => filterStarsByType(type)}
    >
      {label}
    </button>
  );
};

export default MapControls;