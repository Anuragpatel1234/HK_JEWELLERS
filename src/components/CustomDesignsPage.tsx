import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Search,
  SlidersHorizontal,
  Sparkles,
  Heart,
  ShoppingBag,
  Eye,
  Hammer,
  ShieldCheck,
  Clock,
  Gem,
  CheckCircle2,
  X,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { ALL_CUSTOM_DESIGNS, JEWELLERY_FILTER_TYPES } from '../data/jewelleryData';
import type { CustomJewelleryItem } from '../data/jewelleryData';
import type { ModalProductDetails } from './QuickViewModal';

interface CustomDesignsPageProps {
  onBackToHome: () => void;
  onSelectProduct: (product: ModalProductDetails) => void;
  onAddToCart: (product: ModalProductDetails) => void;
  onToggleWishlist: (product: ModalProductDetails) => void;
  onOpenCustomStudio: (design?: CustomJewelleryItem) => void;
  wishlistTitles: string[];
}

export const CustomDesignsPage: React.FC<CustomDesignsPageProps> = ({
  onBackToHome,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  onOpenCustomStudio,
  wishlistTitles,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [purityFilter, setPurityFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [addedToast, setAddedToast] = useState<string | null>(null);

  // Compute counts per category for the filter tabs
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: ALL_CUSTOM_DESIGNS.length };
    ALL_CUSTOM_DESIGNS.forEach((item) => {
      const cat = item.category || 'other';
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    return ALL_CUSTOM_DESIGNS.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Purity match
      if (purityFilter !== 'all') {
        if (!item.goldPurity.toLowerCase().includes(purityFilter.toLowerCase())) {
          return false;
        }
      }
      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchCraft = item.craft.toLowerCase().includes(query);
        const matchGem = item.gemstone.toLowerCase().includes(query);
        const matchDesc = item.description?.toLowerCase().includes(query) || false;
        const matchTags = item.tags?.some((t) => t.toLowerCase().includes(query)) || false;
        if (!matchTitle && !matchCraft && !matchGem && !matchDesc && !matchTags) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'karigari-desc') {
        return (b.karigariHours || 0) - (a.karigariHours || 0);
      }
      if (sortBy === 'price-desc') {
        const pA = parseInt((a.priceEst || '0').replace(/[^0-9]/g, '')) || 0;
        const pB = parseInt((b.priceEst || '0').replace(/[^0-9]/g, '')) || 0;
        return pB - pA;
      }
      if (sortBy === 'price-asc') {
        const pA = parseInt((a.priceEst || '0').replace(/[^0-9]/g, '')) || 0;
        const pB = parseInt((b.priceEst || '0').replace(/[^0-9]/g, '')) || 0;
        return pA - pB;
      }
      // Default: featured first, then original order
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [selectedCategory, purityFilter, searchQuery, sortBy]);

  const handleProductCardClick = (item: CustomJewelleryItem) => {
    onSelectProduct({
      title: item.title,
      subtitle: `${item.craft} · ${item.categoryLabel || 'Bespoke Collection'}`,
      tagline: item.gemstone,
      description: item.description || `Bespoke jewellery customisation sculpted in ${item.goldPurity} featuring ${item.gemstone}. Traditional karigari handcrafted over ${item.karigariHours || 250} man-hours.`,
      image: item.image,
      goldPurity: item.goldPurity,
      gemstones: item.gemstone,
      price: item.priceEst,
      tags: item.tags,
      karigariHours: item.karigariHours,
      weightGrams: item.weightGrams,
      craft: item.craft,
      category: item.categoryLabel,
    });
  };

  const handleAddCardToBag = (e: React.MouseEvent, item: CustomJewelleryItem) => {
    e.stopPropagation();
    onAddToCart({
      title: item.title,
      subtitle: item.craft,
      tagline: item.gemstone,
      description: item.description || `${item.craft} in ${item.goldPurity}`,
      image: item.image,
      goldPurity: item.goldPurity,
      gemstones: item.gemstone,
      price: item.priceEst,
      tags: item.tags,
      karigariHours: item.karigariHours,
      weightGrams: item.weightGrams,
      craft: item.craft,
      category: item.categoryLabel,
    });
    setAddedToast(`Added "${item.title}" to bag`);
    setTimeout(() => setAddedToast(null), 3200);
  };

  const handleWishlistCardToggle = (e: React.MouseEvent, item: CustomJewelleryItem) => {
    e.stopPropagation();
    onToggleWishlist({
      title: item.title,
      subtitle: item.craft,
      tagline: item.gemstone,
      description: item.description || `${item.craft} in ${item.goldPurity}`,
      image: item.image,
      goldPurity: item.goldPurity,
      gemstones: item.gemstone,
      price: item.priceEst,
      tags: item.tags,
      karigariHours: item.karigariHours,
      weightGrams: item.weightGrams,
      craft: item.craft,
      category: item.categoryLabel,
    });
  };

  return (
    <div className="w-full bg-[#FAE7D8] min-h-screen text-[#2A1612]">
      {/* Toast Notification */}
      {addedToast && (
        <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 bg-[#4A0712] text-[#FFF7ED] px-4 py-3 rounded-lg shadow-xl border border-[#D8B477]/40 flex items-center gap-3 animate-in slide-in-from-bottom duration-300">
          <CheckCircle2 className="w-5 h-5 text-[#D8B477] flex-shrink-0" />
          <span className="text-xs sm:text-sm font-sans font-medium">{addedToast}</span>
        </div>
      )}

      {/* Top Breadcrumb & Back Navigation Bar */}
      <div className="border-b border-[#E9D1B5] bg-[#FFF7ED]/80 backdrop-blur-sm sticky top-[57px] sm:top-[65px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#8F6623]">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 hover:text-[#4A0712] transition-colors font-medium cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Showcase</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#E9D1B5]" />
            <span className="font-serif text-[#4A0712] font-semibold hidden sm:inline">
              Custom Atelier
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#E9D1B5] hidden sm:inline" />
            <span className="text-[#2A1612] font-medium truncate max-w-[160px] sm:max-w-none">
              All Custom Designs ({filteredProducts.length})
            </span>
          </div>

          <button
            onClick={() => onOpenCustomStudio()}
            className="inline-flex items-center gap-1.5 bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] text-[10px] sm:text-xs font-sans uppercase tracking-wider font-semibold py-1.5 sm:py-2 px-3 sm:px-4 rounded transition-all shadow-sm cursor-pointer"
          >
            <Hammer className="w-3.5 h-3.5 text-[#D8B477]" />
            <span className="hidden xs:inline">Book Bespoke Karigar</span>
            <span className="xs:hidden">Bespoke</span>
          </button>
        </div>
      </div>

      {/* Grand Atelier Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#2D060D] via-[#1E0E0B] to-[#2D060D] text-[#FFF7ED] py-10 sm:py-16 px-4 sm:px-6 border-b border-[#B88A3B]/40">
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D8B477_1px,transparent_1px)] [background-size:24px_24px]" />
        
        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-[#B88A3B]/20 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B88A3B]/15 border border-[#B88A3B]/40 text-[#D8B477] text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The HK Bespoke Karigari Archive</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FFF7ED] font-bold tracking-tight">
            Imperial Custom Jewellery Designs
          </h1>

          <p className="font-sans text-xs sm:text-sm md:text-base text-[#E8D1A7]/90 max-w-2xl mx-auto leading-relaxed font-light">
            Every masterpiece in our atelier is a one-of-a-kind royal commission. Handcrafted over 100 to 500 hours by generational master karigars in certified 22K hallmarked gold and untreated heritage gems.
          </p>

          {/* Heritage Trust Badges */}
          <div className="pt-2 sm:pt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-3xl mx-auto text-left">
            <div className="bg-white/5 backdrop-blur-sm border border-[#D8B477]/20 p-2.5 rounded-lg flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D8B477] flex-shrink-0" />
              <div>
                <span className="block text-[10px] sm:text-[11px] font-bold text-[#FFF7ED]">100% BIS 916</span>
                <span className="block text-[9px] text-[#E8D1A7]/70">Govt Laser Hallmarked</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-[#D8B477]/20 p-2.5 rounded-lg flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D8B477] flex-shrink-0" />
              <div>
                <span className="block text-[10px] sm:text-[11px] font-bold text-[#FFF7ED]">100–500 Hours</span>
                <span className="block text-[9px] text-[#E8D1A7]/70">Hand-Chased Karigari</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-[#D8B477]/20 p-2.5 rounded-lg flex items-center gap-2">
              <Gem className="w-4 h-4 text-[#D8B477] flex-shrink-0" />
              <div>
                <span className="block text-[10px] sm:text-[11px] font-bold text-[#FFF7ED]">Certified Gems</span>
                <span className="block text-[9px] text-[#E8D1A7]/70">Uncut Polki & Emeralds</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-[#D8B477]/20 p-2.5 rounded-lg flex items-center gap-2">
              <Hammer className="w-4 h-4 text-[#D8B477] flex-shrink-0" />
              <div>
                <span className="block text-[10px] sm:text-[11px] font-bold text-[#FFF7ED]">Custom Resetting</span>
                <span className="block text-[9px] text-[#E8D1A7]/70">Ancestral Remodelling</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Jewellery Type Filter Tabs */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.18em] text-[#8F6623]">
              Filter By Jewellery Type
            </span>
            <span className="text-[11px] text-[#2A1612]/60 font-medium">
              Showing {filteredProducts.length} of {ALL_CUSTOM_DESIGNS.length} Masterpieces
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            {JEWELLERY_FILTER_TYPES.map((type) => {
              const count = categoryCounts[type.id] || 0;
              const isSelected = selectedCategory === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedCategory(type.id)}
                  className={`px-3.5 py-2 text-xs font-sans rounded-full border transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#4A0712] text-[#FFF7ED] border-[#4A0712] font-semibold shadow-md'
                      : 'bg-[#FFF7ED] text-[#2A1612] border-[#E9D1B5] hover:border-[#B88A3B] hover:bg-[#FAE7D8]'
                  }`}
                >
                  <span>{type.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isSelected
                        ? 'bg-[#B88A3B]/40 text-[#FFF7ED]'
                        : 'bg-[#E9D1B5] text-[#2A1612]/80'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search, Purity & Sorting Control Bar */}
        <div className="bg-[#FFF7ED] p-3.5 sm:p-4 rounded-xl border border-[#E9D1B5] shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#8F6623] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by gemstone, motif, karigari craft..."
              className="w-full bg-[#FAE7D8] border border-[#E9D1B5] rounded-lg pl-9 pr-8 py-2 text-xs text-[#2A1612] placeholder-[#2A1612]/50 focus:outline-none focus:border-[#B88A3B] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#2A1612]/60 hover:text-[#4A0712] p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Secondary Controls (Purity & Sort) */}
          <div className="flex items-center gap-2.5 w-full md:w-auto justify-between md:justify-end overflow-x-auto no-scrollbar">
            {/* Purity Filter */}
            <div className="flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#8F6623]" />
              <select
                value={purityFilter}
                onChange={(e) => setPurityFilter(e.target.value)}
                className="bg-[#FAE7D8] border border-[#E9D1B5] rounded-lg px-2.5 py-1.5 text-xs text-[#2A1612] focus:outline-none focus:border-[#B88A3B] cursor-pointer"
              >
                <option value="all">All Gold Purities</option>
                <option value="Antique">22K Antique Yellow Gold</option>
                <option value="Hallmarked">22K Hallmarked Gold</option>
                <option value="Solid">22K Solid Gold</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#FAE7D8] border border-[#E9D1B5] rounded-lg px-2.5 py-1.5 text-xs text-[#2A1612] focus:outline-none focus:border-[#B88A3B] cursor-pointer"
              >
                <option value="featured">Sort: Featured Masterpieces</option>
                <option value="karigari-desc">Karigari Hours: High to Low</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="price-asc">Price: Low to High</option>
              </select>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="bg-[#FFF7ED] rounded-xl border border-[#E9D1B5] p-10 text-center space-y-4 my-8">
            <div className="w-14 h-14 rounded-full bg-[#FAE7D8] text-[#8F6623] flex items-center justify-center mx-auto border border-[#E9D1B5]">
              <Layers className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#4A0712]">
              No Custom Designs Matched Your Selection
            </h3>
            <p className="text-xs text-[#2A1612]/70 max-w-md mx-auto leading-relaxed">
              We couldn't find any piece matching "{searchQuery || purityFilter}". Reset filters or talk to our chief karigar to sketch this bespoke jewel from scratch.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setPurityFilter('all');
                  setSortBy('featured');
                }}
                className="px-5 py-2 bg-[#FAE7D8] hover:bg-[#E9D1B5] text-[#2A1612] text-xs font-semibold rounded transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
              <button
                onClick={() => onOpenCustomStudio()}
                className="px-5 py-2 bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] text-xs font-semibold rounded transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Hammer className="w-3.5 h-3.5 text-[#D8B477]" />
                <span>Commission Custom Sketch</span>
              </button>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredProducts.map((item) => {
            const isWishlisted = wishlistTitles.includes(item.title);
            const numPrice = parseInt((item.priceEst || '0').replace(/[^0-9]/g, '')) || 0;
            const mrpVal = numPrice > 0 ? `₹${Math.round(numPrice * 1.07).toLocaleString('en-IN')}` : null;
            const savingsVal = numPrice > 0 ? `₹${Math.round(numPrice * 0.07).toLocaleString('en-IN')}` : null;
            const grossNum = parseFloat((item.weightGrams || '45g').replace(/[^0-9.]/g, '')) || 45;
            const netWeightVal = `${(grossNum * 0.82).toFixed(1)}g`;

            return (
              <div
                key={item.id}
                onClick={() => handleProductCardClick(item)}
                className="group bg-[#FFF7ED] rounded-xl overflow-hidden border border-[#E9D1B5] hover:border-[#B88A3B] transition-all duration-300 hover:shadow-[0_12px_28px_rgba(42,22,18,0.12)] hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
              >
                {/* Product Image: 100% Uncluttered, Pure Luxury Visuals */}
                <div className="relative aspect-square w-full bg-[#FAF3EB] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Wishlist Button: Sleek, unobtrusive luxury circle */}
                  <button
                    onClick={(e) => handleWishlistCardToggle(e, item)}
                    aria-label={`Wishlist ${item.title}`}
                    className={`absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-md transition-all duration-200 z-10 cursor-pointer shadow-md ${
                      isWishlisted
                        ? 'bg-[#4A0712] text-[#D8B477] scale-105'
                        : 'bg-black/30 hover:bg-black/60 text-white/90 hover:text-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Product Information Body */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    {/* Eyebrow: Purity & Craft Lineage */}
                    <div className="flex items-center justify-between text-[10px] text-[#8F6623]">
                      <span className="uppercase tracking-wider font-sans font-semibold">
                        {item.goldPurity || '22K Gold'} · {item.craft}
                      </span>
                      <span className="font-mono text-[#4A0712] font-semibold bg-[#FAE7D8] px-1.5 py-0.5 rounded border border-[#E9D1B5] text-[9px]">
                        Net: {netWeightVal}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-serif text-sm sm:text-base font-bold text-[#2A1612] line-clamp-1 group-hover:text-[#4A0712] transition-colors">
                      {item.title}
                    </h4>

                    {/* Gemstones / Craft Detail */}
                    <p className="text-[11.5px] text-[#2A1612]/75 line-clamp-1 italic font-serif">
                      {item.gemstone}
                    </p>

                    {/* Trust Line */}
                    <div className="flex items-center gap-1.5 text-[10px] text-[#2A1612]/70 pt-0.5">
                      <ShieldCheck className="w-3 h-3 text-[#B88A3B] flex-shrink-0" />
                      <span className="font-sans">BIS {item.goldPurity?.includes('18K') ? '750' : '916'} Hallmarked · Net Weight Billing</span>
                    </div>
                  </div>

                  {/* Pricing and Action CTAs */}
                  <div className="pt-2 border-t border-[#E9D1B5]/80 space-y-2.5">
                    <div className="flex items-end justify-between">
                      <div>
                        {mrpVal && (
                          <div className="flex items-center gap-1.5 text-[10.5px] text-[#2A1612]/50">
                            <span className="line-through">{mrpVal}</span>
                            <span className="text-[9px] font-semibold text-emerald-800 bg-emerald-100/80 px-1 py-0.2 rounded font-sans">
                              Save {savingsVal}
                            </span>
                          </div>
                        )}
                        <div className="flex items-baseline gap-1">
                          <span className="font-serif text-base sm:text-lg font-bold text-[#4A0712]">
                            {item.priceEst}
                          </span>
                          <span className="text-[9px] text-[#8F6623] font-sans">
                            (Incl. 3% GST)
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenCustomStudio(item);
                        }}
                        className="text-[10px] font-sans font-semibold text-[#8F6623] hover:text-[#4A0712] underline flex items-center gap-1 cursor-pointer"
                        title="Modify Karigari or Gemstones"
                      >
                        <Hammer className="w-3 h-3" />
                        <span>Customise</span>
                      </button>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProductCardClick(item);
                        }}
                        className="w-full text-[10.5px] font-sans font-semibold uppercase tracking-wider py-2 px-2 bg-[#FAE7D8] hover:bg-[#E9D1B5] text-[#2A1612] rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-[#E9D1B5]"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#4A0712]" />
                        <span>Quick View</span>
                      </button>

                      <button
                        onClick={(e) => handleAddCardToBag(e, item)}
                        className="w-full text-[10.5px] font-sans font-semibold uppercase tracking-wider py-2 px-2 bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] rounded flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm active:scale-95"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#D8B477]" />
                        <span>Add to Bag</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bespoke Karigari Commission Section */}
        <div className="bg-gradient-to-r from-[#2D060D] via-[#1E0E0B] to-[#2D060D] rounded-2xl border border-[#B88A3B]/50 p-6 sm:p-8 md:p-10 text-[#FFF7ED] shadow-xl relative overflow-hidden my-8">
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-[#B88A3B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B88A3B]/20 border border-[#B88A3B]/40 text-[#D8B477] text-[10px] uppercase tracking-widest font-semibold">
              <Hammer className="w-3.5 h-3.5" />
              <span>Ancestral Remodelling & Bespoke Commissions</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFF7ED]">
              Have a Rare Vision or Ancestral Gold to Reset?
            </h3>

            <p className="text-xs sm:text-sm text-[#E8D1A7]/90 leading-relaxed font-light">
              Our Chief Karigar will sit with your family to sketch a bespoke bridal suite, translate your archival heirloom memories, or re-engineer heritage family gems into a contemporary masterpiece.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenCustomStudio()}
                className="bg-[#D8B477] hover:bg-[#C9A35F] text-[#1E0E0B] font-sans text-xs tracking-wider uppercase font-bold py-3 px-6 rounded transition-all cursor-pointer shadow-lg flex items-center gap-2 active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-[#1E0E0B]" />
                <span>Book 1-on-1 Atelier Appointment</span>
              </button>

              <button
                onClick={onBackToHome}
                className="bg-transparent hover:bg-white/10 text-[#FFF7ED] border border-[#D8B477]/40 font-sans text-xs tracking-wider uppercase font-medium py-3 px-5 rounded transition-all cursor-pointer"
              >
                Return to Home Collections
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Karigari Explainer */}
        <div className="pt-4 pb-10">
          <div className="text-center mb-6">
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#8F6623] block">
              Centuries of Preserved Lore
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2A1612]">
              The Four Pillars of HK Karigari
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#FFF7ED] p-4 rounded-xl border border-[#E9D1B5] space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#FAE7D8] text-[#4A0712] flex items-center justify-center font-serif font-bold text-sm">
                01
              </div>
              <h4 className="font-serif text-sm font-bold text-[#2A1612]">Nakshi Repoussé</h4>
              <p className="text-xs text-[#2A1612]/75 leading-relaxed">
                Sculpting solid 22K gold from the reverse using hand chisels and pitch beds to produce lifelike temple deities and majestic elephant motifs.
              </p>
            </div>

            <div className="bg-[#FFF7ED] p-4 rounded-xl border border-[#E9D1B5] space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#FAE7D8] text-[#4A0712] flex items-center justify-center font-serif font-bold text-sm">
                02
              </div>
              <h4 className="font-serif text-sm font-bold text-[#2A1612]">Jadau & Kundan Setting</h4>
              <p className="text-xs text-[#2A1612]/75 leading-relaxed">
                Embedding certified uncut syndicate polki diamonds using hyper-refined 24K pure gold leaf foils to amplify natural inner refraction.
              </p>
            </div>

            <div className="bg-[#FFF7ED] p-4 rounded-xl border border-[#E9D1B5] space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#FAE7D8] text-[#4A0712] flex items-center justify-center font-serif font-bold text-sm">
                03
              </div>
              <h4 className="font-serif text-sm font-bold text-[#2A1612]">Meenakari Enamelling</h4>
              <p className="text-xs text-[#2A1612]/75 leading-relaxed">
                Fused vibrant crushed mineral glass powders in Persian kilns on the reverse of necklaces, ensuring the piece touches your skin like silk.
              </p>
            </div>

            <div className="bg-[#FFF7ED] p-4 rounded-xl border border-[#E9D1B5] space-y-2">
              <div className="w-8 h-8 rounded-full bg-[#FAE7D8] text-[#4A0712] flex items-center justify-center font-serif font-bold text-sm">
                04
              </div>
              <h4 className="font-serif text-sm font-bold text-[#2A1612]">Basra Pearl Weaving</h4>
              <p className="text-xs text-[#2A1612]/75 leading-relaxed">
                Stringing natural seed pearls and certified Colombian emerald beads by generational patwas using unvarnished pure silk threads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
