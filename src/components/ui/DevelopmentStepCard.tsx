// ============================================
// IMPORTS
// ============================================
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LucideIcon } from "lucide-react";
import { RequirementsMap } from "./svg/RequirementsSvg";

// ============================================
// INTERFACE : DevelopmentStepCardProps
// Props du composant DevelopmentStepCard
// ============================================
interface DevelopmentStepCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  idx: number;
  svg: any;
  span?: "col-span-1" | "col-span-2" | "row-span-1" | "row-span-2";
}

// ============================================
// COMPOSANT : DevelopmentStepCard
// Carte représentant une étape du processus de développement
// Utilisé dans la section "Processus de Développement" de la page d'accueil
// ============================================
export const DevelopmentStepCard = ({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  idx,
  svg,
  span = "col-span-1"
}: DevelopmentStepCardProps) => {
  // Référence pour détecter si la carte est visible à l'écran
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      className={`relative ${span} bg-indigo-50 group rounded-2xl p-4 md:p-8 border border-gray-200 shadow-sm overflow-hidden`}
    >
      <div className="relative z-10 h-full flex flex-col">
        {/* En-tête : Icône et titre */}
        <div className="flex items-center gap-3">
            <Icon className="w-4 h-4" />

            <h3 className="text-lg md:text-xl font-bold tracking-tight text-gray-900">
            {title}
            </h3>
        </div>

        {/* Description de l'étape */}
        <p className="text-gray-600 leading-relaxed md:text-md text-xs md:text-sm flex-grow">
          {description}
        </p>
        
        {/* SVG illustratif en bas de la carte */}
        <div className="mt-auto flex items-center justify-center">
            {svg}
        </div>
      </div>
    </motion.div>
  );
};
