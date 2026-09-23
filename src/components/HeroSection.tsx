import React from 'react';
import { OrnamentalFlourish } from './OrnamentalDivider';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative w-full overflow-visible bg-[#FAE7D8]">
      {/* Full-Bleed Palace Architectural Background */}
      <div className="absolute -top-20 sm:-top-28 md:-top-36 lg:-top-44 bottom-0 left-0 right-0 z-0 overflow-visible pointer-events-none">
        <img
          src="/assets/hero/hero_bg.jpeg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-bottom transition-opacity duration-500"
        />
        {/* Soft subtle tint overlay for harmonious contrast */}
        <div className="absolute inset-0 bg-[#FAE7D8]/10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 md:px-8">
        <div className="relative w-full flex flex-col md:flex-row items-center md:items-end justify-between min-h-[440px] sm:min-h-[480px] md:min-h-[530px] lg:min-h-[570px] pt-4 sm:pt-6 pb-0">

          {/* Left Side: Cutout Jewellery Mannequin & Stands resting directly at the bottom */}
          <div className="w-full md:w-[48%] lg:w-[45%] flex items-end justify-center md:justify-start relative z-30 pb-0 animate-slide-in-left">
            <div className="relative group flex flex-col items-center justify-end translate-y-4 sm:translate-y-6 md:translate-y-7 lg:translate-y-8">
              {/* Natural ground shadow under stands at the bottom */}
              <div className="absolute -bottom-1 w-[90%] h-3.5 bg-black/45 rounded-[50%] blur-[4px] pointer-events-none" />
              
              <img
                src="/assets/hero/herojewellery_cutout.png"
                alt="HK Jewellers A Legacy You Can Wear - 22K Antique Gold Haram with Zambian Emeralds, Jhumkas, and Bangles"
                className="relative z-10 w-auto max-w-full h-[340px] sm:h-[410px] md:h-[470px] lg:h-[520px] xl:h-[560px] object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.015]"
                loading="eager"
              />
            </div>
          </div>

          {/* Right Side: Editorial Typography & Centered CTA sitting comfortably above the railing */}
          <div className="w-full md:w-[52%] lg:w-[55%] flex flex-col items-center text-center z-10 pt-4 sm:pt-6 pb-8 sm:pb-12 md:pb-16 lg:pb-20 animate-slide-in-right">
            <div className="flex flex-col items-center md:-translate-x-20 lg:-translate-x-32 xl:-translate-x-36">
              <h1 className="font-serif text-[38px] sm:text-[46px] md:text-[52px] lg:text-[62px] xl:text-[68px] font-normal text-[#2A1612] leading-[1.05] tracking-tight">
                A Legacy <br />
                <span className="italic font-light">You Can</span> <br />
                Wear
              </h1>

              {/* Centered Delicate Gold Flourish Divider */}
              <div className="flex items-center justify-center gap-2.5 my-3 sm:my-4">
                <OrnamentalFlourish flip className="w-8 sm:w-10 h-2.5 sm:h-3" color="#B88A3B" />
                <span className="w-10 sm:w-14 h-[1px] bg-[#B88A3B]/45" />
                <OrnamentalFlourish className="w-8 sm:w-10 h-2.5 sm:h-3" color="#B88A3B" />
              </div>

              <p className="font-sans text-xs sm:text-sm md:text-[14px] text-[#4A0712]/85 max-w-xs sm:max-w-md mx-auto leading-relaxed font-normal">
                Exquisite craftsmanship and precious stones create a <br />
                timeless allure of heritage &amp; expression
              </p>

              {/* Centered Luxury CTA Button */}
              <div className="mt-4 sm:mt-6">
                <button
                  onClick={onExploreClick}
                  className="inline-flex items-center justify-center bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] font-sans text-[11px] sm:text-xs font-semibold tracking-[0.22em] py-3 sm:py-3.5 px-8 sm:px-10 rounded-[2px] border border-[#B88A3B]/60 shadow-[0_6px_22px_rgba(74,7,18,0.32)] hover:shadow-[0_8px_28px_rgba(184,138,59,0.4)] transition-all duration-300 active:scale-[0.98] uppercase cursor-pointer"
                >
                  Explore Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
