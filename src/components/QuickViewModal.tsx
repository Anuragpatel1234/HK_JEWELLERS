import React, { useState } from 'react';
import {
  X,
  Heart,
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  Truck,
  RotateCcw,
  Check,
  MapPin,
  ChevronDown,
  ChevronUp,
  Gem,
  Award,
  Phone,
} from 'lucide-react';

export interface ModalProductDetails {
  title: string;
  subtitle?: string;
  tagline?: string;
  description: string;
  image: string;
  goldPurity?: string;
  gemstones?: string;
  price?: string;
  tags?: string[];
  karigariHours?: number;
  weightGrams?: string;
  craft?: string;
  category?: string;
}

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ModalProductDetails | null;
  onAddToCart: (product: ModalProductDetails) => void;
  onToggleWishlist: (product: ModalProductDetails) => void;
  isWishlisted?: boolean;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  isOpen,
  onClose,
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'pricing' | 'assurance'>('specs');
  const [showPriceBreakdown, setShowPriceBreakdown] = useState(false);
  const [pincode, setPincode] = useState('110005');
  const [pincodeVerified, setPincodeVerified] = useState(true);

  if (!isOpen || !product) return null;

  // Numerical pricing calculations (Tanishq transparent pricing model)
  const rawPrice = parseInt((product.price || '₹3,50,000').replace(/[^0-9]/g, '')) || 350000;
  const originalMrp = Math.round(rawPrice * 1.12);
  const goldComponent = Math.round(rawPrice * 0.64);
  const stoneComponent = Math.round(rawPrice * 0.20);
  const makingCharges = Math.round(rawPrice * 0.13);
  const gstAmount = rawPrice - goldComponent - stoneComponent - makingCharges;

  // Weight derivations
  const grossWeightNum = parseFloat((product.weightGrams || '50g').replace(/[^0-9.]/g, '')) || 50;
  const netGoldWeight = (grossWeightNum * 0.82).toFixed(1);
  const stoneWeight = (grossWeightNum * 0.18).toFixed(1);

  // Dynamic HUID & SKU
  const skuCode = `HKJ-${(product.title.slice(0, 3) || 'ITM').toUpperCase()}-${(rawPrice % 900) + 100}`;
  const huidCode = `HUID-916${(rawPrice % 8999) + 1000}`;

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.trim().length === 6) {
      setPincodeVerified(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Luxury Product Detail Modal */}
      <div className="relative w-full max-w-4xl bg-[#FAF3EB] border border-[#B88A3B]/50 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        
        {/* Top Floating Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Product View"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-8 h-8 sm:w-9 sm:py-9 rounded-full bg-black/50 hover:bg-[#4A0712] text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Modal Scrollable Body: 2-Column Responsive Layout */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            
            {/* Left Column: Image Showcase & Trust Seals */}
            <div className="space-y-4">
              {/* Main Product Image Frame: 100% Clean & Pristine */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#FAF3EB] border border-[#D8B477]/40 shadow-inner group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Hallmark & Verification Strip Under Image */}
              <div className="flex items-center justify-between px-3.5 py-2 bg-[#FFF7ED] rounded-lg border border-[#E9D1B5] text-[11px] text-[#2A1612]">
                <div className="flex items-center gap-1.5 font-sans font-semibold text-[#8F6623]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B88A3B]" />
                  <span>BIS {product.goldPurity?.includes('18K') ? '750' : '916'} Hallmarked</span>
                </div>
                <div className="font-mono text-[#2A1612]/70 text-[10px]">
                  {huidCode}
                </div>
                <div className="text-[10px] text-emerald-800 font-medium">
                  Ahmedabad Showroom
                </div>
              </div>

              {/* Trust Guarantee Grid (Tanishq & Caratlane Standard) */}
              <div className="grid grid-cols-2 gap-2.5 bg-[#FFF7ED] p-3 rounded-xl border border-[#E9D1B5]">
                <div className="flex items-center gap-2 text-xs text-[#2A1612]">
                  <Award className="w-4 h-4 text-[#8F6623] flex-shrink-0" />
                  <div>
                    <span className="font-semibold block text-[10.5px]">100% Certified</span>
                    <span className="text-[9.5px] text-[#2A1612]/70">BIS Hallmarked &amp; IGI</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#2A1612]">
                  <RotateCcw className="w-4 h-4 text-[#8F6623] flex-shrink-0" />
                  <div>
                    <span className="font-semibold block text-[10.5px]">Lifetime Exchange</span>
                    <span className="text-[9.5px] text-[#2A1612]/70">100% Gold Value Assured</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#2A1612]">
                  <Truck className="w-4 h-4 text-[#8F6623] flex-shrink-0" />
                  <div>
                    <span className="font-semibold block text-[10.5px]">Insured Delivery</span>
                    <span className="text-[9.5px] text-[#2A1612]/70">Tamper-Proof Vault Box</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#2A1612]">
                  <Gem className="w-4 h-4 text-[#8F6623] flex-shrink-0" />
                  <div>
                    <span className="font-semibold block text-[10.5px]">Natural Gemstones</span>
                    <span className="text-[9.5px] text-[#2A1612]/70">Ethically Sourced</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Title, Transparent Pricing, Specs & Actions */}
            <div className="space-y-4 sm:space-y-5">
              
              {/* Category, Title & Tagline */}
              <div className="border-b border-[#E9D1B5] pb-3 space-y-1">
                <div className="flex items-center justify-between text-[10.5px] font-sans">
                  <span className="text-[#8F6623] font-bold uppercase tracking-[0.2em]">
                    {product.subtitle || 'HK Signature Vault'}
                  </span>
                  <span className="font-mono text-[#2A1612]/60">
                    SKU: {skuCode}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl text-[#2A1612] font-semibold leading-tight">
                  {product.title}
                </h2>

                {product.tagline && (
                  <p className="font-serif italic text-xs sm:text-sm text-[#4A0712]">
                    {product.tagline}
                  </p>
                )}
              </div>

              {/* Price Banner with Net-Weight Transparency */}
              <div className="bg-[#FCF9F5] p-3.5 sm:p-4 rounded-2xl border border-[#EAE0D2] space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2A1612]">
                    {product.price || '₹3,50,000'}
                  </span>
                  <span className="text-sm text-[#8A7E76] line-through">
                    ₹{originalMrp.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10.5px] sm:text-[11px] font-sans font-semibold bg-[#E8F8F0] border border-[#BBE7D0] text-[#166534] px-2.5 py-0.5 rounded-md">
                    Save ₹{(originalMrp - rawPrice).toLocaleString('en-IN')}
                  </span>
                </div>

                <p className="text-[10.5px] text-[#2A1612]/70">
                  Inclusive of all taxes · <strong>Net Weight Billing</strong> (You only pay for gold weight, never stone weight).
                </p>

                {/* Collapsible Price Breakdown (Tanishq Style) */}
                <div className="pt-2 border-t border-[#E9D1B5]/80">
                  <button
                    onClick={() => setShowPriceBreakdown(!showPriceBreakdown)}
                    className="flex items-center justify-between w-full text-xs font-semibold text-[#8F6623] hover:text-[#4A0712] cursor-pointer"
                  >
                    <span>{showPriceBreakdown ? 'Hide Transparent Price Breakdown' : 'View Transparent Price Breakdown'}</span>
                    {showPriceBreakdown ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {showPriceBreakdown && (
                    <div className="mt-2.5 space-y-1.5 text-xs text-[#2A1612]/80 bg-[#FAF3EB] p-3 rounded-lg border border-[#E9D1B5]">
                      <div className="flex justify-between">
                        <span>Gold Component ({netGoldWeight}g @ 22K 916):</span>
                        <span className="font-mono font-semibold">₹{goldComponent.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Precious Stones &amp; Polki Diamonds ({stoneWeight}g):</span>
                        <span className="font-mono font-semibold">₹{stoneComponent.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Karigari / Making Charges ({product.karigariHours || 240}h craftsmanship):</span>
                        <span className="font-mono font-semibold">₹{makingCharges.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-[#8F6623]">
                        <span>Applicable GST (3%):</span>
                        <span className="font-mono font-semibold">₹{gstAmount.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between pt-1.5 border-t border-[#E9D1B5] font-bold text-[#4A0712]">
                        <span>Final Price (Net):</span>
                        <span className="font-mono">₹{rawPrice.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Delivery Pincode Checker (CaratLane & Tanishq Standard) */}
              <div className="bg-[#FAF3EB] p-3 rounded-xl border border-[#E9D1B5] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#2A1612] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8F6623]" />
                    <span>Check Delivery &amp; Salon Appointment</span>
                  </span>
                  <span className="text-[10px] text-[#8F6623]">Ahmedabad Showroom</span>
                </div>

                <form onSubmit={handleCheckPincode} className="flex gap-2">
                  <input
                    type="text"
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value.replace(/[^0-9]/g, ''))}
                    placeholder="Enter 6-digit Pincode"
                    className="flex-1 bg-[#FFF7ED] border border-[#E9D1B5] rounded-lg px-3 py-1.5 text-xs text-[#2A1612] focus:outline-none focus:border-[#B88A3B]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Check
                  </button>
                </form>

                {pincodeVerified && (
                  <p className="text-[11px] text-[#1B5E20] flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Complimentary Insured Delivery by <strong>Thursday</strong> | Available for Ahmedabad Showroom Try-On</span>
                  </p>
                )}
              </div>

              {/* Tabbed Specifications & Craft Details */}
              <div className="space-y-2.5">
                <div className="flex border-b border-[#E9D1B5] text-xs">
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`pb-2 px-3 font-semibold transition-colors cursor-pointer ${
                      activeTab === 'specs'
                        ? 'border-b-2 border-[#4A0712] text-[#4A0712]'
                        : 'text-[#2A1612]/60 hover:text-[#2A1612]'
                    }`}
                  >
                    Specifications
                  </button>
                  <button
                    onClick={() => setActiveTab('pricing')}
                    className={`pb-2 px-3 font-semibold transition-colors cursor-pointer ${
                      activeTab === 'pricing'
                        ? 'border-b-2 border-[#4A0712] text-[#4A0712]'
                        : 'text-[#2A1612]/60 hover:text-[#2A1612]'
                    }`}
                  >
                    Atelier Karigari
                  </button>
                  <button
                    onClick={() => setActiveTab('assurance')}
                    className={`pb-2 px-3 font-semibold transition-colors cursor-pointer ${
                      activeTab === 'assurance'
                        ? 'border-b-2 border-[#4A0712] text-[#4A0712]'
                        : 'text-[#2A1612]/60 hover:text-[#2A1612]'
                    }`}
                  >
                    HK Hallmark Promise
                  </button>
                </div>

                {activeTab === 'specs' && (
                  <div className="bg-[#FFF7ED] p-3 rounded-lg border border-[#E9D1B5] grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[#8F6623] block text-[9.5px] uppercase font-bold">Gold Purity</span>
                      <span className="font-medium text-[#2A1612]">{product.goldPurity || '22K Hallmarked Gold'}</span>
                    </div>
                    <div>
                      <span className="text-[#8F6623] block text-[9.5px] uppercase font-bold">Gross / Net Gold</span>
                      <span className="font-mono text-[#2A1612]">{grossWeightNum}g / {netGoldWeight}g</span>
                    </div>
                    <div>
                      <span className="text-[#8F6623] block text-[9.5px] uppercase font-bold">Precious Gemstones</span>
                      <span className="font-medium text-[#2A1612]">{product.gemstones || product.tagline || 'Natural Certified Gems'}</span>
                    </div>
                    <div>
                      <span className="text-[#8F6623] block text-[9.5px] uppercase font-bold">Hallmark Standards</span>
                      <span className="font-medium text-[#2A1612] flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-[#B88A3B]" /> BIS 916 Laser HUID
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === 'pricing' && (
                  <div className="bg-[#FFF7ED] p-3 rounded-lg border border-[#E9D1B5] text-xs space-y-1.5 text-[#2A1612]/80 leading-relaxed">
                    <p>
                      <strong>Artisan Craft:</strong> Handcrafted over <strong>{product.karigariHours || 240} man-hours</strong> by master karigars from Rajasthan and Delhi.
                    </p>
                    <p className="text-[11px] text-[#2A1612]/70">
                      {product.description}
                    </p>
                  </div>
                )}

                {activeTab === 'assurance' && (
                  <div className="bg-[#FFF7ED] p-3 rounded-lg border border-[#E9D1B5] text-xs space-y-1.5 text-[#2A1612]/80">
                    <p className="flex items-center gap-1.5 text-[#4A0712] font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Zero Impurity Guarantee with XRF Spectrometry</span>
                    </p>
                    <p className="text-[11px] text-[#2A1612]/70">
                      Every piece is tested on advanced German Karatmeters before laser inscription. We provide 100% buyback of pure gold value at current salon market rates.
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons: Add to Bag & Wishlist */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onAddToCart(product)}
                  className="flex-1 bg-[#3B0810] hover:bg-[#2A050C] text-white font-sans text-xs tracking-[0.16em] uppercase font-bold py-3.5 px-4 rounded-xl border border-[#3B0810] transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.98] cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-[#D8B477]" />
                  <span>ADD TO BAG</span>
                </button>

                <button
                  onClick={() => onToggleWishlist(product)}
                  aria-label="Wishlist Item"
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer shadow-sm ${
                    isWishlisted
                      ? 'bg-[#3B0810] border-[#3B0810] text-[#D8B477]'
                      : 'bg-[#FAF4EC] border-[#DFD3C3] hover:border-[#3B0810] text-[#3B0810]'
                  }`}
                  title="Save to Wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Showroom Consultation CTA */}
              <div className="pt-1 flex items-center justify-between text-[11px] text-[#8F6623]">
                <a
                  href="tel:+917069916916"
                  className="flex items-center gap-1.5 hover:text-[#4A0712] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Showroom: +91 70699 16916</span>
                </a>
                <span className="text-[#2A1612]/50">|</span>
                <span className="text-[#2A1612]/70">Nirnay Nagar, Ahmedabad</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

