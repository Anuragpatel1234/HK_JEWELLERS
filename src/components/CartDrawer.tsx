import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import type { ModalProductDetails } from './QuickViewModal';

export interface CartItem extends ModalProductDetails {
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (title: string) => void;
  onUpdateQuantity: (title: string, delta: number) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQuantity,
  onCheckout,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Slide-out Drawer */}
      <div className="relative w-full max-w-sm bg-[#FAF3EB] text-[#2A1612] h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-[#E9D1B5] z-10 animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#E9D1B5]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#4A0712]" />
            <h3 className="font-serif text-lg font-bold text-[#2A1612]">Your Shopping Bag</h3>
            <span className="text-xs text-[#8F6623] font-sans">({items.reduce((acc, i) => acc + i.quantity, 0)} items)</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Shopping Bag"
            className="p-1 text-[#2A1612] hover:text-[#4A0712] rounded transition-colors"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Free Shipping Notification Strip */}
        <div className="bg-[#4A0712] text-[#FFF7ED] text-[10px] sm:text-[11px] py-1.5 px-3 text-center tracking-wider font-sans uppercase">
          ✦ Complimentary Insured Delivery on all Prepaid Orders
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <ShoppingBag className="w-12 h-12 text-[#B88A3B]/40 mx-auto stroke-[1]" />
              <p className="font-serif text-lg text-[#2A1612]/70">Your shopping bag is empty</p>
              <p className="text-xs text-[#2A1612]/50 max-w-xs mx-auto">
                Explore our exquisite Indian heritage collection and add timeless adornments.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 p-2.5 bg-[#F7EBDD] rounded-lg border border-[#E9D1B5]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded bg-[#1E0E0B] border border-[#B88A3B]/30 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-sm font-semibold text-[#2A1612] truncate">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-[#8F6623]">{item.goldPurity || '22K Hallmarked Gold'}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <button
                      onClick={() => onUpdateQuantity(item.title, -1)}
                      className="w-5 h-5 bg-[#FAF3EB] border border-[#B88A3B]/40 rounded text-xs flex items-center justify-center hover:bg-[#E9D1B5]"
                    >
                      -
                    </button>
                    <span className="text-xs font-semibold px-1">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.title, 1)}
                      className="w-5 h-5 bg-[#FAF3EB] border border-[#B88A3B]/40 rounded text-xs flex items-center justify-center hover:bg-[#E9D1B5]"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveItem(item.title)}
                  className="text-gray-400 hover:text-red-700 p-1 transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Bottom Actions */}
        {items.length > 0 && (
          <div className="p-4 bg-[#FAF3EB] border-t border-[#E9D1B5] space-y-3">
            <div className="flex items-center justify-between text-xs text-[#2A1612]/80">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B88A3B]" /> 100% Certified & Insured
              </span>
              <span className="text-[#4A0712] font-semibold">Ready for Dispatch</span>
            </div>

            <button
              onClick={onCheckout}
              className="w-full bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] font-sans text-xs tracking-[0.18em] uppercase font-semibold py-3 px-4 rounded-[4px] border border-[#B88A3B]/40 hover:border-[#D8B477] transition-all flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(74,7,18,0.3)] active:scale-[0.98]"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
