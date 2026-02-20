import React from 'react';

export const CodeImplementation: React.FC = () => {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      
      {/* IDE Window */}
      <g transform="translate(50, 60)">
         <rect x="0" y="0" width="300" height="240" rx="8" fill="#ffffff" stroke="#475569" strokeWidth="2" className="drop-shadow-sm" />
         
         {/* Tab Bar */}
         <rect x="0" y="0" width="300" height="30" rx="8" fill="none" stroke="none" />
         <path d="M 0 30 H 300" stroke="#cbd5e1" strokeWidth="1" />
         
         {/* Window Controls */}
         <circle cx="15" cy="15" r="3" fill="#cbd5e1" />
         <circle cx="25" cy="15" r="3" fill="#cbd5e1" />
         <circle cx="35" cy="15" r="3" fill="#cbd5e1" />
         
         {/* Active Tab */}
         <path d="M 60 30 V 10 C 60 7, 63 5, 66 5 H 134 C 137 5, 140 7, 140 10 V 30" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
         <rect x="61" y="29" width="78" height="2" fill="#f1f5f9" />
         <text x="100" y="20" textAnchor="middle" className="fill-slate-700 text-[9px] font-mono font-bold">api.ts</text>

         {/* Code Content */}
         <g transform="translate(20, 50)">
            {/* Line Numbers - Darker */}
            <g className="fill-slate-400 text-[9px] font-mono">
               <text x="0" y="10">01</text>
               <text x="0" y="30">02</text>
               <text x="0" y="50">03</text>
               {/* Appearing line numbers */}
               <text x="0" y="70" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100">04</text>
               <text x="0" y="90" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-300">05</text>
               <text x="0" y="110" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-500">06</text>
            </g>

            {/* Static Code Lines - Darker Gray Blocks */}
            <g transform="translate(25, 0)">
               <rect x="0" y="4" width="30" height="6" rx="1" fill="#94a3b8" /> 
               <rect x="35" y="4" width="50" height="6" rx="1" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.5" />
               
               <rect x="0" y="24" width="40" height="6" rx="1" fill="#94a3b8" />
               <rect x="45" y="24" width="60" height="6" rx="1" fill="#e2e8f0" />
               
               <rect x="0" y="44" width="25" height="6" rx="1" fill="#94a3b8" />
               <rect x="30" y="44" width="80" height="6" rx="1" fill="#e2e8f0" />

               {/* New Lines appearing on hover (The "Writing" effect) */}
               <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100">
                 <rect x="20" y="64" width="30" height="6" rx="1" fill="#3ECF8E" />
                 <rect x="55" y="64" width="40" height="6" rx="1" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.5" />
               </g>

               <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-300">
                  <rect x="20" y="84" width="100" height="6" rx="1" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.5" />
               </g>
               
               <text x="0" y="108" className="fill-slate-700 text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-500">{'}'}</text>
            </g>
         </g>
      </g>

      {/* TS Logo - Static */}
      <rect x="290" y="200" width="24" height="24" rx="4" fill="#ffffff" stroke="#475569" strokeWidth="1" />
      <text x="302" y="216" textAnchor="middle" className="fill-blue-600 text-[10px] font-bold font-sans">TS</text>

      {/* Number 03 Watermark - Visible */}
      <text x="40" y="380" textAnchor="start" className="fill-slate-500 text-8xl font-bold font-mono opacity-80">03</text>

    </svg>
  );
};