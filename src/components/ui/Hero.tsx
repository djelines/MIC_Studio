import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

// Mapping des couleurs vers leurs classes Tailwind
const colorMap: Record<string, { bg: string; icon: string; label: string }> = {
  'indigo-500': { bg: 'bg-indigo-500/20', icon: 'text-indigo-300', label: 'text-indigo-200/70' },
  'amber-500': { bg: 'bg-amber-500/20', icon: 'text-amber-300', label: 'text-amber-200/70' },
  'member1': { bg: 'bg-member1/20', icon: 'text-member1', label: 'text-member1/70' },
  'member2': { bg: 'bg-member2/20', icon: 'text-member2', label: 'text-member2/70' },
  'member3': { bg: 'bg-member3/20', icon: 'text-member3', label: 'text-member3/70' },
  'member4': { bg: 'bg-member4/20', icon: 'text-member4', label: 'text-member4/70' },
};

// Helper pour obtenir les classes de couleur Tailwind
const getColorClasses = (color: string) => {
  if (colorMap[color]) {
    return colorMap[color];
  }
  // Fallback pour les couleurs non mappées
  return {
    bg: 'bg-white/20',
    icon: 'text-white',
    label: 'text-white/70',
  };
};

interface SideBadge {
  icon: LucideIcon;
  label: string;
  text: string;
  color: string; // Ex: "indigo-500", "amber-500", "member1"
  position: 'left' | 'right';
  top?: string;
  delay?: number;
}

interface TopBadge {
  icon: LucideIcon;
  text: string;
  color?: string; // Ex: "indigo-500", "amber-500", "member1"
}

interface HeroProps {
  // Contenu principal
  title?: string;
  description?: string;
  
  // Sections personnalisables avec HTML
  background?: React.ReactNode; // Fond (WorldMap, étoiles, effets, etc.)
  topBadge?: TopBadge; // Badge au-dessus du titre
  sideBadges?: SideBadge[]; // Badges flottants sur les côtés
  content?: React.ReactNode; // Contenu personnalisé (remplace title/description si fourni)
  scrollIndicator?: React.ReactNode; // Indicateur de scroll en bas
  bottomEffects?: React.ReactNode; // Effets en bas (lignes, etc.)
  
  // Classes personnalisées
  className?: string;
  contentClassName?: string;
  contentWrapperClassName?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title,
  description,
  background,
  topBadge,
  sideBadges,
  content,
  scrollIndicator,
  bottomEffects,
  className = "",
  contentClassName = "",
  contentWrapperClassName = "max-w-4xl md:max-w-5xl mx-auto px-4 sm:px-6 text-center pointer-events-auto flex flex-col items-center"
}) => {
  return (
    <section className={`relative h-screen -mt-20 w-full flex items-center justify-center overflow-hidden flex-col [box-shadow:0_50px_90px_-15px_rgba(0,0,0,0.5)] ${className}`}>
      {/* Fond personnalisé */}
      {background && (
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          {background}
        </div>
      )}

      {/* Badges flottants sur les côtés */}
      {sideBadges && sideBadges.length > 0 && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          {sideBadges.map((badge, idx) => {
            const Icon = badge.icon;
            const positionClass = badge.position === 'left' 
              ? `left-[5%] md:left-[10%] ${badge.top || 'top-[30%] md:top-[25%]'}`
              : `right-[5%] md:right-[10%] ${badge.top || 'bottom-[35%] md:bottom-[35%]'}`;
            
            const colors = getColorClasses(badge.color);
            
            return (
              <motion.div
                key={idx}
                animate={{ y: [0, badge.position === 'left' ? -10 : 15, 0] }}
                transition={{ 
                  duration: badge.position === 'left' ? 6 : 7, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: badge.delay || (badge.position === 'right' ? 1 : 0)
                }}
                className={`hidden sm:flex absolute ${positionClass} z-10 items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl`}
              >
                <div className={`p-2 ${colors.bg} rounded-full`}>
                  <Icon className={`w-5 h-5 ${colors.icon}`} />
                </div>
                <div className="text-left">
                  <p className={`text-[10px] uppercase tracking-wider ${colors.label} font-bold`}>
                    {badge.label}
                  </p>
                  <p className="text-sm font-black text-white">{badge.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Contenu principal */}
      <div className={`w-full h-full flex items-center justify-center ${contentClassName}`}>
        <div className={`relative z-10 ${contentWrapperClassName}`}>
          {/* Badge au-dessus du titre (fonctionne avec content ou title/description) */}
          {topBadge && (() => {
            const TopIcon = topBadge.icon;
            const topColors = topBadge.color ? getColorClasses(topBadge.color) : null;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 md:mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg pointer-events-auto">
                  <TopIcon className={`w-4 h-4 ${topColors?.icon || 'text-white'}`} />
                  <span className="text-xs md:text-sm font-bold text-white/90 uppercase tracking-widest">
                    {topBadge.text}
                  </span>
                </div>
              </motion.div>
            );
          })()}

              {/* Titre */}
              {title && (
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl text-center md:text-7xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  {title}
                </motion.h1>
              )}

              {/* Description */}
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
                >
                  {description}
                </motion.p>
              )}

              
              {content}
        </div>
      </div>

      {/* Indicateur de scroll */}
      {scrollIndicator && (
        <div className="absolute bottom-3 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
          {scrollIndicator}
        </div>
      )}

      {/* Effets en bas */}
      {bottomEffects && (
        <div className="absolute bottom-0 left-0 right-0 z-20">
          {bottomEffects}
        </div>
      )}
    </section>
  );
};

export default Hero;
