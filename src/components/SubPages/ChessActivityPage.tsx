import React from 'react';
import { ArrowLeft, Brain, Trophy, Award, Calendar, Users, Star } from 'lucide-react';

interface ChessActivityPageProps {
  onBack: () => void;
}

const ChessActivityPage: React.FC<ChessActivityPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-slate-300 hover:text-white transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Activities
          </button>
          <div className="flex items-center">
            <Brain className="w-8 h-8 text-blue-400 mr-4" />
            <h1 className="text-4xl font-bold">Chess</h1>
          </div>
        </div>

        {/* Chess Journey */}
        <div className="bg-slate-800/50 rounded-2xl p-8 mb-8 border border-slate-600">
          <h2 className="text-2xl font-bold mb-4">My Chess Journey</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            I started playing chess at the age of 7 and quickly developed a passion for this classic game of strategy and intellect.
            Over the years, I've progressed from casual play to competitive chess at the national level, participating in
            numerous tournaments and continuing to refine my skills.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            Chess has been more than just a game for me—it's a mental discipline that has helped develop my strategic thinking,
            problem-solving abilities, patience, and focus. These skills have proven invaluable in my academic pursuits,
            robotics projects, and other areas of my life.
          </p>
        </div>

        {/* Competitive Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Competitive Achievements</h2>
          <div className="bg-gradient-to-r from-gray-800 to-slate-800 rounded-xl p-6 mb-4 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-blue-300">National Level Competitions</h3>
              <div className="flex items-center space-x-4">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">
                  National Rank
                </span>
              </div>
            </div>
            <p className="text-slate-300 mb-4">
              I have participated in several national-level chess tournaments, competing against some of the top young
              chess players in the country. These experiences have been challenging and rewarding, pushing me to
              continuously improve my game and develop new strategies.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-900/50 rounded-lg p-4">
                <Trophy className="w-6 h-6 text-yellow-400 mb-2" />
                <h4 className="font-bold text-white mb-1">Regional Champion</h4>
                <p className="text-slate-400 text-sm">2023 Regional Youth Championship</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <Award className="w-6 h-6 text-blue-400 mb-2" />
                <h4 className="font-bold text-white mb-1">Top 100 National</h4>
                <p className="text-slate-400 text-sm">National Youth Chess League</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <Calendar className="w-6 h-6 text-green-400 mb-2" />
                <h4 className="font-bold text-white mb-1">15+ Tournaments</h4>
                <p className="text-slate-400 text-sm">Over 5 years of competition</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Benefits */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Skills & Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600">
              <div className="flex items-center mb-4">
                <Brain className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-blue-300">Cognitive Skills</h3>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>• Strategic thinking and planning</li>
                <li>• Problem-solving and critical analysis</li>
                <li>• Pattern recognition and memory</li>
                <li>• Decision-making under pressure</li>
                <li>• Concentration and focus</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-blue-300">Life Applications</h3>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>• Transferable problem-solving strategies</li>
                <li>• Patience and perseverance in challenges</li>
                <li>• Ability to anticipate consequences</li>
                <li>• Managing complex situations systematically</li>
                <li>• Confidence in intellectual abilities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Future Goals */}
        <div className="bg-gradient-to-br from-slate-900 to-gray-900 rounded-2xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold mb-6">Future Goals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-4">
                <Trophy className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-blue-300">Competitive Goals</h3>
              </div>
              <p className="text-slate-300">
                I aim to continue competing at the national level and work toward achieving a master rating. I plan
                to participate in more international youth tournaments to gain exposure to different playing styles
                and further develop my skills.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-blue-300">Teaching & Leadership</h3>
              </div>
              <p className="text-slate-300">
                I also plan to share my knowledge and passion for chess by teaching younger students and potentially
                starting a chess club at my school. I believe that chess can benefit many students, and I'm eager
                to help others discover the joys and benefits of this timeless game.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChessActivityPage;