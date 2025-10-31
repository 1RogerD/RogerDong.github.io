import React, { useState, useEffect } from 'react';
import { BookOpen, Calculator, Code2, Beaker, Globe, TrendingUp, ArrowLeft } from 'lucide-react';
// 添加.tsx扩展名以解决TypeScript模块解析问题
import MathematicsPage from './SubPages/MathematicsPage';
import ComputerSciencePage from './SubPages/ComputerSciencePage';
import SciencePage from './SubPages/SciencePage';
import InternationalStudiesPage from './SubPages/InternationalStudiesPage';

const Academics = () => {
  const [currentPage, setCurrentPage] = useState<string | null>(null);

  

  if (currentPage === 'mathematics') {
    return <MathematicsPage onBack={() => setCurrentPage(null)} />;
  }
  if (currentPage === 'computer-science') {
    return <ComputerSciencePage onBack={() => setCurrentPage(null)} />;
  }
  if (currentPage === 'science') {
    return <SciencePage onBack={() => setCurrentPage(null)} />;
  }
  if (currentPage === 'international-studies') {
    return <InternationalStudiesPage onBack={() => setCurrentPage(null)} />;
  }

  const testScores = [
    {
      test: "AMC 8",
      score: "24/25",
      achievement: "Highest score at school",
      icon: <Calculator className="w-6 h-6" />
    },
    {
      test: "USACO Bronze",
      score: "Perfect Score",
      achievement: "Full marks in Olympics of Programming",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      test: "UKMT",
      score: "Gold Medal",
      achievement: "UK Mathematics Trust Gold Medal Winner",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const subjects = [
    {
      subject: "Mathematics",
      level: "Advanced",
      highlights: ["Competition mathematics", "Problem-solving excellence", "Analytical thinking"],
      icon: <Calculator className="w-8 h-8 text-blue-600" />,
      pageId: 'mathematics'
    },
    {
      subject: "Computer Science",
      level: "Expert",
      highlights: ["C++ Programming", "Python Development", "Algorithm Design"],
      icon: <Code2 className="w-8 h-8 text-green-600" />,
      pageId: 'computer-science'
    },
    {
      subject: "Science",
      level: "Advanced",
      highlights: ["Arduino Projects", "3D Printing", "Research Methodology"],
      icon: <Beaker className="w-8 h-8 text-purple-600" />,
      pageId: 'science'
    },
    {
      subject: "International Studies",
      level: "Proficient",
      highlights: ["Global Perspective", "Cultural Awareness", "Critical Analysis"],
      icon: <Globe className="w-8 h-8 text-red-600" />,
      pageId: 'international-studies'
    }
  ];

  return (
    <section id="academics" className="py-20 bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-red-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-yellow-200 to-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-800 mb-4">Academic Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Demonstrated academic achievement through standardized tests, competitions,
            and advanced coursework across multiple disciplines.
          </p>
        </div>

        {/* Test Scores */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Standardized Test Scores</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testScores.map((test, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-red-50 rounded-full text-red-700">
                    {test.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{test.test}</h4>
                <div className="text-3xl font-bold text-red-800 mb-2">{test.score}</div>
                <p className="text-gray-600">{test.achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Strengths */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Subject Strengths</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer hover:border-2 hover:border-red-400"
                onClick={() => setCurrentPage(subject.pageId)}
              >
                <div className="flex justify-center mb-4">
                  {subject.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">{subject.subject}</h4>
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                    {subject.level}
                  </span>
                </div>
                <ul className="space-y-2">
                  {subject.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-red-700 rounded-full mr-3"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </div>

        {/* Special Programs */}
        <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Special Academic Programs</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Johns Hopkins CTY</h4>
              <p className="text-red-100 mb-4">
                Participated in the prestigious Center for Talented Youth summer program,
                engaging with advanced academic content and like-minded peers from around the world.
              </p>
              <ul className="space-y-2 text-red-100">
                <li>• Advanced academic acceleration</li>
                <li>• Gifted education methodology</li>
                <li>• International peer collaboration</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Programming Excellence</h4>
              <p className="text-red-100 mb-4">
                Demonstrated exceptional programming abilities through multiple languages
                and competitive programming achievements.
              </p>
              <ul className="space-y-2 text-red-100">
                <li>• C++ competitive programming</li>
                <li>• Python application development</li>
                <li>• Scratch creative programming</li>
                <li>• Algorithm optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;