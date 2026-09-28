import React from 'react';
import { STORIES } from '../data/jewelleryData';
import type { StoryItem } from '../data/jewelleryData';

interface StorySectionProps {
  onSelectStory: (story: StoryItem) => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onSelectStory }) => {
  const mainStory = STORIES[0]; // Swarn Shringaar
  const paramparaStory = STORIES[1]; // Afsana & Parampara
  const chhankaarStory = STORIES[2]; // Chhankaar

  return (
    <section className="w-full bg-[#FAE7D8] px-3 sm:px-4 md:px-6 py-3 sm:py-5">
      <div className="max-w-7xl mx-auto">
        {/* Perfectly Aligned Bento Layout:
            Left Column: Swarn Shringaar (aspect-[1122/1402])
            Right Column: Two equal-height cards (Afsana top, Chhankaar bottom)
            Both columns match height to the pixel with flush top and bottom edges.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5 md:gap-4 items-stretch">
          
          {/* 1. Left Column Card: Swarn Shringaar */}
          <div
            onClick={() => onSelectStory(mainStory)}
            className="group relative cursor-pointer overflow-hidden rounded-[10px] sm:rounded-[12px] md:rounded-[14px] shadow-[0_4px_16px_rgba(42,22,18,0.18)] hover:shadow-[0_8px_24px_rgba(184,138,59,0.30)] border border-[#B88A3B]/30 hover:border-[#D8B477] transition-all duration-300 aspect-[1122/1402] bg-[#1A0C0A] flex items-center justify-center active:scale-[0.99] w-full"
            title={mainStory.englishSub}
          >
            <picture className="w-full h-full">
              <source srcSet="/assets/story/swarn_story_hd.webp" type="image/webp" />
              <img
                src="/assets/story/swarn_story_hd.jpg"
                alt="Swarn Shringaar - The kingdoms understood her authority with greater ease than some men do today."
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </picture>
            <div className="absolute inset-0 bg-[#B88A3B]/0 group-hover:bg-[#B88A3B]/5 transition-colors duration-300 pointer-events-none" />
          </div>

          {/* 2. Right Column: Stacked Cards (Afsana & Chhankaar) */}
          <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 justify-between h-full">
            {/* Top Card: Afsana & Parampara */}
            <div
              onClick={() => onSelectStory(paramparaStory)}
              className="flex-1 w-full group relative cursor-pointer overflow-hidden rounded-[10px] sm:rounded-[12px] md:rounded-[14px] shadow-[0_4px_16px_rgba(42,22,18,0.18)] hover:shadow-[0_8px_24px_rgba(184,138,59,0.30)] border border-[#B88A3B]/30 hover:border-[#D8B477] transition-all duration-300 aspect-[1.6/1] md:aspect-auto bg-[#1A0C0A] flex items-center justify-center active:scale-[0.99]"
              title={paramparaStory.englishSub}
            >
              <picture className="w-full h-full">
                <source srcSet="/assets/story/afsana_story_hd.webp" type="image/webp" />
                <img
                  src="/assets/story/afsana_story_hd.jpg"
                  alt="Afsana - Trust and love are wonderful, but don't forget the earrings."
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 bg-[#B88A3B]/0 group-hover:bg-[#B88A3B]/5 transition-colors duration-300 pointer-events-none" />
            </div>

            {/* Bottom Card: Chhankaar */}
            <div
              onClick={() => onSelectStory(chhankaarStory)}
              className="flex-1 w-full group relative cursor-pointer overflow-hidden rounded-[10px] sm:rounded-[12px] md:rounded-[14px] shadow-[0_4px_16px_rgba(42,22,18,0.18)] hover:shadow-[0_8px_24px_rgba(184,138,59,0.30)] border border-[#B88A3B]/30 hover:border-[#D8B477] transition-all duration-300 aspect-[1.6/1] md:aspect-auto bg-[#1A0C0A] flex items-center justify-center active:scale-[0.99]"
              title={chhankaarStory.englishSub}
            >
              <picture className="w-full h-full">
                <source srcSet="/assets/story/chhankaar_story_hd.webp" type="image/webp" />
                <img
                  src="/assets/story/chhankaar_story_hd.jpg"
                  alt="Chhankaar - Grace begins where the payal sings."
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </picture>
              <div className="absolute inset-0 bg-[#B88A3B]/0 group-hover:bg-[#B88A3B]/5 transition-colors duration-300 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


