import React from 'react';

interface DivineIdolsBannerProps {
  onExploreDivine: () => void;
}

export const DivineIdolsBanner: React.FC<DivineIdolsBannerProps> = ({ onExploreDivine }) => {
  return (
    <section className="w-full bg-[#4A0712] overflow-hidden my-6 sm:my-8 relative border-y border-[#B88A3B]/40 shadow-lg">
      
      {/* Background Subtle Damask/Floral Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.10] pointer-events-none bg-repeat"
        style={{
          backgroundImage: `radial-gradient(circle at center, #D8B477 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Warm maroon-to-dark gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3A0510] via-[#4A0712] to-[#3A0510] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-7 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 relative z-10">
        
        {/* Left: Ultra-Sharp Antique Gold Lord Ganesha Idol */}
        <div className="w-full md:w-5/12 flex items-center justify-center">
          <div className="relative group max-w-[260px] sm:max-w-[320px]">
            {/* Radial gold halo glow */}
            <div className="absolute inset-0 bg-[#D8B477]/12 rounded-full filter blur-2xl transform scale-110 pointer-events-none" />
            <img
              src="/assets/divine/ganesha_highres.jpg"
              alt="Lord Ganesha Divine Idol in 22K Antique Gold on Lotus Pedestal"
              className="w-full h-auto max-h-[260px] sm:max-h-[300px] object-contain rounded-xl shadow-[0_10px_36px_rgba(0,0,0,0.5)] border border-[#B88A3B]/35 transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: Crisp Gold Typography & CTA */}
        <div className="w-full md:w-7/12 text-center md:text-left space-y-3 sm:space-y-4">
          <span className="font-serif italic text-[11px] sm:text-xs tracking-[0.22em] text-[#D8B477] uppercase font-semibold block">
            Sacred Devotional Collection
          </span>

          <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[48px] text-[#FDF5E6] font-medium tracking-wide leading-tight">
            Divine Idols
          </h2>

          <p className="font-sans text-[13px] sm:text-sm md:text-[15px] text-[#FAF3EB]/80 max-w-lg leading-relaxed">
            Sacred idols, crafted to fill your space with love, devotion &amp; timeless blessings.
          </p>

          <div className="pt-3">
            <button
              onClick={onExploreDivine}
              className="inline-flex items-center justify-center bg-transparent hover:bg-[#FDF5E6] text-[#FFF7ED] hover:text-[#4A0712] font-sans text-[10.5px] sm:text-xs font-semibold tracking-[0.2em] py-3 px-7 sm:px-9 rounded-[3px] border-2 border-[#D8B477]/70 hover:border-[#FDF5E6] shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_22px_rgba(184,138,59,0.3)] transition-all duration-300 active:scale-[0.98] uppercase cursor-pointer"
            >
              Explore Divine Collection
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
