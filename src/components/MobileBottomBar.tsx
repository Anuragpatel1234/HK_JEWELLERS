import React from 'react';
import { Compass, Search, Sparkles, Heart, ShoppingBag } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onNavigateHome: () => void;
  onNavigateCollections: () => void;
  cartCount: number;
  wishlistCount: number;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onOpenSearch,
  onOpenCart,
  onOpenWishlist,
  onNavigateHome,
  onNavigateCollections,
  cartCount,
  wishlistCount,
}) => {
  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF3EB]/95 backdrop-blur-lg border-t border-[#E9D1B5] shadow-[0_-4px_20px_rgba(42,22,18,0.08)] pb-safe transition-all duration-300"
    >
      <div className="grid grid-cols-5 h-[56px] items-center px-1">
        
        {/* 1. Explore / Home */}
        <button
          onClick={onNavigateHome}
          className="flex flex-col items-center justify-center h-full py-1 text-[#2A1612] hover:text-[#4A0712] active:scale-90 transition-all focus:outline-none"
          aria-label="Go to Home"
        >
          <Compass className="w-5 h-5 stroke-[1.4] text-[#4A0712]" />
          <span className="font-sans text-[9px] tracking-wider uppercase font-semibold text-[#4A0712] mt-0.5">
            Explore
          </span>
        </button>

        {/* 2. Collections Carousel shortcut */}
        <button
          onClick={onNavigateCollections}
          className="flex flex-col items-center justify-center h-full py-1 text-[#2A1612]/70 hover:text-[#4A0712] active:scale-90 transition-all focus:outline-none"
          aria-label="View Collections"
        >
          <Sparkles className="w-5 h-5 stroke-[1.4] text-[#8F6623]" />
          <span className="font-sans text-[9px] tracking-wider uppercase font-medium mt-0.5 text-[#2A1612]">
            Curated
          </span>
        </button>

        {/* 3. Search */}
        <button
          onClick={onOpenSearch}
          className="flex flex-col items-center justify-center h-full py-1 text-[#2A1612]/70 hover:text-[#4A0712] active:scale-90 transition-all focus:outline-none"
          aria-label="Search Jewellery"
        >
          <Search className="w-5 h-5 stroke-[1.4]" />
          <span className="font-sans text-[9px] tracking-wider uppercase font-medium mt-0.5">
            Search
          </span>
        </button>

        {/* 4. Wishlist */}
        <button
          onClick={onOpenWishlist}
          className="flex flex-col items-center justify-center h-full py-1 text-[#2A1612]/70 hover:text-[#4A0712] active:scale-90 transition-all focus:outline-none relative"
          aria-label={`Wishlist (${wishlistCount} items)`}
        >
          <div className="relative">
            <Heart className="w-5 h-5 stroke-[1.4]" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#4A0712] text-[#FFF7ED] text-[8.5px] font-sans font-bold min-w-3.5 h-3.5 px-0.5 rounded-full flex items-center justify-center shadow-sm">
                {wishlistCount}
              </span>
            )}
          </div>
          <span className="font-sans text-[9px] tracking-wider uppercase font-medium mt-0.5">
            Wishlist
          </span>
        </button>

        {/* 5. Shopping Bag */}
        <button
          onClick={onOpenCart}
          className="flex flex-col items-center justify-center h-full py-1 text-[#2A1612]/70 hover:text-[#4A0712] active:scale-90 transition-all focus:outline-none relative"
          aria-label={`Shopping Bag (${cartCount} items)`}
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 stroke-[1.4]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#8F6623] text-[#FFF7ED] text-[8.5px] font-sans font-bold min-w-3.5 h-3.5 px-0.5 rounded-full flex items-center justify-center shadow-sm animate-pulse">
                {cartCount}
              </span>
            )}
          </div>
          <span className="font-sans text-[9px] tracking-wider uppercase font-medium mt-0.5">
            Bag
          </span>
        </button>

      </div>
    </nav>
  );
};
