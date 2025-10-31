import React from 'react';
import { FaMusic, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const GuzhengActivityPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/#activities');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <a
          onClick={handleBackClick}
          className="inline-flex items-center text-lg text-white/80 hover:text-white mb-8 cursor-pointer"
        >
          <FaArrowLeft className="mr-2" />
          Back to Activities
        </a>
        <h1 className="text-4xl font-bold mb-8 flex items-center">
          <FaMusic className="mr-4" />
          Guzheng (古筝)
        </h1>
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <p className="text-xl text-white/90 mb-6">
            2+ years study, performing classical Chinese folk pieces.
          </p>
          <p className="text-lg text-white/80">
            This page would showcase my journey with the Guzheng, including recordings of performances, information about the instrument, and my personal connection to this traditional art form.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuzhengActivityPage;