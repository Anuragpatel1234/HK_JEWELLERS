import React, { useState, useEffect } from 'react';
import { Menu, Search, User, Heart, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  cartCount: number;
  wishlistCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenSearch,
  onOpenCart,
  onOpenWishlist,
  cartCount,
  wishlistCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-[#FAE7D8]/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'shadow-[0_4px_16px_rgba(42,22,18,0.06)] py-1.5' : 'py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between">
        {/* Left: Mobile Menu Button */}
        <div className="flex items-center">
          <button
            onClick={onOpenMenu}
            aria-label="Open Navigation Menu"
            className="p-1.5 -ml-1 text-[#2A1612] hover:text-[#4A0712] transition-colors rounded-sm focus:outline-none focus:ring-1 focus:ring-[#B88A3B]"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.4]" />
          </button>
        </div>

        {/* Center: HK Jewellers Monogram Logo */}
        <div className="text-center select-none cursor-pointer flex flex-col items-center">
          <a href="#" className="inline-flex flex-col items-center group">
            <div className="flex items-center justify-center relative">
              <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider text-[#2A1612] group-hover:text-[#4A0712] transition-colors leading-none">
                HK
              </span>
              <span className="absolute -top-1.5 -right-2 text-[#B88A3B] text-[10px] transform rotate-12">✦</span>
            </div>
            <span className="font-sans text-[9px] sm:text-[11px] tracking-[0.26em] text-[#2A1612] uppercase font-semibold mt-0.5">
              Jewellers
            </span>
            <span className="font-serif italic text-[7.5px] sm:text-[9px] tracking-widest text-[#B88A3B] -mt-0.5">
              Since 1994
            </span>
          </a>
        </div>

        {/* Right: Action Icons */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-5 text-[#2A1612]">
          <button
            onClick={onOpenSearch}
            aria-label="Search Collection"
            className="p-1 hover:text-[#4A0712] transition-colors rounded-sm"
          >
            <Search className="w-[18px] h-[18px] sm:w-5 sm:h-5 stroke-[1.4]" />
          </button>

          <button
            aria-label="Customer Account"
            className="hidden xs:inline-flex p-1 hover:text-[#4A0712] transition-colors rounded-sm"
          >
            <User className="w-[18px] h-[18px] sm:w-5 sm:h-5 stroke-[1.4]" />
          </button>

          <button
            onClick={onOpenWishlist}
            aria-label="Wishlist"
            className="p-1 hover:text-[#4A0712] transition-colors rounded-sm relative"
          >
            <Heart className="w-[18px] h-[18px] sm:w-5 sm:h-5 stroke-[1.4]" />
            {wishlistCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#4A0712] text-[#FFF7ED] text-[9px] font-sans font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenCart}
            aria-label="Shopping Bag"
            className="p-1 hover:text-[#4A0712] transition-colors rounded-sm relative"
          >
            <ShoppingBag className="w-[18px] h-[18px] sm:w-5 sm:h-5 stroke-[1.4]" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#4A0712] text-[#FFF7ED] text-[9px] font-sans font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
