import React from 'react';
import { Map, Trophy, Users, MenuSquare } from 'lucide-react';
import Button from '../UI/Button';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-800 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo and title */}
        <div className="flex items-center">
          <div className="mr-3 text-blue-500">
            <Map size={28} className="shadow-glow-blue" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">RaceStars</h1>
            <p className="text-xs text-gray-400">Conquer the map. Rule the streets.</p>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink icon={<Map size={16} />} isActive>Map</NavLink>
          <NavLink icon={<Trophy size={16} />}>Leaderboard</NavLink>
          <NavLink icon={<Users size={16} />}>Crews</NavLink>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden p-1 text-gray-400 hover:text-white">
          <MenuSquare size={24} />
        </button>
      </div>
    </header>
  );
};

interface NavLinkProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ children, icon, isActive = false }) => {
  return (
    <a 
      href="#" 
      className={`flex items-center text-sm font-medium ${
        isActive 
          ? 'text-blue-500' 
          : 'text-gray-400 hover:text-white'
      }`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {isActive && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div>
      )}
    </a>
  );
};

export default Header;