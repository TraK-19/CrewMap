import React, { useState, useRef, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import RaceStar from './RaceStar';
import MapControls from './MapControls';

const MAP_WIDTH = 2048;
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
  const [lastTouchDistance, setLastTouchDistance] = useState(0);
  const mapRef = useRef<HTMLDivElement>(null);
  
  // Set initial fullscreen viewport
  useEffect(() => {
    if (mapRef.current) {
      const containerWidth = mapRef.current.clientWidth;
      const containerHeight = mapRef.current.clientHeight;
      const scale = Math.min(containerWidth / MAP_WIDTH, containerHeight / MAP_HEIGHT);
      const initialZoom = Math.max(scale * 1.5, MIN_ZOOM); // 1.5x scale for better visibility
      const centerX = (containerWidth - MAP_WIDTH * initialZoom) / 2;
      const centerY = (containerHeight - MAP_HEIGHT * initialZoom) / 2;
      
      updateMapViewport({
        x: centerX,
        y: centerY,
        zoom: initialZoom
      });
    }
  }, []);
  
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
    if (mapRef.current) {
      const containerWidth = mapRef.current.clientWidth;
      const containerHeight = mapRef.current.clientHeight;
      const scale = Math.min(containerWidth / MAP_WIDTH, containerHeight / MAP_HEIGHT);
      const initialZoom = Math.max(scale * 1.5, MIN_ZOOM);
      const centerX = (containerWidth - MAP_WIDTH * initialZoom) / 2;
      const centerY = (containerHeight - MAP_HEIGHT * initialZoom) / 2;
      
      updateMapViewport({
        x: centerX,
        y: centerY,
        zoom: initialZoom
      });
    }
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
  
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - mapViewport.x,
        y: e.touches[0].clientY - mapViewport.y
      });
    } else if (e.touches.length === 2) {
      // Store the initial distance between two fingers for pinch zoom
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setLastTouchDistance(distance);
    }
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault(); // Prevent default scrolling
    
    if (e.touches.length === 1 && isDragging) {
      updateMapViewport({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    } else if (e.touches.length === 2) {
      // Handle pinch zoom
      const distance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      
      const delta = distance - lastTouchDistance;
      const zoomDelta = delta * 0.01; // Adjust sensitivity as needed
      
      const newZoom = Math.min(Math.max(mapViewport.zoom + zoomDelta, MIN_ZOOM), MAX_ZOOM);
      updateMapViewport({ zoom: newZoom });
      
      setLastTouchDistance(distance);
    }
  };
  
  const handleTouchEnd = () => {
    setIsDragging(false);
    setLastTouchDistance(0);
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
  
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
      {/* Map backdrop */}
      <div 
        ref={mapRef}
        className="absolute w-full h-full cursor-grab touch-none"
        style={{ 
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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