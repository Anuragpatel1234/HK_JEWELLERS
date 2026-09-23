import React, { useState } from 'react';
import { FOOTER_SECTIONS } from '../data/jewelleryData';
import { ShieldCheck, Award, Lock, ChevronDown, ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  // Mobile accordion state for footer columns
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    shop: false,
    support: false,
    information: false,
    policies: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <footer className="w-full bg-[#FAE7D8] pt-8 sm:pt-12 pb-0 text-[#2A1612]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 5-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 pb-8 sm:pb-12">
          
          {/* Column 1: SHOP OUR JEWELLERY */}
          <div className="pb-3 md:pb-0">
            <button
              onClick={() => toggleSection('shop')}
              className="w-full flex items-center justify-between md:cursor-default text-left font-sans text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-[#2A1612] mb-2 sm:mb-4"
            >
              <span>Shop Our Jewellery</span>
              <span className="md:hidden text-[#B88A3B]">
                {openSections.shop ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>
            <ul className={`space-y-1.5 text-[11px] sm:text-xs text-[#2A1612]/70 font-sans md:block ${openSections.shop ? 'block' : 'hidden md:block'}`}>
              {FOOTER_SECTIONS.shop.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#4A0712] transition-colors py-0.5 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: HELP & SUPPORT */}
          <div className="pb-3 md:pb-0">
            <button
              onClick={() => toggleSection('support')}
              className="w-full flex items-center justify-between md:cursor-default text-left font-sans text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-[#2A1612] mb-2 sm:mb-4"
            >
              <span>Help & Support</span>
              <span className="md:hidden text-[#B88A3B]">
                {openSections.support ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>
            <ul className={`space-y-1.5 text-[11px] sm:text-xs text-[#2A1612]/70 font-sans md:block ${openSections.support ? 'block' : 'hidden md:block'}`}>
              {FOOTER_SECTIONS.support.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#4A0712] transition-colors py-0.5 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: INFORMATION */}
          <div className="pb-3 md:pb-0">
            <button
              onClick={() => toggleSection('information')}
              className="w-full flex items-center justify-between md:cursor-default text-left font-sans text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-[#2A1612] mb-2 sm:mb-4"
            >
              <span>Information</span>
              <span className="md:hidden text-[#B88A3B]">
                {openSections.information ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>
            <ul className={`space-y-1.5 text-[11px] sm:text-xs text-[#2A1612]/70 font-sans md:block ${openSections.information ? 'block' : 'hidden md:block'}`}>
              {FOOTER_SECTIONS.information.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#4A0712] transition-colors py-0.5 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: POLICIES */}
          <div className="pb-3 md:pb-0">
            <button
              onClick={() => toggleSection('policies')}
              className="w-full flex items-center justify-between md:cursor-default text-left font-sans text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-[#2A1612] mb-2 sm:mb-4"
            >
              <span>Policies</span>
              <span className="md:hidden text-[#B88A3B]">
                {openSections.policies ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>
            <ul className={`space-y-1.5 text-[11px] sm:text-xs text-[#2A1612]/70 font-sans md:block ${openSections.policies ? 'block' : 'hidden md:block'}`}>
              {FOOTER_SECTIONS.policies.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#4A0712] transition-colors py-0.5 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: CONTACT US & SOCIAL */}
          <div className="space-y-3">
            <h3 className="font-sans text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-[#2A1612]">
              Contact Us
            </h3>
            <div className="space-y-1 text-[11px] sm:text-xs text-[#2A1612]/75 font-sans">
              <p className="font-semibold text-[#4A0712]">{FOOTER_SECTIONS.contact.brand}</p>
              <p>{FOOTER_SECTIONS.contact.address}</p>
              <p className="pt-1">
                <a href={`tel:${FOOTER_SECTIONS.contact.phone.replace(/\s+/g, '')}`} className="hover:text-[#4A0712]">
                  {FOOTER_SECTIONS.contact.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${FOOTER_SECTIONS.contact.email}`} className="hover:text-[#4A0712]">
                  {FOOTER_SECTIONS.contact.email}
                </a>
              </p>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <h4 className="font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-[#2A1612] mb-2">
                Follow Us
              </h4>
              <div className="flex items-center gap-3.5 text-[#2A1612]">
                {/* Instagram Icon */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#4A0712] transition-colors">
                  <svg className="w-[18px] h-[18px] fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                {/* Facebook Icon */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#4A0712] transition-colors">
                  <svg className="w-[18px] h-[18px] fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                {/* Pinterest Icon */}
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="hover:text-[#4A0712] transition-colors">
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.365-.053.225-.177.271-.409.165-1.523-.71-2.475-2.935-2.475-4.726 0-3.85 2.796-7.387 8.067-7.387 4.236 0 7.528 3.018 7.528 7.054 0 4.21-2.654 7.597-6.337 7.597-1.238 0-2.402-.644-2.801-1.406l-.762 2.906c-.276 1.055-1.022 2.378-1.523 3.186C9.915 23.864 10.939 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                </a>
                {/* YouTube Icon */}
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#4A0712] transition-colors">
                  <svg className="w-[18px] h-[18px] fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-6 sm:mt-8 pb-4 text-center text-[10px] text-[#2A1612]/55 font-sans tracking-wider">
          © {new Date().getFullYear()} HK Jewellers. All rights reserved. Handcrafted with traditional reverence & luxury precision.
        </div>
      </div>

      {/* Bottom Bar — 2 Cards: We Accept | 100% Secure */}
      <div className="w-full bg-[#EEDCCC]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
            
            {/* Card 1: WE ACCEPT Payment Methods */}
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#2A1612]/70 mb-2.5">
                We Accept
              </span>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#2A1612]/85">
                <span className="px-3 py-1.5 bg-[#FAF3EB] rounded-[4px] text-[10px] tracking-wider font-bold shadow-sm">
                  VISA
                </span>
                <span className="px-3 py-1.5 bg-[#FAF3EB] rounded-[4px] text-[10px] tracking-wider font-bold shadow-sm">
                  Mastercard
                </span>
                <span className="px-3 py-1.5 bg-[#FAF3EB] rounded-[4px] text-[10px] tracking-wider font-bold shadow-sm">
                  RuPay
                </span>
                <span className="px-3 py-1.5 bg-[#FAF3EB] rounded-[4px] text-[10px] tracking-wider font-bold text-[#4A0712] shadow-sm">
                  UPI
                </span>
              </div>
            </div>

            {/* Card 2: 100% SECURE PAYMENTS Trust Badges */}
            <div className="flex flex-col items-center justify-center text-center">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#2A1612]/70 mb-2.5">
                100% Secure Payments
              </span>
              <div className="flex items-center gap-4 sm:gap-5 text-[9px] sm:text-[10px] text-[#2A1612]/75">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#B88A3B]" />
                  <span className="font-semibold tracking-wider">SSL SECURED</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#B88A3B]" />
                  <span className="font-semibold tracking-wider">TRUSTED PAYMENTS</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#B88A3B]" />
                  <span className="font-semibold tracking-wider">HALLMARK CERTIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

