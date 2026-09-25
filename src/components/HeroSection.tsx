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
        <div className="relative w-full flex flex-col md:flex-row items-center md:items-end justify-between min-h-[440px] sm:min-h-[480px] md:min-h-[530px] lg:min-h-[570px] pt-2 sm:pt-6 pb-0">

          {/* Left Side (Desktop) / Bottom (Mobile): Cutout Jewellery Mannequin & Stands resting directly at the bottom */}
          <div className="order-2 md:order-1 w-full md:w-[48%] lg:w-[45%] flex items-end justify-center md:justify-start relative z-30 pb-0 animate-slide-in-left -mt-2 sm:mt-0">
            <div className="relative group flex flex-col items-center justify-end translate-y-2 sm:translate-y-3 md:translate-y-4 lg:translate-y-5">
              {/* Layered realistic contact and ambient ground shadows */}
              {/* 1. Left side contact shadow specifically for the earring stand base */}
              <div className="absolute -bottom-0.5 left-[6%] sm:left-[8%] w-14 sm:w-18 md:w-22 h-2.5 sm:h-3 bg-black/60 rounded-[50%] blur-[2.5px] pointer-events-none z-0" />

              {/* 2. Center & right side contact shadow under the bust and bangle display */}
              <div className="absolute -bottom-0.5 right-[4%] w-[68%] sm:w-[72%] h-3 sm:h-3.5 bg-black/55 rounded-[50%] blur-[3.5px] pointer-events-none z-0" />

              {/* 3. Soft ambient diffused shadow spreading across the entire bottom and sides */}
              <div className="absolute -bottom-1.5 -left-3 -right-3 w-[calc(100%+24px)] h-4 sm:h-5 bg-gradient-to-r from-transparent via-black/35 to-transparent rounded-[50%] blur-[6px] pointer-events-none z-0" />
              
              <img
                src="/assets/hero/herojewellery_cutout.png"
                alt="HK Jewellers A Legacy You Can Wear - 22K Antique Gold Haram with Zambian Emeralds, Jhumkas, and Bangles"
                className="relative z-10 w-auto max-w-full h-[250px] xs:h-[280px] sm:h-[350px] md:h-[470px] lg:h-[520px] xl:h-[560px] object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.015] drop-shadow-[0_8px_18px_rgba(20,10,8,0.28)]"
                loading="eager"
              />
            </div>
          </div>

          {/* Right Side (Desktop) / Top (Mobile): Editorial Typography & Centered CTA */}
          <div className="order-1 md:order-2 w-full md:w-[52%] lg:w-[55%] flex flex-col items-center text-center z-10 pt-2 sm:pt-6 pb-2 sm:pb-12 md:pb-16 lg:pb-20 animate-slide-in-right">
            <div className="flex flex-col items-center md:-translate-x-20 lg:-translate-x-32 xl:-translate-x-36">
              <h1 className="font-serif text-[30px] xs:text-[34px] sm:text-[44px] md:text-[52px] lg:text-[62px] xl:text-[68px] font-normal text-[#2A1612] leading-[1.06] tracking-tight">
                A Legacy <br />
                <span className="italic font-light">You Can</span> <br />
                Wear
              </h1>

              {/* Centered Delicate Gold Flourish Divider */}
              <div className="flex items-center justify-center gap-2 sm:gap-2.5 my-2.5 sm:my-4">
                <OrnamentalFlourish flip className="w-7 sm:w-10 h-2 sm:h-3" color="#B88A3B" />
                <span className="w-8 sm:w-14 h-[1px] bg-[#B88A3B]/45" />
                <OrnamentalFlourish className="w-7 sm:w-10 h-2 sm:h-3" color="#B88A3B" />
              </div>

              <p className="font-sans text-[11.5px] sm:text-sm md:text-[14px] text-[#4A0712]/85 max-w-xs sm:max-w-md mx-auto leading-relaxed font-normal px-2">
                Exquisite craftsmanship and precious stones create a <br className="hidden xs:inline" />
                timeless allure of heritage &amp; expression
              </p>

              {/* Centered Luxury CTA Button */}
              <div className="mt-3.5 sm:mt-6">
                <button
                  onClick={onExploreClick}
                  className="inline-flex items-center justify-center bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] font-sans text-[10.5px] sm:text-xs font-semibold tracking-[0.22em] py-2.5 sm:py-3.5 px-7 sm:px-10 rounded-[2px] border border-[#B88A3B]/60 shadow-[0_6px_22px_rgba(74,7,18,0.32)] hover:shadow-[0_8px_28px_rgba(184,138,59,0.4)] transition-all duration-300 active:scale-[0.98] uppercase cursor-pointer"
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
