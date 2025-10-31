import React from 'react';
import { Anchor, Trophy, Code, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-red-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-700 to-orange-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-700 to-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate student-athlete with a unique combination of athletic excellence, 
            technical innovation, and academic achievement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">What Makes Roger Different</h3>
            <div className="prose prose-lg text-gray-300">
              <p className="mb-4">
                I am pretty sure that I am different from others. First of all, I am excellent at sports—not just one, 
                but all kinds. I love sports such as sailing, basketball, soccer, swimming and so on. Especially in sailing, 
                I started my sailing training at the age of six and successively obtained all the qualifications for small 
                sailboats from the Royal Yachting Association (RYA) in the UK, as well as the operation certificates for 
                small sailboats and catamarans from the American Sailing Association (ASA).
              </p>
              <p className="mb-4">
                In June this year, I participated in the HOBIE 16 Asian Sailing Championships held in Weihai, China, 
                and won the third place and a prize of ￥10,000.00. I engage not only in sailing but also in basketball 
                and football. I am currently in the U-14 A Team for both football and basketball at BCIS, showcasing my 
                versatility across multiple sports disciplines.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-red-900/80 rounded-lg border border-red-700">
              <Anchor className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Certified Sailor</h4>
              <p className="text-sm text-gray-300">RYA & ASA Certified</p>
            </div>
            <div className="text-center p-6 bg-red-900/80 rounded-lg border border-red-700">
              <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Multi-Sport Athlete</h4>
              <p className="text-sm text-gray-300">U-14 A Teams</p>
            </div>
            <div className="text-center p-6 bg-red-900/80 rounded-lg border border-red-700">
              <Code className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Tech Innovation</h4>
              <p className="text-sm text-gray-300">9 years in robotics</p>
            </div>
            <div className="text-center p-6 bg-red-900/80 rounded-lg border border-red-700">
              <Target className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Leadership</h4>
              <p className="text-sm text-gray-300">Team captain & mentor</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-red-800 rounded-2xl p-8 shadow-lg border border-red-600">
          <h3 className="text-2xl font-bold text-white mb-6">Technical Excellence & Leadership</h3>
          <div className="prose prose-lg text-gray-300">
            <p className="mb-4">
              I am very fond of making and operating robots. I started to get in touch with robots at the age of 5 and 
              participated in the systematic training of the robot club. As the captain and main operator of the robot team, 
              I have participated in many MAKE X World Robot competitions successively since 2022, progressing from "Starter" 
              to "Explorer" and now to "Challenge".
            </p>
            <p className="mb-4">
              Having won the Asian Championship ($1,000.00 prize), the National championship and the global runner-up 
              in the "Explore" and "Challenge" classes respectively, we are currently preparing for the national 
              championship in 2025. This showcases my proficiency and leadership in robotics as the team captain.
            </p>
            <p>
              I am also honored to be invited to the AI Microsoft project, and we are a team that is exploring more 
              and more AI techniques. As the captain, we decided to make an AI that can check whether the players are 
              traveling or not in the basketball game. We are nearly finished and getting near to the showing level, 
              and we will get a recommendation to recognize us after we finish this project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;