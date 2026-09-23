import React from 'react';
import { X, Sparkles, Flame, Shield, HeartHandshake, RefreshCw } from 'lucide-react';
import { OrnamentalFlourish } from './OrnamentalDivider';

interface RitualsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation?: () => void;
}

export const RitualsModal: React.FC<RitualsModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  if (!isOpen) return null;

  const rituals = [
    {
      num: '01',
      sanskrit: 'शुद्धि',
      name: 'Shuddhi — The Assay of Inviolable Purity',
      icon: Shield,
      description: 'Long before a piece touches your skin, it undergoes rigorous XRF spectrometry testing and 100% BIS 916 laser hallmarking in our government-approved laboratory, ensuring zero tolerance for impure metals.',
    },
    {
      num: '02',
      sanskrit: 'कारीगरी',
      name: 'Karigari — The Living Hand of the Artisan',
      icon: Flame,
      description: 'We do not believe in mass mechanical stamping. Each choker, kada, and jhumka is hand-beaten, chased, and meenakari-enamelled by generational karigars whose lineage dates back to the royal courts of Rajasthan.',
    },
    {
      num: '03',
      sanskrit: 'प्रतिष्ठा',
      name: 'Pratishtha — The Auspicious Sanctum Blessing',
      icon: Sparkles,
      description: 'Before any bridal trousseau or divine idol departs our Karol Bagh salon, it is placed in our private shrine, blessed with sacred Gangajal and sandalwood paste, infusing your union or home with auspicious energy.',
    },
    {
      num: '04',
      sanskrit: 'पुनर्जन्म',
      name: 'Punarjanma — The Rebirth of Ancestral Heirlooms',
      icon: RefreshCw,
      description: 'Heirloom gold belongs to memories, not bank lockers. We meticulously melt, re-alloy, and remount your ancestral gold and antique gemstones into contemporary regal silhouettes while preserving their generational soul.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl bg-[#FAF3EB] border border-[#B88A3B]/50 rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#E9D1B5] bg-[#FFF7ED]">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-[#4A0712]" />
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2A1612]">
                Our Royal Heritage Rituals
              </h3>
              <p className="text-[11px] text-[#8F6623]">
                Sacred Customs Passed Down Through Centuries
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Rituals"
            className="p-1 text-[#2A1612] hover:text-[#4A0712] rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          <div className="text-center max-w-lg mx-auto space-y-1">
            <div className="flex items-center justify-center gap-2">
              <OrnamentalFlourish flip className="w-6 h-2" color="#B88A3B" />
              <span className="font-serif text-xs text-[#B88A3B] italic">Tradition in Every Touch</span>
              <OrnamentalFlourish className="w-6 h-2" color="#B88A3B" />
            </div>
            <p className="text-xs sm:text-sm text-[#2A1612]/80 leading-relaxed">
              At HK Jewellers, crafting jewellery is not a commerce—it is a spiritual devotion. Discover the four inviolable rituals that define our house.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rituals.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.num}
                  className="bg-[#FAE7D8] p-4 rounded-xl border border-[#E9D1B5] shadow-sm space-y-2 hover:border-[#D8B477] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-bold text-[#4A0712]">{r.sanskrit}</span>
                    <div className="w-7 h-7 rounded-full bg-[#4A0712]/10 flex items-center justify-center text-[#4A0712]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-[#2A1612]">{r.name}</h4>
                  <p className="text-xs text-[#2A1612]/75 leading-relaxed">{r.description}</p>
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-[#240C11] rounded-xl text-center text-[#FFF7ED] space-y-2 border border-[#B88A3B]/40">
            <h5 className="font-serif text-sm sm:text-base font-bold text-[#D8B477]">
              Experience Our Private Sanctum Ritual in Person
            </h5>
            <p className="text-xs text-[#FFF7ED]/80 max-w-md mx-auto">
              Visit our Karol Bagh boutique salon for a private ceremonial unwrapping of your chosen bridal heirloom.
            </p>
            {onOpenConsultation && (
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="mt-2 inline-flex items-center gap-1.5 bg-[#D8B477] hover:bg-[#E6C687] text-[#240C11] font-sans text-xs uppercase tracking-wider font-semibold py-2 px-5 rounded-[3px] transition-colors cursor-pointer"
              >
                Schedule VIP Salon Visit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
