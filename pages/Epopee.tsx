
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { TIMELINE } from '../constants';
import { Sparkles, Circle, Cloud as CloudIcon } from 'lucide-react';
import { BubbleBackground } from '@/components/animate-ui/components/backgrounds/bubble';

const Epopee = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-cupcake-bg"
    >
      <div className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
          <BubbleBackground/>
      </div>

      <section className="py-32 relative overflow-hidden">
        {/* Dashed Background Line with larger spacing */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 border-l-4 border-dashed border-slate-300 -translate-x-1/2 hidden md:block" />

        <div className="max-w-7xl mx-auto px-6 space-y-48 md:space-y-64">
          {TIMELINE.map((event, idx) => (
            <div key={event.title} className={`flex flex-col md:flex-row items-center gap-16 md:gap-40 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'} relative`}>
              
              {/* Checkpoint Dot */}
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

              {/* Realistic Post-it Side */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 w-full flex justify-center z-10"
              >
                <div 
                  className="post-it"
                  style={{ 
                    transform: `rotate(${event.rotation}deg)`,
                    backgroundColor: '#fff',
                  }}
                >
                  {/* Scotch Tape */}
                  <div className="scotch opacity-80" />
                  
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-sm font-black uppercase tracking-widest opacity-60" style={{ color: event.color }}>{event.date}</span>
                    <div className="p-3 rounded-xl bg-slate-50" style={{ color: event.color }}>
                      {event.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-black mb-4 leading-tight text-slate-800">{event.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-lg">
                    {event.description}
                  </p>
                  
                  {/* Paper texture detail */}
                  <div className="absolute bottom-4 right-4 text-xs opacity-20 uppercase tracking-tighter font-bold">MIC STUDIO ARCHIVES</div>
                </div>
              </motion.div>

              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 w-full z-10"
              >
                <div className="relative group">
                   <div className="absolute -inset-4 bg-member1/5 rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0" />
                   <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full aspect-[4/3] object-cover rounded-[2.5rem] shadow-xl relative z-10 border border-white" 
                   />
                </div>
              </motion.div>
            </div>
          ))}

          {/* To Be Continued */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-40 text-center relative"
          >
            
            <div className="relative z-10 space-y-6">
              <div className="w-20 h-20 rounded-full bg-member1/10 mx-auto flex items-center justify-center animate-bounce shadow-inner">
                <Sparkles className="w-10 h-10 text-member1" />
              </div>
              <div className="space-y-4">
                <h2 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-member1 via-member3 to-member2">À Suivre...</h2>
                <p className="text-xl text-slate-500 max-w-lg mx-auto leading-relaxed font-semibold">
                  Notre histoire ne fait que commencer. De nouveaux défis et projets innovants sont déjà en préparation pour 2026 et au-delà.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
};

export default Epopee;
