import React from 'react';
import { ArrowLeft, Anchor, Trophy, Calendar, MapPin, Award, Camera } from 'lucide-react';

interface SailingActivityPageProps {
  onBack: () => void;
}

const SailingActivityPage: React.FC<SailingActivityPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-blue-200 hover:text-white transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Activities
          </button>
          <div className="flex items-center">
            <Anchor className="w-8 h-8 text-cyan-400 mr-4" />
            <h1 className="text-4xl font-bold">Sailing</h1>
          </div>
        </div>

        {/* Journey Overview */}
        <div className="bg-blue-800/50 rounded-2xl p-8 mb-8 border border-blue-600">
          <h2 className="text-2xl font-bold mb-4">My Sailing Journey</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-4">
            I began sailing at the age of 6 and have developed a deep passion for this sport that combines technical skill,
            strategic thinking, and harmony with nature. Over the years, I've progressed from basic boat handling to
            competitive racing at the international level.
          </p>
          <p className="text-blue-100 text-lg leading-relaxed">
            Sailing has taught me discipline, resilience, and the importance of working with nature rather than against it.
            It's not just a sport but a way of life that has shaped my character and approach to challenges.
          </p>
        </div>

        {/* Key Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Key Achievements</h2>
          <div className="bg-gradient-to-r from-cyan-800 to-blue-800 rounded-xl p-6 mb-4 border border-cyan-600">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-cyan-200">HOBIE 16 Asian Championships</h3>
              <div className="flex items-center space-x-4">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">
                  3rd Place
                </span>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full font-bold">
                  ￥10,000
                </span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                <span>Weihai, China</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                <span>June 2024</span>
              </div>
            </div>
            <p className="text-blue-100">
              Competed against top sailors from across Asia in the prestigious HOBIE 16 class, demonstrating advanced
              sailing skills and strategic race management.
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Professional Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-800/50 rounded-xl p-6 border border-blue-600">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-xl font-bold">Royal Yachting Association (RYA)</h3>
              </div>
              <p className="text-blue-200 mb-4">United Kingdom</p>
              <ul className="space-y-2 text-blue-100">
                <li>• Small Sailboat Operations</li>
                <li>• Safety Procedures</li>
                <li>• Navigation Basics</li>
              </ul>
            </div>
            
            <div className="bg-blue-800/50 rounded-xl p-6 border border-blue-600">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-xl font-bold">American Sailing Association (ASA)</h3>
              </div>
              <p className="text-blue-200 mb-4">United States</p>
              <ul className="space-y-2 text-blue-100">
                <li>• Small Sailboat Certification</li>
                <li>• Catamaran Operations</li>
                <li>• Coastal Navigation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Training & Experience */}
        <div className="bg-gradient-to-br from-blue-900 to-cyan-900 rounded-2xl p-8 border border-blue-700">
          <h2 className="text-2xl font-bold mb-6">Training & Experience</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-300">7+ Years</h3>
              <p className="text-blue-100">Continuous training since age 6</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-300">500+ Hours</h3>
              <p className="text-blue-100">On-water experience</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-300">12+ Competitions</h3>
              <p className="text-blue-100">Regional and national events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SailingActivityPage;