
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import { VALUES, PROJECTS } from '../constants';
import { Plus, ArrowRight, ChevronRight, ChevronLeft, Search, Layers, Code2, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Cobe } from '@/components/ui/cobe-globe';
import { DevelopmentStepCard } from '@/components/DevelopmentStepCard';
import { RequirementsMap } from '@/components/ui/svg/RequirementsSvg';
import { SystemArchitecture } from '@/components/ui/svg/SystemArchitectureSvg';
import { CodeImplementation } from '@/components/ui/svg/CodeImplementationSvg';
import { DeploymentStatus } from '@/components/ui/svg/DeploymentSvg';
import { ProjectCarousel } from '@/components/ui/ProjectsCarousel';

export const SectionTitle = ({ children, colorClass }: { children: React.ReactNode, colorClass: string }) => (
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

  const developmentSteps = [
    {
      title: "Exigence",
      description: "Nous étudions en profondeur vos besoins, votre marché et.",
      icon: Search,
      color: "#746ac8",
      svg: <RequirementsMap/>
    },
    {
      title: "Architecture",
      description: "Conception d'une architecture technique solide et scalable.",
      icon: Layers,
      color: "#49b4a7",
      svg: <SystemArchitecture/>
    },
    {
      title: "Développement",
      description: "Implémentation rigoureuse avec des pratiques de code propres.",
      icon: Code2,
      color: "#4992f1",
      svg: <CodeImplementation/>
    },
    {
      title: "Déploiement",
      description: "Déploiement sécurisé, monitoring continu et accompagnement.",
      icon: Rocket,
      color: "#233147",
      svg: <DeploymentStatus/>
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <SectionTitle colorClass="text-member1">Notre Processus de Développement</SectionTitle>
              <p className="text-xl text-slate-600 leading-relaxed mt-6">
                De l'analyse initiale à la mise en production, nous suivons une méthodologie rigoureuse pour transformer vos idées en solutions concrètes et performantes.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {developmentSteps.map((step, idx) => (
              <DevelopmentStepCard
                key={step.title}
                title={step.title}
                description={step.description}
                icon={step.icon}
                color={step.color}
                idx={idx}
                svg={step.svg}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-lemonade-bg">
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
                  className="post-it bg-white p-8 pt-10 rounded-sm shadow-xl transition-transform duration-300 hover:scale-115 "
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
          <ProjectCarousel/>
      </section>

      {/* Section 4: FAQ */}
      <section className="py-32 bg-lemonade-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <SectionTitle colorClass="text-member4">Questions Fréquentes</SectionTitle>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-lemonade-bg rounded-3xl border border-slate-200 overflow-hidden transition-all shadow-sm">
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
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-black leading-tight text-slate-900">
              On discute de votre projet ?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Que ce soit pour un prototype, une refonte ou une idée à concrétiser, on aime les défis qui ont du sens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a 
                href="mailto:contact@mic-studio.fr"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors group"
              >
                Envoyer un message
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link 
                to="/equipe" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-lg border border-slate-200 transition-colors"
              >
                L'équipe
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
