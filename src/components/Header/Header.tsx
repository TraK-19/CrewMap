import React, { useState } from 'react';
import { Map, Trophy, Users, MenuSquare, X } from 'lucide-react';
import Button from '../UI/Button';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-900 border-b border-gray-800 px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo and title */}
        <div className="flex items-center">
          <div className="mr-3 text-blue-500">
            <Map size={28} className="shadow-glow-blue" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">NFSCO: Crew Battles</h1>
            <p className="text-xs text-gray-400">Build your crew. Conquer Palmont City.</p>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink icon={<Map size={16} />} isActive>Map</NavLink>
          <NavLink icon={<Trophy size={16} />}>Leaderboard</NavLink>
          <NavLink icon={<Users size={16} />}>Crews</NavLink>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuSquare size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-4 space-y-2">
          <MobileNavLink icon={<Map size={16} />} isActive>Map</MobileNavLink>
          <MobileNavLink icon={<Trophy size={16} />}>Leaderboard</MobileNavLink>
          <MobileNavLink icon={<Users size={16} />}>Crews</MobileNavLink>
        </nav>
      )}
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
    </a>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ children, icon, isActive = false }) => {
  return (
    <a 
      href="#" 
      className={`flex items-center p-3 rounded-lg ${
        isActive 
          ? 'bg-gray-800 text-blue-500' 
          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
      }`}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {children}
    </a>
  );
};

export default Header;