import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const SwimmingActivityPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/#activities');
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <a
          onClick={handleBackClick}
          className="inline-flex items-center text-lg text-white/80 hover:text-white mb-8 cursor-pointer"
        >
          <FaArrowLeft className="mr-2" />
          Back to Activities
        </a>
        <h1 className="text-4xl font-bold mb-8">Swimming</h1>
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <p className="text-xl text-white/90 mb-6">Competitive swimming as part of multi-sport training. Focus on technique, endurance, and performance improvement.</p>
          <p className="text-lg text-white/80">
            This is a placeholder for more detailed information about swimming.
            In a complete implementation, this would include achievements, skills, and personal reflections.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwimmingActivityPage;