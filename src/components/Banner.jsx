import React from 'react';

const Banner = () => {
  return (
    <div>
        <div className=" bg-gray-900 flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-light text-white mb-4 leading-tight">
          An extraordinary note
        </h1>
        <h2 className="text-5xl md:text-6xl font-light text-white mb-16">
          for <span className="text-emerald-400">makers, creators</span>..
        </h2>
        
        {/* Icon/Logo */}
        <div className="mb-16 flex justify-center">
          <div className="relative">
            {/* Main note icon */}
            <div className="w-20 h-24 bg-transparent border-2 border-emerald-400 rounded-lg relative transform rotate-6">
              {/* Lines inside the note */}
              <div className="absolute top-4 left-3 right-3">
                <div className="h-0.5 bg-emerald-400 mb-2 opacity-60"></div>
                <div className="h-0.5 bg-emerald-400 mb-2 opacity-60"></div>
                <div className="h-0.5 bg-emerald-400 opacity-60 w-3/4"></div>
              </div>
            </div>
            
            {/* Second note behind */}
            <div className="w-20 h-24 bg-transparent border-2 border-emerald-400 rounded-lg absolute top-2 left-2 -z-10 transform -rotate-3">
              {/* Lines inside the second note */}
              <div className="absolute top-4 left-3 right-3">
                <div className="h-0.5 bg-emerald-400 mb-2 opacity-40"></div>
                <div className="h-0.5 bg-emerald-400 mb-2 opacity-40"></div>
                <div className="h-0.5 bg-emerald-400 opacity-40 w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Text */}
        <p className="text-gray-300 text-lg leading-relaxed">
          Creators around the planet use this app
          <br />
          for creating <span className="text-emerald-400 font-medium">magic</span>
        </p>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-emerald-400/5 via-transparent to-transparent pointer-events-none"></div>
      </div>
    </div>
    </div>
  );
};

export default Banner;