// ============================================
// IMPORTS
// ============================================
import React from 'react';
import { motion } from 'framer-motion';
// Composants utilisés dans cette page :
import { MEMBERS } from '../constants';
import { Github, Linkedin, ExternalLink, Star, User, Users, Lightbulb, ChevronDown } from 'lucide-react';
import { Member } from '../types';
import { TeamMember } from '@/components/ui/TeamMember';

// ============================================
// COMPOSANT PRINCIPAL : Equipe
// Page présentant les membres de l'équipe MIC Studio
// ============================================
const Equipe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-lemonade-bg"
    >
      {/* ============================================
          SECTION 1 : HERO IMMERSIF (Style Épopée/Réalisations)
          ============================================ */}
      <section className="relative h-screen -mt-20 w-full flex items-center justify-center overflow-hidden flex-col bg-[#0a0f1c] [box-shadow:0_50px_90px_-15px_rgba(0,0,0,0.5)]">
        
        {/* --- LUMIÈRES ET GRILLE (Optimisé Safari) --- */}
        <div className="absolute inset-0 z-0 opacity-40">
           <motion.div
             animate={{ rotate: 360, scale: [1, 1.2, 1] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute -top-[20%] -left-[10%] w-[60%] h-[80%] bg-gradient-to-br from-member1/30 via-transparent to-transparent blur-[100px] rounded-full pointer-events-none transform-gpu will-change-transform"
           />
           <motion.div
             animate={{ rotate: -360, scale: [1, 1.3, 1] }}
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[80%] bg-gradient-to-tl from-member2/30 via-transparent to-transparent blur-[120px] rounded-full pointer-events-none transform-gpu will-change-transform"
           />
        </div>
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* --- BADGES FLOTTANTS (Décoration grand écran) --- */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:flex absolute left-[8%] top-[30%] z-10 items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl"
        >
          <div className="p-2 bg-member1/20 rounded-full"><Users className="w-5 h-5 text-member1" /></div>
          <div className="text-left">
            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Synergie</p>
            <p className="text-sm font-black text-white">4 Profils Complémentaires</p>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden md:flex absolute right-[8%] bottom-[35%] z-10 items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl"
        >
          <div className="p-2 bg-member2/20 rounded-full"><Lightbulb className="w-5 h-5 text-member2" /></div>
          <div className="text-left">
            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Vision</p>
            <p className="text-sm font-black text-white">Innovation Commune</p>
          </div>
        </motion.div>

        {/* --- CONTENU CENTRAL --- */}
        <div className="w-full h-full flex items-center justify-center mt-10 md:mt-0">
          <div className="relative z-20 max-w-4xl md:max-w-5xl mx-auto px-4 sm:px-6 text-center pointer-events-none flex flex-col items-center">
            
            {/* Pilule d'introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-lg pointer-events-auto"
            >
              <Users className="w-4 h-4 text-member1" />
              <span className="text-xs font-bold text-white/90 uppercase tracking-widest">Le Collectif</span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 leading-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] pointer-events-auto"
            >
              L'Équipe MIC
            </motion.h1>

            {/* Description / Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center text-base sm:text-lg md:text-2xl text-blue-100/60 mb-10 max-w-2xl mx-auto leading-relaxed px-4 font-medium pointer-events-auto"
            >
              Quatre profils complémentaires, passionnés et rigoureux, réunis par une même ambition : concevoir des solutions digitales solides et impactantes.
            </motion.p>
          </div>
        </div>

        {/* --- INDICATEUR DE SCROLL --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-60 hover:opacity-100 transition-opacity cursor-pointer pointer-events-auto"
          onClick={() => window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-widest text-white font-bold">Rencontrer l'équipe</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </motion.div>
        </motion.div>

        {/* --- HORIZON LUMINEUX EN BAS --- */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-member1 to-transparent opacity-60 z-20" />
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-member1/40 blur-2xl rounded-full z-20 pointer-events-none transform-gpu" />
        
      </section>

      {/* ============================================
          SECTION 2 : PRÉSENTATION DES MEMBRES
          Grille de cartes pour chaque membre de l'équipe
          ============================================ */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* En-tête de section : Titre et description */}
          <div className="text-center mb-10 md:mb-16 lg:mb-24 mx-auto space-y-3 md:space-y-6 relative">
            {/* Étoile animée en rotation en arrière-plan */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-8 md:-top-12 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none transform-gpu"
            >
              <Star className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-member1" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-800 font-outfit uppercase">Nos Experts</h2>
            <p className="text-sm md:text-lg lg:text-xl text-slate-500 font-medium leading-relaxed px-3 sm:px-4">
              MIC Studio repose sur une équipe de quatre développeurs aux compétences complémentaires.
              Nous partageons une exigence commune : travailler avec rigueur, sérieux et engagement pour transformer des idées en solutions concrètes.
              Notre diversité de profils nous permet d’aborder chaque projet avec recul, créativité et précision technique.
              </p>
          </div>
          
          {/* Grille des cartes membres : Utilise le composant TeamMember */}
          <div className="px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {MEMBERS.map((member, idx) => (
              <TeamMember key={member.id} member={member} index={idx} />
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Equipe;