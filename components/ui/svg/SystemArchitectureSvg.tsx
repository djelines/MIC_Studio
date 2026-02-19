import React from 'react';

export const SystemArchitecture: React.FC = () => {
  // Generate a grid of background dots
  const dots = [];
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
       dots.push(
          <circle 
            key={`${i}-${j}`} 
            cx={20 + i * 32} 
            cy={20 + j * 32} 
            r={1} 
            fill="#cbd5e1" 
          />
        );
    }
  }

  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      

      {/* Paths for Animation & Lines */}
      <defs>
        {/* Path 1: DB (Top) to Core */}
        <path id="pathDB" d="M 200 120 L 200 165" />
        {/* Path 2: API (Left) to Core */}
        <path id="pathAPI" d="M 125 240 L 175 215" /> 
        {/* Path 3: WEB (Right) to Core */}
        <path id="pathWEB" d="M 275 240 L 225 215" />
      </defs>

      {/* Visible Connections (Wires) - Darker Gray */}
      <use href="#pathDB" stroke="#475569" strokeWidth="2" />
      <use href="#pathAPI" stroke="#475569" strokeWidth="2" />
      <use href="#pathWEB" stroke="#475569" strokeWidth="2" />

      {/* Central Hub */}
      <g transform="translate(200, 200)">
        {/* Rotating outer ring - Darker */}
        <circle cx="0" cy="0" r="50" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
        {/* Main Core - Strong Outline */}
        <circle cx="0" cy="0" r="35" fill="#ffffff" stroke="#334155" strokeWidth="2" />
        {/* Inner glow - Spacious for text */}
        <circle cx="0" cy="0" r="20" stroke="#3ECF8E" strokeWidth="2" opacity="0.8" />
        <text x="0" y="3" textAnchor="middle" className="fill-slate-700 text-[10px] font-mono font-bold tracking-widest">CORE</text>
      </g>

      {/* Node 1: Database (Top) */}
      <g transform="translate(200, 95)">
         {/* Main Shape - Stronger */}
         <path d="M -30 -15 C -30 -22, 30 -22, 30 -15 V 20 C 30 27, -30 27, -30 20 Z" fill="#f8fafc" stroke="#475569" strokeWidth="2" />
         <path d="M -30 -15 C -30 -8, 30 -8, 30 -15" stroke="#475569" strokeWidth="2" fill="none" />
         <path d="M -30 5 C -30 12, 30 12, 30 5" stroke="#94a3b8" strokeWidth="1" fill="none" />
         
         {/* Label Tag */}
         <rect x="35" y="-10" width="24" height="12" rx="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
         <text x="47" y="-1" textAnchor="middle" className="fill-slate-600 text-[8px] font-mono font-bold">DB</text>
      </g>

      {/* Node 2: API Gateway (Left) */}
      <g transform="translate(100, 260)">
         {/* Main Box - Stronger */}
         <rect x="-30" y="-30" width="60" height="60" rx="6" fill="#f8fafc" stroke="#475569" strokeWidth="2" />
         {/* Icon */}
         <path d="M -12 0 H 12 M 0 -12 V 12" stroke="#64748b" strokeWidth="2" />
         
         {/* Label Tag */}
         <rect x="-30" y="40" width="60" height="14" rx="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
         <text x="0" y="50" textAnchor="middle" className="fill-slate-600 text-[9px] font-mono tracking-wider font-bold">API</text>
      </g>

      {/* Node 3: WEB (Right) */}
      <g transform="translate(300, 260)">
         {/* Main Box - Stronger */}
         <rect x="-30" y="-30" width="60" height="60" rx="6" fill="#f8fafc" stroke="#475569" strokeWidth="2" />
         {/* Icon: Browser Window */}
         <rect x="-18" y="-15" width="36" height="30" rx="2" stroke="#64748b" strokeWidth="1.5" fill="none" />
         <line x1="-18" y1="-5" x2="18" y2="-5" stroke="#64748b" strokeWidth="1.5" />
         
         {/* Label Tag */}
         <rect x="-30" y="40" width="60" height="14" rx="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
         <text x="0" y="50" textAnchor="middle" className="fill-slate-600 text-[9px] font-mono tracking-wider font-bold">WEB</text>
      </g>

      {/* Data Flow Particles - Visible ONLY on hover with LOOP animation */}
      <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          
          {/* DB <-> CORE Loop */}
          <circle r="3" fill="#3ECF8E" stroke="#166534" strokeWidth="0.5">
            <animateMotion dur="2s" repeatCount="indefinite" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear">
               <mpath href="#pathDB" />
            </animateMotion>
          </circle>
          
          {/* API <-> CORE Loop */}
          <circle r="3" fill="#3ECF8E" stroke="#166534" strokeWidth="0.5">
            <animateMotion dur="2s" repeatCount="indefinite" begin="0.2s" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear">
               <mpath href="#pathAPI" />
            </animateMotion>
          </circle>

          {/* WEB <-> CORE Loop */}
          <circle r="3" fill="#3ECF8E" stroke="#166534" strokeWidth="0.5">
            <animateMotion dur="2s" repeatCount="indefinite" begin="0.4s" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear">
               <mpath href="#pathWEB" />
            </animateMotion>
          </circle>

          {/* Secondary Particles (Slate) for complexity */}
           <circle r="2" fill="#64748b">
            <animateMotion dur="2s" repeatCount="indefinite" begin="1s" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear">
               <mpath href="#pathDB" />
            </animateMotion>
          </circle>
           <circle r="2" fill="#64748b">
            <animateMotion dur="2s" repeatCount="indefinite" begin="1.2s" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear">
               <mpath href="#pathAPI" />
            </animateMotion>
          </circle>
           <circle r="2" fill="#64748b">
            <animateMotion dur="2s" repeatCount="indefinite" begin="1.4s" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear">
               <mpath href="#pathWEB" />
            </animateMotion>
          </circle>
      </g>

      {/* Number 02 Watermark - Visible */}
      <text x="30" y="130" textAnchor="start" className="fill-slate-200 text-8xl font-bold font-mono opacity-80">02</text>
    </svg>
  );
};