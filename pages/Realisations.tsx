
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { PROJECTS } from '../constants';
import { ExternalLink, CheckCircle, Globe, Code2, Cloud, Sparkles } from 'lucide-react';

const Realisations = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-lemonade-bg"
    >
      <Hero 
        title="Nos Réalisations"
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
      />

      <section className="py-32 space-y-32">
        {PROJECTS.map((proj, idx) => (
          <div key={proj.id} className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-1 md:p-2 rounded-[4rem] bg-white border border-slate-300 shadow-3xl"
            >
              <div className="bg-white rounded-[3.8rem] overflow-hidden p-8 md:p-16">
                <div className={`flex flex-col lg:items-center gap-16 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Image Side */}
                  <div className="flex-1 group relative">
                    <div className="absolute inset-0 bg-member1/10 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity" />
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 aspect-video lg:aspect-square xl:aspect-video z-10">
                      <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-10">
                         <div className="space-y-2">
                           <p className="text-white font-bold flex items-center gap-2"><Globe className="w-4 h-4"/> mic-studio.fr/{proj.id}</p>
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="flex-1 space-y-10">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <span className="px-5 py-2 rounded-full bg-member1/10 text-member1 font-black text-sm uppercase tracking-widest border border-member1/20">Projet #0{idx + 1}</span>
                        <div className="h-px flex-grow bg-slate-100" />
                      </div>
                      <h2 className="text-4xl md:text-7xl font-black tracking-tight text-slate-800">{proj.title}</h2>
                      <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium">
                        {proj.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Stack Technique Card - Pale Blue */}
                      <motion.div 
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-[2.5rem] bg-blue-50/60  shadow-sm backdrop-blur-sm"
                      >
                        <h4 className="font-bold text-xl flex items-center gap-2 mb-4 text-blue-600"><Code2 className="w-6 h-6" /> Stack Technique</h4>
                        <div className="flex flex-wrap gap-2">
                          {proj.stack.map(s => (
                            <span key={s} className="px-4 py-1.5 bg-white/70 border border-blue-100 text-blue-700 rounded-xl text-sm font-bold shadow-sm">{s}</span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Fonctionnalités Card - Pale Green */}
                      <motion.div 
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-[2.5rem] bg-emerald-50/60 shadow-sm backdrop-blur-sm"
                      >
                        <h4 className="font-bold text-xl flex items-center gap-2 mb-4 text-emerald-600"><Sparkles className="w-6 h-6" /> Fonctionnalités</h4>
                        <ul className="space-y-3">
                          {proj.features.map(f => (
                            <li key={f} className="flex items-center gap-3 text-lg text-slate-600 font-medium">
                              <CheckCircle className="w-5 h-5 text-emerald-500" /> {f}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-6">
                      <a href={proj.link} className="inline-flex items-center gap-3 px-12 py-5 bg-member1 text-white font-black rounded-full hover:shadow-2xl hover:scale-105 transition-all shadow-xl">
                        Visiter la plateforme <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}

        {/* Mysterious Project Holder */}
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-1 md:p-2 rounded-[4rem] bg-white border border-slate-100 overflow-hidden min-h-[500px] flex items-center justify-center"
          >
            {/* Cloud/Mist Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
               <motion.div 
                animate={{ x: ['-20%', '20%'], y: ['-10%', '10%'] }} 
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#746ac8_0%,_transparent_70%)] blur-[100px]" 
               />
               <motion.div 
                animate={{ x: ['20%', '-20%'], y: ['10%', '-10%'] }} 
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_#f59e0b_0%,_transparent_70%)] blur-[120px]" 
               />
            </div>
            
            <div className="relative z-10 text-center space-y-8 p-12 glass rounded-[3rem] border border-white/20 shadow-xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="flex justify-center"
              >
                <Cloud size={80} className="text-member1" />
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-member1 via-member3 to-member2">À Suivre...</h2>
              <p className="text-xl md:text-3xl font-medium text-slate-500 max-w-xl">
                Un nouveau projet mystérieux émerge de la brume technologique. Restez connectés.
              </p>
              <div className="flex justify-center gap-4">
                 {[1,2,3].map(i => <div key={i} className="w-4 h-4 rounded-full bg-member1 animate-pulse" style={{ animationDelay: `${i*300}ms` }} />)}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Realisations;
