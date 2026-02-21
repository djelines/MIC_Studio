import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { MEMBERS } from '../constants';
import { Github, Linkedin, ExternalLink, Sparkles, Star, User } from 'lucide-react';
import { Member } from '../types';

const TeamCardInteraction = ({ member, index }: { member: Member, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col w-full bg-white rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
    >
      <div className="w-full h-[220px] md:h-[240px] lg:h-[260px] relative overflow-hidden bg-slate-50 border-b border-slate-100 shrink-0">
        <div className="absolute inset-0 flex items-center justify-center bg-lemonade-bg z-0 group-hover:opacity-0 transition-opacity duration-700">
           <div className="text-center opacity-30">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center mx-auto mb-3 bg-white/50">
                 <User size={24} className="text-slate-400" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Survolez moi</p>
           </div>
        </div>
        
        <motion.img 
          src={member.image} 
          alt={member.name} 
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-700 z-10"
        />
        
        <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: member.color }} />
      </div>

      <div className="flex-1 p-5 md:p-6 flex flex-col justify-between z-10 bg-white relative">
        <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
          <div className="space-y-1">
            <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">{member.name}</h3>
            <div className="w-8 h-px bg-slate-200" />
            <p className="font-extrabold tracking-[0.15em] uppercase text-[10px] mt-2" style={{ color: member.color }}>{member.role}</p>
          </div>
          
          <p className="text-xs md:text-sm italic leading-relaxed font-medium text-slate-500">
            "{member.quote}"
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-slate-50">
          <div className="flex gap-2">
            <a href={member.github} className="p-1.5 md:p-2 bg-slate-50 rounded-full hover:bg-member1 hover:text-white transition-all shadow-sm"><Github className="w-3.5 h-3.5 md:w-4 md:h-4" /></a>
            <a href={member.linkedin} className="p-1.5 md:p-2 bg-slate-50 rounded-full hover:bg-member1 hover:text-white transition-all shadow-sm"><Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4" /></a>
          </div>
          <a 
            href={member.portfolio} 
            className="flex items-center gap-1.5 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-member1 hover:gap-2 transition-all"
          >
            Portfolio <ExternalLink className="w-2.5 h-2.5 md:w-3 md:h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Equipe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-lemonade-bg"
    >
      <Hero 
        title="L’Équipe MIC"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16 lg:mb-24 max-w-3xl mx-auto space-y-4 md:space-y-6 relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-8 md:-top-12 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none"
            >
              <Star className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-member1" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-800 font-outfit uppercase">Nos Experts</h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-500 font-medium leading-relaxed px-4">
              Une complémentarité parfaite pour des projets d'exception. Découvrez les esprits derrière MIC Studio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
            {MEMBERS.map((member, idx) => (
              <TeamCardInteraction key={member.id} member={member} index={idx} />
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default Equipe;