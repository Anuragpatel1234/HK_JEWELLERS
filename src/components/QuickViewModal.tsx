import React from 'react';
import { X, Heart, ShoppingBag, ShieldCheck, Sparkles } from 'lucide-react';

export interface ModalProductDetails {
  title: string;
  subtitle?: string;
  tagline?: string;
  description: string;
  image: string;
  goldPurity?: string;
  gemstones?: string;
  price?: string;
}

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ModalProductDetails | null;
  onAddToCart: (product: ModalProductDetails) => void;
  onToggleWishlist: (product: ModalProductDetails) => void;
  isWishlisted?: boolean;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  isOpen,
  onClose,
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
}) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-[#FAF3EB] border border-[#B88A3B]/40 rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Preview"
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content Container */}
        <div className="overflow-y-auto">
          {/* Image Showcase */}
          <div className="w-full aspect-[4/3] bg-[#1E0E0B] relative overflow-hidden border-b border-[#E9D1B5]">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain p-4"
            />
            <div className="absolute bottom-2 left-3 bg-[#4A0712]/90 text-[#D8B477] text-[10px] font-sans px-2.5 py-1 rounded border border-[#B88A3B]/40 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Certified 22K Hallmarked</span>
            </div>
          </div>

          {/* Details */}
          <div className="p-5 sm:p-6 space-y-4">
            <div>
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#B88A3B] uppercase">
                {product.subtitle || 'Heritage Collection'}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2A1612] font-semibold mt-1">
                {product.title}
              </h3>
              {product.tagline && (
                <p className="font-serif italic text-sm text-[#4A0712] mt-0.5">
                  "{product.tagline}"
                </p>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#2A1612]/80 leading-relaxed">
              {product.description}
            </p>

            {/* Specifications */}
            <div className="bg-[#FAE7D8] p-3 rounded-lg border border-[#E9D1B5] grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-[#8F6623] block text-[10px] uppercase font-semibold">Purity</span>
                <span className="font-medium text-[#2A1612]">{product.goldPurity || '22 Karat Yellow Gold'}</span>
              </div>
              <div>
                <span className="text-[#8F6623] block text-[10px] uppercase font-semibold">Certification</span>
                <span className="font-medium text-[#2A1612] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#B88A3B]" /> BIS 916 Hallmark
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => onAddToCart(product)}
                className="flex-1 bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] font-sans text-xs tracking-[0.16em] uppercase font-semibold py-3 px-4 rounded-[4px] border border-[#B88A3B]/40 hover:border-[#D8B477] transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.98]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag</span>
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                aria-label="Wishlist Item"
                className={`p-3 rounded-[4px] border transition-colors ${
                  isWishlisted
                    ? 'bg-[#4A0712] border-[#4A0712] text-[#D8B477]'
                    : 'bg-[#FAE7D8] border-[#B88A3B]/40 hover:border-[#4A0712] text-[#4A0712]'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
