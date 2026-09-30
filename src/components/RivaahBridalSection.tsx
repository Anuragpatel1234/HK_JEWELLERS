import React, { useState } from 'react';
import { Eye, ArrowRight, ShieldCheck, Crown } from 'lucide-react';
import type { ModalProductDetails } from './QuickViewModal';

interface RivaahBridalSectionProps {
  onSelectProduct: (product: ModalProductDetails) => void;
  onViewAllBridal: () => void;
}

interface BridalLook {
  community: string;
  tagline: string;
  description: string;
  image: string;
  pieces: string[];
  signaturePiece: ModalProductDetails;
}

export const BRIDAL_LOOKS: BridalLook[] = [
  {
    community: 'Gujarati Bride',
    tagline: 'Bandhani, Patola & Heritage Shringaar',
    description: 'Adorned in classic 22K yellow gold featuring intricate Chandramukhi damini mathapatti, carved elephant kadas, and traditional kanthi harams reflecting timeless Gujarati lineage.',
    image: '/assets/products/necklace_swarn_bridal.jpg',
    pieces: ['Damini Mathapatti', 'Kanthi Choker', 'Elephant Kadas', 'Chhad Payals'],
    signaturePiece: {
      title: 'Swarn Shringaar Gujarati Bridal Set',
      subtitle: 'Gujarati Heritage Rivaah Collection',
      tagline: 'Solid 22K Gold & Basra Pearls',
      description: 'An imperial trousseau suite comprising a 22K repoussé peacock haar, matching chandelier jhumkas, and carved kadas crafted over 480 hours by Ahmedabad master karigars.',
      image: '/assets/products/necklace_swarn_bridal.jpg',
      goldPurity: '22K Hallmarked Gold (195g)',
      price: '₹11,50,000',
    },
  },
  {
    community: 'Rajputana Royal',
    tagline: 'Mewar & Marwar Dynastic Splendor',
    description: 'Imperial Rajputi Aad neckpieces, uncut Syndicate Polki florets, precious ruby tassels, and delicate Borla mathapattis evoking the majesty of Rajasthan’s royal courts.',
    image: '/assets/products/necklace_polki_choker.jpg',
    pieces: ['Rajputi Aad', 'Borla Mathapatti', 'Hathphool Florets', 'Basra Pearl Nath'],
    signaturePiece: {
      title: 'The Nizam Polki Bridal Choker',
      subtitle: 'Rajputana Heritage Suite',
      tagline: 'Uncut Diamonds & Colombian Emeralds',
      description: 'Imperial bridal choker sculpted in 22K gold with reverse-side Persian floral meenakari enamelling and graduated Colombian emerald bead tassels.',
      image: '/assets/products/necklace_polki_choker.jpg',
      goldPurity: '22K Hallmarked Gold (118g)',
      price: '₹6,40,000',
    },
  },
  {
    community: 'South Indian Temple',
    tagline: 'Vedic Agamas & Sacred Iconography',
    description: 'Pure 22K gold Kasu Malas, Lakshmi Vaddanam (waistbands), and divine temple nakshi carvings symbolizing eternal abundance, auspiciousness, and spiritual divinity.',
    image: '/assets/products/necklace_rani_haar.jpg',
    pieces: ['Lakshmi Kasu Mala', 'Temple Vaddanam', 'Nagasi Jhumkis', 'Mango Haram'],
    signaturePiece: {
      title: 'Rani Haar Emerald Cascade Suite',
      subtitle: 'Temple Heritage Setting',
      tagline: 'Russian Emerald Drops & Polki',
      description: 'Magnificent five-row temple necklace culminating in a grand floral emerald medallion, inspired by sacred royal coronations and sanctum iconography.',
      image: '/assets/products/necklace_emerald_cascade.jpg',
      goldPurity: '22K Solid Gold (155g)',
      price: '₹8,90,000',
    },
  },
  {
    community: 'Contemporary Pan-Indian',
    tagline: 'Modern Royalty & Cocktail Elegance',
    description: 'Lightweight Polki chokers, certified solitaires, and delicate pastel gemstone suites tailored for modern destination weddings and grand receptions.',
    image: '/assets/products/bridal_nath_mathapatti.jpg',
    pieces: ['Multi-Row Diamond Choker', 'Solitaire Nath', 'Cocktail Rings', 'Polki Chandbalis'],
    signaturePiece: {
      title: 'Padmavati Kundan Meenakari Choker',
      subtitle: 'Bikaneri Open Jadau Setting',
      tagline: 'Basra Pearls & Burmese Rubies',
      description: 'Handcrafted choker featuring floral filigree repoussé with natural ruby accents and clusters of Basra seed pearls for reception royalty.',
      image: '/assets/products/necklace_nizam_choker.jpg',
      goldPurity: '22K Antique Gold (96g)',
      price: '₹5,20,000',
    },
  },
];

