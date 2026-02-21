// ============================================
// IMPORTS
// ============================================
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
// Composants utilisés dans cette page :
import Hero from '../components/ui/Hero'; // Non utilisé dans ce fichier (peut être supprimé)
import { TIMELINE } from '../constants';
import { Sparkles, Circle, ChevronDown, Rocket, Clock, Navigation } from 'lucide-react';
import { BubbleBackground } from '@/components/animate-ui/components/backgrounds/bubble'; // Non utilisé dans ce fichier
import RocketPath from '@/components/ui/RocketPath'; // Utilisé ligne 98 - Chemin de fusée animé pour la timeline

// ============================================
// COMPOSANT PRINCIPAL : Epopee
// Page racontant l'histoire et la timeline de MIC Studio
// ============================================
const Epopee = () => {
  // Référence pour le conteneur de la timeline (pour calculer la hauteur)
  const containerRef = useRef<HTMLDivElement>(null);
  // État pour stocker la hauteur du conteneur (utilisé par RocketPath)
  const [containerHeight, setContainerHeight] = useState(0);

  // Suivi du scroll pour animer le chemin de la fusée
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Génération de 50 étoiles animées avec positions et propriétés aléatoires
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  // Observer pour détecter les changements de taille du conteneur
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
      {/* ============================================
          SECTION 1 : HERO / BANNIÈRE PRINCIPALE
          Section pleine écran avec étoiles animées en arrière-plan
          ============================================ */}
<section className="relative h-screen w-full flex items-center justify-center -mt-20 overflow-hidden [box-shadow:0_50px_90px_-15px_rgba(0,0,0,0.5)] bg-[#050505]">
        
        {/* 1. Fond dégradé sombre */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-[#0f172a] opacity-95" />
        
        {/* 2. Étoiles animées en arrière-plan */}
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

        {/* 3. Effets de lumière animés (Nébuleuses) */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-slate-800 rounded-full blur-[120px] opacity-30 mix-blend-screen animate-pulse pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#172554] rounded-full blur-[120px] opacity-20 mix-blend-screen pointer-events-none" />

        {/* NOUVEAU : 4. L'Horizon / La Planète en bas de l'écran */}
        <div className="absolute -bottom-[60%] md:-bottom-[80%] left-1/2 -translate-x-1/2 w-[150vw] md:w-[120vw] aspect-square rounded-full border-t-[1px] border-indigo-500/30 bg-gradient-to-b from-indigo-950/40 to-transparent shadow-[0_0_120px_rgba(79,70,229,0.15)] pointer-events-none z-0" />


        {/* NOUVEAU : 5. Badges flottants holographiques (Cachés sur tout petit mobile, visibles sur tablette/PC) */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:flex absolute left-[5%] md:left-[10%] top-[30%] md:top-[25%] z-10 items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl"
        >
          <div className="p-2 bg-indigo-500/20 rounded-full"><Clock className="w-5 h-5 text-indigo-300" /></div>
          <div className="text-left">
            <p className="text-[10px] uppercase tracking-wider text-indigo-200/70 font-bold">Origine</p>
            <p className="text-sm font-black text-white">Création en 2023</p>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden sm:flex absolute right-[5%] md:right-[10%] top-[60%] md:top-[50%] z-10 items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl"
        >
          <div className="p-2 bg-amber-500/20 rounded-full"><Sparkles className="w-5 h-5 text-amber-300" /></div>
          <div className="text-left">
            <p className="text-[10px] uppercase tracking-wider text-amber-200/70 font-bold">Évolution</p>
            <p className="text-sm font-black text-white">Une ascension fulgurante</p>
          </div>
        </motion.div>


        {/* 6. Contenu Central : Titre, description et Call-to-Action */}
        <div className='relative z-10 max-w-4xl md:max-w-5xl mx-auto px-4 sm:px-6 -mt-10 md:-mt-20 text-center pointer-events-auto flex flex-col items-center'>
          
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 md:mb-8 shadow-lg pointer-events-auto"
            >
              <Navigation className="w-4 h-4 text-[#E8D5B5]" />
              <span className="text-xs md:text-sm font-bold text-white/90 uppercase tracking-widest">Journal de bord</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Notre Épopée
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-base sm:text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            D'une simple idée à un studio d'innovation. Découvrez les moments clés qui ont forgé l'histoire de MIC Studio. 
          </motion.p>

          {/* NOUVEAU : Bouton principal */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-xs md:text-base hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <Rocket className=" sm:w-5 sm:h-5 w-4 h-4 text-member3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            Commencer le voyage
          </motion.button>
        </div>

        {/* NOUVEAU : 7. Indicateur de Scroll en bas */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-3 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
        >
          <span className="text-[10px] uppercase tracking-widest text-white font-bold">Défiler</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>

      </section>

      {/* ============================================
          SECTION 2 : TIMELINE DES ÉVÉNEMENTS
          Affichage chronologique de l'histoire de MIC Studio
          ============================================ */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Conteneur de la timeline avec référence pour le calcul de hauteur */}
        <div ref={containerRef} className="max-w-7xl mx-auto px-6 space-y-48 md:space-y-64 relative">
          
          {/* Composant RocketPath : Chemin de fusée animé qui suit le scroll */}
          <RocketPath 
            height={containerHeight} 
            itemsCount={TIMELINE.length} 
            scrollYProgress={scrollYProgress} 
          />

          {/* Boucle sur tous les événements de la timeline */}
          {TIMELINE.map((event, idx) => (
            // Conteneur d'un événement : alternance gauche/droite selon l'index
            <div key={event.title} className={`flex flex-col md:flex-row items-center gap-16 md:gap-40 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'} relative z-10`}>
              
              {/* Point central sur le chemin de la fusée (visible uniquement sur desktop) */}
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

              {/* Colonne gauche/droite : Carte post-it avec informations de l'événement */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 w-full flex justify-center z-10"
              >
                {/* Carte post-it avec rotation personnalisée */}
                <div 
                  className="post-it shadow-2xl relative"
                  style={{ 
                    transform: `rotate(${event.rotation}deg)`,
                    backgroundColor: '#fff',
                  }}
                >
                  {/* Effet scotch en haut de la carte */}
                  <div className="scotch opacity-80" />
                  
                  {/* En-tête : Date et icône */}
                  <div className="flex justify-between items-start mb:-2 md:mb-6">
                    <span className="text-sm font-black uppercase tracking-widest opacity-60" style={{ color: event.color }}>{event.date}</span>
                    <div className=" text-sm md:text-base p-2 md:p-3 rounded-xl bg-slate-50" style={{ color: event.color }}>
                      {event.icon}
                    </div>
                  </div>
                  
                  {/* Titre de l'événement */}
                  <h3 className="text-xl md:text-3xl font-black mb-4 leading-tight text-slate-800">{event.title}</h3>
                  {/* Description de l'événement */}
                  <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-lg">
                    {event.description}
                  </p>
                  
                  {/* Badge en bas de carte */}
                  <div className="absolute bottom-2 md:bottom-4 right-4 text-xs opacity-20 uppercase tracking-tighter font-bold">MIC STUDIO ARCHIVES</div>
                </div>
              </motion.div>

              {/* Colonne droite/gauche : Image de l'événement avec effet de rotation au survol */}
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
        
        {/* ============================================
            SECTION 3 : SECTION "À SUIVRE"
            Animation de bulles avec message futuriste
            ============================================ */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center py-32 md:py-48 text-center relative z-10 w-full"
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