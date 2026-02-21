import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Minus, Pause, Play } from 'lucide-react';
import { Button } from './button';
import { SectionTitle } from '@/pages/Home';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';
import { PROJECTS } from '@/constants';
import { useNavigate } from 'react-router-dom';

type Direction = 1 | -1;

const slideVariants = {
  enter: (direction: Direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: Direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
  }),
};

const textVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1 + 0.3,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const AUTOPLAY_DURATION = 11500;

export const ProjectCarousel: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projectIndex = ((page % PROJECTS.length) + PROJECTS.length) % PROJECTS.length;
  const currentProject = PROJECTS[projectIndex];

  const paginate = useCallback((newDirection: Direction) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      paginate(1);
    }, AUTOPLAY_DURATION);
    return () => clearInterval(interval);
  }, [isAutoPlaying, paginate, page]);

  const navigate = useNavigate();

  return (
    <section className="hidden md:block py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
    <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-12 flex flex-col justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 mb-6 md:mb-8">
            <div className="space-y-2 md:space-y-4">
            <SectionTitle colorClass="text-member3">Réalisations Récentes</SectionTitle>
            <p className="text-sm md:text-base text-slate-500 max-w-xl font-medium">
                Un aperçu de nos derniers succès, alliant complexité technique et interface épurée.
            </p>
            </div>
        
        <div className="flex gap-3">
           <div className="relative group">
             <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(-1)}
                className="h-10 w-10 rounded-full border-border/50 bg-background/30 backdrop-blur-md hover:bg-member3 hover:text-background hover:border-member3 transition-all duration-300 shadow-sm"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-member3 text-background text-[10px] font-bold tracking-wide uppercase rounded opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl translate-y-2 group-hover:translate-y-0">
                Précédent
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-member3"></div>
              </div>
           </div>

           <div className="relative group">
             <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(1)}
                className="h-10 w-10 rounded-full border-border/50 bg-background/30 backdrop-blur-md hover:bg-member3 hover:text-background hover:border-member3 transition-all duration-300 shadow-sm"
                aria-label="Next project"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
               <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-member3 text-background text-[10px] font-bold tracking-wide uppercase rounded opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl translate-y-2 group-hover:translate-y-0">
                Prochain
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-member3"></div>
              </div>
           </div>
           </div>
      </div>

      <div className="relative h-[400px] sm:h-[450px] md:h-[480px] lg:h-[520px] w-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 250, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.4 }
            }}
            className="absolute inset-0 flex flex-col md:flex-row w-full h-full rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] xl:rounded-[3rem] overflow-hidden border border-border/60 shadow-2xl bg-card"
          >
            
            <div className="relative w-full md:w-[60%] h-[45%] md:h-full bg-secondary overflow-hidden group">
              <motion.img
                src={currentProject.images[0]}
                alt={currentProject.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-black/10 transition-colors duration-500" />
            
            </div>

            <div className="relative w-full md:w-[40%] h-[55%] md:h-full bg-card/95 backdrop-blur-sm p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/50">
              
            <div className="relative z-10">
                <motion.div
                   initial="hidden"
                   animate="visible"
                   custom={0}
                   variants={textVariants}
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-member3 mb-4 md:mb-6 leading-[0.95]">
                    {currentProject.title}
                  </h3>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  variants={textVariants}
                  className="mb-6 md:mb-8"
                >
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                     <Minus className="text-primary w-6 md:w-8 h-px" />
                     <span className="text-[10px] md:text-xs font-mono uppercase tracking-wider text-muted-member3">à propos du projet</span>
                  </div>
                  <p className="text-muted-member3 text-sm md:text-base lg:text-lg leading-relaxed">
                    {currentProject.description}
                  </p>
                </motion.div>

                <motion.div 
                  className="flex flex-col gap-4 md:gap-6"
                  initial="hidden"
                  animate="visible"
                  custom={3}
                  variants={textVariants}
                >
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {currentProject.stack.map((tag) => (
                      <span key={tag} className="text-[10px] md:text-xs font-medium px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-secondary text-secondary-member3 border border-transparent hover:border-border transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button size="lg" 
                  onClick={() => {
                      navigate(`/realisations#${currentProject.title}`)
                  }}
                  className="w-full bg-member3 rounded-xl md:rounded-2xl h-11 md:h-12 lg:h-14 text-sm md:text-base shadow-lg shadow-primary/20 group hover:bg-member1">
                    Voir le projet
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="mt-4 md:mt-6 w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 px-2">
        
        <div className="flex items-center gap-3 md:gap-4">
           <div className="flex items-center gap-1 font-mono text-xs md:text-sm select-none">
             <span className="text-member3 font-semibold">{String(projectIndex + 1).padStart(2, '0')}</span>
             <span className="text-muted-member3/40 mx-1">/</span>
             <span className="text-muted-member3">{String(PROJECTS.length).padStart(2, '0')}</span>
           </div>
           
           <div className="w-px h-4 bg-border/60 mx-1"></div>
           
           <div className="w-40 md:w-48 lg:w-52 h-1 bg-secondary rounded-full overflow-hidden">
              <AnimatePresence mode="wait">
                {isAutoPlaying ? (
                  <motion.div
                    key={page}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    exit={{ width: "0%", transition: { duration: 0 } }}
                    transition={{ duration: AUTOPLAY_DURATION / 1000, ease: "linear" }}
                    className="h-full bg-primary"
                  />
                ) : (
                  <div className="w-full h-full bg-transparent" />
                )}
              </AnimatePresence>
           </div>
           
           <Tooltip>
                <TooltipTrigger asChild>
                    <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center hover:bg-secondary text-member3/80 hover:text-member3 transition-colors focus:outline-none"
                        aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
                    >
                        {isAutoPlaying ? <Pause className="w-3 h-3 md:w-3.5 md:h-3.5" /> : <Play className="w-3 h-3 md:w-3.5 md:h-3.5 ml-0.5" />}
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    {isAutoPlaying ? <p>Mettre en pause l'auto play</p> :
                    <p>Activer l'auto play</p>}
                </TooltipContent>
            </Tooltip>

        </div>

        <div className="hidden sm:block">
           <a href="#/realisations" className="text-xs md:text-sm font-medium text-muted-member3 hover:text-primary transition-colors flex items-center gap-2 group">
              Voir tous les projets
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
           </a>
        </div>
      </div>

    </div>
    </section>
  );
};