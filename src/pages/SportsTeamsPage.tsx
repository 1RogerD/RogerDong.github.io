import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Trophy,
  Users,
  Target,
  Zap,
  Camera,
  Video,
  Medal,
  Star,
  Sailboat,
  ShieldCheck,
  Heart,
  Scale,
  Mountain,
  Wind,
  Waves,
  Dribbble,
} from "lucide-react";
import ImageGallery from '../components/ImageGallery';

// Import images
import fencingImg from '/image/课外活动 (2)/击剑/2019年佩剑第二名.jpg';
import skiingImg1 from '/image/课外活动 (2)/滑雪/单板3级证书.jpg';
import skiingImg2 from '/image/课外活动 (2)/滑雪/单板6级证书.jpg';

const SportsTeamsPage: React.FC = () => {
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

  const sportsImages = [
    { src: fencingImg, alt: 'Fencing competition' },
    { src: skiingImg1, alt: 'Skiing certificate 1' },
    { src: skiingImg2, alt: 'Skiing certificate 2' },
  ];

  const teams = [
    {
      sport: "Basketball",
      team: "BCIS U-14 A Team (Current)",
      position: "Player",
      level: "Competitive",
      achievements: ["Inter-school competitions", "Team leadership", "Strategic gameplay"],
      skills: ["Ball handling", "Team coordination", "Court vision", "Defensive strategies"]
    },
    {
      sport: "Football (Soccer)",
      team: "BCIS U-14 A Team (Current)",
      position: "Player",
      level: "Competitive",
      achievements: ["Regional tournaments", "Team collaboration", "Match strategy"],
      skills: ["Ball control", "Passing accuracy", "Field awareness", "Tactical understanding"]
    },
    {
      sport: "Football (Soccer)",
      team: "Harrow A-Team (Past)",
      position: "Player",
      level: "Competitive",
      achievements: ["First place in Division One"],
      skills: ["Ball control", "Passing accuracy", "Field awareness", "Tactical understanding"]
    },
    {
      sport: "Basketball",
      team: "Harrow A-Team (Past)",
      position: "Player",
      level: "Competitive",
      achievements: ["Third place in Division One"],
      skills: ["Ball handling", "Team coordination", "Court vision", "Defensive strategies"]
    }
  ];

  const additionalSports = [
    {
      sport: "Swimming",
      level: "Competitive",
      description: "Part of comprehensive athletic training, focusing on endurance and technique",
      benefits: ["Cardiovascular fitness", "Full-body strength", "Mental discipline"]
    },
    {
      sport: "Multi-Sport Training",
      level: "Advanced",
      description: "Cross-training across multiple sports to develop well-rounded athletic abilities",
      benefits: ["Injury prevention", "Skill transfer", "Athletic versatility"]
    }
  ];

  const athleticValues = [
    {
      value: "Teamwork",
      description: "Learning to work effectively with teammates toward common goals",
      icon: <Users className="w-6 h-6" />
    },
    {
      value: "Leadership",
      description: "Taking initiative and motivating team members during challenging moments",
      icon: <Star className="w-6 h-6" />
    },
    {
      value: "Perseverance",
      description: "Maintaining dedication through intensive training and competitive pressure",
      icon: <Target className="w-6 h-6" />
    },
    {
      value: "Sportsmanship",
      description: "Demonstrating respect for opponents, officials, and the integrity of the game",
      icon: <Medal className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
            <Trophy className="w-8 h-8 text-yellow-400 mr-4" />
            <h1 className="text-4xl font-bold">Sports Teams Excellence</h1>
          </div>
        </div>

        {/* Athletic Philosophy */}
        <div className="bg-red-800/50 rounded-2xl p-8 mb-8 border border-red-700">
          <h2 className="text-2xl font-bold mb-4">Athletic Philosophy & Approach</h2>
          <p className="text-red-100 text-lg leading-relaxed mb-4">
            My approach to team sports combines individual skill development with collective team success. 
            I believe that excellence in athletics requires not only physical ability but also mental toughness, 
            strategic thinking, and the ability to perform under pressure.
          </p>
          <p className="text-red-100 text-lg leading-relaxed">
            Being part of the U-14 A Teams for both basketball and football at BCIS, and previously the A-Teams for football and basketball at Harrow, has taught me valuable lessons 
            about leadership, collaboration, and the importance of consistent training. While at Harrow, I was on the football team that achieved first place in Division One, and the basketball team that achieved third place in Division one. These experiences 
            have shaped my character and prepared me for challenges both on and off the field.
          </p>
        </div>

        {/* Team Memberships */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Team Memberships</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {teams.map((team, index) => (
              <div key={index} className="bg-gradient-to-r from-red-800 to-rose-800 rounded-xl p-6 border border-red-600">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-yellow-200">{team.sport}</h3>
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                    {team.level}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Users className="w-4 h-4 text-red-300 mr-2" />
                    <span className="text-rose-100 font-semibold">{team.team}</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 text-red-300 mr-2" />
                    <span className="text-rose-100">{team.position}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-yellow-200 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {team.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center text-rose-100">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-yellow-200 mb-2">Core Skills:</h4>
                  <ul className="space-y-1">
                    {team.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center text-rose-100">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Athletic Pursuits */}
        <div className="bg-red-800/30 rounded-2xl p-8 mb-8 border border-red-600">
          <h2 className="text-3xl font-bold mb-6 text-yellow-300">Additional Athletic Pursuits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Swimming */}
            <div className="bg-red-900/50 rounded-lg p-6 border border-red-700">
              <div className="flex items-center mb-4">
                <Waves className="w-8 h-8 text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold text-yellow-300">Swimming</h3>
              </div>
              <p className="text-red-100 mb-2">
                <span className="font-semibold">Level:</span> Competitive Club Swimmer
              </p>
              <p className="text-red-100 mb-4">
                <span className="font-semibold">Specialty:</span> Freestyle & Butterfly
              </p>
            </div>

            {/* Skiing */}
            <div className="bg-red-900/50 rounded-lg p-6 border border-red-700">
              <div className="flex items-center mb-4">
                <Mountain className="w-8 h-8 text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold text-yellow-300">Skiing</h3>
              </div>
              <p className="text-red-100 mb-2">
                <span className="font-semibold">Level:</span> Advanced Recreational
              </p>
              <p className="text-red-100 mb-4">
                <span className="font-semibold">Preferred Terrain:</span> Black Diamond, Moguls
              </p>
            </div>

            {/* Sailing */}
            <div className="bg-red-900/50 rounded-lg p-6 border border-red-700">
              <div className="flex items-center mb-4">
                <Sailboat className="w-8 h-8 text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold text-yellow-300">Sailing</h3>
              </div>
              <p className="text-red-100 mb-2">
                <span className="font-semibold">Experience:</span> Youth Sailing Programs
              </p>
              <p className="text-red-100 mb-4">
                <span className="font-semibold">Boat Class:</span> Optimist, Laser
              </p>
            </div>
          </div>
        </div>

        {/* Core Athletic Values */}
        <div className="bg-red-800/30 rounded-2xl p-8 border border-red-600 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-yellow-300">Core Athletic Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Resilience */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-900/50 rounded-full p-4 mb-4 border border-red-700">
                <ShieldCheck className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Resilience</h3>
              <p className="text-red-100">
                Bouncing back from setbacks and maintaining composure under pressure.
              </p>
            </div>

            {/* Discipline */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-900/50 rounded-full p-4 mb-4 border border-red-700">
                <Zap className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Discipline</h3>
              <p className="text-red-100">
                Committing to rigorous training and a structured athletic lifestyle.
              </p>
            </div>

            {/* Teamwork */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-900/50 rounded-full p-4 mb-4 border border-red-700">
                <Users className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Teamwork</h3>
              <p className="text-red-100">
                Collaborating with teammates to achieve a common goal.
              </p>
            </div>

            {/* Sportsmanship */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-900/50 rounded-full p-4 mb-4 border border-red-700">
                <Heart className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Sportsmanship</h3>
              <p className="text-red-100">
                Respecting opponents, officials, and the spirit of the game.
              </p>
            </div>
          </div>
        </div>



        {/* Training & Development */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-800 rounded-2xl p-8 border border-emerald-600">
          <div className="flex items-center mb-6">
            <Zap className="w-8 h-8 text-yellow-400 mr-4" />
            <h2 className="text-2xl font-bold">Training & Development Focus</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-yellow-200 mb-3">Physical Development</h4>
              <ul className="space-y-2 text-emerald-100">
                <li>• Strength and conditioning</li>
                <li>• Agility and speed training</li>
                <li>• Endurance building</li>
                <li>• Injury prevention</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-yellow-200 mb-3">Mental Training</h4>
              <ul className="space-y-2 text-emerald-100">
                <li>• Focus and concentration</li>
                <li>• Pressure management</li>
                <li>• Strategic thinking</li>
                <li>• Confidence building</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-yellow-200 mb-3">Team Skills</h4>
              <ul className="space-y-2 text-emerald-100">
                <li>• Communication</li>
                <li>• Leadership development</li>
                <li>• Collaborative problem-solving</li>
                <li>• Mentoring younger players</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Media Gallery */}
        <div className="bg-red-800/50 rounded-2xl p-8 mt-8 border border-red-700">
          <h2 className="text-2xl font-bold mb-6 text-yellow-300">Media Gallery</h2>
          <ImageGallery images={sportsImages} />
        </div>
      </div>
    </div>
  );
};

export default SportsTeamsPage;

