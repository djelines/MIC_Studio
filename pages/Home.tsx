
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import { VALUES, PROJECTS } from '../constants';
import { Plus, ArrowRight, ChevronRight, ChevronLeft, BarChart3, Users, Code, Trophy, Smile, Package, Star, Award, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Cobe } from '@/components/ui/cobe-globe';
import { CountingNumber } from '@/components/animate-ui/primitives/texts/counting-number';
import { StatCard } from '@/components/StatsCard';

const SectionTitle = ({ children, colorClass }: { children: React.ReactNode, colorClass: string }) => (
  <h2 className="text-4xl md:text-6xl font-black relative inline-block">
    <span className={`highlight ${colorClass}`}>{children}</span>
  </h2>
);

const Home = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [projectIndex, setProjectIndex] = useState(0);

  const nextProject = () => setProjectIndex((prev) => (prev + 1) % PROJECTS.length);
  const prevProject = () => setProjectIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);

  const faqs = [
    { q: "Pourquoi choisir MIC Studio ?", a: "Notre force réside dans la complémentarité de nos profils et notre engagement total sur chaque projet. Nous ne livrons pas seulement du code, nous bâtissons des solutions durables." },
    { q: "Quelles technologies utilisez-vous ?", a: "Nous privilégions les stacks modernes comme Next.js, TypeScript et Node.js pour assurer performance et évolutivité. Nous adaptons la technologie au besoin, pas l'inverse." },
    { q: "Êtes-vous disponibles pour de nouveaux projets ?", a: "Oui, nous sommes toujours à la recherche de défis innovants, particulièrement ceux à impact social. Parlons-en !" }
  ];

  const statistics = [
    { label: "Projets livrés", value: "24", afterValue: "", icon: <BarChart3 className="w-8 h-8" />, 
      illustration: <div className="flex items-end justify-center h-10 gap-1.5 mt-5">
      <div className="w-6 h-4 bg-gray-100 rounded border border-gray-200 flex items-center justify-center"><Package size={12} className='text-gray-400'/></div>
      <div className="w-6 h-7 bg-gray-200 rounded border border-gray-300 flex items-center justify-center"><Package size={12} className='text-gray-500'/></div>
      <div className="w-6 h-10 bg-gray-900 rounded border border-gray-900 flex items-center justify-center"><Package size={12} className='text-white/80'/></div>
  </div>
     },
    { label: "Clients satisfaits", value: "100", afterValue: "%", icon: <Smile className="w-8 h-8" />,
      illustration: <div className="flex items-center justify-center gap-1 h-8 mt-5">
        <Star size={24} className='text-gray-900 '/>
        <Star size={24} className='text-gray-900 '/>
        <Star size={24} className='text-gray-900 '/>
        <Star size={24} className='text-gray-900 '/>
        <Star size={24} className='text-gray-900 '/>
  </div>
     },
    { label: "Lignes de code", value: "250", afterValue: "k+", icon: <Code className="w-8 h-8" />,
      illustration: <div className="flex flex-col items-center justify-center gap-1.5 h-10 w-full px-12 mt-5">
      <div className="flex items-center gap-2 w-full">
          <div className="h-1.5 bg-gray-900 rounded-full w-2/3"></div>
          <div className="h-1.5 bg-gray-200 rounded-full w-1/3"></div>
      </div>
      <div className="flex items-center gap-2 w-full">
          <div className="h-1.5 bg-gray-400 rounded-full w-1/4"></div>
          <div className="h-1.5 bg-gray-900 rounded-full w-3/4"></div>
      </div>
      <div className="flex items-center gap-2 w-full">
          <div className="h-1.5 bg-gray-200 rounded-full w-1/2"></div>
          <div className="h-1.5 bg-gray-400 rounded-full w-1/2"></div>
      </div>
  </div>
     },
    { label: "Prix d'innovation", value: "3", afterValue: "", icon: <Trophy className="w-8 h-8" />,
      illustration: <div className="relative h-12 w-full flex items-center justify-center overflow-visible mt-5">
<div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
  <div className="w-20 h-20 border border-gray-900 rounded-full absolute border-dashed animate-spin-slow"></div>
</div>

<div className="flex items-center justify-center relative">
  <div className="absolute -translate-x-8 -translate-y-2 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm -rotate-12 transition-transform hover:scale-110">
    <Award size={10} className='text-gray-500'/>
  </div>
  
  <div className="w-10 h-10 bg-gray-900 rounded-full border-2 border-white flex items-center justify-center shadow-lg z-10 scale-110 transform transition-transform hover:scale-125 cursor-default">
    <Crown size={20} className='text-white'/>
  </div>
  
  <div className="absolute translate-x-8 -translate-y-2 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm rotate-12 transition-transform hover:scale-110">
    <Star size={10} className='text-gray-500'/>
  </div>
</div>

<div className="absolute -top-1 right-1/3 w-1 h-1 bg-gray-400 rounded-full animate-ping"></div>
<div 
  className="absolute top-4 left-1/4 w-1 h-1 bg-gray-300 rounded-full animate-pulse" 
  style={{ animationDelay: '0.5s' }}
></div>
  </div>
     }
  ];

  const iconColorMap: Record<string, string> = {
    member1: 'text-member1',
    member2: 'text-member2',
    member3: 'text-member3',
    member4: 'text-member4',
  };

  const memberColors: Record<string, string> = {
    member1: '#746ac8',
    member2: '#49b4a7',
    member3: '#4992f1',
    member4: '#233147',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-0"
    >
    
    <section className="relative h-[92vh] w-full flex items-center justify-center overflow-hidden flex-col">
  <Cobe 
    className='!absolute inset-0 opacity-60'
  />

  <div className='w-full h-full flex mt-40'>
    
    <div className="relative z-10 max-w-5xl mx-auto px-6 -mt-10 text-center pointer-events-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-7xl font-extrabold text-black/90 mb-6 leading-tight drop-shadow-sm"
      >
        Nous développons des projets concrets et innovants
      </motion.h1>      
      
      <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-lg md:text-2xl text-black/70 mb-10 max-w-4xl mx-auto leading-relaxed"
      >
          MIC, c’est Matéis, Mathys, Inès et Clément. Ensemble, nous transformons des idées en solutions concrètes et sociales.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
          <Link 
            to=""
            className="px-8 py-4 bg-[#233147] hover:bg-[#233147]/90 text-white 
            font-bold rounded-full transition-all flex items-center gap-2 group shadow-lg hover:shadow-xl"
          >
            Découvrir nos projets
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link 
            to=""
            className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-full transition-all hover:scale-105 border border-gray-200"
          >
            Rencontrer l'équipe
          </Link>
      </motion.div>
    </div>
  </div>
</section>

      <section className="py-24 bg-white/70">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <SectionTitle colorClass="text-member1">Une vision, quatre talents.</SectionTitle>
              <p className="text-xl text-slate-600 leading-relaxed mt-6">
                Basés à Paris, nous mettons notre expertise au service de projets à fort impact social et technologique. MIC Studio n'est pas qu'une agence, c'est un laboratoire d'idées.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, idx) => (
              <StatCard stat={stat} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-cupcake-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <SectionTitle colorClass="text-member2">Nos Valeurs</SectionTitle>
            <p className="text-slate-500 mt-4 font-medium">L'essence de MIC STUDIO capturée sur le vif.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {VALUES.map((val, idx) => (
              <motion.div 
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group perspective-[1000px]"
              >
                <div 
                  className="post-it bg-white p-8 pt-10 rounded-sm shadow-xl transition-transform duration-300 hover:scale-115"
                  style={{ 
                    transform: `rotate(${idx % 2 === 0 ? '-2deg' : '2deg'})`,
                    borderTop: `6px solid ${memberColors[val.color]}` 
                  }}
                >
                 
                  
                  <div className={`mb-6 ${iconColorMap[val.color]} opacity-80  transition-transform`}>
                    {val.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black mb-4 tracking-tight">{val.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {val.description}
                  </p>
                  
                  <div className="mt-8 text-[10px] font-black uppercase tracking-widest opacity-20">
                    MIC Studio // Core Value
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4">
              <SectionTitle colorClass="text-member3">Réalisations Récentes</SectionTitle>
              <p className="text-slate-500 max-w-xl font-medium">
                Un aperçu de nos derniers succès, alliant complexité technique et interface épurée.
              </p>
            </div>
            <div className="flex gap-4">
              <button onClick={prevProject} className="p-4 bg-white rounded-full hover:bg-member3 hover:text-white transition-all shadow-md border border-slate-100"><ChevronLeft /></button>
              <button onClick={nextProject} className="p-4 bg-white rounded-full hover:bg-member3 hover:text-white transition-all shadow-md border border-slate-100"><ChevronRight /></button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[3rem] shadow-2xl bg-white border border-slate-100 h-[600px] md:h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={projectIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col md:flex-row h-full"
              >
                <div className="w-full md:w-1/2 h-48 md:h-full overflow-hidden">
                  <img 
                    src={PROJECTS[projectIndex].image} 
                    alt={PROJECTS[projectIndex].title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">{PROJECTS[projectIndex].title}</h3>
                  <p className="text-slate-500 mb-8 text-lg leading-relaxed line-clamp-3">
                    {PROJECTS[projectIndex].description}
                  </p>
                  <Link 
                    to="/realisations" 
                    className="inline-flex items-center gap-2 text-member3 font-bold text-xl hover:gap-4 transition-all"
                  >
                    Voir le projet <ArrowRight className="w-6 h-6" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Section 4: FAQ */}
      <section className="py-32 bg-cupcake-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <SectionTitle colorClass="text-member4">Questions Fréquentes</SectionTitle>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-cupcake-bg rounded-3xl border border-slate-200 overflow-hidden transition-all shadow-sm">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full p-8 flex justify-between items-center font-bold text-xl text-left select-none group"
                    >
                      <span className="group-hover:text-member1 transition-colors text-slate-800 tracking-tight">{faq.q}</span>
                      <motion.div
                        animate={{ rotate: activeFaq === idx ? 45 : 0 }}
                      >
                        <Plus className={`w-6 h-6 ${activeFaq === idx ? 'text-member1' : ''}`} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {activeFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="p-8 pt-0 text-slate-600 leading-relaxed text-lg border-t border-slate-100">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-member1/5 rounded-[4rem] rotate-3 -z-10 blur-2xl" />
              <img 
                src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=2070&auto=format&fit=crop" 
                alt="Studio FAQ" 
                className="w-full h-full object-cover rounded-[3rem] shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl border border-slate-200 hidden md:block bg-white/90">
                 <p className="text-member1 font-bold text-lg">Prêt à discuter ?</p>
                 <p className="text-slate-500 text-sm font-medium">Nous répondons en moins de 24h.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-white">
        <motion.div
          whileInView={{ scale: [0.95, 1] }}
          className="max-w-6xl mx-auto rounded-[4rem] p-12 md:p-24 text-center border border-slate-200 relative overflow-hidden shadow-2xl bg-white"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-member1 via-member3 to-member2" />
          <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight tracking-tight text-slate-800">Prêt à transformer <br/>votre idée en réalité ?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-member1 text-white font-black text-xl rounded-full shadow-xl transition-all"
            >
              <a href="mailto:contact@mic-studio.fr" className="group-hover:text-member1 transition-colors">Contactez-nous</a>
            </motion.button>
            <Link to="/equipe" className="text-xl font-bold hover:underline text-slate-700">Rencontrer l'équipe</Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
