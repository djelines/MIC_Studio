"use client";

// ============================================
// IMPORTS
// ============================================
import { useRef, useCallback, useMemo } from "react";
import { motion } from "motion/react";

// ============================================
// INTERFACE : MapProps
// Props du composant WorldMap
// ============================================
interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

// ============================================
// COMPOSANT : WorldMap
// Carte du monde interactive avec connexions animées
// Utilisé dans le hero de la page d'accueil
// ============================================
export default function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  // Fonction pour projeter des coordonnées GPS (lat/lng) en coordonnées SVG
  const projectPoint = useCallback((lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  }, []);

  // Fonction pour créer un chemin courbe entre deux points
  const createCurvedPath = useCallback(
    (start: { x: number; y: number }, end: { x: number; y: number }) => {
      const midX = (start.x + end.x) / 2;
      const midY = Math.min(start.y, end.y) - 50;
      return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
    },
    []
  );

  // Mémorisation des points projetés pour optimiser les performances
  const mappedDots = useMemo(() => {
    return dots.map((dot) => ({
      ...dot,
      startPoint: projectPoint(dot.start.lat, dot.start.lng),
      endPoint: projectPoint(dot.end.lat, dot.end.lng),
    }));
  }, [dots, projectPoint]);

  return (
    <div className=" w-full h-full aspect-[2/1] bg-black absolute font-sans">
      {/* Image de fond : Carte du monde statique */}
      <img
        src="/static/worldmap.svg"
        className="hidden md:block md:block h-full w-full pointer-events-none select-none"
        alt="world map"
        draggable={false}
      />
      {/* SVG pour les connexions animées */}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="hidden md:block w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {/* Définition du dégradé pour les lignes de connexion */}
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Lignes de connexion animées entre les points */}
        {mappedDots.map((dot, i) => (
          <g key={`path-group-${i}`}>
            <motion.path
              d={createCurvedPath(dot.startPoint, dot.endPoint)}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1,
                delay: 0.5 * i,
                ease: "easeOut",
              }}
            />
          </g>
        ))}

        {/* Points de départ et d'arrivée avec animation de pulsation */}
        {mappedDots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            {/* Point de départ */}
            <g>
              <circle cx={dot.startPoint.x} cy={dot.startPoint.y} r="2" fill={lineColor} />
              <circle cx={dot.startPoint.x} cy={dot.startPoint.y} r="2" fill={lineColor} opacity="0.5">
                <animate attributeName="r" from="2" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
              </circle>
            </g>
            {/* Point d'arrivée */}
            <g>
              <circle cx={dot.endPoint.x} cy={dot.endPoint.y} r="2" fill={lineColor} />
              <circle cx={dot.endPoint.x} cy={dot.endPoint.y} r="2" fill={lineColor} opacity="0.5">
                <animate attributeName="r" from="2" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
              </circle>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}