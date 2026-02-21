import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { TIMELINE } from '../constants';
import { Sparkles, Circle, ChevronDown, Rocket, Clock, Navigation } from 'lucide-react';
import { BubbleBackground } from '@/components/animate-ui/components/backgrounds/bubble';
import RocketPath from '@/components/ui/RocketPath';
import Hero from '@/components/ui/Hero';

const Epopee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      setContainerHeight(entries[0].contentRect.height);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=""
    >
      {/* Hero */}
      <Hero
        className="bg-[#050505]"
        background={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-[#0f172a] opacity-95" />
            {stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute bg-white rounded-full z-0"
                style={{
                  top: star.top,
                  left: star.left,
                  width: star.size,
                  height: star.size,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: star.duration, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
              />
            ))}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-slate-800 rounded-full blur-[120px] opacity-30 mix-blend-screen animate-pulse pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#172554] rounded-full blur-[120px] opacity-20 mix-blend-screen pointer-events-none" />
            <div className="absolute -bottom-[60%] md:-bottom-[80%] left-1/2 -translate-x-1/2 w-[150vw] md:w-[120vw] aspect-square rounded-full border-t-[1px] border-indigo-500/30 bg-gradient-to-b from-indigo-950/40 to-transparent shadow-[0_0_120px_rgba(79,70,229,0.15)] pointer-events-none z-0" />
          </>
        }
        sideBadges={[
          {
            icon: Clock,
            label: 'Origine',
            text: 'Création en 2023',
            color: 'indigo-500',
            position: 'left',
            top: 'top-[30%] md:top-[25%]',
            delay: 0,
          },
          {
            icon: Sparkles,
            label: 'Évolution',
            text: 'Une ascension fulgurante',
            color: 'amber-500',
            position: 'right',
            top: 'top-[60%] md:top-[50%]',
            delay: 1,
          },
        ]}
        topBadge={{
          icon: Navigation,
          text: 'Journal de bord',
          color: 'member2',
        }}
        title="Notre Épopée"
        description="D'une simple idée à un studio d'innovation. Découvrez les moments clés qui ont forgé l'histoire de MIC Studio."
        content={
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-xs md:text-base hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <Rocket className=" sm:w-5 sm:h-5 w-4 h-4 text-member3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            Commencer le voyage
          </motion.button>
        }
        scrollIndicator={
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <span className="text-[10px] uppercase tracking-widest text-white font-bold">Défiler</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronDown className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        }
        contentClassName="-mt-10 md:-mt-20"
      />

      {/* Timeline */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div ref={containerRef} className="max-w-7xl mx-auto px-6 space-y-48 md:space-y-64 relative">
          <RocketPath 
            height={containerHeight} 
            itemsCount={TIMELINE.length} 
            scrollYProgress={scrollYProgress} 
          />

          {TIMELINE.map((event, idx) => (
            <div key={event.title} className={`flex flex-col md:flex-row items-center gap-16 md:gap-40 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'} relative z-10`}>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 rounded-full bg-white border-4 flex items-center justify-center shadow-xl"
                  style={{ borderColor: event.color }}
                >
                  <Circle className="w-5 h-5" style={{ color: event.color }} fill="currentColor" />
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 w-full flex justify-center z-10"
              >
                <div 
                  className="post-it shadow-2xl relative"
                  style={{ 
                    transform: `rotate(${event.rotation}deg)`,
                    backgroundColor: '#fff',
                  }}
                >
                  <div className="scotch opacity-80" />
                  <div className="flex justify-between items-start mb:-2 md:mb-6">
                    <span className="text-sm font-black uppercase tracking-widest opacity-60" style={{ color: event.color }}>{event.date}</span>
                    <div className=" text-sm md:text-base p-2 md:p-3 rounded-xl bg-slate-50" style={{ color: event.color }}>
                      {event.icon}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-3xl font-black mb-4 leading-tight text-slate-800">{event.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-lg">
                    {event.description}
                  </p>
                  <div className="absolute bottom-2 md:bottom-4 right-4 text-xs opacity-20 uppercase tracking-tighter font-bold">MIC STUDIO ARCHIVES</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 w-full z-10 px-6 md:px-0"
              >
                <div className="relative group">
                   {/* Fond coloré qui se redresse au survol */}
                   <div className={`absolute -inset-3 md:-inset-4 rounded-[3rem] -rotate-3 transition-transform duration-500 group-hover:rotate-0`} 
                   style={{ backgroundColor: event.color, opacity: 0.2 }}/>
                   {/* Image de l'événement */}
                   <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full aspect-[4/3] object-cover rounded-[2.5rem] shadow-xl relative z-10 border-4 border-white" 
                   />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        
        {/* Section "À Suivre" */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden sm:flex flex-col items-center justify-center py-32 md:py-48 text-center relative z-10 w-full"
        >
          {/* Conteneur principal avec animation de flottement */}
          <motion.div
             animate={{ y: [0, -12, 0] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
             className="relative z-10 w-full max-w-lg md:max-w-4xl mx-auto px-4"
          >
            {/* Conteneur des bulles animées */}
            <div className="relative w-full aspect-[4/3] md:aspect-[21/10] drop-shadow-[0_25px_35px_rgba(30,27,75,0.25)]">
              
              {/* Bulle 1 : Animation de scale et translation verticale */}
              <motion.div 
                animate={{ scale: [1, 1.03, 1], y: [0, 3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[10%] bottom-[20%] w-[30%] aspect-square bg-gradient-to-br from-white to-slate-50 rounded-full shadow-[inset_-10px_-15px_25px_rgba(0,0,0,0.04)] z-0" 
              />
              
              {/* Bulle 2 : Animation principale au centre */}
              <motion.div 
                animate={{ scale: [1, 1.04, 1], y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute left-[32%] bottom-[25%] w-[38%] aspect-square bg-gradient-to-br from-white to-slate-50 rounded-full shadow-[inset_-15px_-25px_35px_rgba(0,0,0,0.05)] z-10" 
              />
              
              {/* Bulle 3 : Animation à droite */}
              <motion.div 
                animate={{ scale: [1, 1.03, 1], y: [0, 2, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute right-[12%] bottom-[18%] w-[32%] aspect-square bg-gradient-to-br from-white to-slate-50 rounded-full shadow-[inset_-12px_-18px_30px_rgba(0,0,0,0.04)] z-0" 
              />

              {/* Base des bulles : Fond arrondi */}
              <div className="absolute bottom-[10%] left-[8%] right-[8%] h-[35%] bg-gradient-to-b from-white to-slate-100 rounded-full shadow-[inset_0px_-15px_20px_rgba(0,0,0,0.03)] z-10" />

              {/* Contenu textuel au-dessus des bulles */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-[15%] md:pb-[10%] px-8 md:px-16">
                {/* Titre et description */}
                <div className="space-y-2 md:space-y-4 mt-4 md:mt-0">
                  <h2 className="text-2xl md:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-member1 via-member3 to-member2">
                    À Suivre...
                  </h2>
                  <p className="text-xs md:text-xl lg:text-2xl text-slate-600 max-w-[250px] md:max-w-xl mx-auto leading-relaxed font-bold">
                    Notre histoire ne fait que commencer. De nouveaux défis et projets innovants sont déjà en préparation pour l'avenir.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>

      </section>
    </motion.div>
  );
};

export default Epopee;