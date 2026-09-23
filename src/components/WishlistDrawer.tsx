import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import type { ModalProductDetails } from './QuickViewModal';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: ModalProductDetails[];
  onRemoveItem: (title: string) => void;
  onMoveToBag: (item: ModalProductDetails) => void;
  onMoveAllToBag: () => void;
  onExploreCollections: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onMoveToBag,
  onMoveAllToBag,
  onExploreCollections,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-out Drawer */}
      <div className="relative w-full max-w-sm sm:max-w-md bg-[#FAF3EB] text-[#2A1612] h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-[#E9D1B5] z-10 animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#E9D1B5] bg-[#FFF7ED]">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#4A0712] fill-[#4A0712]" />
            <h3 className="font-serif text-lg font-bold text-[#2A1612]">Saved Heirlooms</h3>
            <span className="text-xs text-[#8F6623] font-sans">({items.length} {items.length === 1 ? 'piece' : 'pieces'})</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Wishlist"
            className="p-1 text-[#2A1612] hover:text-[#4A0712] rounded transition-colors"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Free Shipping Strip */}
        <div className="bg-[#4A0712] text-[#FFF7ED] text-[10px] sm:text-[11px] py-1.5 px-3 text-center tracking-wider font-sans uppercase">
          ✦ Handcrafted to Order • Lifetime Hallmark Authenticity
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
          {items.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAE7D8] flex items-center justify-center mx-auto text-[#B88A3B]">
                <Heart className="w-8 h-8 stroke-[1.2]" />
              </div>
              <p className="font-serif text-xl text-[#2A1612]/80">Your Wishlist is Empty</p>
              <p className="text-xs text-[#2A1612]/60 max-w-xs mx-auto leading-relaxed">
                Save your favourite bridal sets, kadas, and signature temple jewels to revisit them anytime.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onExploreCollections();
                }}
                className="mt-2 inline-flex items-center gap-1.5 bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] font-sans text-xs uppercase tracking-wider py-2.5 px-6 rounded-[3px] transition-all cursor-pointer"
              >
                <span>Browse Curated Collections</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3.5 p-3 bg-[#FAE7D8] rounded-lg border border-[#E9D1B5] shadow-sm hover:border-[#D8B477] transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded bg-[#1E0E0B] border border-[#B88A3B]/30 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-[#B88A3B] block">
                    {item.subtitle || 'Imperial Collection'}
                  </span>
                  <h4 className="font-serif text-sm font-semibold text-[#2A1612] truncate">
                    {item.title}
                  </h4>
                  <p className="text-[10.5px] text-[#4A0712] font-medium mt-0.5">
                    {item.goldPurity || '22K Hallmarked Gold'}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onMoveToBag(item)}
                      className="inline-flex items-center gap-1 bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] text-[10px] font-sans font-semibold uppercase tracking-wider px-2.5 py-1 rounded transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Move to Bag</span>
                    </button>
                    <button
                      onClick={() => onRemoveItem(item.title)}
                      className="text-[#2A1612]/60 hover:text-red-700 p-1 transition-colors cursor-pointer"
                      title="Remove from Wishlist"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Wishlist Bottom Bar */}
        {items.length > 0 && (
          <div className="p-4 bg-[#FAF3EB] border-t border-[#E9D1B5] space-y-2">
            <button
              onClick={onMoveAllToBag}
              className="w-full bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] font-sans text-xs tracking-[0.16em] uppercase font-semibold py-3 px-4 rounded-[4px] border border-[#B88A3B]/40 hover:border-[#D8B477] transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.98] cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Move All to Bag ({items.length})</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
