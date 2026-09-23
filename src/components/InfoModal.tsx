import React, { useState } from 'react';
import { X, ShieldCheck, MapPin, Phone, Mail, Clock, HelpCircle, CheckCircle2, ChevronDown, ChevronUp, Search, Award } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onClose,
  initialTopic = 'faqs',
}) => {
  const [activeTopic, setActiveTopic] = useState<string>(initialTopic);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [trackingInput, setTrackingInput] = useState('HK-94821');
  const [trackingResult, setTrackingResult] = useState<boolean | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Sync initialTopic when modal opens with a specific topic
  React.useEffect(() => {
    if (initialTopic) {
      setActiveTopic(initialTopic);
    }
  }, [initialTopic]);

  if (!isOpen) return null;

  const faqs = [
    {
      q: 'How do I verify the purity of my HK Jewellers gold piece?',
      a: 'Every piece created by HK Jewellers bears the official Bureau of Indian Standards (BIS) hallmark, including the triangular BIS mark, 22K916 fineness stamp, our royal jeweler identification mark, and a unique 6-digit HUID code verifiable on the BIS Care application.'
    },
    {
      q: 'How is high-value jewellery shipped safely to my doorstep?',
      a: 'We ship exclusively through premier armored courier services (BVC Logistics and Sequel Secure Logistics). Every package is 100% transit-insured by us until delivered into your hands with tamper-evident security seals and OTP verification.'
    },
    {
      q: 'Can I customise an existing bridal set or reset ancestral heirlooms?',
      a: 'Yes. Our bespoke Karigari Atelier specialises in reviving ancestral jewellery and sculpting custom bridal trousseaus. Schedule an appointment or visit our Karol Bagh flagship salon for a private consultation.'
    },
    {
      q: 'What is the HK Jewellers Lifetime Exchange policy?',
      a: 'We guarantee 100% exchange value of gold at current market rates on all hallmarked HK Jewellers creations. Diamond and gemstone components are evaluated at 90% of prevailing rates with certified authenticity.'
    },
    {
      q: 'Do you offer international shipping for NRI bridal orders?',
      a: 'Yes, we provide fully insured international shipping with complete customs documentation to the USA, UK, UAE, Canada, and Singapore via specialized secure air freight.'
    }
  ];

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
            <ShieldCheck className="w-5 h-5 text-[#4A0712]" />
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2A1612]">
                Concierge, Heritage &amp; Policies
              </h3>
              <p className="text-[11px] text-[#8F6623]">
                HK Jewellers • Flagship Karol Bagh Boutique Since 1994
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Info Modal"
            className="p-1 text-[#2A1612] hover:text-[#4A0712] rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Sidebar / Top Nav for Topics */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#FAE7D8] border-b border-[#E9D1B5] overflow-x-auto no-scrollbar text-xs font-sans">
          {[
            { id: 'faqs', label: 'FAQs' },
            { id: 'track-order', label: 'Track Order' },
            { id: 'store-locator', label: 'Boutique Locator' },
            { id: 'size-guide', label: 'Size Guide' },
            { id: 'jewellery-care', label: 'Jewellery Care' },
            { id: 'about-us', label: 'About Us' },
            { id: 'our-heritage', label: 'Heritage & Craft' },
            { id: 'lifetime-exchange', label: 'Lifetime Exchange' },
            { id: 'shipping-policy', label: 'Shipping & Returns' },
            { id: 'contact-us', label: 'Contact Concierge' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTopic(tab.id)}
              className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                activeTopic === tab.id
                  ? 'bg-[#4A0712] text-[#FFF7ED] font-semibold shadow-sm'
                  : 'text-[#2A1612]/75 hover:bg-[#FAF3EB] hover:text-[#2A1612]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          
          {/* 1. FAQs */}
          {activeTopic === 'faqs' && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-4 h-4 text-[#4A0712]" />
                <h4 className="font-serif text-lg font-bold text-[#2A1612]">Frequently Asked Questions</h4>
              </div>
              <div className="space-y-2">
                {faqs.map((faq, idx) => {
                  const isExp = expandedFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-[#FAE7D8] rounded-lg border border-[#E9D1B5] overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedFaq(isExp ? null : idx)}
                        className="w-full text-left p-3.5 flex items-center justify-between font-serif text-sm font-semibold text-[#2A1612] hover:text-[#4A0712] cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        {isExp ? <ChevronUp className="w-4 h-4 text-[#B88A3B]" /> : <ChevronDown className="w-4 h-4 text-[#B88A3B]" />}
                      </button>
                      {isExp && (
                        <div className="p-3.5 pt-0 text-xs text-[#2A1612]/80 leading-relaxed border-t border-[#E9D1B5]/50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 2. Track Order */}
          {activeTopic === 'track-order' && (
            <div className="space-y-4 max-w-lg mx-auto py-3">
              <div className="text-center space-y-1">
                <h4 className="font-serif text-xl font-bold text-[#2A1612]">Armoured Courier Dispatch Tracker</h4>
                <p className="text-xs text-[#2A1612]/70">Enter your 7-character Order ID or phone number to verify live transit status.</p>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={trackingInput}
                  onChange={(e) => setTrackingInput(e.target.value)}
                  placeholder="e.g. HK-94821"
                  className="flex-1 bg-[#FAE7D8] border border-[#E9D1B5] rounded px-3 py-2 text-xs font-mono text-[#2A1612] focus:outline-none focus:border-[#4A0712]"
                />
                <button
                  onClick={() => setTrackingResult(true)}
                  className="bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] text-xs font-semibold px-4 py-2 rounded flex items-center gap-1.5 cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Track</span>
                </button>
              </div>

              {trackingResult !== null && (
                <div className="bg-[#FAE7D8] p-4 rounded-xl border border-[#B88A3B] space-y-3 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#4A0712]">{trackingInput.toUpperCase()}</span>
                    <span className="bg-[#4A0712] text-[#FFF7ED] text-[9.5px] uppercase tracking-wider px-2 py-0.5 rounded font-bold">
                      In Transit • Armoured Escort
                    </span>
                  </div>

                  <div className="space-y-2 text-xs text-[#2A1612]/80 pt-2 border-t border-[#E9D1B5]">
                    <div className="flex justify-between">
                      <span className="text-[#8F6623]">Security Carrier:</span>
                      <span className="font-semibold text-[#2A1612]">BVC Secure Air Transit</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8F6623]">Current Vault Checkpoint:</span>
                      <span className="font-semibold text-[#2A1612]">Delhi Hub Vault II</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8F6623]">Expected Delivery:</span>
                      <span className="font-semibold text-[#4A0712]">Tomorrow by 2:00 PM</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 3. Store Locator */}
          {activeTopic === 'store-locator' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#4A0712]" />
                <h4 className="font-serif text-lg font-bold text-[#2A1612]">Flagship Karol Bagh Boutique</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#FAE7D8] p-4 rounded-xl border border-[#E9D1B5] space-y-3 text-xs">
                  <div>
                    <h5 className="font-serif text-sm font-bold text-[#4A0712]">HK Jewellers Karol Bagh Salon</h5>
                    <p className="text-[#2A1612]/80 mt-1">1502, Bank Street, Near Gurudwara Road, Karol Bagh, New Delhi, 110005</p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-[#E9D1B5] text-[#2A1612]/80">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#B88A3B]" />
                      <span>Monday – Sunday: 11:00 AM – 8:30 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#B88A3B]" />
                      <span>+91 98765 43210 / +91 11 2875 1994</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#B88A3B]" />
                      <span>salon@hkjewellers.com</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://maps.google.com/?q=Karol+Bagh+Jewellers+New+Delhi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] text-xs font-semibold py-2 px-4 rounded transition-colors"
                    >
                      <MapPin className="w-3 h-3" />
                      <span>Get Directions on Google Maps</span>
                    </a>
                  </div>
                </div>

                <div className="bg-[#240C11] p-4 rounded-xl text-[#FFF7ED] border border-[#B88A3B]/40 space-y-3 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#D8B477] block">
                      VIP Salon Viewing
                    </span>
                    <h5 className="font-serif text-base font-bold mt-1 text-[#FDF5E6]">
                      Private Bridal Suites
                    </h5>
                    <p className="text-xs text-[#FFF7ED]/80 mt-2 leading-relaxed">
                      Enjoy a private, unhurried consultation with your family in our private salon suite with dedicated gemmologists. Valet parking and concierge security available.
                    </p>
                  </div>
                  <div className="text-[11px] text-[#D8B477] font-serif italic">
                    Appointments recommended for bridal trousseau viewings.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. Size Guide */}
          {activeTopic === 'size-guide' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#2A1612]">Imperial Size &amp; Measurement Guide</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-[#FAE7D8] p-4 rounded-xl border border-[#E9D1B5] space-y-2">
                  <h5 className="font-serif text-sm font-bold text-[#4A0712]">Indian Ring Size Standard</h5>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#E9D1B5] text-[#8F6623]">
                        <th className="py-1">Size (IN)</th>
                        <th className="py-1">Inner Dia (mm)</th>
                        <th className="py-1">Circumference</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E9D1B5]/50">
                      <tr><td className="py-1 font-semibold">10</td><td>15.9 mm</td><td>50.0 mm</td></tr>
                      <tr><td className="py-1 font-semibold">12</td><td>16.5 mm</td><td>51.9 mm</td></tr>
                      <tr><td className="py-1 font-semibold">14</td><td>17.2 mm</td><td>54.0 mm</td></tr>
                      <tr><td className="py-1 font-semibold">16</td><td>17.8 mm</td><td>56.0 mm</td></tr>
                      <tr><td className="py-1 font-semibold">18</td><td>18.5 mm</td><td>58.1 mm</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#FAE7D8] p-4 rounded-xl border border-[#E9D1B5] space-y-2">
                  <h5 className="font-serif text-sm font-bold text-[#4A0712]">Kada &amp; Bangle Size Chart</h5>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#E9D1B5] text-[#8F6623]">
                        <th className="py-1">Bangle Size</th>
                        <th className="py-1">Inner Dia (inches)</th>
                        <th className="py-1">Hand Size</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E9D1B5]/50">
                      <tr><td className="py-1 font-semibold">2-4</td><td>2.25 in (57.2 mm)</td><td>Small</td></tr>
                      <tr><td className="py-1 font-semibold">2-6</td><td>2.37 in (60.3 mm)</td><td>Standard</td></tr>
                      <tr><td className="py-1 font-semibold">2-8</td><td>2.50 in (63.5 mm)</td><td>Medium / Large</td></tr>
                      <tr><td className="py-1 font-semibold">2-10</td><td>2.62 in (66.7 mm)</td><td>Broad Kada</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* 5. Jewellery Care */}
          {activeTopic === 'jewellery-care' && (
            <div className="space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#2A1612]">Caring for 22K Gold &amp; Uncut Polki</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-[#FAE7D8] p-3.5 rounded-lg border border-[#E9D1B5] space-y-1">
                  <span className="font-bold text-[#4A0712] block">Storage in Velvet</span>
                  <p className="text-[#2A1612]/80 leading-relaxed">
                    Store each uncut Polki piece separately in soft velvet or cotton-lined boxes to prevent scratches against other metals.
                  </p>
                </div>
                <div className="bg-[#FAE7D8] p-3.5 rounded-lg border border-[#E9D1B5] space-y-1">
                  <span className="font-bold text-[#4A0712] block">Perfume &amp; Cosmetics</span>
                  <p className="text-[#2A1612]/80 leading-relaxed">
                    Always wear your jewellery last, after applying fragrances and makeup, as chemicals can dull traditional meenakari enamels.
                  </p>
                </div>
                <div className="bg-[#FAE7D8] p-3.5 rounded-lg border border-[#E9D1B5] space-y-1">
                  <span className="font-bold text-[#4A0712] block">Complimentary Cleansing</span>
                  <p className="text-[#2A1612]/80 leading-relaxed">
                    Bring your HK Jewellers pieces to our Karol Bagh salon for complimentary ultrasonic cleansing and hallmark inspection anytime.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 6. About Us / Heritage */}
          {(activeTopic === 'about-us' || activeTopic === 'our-heritage') && (
            <div className="space-y-3 text-xs sm:text-sm text-[#2A1612]/80 leading-relaxed">
              <h4 className="font-serif text-xl font-bold text-[#4A0712]">A Legacy of Sovereign Karigari Since 1994</h4>
              <p>
                Founded in 1994 in the historic goldsmith district of Karol Bagh, New Delhi, HK Jewellers was born from a singular conviction: that fine jewellery should not merely adorn, but carry the dignity, spirit, and timeless authority of Indian royal heritage.
              </p>
              <p>
                Across three decades, we have remained devoted guardians of generational karigari—resisting modern mass-machining in favor of hand-chased Nakshi repoussé, uncut Polki jadau settings, and vibrant Rajasthani Meenakari.
              </p>
              <div className="p-3 bg-[#FAE7D8] rounded-lg border border-[#E9D1B5] flex items-center gap-3">
                <Award className="w-6 h-6 text-[#B88A3B] flex-shrink-0" />
                <div>
                  <strong className="text-[#4A0712] block">100% Certified 22K Hallmarked</strong>
                  <span className="text-xs">Recognized as one of North India’s most trusted heritage jewellery houses with over 50,000 royal patrons.</span>
                </div>
              </div>
            </div>
          )}

          {/* 7. Lifetime Exchange */}
          {activeTopic === 'lifetime-exchange' && (
            <div className="space-y-3">
              <h4 className="font-serif text-lg font-bold text-[#2A1612]">The HK Lifetime Exchange Promise</h4>
              <div className="bg-[#FAE7D8] p-4 rounded-xl border border-[#E9D1B5] space-y-2.5 text-xs text-[#2A1612]/85">
                <p>
                  Gold is forever, and our relationship with your family is lifelong. Every jewellery creation bearing our hallmark is eligible for our transparent exchange program:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>100% Gold Value:</strong> Receive 100% of current gold market rate on the net weight of gold at the time of exchange.</li>
                  <li><strong>90% Gemstone &amp; Polki Value:</strong> Certified emeralds, rubies, and uncut polki diamonds valued at 90% prevailing market rates.</li>
                  <li><strong>Zero Deduction on Purity:</strong> Because every piece is BIS 916 hallmarked, no testing fees or melting loss deductions apply.</li>
                </ul>
              </div>
            </div>
          )}

          {/* 8. Shipping & Return Policy */}
          {activeTopic === 'shipping-policy' && (
            <div className="space-y-3 text-xs text-[#2A1612]/80 leading-relaxed">
              <h4 className="font-serif text-lg font-bold text-[#2A1612]">Shipping &amp; 15-Day Inspection Return Policy</h4>
              <div className="bg-[#FAE7D8] p-4 rounded-xl border border-[#E9D1B5] space-y-2">
                <p><strong>Complimentary Insured Shipping:</strong> All prepaid orders across India are shipped free of charge via dedicated armored vault couriers.</p>
                <p><strong>15-Day Unconditional Return:</strong> If you are not completely enchanted by your piece upon arrival, return it within 15 days in original condition with security tag intact for a 100% full refund.</p>
              </div>
            </div>
          )}

          {/* 9. Contact Us */}
          {activeTopic === 'contact-us' && (
            <div className="space-y-3">
              <h4 className="font-serif text-lg font-bold text-[#2A1612]">Speak with our Royal Concierge</h4>
              {contactSubmitted ? (
                <div className="bg-[#FAE7D8] p-6 rounded-xl border border-[#B88A3B] text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-[#4A0712] mx-auto" />
                  <h5 className="font-serif text-base font-bold text-[#4A0712]">Inquiry Dispatched</h5>
                  <p className="text-xs text-[#2A1612]/75">Our senior concierge team will reach out to you within 2 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSubmitted(true);
                  }}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      className="bg-[#FAE7D8] border border-[#E9D1B5] rounded px-3 py-2 text-xs text-[#2A1612] focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Your Phone / WhatsApp"
                      className="bg-[#FAE7D8] border border-[#E9D1B5] rounded px-3 py-2 text-xs text-[#2A1612] focus:outline-none"
                    />
                  </div>
                  <textarea
                    rows={3}
                    required
                    placeholder="How may our concierge assist your jewelry selection?"
                    className="w-full bg-[#FAE7D8] border border-[#E9D1B5] rounded px-3 py-2 text-xs text-[#2A1612] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#4A0712] hover:bg-[#35050D] text-[#FFF7ED] text-xs font-semibold py-2.5 px-6 rounded transition-colors cursor-pointer"
                  >
                    Send Concierge Message
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
