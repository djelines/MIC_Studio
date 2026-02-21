// ============================================
// IMPORTS
// ============================================
import React, { useEffect, useState } from "react";
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
// Composants personnalisés utilisés dans cette page :
import { DevelopmentStepCard } from "@/components/ui/DevelopmentStepCard"; // Utilisé dans la section "Processus de Développement"
import { RequirementsMap } from "@/components/ui/svg/RequirementsSvg";
import { SystemArchitecture } from "@/components/ui/svg/SystemArchitectureSvg";
import { CodeImplementation } from "@/components/ui/svg/CodeImplementationSvg";
import { DeploymentStatus } from "@/components/ui/svg/DeploymentSvg";
import { ProjectCarousel } from "@/components/ui/ProjectsCarousel"; // Utilisé ligne 225 - Carrousel des projets
import WorldMap from "@/components/ui/world-map"; // Utilisé ligne 59 - Carte du monde en arrière-plan du hero
import FinalCTA from "@/components/ui/FinalCTA"; // Utilisé ligne 302 - Call-to-action final
import { Cobe } from "@/components/ui/cobe-globe";

// ============================================
// COMPOSANT : SectionTitle
// Utilisé pour les titres de section avec style personnalisé
// ============================================
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

// ============================================
// COMPOSANT PRINCIPAL : Home
// Page d'accueil du site MIC Studio
// ============================================
const Home = () => {
  // État pour gérer l'ouverture/fermeture des questions FAQ
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Mapping des couleurs pour les icônes des membres
  const iconColorMap: Record<string, string> = {
    member1: "text-member1",
    member2: "text-member2",
    member3: "text-member3",
    member4: "text-member4",
  };

  // Mapping des couleurs hexadécimales pour les bordures des valeurs
  const memberColors: Record<string, string> = {
    member1: "#746ac8",
    member2: "#49b4a7",
    member3: "#4992f1",
    member4: "#233147",
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px correspond au breakpoint 'md' de Tailwind
    };

    // Vérification initiale au chargement
    checkScreenSize();

    // Écouteur d'événement si l'utilisateur redimensionne sa fenêtre
    window.addEventListener("resize", checkScreenSize);
    
    // Nettoyage de l'écouteur
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-0"
    >
      {/* ============================================
          SECTION 1 : HERO / BANNIÈRE PRINCIPALE
          Section pleine écran avec carte du monde en arrière-plan
          ============================================ */}
      <section className={`relative h-screen bg-black -mt-20 w-full flex items-center justify-center overflow-hidden flex-col [box-shadow:0_50px_90px_-15px_rgba(0,0,0,0.5)]`}>
        {/* Composant WorldMap : Carte du monde interactive avec points de connexion */}
        

        {isMobile ? 
          <Cobe className="!absolute"/>
        : 
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
      />}

        {/* Contenu du hero : Titre, description et boutons d'action */}
        <div className={`w-full h-full flex ${isMobile ? "mt-70" : "mt-50"}`}>
          <div className="relative z-10 max-w-5xl mx-auto px-6 -mt-10 text-center pointer-events-auto">
            {/* Titre principal animé */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white/90 mb-4 md:mb-6 leading-tight drop-shadow-sm px-4"
            >
              Nous développons des projets concrets et innovants
            </motion.h1>

            {/* Description de l'équipe MIC */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed px-4"
            >
              MIC, c'est Matéis, Mathys, Inès et Clément. Ensemble, nous
              transformons des idées en solutions concrètes et sociales.
            </motion.p>

            {/* Boutons d'action : Navigation vers réalisations et équipe */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/realisations"
                className="px-4 lg:px-8 py-3 md:py-4 text-xs md:text-base bg-[#233147] hover:bg-[#233147]/90 text-white 
                font-bold rounded-full transition-all flex items-center gap-2 group shadow-lg hover:shadow-xl"
              >
                Découvrir nos projets
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/equipe"
                className="px-4 lg:px-8 py-3 md:py-4 text-xs md:text-base bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-full transition-all hover:scale-105 border border-gray-200"
              >
                Rencontrer l'équipe
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 2 : PROCESSUS DE DÉVELOPPEMENT
          Présentation des 4 étapes du développement
          ============================================ */}

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* En-tête de section : Titre et description */}
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

          {/* Grille des cartes de processus : Utilise le composant DevelopmentStepCard */}
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

      {/* ============================================
          SECTION 3 : NOS VALEURS
          Affichage des valeurs de l'entreprise sous forme de post-it
          ============================================ */}

      <section className="py-16 md:py-24 lg:py-32 bg-lemonade-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* En-tête de section : Titre et sous-titre */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <SectionTitle colorClass="text-member2">Nos Valeurs</SectionTitle>
            <p className="text-slate-500 mt-3 md:mt-4 font-medium text-sm md:text-base">
              L'essence de MIC STUDIO capturée sur le vif.
            </p>
          </div>
          {/* Grille des valeurs : Cartes post-it avec effet 3D au survol */}
          <div className="px-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {/* Carte post-it individuelle pour chaque valeur */}
            {VALUES.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group perspective-[1000px]"
              >
                {/* Carte post-it avec animation 3D au survol */}
                <motion.div
                  className="post-it bg-white p-4 md:p-7 lg:p-8 pt-4 md:pt-9 lg:pt-10 rounded-sm shadow-lg"
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
                  {/* Icône de la valeur */}
                  <div
                    className={`mb-4 md:mb-5 lg:mb-6 ${iconColorMap[val.color]} opacity-80 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 origin-bottom-left`}
                  >
                    {val.icon}
                  </div>

                  {/* Titre de la valeur */}
                  <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 tracking-tight">
                    {val.title}
                  </h3>
                  {/* Description de la valeur */}
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                    {val.description}
                  </p>

                  {/* Badge en bas de carte */}
                  <div className="mt-8 text-[10px] font-black uppercase tracking-widest opacity-20 transition-opacity duration-300 group-hover:opacity-40">
                    MIC Studio // Core Value
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4 : CARROUSEL DE PROJETS
          Composant ProjectCarousel : Affiche les projets réalisés
          ============================================ */}
      <ProjectCarousel />

      {/* ============================================
          SECTION 5 : QUESTIONS FRÉQUENTES (FAQ)
          Accordéon interactif avec questions/réponses
          ============================================ */}

      <section className="py-16 md:py-24 lg:py-32 bg-lemonade-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            {/* Colonne gauche : Liste des questions FAQ */}
            <div className="space-y-8 md:space-y-10 lg:space-y-12">
              <SectionTitle colorClass="text-member4">
                Questions Fréquentes
              </SectionTitle>
              {/* Liste des questions avec accordéon */}
              <div className="space-y-3 md:space-y-4">
                {/* Carte FAQ individuelle avec accordéon */}
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-lemonade-bg rounded-2xl md:rounded-3xl border border-slate-200 overflow-hidden transition-all shadow-sm"
                  >
                    {/* Bouton pour ouvrir/fermer la réponse */}
                    <button
                      onClick={() =>
                        setActiveFaq(activeFaq === idx ? null : idx)
                      }
                      className="w-full p-5 md:p-6 lg:p-8 flex justify-between items-center font-bold text-base md:text-lg lg:text-xl text-left select-none group"
                    >
                      {/* Question */}
                      <span className="group-hover:text-member1 transition-colors text-slate-800 tracking-tight pr-4">
                        {faq.q}
                      </span>
                      {/* Icône Plus qui tourne à 45° quand ouvert */}
                      <motion.div
                        animate={{ rotate: activeFaq === idx ? 45 : 0 }}
                        className="flex-shrink-0"
                      >
                        <Plus
                          className={`w-5 h-5 md:w-6 md:h-6 ${activeFaq === idx ? "text-member1" : ""}`}
                        />
                      </motion.div>
                    </button>
                    {/* Réponse animée avec AnimatePresence */}
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

            {/* Colonne droite : Image décorative avec badge de contact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:block hidden"
            >
              {/* Effet de flou en arrière-plan */}
              <div className="absolute inset-0 bg-member1/5 rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] rotate-3 -z-10 blur-2xl" />
              {/* Image du studio */}
              <img
                src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=2070&auto=format&fit=crop"
                alt="Studio FAQ"
                className=" w-full h-full object-cover rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[3rem] shadow-2xl"
              />
              {/* Badge de contact flottant */}
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

      {/* ============================================
          SECTION 6 : CALL-TO-ACTION FINAL
          Composant FinalCTA : Invitation à contacter l'équipe
          ============================================ */}
      <FinalCTA />
    </motion.div>
  );
};

export default Home;
