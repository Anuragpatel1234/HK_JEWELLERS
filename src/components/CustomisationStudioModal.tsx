import React, { useState } from 'react';
import { X, Sparkles, Hammer, Gem, CheckCircle2, ArrowRight } from 'lucide-react';
import { CUSTOM_DESIGNS } from '../data/jewelleryData';
import type { CustomJewelleryItem } from '../data/jewelleryData';

interface CustomisationStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDesign: (item: CustomJewelleryItem) => void;
}

export const CustomisationStudioModal: React.FC<CustomisationStudioModalProps> = ({
  isOpen,
  onClose,
  onSelectDesign,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    jewelleryType: 'Royal Bridal Polki Choker',
    purity: '22K Antique Yellow Gold',
    budget: '₹5,00,000 – ₹15,00,000',
    notes: 'Looking to reset ancestral rubies into an imperial choker with matching chandbalis.',
    phone: '+91 98765 43210',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl bg-[#FAF3EB] border border-[#B88A3B]/50 rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#E9D1B5] bg-[#FFF7ED]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#4A0712]" />
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2A1612]">
                The HK Bespoke Karigari Atelier
              </h3>
              <p className="text-[11px] text-[#8F6623]">
                Custom Jewellery Sculpted by Master Artisans Since 1994
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Atelier"
            className="p-1 text-[#2A1612] hover:text-[#4A0712] rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Atelier Steps */}
          <div>
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#8F6623] block mb-3 text-center sm:text-left">
              The 4-Step Heirloom Journey
            </span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center sm:text-left">
              <div className="bg-[#FAE7D8] p-3 rounded-lg border border-[#E9D1B5] space-y-1">
                <span className="text-xs font-mono font-bold text-[#4A0712]">01</span>
                <h5 className="font-serif text-xs font-bold text-[#2A1612]">Consultation & Sketch</h5>
                <p className="text-[10px] text-[#2A1612]/70 leading-relaxed">
                  Private dialog with senior designers to translate your family heritage or reset ancestral stones.
                </p>
              </div>

              <div className="bg-[#FAE7D8] p-3 rounded-lg border border-[#E9D1B5] space-y-1">
                <span className="text-xs font-mono font-bold text-[#4A0712]">02</span>
                <h5 className="font-serif text-xs font-bold text-[#2A1612]">Wax & 3D Prototype</h5>
                <p className="text-[10px] text-[#2A1612]/70 leading-relaxed">
                  Sculpted wax casting to verify ergonomic contour balance and drape before gold pouring.
                </p>
              </div>

              <div className="bg-[#FAE7D8] p-3 rounded-lg border border-[#E9D1B5] space-y-1">
                <span className="text-xs font-mono font-bold text-[#4A0712]">03</span>
                <h5 className="font-serif text-xs font-bold text-[#2A1612]">Jadau & Karigari</h5>
                <p className="text-[10px] text-[#2A1612]/70 leading-relaxed">
                  Over 300 man-hours of traditional nakshi repoussé, uncut polki setting, and meenakari enamelling.
                </p>
              </div>

              <div className="bg-[#FAE7D8] p-3 rounded-lg border border-[#E9D1B5] space-y-1">
                <span className="text-xs font-mono font-bold text-[#4A0712]">04</span>
                <h5 className="font-serif text-xs font-bold text-[#2A1612]">BIS 916 Hallmark</h5>
                <p className="text-[10px] text-[#2A1612]/70 leading-relaxed">
                  Certified assaying and laser hallmark engraving with lifetime buyback and exchange guarantee.
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div>
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#8F6623] block mb-3 text-center sm:text-left">
              Featured Bespoke Commissions
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {CUSTOM_DESIGNS.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onClose();
                    onSelectDesign(item);
                  }}
                  className="group bg-[#1E0E0B] rounded-lg overflow-hidden border border-[#B88A3B]/40 hover:border-[#D8B477] transition-all cursor-pointer shadow-md flex flex-col justify-between"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 text-left">
                      <span className="text-[8px] uppercase tracking-wider text-[#D8B477] font-semibold block">
                        {item.craft}
                      </span>
                      <h6 className="font-serif text-[11px] text-[#FFF7ED] font-semibold truncate">
                        {item.title}
                      </h6>
                    </div>
                  </div>
                  <div className="p-2 bg-[#2D060D] text-[9.5px] text-[#E6C687] flex items-center justify-between">
                    <span>{item.goldPurity}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commission Booking Form */}
          <div className="bg-[#FAE7D8] p-4 sm:p-5 rounded-xl border border-[#E9D1B5]">
            {submitted ? (
              <div className="text-center py-6 space-y-2.5">
                <div className="w-12 h-12 rounded-full bg-[#4A0712] text-[#D8B477] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#4A0712]">
                  Commission Inquiry Received
                </h4>
                <p className="text-xs text-[#2A1612]/75 max-w-md mx-auto">
                  Our Chief Master Karigar will review your design requirements and connect via WhatsApp/Phone within 4 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-[#8F6623] underline cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex items-center gap-2 mb-1">
                  <Hammer className="w-4 h-4 text-[#4A0712]" />
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#2A1612]">
                    Book Your Bespoke Karigar Commission
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[9.5px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                      Adornment Type
                    </label>
                    <select
                      value={formData.jewelleryType}
                      onChange={(e) => setFormData({ ...formData, jewelleryType: e.target.value })}
                      className="w-full bg-[#FAF3EB] border border-[#E9D1B5] rounded px-2.5 py-1.5 text-xs text-[#2A1612] focus:outline-none"
                    >
                      <option>Royal Bridal Polki Choker</option>
                      <option>Nakshi Repoussé Kadas</option>
                      <option>Layered Rani Haar Suite</option>
                      <option>Ancestral Reset / Remodelling</option>
                      <option>Solitaire Diamond Ring</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[9.5px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                      Gold Purity
                    </label>
                    <select
                      value={formData.purity}
                      onChange={(e) => setFormData({ ...formData, purity: e.target.value })}
                      className="w-full bg-[#FAF3EB] border border-[#E9D1B5] rounded px-2.5 py-1.5 text-xs text-[#2A1612] focus:outline-none"
                    >
                      <option>22K Antique Yellow Gold</option>
                      <option>22K High-Polish Yellow Gold</option>
                      <option>18K Polki White/Rose Gold</option>
                      <option>24K Pure Gold Idol Sculpting</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[9.5px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#FAF3EB] border border-[#E9D1B5] rounded px-2.5 py-1.5 text-xs text-[#2A1612] focus:outline-none"
                    >
                      <option>₹2,00,000 – ₹5,00,000</option>
                      <option>₹5,00,000 – ₹15,00,000</option>
                      <option>₹15,00,000 – ₹50,00,000</option>
                      <option>₹50,00,000+ (High Bridal Haute Joaillerie)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[9.5px] font-sans font-bold uppercase tracking-wider text-[#8F6623] block mb-1">
                    Design Vision & Requirements
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#FAF3EB] border border-[#E9D1B5] rounded px-2.5 py-1.5 text-xs text-[#2A1612] focus:outline-none"
                    placeholder="Describe motifs (peacocks, lotus, filigree), gemstone preferences (Zambian emeralds, Basra pearls), or ancestral stones to reset..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] font-sans text-xs tracking-wider uppercase font-semibold py-2.5 px-8 rounded transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <Gem className="w-3.5 h-3.5" />
                  <span>Request Atelier Appointment</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
