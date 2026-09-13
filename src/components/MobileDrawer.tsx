import React from 'react';
import { X, Search, User, Heart, ShoppingBag, Phone, Mail, MapPin } from 'lucide-react';
import { OrnamentalFlourish } from './OrnamentalDivider';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  cartCount: number;
  wishlistCount: number;
}

const MENU_ITEMS = [
  { label: 'OUR STORY', href: '#story' },
  { label: 'OUR RITUALS', href: '#rituals' },
  { label: 'JEWELLERY', href: '#jewellery' },
  { label: 'COLLECTIONS', href: '#collections' },
  { label: 'CUSTOMISATION', href: '#customisation' },
  { label: 'JUST FOR YOU', href: '#for-you' },
  { label: 'SHOP BY TYPE', href: '#types' },
  { label: 'DIVINE IDOLS', href: '#divine-idols' },
];

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onOpenSearch,
  onOpenCart,
  onOpenWishlist,
  cartCount,
  wishlistCount,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-out Drawer */}
      <div className="relative w-full max-w-xs sm:max-w-sm bg-[#FAF3EB] text-[#2A1612] h-full shadow-2xl flex flex-col justify-between overflow-y-auto border-r border-[#E9D1B5] z-10 animate-in slide-in-from-left duration-300">
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#E9D1B5]">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold text-[#4A0712]">HK Jewellers</span>
              <span className="text-[10px] text-[#B88A3B] font-serif italic">Est. 1994</span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close Navigation"
              className="p-1 text-[#2A1612] hover:text-[#4A0712] rounded transition-colors"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Quick Actions Bar */}
          <div className="grid grid-cols-4 border-b border-[#E9D1B5] text-[#2A1612] py-2 px-1 text-center text-xs">
            <button
              onClick={() => { onClose(); onOpenSearch(); }}
              className="flex flex-col items-center gap-1 py-1 hover:text-[#4A0712]"
            >
              <Search className="w-4 h-4" />
              <span className="text-[9px] uppercase tracking-wider">Search</span>
            </button>
            <button
              onClick={onClose}
              className="flex flex-col items-center gap-1 py-1 hover:text-[#4A0712]"
            >
              <User className="w-4 h-4" />
              <span className="text-[9px] uppercase tracking-wider">Account</span>
            </button>
            <button
              onClick={() => { onClose(); onOpenWishlist(); }}
              className="flex flex-col items-center gap-1 py-1 hover:text-[#4A0712] relative"
            >
              <Heart className="w-4 h-4" />
              <span className="text-[9px] uppercase tracking-wider">Wishlist ({wishlistCount})</span>
            </button>
            <button
              onClick={() => { onClose(); onOpenCart(); }}
              className="flex flex-col items-center gap-1 py-1 hover:text-[#4A0712] relative"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-[9px] uppercase tracking-wider">Bag ({cartCount})</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3 rounded text-xs font-semibold tracking-[0.18em] uppercase text-[#2A1612] hover:bg-[#F7EBDD] hover:text-[#4A0712] transition-colors border-b border-[#E9D1B5]/40"
              >
                <span>{item.label}</span>
                <span className="text-[#B88A3B] text-xs">›</span>
              </a>
            ))}
          </nav>

          <div className="px-6 py-2">
            <div className="flex items-center justify-center gap-2 my-2">
              <OrnamentalFlourish flip className="w-6 h-2" color="#B88A3B" />
              <span className="font-serif italic text-xs text-[#B88A3B]">Crafted with Reverence</span>
              <OrnamentalFlourish className="w-6 h-2" color="#B88A3B" />
            </div>
          </div>
        </div>

        {/* Drawer Footer Contact Info */}
        <div className="p-4 bg-[#F7EBDD] border-t border-[#E9D1B5] text-xs text-[#2A1612]/80 space-y-1.5">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#B88A3B]" />
            <span>Karol Bagh, New Delhi, 110005</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#B88A3B]" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#B88A3B]" />
            <span>hello@hkjewellers.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
