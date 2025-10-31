import React from 'react';
import { ArrowLeft, Anchor, Trophy, Calendar, MapPin, Award, Camera, Video } from 'lucide-react';

interface SailingPageProps {
  onBack: () => void;
}

const SailingPage: React.FC<SailingPageProps> = ({ onBack }) => {
  const achievements = [
    {
      title: "HOBIE 16 Asian Championships",
      place: "3rd Place",
      prize: "￥10,000",
      location: "Weihai, China",
      date: "June 2024",
      description: "Competed against top sailors from across Asia in the prestigious HOBIE 16 class"
    }
  ];

  const certifications = [
    {
      organization: "Royal Yachting Association (RYA)",
      country: "United Kingdom",
      certifications: ["Small Sailboat Operations", "Safety Procedures", "Navigation Basics"]
    },
    {
      organization: "American Sailing Association (ASA)",
      country: "United States",
      certifications: ["Small Sailboat Certification", "Catamaran Operations", "Coastal Navigation"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-blue-200 hover:text-white transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </button>
          <div className="flex items-center">
            <Anchor className="w-8 h-8 text-cyan-400 mr-4" />
            <h1 className="text-4xl font-bold">Sailing Excellence</h1>
          </div>
        </div>

        {/* Journey Overview */}
        <div className="bg-blue-800/50 rounded-2xl p-8 mb-8 border border-blue-600">
          <h2 className="text-2xl font-bold mb-4">My Sailing Journey</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-4">
            I began my sailing adventure at the age of 6, developing a deep passion for the sport that combines 
            technical skill, strategic thinking, and harmony with nature. Over 7+ years of dedicated training, 
            I have progressed from basic boat handling to competitive racing at the international level.
          </p>
          <p className="text-blue-100 text-lg leading-relaxed">
            My commitment to excellence in sailing has led me to obtain certifications from both the Royal 
            Yachting Association (RYA) and the American Sailing Association (ASA), demonstrating my proficiency 
            in various sailing disciplines and safety procedures.
          </p>
        </div>

        {/* Major Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Competition Achievements</h2>
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gradient-to-r from-cyan-800 to-blue-800 rounded-xl p-6 mb-4 border border-cyan-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-cyan-200">{achievement.title}</h3>
                <div className="flex items-center space-x-4">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">
                    {achievement.place}
                  </span>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full font-bold">
                    {achievement.prize}
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>{achievement.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                  <span>{achievement.date}</span>
                </div>
              </div>
              <p className="text-blue-100">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Professional Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-blue-800/50 rounded-xl p-6 border border-blue-600">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-yellow-400 mr-3" />
                  <div>
                    <h3 className="font-bold text-lg">{cert.organization}</h3>
                    <p className="text-blue-200 text-sm">{cert.country}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {cert.certifications.map((certification, idx) => (
                    <li key={idx} className="flex items-center text-blue-100">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {certification}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Media Upload Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Photos Section */}
          <div className="bg-blue-800/30 rounded-xl p-6 border border-blue-600">
            <div className="flex items-center mb-4">
              <Camera className="w-6 h-6 text-cyan-400 mr-3" />
              <h3 className="text-xl font-bold">Sailing Photos</h3>
            </div>
            <div className="border-2 border-dashed border-blue-400 rounded-lg p-8 text-center">
              <Camera className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <p className="text-blue-200 mb-2">Upload your sailing photos here</p>
              <p className="text-blue-300 text-sm">Competition photos, boat shots, team pictures, certificates</p>
              <button className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg transition-colors">
                Choose Photos
              </button>
            </div>
          </div>

          {/* Videos Section */}
          <div className="bg-blue-800/30 rounded-xl p-6 border border-blue-600">
            <div className="flex items-center mb-4">
              <Video className="w-6 h-6 text-cyan-400 mr-3" />
              <h3 className="text-xl font-bold">Sailing Videos</h3>
            </div>
            <div className="border-2 border-dashed border-blue-400 rounded-lg p-8 text-center">
              <Video className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <p className="text-blue-200 mb-2">Upload your sailing videos here</p>
              <p className="text-blue-300 text-sm">Race footage, training videos, technique demonstrations</p>
              <button className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg transition-colors">
                Choose Videos
              </button>
            </div>
          </div>
        </div>

        {/* Skills & Techniques */}
        <div className="mt-8 bg-gradient-to-r from-blue-800 to-cyan-800 rounded-2xl p-8 border border-blue-600">
          <h2 className="text-2xl font-bold mb-6">Sailing Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-cyan-200 mb-3">Technical Skills</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• Boat handling & maneuvering</li>
                <li>• Wind reading & tactics</li>
                <li>• Racing strategy</li>
                <li>• Equipment maintenance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-cyan-200 mb-3">Safety & Navigation</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• Maritime safety protocols</li>
                <li>• Weather assessment</li>
                <li>• Emergency procedures</li>
                <li>• Coastal navigation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-cyan-200 mb-3">Boat Types</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• HOBIE 16 Catamaran</li>
                <li>• Small sailboats</li>
                <li>• Single-handed dinghies</li>
                <li>• Multi-hull vessels</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SailingPage;