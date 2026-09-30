import React, { useState } from 'react';
import { X, TrendingUp, ShieldCheck, Scale, Sparkles, PhoneCall } from 'lucide-react';

interface GoldRateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenExchange?: () => void;
}

export const LIVE_RATES = {
  date: 'Today, 30 Sept 2026',
  time: '11:00 AM IST (Updated Daily)',
  karats: [
    { karat: '24KT', purity: '99.9% Pure Gold', ratePerGram: 7620, change: '+₹15', trend: 'up' },
    { karat: '22KT', purity: '91.6% BIS Hallmark', ratePerGram: 6985, change: '+₹14', trend: 'up', popular: true },
    { karat: '18KT', purity: '75.0% Fine Diamond Gold', ratePerGram: 5715, change: '+₹11', trend: 'up' },
    { karat: '14KT', purity: '58.5% Everyday Modern', ratePerGram: 4445, change: '+₹9', trend: 'up' },
    { karat: 'Silver 999', purity: '99.9% Fine Silver', ratePerGram: 94, change: '+₹0.4', trend: 'up' },
  ],
};

export const GoldRateModal: React.FC<GoldRateModalProps> = ({ isOpen, onClose, onOpenExchange }) => {
  const [selectedKarat, setSelectedKarat] = useState<'24KT' | '22KT' | '18KT' | '14KT'>('22KT');
  const [weight, setWeight] = useState<number>(10);
  const [makingPercent, setMakingPercent] = useState<number>(12);

  if (!isOpen) return null;

  const currentRate = LIVE_RATES.karats.find(k => k.karat === selectedKarat)?.ratePerGram || 6985;
  const rawGoldValue = currentRate * (weight || 0);
  const makingCharges = Math.round((rawGoldValue * makingPercent) / 100);
  const taxableTotal = rawGoldValue + makingCharges;
  const gstAmount = Math.round(taxableTotal * 0.03); // 3% Indian GST
  const finalPrice = taxableTotal + gstAmount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/75 backdrop-blur-sm" />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#FAF3EB] border border-[#B88A3B]/50 rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#E9D1B5] bg-[#FFF7ED]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#4A0712] flex items-center justify-center text-[#D8B477]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2A1612]">
                  Live Bullion Rates & Price Transparency
                </h3>
                <span className="bg-[#1B5E20]/10 text-[#1B5E20] border border-[#1B5E20]/30 text-[10px] font-sans font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Live
                </span>
              </div>
              <p className="text-[11px] text-[#8F6623]">
                {LIVE_RATES.date} · {LIVE_RATES.time} · 100% BIS 916 & HUID Certified
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

          {/* Rate Ticker Grid */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2A1612]/80">
                Today's Certified Rates (Per Gram)
              </span>
              <span className="text-[10px] text-[#8F6623] italic">
                Transparent bullion pricing, zero hidden markups
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
              {LIVE_RATES.karats.map((rateItem) => (
                <div
                  key={rateItem.karat}
                  className={`p-3 rounded-lg border text-center relative transition-all ${
                    rateItem.popular
                      ? 'bg-[#FFF7ED] border-[#B88A3B] shadow-sm'
                      : 'bg-white/80 border-[#E9D1B5]'
                  }`}
                >
                  {rateItem.popular && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#4A0712] text-[#FFF7ED] text-[9px] font-bold px-2 py-0.2 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <div className="font-serif font-bold text-sm text-[#2A1612]">
                    {rateItem.karat}
                  </div>
                  <div className="text-[10px] text-[#2A1612]/70 leading-tight my-0.5">
                    {rateItem.purity}
                  </div>
                  <div className="font-sans font-bold text-base text-[#4A0712] mt-1">
                    ₹{rateItem.ratePerGram.toLocaleString('en-IN')}
                    <span className="text-[10px] font-normal text-[#2A1612]/70">/g</span>
                  </div>
                  <div className="text-[10px] text-[#1B5E20] font-semibold flex items-center justify-center gap-0.5">
                    ▲ {rateItem.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Transparent Price Breakup Calculator */}
          <div className="bg-[#FFF7ED] border border-[#E9D1B5] rounded-xl p-4 sm:p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#E9D1B5] pb-2.5">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#4A0712]" />
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#2A1612]">
                  Tanishq-Standard Transparent Price Breakup Calculator
                </h4>
              </div>
              <span className="text-[11px] text-[#8F6623] font-medium hidden sm:inline">
                Formula: (Gold Rate × Weight) + Making + 3% GST
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Karat selection */}
              <div>
                <label className="block text-[11px] font-semibold text-[#2A1612] uppercase tracking-wider mb-1">
                  Gold Karatage
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(['24KT', '22KT', '18KT', '14KT'] as const).map((k) => (
                    <button
                      key={k}
                      onClick={() => setSelectedKarat(k)}
                      className={`py-1.5 px-2 text-xs font-semibold rounded border transition-colors ${
                        selectedKarat === k
                          ? 'bg-[#4A0712] text-[#FFF7ED] border-[#4A0712]'
                          : 'bg-white text-[#2A1612] border-[#E9D1B5] hover:border-[#B88A3B]'
                      }`}
                    >
                      {k}
                    </button>
                  ))}
                </div>
              </div>

              {/* Weight in grams */}
              <div>
                <label className="block text-[11px] font-semibold text-[#2A1612] uppercase tracking-wider mb-1">
                  Net Gold Weight (Grams)
                </label>
                <div className="flex items-center bg-white border border-[#E9D1B5] rounded overflow-hidden">
                  <input
                    type="number"
                    min={0.5}
                    step={0.5}
                    max={500}
                    value={weight || ''}
                    onChange={(e) => setWeight(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full px-3 py-1.5 text-sm font-semibold text-[#2A1612] focus:outline-none"
                    placeholder="Enter grams"
                  />
                  <span className="px-3 text-xs font-semibold text-[#8F6623] bg-[#FAF3EB] border-l border-[#E9D1B5]">
                    g
                  </span>
                </div>
                {/* Quick weight chips */}
                <div className="flex gap-1.5 mt-1.5">
                  {[5, 10, 20, 50].map((w) => (
                    <button
                      key={w}
                      onClick={() => setWeight(w)}
                      className="text-[10px] bg-white hover:bg-[#FAF3EB] border border-[#E9D1B5] px-1.5 py-0.5 rounded text-[#2A1612]"
                    >
                      {w}g
                    </button>
                  ))}
                </div>
              </div>

              {/* Making charges */}
              <div>
                <label className="block text-[11px] font-semibold text-[#2A1612] uppercase tracking-wider mb-1">
                  Making Charges ({makingPercent}%)
                </label>
                <input
                  type="range"
                  min={8}
                  max={20}
                  value={makingPercent}
                  onChange={(e) => setMakingPercent(parseInt(e.target.value))}
                  className="w-full accent-[#4A0712] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#2A1612]/70 mt-1">
                  <span>8% (Plain)</span>
                  <span className="font-semibold text-[#4A0712]">{makingPercent}%</span>
                  <span>20% (Intricate Jadau)</span>
                </div>
              </div>
            </div>

            {/* Calculated Breakdown Receipt */}
            <div className="bg-white border border-[#B88A3B]/40 rounded-lg p-3.5 space-y-2">
              <div className="flex justify-between text-xs text-[#2A1612]">
                <span>Pure Gold Value ({weight}g @ ₹{currentRate.toLocaleString('en-IN')}/g):</span>
                <span className="font-semibold">₹{rawGoldValue.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-xs text-[#2A1612]">
                <span>Artisan Making Charges ({makingPercent}%):</span>
                <span className="font-semibold">₹{makingCharges.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-xs text-[#2A1612] border-b border-dashed border-[#E9D1B5] pb-2">
                <span>Applicable GST (3% Govt Tax):</span>
                <span className="font-semibold">₹{gstAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-baseline pt-1">
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-[#2A1612]">
                    Total Estimated Price
                  </div>
                  <div className="text-[10px] text-[#8F6623]">
                    Net Weight Billing · Zero Stone Deduction Guaranteed
                  </div>
                </div>
                <div className="font-serif font-bold text-xl sm:text-2xl text-[#4A0712]">
                  ₹{finalPrice.toLocaleString('en-IN')}
                </div>
              </div>
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white/80 p-3 rounded-lg border border-[#E9D1B5] flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#B88A3B] shrink-0 mt-0.5" />
              <div>
                <h5 className="font-serif font-bold text-xs text-[#2A1612]">BIS 916 Hallmark & HUID</h5>
                <p className="text-[11px] text-[#2A1612]/75 leading-relaxed">
                  Every gram is authenticated by Bureau of Indian Standards with unique 6-digit laser HUID code.
                </p>
              </div>
            </div>

            <div className="bg-white/80 p-3 rounded-lg border border-[#E9D1B5] flex items-start gap-2.5">
              <Scale className="w-5 h-5 text-[#B88A3B] shrink-0 mt-0.5" />
              <div>
                <h5 className="font-serif font-bold text-xs text-[#2A1612]">Net Weight Billing</h5>
                <p className="text-[11px] text-[#2A1612]/75 leading-relaxed">
                  You only pay for the exact weight of gold. Precious stones, pearls, and lac are weighed separately.
                </p>
              </div>
            </div>

            <div className="bg-white/80 p-3 rounded-lg border border-[#E9D1B5] flex items-start gap-2.5">
              <Sparkles className="w-5 h-5 text-[#B88A3B] shrink-0 mt-0.5" />
              <div>
                <h5 className="font-serif font-bold text-xs text-[#2A1612]">100% Exchange Value</h5>
                <p className="text-[11px] text-[#2A1612]/75 leading-relaxed">
                  Upgrade your gold anytime at prevailing market rates with in-store Karatmeter purity test.
                </p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-[#E9D1B5]">
            <div className="text-xs text-[#2A1612]/80 text-center sm:text-left">
              Have old jewellery to evaluate? Check your exchange value now.
            </div>
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              {onOpenExchange && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenExchange();
                  }}
                  className="flex-1 sm:flex-none px-4 py-2 bg-[#FAF3EB] hover:bg-[#FFF7ED] border border-[#B88A3B] text-[#4A0712] font-semibold text-xs rounded uppercase tracking-wider transition-colors"
                >
                  Exchange Old Gold
                </button>
              )}
              <a
                href="https://wa.me/917069916916?text=Hello%20HK%20Jewellers,%20I%20would%20like%20to%20know%20more%20about%20today's%20gold%20rates%20and%20making%20charges."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#4A0712] hover:bg-[#32040C] text-[#FFF7ED] font-semibold text-xs rounded uppercase tracking-wider transition-colors shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Consult Specialist
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
