
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LogoMIC } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Notre Épopée', path: '/epopee' },
    { name: 'Réalisations', path: '/realisations' },
    { name: 'L’Équipe', path: '/equipe' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-9999990 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className={`relative flex items-center justify-between rounded-full px-6 py-2 transition-all duration-500 ${scrolled ? 'glass shadow-xl' : ''}`}>
          
          <Link to="/" className="flex items-center gap-3 group">
            <LogoMIC className="w-10 h-10 transition-transform group-hover:scale-110" />
            <span className="text-xl font-extrabold tracking-tighter text-black">
              MIC STUDIO
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`relative text-sm font-semibold tracking-wide transition-colors hover:text-member1 ${location.pathname === link.path ? 'text-member1' : 'text-slate-600'}`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-member1"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Btn */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 glass p-8 rounded-3xl md:hidden border border-white/10 shadow-2xl"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold ${location.pathname === link.path ? 'text-member1' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
