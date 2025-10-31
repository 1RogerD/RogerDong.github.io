import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const CtySummerSchoolActivityPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/#activities');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-pink-800 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <a
          onClick={handleBackClick}
          className="inline-flex items-center text-lg text-white/80 hover:text-white mb-8 cursor-pointer"
        >
          <FaArrowLeft className="mr-2" />
          Back to Activities
        </a>
        <h1 className="text-4xl font-bold mb-8">CTY Summer School</h1>
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <p className="text-xl text-white/90 mb-6">Johns Hopkins Center for Talented Youth program.</p>
          <p className="text-lg text-white/80">
            This page would provide details about my participation in the CTY summer program, including the courses taken, projects completed, and the overall experience of being part of this community of young scholars.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CtySummerSchoolActivityPage;