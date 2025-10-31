import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const FencingActivityPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/#activities');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-yellow-800 to-orange-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <a
          onClick={handleBackClick}
          className="inline-flex items-center text-lg text-white/80 hover:text-white mb-8 cursor-pointer"
        >
          <FaArrowLeft className="mr-2" />
          Back to Activities
        </a>
        <h1 className="text-4xl font-bold mb-8">Fencing</h1>
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <p className="text-xl text-white/90 mb-6">Olympic sport precision and strategy.</p>
          <p className="text-lg text-white/80">
            This page would explore the world of fencing, from the gear and rules to the intense mental and physical challenges of a bout. It would also document my progress and competition experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FencingActivityPage;