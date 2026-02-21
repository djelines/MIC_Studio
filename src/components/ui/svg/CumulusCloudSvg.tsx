import React from 'react';

export const CumulusCloud = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 960 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id="cloud-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="20" result="blur" />
          <feOffset dx="0" dy="15" result="offsetBlur" />
          <feFlood floodColor="rgba(255, 255, 255, 0.3)" result="floodColor" />
          <feComposite in="floodColor" in2="offsetBlur" operator="in" result="compositeShadow" />
          <feMerge>
            <feMergeNode in="compositeShadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
           <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
           <feOffset dx="0" dy="10" color="rgba(0,0,0,0.1)"/>
           <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
      </defs>
      
      <g filter="url(#soft-shadow)">
      <path
        d="M825.5 283.5C825.5 354.5 768 412 697 412H246C157.5 412 86 340.5 86 252C86 175.5 140.5 111.5 213.5 95C229 55 268.5 26 314.5 26C344.5 26 372 38.5 391.5 58.5C413.5 34.5 446 19 482 19C542.5 19 593.5 58.5 612.5 113.5C634 101.5 659 95 685 95C762.5 95 825.5 158 825.5 235.5V283.5Z"
        fill="white"
      />

      <path
        d="M246 412C157.5 412 86 340.5 86 252C86 234.5 89.5 217.5 96 202C115 235 150.5 257.5 191.5 257.5C220.5 257.5 247 246 266.5 227.5C281 253 308.5 270.5 340 270.5C349.5 270.5 358.5 269 367 266C382.5 302.5 418.5 328 460.5 328C502 328 537.5 303.5 553.5 268C568.5 293 595.5 310 626.5 310C642.5 310 657.5 305.5 670.5 297.5C678.5 316 697 329 718.5 329C740 329 758.5 316 766.5 297.5C799.5 308.5 825.5 337.5 825.5 372.5C825.5 375 825.5 377.5 825 379.5V283.5C825.5 268.5 821.5 254 814.5 241C821.5 253.5 825.5 268 825.5 283.5C825.5 354.5 768 412 697 412H246Z"
        fill="#F1F5F9"
      />
      <path 
        d="M697 412H246C188.5 412 138.5 380 113 332.5C141.5 369 189.5 392.5 244 392.5H699C737.5 392.5 772 379.5 798.5 357.5C815.5 373.5 825.5 392.5 825.5 412H697Z"
        fill="#E2E8F0"
        opacity="0.6"
      />

      <path
        d="M314.5 26C339 26 362 34.5 380 48.5C363 34.5 340 26 314.5 26ZM482 19C531 19 573.5 46.5 597 87C575.5 46.5 532 19 482 19ZM685 95C706.5 95 726.5 101 743.5 111.5C726.5 101 706.5 95 685 95ZM213.5 95C220 95 226 96 232 97.5C226 96 220 95 213.5 95Z"
        fill="white"
        opacity="0.8"
      />
      </g>
    </svg>
  );
};