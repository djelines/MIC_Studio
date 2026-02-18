
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import { VALUES, PROJECTS } from '../constants';
import { Plus, ArrowRight, ChevronRight, ChevronLeft, BarChart3, Users, Code, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    { label: "Projets livrés", value: "24", icon: <BarChart3 className="w-8 h-8" /> },
    { label: "Clients satisfaits", value: "100%", icon: <Users className="w-8 h-8" /> },
    { label: "Lignes de code", value: "250k+", icon: <Code className="w-8 h-8" /> },
    { label: "Prix d'innovation", value: "3", icon: <Trophy className="w-8 h-8" /> }
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
      <Hero 
        title="Nous développons des projets concrets et innovants"
        subtitle="MIC, c’est Matéis, Mathys, Inès et Clément. Ensemble, nous transformons des idées en solutions concrètes et sociales."
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
        primaryCta={{ text: 'Découvrir nos projets', link: '/realisations' }}
        secondaryCta={{ text: 'Rencontrer l’équipe', link: '/equipe' }}
      />

      {/* Section 1: Stats */}
      <section className="py-24 bg-white ">
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
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-cupcake-bg border border-slate-100 text-center shadow-sm group hover:scale-105 transition-all"
              >
                <div className="flex justify-center mb-4 text-member1 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black mb-2">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-widest opacity-60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Values (Post-it style) */}
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

      {/* Section 3: Projects */}
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
