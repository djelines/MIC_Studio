import React from 'react';
import { motion } from 'framer-motion';
import { MEMBERS } from '../constants';
import { Github, Linkedin, ExternalLink, Star, User, Users, Lightbulb, ChevronDown } from 'lucide-react';
import { Member } from '../types';
import { TeamMember } from '@/components/ui/TeamMember';
import Hero from '@/components/ui/Hero';

const Equipe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-lemonade-bg"
    >
      {/* Hero */}
      <Hero
        className="bg-[#0a0f1c]"
        background={
          <>
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
          </>
        }
        sideBadges={[
          {
            icon: Users,
            label: 'Synergie',
            text: '4 Profils Complémentaires',
            color: 'member1',
            position: 'left',
            top: 'top-[30%]',
            delay: 0,
          },
          {
            icon: Lightbulb,
            label: 'Vision',
            text: 'Innovation Commune',
            color: 'member2',
            position: 'right',
            top: 'bottom-[35%]',
            delay: 1,
          },
        ]}
        topBadge={{
          icon: Users,
          text: 'Le Collectif',
          color: 'member1',
        }}
        title="L'Équipe MIC"
        description="Quatre profils complémentaires, passionnés et rigoureux, réunis par une même ambition : concevoir des solutions digitales solides et impactantes."
        scrollIndicator={
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer pointer-events-auto"
            onClick={() => window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' })}
          >
            <span className="text-[10px] uppercase tracking-widest text-white font-bold">Rencontrer l'équipe</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </motion.div>
          </motion.div>
        }
        bottomEffects={
          <>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-member1 to-transparent opacity-60 z-20" />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-member1/40 blur-2xl rounded-full z-20 pointer-events-none transform-gpu" />
          </>
        }
        contentClassName="mt-10 md:mt-0"
      />

      {/* Présentation des membres */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-16 lg:mb-24 mx-auto space-y-3 md:space-y-6 relative">
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
              Notre diversité de profils nous permet d'aborder chaque projet avec recul, créativité et précision technique.
              </p>
          </div>
          
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