import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Anchor, Snowflake, Music, Zap, Palette, Users, Brain } from 'lucide-react';

const Activities = () => {
  const navigate = useNavigate();

  const slugify = (name: string) => {
    return name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/\(.*?\)/g, '')
      .replace(/-$/, '');
  };

  const handleActivityClick = (activity: { name: string; isDetailed: boolean }) => {
    if (activity.isDetailed) {
      const path = slugify(activity.name);
      navigate(`/activities/${path}`);
    }
  };

  const activities = [
    {
      name: "Sailing",
      icon: <Anchor className="w-6 h-6" />,
      description: "RYA & ASA certified, HOBIE 16 Asia 3rd place winner",
      level: "Advanced",
      color: "bg-blue-100 text-blue-800",
      isDetailed: true
    },
    {
      name: "Skiing",
      icon: <Snowflake className="w-6 h-6" />,
      description: "Winter sports enthusiast with technical proficiency",
      level: "Intermediate",
      color: "bg-cyan-100 text-cyan-800",
      isDetailed: true
    },
    {
      name: "Swimming",
      icon: <Users className="w-6 h-6" />,
      description: "Competitive swimming as part of multi-sport training",
      level: "Intermediate",
      color: "bg-blue-100 text-blue-800",
      isDetailed: true
    },
    {
      name: "LAMDA",
      icon: <Music className="w-6 h-6" />,
      description: "London Academy of Music and Dramatic Art certification",
      level: "Advanced",
      color: "bg-purple-100 text-purple-800",
      isDetailed: true
    },
    {
      name: "Guzheng (古筝)",
      icon: <Music className="w-6 h-6" />,
      description: "Traditional Chinese musical instrument",
      level: "Intermediate",
      color: "bg-red-100 text-red-800",
      isDetailed: true
    },
    {
      name: "Taekwondo (跆拳道)",
      icon: <Zap className="w-6 h-6" />,
      description: "Korean martial arts - Black Belt",
      level: "Expert",
      color: "bg-gray-200 text-gray-800",
      isDetailed: true
    },
    {
      name: "Fencing",
      icon: <Zap className="w-6 h-6" />,
      description: "Olympic sport precision and strategy",
      level: "Beginner",
      color: "bg-yellow-100 text-yellow-800",
      isDetailed: true
    },
    {
      name: "Pottery (陶艺)",
      icon: <Palette className="w-6 h-6" />,
      description: "Ceramic arts and creative expression",
      level: "Intermediate",
      color: "bg-orange-100 text-orange-800",
      isDetailed: true
    },
    {
      name: "LSA Teaching",
      icon: <Users className="w-6 h-6" />,
      description: "Learning Support Assistant - peer mentoring",
      level: "N/A",
      color: "bg-green-100 text-green-800",
      isDetailed: true
    },
    {
      name: "AI Projects",
      icon: <Brain className="w-6 h-6" />,
      description: "Microsoft AI project captain - computer vision",
      level: "Advanced",
      color: "bg-indigo-100 text-indigo-800",
      isDetailed: true
    },
    {
      name: "CTY Summer School",
      icon: <Brain className="w-6 h-6" />,
      description: "Johns Hopkins Center for Talented Youth alumni",
      level: "Advanced",
      color: "bg-pink-100 text-pink-800",
      isDetailed: true
    },
    {
      name: "Chess",
      icon: <Brain className="w-6 h-6" />,
      description: "National level competitive chess player",
      level: "Advanced",
      color: "bg-slate-100 text-slate-800",
      isDetailed: true
    }
  ];

  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Extracurricular Activities
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            A showcase of my diverse interests and accomplishments outside of academics.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div
              key={activity.name}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 ${activity.isDetailed ? 'cursor-pointer' : ''}`}
              onClick={() => handleActivityClick(activity)}
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 p-3 rounded-full ${activity.color}`}>
                    {activity.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{activity.name}</h3>
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${activity.color}`}>
                      {activity.level}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;