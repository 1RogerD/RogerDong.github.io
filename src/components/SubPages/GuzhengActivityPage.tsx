import React from 'react';
import { ArrowLeft, Music, Award, Calendar, Book, Star } from 'lucide-react';

interface GuzhengActivityPageProps {
  onBack: () => void;
}

const GuzhengActivityPage: React.FC<GuzhengActivityPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-red-200 hover:text-white transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Activities
          </button>
          <div className="flex items-center">
            <Music className="w-8 h-8 text-yellow-400 mr-4" />
            <h1 className="text-4xl font-bold">Guzheng (古筝)</h1>
          </div>
        </div>

        {/* Journey Overview */}
        <div className="bg-red-800/50 rounded-2xl p-8 mb-8 border border-red-600">
          <h2 className="text-2xl font-bold mb-4">My Guzheng Journey</h2>
          <p className="text-red-100 text-lg leading-relaxed mb-4">
            I began my Guzheng studies at the age of 10 and have been passionate about this traditional Chinese musical instrument
            ever since. The Guzheng, with its 21 strings and over 2,500 years of history, has allowed me to connect with
            my cultural heritage while developing musical skills.
          </p>
          <p className="text-red-100 text-lg leading-relaxed">
            Learning the Guzheng has taught me patience, discipline, and the beauty of expressing emotions through music.
            It's been a journey of self-discovery and cultural appreciation that complements my other pursuits in sports
            and technology.
          </p>
        </div>

        {/* Skill Development */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Skill Development</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-orange-800 to-red-800 rounded-xl p-6 border border-orange-600">
              <div className="flex items-center mb-4">
                <Book className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-orange-200">Repertoire</h3>
              </div>
              <ul className="space-y-2 text-red-100">
                <li>• Traditional Chinese folk pieces</li>
                <li>• Classical Guzheng compositions</li>
                <li>• Modern adaptations</li>
                <li>• Improvisational techniques</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-orange-800 to-red-800 rounded-xl p-6 border border-orange-600">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold text-orange-200">Technical Proficiency</h3>
              </div>
              <ul className="space-y-2 text-red-100">
                <li>• Basic and advanced finger techniques</li>
                <li>• Vibrato and trills</li>
                <li>• Rhythm and timing</li>
                <li>• Expression and musicality</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Practice & Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Practice & Achievements</h2>
          <div className="bg-red-800/50 rounded-2xl p-8 border border-red-600">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">2+ Years</h3>
                <p className="text-red-100">Dedicated study</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">3+ Hours/Week</h3>
                <p className="text-red-100">Regular practice</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">10+ Performances</h3>
                <p className="text-red-100">School and community events</p>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-yellow-400 mr-3" />
              <h3 className="text-xl font-bold text-orange-200">Achievements</h3>
            </div>
            <p className="text-red-100 mb-4">
              Through consistent practice and dedication, I have achieved intermediate level proficiency in Guzheng playing.
              I have performed at various school events, cultural festivals, and community gatherings, showcasing
              traditional Chinese music and cultural heritage.
            </p>
            <p className="text-red-100">
              My most memorable performance was at the school's annual cultural festival, where I played a traditional
              piece titled "High Mountain and Flowing Water," which was met with enthusiastic applause from students
              and teachers alike.
            </p>
          </div>
        </div>

        {/* Cultural Significance */}
        <div className="bg-gradient-to-br from-red-900 to-orange-900 rounded-2xl p-8 border border-red-700">
          <h2 className="text-2xl font-bold mb-6">Cultural Significance</h2>
          <p className="text-red-100 text-lg leading-relaxed mb-4">
            The Guzheng holds a special place in Chinese culture, often referred to as the "Chinese harp." It has been
            played for over 2,500 years and is deeply rooted in Chinese history and tradition.
          </p>
          <p className="text-red-100 text-lg leading-relaxed">
            Learning to play the Guzheng has allowed me to connect with my cultural heritage in a meaningful way. It
            has given me a deeper appreciation for traditional Chinese music, art, and philosophy, which I believe
            enriches my perspective as a global citizen and future leader.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuzhengActivityPage;