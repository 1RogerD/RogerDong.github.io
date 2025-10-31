import React from 'react';
import { ArrowLeft, Trophy, Users, Target } from 'lucide-react';

interface SportsExcellencePageProps {
  onBack: () => void;
}

const SportsExcellencePage: React.FC<SportsExcellencePageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-red-200 hover:text-white transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to About
          </button>
          <div className="flex items-center">
            <Trophy className="w-8 h-8 text-yellow-400 mr-4" />
            <h1 className="text-4xl font-bold">Sports Excellence</h1>
          </div>
        </div>

        {/* Athletic Philosophy */}
        <div className="bg-red-800/50 rounded-2xl p-8 mb-8 border border-red-600">
          <h2 className="text-2xl font-bold mb-4">Athletic Philosophy & Approach</h2>
          <p className="text-red-100 text-lg leading-relaxed mb-4">
            Sports have always been an integral part of my life, providing valuable lessons in discipline, teamwork,
            perseverance, and goal-setting. I believe that athletic excellence is not just about winning, but about
            continuous improvement, sportsmanship, and the ability to perform under pressure.
          </p>
          <p className="text-red-100 text-lg leading-relaxed">
            My multi-sport approach has allowed me to develop a well-rounded set of physical skills and mental
            attributes that complement each other and contribute to my overall personal development.
          </p>
        </div>

        {/* Team Sports */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Team Sports</h2>
          <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-xl p-6 border border-red-600">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-red-200 mb-2 md:mb-0">BCIS U-14 A Basketball Team</h3>
              <div className="flex space-x-3">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                  Team Member
                </span>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  2022-Present
                </span>
              </div>
            </div>
            <p className="text-red-100 mb-4">
              As a member of the BCIS U-14 A Basketball Team, I've developed strong teamwork skills, court awareness,
              and strategic thinking. I contribute both as a scorer and a defender, adapting my role based on the team's needs.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-xl p-6 mt-4 border border-red-600">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-red-200 mb-2 md:mb-0">BCIS U-14 A Football Team</h3>
              <div className="flex space-x-3">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                  Team Member
                </span>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  2022-Present
                </span>
              </div>
            </div>
            <p className="text-red-100">
              As a member of the BCIS U-14 A Football Team, I've honed my footwork, spatial awareness, and ability to work
              with teammates to create scoring opportunities. I play primarily as a midfielder, responsible for both creating
              offense and supporting defense.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-8 border border-red-700">
          <h2 className="text-2xl font-bold mb-6">Core Values Learned Through Sports</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-800/30 rounded-xl p-6 border border-red-600">
              <div className="flex justify-center mb-4">
                <Target className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-center mb-3">Goal Setting</h3>
              <p className="text-red-100 text-center text-sm">Setting and working toward incremental improvement</p>
            </div>
            
            <div className="bg-red-800/30 rounded-xl p-6 border border-red-600">
              <div className="flex justify-center mb-4">
                <Users className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-center mb-3">Teamwork</h3>
              <p className="text-red-100 text-center text-sm">Collaborating effectively toward a common objective</p>
            </div>
            
            <div className="bg-red-800/30 rounded-xl p-6 border border-red-600">
              <div className="flex justify-center mb-4">
                <Trophy className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-center mb-3">Sportsmanship</h3>
              <p className="text-red-100 text-center text-sm">Respect for opponents, officials, and the game</p>
            </div>
            
            <div className="bg-red-800/30 rounded-xl p-6 border border-red-600">
              <div className="flex justify-center mb-4">
                <Target className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-center mb-3">Perseverance</h3>
              <p className="text-red-100 text-center text-sm">Overcoming challenges through dedication and hard work</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsExcellencePage;