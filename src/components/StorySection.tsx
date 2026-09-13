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
    <section className="w-full bg-[#F7EBDD] px-2.5 sm:px-4 md:px-6 py-3 sm:py-5">
      <div className="max-w-7xl mx-auto">
        {/* 2-Column Editorial Grid matching the exact reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          
          {/* Left Column: Swarn Shringaar (Tall Card) */}
          <div
            onClick={() => onSelectStory(mainStory)}
            className="group relative cursor-pointer overflow-hidden rounded-[10px] sm:rounded-[12px] shadow-[0_8px_28px_rgba(42,22,18,0.28)] border border-[#B88A3B]/40 hover:border-[#D8B477] transition-all duration-300 min-h-[360px] sm:min-h-[420px] md:min-h-[440px] flex flex-col justify-end"
          >
            {/* Ultra High-Res Background Image */}
            <img
              src={mainStory.image}
              alt="Swarn Shringaar - Indian Royal Heritage Jewellery"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Cinematic Gradient for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

            {/* Crisp Native Typography Overlay */}
            <div className="relative z-10 p-5 sm:p-7 space-y-2">
              <h3 className="font-devanagari text-[28px] sm:text-[34px] md:text-[40px] text-[#FFF7ED] font-bold tracking-wide drop-shadow-lg leading-tight">
                स्वर्ण श्रृंगार
              </h3>
              <p className="font-serif italic text-xs sm:text-sm text-[#F7EBDD]/90 max-w-xs sm:max-w-sm leading-relaxed drop-shadow">
                The kingdom was adorned, not just in gold — but in grace she makes do rule.
              </p>
            </div>
          </div>

          {/* Right Column: Two Stacked Cards (Parampara + Chhankaar) */}
          <div className="flex flex-col gap-3 sm:gap-4 justify-between">
            
            {/* Top Card: Parampara */}
            <div
              onClick={() => onSelectStory(paramparaStory)}
              className="group relative cursor-pointer overflow-hidden rounded-[10px] sm:rounded-[12px] shadow-[0_8px_24px_rgba(42,22,18,0.25)] border border-[#B88A3B]/40 hover:border-[#D8B477] transition-all duration-300 min-h-[175px] sm:min-h-[210px] flex flex-col justify-end"
            >
              <img
                src={paramparaStory.image}
                alt="Parampara - Rooted in heritage, every piece has a story to tell"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30" />

              <div className="relative z-10 p-4 sm:p-5 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B81D24] shadow-sm flex-shrink-0" />
                  <h3 className="font-devanagari text-[22px] sm:text-[26px] text-[#FFF7ED] font-bold tracking-wide drop-shadow leading-tight">
                    परंपरा
                  </h3>
                </div>
                <p className="font-serif italic text-xs sm:text-sm text-[#F7EBDD]/90 max-w-xs leading-relaxed drop-shadow">
                  Rooted in heritage, every piece has a story to tell.
                </p>
              </div>
            </div>

            {/* Bottom Card: Chhankaar */}
            <div
              onClick={() => onSelectStory(chhankaarStory)}
              className="group relative cursor-pointer overflow-hidden rounded-[10px] sm:rounded-[12px] shadow-[0_8px_24px_rgba(42,22,18,0.25)] border border-[#B88A3B]/40 hover:border-[#D8B477] transition-all duration-300 min-h-[175px] sm:min-h-[210px] flex flex-col justify-end"
            >
              <img
                src={chhankaarStory.image}
                alt="Chhankaar - Tradition that moves with every step"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              <div className="relative z-10 p-4 sm:p-5 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B81D24] shadow-sm flex-shrink-0" />
                  <h3 className="font-devanagari text-[22px] sm:text-[26px] text-[#FFF7ED] font-bold tracking-wide drop-shadow leading-tight">
                    छनकार
                  </h3>
                </div>
                <p className="font-serif italic text-xs sm:text-sm text-[#F7EBDD]/90 max-w-xs leading-relaxed drop-shadow">
                  Tradition that moves with every step.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
