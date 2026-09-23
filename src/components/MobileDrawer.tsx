import React from 'react';
import { X, Search, User, Heart, ShoppingBag, Phone, Mail, MapPin } from 'lucide-react';
import { OrnamentalFlourish } from './OrnamentalDivider';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenAccount: () => void;
  onSelectNavItem: (id: string) => void;
  onOpenInfo: (topic: string) => void;
  cartCount: number;
  wishlistCount: number;
}

const MENU_ITEMS = [
  { id: 'story', label: 'OUR STORY' },
  { id: 'rituals', label: 'OUR RITUALS' },
  { id: 'jewellery', label: 'JEWELLERY' },
  { id: 'collections', label: 'COLLECTIONS' },
  { id: 'customisation', label: 'CUSTOMISATION' },
  { id: 'for-you', label: 'JUST FOR YOU' },
  { id: 'types', label: 'SHOP BY TYPE' },
  { id: 'divine-idols', label: 'DIVINE IDOLS' },
];

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onOpenSearch,
  onOpenCart,
  onOpenWishlist,
  onOpenAccount,
  onSelectNavItem,
  onOpenInfo,
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
              className="p-1 text-[#2A1612] hover:text-[#4A0712] rounded transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Quick Actions Bar */}
          <div className="grid grid-cols-4 border-b border-[#E9D1B5] text-[#2A1612] py-2 px-1 text-center text-xs">
            <button
              onClick={() => { onClose(); onOpenSearch(); }}
              className="flex flex-col items-center gap-1 py-1 hover:text-[#4A0712] cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span className="text-[9px] uppercase tracking-wider">Search</span>
            </button>
            <button
              onClick={() => { onClose(); onOpenAccount(); }}
              className="flex flex-col items-center gap-1 py-1 hover:text-[#4A0712] cursor-pointer"
            >
              <User className="w-4 h-4" />
              <span className="text-[9px] uppercase tracking-wider">Account</span>
            </button>
            <button
              onClick={() => { onClose(); onOpenWishlist(); }}
              className="flex flex-col items-center gap-1 py-1 hover:text-[#4A0712] relative cursor-pointer"
            >
              <Heart className="w-4 h-4" />
              <span className="text-[9px] uppercase tracking-wider">Wishlist ({wishlistCount})</span>
            </button>
            <button
              onClick={() => { onClose(); onOpenCart(); }}
              className="flex flex-col items-center gap-1 py-1 hover:text-[#4A0712] relative cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-[9px] uppercase tracking-wider">Bag ({cartCount})</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onClose();
                  onSelectNavItem(item.id);
                }}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded text-xs font-semibold tracking-[0.18em] uppercase text-[#2A1612] hover:bg-[#FAE7D8] hover:text-[#4A0712] transition-colors border-b border-[#E9D1B5]/40 text-left cursor-pointer"
              >
                <span>{item.label}</span>
                <span className="text-[#B88A3B] text-xs">›</span>
              </button>
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
        <div className="p-4 bg-[#FAE7D8] border-t border-[#E9D1B5] text-xs text-[#2A1612]/80 space-y-2">
          <button
            onClick={() => {
              onClose();
              onOpenInfo('store-locator');
            }}
            className="flex items-center gap-2 hover:text-[#4A0712] text-left w-full cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#B88A3B] flex-shrink-0" />
            <span>1502, Karol Bagh, New Delhi, 110005</span>
          </button>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#B88A3B] flex-shrink-0" />
            <a href="tel:+919876543210" className="hover:text-[#4A0712]">+91 98765 43210</a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#B88A3B] flex-shrink-0" />
            <a href="mailto:hello@hkjewellers.com" className="hover:text-[#4A0712]">hello@hkjewellers.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};
