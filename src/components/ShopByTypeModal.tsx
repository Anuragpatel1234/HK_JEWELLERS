import React, { useState } from 'react';
import { X, ShoppingBag, Eye, Heart, Sparkles, Filter } from 'lucide-react';
import { CATEGORIES } from '../data/jewelleryData';
import type { ModalProductDetails } from './QuickViewModal';

interface ShopByTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: ModalProductDetails) => void;
  onAddToCart: (item: ModalProductDetails) => void;
  onToggleWishlist: (item: ModalProductDetails) => void;
  wishlistTitles: string[];
}

export const ShopByTypeModal: React.FC<ShopByTypeModalProps> = ({
  isOpen,
  onClose,
  onSelectItem,
  onAddToCart,
  onToggleWishlist,
  wishlistTitles,
}) => {
  const [selectedType, setSelectedType] = useState<string>('all');

  if (!isOpen) return null;

  // Combine categories and custom designs into a unified interactive catalog
  const catalog: ModalProductDetails[] = [
    {
      title: 'The Nizam Polki Choker',
      subtitle: 'Necklaces',
      tagline: 'Kundan Meenakari with Zambian Emeralds',
      description: 'Masterfully set in 22K hallmarked gold with certified uncut diamonds and natural emerald droplets.',
      image: '/assets/customisation/custom_1_highres.jpg',
      goldPurity: '22K Hallmarked Gold',
    },
    {
      title: 'Gaja Makara Antique Kadas',
      subtitle: 'Bangles',
      tagline: 'Nakshi Repoussé with Natural Rubies',
      description: 'Hand-chased elephant motif kadas in antique 22K gold featuring cabochon Burma rubies.',
      image: '/assets/customisation/custom_2_highres.jpg',
      goldPurity: '22K Antique Gold',
    },
    {
      title: 'Maharani Chandelier Earrings',
      subtitle: 'Earrings',
      tagline: 'Jadau Filigree with Basra Pearls',
      description: 'Stately chandeliers with intricate floral jali and graduated Basra seed pearl cascades.',
      image: '/assets/customisation/custom_3_highres.jpg',
      goldPurity: '22K Hallmarked Gold',
    },
    {
      title: 'Rani Haar Emerald Cascade',
      subtitle: 'Necklaces',
      tagline: 'Temple Setting with Russian Emerald Drops',
      description: 'Magnificent five-row temple necklace culminating in a grand floral emerald medallion.',
      image: '/assets/customisation/custom_4_highres.jpg',
      goldPurity: '22K Solid Gold',
    },
    {
      title: 'Lord Ganesha Divine Idol',
      subtitle: 'Divine Idols',
      tagline: 'Solid 22K Gold with 24K Leaf Finish',
      description: 'Sacred idol sculpted in solid 22K gold with auspicious repoussé lotus pedestal.',
      image: '/assets/divine/ganesha_idol.png',
      goldPurity: '22K Solid Gold',
    },
    ...CATEGORIES.map(c => ({
      title: c.name,
      subtitle: c.name.toLowerCase().includes('necklace') ? 'Necklaces' : c.name.toLowerCase().includes('earring') ? 'Earrings' : c.name.toLowerCase().includes('bangle') || c.name.toLowerCase().includes('bange') ? 'Bangles' : 'Rings',
      tagline: c.tagline,
      description: c.description,
      image: c.image,
      goldPurity: '22K Hallmarked Gold',
    })),
  ];

  const filteredCatalog = selectedType === 'all'
    ? catalog
    : catalog.filter(i => (i.subtitle || '').toLowerCase().includes(selectedType.toLowerCase()));

  const types = [
    { id: 'all', label: 'All Adornments' },
    { id: 'necklaces', label: 'Necklaces & Chokers' },
    { id: 'earrings', label: 'Earrings & Jhumkas' },
    { id: 'bangles', label: 'Bangles & Kadas' },
    { id: 'rings', label: 'Rings & Bands' },
    { id: 'divine idols', label: 'Divine Idols' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#FAF3EB] border border-[#B88A3B]/50 rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#E9D1B5] bg-[#FFF7ED]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#4A0712]" />
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2A1612]">
                Shop By Jewellery Type & Curated Vault
              </h3>
              <p className="text-[11px] text-[#8F6623]">
                Explore Hallmarked Masterpieces Across Every Adornment Category
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Shop By Type"
            className="p-1 text-[#2A1612] hover:text-[#4A0712] rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#FAE7D8] border-b border-[#E9D1B5] overflow-x-auto no-scrollbar">
          <Filter className="w-3.5 h-3.5 text-[#8F6623] flex-shrink-0" />
          {types.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedType(t.id)}
              className={`px-3 py-1 text-xs font-sans rounded-full border transition-all whitespace-nowrap cursor-pointer ${
                selectedType === t.id
                  ? 'bg-[#4A0712] text-[#FFF7ED] border-[#4A0712] font-semibold'
                  : 'bg-[#FAF3EB] text-[#2A1612] border-[#E9D1B5] hover:border-[#B88A3B]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Catalog Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {filteredCatalog.map((item, idx) => {
              const isWishlisted = wishlistTitles.includes(item.title);
              return (
                <div
                  key={`${item.title}-${idx}`}
                  className="bg-[#FAF3EB] rounded-lg border border-[#E9D1B5] hover:border-[#B88A3B] shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div className="relative aspect-square bg-[#1E0E0B] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Quick Action Overlay */}
                    <div className="absolute top-2 right-2 flex flex-col gap-1.5 z-10">
                      <button
                        onClick={() => onToggleWishlist(item)}
                        className={`p-1.5 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                          isWishlisted ? 'bg-[#4A0712] text-[#D8B477]' : 'bg-black/40 text-white hover:bg-black/60'
                        }`}
                        title="Wishlist"
                      >
                        <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
                      </button>
                    </div>

                    <div className="absolute bottom-2 left-2 bg-[#4A0712]/90 text-[#D8B477] text-[9px] font-sans px-2 py-0.5 rounded border border-[#B88A3B]/40">
                      {item.goldPurity || '22K Hallmarked'}
                    </div>
                  </div>

                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#8F6623] block">
                        {item.subtitle}
                      </span>
                      <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#2A1612] truncate mt-0.5">
                        {item.title}
                      </h4>
                      {item.tagline && (
                        <p className="text-[10px] text-[#2A1612]/70 line-clamp-1 mt-0.5">
                          {item.tagline}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mt-3 pt-2 border-t border-[#E9D1B5]/70">
                      <button
                        onClick={() => {
                          onClose();
                          onSelectItem(item);
                        }}
                        className="flex-1 text-[10px] font-sans font-semibold uppercase tracking-wider py-1.5 px-2 bg-[#FAE7D8] hover:bg-[#E9D1B5] text-[#2A1612] rounded flex items-center justify-center gap-1 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3 h-3" />
                        <span>Preview</span>
                      </button>

                      <button
                        onClick={() => onAddToCart(item)}
                        className="flex-1 text-[10px] font-sans font-semibold uppercase tracking-wider py-1.5 px-2 bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] rounded flex items-center justify-center gap-1 transition-colors cursor-pointer shadow-sm"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
