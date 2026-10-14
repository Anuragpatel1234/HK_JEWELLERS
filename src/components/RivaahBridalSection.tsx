import React, { useState } from 'react';
import { Eye, ArrowRight, ShieldCheck } from 'lucide-react';
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
    image: '/assets/bridal/gujarati_bride.png',
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
    image: '/assets/bridal/rajasthani_bride.png',
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
    image: '/assets/bridal/south_indian_bride.png',
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
    image: '/assets/bridal/contemporary_bride.png',
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
    <section className="py-6 sm:py-8 md:py-10 px-3 sm:px-6 lg:px-8 bg-[#FAE7D8] relative overflow-hidden">
      <div className="max-w-4xl lg:max-w-4xl xl:max-w-5xl mx-auto space-y-4 sm:space-y-5">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#3B0810]/5 border border-[#3B0810]/15 text-[#3B0810] text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase">
            <span>✨</span> Heritage Trousseau Edition
          </div>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#2A1612] tracking-tight">
            Rivaah: Brides of India
          </h2>
          <p className="text-xs sm:text-[12.5px] text-[#8F6623] leading-relaxed max-w-lg mx-auto">
            Distinct traditions, sacred rituals & heirloom trousseaus crafted for every Indian bride.
          </p>
        </div>

        {/* Community Tabs (Scrollable on mobile without start-cutoff) */}
        <div className="w-full overflow-x-auto no-scrollbar py-0.5">
          <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 min-w-max px-2 sm:px-0 mx-auto">
            {BRIDAL_LOOKS.map((look, idx) => (
              <button
                key={look.community}
                onClick={() => setActiveCommunityIndex(idx)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[10.5px] sm:text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  activeCommunityIndex === idx
                    ? 'bg-[#3B0810] text-[#FFF7ED] shadow-sm scale-[1.02] font-bold'
                    : 'bg-[#FCEDE1] text-[#2A1612] border border-[#E8CFB8] hover:border-[#B88A3B] hover:bg-[#FBE5D6]'
                }`}
              >
                {look.community}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Display Card (Compact side-by-side layout) */}
        <div className="bg-[#FCEDE1] border border-[#E8CFB8] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-12 gap-0 transition-all duration-300">
          
          {/* Left: Image Showcase */}
          <div className="md:col-span-5 relative h-[360px] xs:h-[400px] sm:h-[460px] md:h-full md:min-h-[360px] overflow-hidden group bg-[#2A1612]">
            <img
              src={currentLook.image}
              alt={currentLook.community}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            {/* Elegant bottom gradient scrim to preserve crystal-clear bride face visibility */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-16 pb-3.5 px-3.5 sm:pb-5 sm:px-5 flex flex-col justify-end text-white pointer-events-none">
              <span className="text-[#D8B477] text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-widest">
                Signature Look
              </span>
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold leading-tight">
                {currentLook.community}
              </h3>
              <p className="text-[10.5px] sm:text-[11px] text-white/85 mt-0.5 max-w-md line-clamp-1 sm:line-clamp-2">
                {currentLook.tagline}
              </p>
            </div>
          </div>

          {/* Right: Narrative & Signature Piece */}
          <div className="md:col-span-7 p-4 sm:p-5 lg:p-6 flex flex-col justify-between space-y-3">
            <div className="space-y-2.5 sm:space-y-3">
              <div className="space-y-0.5">
                <span className="text-[9.5px] sm:text-[10px] uppercase tracking-widest text-[#8F6623] font-bold">
                  Cultural Heritage & Craft
                </span>
                <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#2A1612] leading-snug">
                  Sacred Adornments for the Auspicious Day
                </h3>
              </div>

              <p className="text-xs sm:text-[12.5px] text-[#2A1612]/80 leading-relaxed">
                {currentLook.description}
              </p>

              {/* Essential Trousseau Pieces Chips */}
              <div>
                <span className="text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#2A1612]/70 block mb-1">
                  Essential Ornaments Included:
                </span>
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {currentLook.pieces.map((piece, i) => (
                    <span
                      key={i}
                      className="bg-[#FDF6F0] border border-[#E8CFB8] text-[#2A1612] text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full font-medium shadow-2xs"
                    >
                      ✦ {piece}
                    </span>
                  ))}
                </div>
              </div>

              {/* Signature Piece Box */}
              <div className="bg-[#FBE5D6] border border-[#E8CFB8] rounded-lg p-2.5 sm:p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mt-0.5 shadow-2xs">
                <div className="space-y-0.5 min-w-0">
                  <span className="text-[9px] uppercase font-bold text-[#8F6623] tracking-wider block">
                    Spotlight Masterpiece
                  </span>
                  <div className="font-serif font-bold text-xs sm:text-[13px] text-[#2A1612] truncate">
                    {currentLook.signaturePiece.title}
                  </div>
                  <div className="text-xs sm:text-[13px] font-sans font-bold text-[#3B0810] tracking-tight">
                    {currentLook.signaturePiece.price}
                    <span className="text-[9.5px] font-sans font-normal text-[#2A1612]/60 ml-1.5">
                      (22K BIS Hallmarked)
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectProduct(currentLook.signaturePiece)}
                  className="px-3 py-1.5 bg-[#3B0810] hover:bg-[#2A050C] text-white text-[10px] sm:text-[11px] font-bold rounded-lg uppercase tracking-wider transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs self-start sm:self-auto"
                >
                  <Eye className="w-3 h-3" />
                  QUICK VIEW
                </button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2.5 border-t border-[#E8CFB8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
              <div className="text-[9.5px] sm:text-[10.5px] text-[#8F6623] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#166534] shrink-0" />
                <span>Customizable in 22K or 18K with your preferred gemstones</span>
              </div>

              <button
                onClick={onViewAllBridal}
                className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-1.5 px-3 py-2 sm:p-0 bg-[#FBE5D6] sm:bg-transparent rounded-lg sm:rounded-none border border-[#E8CFB8] sm:border-0 text-[11px] font-bold uppercase tracking-wider text-[#3B0810] hover:text-[#2A1612] transition-colors cursor-pointer active:scale-[0.99]"
              >
                <span>Browse All Bridal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
