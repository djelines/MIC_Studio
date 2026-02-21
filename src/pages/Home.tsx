import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { developmentSteps, faqs, VALUES } from "../constants";
import {
  Plus,
  ArrowRight,
  Search,
  Layers,
  Code2,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";
import { DevelopmentStepCard } from "@/components/ui/DevelopmentStepCard";
import { RequirementsMap } from "@/components/ui/svg/RequirementsSvg";
import { SystemArchitecture } from "@/components/ui/svg/SystemArchitectureSvg";
import { CodeImplementation } from "@/components/ui/svg/CodeImplementationSvg";
import { DeploymentStatus } from "@/components/ui/svg/DeploymentSvg";
import { ProjectCarousel } from "@/components/ui/ProjectsCarousel";
import WorldMap from "@/components/ui/world-map";
import FinalCTA from "@/components/ui/FinalCTA";

export const SectionTitle = ({
  children,
  colorClass,
}: {
  children: React.ReactNode;
  colorClass: string;
}) => (
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black relative leading-relaxed">
    <span className={`highlight ${colorClass}`}>{children}</span>
  </h2>
);

const Home = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const iconColorMap: Record<string, string> = {
    member1: "text-member1",
    member2: "text-member2",
    member3: "text-member3",
    member4: "text-member4",
  };

  const memberColors: Record<string, string> = {
    member1: "#746ac8",
    member2: "#49b4a7",
    member3: "#4992f1",
    member4: "#233147",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-0"
    >
      <section className="relative h-screen -mt-20 w-full flex items-center justify-center overflow-hidden flex-col [box-shadow:0_50px_90px_-15px_rgba(0,0,0,0.5)]">
        <WorldMap
          dots={[
            {
              start: { lat: 35.6062, lng: -122.3321 },
              end: { lat: 48.5017, lng: -70.5673 },
            },
            {
              start: { lat: 48.5017, lng: -70.5673 },
              end: { lat: -30.7975, lng: -40.8919 },
            },
            {
              start: { lat: 36.8566, lng: 2.3522 },
              end: { lat: 64.1695, lng: 27.9354 },
            },
            {
              start: { lat: 36.8566, lng: 2.3522 },
              end: { lat: 2.2854, lng: 50.531 },
            },
            {
              start: { lat: 2.2854, lng: 50.531 },
              end: { lat: 50.7558, lng: 127.6173 },
            },
            {
              start: { lat: 22.6762, lng: 139.6503 },
              end: { lat: -50.8688, lng: 151.2093 },
            },
          ]}
        />

        <div className="w-full h-full flex mt-50">
          <div className="relative z-10 max-w-5xl mx-auto px-6 -mt-10 text-center pointer-events-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white/90 mb-4 md:mb-6 leading-tight drop-shadow-sm px-4"
            >
              Nous développons des projets concrets et innovants
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed px-4"
            >
              MIC, c'est Matéis, Mathys, Inès et Clément. Ensemble, nous
              transformons des idées en solutions concrètes et sociales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to=""
                className="px-4 lg:px-8 py-4 text-sm md:text-base bg-[#233147] hover:bg-[#233147]/90 text-white 
                font-bold rounded-full transition-all flex items-center gap-2 group shadow-lg hover:shadow-xl"
              >
                Découvrir nos projets
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to=""
                className="px-4 lg:px-8 py-4 text-sm md:text-base bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-full transition-all hover:scale-105 border border-gray-200"
              >
                Rencontrer l'équipe
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6"
            >
              <SectionTitle colorClass="text-member1">
                Notre Processus de Développement
              </SectionTitle>
              <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed mt-4 md:mt-6 px-4">
                De l'analyse initiale à la mise en production, nous suivons une
                méthodologie rigoureuse pour transformer vos idées en solutions
                concrètes et performantes.
              </p>
            </motion.div>
          </div>

          <div className="grid px-4 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

      <section className="py-16 md:py-24 lg:py-32 bg-lemonade-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <SectionTitle colorClass="text-member2">Nos Valeurs</SectionTitle>
            <p className="text-slate-500 mt-3 md:mt-4 font-medium text-sm md:text-base">
              L'essence de MIC STUDIO capturée sur le vif.
            </p>
          </div>
          <div className="px-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {VALUES.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group perspective-[1000px]"
              >
                <motion.div
                  className="post-it bg-white p-6 md:p-7 lg:p-8 pt-8 md:pt-9 lg:pt-10 rounded-sm shadow-lg"
                  style={{
                    borderTop: `6px solid ${memberColors[val.color]}`,
                  }}
                  initial={{ rotate: idx % 2 === 0 ? -2 : 2 }}
                  whileHover={{ 
                    y: -10, 
                    rotate: 0,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div
                    className={`mb-4 md:mb-5 lg:mb-6 ${iconColorMap[val.color]} opacity-80 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 origin-bottom-left`}
                  >
                    {val.icon}
                  </div>

                  <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 tracking-tight">
                    {val.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                    {val.description}
                  </p>

                  <div className="mt-8 text-[10px] font-black uppercase tracking-widest opacity-20 transition-opacity duration-300 group-hover:opacity-40">
                    MIC Studio // Core Value
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectCarousel />

      <section className="py-16 md:py-24 lg:py-32 bg-lemonade-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <div className="space-y-8 md:space-y-10 lg:space-y-12">
              <SectionTitle colorClass="text-member4">
                Questions Fréquentes
              </SectionTitle>
              <div className="space-y-3 md:space-y-4">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-lemonade-bg rounded-2xl md:rounded-3xl border border-slate-200 overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() =>
                        setActiveFaq(activeFaq === idx ? null : idx)
                      }
                      className="w-full p-5 md:p-6 lg:p-8 flex justify-between items-center font-bold text-base md:text-lg lg:text-xl text-left select-none group"
                    >
                      <span className="group-hover:text-member1 transition-colors text-slate-800 tracking-tight pr-4">
                        {faq.q}
                      </span>
                      <motion.div
                        animate={{ rotate: activeFaq === idx ? 45 : 0 }}
                        className="flex-shrink-0"
                      >
                        <Plus
                          className={`w-5 h-5 md:w-6 md:h-6 ${activeFaq === idx ? "text-member1" : ""}`}
                        />
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
                          <div className="p-5 md:p-6 lg:p-8 pt-0 text-slate-600 leading-relaxed text-sm md:text-base lg:text-lg border-t border-slate-100">
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
              className="relative aspect-square md:block hidden"
            >
              <div className="absolute inset-0 bg-member1/5 rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] rotate-3 -z-10 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=2070&auto=format&fit=crop"
                alt="Studio FAQ"
                className=" w-full h-full object-cover rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[3rem] shadow-2xl"
              />
              <div className="absolute -bottom-6 md:-bottom-8 lg:-bottom-10 -right-6 md:-right-8 lg:-right-10 glass p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl border border-slate-200 hidden md:block bg-white/90">
                <p className="text-member1 font-bold text-base md:text-lg">
                  Prêt à discuter ?
                </p>
                <p className="text-slate-500 text-xs md:text-sm font-medium">
                  Nous répondons en moins de 24h.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </motion.div>
  );
};

export default Home;
