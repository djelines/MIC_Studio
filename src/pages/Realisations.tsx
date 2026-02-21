import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, CheckCircle, Globe, Code2, Sparkles, ChevronDown, Layers, MonitorSmartphone } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/ui/Hero';

const Realisations = () => {
  const { hash } = useLocation();
  const [selectedImages, setSelectedImages] = useState<Record<string, number>>({});

  useEffect(() => {
    if(hash){
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

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
                className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[80%] bg-gradient-to-tl from-member3/30 via-transparent to-transparent blur-[120px] rounded-full pointer-events-none transform-gpu will-change-transform"
              />
            </div>
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          </>
        }
        sideBadges={[
          {
            icon: Code2,
            label: 'Expertise',
            text: 'Code & Design',
            color: 'member1',
            position: 'left',
            top: 'top-[30%]',
            delay: 0,
          },
          {
            icon: MonitorSmartphone,
            label: 'Expérience',
            text: 'Multi-plateformes',
            color: 'member3',
            position: 'right',
            top: 'bottom-[35%]',
            delay: 1,
          },
        ]}
        topBadge={{
          icon: Layers,
          text: 'Portfolio',
          color: 'member1',
        }}
        title="Nos Réalisations"
        description="Explorez nos derniers projets. Des solutions web innovantes, performantes et conçues sur-mesure pour répondre aux défis de demain."
        scrollIndicator={
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer pointer-events-auto"
            onClick={() => window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' })}
          >
            <span className="text-[10px] uppercase tracking-widest text-white font-bold">Explorer</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </motion.div>
          </motion.div>
        }
        bottomEffects={
          <>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-member3 to-transparent opacity-60 z-20" />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-member3/40 blur-2xl rounded-full z-20 pointer-events-none transform-gpu" />
          </>
        }
        contentClassName="mt-10 md:mt-0"
      />

      {/* Liste des projets */}
      <section className="py-12 md:py-24 lg:py-32 space-y-12 md:space-y-24 lg:space-y-32">
        {PROJECTS.map((proj, idx) => {
          const allImages = [
            proj.image,
            `https://images.unsplash.com/photo-${['1516321318423', '1563986768609', '1498050108023'][idx]}?q=80&w=1200&auto=format&fit=crop`,
            `https://images.unsplash.com/photo-${['1553028826-f4804a6dba3b', '1507003211169-0a1dd7228f2d', '1472099645785-5658abf4ff4e'][idx]}?q=80&w=1200&auto=format&fit=crop`,
            `https://images.unsplash.com/photo-${['1563986768609', '1498050108023', '1516321318423'][idx]}?q=80&w=1200&auto=format&fit=crop`,
          ];
          
          const selectedIndex = selectedImages[proj.id] ?? 0;
          const mainImage = allImages[selectedIndex];
          const thumbnails = allImages.filter((_, i) => i !== selectedIndex);
          
          return (
            <div key={proj.id} id={proj.title} className="max-w-7xl mx-auto px-5 md:px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-1 md:p-1.5 rounded-[1.25rem] md:rounded-[2rem] lg:rounded-[2.5rem] bg-white border border-slate-300 shadow-xl"
            >
              <div className="bg-white rounded-[1.25rem] md:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden p-4 md:p-5 lg:p-6">
                <div className={`flex flex-col lg:items-center gap-5 md:gap-8 lg:gap-10 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  <div className="flex-1 group relative">
                    <div className="absolute inset-0 bg-member1/10 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none transform-gpu" />
                    
                    <div className="relative rounded-[1rem] md:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 aspect-video lg:aspect-[4/3] mb-3 z-10">
                      <AnimatePresence mode="wait">
                        <motion.img 
                          key={selectedIndex}
                          src={mainImage} 
                          alt={proj.title}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full object-cover transform-gpu"
                        />
                      </AnimatePresence>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6 pointer-events-none">
                         <div className="space-y-1">
                           <p className="text-white font-bold text-xs md:text-sm flex items-center gap-2"><Globe className="w-3 h-3"/> mic-studio.fr/{proj.id}</p>
                         </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 md:gap-3">
                      {thumbnails.map((img) => {
                        const imgIndexInAll = allImages.findIndex((allImg) => allImg === img);
                        
                        return (
                        <motion.div 
                          key={imgIndexInAll}
                          onClick={() => setSelectedImages(prev => ({ ...prev, [proj.id]: imgIndexInAll }))}
                          className="relative rounded-lg md:rounded-xl overflow-hidden shadow-sm border-2 border-slate-100 aspect-video cursor-pointer transition-all duration-200 hover:border-member1/30"
                        >
                          <img 
                            src={img}
                            alt={`${proj.title} - Vue alternative`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-opacity duration-200" />
                        </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex-1 space-y-4 md:space-y-6 lg:space-y-8">
                    <div className="space-y-3 md:space-y-4">
                      <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight text-slate-800">{proj.title}</h2>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-slate-500 leading-relaxed font-medium">
                        {proj.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <motion.div 
                        whileHover={{ y: -3 }}
                        className="p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl bg-blue-50/80 shadow-sm"
                      >
                        <h4 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg flex items-center gap-2 mb-2 md:mb-3 text-blue-600">
                        <Code2 className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" /> Stack Technique</h4>
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                          {proj.stack.map(s => (
                            <span key={s} className="px-2 md:px-3 py-0.5 md:py-1 bg-white/90 border border-blue-100 text-blue-700 rounded-lg text-[9px] md:text-xs font-bold shadow-sm">{s}</span>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div 
                        whileHover={{ y: -3 }}
                        className="p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl bg-emerald-50/80 shadow-sm"
                      >
                        <h4 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg flex items-center gap-2 mb-2 md:mb-3 text-emerald-600">
                          <Sparkles className="w-3 h-3 md:w-5 md:h-5 flex-shrink-0" /> Fonctionnalités</h4>
                        <ul className="space-y-1.5 md:space-y-2">
                          {proj.features.map(f => (
                            <li key={f} className="flex items-center gap-2 text-[11px] sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium">
                              <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500 flex-shrink-0" /> <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    <div className="pt-4 md:pt-6 border-t border-slate-100 flex flex-wrap gap-3 md:gap-4">
                      <a href={proj.link} target="_BLANK" className="inline-flex items-center gap-2 px-5 md:px-8 lg:px-10 py-2 md:py-3 lg:py-3.5 bg-member1 text-white font-black text-xs md:text-sm rounded-full hover:shadow-xl hover:scale-105 transition-all shadow-md">
                        Visiter la plateforme <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          );
        })}

        {/* Section "À Suivre" */}
        <div className="max-w-7xl mx-auto px-6 md:px-4 sm:px-6 py-14 md:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative w-full rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] bg-[#0A1128] overflow-hidden flex flex-col items-center justify-center min-h-[400px] md:min-h-[450px] lg:min-h-[500px] border border-[#1A2B4C] shadow-[0_20px_60px_-15px_rgba(10,17,40,0.7)]"
          >
            {/* OPTIMISATION SAFARI : Ajout de transform-gpu et will-change-transform sur les flous animés */}
            <div className="absolute inset-0 z-0 opacity-50 transition-opacity duration-1000 group-hover:opacity-80">
               <motion.div
                 animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 className="absolute -top-[40%] -left-[20%] w-[80%] h-[100%] bg-gradient-to-br from-[#E8D5B5]/25 via-transparent to-transparent blur-[100px] rounded-full pointer-events-none transform-gpu will-change-transform"
               />
               <motion.div
                 animate={{ rotate: -360, scale: [1, 1.3, 1] }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="absolute -bottom-[40%] -right-[20%] w-[80%] h-[100%] bg-gradient-to-tl from-[#3B82F6]/20 via-transparent to-transparent blur-[120px] rounded-full pointer-events-none transform-gpu will-change-transform"
               />
            </div>

            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#E8D5B508_1px,transparent_1px),linear-gradient(to_bottom,#E8D5B508_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full max-w-3xl pointer-events-none">
               <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight mb-4 md:mb-6">
                 À Suivre...
               </h2>

               <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-blue-100/60 font-medium leading-relaxed mb-8 md:mb-10 lg:mb-12 px-4">
                 Un nouveau projet mystérieux émerge de la brume technologique. Restez connectés.
               </p>

               <div className="flex items-center gap-4">
                 <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-[#E8D5B5]/40" />
                 
                 <div className="flex gap-3">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                        className="w-2.5 h-2.5 rounded-full bg-[#E8D5B5] shadow-[0_0_12px_#E8D5B5] transform-gpu will-change-transform"
                      />
                    ))}
                 </div>

                 <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-[#E8D5B5]/40" />
               </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6]/70 to-transparent opacity-80" />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-[#3B82F6]/30 blur-2xl rounded-full transform-gpu pointer-events-none" />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Realisations;