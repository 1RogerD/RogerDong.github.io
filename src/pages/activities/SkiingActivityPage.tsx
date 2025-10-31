import React from 'react';
import ImageGallery from '../../components/ImageGallery';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// Skiing
import skiingCert1 from '/image/课外活动 (2)/滑雪/单板3级证书.jpg';
import skiingCert2 from '/image/课外活动 (2)/滑雪/单板6级证书.jpg';
import skiingCert3 from '/image/课外活动 (2)/滑雪/双板1级证书.png';
import skiingCert4 from '/image/课外活动 (2)/滑雪/双板3级证书.jpg';
import skiingCert5 from '/image/课外活动 (2)/滑雪/双板7级证书.jpg';

const skiingImages = [
  { src: skiingCert1, alt: 'Skiing certificate 1' },
  { src: skiingCert2, alt: 'Skiing certificate 2' },
  { src: skiingCert3, alt: 'Skiing certificate 3' },
  { src: skiingCert4, alt: 'Skiing certificate 4' },
  { src: skiingCert5, alt: 'Skiing certificate 5' },
];

const SkiingActivityPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/#activities');
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-cyan-900 via-cyan-800 to-blue-900 text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <a
          onClick={handleBackClick}
          className="inline-flex items-center text-lg text-white/80 hover:text-white mb-8 cursor-pointer"
        >
          <FaArrowLeft className="mr-2" />
          Back to Activities
        </a>
        <h1 className="text-4xl font-bold mb-8">Skiing</h1>
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <p className="text-xl text-white/90 mb-6">Winter sports enthusiast with technical proficiency in alpine skiing. Developed skills in various snow conditions and terrains.</p>
          <p className="text-lg text-white/80">
            This is a placeholder for more detailed information about skiing.
            In a complete implementation, this would include achievements, skills, and personal reflections.
          </p>
          {skiingImages.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Media Gallery</h3>
              <ImageGallery images={skiingImages} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkiingActivityPage;