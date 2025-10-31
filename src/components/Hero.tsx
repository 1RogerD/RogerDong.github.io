import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        {/* Large floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-4000"></div>
        
        {/* Animated bubbles */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-orange-400 rounded-full opacity-25 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-red-400 rounded-full opacity-15 animate-float animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-yellow-300 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/2 w-14 h-14 bg-orange-300 rounded-full opacity-20 animate-float animation-delay-2000"></div>
        
        {/* Small scattered bubbles */}
        <div className="absolute top-20 right-1/2 w-6 h-6 bg-yellow-500 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute top-1/2 left-20 w-4 h-4 bg-orange-500 rounded-full opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-10 h-10 bg-red-400 rounded-full opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute top-32 left-1/2 w-8 h-8 bg-yellow-400 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-orange-400 rounded-full opacity-15 animate-pulse animation-delay-2000"></div>
        
        {/* Geometric shapes for variety */}
        <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-yellow-400 opacity-20 animate-float transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-orange-400 opacity-25 animate-float animation-delay-4000 transform rotate-12"></div>
        <div className="absolute top-3/4 left-1/2 w-10 h-10 bg-red-400 opacity-15 animate-float animation-delay-2000 transform -rotate-45"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-white to-yellow-100 flex items-center justify-center shadow-2xl border-4 border-white">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-red-900 to-black flex items-center justify-center shadow-inner">
              <span className="text-6xl font-bold text-white">R</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Roger Dong
        </h1>
        
        <h2 className="text-3xl md:text-5xl text-yellow-400 font-bold mb-6 drop-shadow-md">
          Innovation Through Excellence
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
          Multi-sport athlete from China, robotics champion, and academic achiever passionate about 
          innovation, leadership, and making a positive impact through technology, sports, and music.
        </p>
        
        
        <a
          href="#about"
          className="inline-flex items-center px-8 py-4 bg-yellow-400 text-red-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Discover My Journey
          <ChevronDown className="ml-2" size={20} />
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white drop-shadow-lg" size={32} />
      </div>
    </section>
  );
};

export default Hero;