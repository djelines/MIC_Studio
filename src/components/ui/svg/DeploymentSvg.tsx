import React from 'react';

export const DeploymentStatus: React.FC = () => {
  return (
    <svg viewBox="0 0 400 400" className="max-w-50 lg:w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      
      <defs>
        <linearGradient id="matterTransfer" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3ECF8E" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3ECF8E" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g transform="translate(200, 320)">
         <ellipse cx="0" cy="40" rx="140" ry="40" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
         <path d="M -140 40 A 140 40 0 0 1 140 40" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
         <ellipse cx="0" cy="40" rx="80" ry="20" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2 4" />
         <line x1="0" y1="0" x2="0" y2="80" stroke="#94a3b8" strokeWidth="1.5" />
         
         <circle cx="-60" cy="50" r="2" fill="#475569" />
         <circle cx="60" cy="30" r="2" fill="#475569" />
         <circle cx="0" cy="60" r="2" fill="#475569" />
         
         <line x1="-60" y1="50" x2="-60" y2="-120" stroke="#cbd5e1" strokeDasharray="2 2" strokeWidth="1.5" />
         <line x1="60" y1="30" x2="60" y2="-120" stroke="#cbd5e1" strokeDasharray="2 2" strokeWidth="1.5" />
      </g>

      <g transform="translate(200, 140)">
         <line x1="0" y1="0" x2="0" y2="180" stroke="#cbd5e1" strokeWidth="1.5" />
         
         <path d="M -15 0 L 15 0 L 5 180 L -5 180 Z" fill="url(#matterTransfer)" 
               className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
         
         <circle cx="0" cy="40" r="2" fill="#3ECF8E" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <animate attributeName="cy" from="0" to="180" dur="1s" repeatCount="indefinite" />
         </circle>
         <circle cx="0" cy="80" r="1.5" fill="#3ECF8E" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
             <animate attributeName="cy" from="0" to="180" dur="1.5s" repeatCount="indefinite" />
         </circle>
      </g>

      <g transform="translate(130, 80)">
         <path d="M 25 50 
                  C 10 50, 0 40, 0 30 
                  C 0 15, 15 5, 30 10 
                  C 35 -5, 55 -10, 70 5 
                  C 85 -5, 105 -5, 115 15 
                  C 130 15, 140 30, 130 45 
                  C 125 50, 120 50, 115 50 
                  Z" 
               fill="#ffffff" stroke="#475569" strokeWidth="2" />
         
         <path d="M 30 35 H 100" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 4" fill="none" />
         
         <circle cx="140" cy="20" r="8" fill="#ffffff" stroke="#64748b" strokeWidth="1.5" />
      </g>

      <g transform="translate(260, 140)">
         <rect x="0" y="0" width="30" height="50" rx="2" fill="#ffffff" stroke="#475569" strokeWidth="2" />
         <line x1="5" y1="12" x2="25" y2="12" stroke="#94a3b8" />
         <line x1="5" y1="25" x2="25" y2="25" stroke="#94a3b8" />
         <line x1="5" y1="38" x2="25" y2="38" stroke="#94a3b8" />
         <circle cx="25" cy="6" r="1.5" fill="#3ECF8E" />
      </g>

      <g transform="translate(40, 240)">
         <rect x="0" y="0" width="100" height="40" rx="4" fill="#ffffff" stroke="#64748b" strokeWidth="1.5" />
         <text x="10" y="13" className="fill-slate-500 text-[8px] font-mono font-bold">UPTIME</text>
         <text x="10" y="33" className="fill-slate-800 text-xl font-bold font-sans tracking-tight">99.9%</text>
         <circle cx="85" cy="20" r="2.5" fill="#3ECF8E">
            <animate attributeName="opacity" values="1;0.2;1" dur="3s" repeatCount="indefinite" />
         </circle>
      </g>

      <text x="120" y="150" textAnchor="end" className="fill-slate-500 text-8xl font-bold font-mono opacity-80">04</text>

    </svg>
  );
};