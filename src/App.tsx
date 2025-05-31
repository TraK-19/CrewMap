import React from 'react';
import { GameProvider } from './context/GameContext';
import Header from './components/Header/Header';
import MapContainer from './components/Map/MapContainer';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <GameProvider>
      <div className="flex flex-col h-screen bg-gray-950 text-gray-200 overflow-hidden">
        <Header />
        
        <div className="flex flex-1 overflow-hidden">
          {/* Main content - Map */}
          <div className="flex-1 p-4 overflow-hidden">
            <MapContainer />
          </div>
          
          {/* Sidebar - Crews */}
          <div className="w-80 hidden md:block">
            <Sidebar />
          </div>
        </div>
      </div>
    </GameProvider>
  );
}

export default App;