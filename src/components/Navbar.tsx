import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm text-white py-4 px-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex space-x-8 items-center">
          <a href="/" className="text-xl font-medium">ATD</a>
          <div className="hidden md:flex space-x-6">
            <a href="/about" className="hover:text-gray-300 transition">About</a>
            <a href="/join" className="hover:text-gray-300 transition">Join Us</a>
            <a href="/projects" className="hover:text-gray-300 transition">Projects</a>
            <a href="/community" className="hover:text-gray-300 transition">Community</a>
            <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-4">
          <a href="/work-with-us" className="text-gray-300 hover:text-white transition">Work with us</a>
          <a href="/apply" className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">
            Apply Now
          </a>
        </div>
        
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;