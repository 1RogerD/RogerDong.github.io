import React, { useState } from 'react';
import { Anchor, Snowflake, Music, Zap, Palette, Users, Brain, Mountain, ArrowLeft } from 'lucide-react';

// 临时解决方案：不使用子页面导入，而是在同一组件内处理点击逻辑
const ActivitiesTemp = () => {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  
  const activities = [
    { name: "Sailing", icon: <Anchor className="w-6 h-6" />, description: "RYA & ASA certified, HOBIE 16 Asia 3rd place winner", level: "Advanced", color: "bg-blue-100 text-blue-800", isDetailed: true },
    { name: "Skiing", icon: <Snowflake className="w-6 h-6" />, description: "Winter sports enthusiast with technical proficiency", level: "Intermediate", color: "bg-cyan-100 text-cyan-800", isDetailed: false },
    { name: "Swimming", icon: <Anchor className="w-6 h-6" />, description: "Competitive swimming as part of multi-sport training", level: "Competitive", color: "bg-blue-100 text-blue-800", isDetailed: false },
    { name: "LAMDA", icon: <Music className="w-6 h-6" />, description: "London Academy of Music and Dramatic Art certification", level: "Certified", color: "bg-purple-100 text-purple-800", isDetailed: false },
    { name: "Guzheng (古筝)", icon: <Music className="w-6 h-6" />, description: "2+ years study, performing classical Chinese folk pieces", level: "Intermediate", color: "bg-red-100 text-red-800", isDetailed: true },
    { name: "Taekwondo (跆拳道)", icon: <Zap className="w-6 h-6" />, description: "Korean martial arts discipline and technique", level: "Black Belt", color: "bg-gray-100 text-gray-800", isDetailed: false },
    { name: "Fencing", icon: <Zap className="w-6 h-6" />, description: "Olympic sport precision and strategy", level: "Competitive", color: "bg-yellow-100 text-yellow-800", isDetailed: false },
    { name: "Pottery (陶艺)", icon: <Palette className="w-6 h-6" />, description: "Ceramic arts and creative expression", level: "Artistic", color: "bg-orange-100 text-orange-800", isDetailed: false },
    { name: "LSA Teaching", icon: <Users className="w-6 h-6" />, description: "Learning Support Assistant and peer mentoring", level: "Leadership", color: "bg-green-100 text-green-800", isDetailed: false },
    { name: "AI Projects", icon: <Brain className="w-6 h-6" />, description: "Microsoft AI project captain, basketball travel detection", level: "Captain", color: "bg-indigo-100 text-indigo-800", isDetailed: true },
    { name: "CTY Summer School", icon: <Mountain className="w-6 h-6" />, description: "Johns Hopkins Center for Talented Youth program", level: "Alumni", color: "bg-pink-100 text-pink-800", isDetailed: false },
    { name: "Chess", icon: <Brain className="w-6 h-6" />, description: "National level strategic thinking and competition", level: "National", color: "bg-slate-100 text-slate-800", isDetailed: true }
  ];

  // 处理活动点击
  const handleActivityClick = (activity: { name: string; isDetailed: boolean }) => {
    if (activity.isDetailed) {
      setSelectedActivity(activity.name);
    }
  };

  // 获取详细信息（在实际应用中可以从API或详细数据对象中获取）
  const getActivityDetails = (name: string) => {
    switch (name) {
      case 'Sailing':
        return { title: 'Sailing', color: 'from-blue-900 via-blue-800 to-cyan-900', content: '7+ years of sailing experience, including winning 3rd place at the HOBIE 16 Asian Championships.' };
      case 'Guzheng (古筝)':
        return { title: 'Guzheng (古筝)', color: 'from-red-900 via-red-800 to-orange-900', content: '2+ years of studying this traditional Chinese musical instrument, performing classical Chinese folk pieces.' };
      case 'AI Projects':
        return { title: 'AI Projects', color: 'from-indigo-900 via-indigo-800 to-purple-900', content: 'Microsoft AI project captain developing basketball travel detection using computer vision.' };
      case 'Chess':
        return { title: 'Chess', color: 'from-slate-900 via-slate-800 to-gray-900', content: 'National level competitive chess player with strategic thinking and problem-solving skills.' };
      default:
        return { title: name, color: 'from-gray-900 via-gray-800 to-gray-900', content: 'More details coming soon.' };
    }
  };

  // 如果选择了活动，显示详细信息
  if (selectedActivity) {
    const details = getActivityDetails(selectedActivity);
    return (
      <div className={`min-h-screen bg-gradient-to-br ${details.color} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => setSelectedActivity(null)}
            className="flex items-center text-gray-200 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Activities
          </button>
          <h1 className="text-4xl font-bold mb-8">{details.title}</h1>
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-xl text-white/90 mb-6">{details.content}</p>
            <p className="text-lg text-white/80">
              This is a placeholder for more detailed information about {details.title.toLowerCase()}.
              In a complete implementation, this would include achievements, skills, and personal reflections.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="activities" className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-orange-200 to-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-tr from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-800 mb-4">Extracurricular Activities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse portfolio of activities spanning sports, arts, technology, and leadership,
            demonstrating well-rounded development and cultural appreciation.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className={`bg-white border border-gray-200 rounded-lg p-3 transition-all duration-300 hover:border-red-200 ${activity.isDetailed ? 'hover:shadow-md cursor-pointer hover:bg-gray-50' : 'hover:shadow-sm'}`}
              onClick={() => handleActivityClick(activity)}
            >
              <div className="flex items-center mb-2">
                <div className="p-1.5 bg-red-50 rounded-md text-red-700 mr-2">
                  {activity.icon.props.className === "w-6 h-6" ? React.cloneElement(activity.icon, { className: "w-4 h-4" }) : activity.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{activity.name}</h3>
                  <span className={`inline-block px-1.5 py-0.5 rounded-full text-xs font-medium ${activity.color}`}>
                    {activity.level}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cultural & Artistic Pursuits</h3>
            <p className="text-gray-700 mb-4">
              Music holds a special place in my life. I enjoy listening to both Western pop music and traditional
              Chinese folk music. I am especially fond of the Guzheng, a traditional Chinese musical instrument
              with a long historical heritage. Its ethereal and elegant tones deeply resonate with me.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• LAMDA certification in dramatic arts</li>
              <li>• 2+ years of Guzheng study</li>
              <li>• Performing classical Chinese folk pieces</li>
              <li>• Creative ceramic arts exploration</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Leadership & Service</h3>
            <p className="text-gray-700 mb-4">
              Through LSA teaching and AI project leadership, I've developed strong mentoring
              skills and the ability to guide teams toward innovative solutions.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Peer tutoring and learning support</li>
              <li>• Microsoft AI project team captain</li>
              <li>• Robotics team leadership experience</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesTemp;