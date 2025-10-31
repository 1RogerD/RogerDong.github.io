import React from 'react';
import { ArrowLeft, Brain, Award, Code, Users, Lightbulb, CheckCircle } from 'lucide-react';

interface AIActivityPageProps {
  onBack: () => void;
}

const AIActivityPage: React.FC<AIActivityPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-indigo-200 hover:text-white transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Activities
          </button>
          <div className="flex items-center">
            <Brain className="w-8 h-8 text-purple-400 mr-4" />
            <h1 className="text-4xl font-bold">AI Projects</h1>
          </div>
        </div>

        {/* Project Overview */}
        <div className="bg-indigo-800/50 rounded-2xl p-8 mb-8 border border-indigo-600">
          <h2 className="text-2xl font-bold mb-4">Microsoft AI Project</h2>
          <p className="text-indigo-100 text-lg leading-relaxed mb-4">
            I am honored to be selected as the Team Captain for the Microsoft AI Project, where we are developing an
            innovative AI system to detect traveling violations in basketball games using computer vision and machine learning
            techniques. This project combines my passions for technology, sports, and problem-solving.
          </p>
          <p className="text-indigo-100 text-lg leading-relaxed">
            As team captain, I lead a group of talented students in designing, developing, and testing this AI solution.
            This experience has allowed me to develop leadership skills, technical expertise, and a deeper understanding
            of how AI can be applied to real-world problems in sports and beyond.
          </p>
        </div>

        {/* Project Details */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Project Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-xl p-6 border border-purple-600">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-purple-200">Project Objective</h3>
              </div>
              <p className="text-indigo-100 mb-4">
                To develop an AI-powered system that can accurately detect traveling violations in basketball games
                by analyzing video footage in real-time. This technology has the potential to assist referees in making
                more accurate calls and improving the overall fairness of the game.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-xl p-6 border border-purple-600">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-purple-200">Technology Stack</h3>
              </div>
              <ul className="space-y-2 text-indigo-100">
                <li>• Python programming</li>
                <li>• Computer vision (OpenCV)</li>
                <li>• Machine learning (TensorFlow/PyTorch)</li>
                <li>• Microsoft Azure AI services</li>
                <li>• Video processing algorithms</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Role & Responsibilities */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Role & Responsibilities</h2>
          <div className="bg-indigo-800/50 rounded-2xl p-8 border border-indigo-600">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold text-purple-200">Team Captain</h3>
            </div>
            <ul className="space-y-2 text-indigo-100 mb-6">
              <li>• Leading weekly team meetings and progress reviews</li>
              <li>• Assigning tasks based on team members' strengths</li>
              <li>• Coordinating with Microsoft mentors and advisors</li>
              <li>• Developing project timelines and milestones</li>
              <li>• Ensuring quality control and project direction</li>
            </ul>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-purple-900/50 rounded-xl p-4">
                <h3 className="font-bold text-purple-300 mb-2">Leadership</h3>
                <p className="text-indigo-100 text-sm">Guiding team members and fostering collaboration</p>
              </div>
              <div className="bg-purple-900/50 rounded-xl p-4">
                <h3 className="font-bold text-purple-300 mb-2">Technical Expertise</h3>
                <p className="text-indigo-100 text-sm">Implementing AI algorithms and computer vision</p>
              </div>
              <div className="bg-purple-900/50 rounded-xl p-4">
                <h3 className="font-bold text-purple-300 mb-2">Project Management</h3>
                <p className="text-indigo-100 text-sm">Planning, organizing, and executing project tasks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Status & Future Plans */}
        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-8 border border-indigo-700">
          <h2 className="text-2xl font-bold mb-6">Current Status & Future Plans</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-purple-200">Current Status</h3>
              </div>
              <p className="text-indigo-100">
                The project is currently in the advanced development stage. We have successfully implemented the core
                computer vision algorithms and machine learning models, and we are now focusing on testing, refinement,
                and performance optimization.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-purple-200">Future Plans</h3>
              </div>
              <p className="text-indigo-100">
                Upon completion, we will present our project to Microsoft representatives and receive a formal
                recommendation. We also plan to explore opportunities to pilot the system with local basketball leagues
                and potentially expand to other sports applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIActivityPage;