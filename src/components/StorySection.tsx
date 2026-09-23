import React from 'react';
import { STORIES } from '../data/jewelleryData';
import type { StoryItem } from '../data/jewelleryData';

interface StorySectionProps {
  onSelectStory: (story: StoryItem) => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onSelectStory }) => {
  const mainStory = STORIES[0]; // Swarn Shringaar
  const afsanaStory = STORIES[1]; // Afsana Earrings
  const chhankaarStory = STORIES[2]; // Chhankaar

  return (
    <section className="w-full bg-[#FAE7D8] px-2.5 sm:px-4 md:px-6 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto">
        {/* 3-Column Luxury Campaign Editorial Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          
          {/* 1. Swarn Shringaar */}
          <div
            onClick={() => onSelectStory(mainStory)}
            className="group relative cursor-pointer overflow-hidden rounded-[12px] sm:rounded-[14px] shadow-[0_8px_24px_rgba(42,22,18,0.20)] border border-[#B88A3B]/30 hover:border-[#B88A3B] transition-all duration-300 aspect-[4/5] bg-[#2A1612] flex items-center justify-center"
          >
            <img
              src={mainStory.image}
              alt="Swarn Shringaar - The kingdoms understood her authority"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#B88A3B]/0 group-hover:bg-[#B88A3B]/5 transition-colors duration-300 pointer-events-none" />
          </div>

          {/* 2. Afsana Earrings */}
          <div
            onClick={() => onSelectStory(afsanaStory)}
            className="group relative cursor-pointer overflow-hidden rounded-[12px] sm:rounded-[14px] shadow-[0_8px_24px_rgba(42,22,18,0.20)] border border-[#B88A3B]/30 hover:border-[#B88A3B] transition-all duration-300 aspect-[4/5] bg-[#2A1612] flex items-center justify-center"
          >
            <img
              src={afsanaStory.image}
              alt="Afsana - Trust and love are wonderful, but don't forget the earrings"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#B88A3B]/0 group-hover:bg-[#B88A3B]/5 transition-colors duration-300 pointer-events-none" />
          </div>

          {/* 3. Chhankaar Payal */}
          <div
            onClick={() => onSelectStory(chhankaarStory)}
            className="group relative cursor-pointer overflow-hidden rounded-[12px] sm:rounded-[14px] shadow-[0_8px_24px_rgba(42,22,18,0.20)] border border-[#B88A3B]/30 hover:border-[#B88A3B] transition-all duration-300 aspect-[4/5] bg-[#2A1612] flex items-center justify-center"
          >
            <img
              src={chhankaarStory.image}
              alt="Chhankaar - Grace begins where the payal sings"
              className="w-full h-full object-cover object-[92%_center] transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[#B88A3B]/0 group-hover:bg-[#B88A3B]/5 transition-colors duration-300 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

