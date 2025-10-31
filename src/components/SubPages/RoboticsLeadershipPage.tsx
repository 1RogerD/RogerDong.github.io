import React from 'react';
import { ArrowLeft, Bot, Trophy, Users, Lightbulb } from 'lucide-react';

interface RoboticsLeadershipPageProps {
  onBack: () => void;
}

const RoboticsLeadershipPage: React.FC<RoboticsLeadershipPageProps> = ({ onBack }) => {
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
            <Bot className="w-8 h-8 text-yellow-400 mr-4" />
            <h1 className="text-4xl font-bold">Robotics Leadership</h1>
          </div>
        </div>

        {/* Journey Overview */}
        <div className="bg-red-800/50 rounded-2xl p-8 mb-8 border border-red-600">
          <h2 className="text-2xl font-bold mb-4">My Robotics Journey</h2>
          <p className="text-red-100 text-lg leading-relaxed mb-4">
            I began my robotics journey at the age of 5, starting with basic programming concepts and gradually
            advancing to complex robot design and operation. Over 8+ years of dedicated learning and competition,
            I have progressed from "Starter" level to "Challenge" level in MakeX competitions.
          </p>
          <p className="text-red-100 text-lg leading-relaxed">
            As team captain and main operator, I lead our robotics team in designing, building, and programming
            robots for various competitions. My role involves strategic planning, technical implementation,
            and mentoring team members to achieve our collective goals.
          </p>
        </div>

        {/* Competition Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Competition Achievements</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-xl p-6 border border-red-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-red-200">MakeX Global Championship</h3>
                <div className="flex items-center space-x-3">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                    Runner-up (2nd Place)
                  </span>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                    2024
                  </span>
                </div>
              </div>
              <div className="mb-3">
                <span className="text-red-300 font-semibold">Category: </span>
                <span className="text-red-100">Challenge Class</span>
              </div>
              <p className="text-red-100">Competed against top teams worldwide in advanced robotics challenges</p>
            </div>
            
            <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-xl p-6 border border-red-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-red-200">MakeX Asia Championship</h3>
                <div className="flex items-center space-x-3">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                    Champion (1st Place)
                  </span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                    $1,000
                  </span>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                    2023
                  </span>
                </div>
              </div>
              <div className="mb-3">
                <span className="text-red-300 font-semibold">Category: </span>
                <span className="text-red-100">Explorer Class</span>
              </div>
              <p className="text-red-100">Led team to victory in Asian regional competition</p>
            </div>
          </div>
        </div>

        {/* Leadership Qualities */}
        <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-8 border border-red-700">
          <h2 className="text-2xl font-bold mb-6">Leadership Qualities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-red-200">Team Management</h3>
              </div>
              <ul className="space-y-2 text-red-100">
                <li>• Team Captain</li>
                <li>• Strategic Planning</li>
                <li>• Project Management</li>
                <li>• Mentoring</li>
                <li>• Competition Strategy</li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-red-200">Technical Expertise</h3>
              </div>
              <ul className="space-y-2 text-red-100">
                <li>• Robot Design & Construction</li>
                <li>• Programming (C++, Python)</li>
                <li>• Sensor Integration</li>
                <li>• Problem-solving</li>
                <li>• Debugging & Optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticsLeadershipPage;