import React, { useState } from 'react';

interface CategoryNavProps {
  onSelectCategory?: (category: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  badge?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'bridal-rivaah', label: 'BRIDAL RIVAAH', badge: 'Hot' },
  { id: 'jewellery', label: 'JEWELLERY' },
  { id: 'mangalsutra', label: 'MANGALSUTRAS' },
  { id: 'dailywear', label: 'DAILY WEAR' },
  { id: 'coins', label: 'GOLD COINS (24K)' },
  { id: 'mens', label: "MEN'S COLLECTION" },
  { id: 'collections', label: 'COLLECTIONS' },
  { id: 'customisation', label: 'CUSTOMISATION' },
  { id: 'gold-rate', label: 'LIVE GOLD RATE' },
  { id: 'gold-exchange', label: 'OLD GOLD EXCHANGE' },
  { id: 'savings-scheme', label: 'SAVINGS PLAN' },
  { id: 'hk-promise', label: 'OUR 10 PROMISES' },
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
    <div className="relative w-full overflow-hidden border-b border-[#E9D1B5]/60 bg-[#FAF3EB]/60">
      {/* Edge fade indicators for horizontal scroll on touch screens */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-[#FAF3EB] to-transparent md:hidden z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#FAF3EB] to-transparent md:hidden z-10" />

      <nav 
        aria-label="Categories"
        className="w-full bg-transparent relative z-20 py-2 sm:py-2.5 overflow-x-auto no-scrollbar scroll-smooth"
      >
        <div className="flex items-center justify-start md:justify-center min-w-max px-4 md:px-8 gap-4 sm:gap-6 md:gap-8 lg:gap-9">
          {NAV_ITEMS.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="group relative py-1.5 px-1 transition-all duration-200 cursor-pointer min-h-[36px] flex items-center gap-1.5 active:scale-95"
              >
                <span
                  className={`font-sans text-[10.5px] sm:text-[11px] md:text-xs tracking-[0.12em] whitespace-nowrap transition-colors uppercase ${
                    isActive
                      ? 'text-[#4A0712] font-bold'
                      : 'text-[#2A1612]/75 font-medium group-hover:text-[#4A0712]'
                  }`}
                >
                  {item.label}
                </span>

                {item.badge && (
                  <span className="text-[8px] bg-[#4A0712] text-[#FFF7ED] font-bold px-1.5 py-0.2 rounded-full uppercase tracking-wider">
                    {item.badge}
                  </span>
                )}

                {/* Active underline indicator */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#4A0712] transition-all duration-300 ${
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
