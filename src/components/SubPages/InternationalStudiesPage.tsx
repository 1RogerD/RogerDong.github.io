import React, { useEffect } from 'react';
import { ArrowLeft, Globe, Users, BookOpen, Award } from 'lucide-react';

interface InternationalStudiesPageProps {
  onBack: () => void;
}

const InternationalStudiesPage: React.FC<InternationalStudiesPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-pink-800 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-red-200 hover:text-white transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Academics
          </button>
          <div className="flex items-center">
            <Globe className="w-8 h-8 text-red-400 mr-4" />
            <h1 className="text-4xl font-bold">International Studies</h1>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-pink-800/50 rounded-2xl p-8 mb-8 border border-pink-600">
          <h2 className="text-2xl font-bold mb-4">Global Perspective Journey</h2>
          <p className="text-pink-100 text-lg leading-relaxed mb-4">
            International studies have broadened my understanding of the world, its diverse cultures, and the complex
            interconnected challenges we face as a global community. I am passionate about learning about different
            cultures, languages, and global issues.
          </p>
          <p className="text-pink-100 text-lg leading-relaxed">
            Through my studies and experiences, I've developed a global mindset that allows me to appreciate diverse
            perspectives, work effectively with people from different backgrounds, and think critically about international
            issues.
          </p>
        </div>

        {/* Key Experiences */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Key International Experiences</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-800 to-pink-800 rounded-xl p-6 border border-red-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-red-200">Johns Hopkins CTY</h3>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  International Program
                </span>
              </div>
              <p className="text-pink-100 mb-4">
                Participated in the prestigious Johns Hopkins Center for Talented Youth (CTY) summer program,
                where I had the opportunity to learn alongside gifted students from around the world. This experience
                broadened my global perspective and introduced me to diverse cultures and ideas.
              </p>
              <ul className="space-y-2 text-pink-100">
                <li>• Cross-cultural collaboration</li>
                <li>• Global issue discussions</li>
                <li>• International peer networking</li>
                <li>• Comparative cultural studies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Global Competencies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-800/50 rounded-xl p-6 border border-red-600">
              <div className="flex justify-center mb-4">
                <Globe className="w-10 h-10 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-center mb-3">Global Perspective</h3>
              <p className="text-pink-100 text-center text-sm">Understanding interconnected global issues and perspectives</p>
            </div>
            
            <div className="bg-red-800/50 rounded-xl p-6 border border-red-600">
              <div className="flex justify-center mb-4">
                <Users className="w-10 h-10 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-center mb-3">Cultural Awareness</h3>
              <p className="text-pink-100 text-center text-sm">Appreciating and respecting diverse cultural backgrounds</p>
            </div>
            
            <div className="bg-red-800/50 rounded-xl p-6 border border-red-600">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-10 h-10 text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-center mb-3">Critical Analysis</h3>
              <p className="text-pink-100 text-center text-sm">Evaluating global issues from multiple perspectives</p>
            </div>
          </div>
        </div>

        {/* Future Goals */}
        <div className="bg-gradient-to-br from-red-900 to-pink-900 rounded-2xl p-8 border border-red-700">
          <h2 className="text-2xl font-bold mb-6">Future Global Engagement</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-red-400 mr-3" />
                <h3 className="text-xl font-bold text-red-200">International Collaboration</h3>
              </div>
              <p className="text-pink-100 mb-4">
                I aim to continue collaborating with peers from around the world on projects that address global challenges,
                particularly in the fields of technology, education, and sustainability.
              </p>
              <ul className="space-y-2 text-pink-100">
                <li>• Global youth initiatives</li>
                <li>• International robotics competitions</li>
                <li>• Cross-cultural innovation projects</li>
                <li>• Global citizenship initiatives</li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-red-400 mr-3" />
                <h3 className="text-xl font-bold text-red-200">Global Impact</h3>
              </div>
              <p className="text-pink-100 mb-4">
                My long-term goal is to use my skills in technology, leadership, and global understanding to address
                pressing international challenges and contribute positively to our global community.
              </p>
              <ul className="space-y-2 text-pink-100">
                <li>• Technology for social good</li>
                <li>• Cross-border educational initiatives</li>
                <li>• Sustainable innovation</li>
                <li>• Cultural exchange programs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalStudiesPage;