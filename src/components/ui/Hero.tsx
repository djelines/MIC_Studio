// ============================================
// IMPORTS
// ============================================
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// ============================================
// INTERFACE : HeroProps
// Props du composant Hero
// ============================================
interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  primaryCta?: { text: string; link: string };
  secondaryCta?: { text: string; link: string };
}

// ============================================
// COMPOSANT : Hero
// Composant de bannière hero réutilisable avec image de fond
// Utilisé sur plusieurs pages (Equipe, etc.)
// ============================================
const Hero: React.FC<HeroProps> = ({ title, subtitle, image, primaryCta, secondaryCta }) => {
  return (
    <section className="relative h-screen -mt-20 w-full flex items-center justify-center overflow-hidden">
      {/* Arrière-plan : Image avec effet de zoom et overlay dégradé */}
      <div className="absolute inset-0 z-0">
        {/* Image de fond avec animation de zoom */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <img 
            src={image} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Overlay dégradé pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-lemonade-bg dark:to-sunset-bg transition-colors duration-500" />
      </div>

      {/* Contenu principal : Titre, sous-titre et boutons d'action */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Titre principal animé */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
        >
          {title}
        </motion.h1>

        {/* Sous-titre optionnel */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Boutons d'action : CTA principal et secondaire */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Bouton CTA principal */}
          {primaryCta && (
            <Link 
              to={primaryCta.link}
              className="px-8 py-4 bg-member1 hover:bg-member1/90 text-white font-bold rounded-full transition-all hover:scale-105 flex items-center gap-2 group shadow-xl"
            >
              {primaryCta.text}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
          {/* Bouton CTA secondaire */}
          {secondaryCta && (
            <Link 
              to={secondaryCta.link}
              className="px-8 py-4 glass text-white font-bold rounded-full transition-all hover:bg-white/20 hover:scale-105 border border-white/20"
            >
              {secondaryCta.text}
            </Link>
          )}
        </motion.div>
      </div>

      {/* Indicateur de scroll : Flèche animée en bas */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-white/50"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;
