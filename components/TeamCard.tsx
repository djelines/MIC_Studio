
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Quote } from 'lucide-react';
import { Member } from '../types';

const TeamCard: React.FC<{ member: Member }> = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="perspective-1000 w-full h-[500px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden flex flex-col items-center p-8 glass rounded-[2.5rem] border border-white/10 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 transition-transform group-hover:scale-105" style={{ borderColor: member.color }}>
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          </div>
          
          <h3 className="text-3xl font-extrabold mb-2">{member.name}</h3>
          <p className="text-lg font-medium mb-4 opacity-80" style={{ color: member.color }}>{member.role}</p>
          
          <div className="mt-auto px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white" style={{ backgroundColor: member.color }}>
            Team MIC
          </div>

          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-40" style={{ backgroundColor: member.color }} />
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-8 rounded-[2.5rem] border border-white/10 text-white rotate-y-180"
          style={{ backgroundColor: member.color }}
        >
          <Quote className="w-12 h-12 mb-6 opacity-40" />
          <p className="text-xl font-medium italic text-center mb-10 leading-relaxed px-4">
            "{member.quote}"
          </p>
          
          <div className="flex gap-6">
            <a href={member.github} className="p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href={member.linkedin} className="p-3 bg-white/20 hover:bg-white/40 rounded-full transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <div className="absolute top-8 left-8 text-white/50 font-bold uppercase tracking-widest text-sm">
            MIC // {member.name}
          </div>
        </div>
      </motion.div>
      
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};

export default TeamCard;
