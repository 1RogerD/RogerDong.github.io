import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calculator, Code2, Award, Brain, Camera, Video, Trophy, Target } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';

// Import images (fix to actual directories under 竞赛与荣誉证书/数学竞赛)
import usacoCert from '/image/竞赛与荣誉证书/数学竞赛/USACO/USACO 2025 bronze full score.png';
import amc8Cert from '/image/竞赛与荣誉证书/数学竞赛/AMC8/2025 AMC8 24.jpg';
import ukmtCert from '/image/竞赛与荣誉证书/数学竞赛/UKMT/2023JMC金奖.jpg';

const MathProgrammingPage: React.FC = () => {
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

  const mathProgrammingImages = [
    { src: usacoCert, alt: 'USACO Bronze Certificate' },
    { src: amc8Cert, alt: 'AMC 8 Certificate' },
    { src: ukmtCert, alt: 'UKMT Gold Medal Certificate' },
  ];
  const testScores = [
    {
      test: "USACO Bronze",
      score: "Perfect Score",
      achievement: "Full marks in USA Computing Olympiad",
      description: "Demonstrated exceptional algorithmic thinking and programming skills",
      year: "2024"
    },
    {
      test: "AMC 8",
      score: "24/25",
      achievement: "Highest score at school this year",
      description: "Outstanding performance in American Mathematics Competition",
      year: "2024"
    },
    {
      test: "UKMT",
      score: "Gold Medal",
      achievement: "UK Mathematics Trust Gold Medal Winner",
      description: "Top tier performance in UK mathematical reasoning competition",
      year: "2024"
    }
  ];

  const programmingSkills = [
    {
      language: "C++",
      level: "Advanced",
      experience: "2+ years",
      applications: ["Competitive Programming", "Algorithm Implementation", "Data Structures"]
    },
    {
      language: "Python",
      level: "Advanced",
      experience: "5+ years",
      applications: ["AI/ML Projects", "Data Analysis", "Automation Scripts"]
    },
    {
      language: "Scratch",
      level: "Expert",
      experience: "7+ years",
      applications: ["Creative Programming", "Game Development", "Educational Projects"]
    }
  ];

  const mathematicalAreas = [
    {
      area: "Competition Mathematics",
      skills: ["Problem Solving", "Mathematical Reasoning", "Pattern Recognition", "Proof Techniques"]
    },
    {
      area: "Algorithmic Thinking",
      skills: ["Algorithm Design", "Complexity Analysis", "Optimization", "Data Structures"]
    },
    {
      area: "Applied Mathematics",
      skills: ["Statistics", "Probability", "Discrete Mathematics", "Mathematical Modeling"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <a
            href="/#competitions"
            onClick={handleBackClick}
            className="flex items-center text-red-300 hover:text-white transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </a>
          <div className="flex items-center">
            <Brain className="w-8 h-8 text-yellow-400 mr-4" />
            <h1 className="text-4xl font-bold">Mathematics & Programming</h1>
          </div>
        </div>

        {/* Academic Excellence Overview */}
        <div className="bg-red-800/50 rounded-2xl p-8 mb-8 border border-red-700">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300">Academic Excellence Journey</h2>
          <p className="text-red-100 text-lg leading-relaxed mb-4">
            My passion for mathematics and programming began early, driven by curiosity about how logical 
            thinking can solve complex problems. Through consistent practice and competition participation, 
            I have developed strong analytical skills and programming proficiency.
          </p>
          <p className="text-red-100 text-lg leading-relaxed">
            I excel in both theoretical mathematics and practical programming applications, from competitive 
            programming challenges to real-world AI projects. My approach combines mathematical rigor with 
            creative problem-solving techniques.
          </p>
        </div>

        {/* Test Scores & Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Standardized Test Achievements</h2>
          <div className="space-y-4">
            {testScores.map((test, index) => (
              <div key={index} className="bg-gradient-to-r from-red-800 to-yellow-800/30 rounded-xl p-6 border border-red-600">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-yellow-300">{test.test}</h3>
                  <div className="flex items-center space-x-3">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">
                      {test.score}
                    </span>
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                      {test.year}
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="text-yellow-400 font-semibold">Achievement: </span>
                  <span className="text-red-100">{test.achievement}</span>
                </div>
                <p className="text-red-100">{test.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programming Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Programming Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {programmingSkills.map((skill, index) => (
              <div key={index} className="bg-red-800/30 rounded-xl p-6 border border-red-600">
                <div className="flex items-center mb-4">
                  <Code2 className="w-6 h-6 text-yellow-400 mr-3" />
                  <div>
                    <h3 className="font-bold text-lg">{skill.language}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">
                        {skill.level}
                      </span>
                      <span className="text-red-200 text-sm">{skill.experience}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {skill.applications.map((app, idx) => (
                    <li key={idx} className="flex items-center text-red-100">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mathematical Areas */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Mathematical Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mathematicalAreas.map((area, index) => (
              <div key={index} className="bg-red-800/30 rounded-xl p-6 border border-red-600">
                <div className="flex items-center mb-4">
                  <Calculator className="w-6 h-6 text-yellow-400 mr-3" />
                  <h3 className="font-bold text-lg text-yellow-200">{area.area}</h3>
                </div>
                <ul className="space-y-2">
                  {area.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center text-red-100">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>



        {/* Special Programs & Recognition */}
        <div className="bg-gradient-to-r from-red-900 to-yellow-900/70 rounded-2xl p-8 border border-red-700">
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-yellow-400 mr-4" />
            <h2 className="text-2xl font-bold">Special Programs & Recognition</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-yellow-300 mb-4">Johns Hopkins CTY</h4>
              <p className="text-red-100 mb-4">
                Participated in the prestigious Center for Talented Youth summer program, engaging with 
                advanced academic content and collaborating with gifted students from around the world.
              </p>
              <ul className="space-y-2 text-red-100">
                <li>• Advanced mathematical concepts</li>
                <li>• Accelerated learning environment</li>
                <li>• International peer collaboration</li>
                <li>• Research methodology training</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-yellow-300 mb-4">Future Aspirations</h4>
              <p className="text-red-100 mb-4">
                My goal is to pursue advanced studies in Computer Science and Mathematics at Stanford University, 
                focusing on AI research and innovative technology development.
              </p>
              <ul className="space-y-2 text-red-100">
                <li>• AI and Machine Learning research</li>
                <li>• Advanced algorithm development</li>
                <li>• Mathematical modeling applications</li>
                <li>• Technology entrepreneurship</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Media Gallery */}
        <div className="bg-red-800/50 rounded-2xl p-8 mt-8 border border-red-700">
          <h2 className="text-2xl font-bold mb-6 text-yellow-300">Media Gallery</h2>
          <ImageGallery images={mathProgrammingImages} />
        </div>
      </div>
    </div>
  );
};

export default MathProgrammingPage;

