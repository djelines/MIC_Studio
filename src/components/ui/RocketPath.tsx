// ============================================
// IMPORTS
// ============================================
import React from 'react';
import { motion, MotionValue, useTransform, useSpring } from 'framer-motion';

// ============================================
// INTERFACE : RocketPathProps
// Props du composant RocketPath
// ============================================
interface RocketPathProps {
  height: number;
  itemsCount: number;
  scrollYProgress: MotionValue<number>;
}

// ============================================
// COMPOSANT : RocketPath
// Chemin animé avec fusée qui suit le scroll
// Utilisé dans la page Epopee pour la timeline
// ============================================
const RocketPath: React.FC<RocketPathProps> = ({ height, itemsCount, scrollYProgress }) => {
  const width = 1400; 
  const centerX = width / 2;
  
  // Fonction pour générer le chemin SVG sinueux avec une boucle au milieu
  const generatePath = () => {
    let d = `M ${centerX} 0`;
    const h = height / (itemsCount || 1);
    
    const loopIndex = Math.floor(itemsCount / 2);
    let currentDir = 1;

    for (let i = 0; i < itemsCount; i++) {
        const yStart = i * h;
        const yEnd = (i + 1) * h;
        const amplitude = 300;

        if (i === loopIndex) {
            const loopK = 3.5; 
            
            const cp1X = centerX + (amplitude * currentDir * loopK);
            const cp1Y = yStart + (h * 0.3 * loopK); 
            
            const cp2X = centerX - (amplitude * currentDir * loopK);
            const cp2Y = yEnd - (h * 0.3 * loopK);
            
            d += ` C ${cp1X} ${cp1Y} ${cp2X} ${cp2Y} ${centerX} ${yEnd}`;
        } else {
            const cp1X = centerX + (amplitude * currentDir);
            const cp1Y = yStart + (h * 0.25);
            
            const cp2X = centerX + (amplitude * currentDir);
            const cp2Y = yEnd - (h * 0.25);
            
            d += ` C ${cp1X} ${cp1Y} ${cp2X} ${cp2Y} ${centerX} ${yEnd}`;
            currentDir *= -1;
        }
    }
    return d;
  };

  // Génération du chemin SVG (ou chemin par défaut si hauteur = 0)
  const pathD = height > 0 ? generatePath() : `M ${centerX} 0 L ${centerX} 100`;

  // Lissage de la progression du scroll pour animation fluide
  const smoothProgress = useSpring(scrollYProgress, {
      stiffness: 40,
      damping: 20,
      restDelta: 0.001
  });

  // Transformation de la progression en distance sur le chemin
  const offsetDistance = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  // Échelle de la fusée (disparaît en fin de scroll)
  const rocketScale = useTransform(smoothProgress, [0, 0.98, 1], [1, 1, 0]);

  if (height === 0) return null;

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-full pointer-events-none z-0">
        {/* SVG du chemin avec dégradé */}
        <svg 
            width="100%" 
            height="100%" 
            viewBox={`0 0 ${width} ${height}`} 
            fill="none" 
            className="overflow-visible"
        >
            {/* Chemin pointillé avec dégradé */}
            <path
                d={pathD}
                stroke="url(#pathGradient)"
                strokeWidth="4"
                strokeDasharray="10 10"
                fill="none"
                className="opacity-40"
            />
            
            {/* Définition du dégradé du chemin */}
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                <stop offset="10%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="90%" stopColor="#ec4899" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
              </linearGradient>
            </defs>
        </svg>

        {/* Fusée animée qui suit le chemin selon le scroll */}
        <motion.div
            className="absolute top-0 left-0 w-16 h-16 -ml-8 -mt-8 z-20 will-change-transform md:block hidden"
            style={{
                offsetPath: `path('${pathD}')`,
                WebkitOffsetPath: `path('${pathD}')`,
                offsetDistance: offsetDistance,
                offsetRotate: 'auto 0deg', 
            } as React.CSSProperties}
        >
            <motion.div 
                className="w-full h-full relative"
                style={{ scale: rocketScale }}
            >
                {/* SVG de la fusée */}
                <div className="w-full h-full transform rotate-90 drop-shadow-[0_0_20px_rgba(99,102,241,0.6)]">
                     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path d="M12 2.5C12 2.5 15.5 8 16.5 13.5C17.5 19 12 21.5 12 21.5C12 21.5 6.5 19 7.5 13.5C8.5 8 12 2.5 12 2.5Z" fill="#F8FAFC" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 14.5C12 14.5 10.5 16 12 18C13.5 16 12 14.5 12 14.5Z" fill="#6366F1"/>
                        <path d="M7.5 13.5L4.5 16.5C3.5 17.5 4 19.5 5.5 19.5L7.5 18.5" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#E2E8F0"/>
                        <path d="M16.5 13.5L19.5 16.5C20.5 17.5 20 19.5 18.5 19.5L16.5 18.5" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#E2E8F0"/>
                     </svg>
                </div>
                
                {/* Flamme animée derrière la fusée */}
                <div className="absolute top-1/2 left-[-12px] -translate-y-1/2 w-10 h-5 transform rotate-180 origin-right z-[-1]">
                     <motion.div 
                        animate={{ scaleX: [0.8, 1.4, 0.8], opacity: [0.7, 1, 0.7] }}
                        transition={{ repeat: Infinity, duration: 0.15, ease: "linear" }}
                        className="w-full h-full bg-gradient-to-l from-yellow-300 via-orange-500 to-transparent rounded-l-full blur-[2px]"
                     />
                </div>
            </motion.div>
        </motion.div>
    </div>
  );
};

export default RocketPath;