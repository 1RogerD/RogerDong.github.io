import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bot, Code, Zap, Users, Camera, Video, Target } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';

// Import images
import roboticsImg1 from '/image/竞赛与荣誉证书/MAKE X机器人/2023年世界机器人亚洲锦标赛冠军.jpg';
import roboticsImg2 from '/image/竞赛与荣誉证书/MAKE X机器人/2023年世界机器人总决赛亚军.png';
import roboticsImg3 from '/image/竞赛与荣誉证书/MAKE X机器人/2023年世界机器人烟台锦标赛一等奖.png';
import roboticsImg4 from '/image/竞赛与荣誉证书/MAKE X机器人/2024年世界机器人北京选拔赛冠军.png';

const RoboticsPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('competitions');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const roboticsImages = [
    { src: roboticsImg1, alt: 'Robotics competition photo 1' },
    { src: roboticsImg2, alt: 'Robotics competition photo 2' },
    { src: roboticsImg3, alt: 'Robotics competition photo 3' },
    { src: roboticsImg4, alt: 'Robotics competition photo 4' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-red-900 text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <a
            href="/#competitions"
            onClick={handleBackClick}
            className="flex items-center group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 text-red-300 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-red-300 font-semibold">Back to Home</span>
          </a>
          <div className="flex items-center">
            <Bot className="w-8 h-8 text-yellow-400" />
            <h1 className="text-3xl md:text-4xl font-bold ml-3 tracking-tight">Robotics</h1>
          </div>
        </header>

        {/* My Robotics Journey */}
        <div className="bg-red-800/50 rounded-xl p-6 mb-8 border border-red-700 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">My Robotics Journey</h2>
          <p className="text-red-100 leading-relaxed">
            My journey in robotics began in middle school, where I discovered my passion for engineering and problem-solving. Over the years, I've competed in numerous MakeX competitions, winning an Asian championship and three national championships. This has honed my skills in robot design, programming, and teamwork. I've also taken on leadership roles, serving as team captain and mentoring younger students. These experiences have not only taught me the technical aspects of robotics but also the importance of collaboration, perseverance, and strategic thinking.
          </p>
        </div>

        {/* Competition Achievements */}
        <div className="bg-gradient-to-r from-red-800 to-yellow-800/30 rounded-xl p-6 mb-8 border border-red-600">
          <h2 className="text-2xl font-bold mb-6 text-yellow-300">Competition Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Achievement 2 */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">2022 MakeX World Championship</span>
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">Champion</span>
              </div>
              <h4 className="font-bold text-yellow-400">Starter Category</h4>
              <p className="text-sm text-red-100 mb-2">Led the team to victory in a global competition.</p>
              <p className="text-xs text-red-100">Skills: Scratch Programming, Mechanical Design, Leadership</p>
            </div>
            {/* Achievement: Asia Championship */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">MakeX Asian Championship</span>
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">Champion</span>
              </div>
              <h4 className="font-bold text-yellow-400">Asia Region</h4>
              <p className="text-sm text-red-100 mb-2">Secured the top position in the Asian championship.</p>
              <p className="text-xs text-red-100">Skills: Team Leadership, Advanced Strategy</p>
            </div>

            {/* Achievement: National Championships */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">MakeX National Championship</span>
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">3x Champion</span>
              </div>
              <h4 className="font-bold text-yellow-400">National Level</h4>
              <p className="text-sm text-red-100 mb-2">Achieved the national title three times, demonstrating consistent excellence.</p>
              <p className="text-xs text-red-100">Skills: Robot Design, Programming, Team Leadership</p>
            </div>
          </div>
        </div>

        {/* Current Projects */}
        <div className="bg-red-800/30 rounded-xl p-6 mb-8 border border-red-600">
          <h2 className="text-2xl font-bold mb-6 text-yellow-300">Current Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">AI-Powered Robotic Arm</span>
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">In Progress</span>
              </div>
              <h4 className="font-bold text-yellow-400">Role: Lead Programmer</h4>
              <p className="text-sm text-red-100 mb-2">Developing an AI model to enable a robotic arm to recognize and sort objects.</p>
              <p className="text-xs text-red-100">Partners: Microsoft AI for Good</p>
            </div>
            {/* Project 2 */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">Autonomous Drone Project</span>
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">Planning Phase</span>
              </div>
              <h4 className="font-bold text-yellow-400">Role: Project Lead</h4>
              <p className="text-sm text-red-100 mb-2">Designing a drone for autonomous navigation and data collection in agricultural settings.</p>
              <p className="text-xs text-red-100">Partners: Local University Research Lab</p>
            </div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Technical Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-800/30 rounded-xl p-6 border border-red-600">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-yellow-400 mr-3" />
                <h4 className="font-bold text-yellow-300">Programming</h4>
              </div>
              <ul className="space-y-2 text-red-100">
                <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>C++ Programming</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>Python Development</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>Scratch Visual Programming</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>Algorithm Design</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>AI/ML Implementation</li>
              </ul>
            </div>
            <div className="bg-red-800/30 rounded-xl p-6 border border-red-600">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                <h4 className="font-bold text-yellow-300">Hardware</h4>
              </div>
              <ul className="space-y-2 text-red-100">
                <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>Robot Assembly</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>Sensor Integration</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>Motor Control Systems</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>Circuit Design</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>3D Printing</li>
              </ul>
            </div>
            <div className="bg-red-800/30 rounded-xl p-6 border border-red-600">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-yellow-400 mr-3" />
                <h4 className="font-bold text-yellow-300">Leadership</h4>
              </div>
              <ul className="space-y-2 text-red-100">
                <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>Team Captain</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>Strategic Planning</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>Project Management</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>Mentoring</li>
                <li className="flex items-center"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>Competition Strategy</li>
              </ul>
            </div>
          </div>
        </div>


        {/* Future Goals */}
        <div className="bg-red-800/50 rounded-xl p-6 mb-8 border border-red-700">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">Future Goals in Robotics</h2>
          <p className="text-yellow-400 mb-4">Exploring new frontiers in AI, machine learning, and autonomous systems.</p>
          <ul className="space-y-3 text-red-100">
            <li className="flex items-start"><Target className="w-5 h-5 text-yellow-400 mr-3 mt-1" /><span>Master advanced topics in AI and machine learning for robotics.</span></li>
            <li className="flex items-start"><Target className="w-5 h-5 text-yellow-400 mr-3 mt-1" /><span>Lead a team in developing a fully autonomous robot for a major competition.</span></li>
            <li className="flex items-start"><Target className="w-5 h-5 text-yellow-400 mr-3 mt-1" /><span>Contribute to open-source robotics projects and collaborate with the global community.</span></li>
            <li className="flex items-start"><Target className="w-5 h-5 text-yellow-400 mr-3 mt-1" /><span>Mentor younger students and inspire the next generation of robotics engineers.</span></li>
          </ul>
        </div>

        {/* Media Gallery */}
        <div className="bg-red-800/50 rounded-2xl p-8 border border-red-700">
          <h2 className="text-2xl font-bold mb-6 text-yellow-300">Media Gallery</h2>
          <ImageGallery images={roboticsImages} />
        </div>
      </div>
    </div>
  );
};

export default RoboticsPage;

