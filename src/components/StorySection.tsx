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

  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [activeStoryIdx, setActiveStoryIdx] = React.useState(0);

  const handleStoryScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    if (clientWidth === 0) return;
    const idx = Math.round(scrollLeft / (clientWidth * 0.8));
    setActiveStoryIdx(Math.min(2, Math.max(0, idx)));
  };

  const scrollToStory = (idx: number) => {
    if (!scrollRef.current) return;
    const targetScroll = idx * (scrollRef.current.clientWidth * 0.82);
    scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    setActiveStoryIdx(idx);
  };

  return (
    <section className="w-full bg-[#FAE7D8] px-3 sm:px-4 md:px-6 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Swipe Indicators */}
        <div className="flex md:hidden items-center justify-center gap-2 mb-3">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => scrollToStory(idx)}
              aria-label={`Go to story ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeStoryIdx === idx
                  ? 'w-4 h-1.5 bg-[#4A0712]'
                  : 'w-1.5 h-1.5 bg-[#B88A3B]/50'
              }`}
            />
          ))}
        </div>

        {/* 3-Card Campaign Editorial Showcase: Swipe on Mobile, 3-Columns on Desktop */}
        <div
          ref={scrollRef}
          onScroll={handleStoryScroll}
          className="flex md:grid md:grid-cols-3 gap-3.5 sm:gap-5 items-stretch overflow-x-auto md:overflow-visible no-scrollbar scroll-smooth snap-x snap-mandatory px-1 md:px-0"
        >
          {/* 1. Swarn Shringaar */}
          <div
            onClick={() => onSelectStory(mainStory)}
            className="group relative cursor-pointer overflow-hidden rounded-[12px] sm:rounded-[14px] shadow-[0_8px_24px_rgba(42,22,18,0.20)] border border-[#B88A3B]/30 hover:border-[#B88A3B] transition-all duration-300 aspect-[4/5] bg-[#2A1612] flex items-center justify-center flex-shrink-0 w-[84vw] xs:w-[78vw] sm:w-[320px] md:w-auto snap-center active:scale-[0.99]"
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
            className="group relative cursor-pointer overflow-hidden rounded-[12px] sm:rounded-[14px] shadow-[0_8px_24px_rgba(42,22,18,0.20)] border border-[#B88A3B]/30 hover:border-[#B88A3B] transition-all duration-300 aspect-[4/5] bg-[#2A1612] flex items-center justify-center flex-shrink-0 w-[84vw] xs:w-[78vw] sm:w-[320px] md:w-auto snap-center active:scale-[0.99]"
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
            className="group relative cursor-pointer overflow-hidden rounded-[12px] sm:rounded-[14px] shadow-[0_8px_24px_rgba(42,22,18,0.20)] border border-[#B88A3B]/30 hover:border-[#B88A3B] transition-all duration-300 aspect-[4/5] bg-[#2A1612] flex items-center justify-center flex-shrink-0 w-[84vw] xs:w-[78vw] sm:w-[320px] md:w-auto snap-center active:scale-[0.99]"
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

