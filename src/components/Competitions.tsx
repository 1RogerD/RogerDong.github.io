import { Link } from 'react-router-dom';
import { Trophy, Medal, Award, Star, ChevronRight } from 'lucide-react';

const Competitions = () => {

  // const competitions = [
  //   {
  //     category: "Sailing",
  //     icon: <Trophy className="w-8 h-8 text-yellow-600" />,
  //     clickable: true,
  //     onClick: () => setCurrentPage('sailing'),
  //     achievements: [
  //       "HOBIE 16 Asian Championships 3st Place (￥10,000 prize)",
  //       "Royal Yachting Association (RYA) Certified",
  //       "American Sailing Association (ASA) Certified",
  //       "Small sailboats and catamarans qualified",
  //       "7+ years of continuous training since age 6"
  //     ]
  //   },
  //   {
  //     category: "Robotics",
  //     icon: <Medal className="w-8 h-8 text-red-600" />,
  //     clickable: true,
  //     onClick: () => setCurrentPage('robotics'),
  //     achievements: [
  //       "MakeX Global Runner-up (2nd Place)",
  //       "MakeX Asia Champion ($1,000 prize)",
  //       "Multiple China National Championships",
  //       "8 years of robotics experience since age 5",
  //       "Team Leader & Captain",
  //       "Progressed: Starter → Explorer → Challenge",
  //       "Preparing for 2025 National Championship"
  //     ]
  //   },
  //   {
  //     category: "Mathematics & Programming",
  //     icon: <Award className="w-8 h-8 text-blue-600" />,
  //     clickable: true,
  //     onClick: () => setCurrentPage('math-programming'),
  //     achievements: [
  //       "USACO Bronze - Perfect Score (Full Marks)",
  //       "AMC 8 - 24/25 (Highest score at school this year)",
  //       "UKMT Gold Medal Winner",
  //       "C++, Python, Scratch Programming",
  //       "Advanced mathematical reasoning skills"
  //     ]
  //   },
  //   {
  //     category: "Sports Teams",
  //     icon: <Star className="w-8 h-8 text-green-600" />,
  //     clickable: true,
  //     onClick: () => setCurrentPage('sports-teams'),
  //     achievements: [
  //       "BCIS U-14 A Basketball Team",
  //       "BCIS U-14 A Football Team",
  //       "Multi-sport excellence: sailing, basketball, soccer, swimming",
  //       "Inter-school competition experience"
  //     ]
  //   }
  // ];

  return (
    <section id="competitions" className="py-20 bg-gradient-to-br from-black via-gray-900 to-red-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-red-600 to-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Competitions & Honors</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A track record of excellence across multiple disciplines, from international sailing 
            competitions to global robotics championships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sailing */}
          <div 
            className="bg-gray-800/90 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-red-700 cursor-pointer hover:border-yellow-400 hover:bg-gray-700/90"
          >
            <div className="flex items-center mb-6">
              <Trophy className="w-8 h-8 text-yellow-600" />
              <h3 className="text-2xl font-bold text-white ml-4 flex-1">Sailing</h3>
              <ChevronRight className="w-6 h-6 text-yellow-400 ml-2" />
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">HOBIE 16 Asian Championships 3rd Place (￥10,000 prize)</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">Royal Yachting Association (RYA) Certified</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">American Sailing Association (ASA) Certified</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">Qualified for all kinds of boats under ASA and RYA certifications</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">7+ years of continuous training since age 6</span>
              </li>
            </ul>
            
            <Link 
              to="/sailing"
              className="mt-6 w-full text-center cursor-pointer relative z-10 bg-transparent border-none p-0 block"
            >
              <span className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">Click to view detailed information →</span>
            </Link>
          </div>

          {/* Robotics */}
          <div 
            className="bg-gray-800/90 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-red-700 cursor-pointer hover:border-yellow-400 hover:bg-gray-700/90"
          >
            <div className="flex items-center mb-6">
              <Medal className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-bold text-white ml-4 flex-1">Robotics</h3>
              <ChevronRight className="w-6 h-6 text-yellow-400 ml-2" />
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">MakeX Global Runner-up (2nd Place)</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">MakeX Asia Champion ($1,000 prize)</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">Multiple China National Championships</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">8 years of robotics experience since age 5</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">Team Leader & Captain</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">Progressed: Starter → Explorer → Challenge</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">Preparing for 2025 National Championship</span>
              </li>
            </ul>
            
            <Link 
              to="/robotics"
              className="mt-6 w-full text-center cursor-pointer relative z-10 bg-transparent border-none p-0 block"
            >
              <span className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">Click to view detailed information →</span>
            </Link>
          </div>

          {/* Mathematics & Programming */}
          <div 
            className="bg-gray-800/90 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-red-700 cursor-pointer hover:border-yellow-400 hover:bg-gray-700/90"
          >
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-white ml-4 flex-1">Mathematics & Programming</h3>
              <ChevronRight className="w-6 h-6 text-yellow-400 ml-2" />
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">USACO Bronze - Perfect Score (Full Marks)</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">AMC 8 - 24/25 (Highest score at school this year)</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">UKMT Gold Medal Winner</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">C++, Python, Scratch Programming</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">Advanced mathematical reasoning skills</span>
              </li>
            </ul>
            
            <Link 
              to="/math-programming"
              className="mt-6 w-full text-center cursor-pointer relative z-10 bg-transparent border-none p-0 block"
            >
              <span className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">Click to view detailed information →</span>
            </Link>
          </div>

          {/* Sports Teams */}
          <div 
            className="bg-gray-800/90 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-red-700 cursor-pointer hover:border-yellow-400 hover:bg-gray-700/90"
          >
            <div className="flex items-center mb-6">
              <Star className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-white ml-4 flex-1">Sports Teams</h3>
              <ChevronRight className="w-6 h-6 text-yellow-400 ml-2" />
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">BCIS U-14 A Basketball Team</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">BCIS U-14 A Football Team</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">Multi-sport excellence: sailing, basketball, soccer, swimming</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">Inter-school competition experience</span>
              </li>
            </ul>
            
            <Link 
              to="/sports-teams"
              className="mt-6 w-full text-center cursor-pointer relative z-10 bg-transparent border-none p-0 block"
            >
              <span className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">Click to view detailed information →</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-900 to-black rounded-2xl p-8 text-white text-center border border-red-600">
          <h3 className="text-2xl font-bold mb-4">Microsoft AI Project Recognition</h3>
          <p className="text-lg mb-4">
            Selected as Captain for Microsoft AI Project developing basketball travel violation detection system
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Award className="w-6 h-6" />
            <span className="font-semibold">Microsoft Recommendation Upon Completion</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitions;