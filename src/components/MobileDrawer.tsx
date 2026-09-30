import React from 'react';
import { X, Search, User, Heart, ShoppingBag, Phone, Mail, MapPin, TrendingUp, RefreshCw, Sparkles, ShieldCheck } from 'lucide-react';
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
  { id: 'bridal-rivaah', label: 'BRIDAL RIVAAH', badge: 'Hot' },
  { id: 'jewellery', label: 'JEWELLERY & VAULT' },
  { id: 'mangalsutra', label: 'MANGALSUTRAS' },
  { id: 'dailywear', label: 'DAILY WEAR (MIA STYLE)' },
  { id: 'coins', label: 'GOLD COINS (24K BULLION)' },
  { id: 'mens', label: "MEN'S COLLECTION" },
  { id: 'collections', label: 'CURATED COLLECTIONS' },
  { id: 'customisation', label: 'BESPOKE CUSTOMISATION' },
  { id: 'gold-rate', label: 'LIVE GOLD RATE & BREAKUP', isSpecial: true, icon: TrendingUp },
  { id: 'gold-exchange', label: '100% OLD GOLD EXCHANGE', isSpecial: true, icon: RefreshCw },
  { id: 'savings-scheme', label: 'SWARN SAMRIDDHI SAVINGS', isSpecial: true, icon: Sparkles },
  { id: 'hk-promise', label: 'THE HK PROMISE (10 PILLARS)', isSpecial: true, icon: ShieldCheck },
  { id: 'rituals', label: 'OUR HERITAGE RITUALS' },
  { id: 'story', label: 'OUR 40-YEAR STORY' },
  { id: 'divine-idols', label: 'DIVINE SACRED IDOLS' },
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
          <div className="flex items-center justify-between p-4 border-b border-[#E9D1B5] bg-[#FFF7ED]">
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
          <div className="grid grid-cols-4 border-b border-[#E9D1B5] text-[#2A1612] py-2 px-1 text-center text-xs bg-white/70">
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
          <nav className="p-3 space-y-1">
            {MENU_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onClose();
                    onSelectNavItem(item.id);
                  }}
                  className={`w-full flex items-center justify-between py-2 px-3 rounded text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors border-b border-[#E9D1B5]/30 text-left cursor-pointer ${
                    item.isSpecial
                      ? 'bg-[#FFF7ED] text-[#4A0712] border-l-2 border-l-[#4A0712] hover:bg-[#FAE7D8]'
                      : 'text-[#2A1612] hover:bg-[#FAE7D8] hover:text-[#4A0712]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {Icon && <Icon className="w-3.5 h-3.5 text-[#B88A3B]" />}
                    <span>{item.label}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {item.badge && (
                      <span className="text-[8px] bg-[#4A0712] text-[#FFF7ED] font-bold px-1.5 py-0.2 rounded-full uppercase">
                        {item.badge}
                      </span>
                    )}
                    <span className="text-[#B88A3B] text-xs">›</span>
                  </div>
                </button>
              );
            })}
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
            <span>Madhavbag Tenament, Nirnay Nagar, Ahmedabad 382481</span>
          </button>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#B88A3B] flex-shrink-0" />
            <a href="tel:+917069916916" className="hover:text-[#4A0712]">+91 70699 16916</a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#B88A3B] flex-shrink-0" />
            <a href="mailto:contact@hkjewellers.shop" className="hover:text-[#4A0712]">contact@hkjewellers.shop</a>
          </div>
        </div>
      </div>
    </div>
  );
};
