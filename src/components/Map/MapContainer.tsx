import React, { useState, useRef, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import RaceStar from './RaceStar';
import MapControls from './MapControls';

const MAP_WIDTH = 1000;
const MAP_HEIGHT = 600;
const MIN_ZOOM = 0.5;
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
  
  // Handle zoom in
  const handleZoomIn = () => {
    if (mapViewport.zoom < MAX_ZOOM) {
      updateMapViewport({ zoom: mapViewport.zoom + ZOOM_STEP });
    }
  };
  
  // Handle zoom out
  const handleZoomOut = () => {
    if (mapViewport.zoom > MIN_ZOOM) {
      updateMapViewport({ zoom: mapViewport.zoom - ZOOM_STEP });
    }
  };
  
  // Reset the map view
  const handleReset = () => {
    updateMapViewport({ x: 0, y: 0, zoom: 1 });
  };
  
  // Handle mouse down for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - mapViewport.x, y: e.clientY - mapViewport.y });
  };
  
  // Handle mouse move for dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updateMapViewport({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };
  
  // Handle mouse up to end dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  // Handle star click
  const handleStarClick = (star: typeof raceStars[0]) => {
    setSelectedStar(selectedStar?.id === star.id ? null : star);
  };
  
  // Handle clicking outside to deselect
  const handleMapClick = (e: React.MouseEvent) => {
    // Only deselect if clicking directly on the map background
    if (e.target === e.currentTarget) {
      setSelectedStar(null);
    }
  };
  
  // Toggle filters panel
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  useEffect(() => {
    // Add global mouse event listeners for dragging outside the map
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
            backgroundImage: `
              radial-gradient(circle at 10px 10px, rgba(59, 130, 246, 0.1) 2px, transparent 0), 
              linear-gradient(rgba(31, 41, 55, 0.7) 1px, transparent 1px), 
              linear-gradient(90deg, rgba(31, 41, 55, 0.7) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 100px 100px, 100px 100px',
            backgroundPosition: '0 0, 0 0, 0 0',
            boxShadow: 'inset 0 0 100px rgba(59, 130, 246, 0.2)'
          }}
        >
          {/* Render all filtered race stars */}
          {filteredStars.map((star) => (
            <RaceStar
              key={star.id}
              star={star}
              crews={crews}
              isSelected={selectedStar?.id === star.id}
              onClick={() => handleStarClick(star)}
              scale={1 / mapViewport.zoom} // Maintain size regardless of zoom
            />
          ))}
          
          {/* Map borders with glow effect */}
          <div className="absolute inset-0 pointer-events-none border-2 border-blue-500 opacity-30 rounded shadow-glow-blue"></div>
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