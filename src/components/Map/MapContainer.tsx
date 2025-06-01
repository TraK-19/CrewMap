import React, { useState, useRef, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import RaceStar from './RaceStar';
import MapControls from './MapControls';

const MAP_WIDTH = 2048; // Updated to match typical map dimensions
const MAP_HEIGHT = 2048;
const MIN_ZOOM = 0.25;
const MAX_ZOOM = 2;
const ZOOM_STEP = 0.1;

const MapContainer: React.FC = () => {
  const { 
    raceStars, 
    crews, 
    selectedStar, 
    setSelectedStar,
    filteredStars,
    mapViewport,
    updateMapViewport
  } = useGame();
  
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showFilters, setShowFilters] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  
  const handleZoomIn = () => {
    if (mapViewport.zoom < MAX_ZOOM) {
      updateMapViewport({ zoom: mapViewport.zoom + ZOOM_STEP });
    }
  };
  
  const handleZoomOut = () => {
    if (mapViewport.zoom > MIN_ZOOM) {
      updateMapViewport({ zoom: mapViewport.zoom - ZOOM_STEP });
    }
  };
  
  const handleReset = () => {
    updateMapViewport({ x: 0, y: 0, zoom: 0.5 }); // Default to show more of the map
  };
  
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - mapViewport.x, y: e.clientY - mapViewport.y });
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updateMapViewport({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleStarClick = (star: typeof raceStars[0]) => {
    setSelectedStar(selectedStar?.id === star.id ? null : star);
  };
  
  const handleMapClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedStar(null);
    }
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updateMapViewport({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y
        });
      }
    };
    
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };
    
    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, dragStart, updateMapViewport]);
  
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
      {/* Map backdrop */}
      <div 
        ref={mapRef}
        className="absolute w-full h-full cursor-grab"
        style={{ 
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={handleMapClick}
      >
        {/* Map container with transformation */}
        <div 
          className="absolute top-1/2 left-1/2 transform transition-transform duration-75 ease-linear"
          style={{ 
            width: MAP_WIDTH,
            height: MAP_HEIGHT,
            transform: `translate(${mapViewport.x}px, ${mapViewport.y}px) scale(${mapViewport.zoom})`,
            transformOrigin: 'center',
            backgroundImage: `url('https://cdn.discordapp.com/attachments/1354442171545293000/1378567019640918057/CB_Map_Grayed_UPDATED_31.png?ex=683dbad6&is=683c6956&hm=a7c3d1e6742d294b01783f7ea6f035b5b6e9176aa4d9ce0165d499d8010f7b8f&')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Map overlay for better visibility */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
              boxShadow: 'inset 0 0 200px rgba(0,0,0,0.5)'
            }}
          />
          
          {/* Render all filtered race stars */}
          {filteredStars.map((star) => (
            <RaceStar
              key={star.id}
              star={star}
              crews={crews}
              isSelected={selectedStar?.id === star.id}
              onClick={() => handleStarClick(star)}
              scale={1 / mapViewport.zoom}
            />
          ))}
        </div>
      </div>
      
      {/* Map controls */}
      <MapControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        onFilterClick={toggleFilters}
        showFilters={showFilters}
      />
    </div>
  );
};

export default MapContainer;