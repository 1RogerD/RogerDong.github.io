import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Anchor, Trophy, Calendar, MapPin, Award, Camera, Video } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';

// Import images
import sailingImg1 from '/image/HOBIE16亚锦赛/2025年威海HOBIE16帆船亚锦赛比赛照片1.png';
import sailingImg2 from '/image/HOBIE16亚锦赛/2025年威海HOBIE16帆船亚锦赛比赛照片2.jpg';
import sailingImg3 from '/image/HOBIE16亚锦赛/2025年威海HOBIE16帆船亚锦赛比赛照片3.jpg';
import sailingImg4 from '/image/HOBIE16亚锦赛/2025年威海HOBIE16帆船亚锦赛比赛照片4.png';
import asaCertifiedLogo from '/image/asa-certified.png';
import ryaLogo from '/image/rya-logo.png';


const SailingPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('competitions');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const sailingImages = [
    { src: sailingImg1, alt: 'Sailing competition photo 1' },
    { src: sailingImg2, alt: 'Sailing competition photo 2' },
    { src: sailingImg3, alt: 'Sailing competition photo 3' },
    { src: sailingImg4, alt: 'Sailing competition photo 4' },
  ];

  const [mediaType, setMediaType] = useState<'images' | 'videos'>('images');

  const achievements = [
    {
      title: "HOBIE 16 Asian Championships",
      place: "3rd Place",
      prize: "￥10,000",
      location: "Weihai, China",
      date: "June 2024",
      description: "Competed against top sailors from across Asia in the prestigious HOBIE 16 class"
    }
  ];

  const certifications = [
    {
      organization: "Royal Yachting Association (RYA)",
      country: "United Kingdom",
      certifications: ["All kinds of boats"]
    },
    {
      organization: "American Sailing Association (ASA)",
      country: "United States",
      certifications: ["All kinds of boats"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-red-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <a
            href="/#competitions"
            onClick={handleBackClick}
            className="flex items-center text-red-300 hover:text-white transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </a>
          <div className="flex items-center">
            <Anchor className="w-8 h-8 text-yellow-400 mr-4" />
            <h1 className="text-4xl font-bold">Sailing Excellence</h1>
          </div>
        </div>

        {/* Journey Overview */}
        <div className="bg-red-800/50 rounded-2xl p-8 mb-8 border border-red-700">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">My Sailing Journey</h2>
          <p className="text-red-100 text-lg leading-relaxed mb-4">
            I began my sailing adventure at the age of 6, developing a deep passion for the sport that combines 
            technical skill, strategic thinking, and harmony with nature. Over 7+ years of dedicated training, 
            I have progressed from basic boat handling to competitive racing at the international level.
          </p>
          <p className="text-red-100 text-lg leading-relaxed">
            My commitment to excellence in sailing has led me to obtain certifications from both the Royal 
            Yachting Association (RYA) and the American Sailing Association (ASA), demonstrating my proficiency 
            in various sailing disciplines and safety procedures.
          </p>
        </div>

        {/* Major Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Competition Achievements</h2>
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gradient-to-r from-red-800 to-yellow-800/30 rounded-xl p-6 mb-4 border border-red-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-yellow-300">{achievement.title}</h3>
                <div className="flex items-center space-x-4">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">
                    {achievement.place}
                  </span>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold">
                    {achievement.prize}
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="text-red-100">{achievement.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="text-red-100">{achievement.date}</span>
                </div>
              </div>
              <p className="text-red-100">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications & Skills */}
        <div className="bg-red-800/50 rounded-2xl p-8 mb-8 border border-red-700">
          <h2 className="text-2xl font-bold mb-6 text-yellow-300">Certifications & Skills</h2>
          
          {/* Certification Logos */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="bg-white p-4 rounded-xl shadow-lg transform transition-transform hover:scale-105">
              <img src={asaCertifiedLogo} alt="American Sailing Association Certified" className="h-32 w-32 object-contain" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg transform transition-transform hover:scale-105">
              <img src={ryaLogo} alt="Royal Yachting Association" className="h-32 w-32 object-contain" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Certifications</h3>
              <ul className="space-y-3 text-red-100">
                <li className="flex items-center"><Award className="w-5 h-5 mr-3 text-yellow-400" />RYA Day Skipper</li>
                <li className="flex items-center"><Award className="w-5 h-5 mr-3 text-yellow-400" />ASA 101, 103, 104</li>
                <li className="flex items-center"><Award className="w-5 h-5 mr-3 text-yellow-400" />US Sailing Level 1</li>
                <li className="flex items-center"><Award className="w-5 h-5 mr-3 text-yellow-400" />First Aid & CPR Certified</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Skills</h3>
              <ul className="space-y-3 text-red-100">
                <li className="flex items-center"><Trophy className="w-5 h-5 mr-3 text-yellow-400" />Racing Tactics & Strategy</li>
                <li className="flex items-center"><Trophy className="w-5 h-5 mr-3 text-yellow-400" />Spinnaker Handling</li>
                <li className="flex items-center"><Trophy className="w-5 h-5 mr-3 text-yellow-400" />Navigation & Chart Reading</li>
                <li className="flex items-center"><Trophy className="w-5 h-5 mr-3 text-yellow-400" />Boat Maintenance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Future Goals */}
        <div className="bg-red-800/50 rounded-2xl p-8 mb-8 border border-red-700">
          <h2 className="text-2xl font-bold mb-6 text-yellow-300">Future Goals in Sailing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Short-Term Goals</h3>
              <ul className="space-y-3 text-red-100">
                <li className="flex items-start"><Trophy className="w-5 h-5 mr-3 mt-1 text-yellow-400" /><span>Compete in the Youth Sailing World Championships</span></li>
                <li className="flex items-start"><Trophy className="w-5 h-5 mr-3 mt-1 text-yellow-400" /><span>Master advanced spinnaker techniques for competitive advantage</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Long-Term Aspirations</h3>
              <ul className="space-y-3 text-red-100">
                <li className="flex items-start"><Anchor className="w-5 h-5 mr-3 mt-1 text-yellow-400" /><span>Represent my country in the Olympic Games</span></li>
                <li className="flex items-start"><Anchor className="w-5 h-5 mr-3 mt-1 text-yellow-400" /><span>Participate in a transatlantic sailing expedition</span></li>
              </ul>
            </div>
          </div>
        </div>


        {/* Media Gallery */}
        <div className="bg-red-800/50 rounded-2xl p-8 border border-red-700">
          <h2 className="text-2xl font-bold mb-6 text-yellow-300">Media Gallery</h2>
          <ImageGallery images={sailingImages} />
        </div>


      </div>
    </div>
  );
};

export default SailingPage;

