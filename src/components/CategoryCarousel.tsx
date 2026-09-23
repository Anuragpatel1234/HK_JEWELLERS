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
    <section className="w-full bg-[#FAE7D8] pt-4 sm:pt-6 pb-6 sm:pb-8">
      {/* Section Heading with Ornamental Flourishes */}
      <SectionHeading title="Collection made just for her." />

      {/* Dynamic Pagination Indicators on Mobile */}
      <div className="flex lg:hidden items-center justify-center gap-2 mb-4 -mt-2">
        {CATEGORIES.map((_, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => scrollToDot(idx)}
              aria-label={`Go to item ${idx + 1}`}
              className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#B88A3B] cursor-pointer ${
                isActive
                  ? 'w-3 h-2 bg-[#4A0712] rounded-full scale-105'
                  : 'w-1.5 h-1.5 bg-[#D8B477]/60 hover:bg-[#B88A3B]'
              }`}
            />
          );
        })}
      </div>

      {/* Horizontal Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-3 sm:px-6">
        {/* Mobile Edge Fade Cues */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-[#FAE7D8] to-transparent lg:hidden z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#FAE7D8] to-transparent lg:hidden z-10" />

        <div
          ref={scrollContainerRef}
          className="flex items-stretch justify-start lg:justify-center gap-3 sm:gap-4 md:gap-5 overflow-x-auto no-scrollbar scroll-smooth px-2 py-2 scroll-reveal-stagger revealed snap-x snap-mandatory"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="flex-shrink-0 group focus:outline-none focus:ring-2 focus:ring-[#B88A3B] rounded-lg transition-all duration-300 hover:-translate-y-1.5 active:scale-95 text-left cursor-pointer snap-start w-[132px] xs:w-[140px] sm:w-[150px] md:w-[156px]"
              title={cat.name}
            >
              {/* Ornate Arch Card Container with Antique Gold Border */}
              <div className="relative flex flex-col bg-[#1A0C0A] rounded-[10px] p-[2.5px] sm:p-[3px] border border-[#B88A3B]/45 group-hover:border-[#D8B477] shadow-[0_4px_16px_rgba(42,22,18,0.25)] group-hover:shadow-[0_8px_24px_rgba(184,138,59,0.35)] transition-all duration-300 overflow-hidden h-full">
                
                {/* Full Painting Container with Miniature Frame */}
                <div className="relative w-full aspect-[1/1.4] rounded-[8px] overflow-hidden bg-[#240C11] flex items-center justify-center">
                  <img
                    src={cat.image}
                    alt={`${cat.name} Collection`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle inner highlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Crisp Typography Label over Velvet Area */}
                  <div className="absolute bottom-[4%] sm:bottom-[4.6%] left-0 right-0 text-center px-1 pointer-events-none">
                    <span className="font-sans text-[8.5px] xs:text-[9.5px] sm:text-[10px] md:text-[10.5px] tracking-[0.16em] uppercase font-semibold text-[#E6C687] group-hover:text-[#FFF7ED] drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)] transition-colors truncate block">
                      {cat.name}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
