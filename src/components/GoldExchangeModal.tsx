import React, { useState } from 'react';
import { X, RefreshCw, Sparkles, Scale, ArrowRight, PhoneCall, Award } from 'lucide-react';

interface GoldExchangeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreDesigns?: () => void;
}

export const GoldExchangeModal: React.FC<GoldExchangeModalProps> = ({
  isOpen,
  onClose,
  onExploreDesigns,
}) => {
  const [karatPurity, setKaratPurity] = useState<'24K' | '22K' | '20K' | '18K' | '14K'>('22K');
  const [grossWeight, setGrossWeight] = useState<number>(20);
  const [stoneWeight, setStoneWeight] = useState<number>(2);

  if (!isOpen) return null;

  const purityMultipliers: Record<string, { factor: number; label: string; rate: number }> = {
    '24K': { factor: 0.999, label: '99.9% Pure Gold', rate: 7620 },
    '22K': { factor: 0.916, label: '91.6% Hallmark (22 Karat)', rate: 6985 },
    '20K': { factor: 0.833, label: '83.3% Traditional Antique Gold', rate: 6350 },
    '18K': { factor: 0.750, label: '75.0% Diamond Mounting Gold', rate: 5715 },
    '14K': { factor: 0.585, label: '58.5% Lightweight Modern Gold', rate: 4445 },
  };

  const netGoldWeight = Math.max(0, grossWeight - stoneWeight);
  const currentRate = purityMultipliers[karatPurity].rate;
  const estimatedExchangeValue = Math.round(netGoldWeight * currentRate);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/75 backdrop-blur-sm" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#FAF3EB] border border-[#B88A3B]/50 rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#E9D1B5] bg-[#FFF7ED]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#4A0712] flex items-center justify-center text-[#D8B477]">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2A1612]">
                  100% Old Gold Exchange Program
                </h3>
                <span className="bg-[#B88A3B]/20 text-[#8F6623] border border-[#B88A3B]/40 text-[10px] font-sans font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Any Jeweller's Gold Accepted
                </span>
              </div>
              <p className="text-[11px] text-[#8F6623]">
                Zero deduction on pure gold · Karatmeter precision purity analysis in front of your eyes
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="p-1.5 text-[#2A1612] hover:text-[#4A0712] rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* Banner Proposition */}
          <div className="bg-gradient-to-r from-[#4A0712] to-[#6E0F1E] text-[#FFF7ED] rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
            <div className="space-y-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-[#D8B477] text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                The Tanishq-Grade Purity Benchmark
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF7ED]">
                Upgrade Your Outdated Gold to New Masterpieces
              </h4>
              <p className="text-xs text-[#FFF7ED]/80 max-w-xl">
                Bring old ornaments bought from <em>any jeweller across India</em>. We test the purity in 30 seconds using our non-destructive German XRF Karatmeter and give you 100% full market value towards your new heirlooms.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-[#D8B477]/40 rounded-lg p-3 text-center shrink-0">
              <div className="text-[11px] text-[#D8B477] uppercase tracking-wider font-semibold">
                Exchange Guarantee
              </div>
              <div className="font-serif text-2xl font-bold text-[#FFF7ED]">
                100% Net Value
              </div>
              <div className="text-[10px] text-[#FFF7ED]/70">
                Zero Hidden Melting Deductions
              </div>
            </div>
          </div>

          {/* Interactive Old Gold Calculator */}
          <div className="bg-[#FFF7ED] border border-[#E9D1B5] rounded-xl p-4 sm:p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#E9D1B5] pb-2.5">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#4A0712]" />
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#2A1612]">
                  Instant Old Gold Valuation Calculator
                </h4>
              </div>
              <span className="text-[11px] text-[#8F6623]">
                Based on Today's Bullion Benchmark
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Karat selection */}
              <div>
                <label className="block text-[11px] font-semibold text-[#2A1612] uppercase tracking-wider mb-1">
                  Expected Karat / Purity
                </label>
                <div className="grid grid-cols-3 gap-1">
                  {(['24K', '22K', '20K', '18K', '14K'] as const).map((k) => (
                    <button
                      key={k}
                      onClick={() => setKaratPurity(k)}
                      className={`py-1.5 px-1.5 text-xs font-semibold rounded border transition-colors ${
                        karatPurity === k
                          ? 'bg-[#4A0712] text-[#FFF7ED] border-[#4A0712]'
                          : 'bg-white text-[#2A1612] border-[#E9D1B5] hover:border-[#B88A3B]'
                      }`}
                    >
                      {k}
                    </button>
                  ))}
                </div>
                <div className="text-[10px] text-[#8F6623] mt-1">
                  {purityMultipliers[karatPurity].label}
                </div>
              </div>

              {/* Gross Weight */}
              <div>
                <label className="block text-[11px] font-semibold text-[#2A1612] uppercase tracking-wider mb-1">
                  Gross Weight (Total Grams)
                </label>
                <div className="flex items-center bg-white border border-[#E9D1B5] rounded overflow-hidden">
                  <input
                    type="number"
                    min={1}
                    step={0.5}
                    value={grossWeight || ''}
                    onChange={(e) => setGrossWeight(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full px-3 py-1.5 text-sm font-semibold text-[#2A1612] focus:outline-none"
                    placeholder="Total weight"
                  />
                  <span className="px-3 text-xs font-semibold text-[#8F6623] bg-[#FAF3EB] border-l border-[#E9D1B5]">
                    g
                  </span>
                </div>
                <div className="text-[10px] text-[#2A1612]/70 mt-1">
                  Including any stones, enamel, or strings
                </div>
              </div>

              {/* Stone / Enamel Weight Deduction */}
              <div>
                <label className="block text-[11px] font-semibold text-[#2A1612] uppercase tracking-wider mb-1">
                  Stone / Enamel Weight (Grams)
                </label>
                <div className="flex items-center bg-white border border-[#E9D1B5] rounded overflow-hidden">
                  <input
                    type="number"
                    min={0}
                    step={0.1}
                    value={stoneWeight}
                    onChange={(e) => setStoneWeight(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full px-3 py-1.5 text-sm font-semibold text-[#2A1612] focus:outline-none"
                    placeholder="Stones weight"
                  />
                  <span className="px-3 text-xs font-semibold text-[#8F6623] bg-[#FAF3EB] border-l border-[#E9D1B5]">
                    g
                  </span>
                </div>
                <div className="text-[10px] text-[#2A1612]/70 mt-1">
                  Stone weight is carefully subtracted so you get pure gold value
                </div>
              </div>
            </div>

            {/* Calculated Result Card */}
            <div className="bg-gradient-to-br from-[#FFF7ED] to-[#FAE7D8] border-2 border-[#B88A3B] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[11px] uppercase tracking-widest text-[#8F6623] font-bold">
                  Net Pure Gold Content: {netGoldWeight.toFixed(2)} grams
                </span>
                <h5 className="font-serif text-lg font-bold text-[#2A1612]">
                  Estimated Exchange Credit Value
                </h5>
                <p className="text-xs text-[#2A1612]/75">
                  Full 100% valuation applied with zero commission or hidden broker charges.
                </p>
              </div>

              <div className="text-center sm:text-right shrink-0">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#4A0712]">
                  ₹{estimatedExchangeValue.toLocaleString('en-IN')}*
                </div>
                <div className="text-[10px] text-[#8F6623] font-medium">
                  *Calculated at ₹{currentRate.toLocaleString('en-IN')}/g for {karatPurity}
                </div>
              </div>
            </div>
          </div>

          {/* 4-Step Karatmeter Testing Process */}
          <div>
            <h4 className="font-serif font-bold text-base text-[#2A1612] mb-3 text-center">
              Our 4-Step Karatmeter Transparency Journey
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-white p-3.5 rounded-lg border border-[#E9D1B5] space-y-1.5">
                <div className="w-7 h-7 rounded-full bg-[#4A0712] text-[#FFF7ED] font-bold text-xs flex items-center justify-center">
                  1
                </div>
                <h5 className="font-serif font-bold text-xs text-[#2A1612]">Ultrasonic Cleaning</h5>
                <p className="text-[11px] text-[#2A1612]/70 leading-relaxed">
                  Your jewellery is first ultrasonically cleaned in front of you to remove any accumulated dust, grease, or wax.
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-[#E9D1B5] space-y-1.5">
                <div className="w-7 h-7 rounded-full bg-[#4A0712] text-[#FFF7ED] font-bold text-xs flex items-center justify-center">
                  2
                </div>
                <h5 className="font-serif font-bold text-xs text-[#2A1612]">Certified Scale Weighing</h5>
                <p className="text-[11px] text-[#2A1612]/70 leading-relaxed">
                  Weighed on government-calibrated high-precision analytical scales accurate to 0.001g (three decimal places).
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-[#E9D1B5] space-y-1.5">
                <div className="w-7 h-7 rounded-full bg-[#4A0712] text-[#FFF7ED] font-bold text-xs flex items-center justify-center">
                  3
                </div>
                <h5 className="font-serif font-bold text-xs text-[#2A1612]">XRF Karatmeter Scan</h5>
                <p className="text-[11px] text-[#2A1612]/70 leading-relaxed">
                  Non-destructive spectrometer scan reveals exact atomic composition of gold, silver, copper, and zinc in 30 seconds.
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-[#E9D1B5] space-y-1.5">
                <div className="w-7 h-7 rounded-full bg-[#4A0712] text-[#FFF7ED] font-bold text-xs flex items-center justify-center">
                  4
                </div>
                <h5 className="font-serif font-bold text-xs text-[#2A1612]">Instant 100% Credit</h5>
                <p className="text-[11px] text-[#2A1612]/70 leading-relaxed">
                  The entire valuation amount is directly adjusted against your new bridal, gold, or diamond jewellery purchase.
                </p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#E9D1B5]">
            <div className="flex items-center gap-2 text-xs text-[#2A1612]/80">
              <Award className="w-4 h-4 text-[#B88A3B]" />
              <span>Free Karatmeter testing offered at our Ahmedabad flagship store</span>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href="https://wa.me/917069916916?text=Hello%20HK%20Jewellers,%20I%20would%20like%20to%20book%20a%20Free%20Karatmeter%20Old%20Gold%20Exchange%20evaluation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#4A0712] hover:bg-[#32040C] text-[#FFF7ED] font-semibold text-xs rounded uppercase tracking-wider transition-colors shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Book Free In-Store Evaluation
              </a>

              {onExploreDesigns && (
                <button
                  onClick={() => {
                    onClose();
                    onExploreDesigns();
                  }}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#FAF3EB] hover:bg-[#FFF7ED] border border-[#B88A3B] text-[#4A0712] font-semibold text-xs rounded uppercase tracking-wider transition-colors"
                >
                  Explore New Designs
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
