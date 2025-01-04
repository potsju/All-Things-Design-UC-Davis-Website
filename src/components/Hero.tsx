import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-7xl md:text-8xl font-bold leading-tight tracking-tighter mb-8">
          ALL THINGS<br />DESIGN
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
          <p className="text-xl md:text-2xl text-gray-400 max-w-xl">
            A student-led design agency crafting exceptional digital experiences
          </p>
          <div className="h-px md:h-12 w-12 md:w-px bg-gray-700" />
          <p className="text-gray-400">
            Transforming ideas into impactful solutions
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
    </div>
  );
};

export default Hero;