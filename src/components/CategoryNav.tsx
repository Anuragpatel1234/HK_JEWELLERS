import React, { useState } from 'react';

interface CategoryNavProps {
  onSelectCategory?: (category: string) => void;
}

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'story', label: 'OUR STORY' },
  { id: 'rituals', label: 'OUR RITUALS' },
  { id: 'jewellery', label: 'JEWELLERY' },
  { id: 'collections', label: 'COLLECTIONS' },
  { id: 'customisation', label: 'CUSTOMISATION' },
  { id: 'for-you', label: 'JUST FOR YOU' },
  { id: 'types', label: 'SHOP BY TYPE' },
  { id: 'divine-idols', label: 'DIVINE IDOLS' },
];

export const CategoryNav: React.FC<CategoryNavProps> = ({ onSelectCategory }) => {
  const [activeItem, setActiveItem] = useState<string>('jewellery');

  const handleClick = (id: string) => {
    setActiveItem(id);
    if (onSelectCategory) {
      onSelectCategory(id);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Subtle edge fade indicator for horizontal scroll on mobile */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-[#FAE7D8] to-transparent md:hidden z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#FAE7D8] to-transparent md:hidden z-10" />

      <nav 
        aria-label="Categories"
        className="w-full bg-transparent relative z-20 py-2 sm:py-3 overflow-x-auto no-scrollbar scroll-smooth"
      >
        <div className="flex items-center justify-start md:justify-center min-w-max px-4 md:px-8 gap-5 sm:gap-8 md:gap-10 lg:gap-12">
          {NAV_ITEMS.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="group relative py-2 px-1 transition-all duration-200 cursor-pointer min-h-[40px] flex items-center active:scale-95"
              >
                <span
                  className={`font-sans text-[11px] sm:text-[11.5px] md:text-xs tracking-[0.12em] sm:tracking-[0.15em] whitespace-nowrap transition-colors uppercase ${
                    isActive
                      ? 'text-[#2A1612] font-semibold'
                      : 'text-[#2A1612]/70 font-medium group-hover:text-[#2A1612]'
                  }`}
                >
                  {item.label}
                </span>
                {/* Active underline indicator */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#2A1612] transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-50'
                  }`}
                  style={{ transformOrigin: 'center' }}
                />
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