export const RivaahBridalSection: React.FC<RivaahBridalSectionProps> = ({
  onSelectProduct,
  onViewAllBridal,
}) => {
  const [activeCommunityIndex, setActiveCommunityIndex] = useState(0);
  const currentLook = BRIDAL_LOOKS[activeCommunityIndex];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF7ED] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4A0712]/10 border border-[#4A0712]/20 text-[#4A0712] text-xs font-semibold uppercase tracking-widest">
            <Crown className="w-3.5 h-3.5" />
            Curated Bridal Trousseau Experience
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2A1612] tracking-tight">
            Rivaah: Brides of India
          </h2>
          <p className="text-xs sm:text-sm text-[#8F6623] leading-relaxed">
            Every Indian community celebrates love with distinct traditions and sacred ornaments. Discover handcrafted wedding trousseaus tailored to your cultural rituals.
          </p>
        </div>

        {/* Community Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
          {BRIDAL_LOOKS.map((look, idx) => (
            <button
              key={look.community}
              onClick={() => setActiveCommunityIndex(idx)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeCommunityIndex === idx
                  ? 'bg-[#4A0712] text-[#FFF7ED] shadow-md scale-105'
                  : 'bg-white text-[#2A1612] border border-[#E9D1B5] hover:border-[#B88A3B]'
              }`}
            >
              {look.community}
            </button>
          ))}
        </div>

        {/* Feature Display Card */}
        <div className="bg-[#FAF3EB] border border-[#B88A3B]/40 rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left: Image Showcase */}
          <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[440px] overflow-hidden group">
            <img
              src={currentLook.image}
              alt={currentLook.community}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-[#D8B477] text-xs font-semibold uppercase tracking-widest">
                Signature Look
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                {currentLook.community}
              </h3>
              <p className="text-xs text-white/80 mt-1 max-w-md">
                {currentLook.tagline}
              </p>
            </div>
          </div>

          {/* Right: Narrative & Signature Piece */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#8F6623] font-bold">
                  Cultural Heritage & Craft
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2A1612]">
                  Sacred Adornments for the Auspicious Day
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#2A1612]/80 leading-relaxed">
                {currentLook.description}
              </p>

              {/* Essential Trousseau Pieces Chips */}
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2A1612]/70 block mb-2">
                  Essential Ornaments Included:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentLook.pieces.map((piece, i) => (
                    <span
                      key={i}
                      className="bg-white border border-[#E9D1B5] text-[#2A1612] text-xs px-3 py-1 rounded-full font-medium"
                    >
                      ✦ {piece}
                    </span>
                  ))}
                </div>
              </div>

              {/* Signature Piece Box */}
              <div className="bg-white border border-[#B88A3B]/40 rounded-xl p-4 flex items-center justify-between gap-4 mt-2">
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-[#8F6623] tracking-wider">
                    Spotlight Masterpiece
                  </span>
                  <div className="font-serif font-bold text-sm text-[#2A1612]">
                    {currentLook.signaturePiece.title}
                  </div>
                  <div className="text-xs font-serif font-bold text-[#4A0712]">
                    {currentLook.signaturePiece.price}
                    <span className="text-[10px] font-sans font-normal text-[#2A1612]/60 ml-1.5">
                      (22K BIS Hallmarked)
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectProduct(currentLook.signaturePiece)}
                  className="px-3.5 py-1.5 bg-[#4A0712] hover:bg-[#32040C] text-[#FFF7ED] text-xs font-semibold rounded uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Quick View
                </button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#E9D1B5] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[11px] text-[#8F6623] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1B5E20]" />
                Customizable in 22K or 18K with your preferred gemstones
              </div>

              <button
                onClick={onViewAllBridal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4A0712] hover:text-[#2A1612] transition-colors"
              >
                Browse All Bridal Collections
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
