import React, { useEffect } from 'react';
import { ArrowLeft, Code2, Brain, Lightbulb, Award } from 'lucide-react';

interface ComputerSciencePageProps {
  onBack: () => void;
}

const ComputerSciencePage: React.FC<ComputerSciencePageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-800 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-green-200 hover:text-white transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Academics
          </button>
          <div className="flex items-center">
            <Code2 className="w-8 h-8 text-green-400 mr-4" />
            <h1 className="text-4xl font-bold">Computer Science</h1>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-teal-800/50 rounded-2xl p-8 mb-8 border border-teal-600">
          <h2 className="text-2xl font-bold mb-4">Computer Science Journey</h2>
          <p className="text-teal-100 text-lg leading-relaxed mb-4">
            Computer science has been a passion of mine from an early age. I am fascinated by how programming languages
            and algorithms can be used to solve real-world problems, create innovative solutions, and bring ideas to life.
          </p>
          <p className="text-teal-100 text-lg leading-relaxed">
            My journey in computer science spans multiple programming languages, algorithm design, competitive programming,
            and practical applications in robotics and artificial intelligence. I enjoy both the theoretical aspects of
            computer science and the hands-on experience of building actual systems.
          </p>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Computer Science Achievements</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-800 to-teal-800 rounded-xl p-6 border border-green-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-green-200">USACO Bronze</h3>
                <div className="flex items-center space-x-3">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                    Perfect Score
                  </span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                    Full marks
                  </span>
                </div>
              </div>
              <p className="text-teal-100">
                Achieved a perfect score in the USACO Bronze division, demonstrating exceptional programming skills,
                algorithmic thinking, and problem-solving abilities in the field of competitive programming.
              </p>
            </div>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Programming Languages & Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-800/50 rounded-xl p-6 border border-green-600">
              <div className="flex items-center mb-4">
                <Code2 className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-green-200">C++</h3>
              </div>
              <p className="text-teal-100 mb-2">Competitive programming</p>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-green-400 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-right text-xs mt-1 text-teal-300">Advanced</p>
            </div>
            
            <div className="bg-green-800/50 rounded-xl p-6 border border-green-600">
              <div className="flex items-center mb-4">
                <Code2 className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-green-200">Python</h3>
              </div>
              <p className="text-teal-100 mb-2">Application development & AI</p>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-green-400 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <p className="text-right text-xs mt-1 text-teal-300">Advanced</p>
            </div>
            
            <div className="bg-green-800/50 rounded-xl p-6 border border-green-600">
              <div className="flex items-center mb-4">
                <Code2 className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-green-200">Scratch</h3>
              </div>
              <p className="text-teal-100 mb-2">Creative programming</p>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-green-400 rounded-full" style={{ width: '90%' }}></div>
              </div>
              <p className="text-right text-xs mt-1 text-teal-300">Expert</p>
            </div>
          </div>
        </div>

        {/* Key Applications */}
        <div className="bg-gradient-to-br from-green-900 to-teal-900 rounded-2xl p-8 border border-green-700">
          <h2 className="text-2xl font-bold mb-6">Key Applications & Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-green-200">Algorithm Design</h3>
              </div>
              <ul className="space-y-2 text-teal-100">
                <li>• Competitive programming algorithms</li>
                <li>• Optimization techniques</li>
                <li>• Data structure implementation</li>
                <li>• Problem-solving strategies</li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Lightbulb className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-green-200">Practical Applications</h3>
              </div>
              <ul className="space-y-2 text-teal-100">
                <li>• Robotics programming</li>
                <li>• AI project development</li>
                <li>• Game creation</li>
                <li>• Automation scripts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerSciencePage;