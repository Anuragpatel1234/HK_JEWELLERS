import React, { useRef, useState, useEffect } from 'react';
import { CATEGORIES } from '../data/jewelleryData';
import type { CategoryItem } from '../data/jewelleryData';
import { SectionHeading } from './OrnamentalDivider';

interface CategoryCarouselProps {
  onSelectCategory: (item: CategoryItem) => void;
}

export const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ onSelectCategory }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Sync scroll position with active dot
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const ratio = scrollLeft / maxScroll;
    const dotIndex = Math.min(3, Math.floor(ratio * 4));
    setActiveIndex(dotIndex);
  };

  const scrollToDot = (dotIndex: number) => {
    if (!scrollContainerRef.current) return;
    const { scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const targetScroll = (dotIndex / 3) * maxScroll;
    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
    setActiveIndex(dotIndex);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full bg-[#F7EBDD] pt-4 sm:pt-6 pb-6 sm:pb-8">
      {/* Section Heading with Ornamental Flourishes */}
      <SectionHeading title="Collection made just for her." />

      {/* Pagination Indicators (● ○ ○ ○) */}
      <div className="flex items-center justify-center gap-2.5 mb-5 -mt-2">
        {[0, 1, 2, 3].map((idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => scrollToDot(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#B88A3B] cursor-pointer ${
                isActive
                  ? 'w-2.5 h-2.5 bg-[#4A0712] scale-110'
                  : 'w-2 h-2 bg-[#D8B477]/60 hover:bg-[#B88A3B]'
              }`}
            />
          );
        })}
      </div>

      {/* Horizontal Carousel Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-3 sm:gap-4 md:gap-5 overflow-x-auto no-scrollbar scroll-smooth px-1 py-2 scroll-reveal-stagger revealed"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="flex-shrink-0 group focus:outline-none focus:ring-2 focus:ring-[#B88A3B] rounded-lg transition-all duration-300 hover:-translate-y-1.5 active:scale-[0.98] text-left cursor-pointer"
              style={{
                scrollSnapAlign: 'start',
                width: 'calc((100% - 32px) / 3.5)',
                minWidth: '110px',
                maxWidth: '152px',
              }}
              title={cat.name}
            >
              {/* Ornate Jharokha Arch Container with Antique Gold Border */}
              <div className="relative flex flex-col bg-[#1A0C0A] rounded-t-[40%] rounded-b-[10px] p-[5px] sm:p-[6px] border border-[#B88A3B]/50 group-hover:border-[#D8B477] shadow-[0_6px_18px_rgba(42,22,18,0.3)] group-hover:shadow-[0_10px_28px_rgba(184,138,59,0.35)] transition-all duration-300 overflow-hidden h-full">
                
                {/* Scalloped Arch Cutout Frame */}
                <div className="relative w-full aspect-[1/1.22] rounded-t-[38%] rounded-b-[6px] overflow-hidden bg-black/40 flex items-center justify-center border border-[#B88A3B]/25">
                  <img
                    src={cat.image}
                    alt={`${cat.name} Collection`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                    loading="lazy"
                  />
                  {/* Subtle inner shadow and antique highlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 pointer-events-none" />
                </div>

                {/* Crisp Vector Typography Label at Bottom */}
                <div className="pt-2.5 pb-1 text-center">
                  <span className="font-sans text-[8.5px] sm:text-[9.5px] md:text-[10.5px] tracking-[0.2em] uppercase font-semibold text-[#D8B477] group-hover:text-[#FFF7ED] transition-colors truncate block">
                    {cat.name}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
