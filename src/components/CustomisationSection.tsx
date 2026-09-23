import React from 'react';
import { CUSTOM_DESIGNS } from '../data/jewelleryData';
import type { CustomJewelleryItem } from '../data/jewelleryData';
import { SectionHeading } from './OrnamentalDivider';

interface CustomisationSectionProps {
  onSelectDesign: (item: CustomJewelleryItem) => void;
  onViewAllClick: () => void;
}

export const CustomisationSection: React.FC<CustomisationSectionProps> = ({
  onSelectDesign,
  onViewAllClick,
}) => {
  return (
    <section className="w-full bg-[#FAE7D8] pt-4 sm:pt-6 pb-6 sm:pb-8 px-2.5 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading with Ornamental Flourishes */}
        <SectionHeading title="Jewellery Customisation" />

        {/* 4 Custom Jewellery Design Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 my-4">
          {CUSTOM_DESIGNS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectDesign(item)}
              className="group relative cursor-pointer overflow-hidden rounded-[8px] sm:rounded-[10px] shadow-[0_6px_22px_rgba(42,22,18,0.24)] border border-[#B88A3B]/40 hover:border-[#D8B477] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 bg-[#1E0E0B]"
            >
              <div className="w-full aspect-square relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 group-hover:brightness-105"
                  loading="lazy"
                />
                
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15 pointer-events-none" />

                {/* Crisp HK Jewellers Monogram Emblem at Bottom Center */}
                <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 flex flex-col items-center pointer-events-none">
                  {/* Subtle glow behind logo */}
                  <div className="absolute bottom-0 w-16 h-10 bg-[#D8B477]/20 rounded-full blur-lg" />
                  <span className="font-serif text-[13px] sm:text-[15px] font-bold text-[#D8B477] tracking-wider leading-none drop-shadow-lg relative">
                    HK
                  </span>
                  <span className="font-sans text-[6px] sm:text-[7.5px] uppercase tracking-[0.26em] text-[#E8D1A7]/90 font-semibold leading-tight relative">
                    Jewellers
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button — Outlined style matching UI */}
        <div className="text-center mt-6 sm:mt-7">
          <button
            onClick={onViewAllClick}
            className="inline-flex items-center justify-center bg-transparent hover:bg-[#4A0712] text-[#2A1612] hover:text-[#FFF7ED] font-sans text-[10.5px] sm:text-xs tracking-[0.2em] font-semibold py-2.5 sm:py-3 px-8 sm:px-10 rounded-[3px] border-2 border-[#2A1612] hover:border-[#4A0712] transition-all duration-300 shadow-[0_2px_8px_rgba(42,22,18,0.1)] hover:shadow-[0_6px_20px_rgba(74,7,18,0.3)] active:scale-[0.98] uppercase cursor-pointer"
          >
            View All Custom Designs
          </button>
        </div>
      </div>
    </section>
  );
};
