import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm text-white py-4 px-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-8 items-center">
          <Link to="/" className="text-xl font-medium">ATD</Link>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/join">Join Us</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/community">Community</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/work-with-us" 
            className="text-gray-300 hover:text-white transition"
          >
            Work with us
          </Link>
          <Link 
            to="/apply" 
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Apply Now
          </Link>
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/join">Join Us</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/community">Community</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <hr className="border-gray-800" />
            <NavLink to="/work-with-us">Work with us</NavLink>
            <Link 
              to="/apply" 
              className="bg-white text-black px-4 py-2 rounded-full text-center hover:bg-gray-200 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to}
    className="hover:text-gray-300 transition duration-300"
  >
    {children}
  </Link>
);

export default Navigation;