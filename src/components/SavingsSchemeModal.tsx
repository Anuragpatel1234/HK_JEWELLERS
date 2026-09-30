import React, { useState } from 'react';
import { X, PiggyBank, Sparkles, Gift, CheckCircle2, PhoneCall, ArrowRight } from 'lucide-react';

interface SavingsSchemeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreDesigns?: () => void;
}

export const SavingsSchemeModal: React.FC<SavingsSchemeModalProps> = ({
  isOpen,
  onClose,
  onExploreDesigns,
}) => {
  const [monthlyAmount, setMonthlyAmount] = useState<number>(5000);
  const tenureMonths = 10;
  
  if (!isOpen) return null;

  const totalCustomerDeposit = monthlyAmount * tenureMonths;
  // 75% of first month instalment bonus from HK Jewellers (similar to Tanishq Golden Harvest)
  const hkBonusContribution = Math.round(monthlyAmount * 0.75);
  const totalMaturityValue = totalCustomerDeposit + hkBonusContribution;

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
              <PiggyBank className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2A1612]">
                  Swarn Samriddhi Savings Plan
                </h3>
                <span className="bg-[#4A0712] text-[#FFF7ED] text-[10px] font-sans font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Inspired by Golden Harvest
                </span>
              </div>
              <p className="text-[11px] text-[#8F6623]">
                Save smart in 10 easy monthly instalments · Earn up to 75% special HK Jewellers bonus
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

          {/* Value Prop Banner */}
          <div className="bg-gradient-to-r from-[#2A1612] to-[#4A0712] text-[#FFF7ED] p-4 sm:p-5 rounded-xl border border-[#B88A3B]/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[#D8B477] text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5 justify-center sm:justify-start">
                <Gift className="w-3.5 h-3.5" />
                10 Months Plan + Brand Bonus
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF7ED]">
                Plan for Weddings, Festivals & Milestones
              </h4>
              <p className="text-xs text-[#FFF7ED]/80 max-w-md">
                Accumulate gold effortlessly. Pay for 10 months, receive an exclusive bonus from HK Jewellers on maturity, and redeem for any 22K/18K jewellery or 24K coins!
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-[#D8B477]/30 rounded-lg p-3 text-center shrink-0">
              <div className="text-[10px] text-[#D8B477] uppercase tracking-wider font-semibold">
                HK Contribution
              </div>
              <div className="font-serif text-2xl font-bold text-[#FFF7ED]">
                75% Bonus
              </div>
              <div className="text-[10px] text-[#FFF7ED]/70">
                On 1st Installment Value
              </div>
            </div>
          </div>

          {/* Interactive Savings Calculator */}
          <div className="bg-[#FFF7ED] border border-[#E9D1B5] rounded-xl p-4 sm:p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#E9D1B5] pb-2.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#4A0712]" />
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#2A1612]">
                  Interactive Monthly Savings Calculator
                </h4>
              </div>
              <span className="text-[11px] text-[#8F6623] font-semibold">
                10 Months Tenure
              </span>
            </div>

            {/* Monthly amount slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-[#2A1612] uppercase tracking-wider">
                  Monthly Installment Amount:
                </label>
                <span className="font-serif font-bold text-xl text-[#4A0712]">
                  ₹{monthlyAmount.toLocaleString('en-IN')}/mo
                </span>
              </div>

              <input
                type="range"
                min={2000}
                max={50000}
                step={1000}
                value={monthlyAmount}
                onChange={(e) => setMonthlyAmount(parseInt(e.target.value))}
                className="w-full accent-[#4A0712] cursor-pointer"
              />

              {/* Quick Preset Buttons */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[2000, 3000, 5000, 10000, 20000, 50000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setMonthlyAmount(amt)}
                    className={`text-xs px-2.5 py-1 rounded border transition-colors ${
                      monthlyAmount === amt
                        ? 'bg-[#4A0712] text-[#FFF7ED] border-[#4A0712]'
                        : 'bg-white text-[#2A1612] border-[#E9D1B5] hover:border-[#B88A3B]'
                    }`}
                  >
                    ₹{amt.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>
            </div>

            {/* Maturity Breakdown Summary Card */}
            <div className="bg-white border-2 border-[#B88A3B]/60 rounded-xl p-4 sm:p-5 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left border-b border-dashed border-[#E9D1B5] pb-3">
                <div>
                  <div className="text-[11px] text-[#2A1612]/70 uppercase tracking-wider">
                    You Deposit (10 Mos)
                  </div>
                  <div className="font-serif font-bold text-lg text-[#2A1612]">
                    ₹{totalCustomerDeposit.toLocaleString('en-IN')}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] text-[#8F6623] uppercase tracking-wider font-semibold">
                    HK Jewellers Bonus (75%)
                  </div>
                  <div className="font-serif font-bold text-lg text-[#1B5E20]">
                    +₹{hkBonusContribution.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="sm:text-right">
                  <div className="text-[11px] text-[#4A0712] uppercase tracking-wider font-bold">
                    Total Jewellery Buying Power
                  </div>
                  <div className="font-serif font-bold text-2xl text-[#4A0712]">
                    ₹{totalMaturityValue.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#2A1612]/80 pt-1">
                <CheckCircle2 className="w-4 h-4 text-[#1B5E20] shrink-0" />
                <span>
                  Redeemable against entire catalog including Rivaah Bridal, Kundan, Diamond, and Gold Ornaments.
                </span>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white/80 p-3.5 rounded-lg border border-[#E9D1B5] space-y-1">
              <h5 className="font-serif font-bold text-xs text-[#2A1612]">Gold Rate Protection</h5>
              <p className="text-[11px] text-[#2A1612]/70 leading-relaxed">
                Option to convert monthly deposits directly into gold weight at prevailing daily rates, hedging against price inflation.
              </p>
            </div>

            <div className="bg-white/80 p-3.5 rounded-lg border border-[#E9D1B5] space-y-1">
              <h5 className="font-serif font-bold text-xs text-[#2A1612]">Special Making Charge Discounts</h5>
              <p className="text-[11px] text-[#2A1612]/70 leading-relaxed">
                Plan holders receive an extra 20% flat concession on making charges when purchasing bridal or temple jewellery.
              </p>
            </div>

            <div className="bg-white/80 p-3.5 rounded-lg border border-[#E9D1B5] space-y-1">
              <h5 className="font-serif font-bold text-xs text-[#2A1612]">Zero Processing Fee</h5>
              <p className="text-[11px] text-[#2A1612]/70 leading-relaxed">
                100% transparent. No hidden administrative charges, zero account maintenance fees, complete account ledger statement.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#E9D1B5]">
            <div className="text-xs text-[#2A1612]/80 text-center sm:text-left">
              Enroll online via WhatsApp or visit our Ahmedabad store with Aadhaar/PAN.
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={`https://wa.me/917069916916?text=Hello%20HK%20Jewellers,%20I%20would%20like%20to%20enroll%20in%20the%20Swarn%20Samriddhi%20Savings%20Plan%20with%20monthly%20amount%20of%20Rs%20${monthlyAmount}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#4A0712] hover:bg-[#32040C] text-[#FFF7ED] font-semibold text-xs rounded uppercase tracking-wider transition-colors shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Enroll via WhatsApp
              </a>

              {onExploreDesigns && (
                <button
                  onClick={() => {
                    onClose();
                    onExploreDesigns();
                  }}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#FAF3EB] hover:bg-[#FFF7ED] border border-[#B88A3B] text-[#4A0712] font-semibold text-xs rounded uppercase tracking-wider transition-colors"
                >
                  View Eligible Ornaments
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
