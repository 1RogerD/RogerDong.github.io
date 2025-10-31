import React, { useEffect } from 'react';
import { ArrowLeft, Beaker, Brain, Lightbulb, Award } from 'lucide-react';

interface SciencePageProps {
  onBack: () => void;
}

const SciencePage: React.FC<SciencePageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-purple-200 hover:text-white transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Academics
          </button>
          <div className="flex items-center">
            <Beaker className="w-8 h-8 text-purple-400 mr-4" />
            <h1 className="text-4xl font-bold">Science</h1>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-indigo-800/50 rounded-2xl p-8 mb-8 border border-indigo-600">
          <h2 className="text-2xl font-bold mb-4">Scientific Journey</h2>
          <p className="text-indigo-100 text-lg leading-relaxed mb-4">
            Science has always been a field of endless curiosity for me. I am fascinated by how the world works,
            from the smallest particles to the vast cosmos. My scientific interests span across physics, chemistry,
            biology, and engineering, with a particular focus on practical applications and hands-on experimentation.
          </p>
          <p className="text-indigo-100 text-lg leading-relaxed">
            Through various science projects, experiments, and competitions, I've developed a systematic approach to
            problem-solving, critical thinking, and data analysis. I enjoy applying scientific concepts to real-world
            challenges and innovative projects.
          </p>
        </div>

        {/* Key Projects */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Key Science Projects</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-xl p-6 border border-purple-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-purple-200">Arduino Projects</h3>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  Electronics & Programming
                </span>
              </div>
              <p className="text-indigo-100 mb-4">
                Designed and built various Arduino-based projects, including automated systems, sensors, and interactive
                devices. These projects have allowed me to apply programming skills to physical computing and electronics.
              </p>
              <ul className="space-y-2 text-indigo-100">
                <li>• Automated weather station</li>
                <li>• Sensor-based security system</li>
                <li>• Interactive educational tools</li>
                <li>• Robotics control systems</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-xl p-6 border border-purple-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-purple-200">3D Printing Innovations</h3>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  Design & Prototyping
                </span>
              </div>
              <p className="text-indigo-100 mb-4">
                Created innovative designs for 3D printing, focusing on functional prototypes and creative solutions
                to everyday problems. This work combines artistic design with engineering principles.
              </p>
              <ul className="space-y-2 text-indigo-100">
                <li>• Custom robotics components</li>
                <li>• Assistive devices</li>
                <li>• Educational models</li>
                <li>• Functional household items</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scientific Skills */}
        <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-8 border border-purple-700">
          <h2 className="text-2xl font-bold mb-6">Scientific Skills & Approaches</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-purple-200">Research Methodology</h3>
              </div>
              <ul className="space-y-2 text-indigo-100">
                <li>• Hypothesis formulation</li>
                <li>• Experimental design</li>
                <li>• Data collection & analysis</li>
                <li>• Conclusion drawing</li>
                <li>• Scientific reporting</li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Lightbulb className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-purple-200">Hands-on Skills</h3>
              </div>
              <ul className="space-y-2 text-indigo-100">
                <li>• Laboratory techniques</li>
                <li>• Electronics assembly</li>
                <li>• 3D design & printing</li>
                <li>• Arduino programming</li>
                <li>• Robotics construction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SciencePage;