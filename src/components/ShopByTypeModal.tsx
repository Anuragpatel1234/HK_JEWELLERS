import React, { useState } from 'react';
import { X, ShoppingBag, Eye, Heart, Sparkles, Filter, Search } from 'lucide-react';
import { ALL_CUSTOM_DESIGNS, JEWELLERY_FILTER_TYPES } from '../data/jewelleryData';
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
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  // Convert all 54+ authentic products into interactive catalog
  const catalog: ModalProductDetails[] = ALL_CUSTOM_DESIGNS.map(item => ({
    title: item.title,
    subtitle: item.categoryLabel || item.craft,
    tagline: item.gemstone,
    gemstones: item.gemstone,
    description: item.description || `Sculpted in ${item.goldPurity} featuring ${item.gemstone}. Traditional karigari handcrafted over ${item.karigariHours || 200} man-hours.`,
    image: item.image,
    goldPurity: item.goldPurity,
    price: item.priceEst,
    tags: item.tags,
    karigariHours: item.karigariHours,
    weightGrams: item.weightGrams,
    craft: item.craft,
    category: item.categoryLabel,
  }));

  const filteredCatalog = catalog.filter(item => {
    // 1. Category filter
    const matchesCategory = selectedType === 'all'
      ? true
      : ALL_CUSTOM_DESIGNS.find(d => d.title === item.title)?.category === selectedType;

    // 2. Search query filter
    const matchesSearch = searchQuery.trim() === ''
      ? true
      : item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tagline && item.tagline.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const types = JEWELLERY_FILTER_TYPES;


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

        {/* Search & Filter Bar */}
        <div className="px-4 py-3 bg-[#FAF5ED] border-b border-[#EAE0D2] space-y-2">
          {/* Quick Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#8F6623] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by jewellery piece, gemstone, or craft..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#FCF9F5] text-[#2A1612] placeholder-[#2A1612]/50 text-xs rounded-xl border border-[#EAE0D2] focus:outline-none focus:border-[#B88A3B]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#2A1612]/60 hover:text-[#3B0810]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1">
            <Filter className="w-3.5 h-3.5 text-[#8F6623] flex-shrink-0 mr-1" />
            {types.map((t) => {
              const count = t.id === 'all'
                ? catalog.length
                : ALL_CUSTOM_DESIGNS.filter(d => d.category === t.id).length;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedType(t.id)}
                  className={`px-3 py-1.5 text-xs font-sans rounded-full border transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    selectedType === t.id
                      ? 'bg-[#3B0810] text-[#FFF7ED] border-[#3B0810] font-semibold'
                      : 'bg-[#FCF9F5] text-[#2A1612] border-[#EAE0D2] hover:border-[#B88A3B]'
                  }`}
                >
                  <span>{t.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedType === t.id ? 'bg-[#D8B477] text-[#2A1612]' : 'bg-[#EAE0D2] text-[#2A1612]/80'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3 text-xs text-[#8F6623]">
            <span>Showing {filteredCatalog.length} Hallmarked Masterpieces</span>
            {selectedType !== 'all' && (
              <button
                onClick={() => setSelectedType('all')}
                className="underline hover:text-[#4A0712] cursor-pointer"
              >
                Reset Filter
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {filteredCatalog.map((item, idx) => {
              const isWishlisted = wishlistTitles.includes(item.title);
              const numPrice = parseInt((item.price || '0').replace(/[^0-9]/g, '')) || 0;
              const mrpVal = numPrice > 0 ? `₹${Math.round(numPrice * 1.07).toLocaleString('en-IN')}` : null;
              const grossNum = parseFloat((item.weightGrams || '45g').replace(/[^0-9.]/g, '')) || 45;
              const netWeightVal = `${(grossNum * 0.82).toFixed(1)}g`;

              return (
                <div
                  key={`${item.title}-${idx}`}
                  className="bg-[#FCF9F5] rounded-xl border border-[#EAE0D2] hover:border-[#B88A3B] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                >
                  {/* Image Container: 100% Uncluttered */}
                  <div className="relative aspect-square bg-[#FAF5ED] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Wishlist Button */}
                    <button
                      onClick={() => onToggleWishlist(item)}
                      className={`absolute top-2 right-2 p-1.5 rounded-full backdrop-blur-md transition-colors cursor-pointer z-10 shadow-sm ${
                        isWishlisted ? 'bg-[#3B0810] text-[#D8B477]' : 'bg-black/30 text-white hover:bg-black/60'
                      }`}
                      title="Wishlist"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[8.5px] font-bold uppercase tracking-wider text-[#8F6623]">
                          {item.subtitle}
                        </span>
                        <span className="text-[9.5px] font-sans text-[#2A1612] bg-[#F6EFE6] px-1.5 py-0.5 rounded-md border border-[#E8DBCB]">
                          Net: {netWeightVal}
                        </span>
                      </div>
                      <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#3B0810] truncate mt-0.5" title={item.title}>
                        {item.title}
                      </h4>
                      {item.tagline && (
                        <p className="text-[10px] text-[#7A5B46] italic font-serif truncate mt-0.5">
                          {item.tagline}
                        </p>
                      )}
                      
                      <div className="mt-1 flex items-baseline gap-1.5">
                        <span className="text-xs sm:text-sm font-bold text-[#2A1612] font-serif">
                          {item.price}
                        </span>
                        {mrpVal && (
                          <span className="text-[9px] text-[#8A7E76] line-through font-sans">
                            {mrpVal}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-[#EAE0D2]">
                      <button
                        onClick={() => {
                          onClose();
                          onSelectItem(item);
                        }}
                        className="flex-1 text-[10px] font-sans font-bold uppercase tracking-wider py-2 px-2 bg-[#FAF4EC] hover:bg-[#F2E8DC] text-[#3B0810] rounded-xl flex items-center justify-center gap-1 transition-colors cursor-pointer border border-[#DFD3C3]"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#3B0810]" />
                        <span>QUICK VIEW</span>
                      </button>

                      <button
                        onClick={() => onAddToCart(item)}
                        className="flex-1 text-[10px] font-sans font-bold uppercase tracking-wider py-2 px-2 bg-[#3B0810] hover:bg-[#2A050C] text-white rounded-xl flex items-center justify-center gap-1 transition-colors cursor-pointer shadow-sm active:scale-95"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#D8B477]" />
                        <span>ADD</span>
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
