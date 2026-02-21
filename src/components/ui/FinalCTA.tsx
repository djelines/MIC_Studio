// ============================================
// IMPORTS
// ============================================
import React from 'react'
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight,} from "lucide-react";
import { Link } from "react-router-dom";

// ============================================
// COMPOSANT : FinalCTA
// Call-to-action final avec fond d'étoiles animées
// Utilisé en fin de page pour inviter au contact
// ============================================
const FinalCTA = () => {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
        {/* Fond animé : Étoiles avec effet de gravité */}
        <GravityStarsBackground className="absolute inset-0 " />

        {/* Contenu principal : Message et boutons d'action */}
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Titre principal */}
            <h2 className="text-3xl md:text-5xl font-black leading-tight text-slate-900">
              On discute de votre projet ?
            </h2>
            {/* Description */}
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Que ce soit pour un prototype, une refonte ou une idée à
              concrétiser, on aime les défis qui ont du sens.
            </p>
            {/* Boutons d'action : Email et lien vers l'équipe */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              {/* Bouton principal : Envoyer un email */}
              <a
                href="mailto:contact@mic-studio.fr"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors group"
              >
                Envoyer un message
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              {/* Bouton secondaire : Lien vers la page équipe */}
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
  )
}

export default FinalCTA