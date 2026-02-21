import React from 'react';

export const RequirementsMap: React.FC = () => {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="stripes" patternUnits="userSpaceOnUse" width="4" height="4">
          <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="#94a3b8" strokeWidth="1" />
        </pattern>
      </defs>

      <g transform="translate(60, 60)">
         <rect x="0" y="0" width="280" height="200" rx="8" fill="#f8fafc" stroke="#475569" strokeWidth="2" />
         
         <rect x="20" y="20" width="80" height="6" rx="3" fill="#cbd5e1" />
         <g transform="translate(220, 23)">
             <circle cx="0" cy="0" r="3" stroke="#64748b" strokeWidth="1.5" />
             <circle cx="15" cy="0" r="3" stroke="#64748b" strokeWidth="1.5" />
             <circle cx="30" cy="0" r="3" stroke="#64748b" strokeWidth="1.5" />
         </g>

         <line x1="100" y1="50" x2="100" y2="180" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
         <line x1="180" y1="50" x2="180" y2="180" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
         <line x1="260" y1="50" x2="260" y2="180" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />

         <g transform="translate(20, 60)">
            <text x="0" y="8" className="fill-slate-600 text-[9px] font-mono tracking-wider font-bold">AUDIT</text>
            <rect x="0" y="15" width="80" height="8" rx="2" stroke="#94a3b8" strokeWidth="1" fill="none" />
            <rect x="0" y="15" width="0" height="8" rx="2" fill="url(#stripes)" stroke="#64748b" strokeWidth="1" 
                  className="transition-all duration-700 ease-out group-hover:w-[80px]" />
            
            <text x="80" y="48" className="fill-slate-600 text-[9px] font-mono tracking-wider font-bold">STRATEGY</text>
            <rect x="80" y="55" width="80" height="8" rx="2" stroke="#94a3b8" strokeWidth="1" fill="none" />
            <rect x="80" y="55" width="0" height="8" rx="2" fill="#e2e8f0" stroke="#64748b" strokeWidth="1" 
                  className="transition-all duration-700 ease-out delay-500 group-hover:w-[80px]" />

            <text x="160" y="88" className="fill-slate-600 text-[9px] font-mono tracking-wider font-bold">UX/UI</text>
            <rect x="160" y="95" width="80" height="8" rx="2" stroke="#94a3b8" strokeWidth="1" fill="none" />
            <rect x="160" y="95" width="0" height="8" rx="2" stroke="#3ECF8E" strokeWidth="1" fill="#3ECF8E" fillOpacity="0.4"
                  className="transition-all duration-700 ease-out delay-[1000ms] group-hover:w-[80px]" />
         </g>
      </g>

      <text x="340" y="360" textAnchor="end" className="fill-slate-500 text-8xl font-bold font-mono opacity-80">01</text>
    </svg>
  );
};