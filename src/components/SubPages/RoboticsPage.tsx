import React from 'react';
import { ArrowLeft, Bot, Trophy, Users, Lightbulb, Camera, Video, Code, Zap } from 'lucide-react';

interface RoboticsPageProps {
  onBack: () => void;
}

const RoboticsPage: React.FC<RoboticsPageProps> = ({ onBack }) => {
  const competitions = [
    {
      title: "MakeX Global Championship",
      result: "Runner-up (2nd Place)",
      year: "2024",
      category: "Challenge Class",
      description: "Competed against top teams worldwide in advanced robotics challenges"
    },
    {
      title: "MakeX Asia Championship",
      result: "Champion (1st Place)",
      prize: "$1,000",
      year: "2023",
      category: "Explorer Class",
      description: "Led team to victory in Asian regional competition"
    },
    {
      title: "China National Championships",
      result: "Multiple Wins",
      year: "2022-2024",
      category: "Various Classes",
      description: "Consistent performance across multiple national competitions"
    }
  ];

  const projects = [
    {
      title: "AI Basketball Travel Detection",
      status: "In Development",
      partner: "Microsoft AI Project",
      role: "Team Captain",
      description: "Developing AI system to detect traveling violations in basketball games using computer vision"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-red-200 hover:text-white transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </button>
          <div className="flex items-center">
            <Bot className="w-8 h-8 text-orange-400 mr-4" />
            <h1 className="text-4xl font-bold">Robotics Excellence</h1>
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
            {competitions.map((comp, index) => (
              <div key={index} className="bg-gradient-to-r from-orange-800 to-red-800 rounded-xl p-6 border border-orange-600">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-orange-200">{comp.title}</h3>
                  <div className="flex items-center space-x-3">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                      {comp.result}
                    </span>
                    {comp.prize && (
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                        {comp.prize}
                      </span>
                    )}
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                      {comp.year}
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-orange-300 font-semibold">Category: </span>
                  <span className="text-red-100">{comp.category}</span>
                </div>
                <p className="text-red-100">{comp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Projects */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Current Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="bg-red-800/50 rounded-xl p-6 border border-red-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-orange-200">{project.title}</h3>
                <div className="flex items-center space-x-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                    {project.status}
                  </span>
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                    {project.role}
                  </span>
                </div>
              </div>
              <div className="mb-3">
                <span className="text-orange-300 font-semibold">Partner: </span>
                <span className="text-red-100">{project.partner}</span>
              </div>
              <p className="text-red-100">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Skills & Expertise */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Technical Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-800/30 rounded-xl p-6 border border-red-600">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-orange-400 mr-3" />
                <h4 className="font-bold text-orange-200">Programming</h4>
              </div>
              <ul className="space-y-2 text-red-100">
                <li>• C++ Programming</li>
                <li>• Python Development</li>
                <li>• Scratch Visual Programming</li>
                <li>• Algorithm Design</li>
                <li>• AI/ML Implementation</li>
              </ul>
            </div>
            <div className="bg-red-800/30 rounded-xl p-6 border border-red-600">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-orange-400 mr-3" />
                <h4 className="font-bold text-orange-200">Hardware</h4>
              </div>
              <ul className="space-y-2 text-red-100">
                <li>• Robot Assembly</li>
                <li>• Sensor Integration</li>
                <li>• Motor Control Systems</li>
                <li>• Circuit Design</li>
                <li>• 3D Printing</li>
              </ul>
            </div>
            <div className="bg-red-800/30 rounded-xl p-6 border border-red-600">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-orange-400 mr-3" />
                <h4 className="font-bold text-orange-200">Leadership</h4>
              </div>
              <ul className="space-y-2 text-red-100">
                <li>• Team Captain</li>
                <li>• Strategic Planning</li>
                <li>• Project Management</li>
                <li>• Mentoring</li>
                <li>• Competition Strategy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Media Upload Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Photos Section */}
          <div className="bg-red-800/30 rounded-xl p-6 border border-red-600">
            <div className="flex items-center mb-4">
              <Camera className="w-6 h-6 text-orange-400 mr-3" />
              <h3 className="text-xl font-bold">Robotics Photos</h3>
            </div>
            <div className="border-2 border-dashed border-red-400 rounded-lg p-8 text-center">
              <Camera className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <p className="text-red-200 mb-2">Upload your robotics photos here</p>
              <p className="text-red-300 text-sm">Robot designs, competition moments, team photos, awards</p>
              <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors">
                Choose Photos
              </button>
            </div>
          </div>

          {/* Videos Section */}
          <div className="bg-red-800/30 rounded-xl p-6 border border-red-600">
            <div className="flex items-center mb-4">
              <Video className="w-6 h-6 text-orange-400 mr-3" />
              <h3 className="text-xl font-bold">Robotics Videos</h3>
            </div>
            <div className="border-2 border-dashed border-red-400 rounded-lg p-8 text-center">
              <Video className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <p className="text-red-200 mb-2">Upload your robotics videos here</p>
              <p className="text-red-300 text-sm">Robot demonstrations, competition footage, build process</p>
              <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg transition-colors">
                Choose Videos
              </button>
            </div>
          </div>
        </div>

        {/* Future Goals */}
        <div className="bg-gradient-to-r from-red-800 to-orange-800 rounded-2xl p-8 border border-red-600">
          <div className="flex items-center mb-4">
            <Lightbulb className="w-8 h-8 text-yellow-400 mr-4" />
            <h2 className="text-2xl font-bold">Future Goals & Aspirations</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-orange-200 mb-3">2025 Objectives</h4>
              <ul className="space-y-2 text-red-100">
                <li>• Win 2025 National Championship</li>
                <li>• Complete Microsoft AI Project</li>
                <li>• Advance to MakeX World Championship</li>
                <li>• Mentor junior team members</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-orange-200 mb-3">Long-term Vision</h4>
              <ul className="space-y-2 text-red-100">
                <li>• Pursue AI and Robotics at Stanford</li>
                <li>• Develop innovative AI solutions</li>
                <li>• Lead technology startups</li>
                <li>• Contribute to robotics research</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticsPage;