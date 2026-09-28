import React, { useState } from 'react';
import { FOOTER_SECTIONS } from '../data/jewelleryData';
import {
  ShieldCheck,
  Lock,
  ChevronDown,
  ChevronUp,
  MapPin,
  Phone,
  Clock,
  Star,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';

interface FooterProps {
  onOpenInfo: (topic: string) => void;
  onOpenShopCategory: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInfo, onOpenShopCategory }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    shop: false,
    support: false,
    info: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getTopicKey = (item: string) => {
    return item.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
  };

  const contact = FOOTER_SECTIONS.contact;

  return (
    <footer className="w-full bg-[#FAF3EB] border-t border-[#E9D1B5] text-[#2A1612]">
      {/* Compact Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Brand & Showroom Details (5 cols on md+) */}
          <div className="md:col-span-5 space-y-3">
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#4A0712]">
                  H K JEWELLERS
                </span>
                <span className="text-[#B88A3B] text-xs">✦</span>
              </div>
              <p className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#8F6623] font-semibold">
                {contact.tagline}
              </p>
            </div>

            {/* Google Rating Badge */}
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FFF7ED] border border-[#E9D1B5] hover:border-[#B88A3B] text-[11px] text-[#2A1612] transition-colors group cursor-pointer shadow-xs"
              title="View on Google Maps"
            >
              <div className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="font-semibold text-[#4A0712]">4.6 ★</span>
              <span className="text-[#8F6623] font-sans text-[10.5px]">19+ Google Reviews</span>
              <ExternalLink className="w-3 h-3 text-[#8F6623] group-hover:text-[#4A0712]" />
            </a>

            {/* Showroom Address & Timings */}
            <div className="space-y-1.5 text-xs text-[#2A1612]/80 font-sans">
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-[#4A0712] transition-colors leading-relaxed group"
              >
                <MapPin className="w-3.5 h-3.5 text-[#B88A3B] flex-shrink-0 mt-0.5 group-hover:text-[#4A0712]" />
                <span>{contact.address}</span>
              </a>

              <div className="flex items-center gap-2 text-[11.5px] text-[#2A1612]/75">
                <Clock className="w-3.5 h-3.5 text-[#B88A3B] flex-shrink-0" />
                <span>{contact.timing}</span>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A0712] hover:underline"
                >
                  <Phone className="w-3 h-3 text-[#B88A3B]" />
                  <span>{contact.phone}</span>
                </a>
                <span className="text-[#E9D1B5]">|</span>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 hover:text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200"
                >
                  <MessageCircle className="w-3 h-3 text-emerald-700" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* Instagram */}
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @h.k.jewellers"
                className="p-1.5 rounded-full bg-[#FFF7ED] border border-[#E9D1B5] hover:border-[#4A0712] text-[#4A0712] transition-colors"
                title="Follow @h.k.jewellers on Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Google Maps Location */}
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Location"
                className="p-1.5 rounded-full bg-[#FFF7ED] border border-[#E9D1B5] hover:border-[#4A0712] text-[#4A0712] transition-colors"
                title="Locate H K Jewellers on Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>

              {/* WhatsApp */}
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp H K Jewellers"
                className="p-1.5 rounded-full bg-[#FFF7ED] border border-[#E9D1B5] hover:border-emerald-700 text-emerald-700 transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: SHOP OUR JEWELLERY (2 cols on md+) */}
          <div className="md:col-span-2">
            <button
              onClick={() => toggleSection('shop')}
              className="w-full flex items-center justify-between md:cursor-default text-left font-sans text-[11px] font-bold tracking-[0.16em] uppercase text-[#4A0712] mb-2 sm:mb-2.5 cursor-pointer"
            >
              <span>Shop Jewellery</span>
              <span className="md:hidden text-[#B88A3B]">
                {openSections.shop ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </span>
            </button>
            <ul className={`space-y-1.5 text-xs text-[#2A1612]/75 font-sans md:block ${openSections.shop ? 'block' : 'hidden md:block'}`}>
              {FOOTER_SECTIONS.shop.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onOpenShopCategory(item)}
                    className="hover:text-[#4A0712] transition-colors py-0.5 inline-block text-left cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: HELP & SUPPORT (2.5 cols on md+) */}
          <div className="md:col-span-2">
            <button
              onClick={() => toggleSection('support')}
              className="w-full flex items-center justify-between md:cursor-default text-left font-sans text-[11px] font-bold tracking-[0.16em] uppercase text-[#4A0712] mb-2 sm:mb-2.5 cursor-pointer"
            >
              <span>Help & Support</span>
              <span className="md:hidden text-[#B88A3B]">
                {openSections.support ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </span>
            </button>
            <ul className={`space-y-1.5 text-xs text-[#2A1612]/75 font-sans md:block ${openSections.support ? 'block' : 'hidden md:block'}`}>
              {FOOTER_SECTIONS.support.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onOpenInfo(getTopicKey(item))}
                    className="hover:text-[#4A0712] transition-colors py-0.5 inline-block text-left cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: INFORMATION & POLICIES (2.5 cols on md+) */}
          <div className="md:col-span-3">
            <button
              onClick={() => toggleSection('info')}
              className="w-full flex items-center justify-between md:cursor-default text-left font-sans text-[11px] font-bold tracking-[0.16em] uppercase text-[#4A0712] mb-2 sm:mb-2.5 cursor-pointer"
            >
              <span>Information & Trust</span>
              <span className="md:hidden text-[#B88A3B]">
                {openSections.info ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </span>
            </button>
            <ul className={`space-y-1.5 text-xs text-[#2A1612]/75 font-sans md:block ${openSections.info ? 'block' : 'hidden md:block'}`}>
              {FOOTER_SECTIONS.information.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onOpenInfo(getTopicKey(item))}
                    className="hover:text-[#4A0712] transition-colors py-0.5 inline-block text-left cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
              {FOOTER_SECTIONS.policies.slice(0, 2).map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onOpenInfo(getTopicKey(item))}
                    className="hover:text-[#4A0712] transition-colors py-0.5 inline-block text-left cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Slim, Compact Single-Line Bottom Bar (Drastically Reduces Footer Size) */}
      <div className="w-full bg-[#EEDCCC]/60 border-t border-[#E9D1B5] py-2.5 sm:py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2.5 text-center md:text-left">
          
          {/* Copyright notice */}
          <div className="text-[10px] text-[#2A1612]/70 font-sans tracking-wide">
            © {new Date().getFullYear()} <strong>H K JEWELLERS</strong> · Ahmedabad, Gujarat. All rights reserved.
          </div>

          {/* Compact Inline Payment Badges */}
          <div className="flex items-center gap-1.5 text-[9px] font-bold text-[#2A1612]/80">
            <span className="text-[9.5px] uppercase tracking-wider text-[#8F6623] font-semibold mr-1">
              We Accept:
            </span>
            <span className="px-2 py-0.5 bg-[#FAF3EB] rounded text-[9px] border border-[#E9D1B5] shadow-xs">
              VISA
            </span>
            <span className="px-2 py-0.5 bg-[#FAF3EB] rounded text-[9px] border border-[#E9D1B5] shadow-xs">
              Mastercard
            </span>
            <span className="px-2 py-0.5 bg-[#FAF3EB] rounded text-[9px] border border-[#E9D1B5] shadow-xs">
              RuPay
            </span>
            <span className="px-2 py-0.5 bg-[#FAF3EB] rounded text-[9px] border border-[#E9D1B5] text-[#4A0712] shadow-xs">
              UPI
            </span>
            <span className="px-2 py-0.5 bg-[#FAF3EB] rounded text-[9px] border border-[#E9D1B5] shadow-xs">
              NetBanking
            </span>
          </div>

          {/* Trust Seals */}
          <div className="flex items-center gap-2 text-[9.5px] text-[#8F6623] font-semibold">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#B88A3B]" />
              <span>BIS 916 &amp; 750</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#B88A3B]" />
              <span>SSL Secured</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
