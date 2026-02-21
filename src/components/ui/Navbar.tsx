// ============================================
// IMPORTS
// ============================================
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LogoMIC } from '../../constants';

// ============================================
// COMPOSANT : Navbar
// Barre de navigation principale du site
// Gère le menu mobile et le style selon la page active
// ============================================
const Navbar = () => {
  // État pour gérer l'ouverture/fermeture du menu mobile
  const [isOpen, setIsOpen] = useState(false);
  // État pour détecter si la page a été scrollée
  const [scrolled, setScrolled] = useState(false);
  // Récupération de la route actuelle pour le style conditionnel
  const location = useLocation();

  // Effet pour détecter le scroll et changer le style de la navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Liste des liens de navigation
  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Notre Épopée', path: '/epopee' },
    { name: 'Réalisations', path: '/realisations' },
    { name: "L'Équipe", path: '/equipe' },
  ];

  // Fonction pour déterminer le style de la navbar selon la page active
  const getNavbarStyle = (path: string) => {
    switch (path) {
      case '/':
        return 'bg-white/10 backdrop-blur-lg border-white/20 text-white';
      case '/epopee':
        return 'bg-white/10 backdrop-blur-lg border-white/20 text-white';
      case '/realisations':
        return 'bg-white/10 backdrop-blur-lg border-white/20 text-white';
      case '/equipe':
        return 'bg-blue-50/90 backdrop-blur-lg border-blue-100';
      default:
        return 'glass';
    }
  };

  const currentNavStyle = getNavbarStyle(location.pathname);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Conteneur principal de la navbar avec style conditionnel */}
        <div 
          className={`relative flex ${currentNavStyle} items-center justify-between rounded-full px-6 py-2 transition-all duration-500 border border-transparent ${
            scrolled ? `shadow-xl glass !text-black` : ''
          }`}
        >
          {/* Logo et nom du studio */}
          <Link to="/" className="flex items-center gap-3 group">
            <LogoMIC className="w-10 h-10 transition-transform group-hover:scale-110" />
            <span className="text-xl font-extrabold tracking-tighter text-inherit">
              MIC STUDIO
            </span>
          </Link>

          {/* Menu desktop : Liens de navigation avec indicateur de page active */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`relative text-xs lg:text-sm font-semibold tracking-wide transition-colors hover:text-member1 ${
                  location.pathname === link.path 
                    ? 'text-member1' 
                    : 'text-inherit opacity-70 hover:opacity-100'
                }`}
              >
                {link.name}
                {/* Ligne de soulignement animée pour la page active */}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-member1"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-inherit opacity-80 hover:opacity-100">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile : Panneau déroulant avec animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-24 left-4 right-4 p-6 rounded-3xl md:hidden border shadow-2xl glass`}
          >
            <div className="flex flex-col gap-5 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold ${location.pathname === link.path ? 'text-member1' : 'text-inherit opacity-80'}`}
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