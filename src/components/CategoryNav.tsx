import React, { useState } from 'react';

interface CategoryNavProps {
  onSelectCategory?: (category: string) => void;
}

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'our-story', label: 'OUR STORY' },
  { id: 'our-rituals', label: 'OUR RITUALS' },
  { id: 'jewellery', label: 'JEWELLERY' },
  { id: 'collections', label: 'COLLECTIONS' },
  { id: 'customisation', label: 'CUSTOMISATION' },
  { id: 'just-for-you', label: 'JUST FOR YOU' },
  { id: 'shop-by-type', label: 'SHOP BY TYPE' },
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
    <nav 
      aria-label="Categories"
      className="w-full bg-transparent relative z-20 py-2.5 sm:py-3 overflow-x-auto no-scrollbar"
    >
      <div className="flex items-center justify-start md:justify-center min-w-max px-4 md:px-8 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {NAV_ITEMS.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`group relative py-1 transition-all duration-200 cursor-pointer`}
            >
              <span
                className={`font-sans text-[10.5px] sm:text-[11.5px] md:text-xs tracking-[0.12em] sm:tracking-[0.15em] whitespace-nowrap transition-colors uppercase ${
                  isActive
                    ? 'text-[#2A1612] font-semibold'
                    : 'text-[#2A1612]/70 font-medium group-hover:text-[#2A1612]'
                }`}
              >
                {item.label}
              </span>
              {/* Active underline indicator */}
              <span
                className={`absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-[#2A1612] transition-all duration-300 ${
                  isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-50'
                }`}
                style={{ transformOrigin: 'center' }}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
};
