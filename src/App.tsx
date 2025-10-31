import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
// 使用带可点击子页面的组件
import About from './components/About';
import Competitions from './components/Competitions';
import Activities from './components/Activities';
import Academics from './components/Academics';
import Contact from './components/Contact';
import Footer from './components/Footer';

// 导入独立页面
const SailingPage = React.lazy(() => import('./pages/SailingPage'));
const RoboticsPage = React.lazy(() => import('./pages/RoboticsPage'));
const MathProgrammingPage = React.lazy(() => import('./pages/MathProgrammingPage'));
const SportsTeamsPage = React.lazy(() => import('./pages/SportsTeamsPage'));

// 导入活动页面
const SailingActivityPage = React.lazy(() => import('./pages/activities/SailingActivityPage'));
const SkiingActivityPage = React.lazy(() => import('./pages/activities/SkiingActivityPage'));
const SwimmingActivityPage = React.lazy(() => import('./pages/activities/SwimmingActivityPage'));
const LamdaActivityPage = React.lazy(() => import('./pages/activities/LamdaActivityPage'));
const GuzhengActivityPage = React.lazy(() => import('./pages/activities/GuzhengActivityPage'));
const TaekwondoActivityPage = React.lazy(() => import('./pages/activities/TaekwondoActivityPage'));
const FencingActivityPage = React.lazy(() => import('./pages/activities/FencingActivityPage'));
const PotteryActivityPage = React.lazy(() => import('./pages/activities/PotteryActivityPage'));
const LsaTeachingActivityPage = React.lazy(() => import('./pages/activities/LsaTeachingActivityPage'));
const AiProjectsActivityPage = React.lazy(() => import('./pages/activities/AiProjectsActivityPage'));
const CtySummerSchoolActivityPage = React.lazy(() => import('./pages/activities/CtySummerSchoolActivityPage'));
const ChessActivityPage = React.lazy(() => import('./pages/activities/ChessActivityPage'));

import ScrollToAnchor from './components/ScrollToAnchor';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToAnchor />
      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        <Routes>
          {/* 主页路由 */}
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <About />
              <Competitions />
              <Activities />
              <Academics />
              <Contact />
              <Footer />
            </>
          } />
          
          {/* 竞赛详情页面路由 */}
          <Route path="/sailing" element={<SailingPage />} />
          <Route path="/robotics" element={<RoboticsPage />} />
          <Route path="/math-programming" element={<MathProgrammingPage />} />
          <Route path="/sports-teams" element={<SportsTeamsPage />} />
  
          {/* 活动详情页面路由 */}
          <Route path="/activities/sailing" element={<SailingActivityPage />} />
          <Route path="/activities/skiing" element={<SkiingActivityPage />} />
          <Route path="/activities/swimming" element={<SwimmingActivityPage />} />
          <Route path="/activities/lamda" element={<LamdaActivityPage />} />
          <Route path="/activities/guzheng" element={<GuzhengActivityPage />} />
          <Route path="/activities/taekwondo" element={<TaekwondoActivityPage />} />
          <Route path="/activities/fencing" element={<FencingActivityPage />} />
          <Route path="/activities/pottery" element={<PotteryActivityPage />} />
          <Route path="/activities/lsa-teaching" element={<LsaTeachingActivityPage />} />
          <Route path="/activities/ai-projects" element={<AiProjectsActivityPage />} />
          <Route path="/activities/cty-summer-school" element={<CtySummerSchoolActivityPage />} />
          <Route path="/activities/chess" element={<ChessActivityPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;