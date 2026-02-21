import React, { useEffect, Suspense, lazy, memo } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';

import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import MentionsLegales from './pages/MentionsLegales';

const Home = lazy(() => import('./pages/Home'));
const Epopee = lazy(() => import('./pages/Epopee'));
const Realisations = lazy(() => import('./pages/Realisations'));
const Equipe = lazy(() => import('./pages/Equipe'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ScrollProgress = memo(() => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-member1 via-member3 to-member2 z-[100] origin-left"
      style={{ scaleX }}
    />
  );
});

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-member3 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/epopee" element={<Epopee />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/mention" element={<MentionsLegales />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-lemonade-bg transition-colors duration-500">
        <Navbar />
        <main className="flex-grow pt-20">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}