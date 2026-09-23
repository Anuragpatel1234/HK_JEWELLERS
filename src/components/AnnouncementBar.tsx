import React from 'react';
import { OrnamentalFlourish } from './OrnamentalDivider';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside 
      aria-label="Announcement"
      className="bg-[#4A0712] text-[#FFF7ED] h-9 sm:h-10 flex items-center justify-center px-3 relative z-30 transition-all duration-300"
    >
      <div className="flex items-center justify-center gap-2 sm:gap-3 text-center">
        <OrnamentalFlourish flip className="w-5 sm:w-8 h-2 sm:h-2.5 opacity-90" color="#D8B477" />
        <span className="font-sans text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-[0.16em] sm:tracking-[0.22em] text-[#FFF7ED] uppercase whitespace-nowrap">
          Free Shipping on all Prepaid Orders
        </span>
        <OrnamentalFlourish className="w-5 sm:w-8 h-2 sm:h-2.5 opacity-90" color="#D8B477" />
      </div>
    </aside>
  );
};
