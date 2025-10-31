import React, { useEffect } from 'react';
import { ArrowLeft, Calculator, TrendingUp, Award } from 'lucide-react';

interface MathematicsPageProps {
  onBack: () => void;
}

const MathematicsPage: React.FC<MathematicsPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-blue-200 hover:text-white transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Academics
          </button>
          <div className="flex items-center">
            <Calculator className="w-8 h-8 text-blue-400 mr-4" />
            <h1 className="text-4xl font-bold">Mathematics</h1>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-blue-800/50 rounded-2xl p-8 mb-8 border border-blue-600">
          <h2 className="text-2xl font-bold mb-4">Mathematical Journey</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-4">
            Mathematics has always been a subject of fascination for me. I enjoy the logical reasoning, problem-solving
            challenges, and the way mathematical concepts provide a foundation for understanding the world around us.
          </p>
          <p className="text-blue-100 text-lg leading-relaxed">
            My mathematical interests span from competition mathematics to applied mathematics in computer science and
            robotics. I find joy in tackling complex problems and discovering elegant solutions.
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Mathematical Achievements</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl p-6 border border-indigo-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-200">AMC 8</h3>
                <div className="flex items-center space-x-3">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                    24/25
                  </span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                    Highest score at school
                  </span>
                </div>
              </div>
              <p className="text-blue-100">
                Achieved near-perfect score on the AMC 8 exam, demonstrating strong problem-solving abilities and mathematical
                reasoning skills. This achievement reflects consistent practice and dedication to mathematical excellence.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-800 to-blue-800 rounded-xl p-6 border border-indigo-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-200">UKMT</h3>
                <div className="flex items-center space-x-3">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                    Gold Medal
                  </span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                    UK Mathematics Trust
                  </span>
                </div>
              </div>
              <p className="text-blue-100">
                Awarded Gold Medal in the UK Mathematics Trust competition, recognizing exceptional mathematical ability
                and problem-solving skills at an international level.
              </p>
            </div>
          </div>
        </div>

        {/* Key Skills */}
        <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-8 border border-blue-700">
          <h2 className="text-2xl font-bold mb-6">Key Mathematical Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-indigo-800/30 rounded-xl p-6 border border-indigo-600">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-center mb-3">Problem-solving</h3>
              <p className="text-blue-100 text-center text-sm">Approaching complex problems with systematic strategies</p>
            </div>
            
            <div className="bg-indigo-800/30 rounded-xl p-6 border border-indigo-600">
              <div className="flex justify-center mb-4">
                <Calculator className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-center mb-3">Analytical Thinking</h3>
              <p className="text-blue-100 text-center text-sm">Breaking down complex ideas into manageable components</p>
            </div>
            
            <div className="bg-indigo-800/30 rounded-xl p-6 border border-indigo-600">
              <div className="flex justify-center mb-4">
                <Award className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-center mb-3">Competition Mathematics</h3>
              <p className="text-blue-100 text-center text-sm">Tackling Olympiad-style problems with creative solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathematicsPage;