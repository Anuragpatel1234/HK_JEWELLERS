import React from 'react';
import { STORIES } from '../data/jewelleryData';
import type { StoryItem } from '../data/jewelleryData';

interface StorySectionProps {
  onSelectStory: (story: StoryItem) => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onSelectStory }) => {
  const mainStory = STORIES[0]; // Swarn Shringaar
  const paramparaStory = STORIES[1]; // Parampara
  const chhankaarStory = STORIES[2]; // Chhankaar

  return (
    <section className="w-full bg-[#FAE7D8] px-3 sm:px-4 md:px-6 py-3 sm:py-5">
      <div className="max-w-7xl mx-auto">
        {/* Exact 3-Card Layout matching design reference:
            Left: Tall Swarn Shringaar card (spans 2 rows on desktop)
            Right Top: Parampara card
            Right Bottom: Chhankaar card
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2.5 sm:gap-3 md:gap-3.5">
          
          {/* 1. Left Card: Swarn Shringaar (Spans 2 rows on desktop) */}
          <div
            onClick={() => onSelectStory(mainStory)}
            className="md:row-span-2 group relative cursor-pointer overflow-hidden rounded-[10px] sm:rounded-[12px] md:rounded-[14px] shadow-[0_4px_16px_rgba(42,22,18,0.18)] hover:shadow-[0_8px_24px_rgba(184,138,59,0.30)] border border-[#B88A3B]/30 hover:border-[#D8B477] transition-all duration-300 aspect-[370/313] md:aspect-auto bg-[#1A0C0A] flex items-center justify-center active:scale-[0.99]"
            title={mainStory.englishSub}
          >
            <img
              src={mainStory.image}
              alt="Swarn Shringaar - The kingdom was adorned, not just in gold — but in grace she makes do rule."
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#B88A3B]/0 group-hover:bg-[#B88A3B]/5 transition-colors duration-300 pointer-events-none" />
          </div>

          {/* 2. Top-Right Card: Parampara */}
          <div
            onClick={() => onSelectStory(paramparaStory)}
            className="group relative cursor-pointer overflow-hidden rounded-[10px] sm:rounded-[12px] md:rounded-[14px] shadow-[0_4px_16px_rgba(42,22,18,0.18)] hover:shadow-[0_8px_24px_rgba(184,138,59,0.30)] border border-[#B88A3B]/30 hover:border-[#D8B477] transition-all duration-300 aspect-[361/154] bg-[#1A0C0A] flex items-center justify-center active:scale-[0.99]"
            title={paramparaStory.englishSub}
          >
            <img
              src={paramparaStory.image}
              alt="Parampara - Rooted in heritage, every piece has a story to tell."
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#B88A3B]/0 group-hover:bg-[#B88A3B]/5 transition-colors duration-300 pointer-events-none" />
          </div>

          {/* 3. Bottom-Right Card: Chhankaar */}
          <div
            onClick={() => onSelectStory(chhankaarStory)}
            className="group relative cursor-pointer overflow-hidden rounded-[10px] sm:rounded-[12px] md:rounded-[14px] shadow-[0_4px_16px_rgba(42,22,18,0.18)] hover:shadow-[0_8px_24px_rgba(184,138,59,0.30)] border border-[#B88A3B]/30 hover:border-[#D8B477] transition-all duration-300 aspect-[361/155] bg-[#1A0C0A] flex items-center justify-center active:scale-[0.99]"
            title={chhankaarStory.englishSub}
          >
            <img
              src={chhankaarStory.image}
              alt="Chhankaar - Tradition that moves with every step."
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#B88A3B]/0 group-hover:bg-[#B88A3B]/5 transition-colors duration-300 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

