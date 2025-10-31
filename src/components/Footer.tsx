import React from 'react';
import { Heart, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-red-900 via-red-800 to-orange-800 text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-800/20 via-orange-800/20 to-yellow-800/20"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-red-600 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative z-10">
          <div className="flex justify-center items-center mb-6">
            <Star className="w-8 h-8 text-yellow-400 mr-3" />
            <h3 className="text-2xl font-bold">Stanford University Application Portfolio</h3>
            <Star className="w-8 h-8 text-yellow-400 ml-3" />
          </div>
          
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Dedicated to excellence in academics, athletics, and innovation. 
            Committed to making a positive impact through technology, leadership, and service.
          </p>
          
          <div className="flex justify-center items-center space-x-2 text-white/70">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-yellow-400" />
            <span>for Stanford University Application</span>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm">
              © 2024 Student Portfolio. All rights reserved. | Designed for Stanford University Application
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;