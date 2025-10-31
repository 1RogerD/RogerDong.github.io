import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const PotteryActivityPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/#activities');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-orange-800 to-yellow-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <a
          onClick={handleBackClick}
          className="inline-flex items-center text-lg text-white/80 hover:text-white mb-8 cursor-pointer"
        >
          <FaArrowLeft className="mr-2" />
          Back to Activities
        </a>
        <h1 className="text-4xl font-bold mb-8">Pottery (陶艺)</h1>
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <p className="text-xl text-white/90 mb-6">Ceramic arts and creative expression.</p>
          <p className="text-lg text-white/80">
            This page is dedicated to the art of pottery. It would feature a gallery of my creations, insights into the creative process, and the story behind my passion for ceramics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PotteryActivityPage;