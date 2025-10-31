import React from 'react';
import { ArrowLeft, Users, Trophy, Target, Zap, Camera, Video, Medal, Star } from 'lucide-react';

interface SportsTeamsPageProps {
  onBack: () => void;
}

const SportsTeamsPage: React.FC<SportsTeamsPageProps> = ({ onBack }) => {
  const teams = [
    {
      sport: "Basketball",
      team: "BCIS U-14 A Team",
      position: "Player",
      level: "Competitive",
      achievements: ["Inter-school competitions", "Team leadership", "Strategic gameplay"],
      skills: ["Ball handling", "Team coordination", "Court vision", "Defensive strategies"]
    },
    {
      sport: "Football (Soccer)",
      team: "BCIS U-14 A Team", 
      position: "Player",
      level: "Competitive",
      achievements: ["Regional tournaments", "Team collaboration", "Match strategy"],
      skills: ["Ball control", "Passing accuracy", "Field awareness", "Tactical understanding"]
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
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-green-200 hover:text-white transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </button>
          <div className="flex items-center">
            <Trophy className="w-8 h-8 text-yellow-400 mr-4" />
            <h1 className="text-4xl font-bold">Sports Teams Excellence</h1>
          </div>
        </div>

        {/* Athletic Philosophy */}
        <div className="bg-emerald-800/50 rounded-2xl p-8 mb-8 border border-emerald-600">
          <h2 className="text-2xl font-bold mb-4">Athletic Philosophy & Approach</h2>
          <p className="text-emerald-100 text-lg leading-relaxed mb-4">
            My approach to team sports combines individual skill development with collective team success. 
            I believe that excellence in athletics requires not only physical ability but also mental toughness, 
            strategic thinking, and the ability to perform under pressure.
          </p>
          <p className="text-emerald-100 text-lg leading-relaxed">
            Being part of the U-14 A Teams for both basketball and football has taught me valuable lessons 
            about leadership, collaboration, and the importance of consistent training. These experiences 
            have shaped my character and prepared me for challenges both on and off the field.
          </p>
        </div>

        {/* Team Memberships */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Current Team Memberships</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {teams.map((team, index) => (
              <div key={index} className="bg-gradient-to-r from-teal-800 to-emerald-800 rounded-xl p-6 border border-teal-600">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-yellow-200">{team.sport}</h3>
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                    {team.level}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Users className="w-4 h-4 text-teal-400 mr-2" />
                    <span className="text-emerald-100 font-semibold">{team.team}</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 text-teal-400 mr-2" />
                    <span className="text-emerald-100">{team.position}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-teal-200 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {team.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center text-emerald-100">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-teal-200 mb-2">Core Skills:</h4>
                  <ul className="space-y-1">
                    {team.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center text-emerald-100">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Sports */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Additional Athletic Pursuits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalSports.map((sport, index) => (
              <div key={index} className="bg-emerald-800/30 rounded-xl p-6 border border-emerald-600">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-yellow-200">{sport.sport}</h3>
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                    {sport.level}
                  </span>
                </div>
                <p className="text-emerald-100 mb-4">{sport.description}</p>
                <div>
                  <h4 className="font-semibold text-teal-200 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {sport.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-emerald-100">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Athletic Values */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Core Athletic Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {athleticValues.map((value, index) => (
              <div key={index} className="bg-teal-800/30 rounded-xl p-6 border border-teal-600">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-yellow-500 rounded-lg text-black mr-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-yellow-200">{value.value}</h3>
                </div>
                <p className="text-emerald-100">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Upload Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Photos Section */}
          <div className="bg-emerald-800/30 rounded-xl p-6 border border-emerald-600">
            <div className="flex items-center mb-4">
              <Camera className="w-6 h-6 text-yellow-400 mr-3" />
              <h3 className="text-xl font-bold">Sports Photos</h3>
            </div>
            <div className="border-2 border-dashed border-emerald-400 rounded-lg p-8 text-center">
              <Camera className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <p className="text-emerald-200 mb-2">Upload your sports photos here</p>
              <p className="text-emerald-300 text-sm">Team photos, action shots, awards, training moments</p>
              <button className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-black px-6 py-2 rounded-lg transition-colors font-semibold">
                Choose Photos
              </button>
            </div>
          </div>

          {/* Videos Section */}
          <div className="bg-emerald-800/30 rounded-xl p-6 border border-emerald-600">
            <div className="flex items-center mb-4">
              <Video className="w-6 h-6 text-yellow-400 mr-3" />
              <h3 className="text-xl font-bold">Sports Videos</h3>
            </div>
            <div className="border-2 border-dashed border-emerald-400 rounded-lg p-8 text-center">
              <Video className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <p className="text-emerald-200 mb-2">Upload your sports videos here</p>
              <p className="text-emerald-300 text-sm">Game highlights, training sessions, skill demonstrations</p>
              <button className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-black px-6 py-2 rounded-lg transition-colors font-semibold">
                Choose Videos
              </button>
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
      </div>
    </div>
  );
};

export default SportsTeamsPage;