
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { MEMBERS } from '../constants';
import { Github, Linkedin, ExternalLink, Sparkles, Star, User } from 'lucide-react';
import { Member } from '../types';

const TeamCardInteraction = ({ member, index }: { member: Member, index: number }) => {
  const isImageRight = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative flex flex-col md:flex-row w-full bg-white rounded-[3rem] border border-slate-100 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-auto md:h-[400px] ${!isImageRight ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Information Side */}
      <div className="flex-1 p-10 md:p-14 flex flex-col justify-center space-y-6 z-10">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
             <h3 className="text-4xl font-black text-slate-800 tracking-tight">{member.name}</h3>
             <div className="w-12 h-px bg-slate-200" />
          </div>
          <p className="font-extrabold tracking-[0.2em] uppercase text-sm" style={{ color: member.color }}>{member.role}</p>
        </div>
        
        <p className="text-xl italic leading-relaxed font-medium text-slate-500 max-w-xl">
          "{member.quote}"
        </p>
        
        <div className="flex items-center gap-6 pt-4">
          <div className="flex gap-4">
            <a href={member.github} className="p-3 bg-slate-50 rounded-full hover:bg-member1 hover:text-white transition-all shadow-sm"><Github className="w-5 h-5" /></a>
            <a href={member.linkedin} className="p-3 bg-slate-50 rounded-full hover:bg-member1 hover:text-white transition-all shadow-sm"><Linkedin className="w-5 h-5" /></a>
          </div>
          <a 
            href={member.portfolio} 
            className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-member1 hover:gap-4 transition-all"
          >
            Portfolio <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Image Side (Revealed on hover) */}
      <div className={`w-full md:w-[40%] h-[300px] md:h-full relative overflow-hidden bg-slate-50 transition-all duration-500 ${isImageRight ? 'border-l' : 'border-r'} border-slate-50`}>
        <div className="absolute inset-0 flex items-center justify-center bg-cupcake-bg z-0 group-hover:opacity-0 transition-opacity duration-700">
           <div className="text-center opacity-20">
              <div className="w-24 h-24 rounded-full border-4 border-dashed border-slate-300 flex items-center justify-center mx-auto mb-4 bg-white/50">
                 <User size={40} className="text-slate-400" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Survolez moi</p>
           </div>
        </div>
        
        <motion.img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-125 group-hover:scale-100 transition-all duration-700 z-10"
        />
        
        {/* Colorful overlay on hover */}
        <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: member.color }} />
        
        {/* Hover info badge */}
        <div className="absolute top-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white shadow-lg text-[10px] font-black uppercase tracking-widest text-slate-800">
              {member.name}
           </div>
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
      className="bg-cupcake-bg"
    >
      <Hero 
        title="L’Équipe MIC"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto space-y-6 relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none"
            >
              <Star className="w-24 h-24 text-member1" />
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tight text-slate-800 font-outfit uppercase">Nos Experts</h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Une complémentarité parfaite pour des projets d'exception. Découvrez les esprits derrière MIC Studio.
            </p>
          </div>
          
          {/* List layout: Cards one below another with alternating positions */}
          <div className="space-y-16">
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
