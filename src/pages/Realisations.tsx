import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, CheckCircle, Globe, Code2, Sparkles, ChevronDown, Layers, MonitorSmartphone, Maximize2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/ui/Hero';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

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
        description="Nos réalisations sont avant tout des histoires qui commencent. Des projets utiles, pensés pour les utilisateurs, construits avec sens, simplicité et engagement."
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
          const allImages = proj.images;
          
          const selectedIndex = selectedImages[proj.id] ?? 0;
          const mainImage = allImages[selectedIndex];
          
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
                    
                    {/* =======================
                        IMAGE PRINCIPALE AVEC ZOOM SHADCN
                        ======================= */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative rounded-[1rem] md:rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 aspect-video mb-3 z-10 bg-slate-50 cursor-zoom-in group/image"> 
                          <AnimatePresence mode="wait">
                            
                            {/* AFFICHAGE CONDITIONNEL SELON LE TYPE */}
                            {mainImage.type === 'portrait' ? (
                              // --- AFFICHAGE PORTRAIT (MOBILE) ---
                              <motion.div 
                                key={`portrait-${selectedIndex}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full flex justify-center items-center bg-slate-900 overflow-hidden"
                              >
                                <img 
                                  src={mainImage.image} 
                                  alt="background" 
                                  className="absolute inset-0 w-full h-full object-cover opacity-60 blur-2xl scale-125 pointer-events-none"
                                />
                                <img
                                  src={mainImage.image}
                                  alt={proj.title}
                                  className="relative z-10 h-[85%] w-auto object-contain rounded-lg drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover/image:scale-[1.03]"
                                />
                              </motion.div>
                            ) : (
                              // --- AFFICHAGE LANDSCAPE (WEB) ---
                              <motion.img 
                                key={`landscape-${selectedIndex}`}
                                src={mainImage.image}
                                alt={proj.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full object-cover object-center transform-gpu transition-transform duration-700 group-hover/image:scale-105"
                              />
                            )}

                          </AnimatePresence>

                          {/* Gradient sombre + URL */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6 pointer-events-none z-20">
                             <div className="space-y-1">
                               <p className="text-white font-bold text-xs md:text-sm flex items-center gap-2"><Globe className="w-3 h-3"/> mic-studio.fr/{proj.id}</p>
                             </div>
                          </div>

                          {/* Icône de zoom au centre */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
                             <div className="bg-black/50 backdrop-blur-sm p-3 md:p-4 rounded-full text-white shadow-lg">
                                <Maximize2 className="w-5 h-5 md:w-6 md:h-6" />
                             </div>
                          </div>
                        </div>
                      </DialogTrigger>

                      {/* Modale d'affichage en plein écran */}
                      <DialogContent 
                        showCloseButton={false} 
                        className="flex justify-center items-center w-auto h-auto max-w-none max-h-none border-none bg-transparent shadow-none p-0 overflow-visible"
                      >
                        <DialogTitle className="sr-only">Zoom sur {proj.title}</DialogTitle>
                        <img
                          src={mainImage.image}
                          alt={proj.title}
                          className="w-auto h-auto max-w-[95vw] md:max-w-[85vw] max-h-[90vh] md:max-h-[85vh] object-contain rounded-xl drop-shadow-2xl"
                        />
                      </DialogContent>
                    </Dialog>

                    {/* Miniature des images format mobile et paysage*/}
                    <div className="grid grid-cols-3 gap-2 md:gap-3">
                      {allImages.map((imgObj, imgIndexInAll) => {
                        if (imgIndexInAll === selectedIndex) return null;
                        
                        return (
                        <motion.div 
                          key={`${proj.id}-thumb-${imgIndexInAll}`} 
                          onClick={() => setSelectedImages(prev => ({ ...prev, [proj.id]: imgIndexInAll }))}
                          className="relative rounded-lg md:rounded-xl overflow-hidden shadow-sm border-2 border-slate-100 aspect-video cursor-pointer transition-all duration-200 hover:border-member1/30 group/thumb"
                        >
                          {/* Affichage conditionnel aussi pour les miniatures */}
                          {imgObj.type === 'portrait' ? (
                            <div className="relative w-full h-full flex justify-center items-center bg-slate-900 overflow-hidden">
                              <img src={imgObj.image} alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-40 blur-md scale-125" />
                              <img src={imgObj.image} alt="thumb" className="relative z-10 h-[80%] w-auto object-contain rounded drop-shadow-lg" />
                            </div>
                          ) : (
                            <img 
                              src={imgObj.image}
                              alt={`${proj.title} - Vue alternative`}
                              className="w-full h-full object-cover"
                            />
                          )}
                          
                          <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/10 transition-colors duration-200 z-20" />
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