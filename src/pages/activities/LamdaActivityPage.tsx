import React from 'react';
import { FaCertificate, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LamdaActivityPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/#activities');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <a
          onClick={handleBackClick}
          className="inline-flex items-center text-lg text-white/80 hover:text-white mb-8 cursor-pointer"
        >
          <FaArrowLeft className="mr-2" />
          Back to Activities
        </a>
        <h1 className="text-4xl font-bold mb-8 flex items-center">
          <FaCertificate className="mr-4" />
          LAMDA
        </h1>
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <p className="text-xl text-white/90 mb-6">
            London Academy of Music and Dramatic Art certification.
          </p>
          <p className="text-lg text-white/80">
            This page is dedicated to the achievements and experiences related to LAMDA. Further details, certificates, and performance videos would be presented here in a full implementation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LamdaActivityPage;