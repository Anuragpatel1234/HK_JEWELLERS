import React from 'react';
import { OrnamentalFlourish } from './OrnamentalDivider';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7EBDD] border-b border-[#E9D1B5]/60">
      {/* Full-Bleed Palace/Haveli Architectural Background (matching UI exactly) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero/palace_backdrop.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-[0.35]"
        />
        {/* Additional warm overlay to blend with cream theme */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#F7EBDD]/40 via-transparent to-[#F7EBDD]/70" />
      </div>

      {/* Decorative gold border strip at bottom (matching UI) */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D8B477]/50 to-transparent z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative w-full flex flex-col md:flex-row items-center justify-between min-h-[340px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[520px] px-4 sm:px-8 py-6 sm:py-8 overflow-hidden">

          {/* Left Side: Ultra-High-Resolution Jewellery Mannequin Showcase */}
          <div className="w-full md:w-[48%] flex items-center justify-center relative z-10 py-2 sm:py-4 animate-slide-in-left">
            <div className="relative group max-w-[340px] sm:max-w-[420px] md:max-w-[440px]">
              {/* Soft Warm Radial Glow */}
              <div className="absolute inset-0 bg-[#B88A3B]/12 rounded-2xl filter blur-3xl transform scale-90 pointer-events-none" />
              
              <img
                src="/assets/hero/hero_highres.jpg"
                alt="HK Jewellers A Legacy You Can Wear - Opulent 22K Antique Gold Haram with Zambian Emeralds on Royal Velvet Bust"
                className="w-full h-auto max-h-[400px] sm:max-h-[460px] object-contain rounded-xl shadow-[0_16px_48px_rgba(42,22,18,0.28)] border border-[#B88A3B]/30 transition-transform duration-700 group-hover:scale-[1.015] animate-gentle-float"
                loading="eager"
              />
            </div>
          </div>

          {/* Right Side: Razor-Sharp Editorial Luxury Typography & CTA */}
          <div className="w-full md:w-[52%] flex flex-col items-center md:items-start text-center md:text-left z-10 mt-5 md:mt-0 md:pl-8 lg:pl-14 animate-slide-in-right">
            <span className="font-serif italic text-[11px] sm:text-xs tracking-[0.28em] text-[#B88A3B] uppercase font-semibold mb-2 block">
              Royal Heritage Haute Joaillerie
            </span>

            <h1 className="font-serif text-[38px] sm:text-[48px] md:text-[56px] lg:text-[66px] font-medium text-[#2A1612] leading-[1.06] tracking-tight">
              A Legacy <br />
              <span className="italic font-normal">You Can</span> <br />
              Wear
            </h1>

            {/* Delicate Gold Flourish Divider */}
            <div className="flex items-center gap-2 my-3 sm:my-5">
              <OrnamentalFlourish flip className="w-8 sm:w-12 h-2.5 sm:h-3" color="#B88A3B" />
              <span className="w-10 sm:w-14 h-[1px] bg-[#B88A3B]/40" />
              <OrnamentalFlourish className="w-8 sm:w-12 h-2.5 sm:h-3" color="#B88A3B" />
            </div>

            <p className="font-sans text-[13px] sm:text-sm md:text-[15px] text-[#4A0712]/80 max-w-sm sm:max-w-md leading-relaxed font-normal">
              Exquisite craftsmanship and precious stones create a timeless allure of heritage &amp; expression.
            </p>

            {/* Interactive Luxury CTA Button */}
            <div className="mt-6 sm:mt-7">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] font-sans text-[11px] sm:text-xs font-semibold tracking-[0.22em] py-3 sm:py-3.5 px-8 sm:px-10 rounded-[3px] border border-[#B88A3B]/50 hover:border-[#D8B477] shadow-[0_6px_24px_rgba(74,7,18,0.35)] hover:shadow-[0_8px_30px_rgba(184,138,59,0.4)] transition-all duration-300 active:scale-[0.98] uppercase cursor-pointer"
              >
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
