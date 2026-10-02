import React from 'react';
import { ShieldCheck, Scale, RefreshCw, Sparkles, CheckCircle2, Award, Gem, Truck, HeartHandshake } from 'lucide-react';

interface HkPromiseSectionProps {
  onOpenGoldRate?: () => void;
  onOpenExchange?: () => void;
  onOpenSavings?: () => void;
}

export const HK_PROMISES = [
  {
    icon: ShieldCheck,
    title: '100% BIS 916 Hallmarked & HUID',
    subtitle: 'Government Authenticated Purity',
    description: 'Every single piece carries the official BIS hallmark along with a 6-digit laser-engraved HUID code verifiable on the BIS Care App.',
  },
  {
    icon: RefreshCw,
    title: '100% Exchange Value for Old Gold',
    subtitle: 'From Any Jeweller Across India',
    description: 'Exchange your heirloom gold from any jeweller for 100% full market value towards brand new HK Jewellers designs.',
  },
  {
    icon: Scale,
    title: 'Zero Deduction on Stone Weight',
    subtitle: 'Net Weight Billing Guarantee',
    description: 'You only pay for the exact weight of pure gold. Precious stones, pearls, and lac are weighed and billed separately.',
  },
  {
    icon: Gem,
    title: 'Certified Natural Diamonds',
    subtitle: 'IGI & SGL Certified 4Cs',
    description: 'Each natural diamond is ethically sourced and certified for Color, Clarity, Cut, and Carat weight with zero lab-grown substitutes.',
  },
  {
    icon: Sparkles,
    title: 'Karatmeter Purity Verification',
    subtitle: 'German Non-Destructive XRF',
    description: 'Test the exact purity of your gold in 30 seconds on our state-of-the-art Karatmeter, directly in your presence before purchase.',
  },
  {
    icon: Award,
    title: 'Transparent Price Breakup',
    subtitle: 'No Hidden Making Surcharges',
    description: 'Full itemized bill showing current bullion rate, net gold weight, artisan making charges, and 3% GST clearly stated.',
  },
  {
    icon: HeartHandshake,
    title: 'Lifetime Free Maintenance',
    subtitle: 'Ultrasonic Cleaning & Repair',
    description: 'Enjoy complimentary ultrasonic cleaning, prong tightening, and micro-polishing at our store whenever you visit.',
  },
  {
    icon: Truck,
    title: 'Pan-India Insured Express Delivery',
    subtitle: 'Tamper-Evident Security Seal',
    description: 'Every parcel travels 100% insured with real-time transit tracking and dual-verification OTP delivery at your doorstep.',
  },
];

export const HkPromiseSection: React.FC<HkPromiseSectionProps> = ({
  onOpenGoldRate,
  onOpenExchange,
  onOpenSavings,
}) => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF5ED] border-t border-b border-[#EAE0D2]/60 relative overflow-hidden">
      {/* Decorative subtle background aura */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B88A3B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#3B0810]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2A1612] tracking-tight">
            The HK Jewellers Promise
          </h2>
          <p className="text-xs sm:text-sm text-[#8F6623] leading-relaxed">
            For over four decades, our family has crafted sacred heirlooms with unwavering integrity, complete transparency, and the highest hallmarks of purity in India.
          </p>
        </div>

        {/* Quick Action Interactive Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {onOpenGoldRate && (
            <button
              onClick={onOpenGoldRate}
              className="p-3.5 bg-[#FCF9F5] hover:bg-[#FAF4EC] border border-[#EAE0D2] hover:border-[#B88A3B] rounded-xl text-left transition-all hover:shadow-md flex items-center justify-between group cursor-pointer"
            >
              <div>
                <span className="text-[10px] text-[#8F6623] uppercase font-bold tracking-wider">
                  Live Rate Transparency
                </span>
                <div className="font-serif font-bold text-sm text-[#2A1612] group-hover:text-[#3B0810]">
                  Check Today's Gold Rates &rarr;
                </div>
              </div>
              <Scale className="w-5 h-5 text-[#B88A3B] group-hover:scale-110 transition-transform" />
            </button>
          )}

          {onOpenExchange && (
            <button
              onClick={onOpenExchange}
              className="p-3.5 bg-[#FCF9F5] hover:bg-[#FAF4EC] border border-[#EAE0D2] hover:border-[#B88A3B] rounded-xl text-left transition-all hover:shadow-md flex items-center justify-between group cursor-pointer"
            >
              <div>
                <span className="text-[10px] text-[#8F6623] uppercase font-bold tracking-wider">
                  Old Gold Upgrades
                </span>
                <div className="font-serif font-bold text-sm text-[#2A1612] group-hover:text-[#3B0810]">
                  100% Exchange Calculator &rarr;
                </div>
              </div>
              <RefreshCw className="w-5 h-5 text-[#B88A3B] group-hover:scale-110 transition-transform" />
            </button>
          )}

          {onOpenSavings && (
            <button
              onClick={onOpenSavings}
              className="p-3.5 bg-[#FCF9F5] hover:bg-[#FAF4EC] border border-[#EAE0D2] hover:border-[#B88A3B] rounded-xl text-left transition-all hover:shadow-md flex items-center justify-between group cursor-pointer"
            >
              <div>
                <span className="text-[10px] text-[#8F6623] uppercase font-bold tracking-wider">
                  Monthly Savings Plan
                </span>
                <div className="font-serif font-bold text-sm text-[#2A1612] group-hover:text-[#3B0810]">
                  Swarn Samriddhi (75% Bonus) &rarr;
                </div>
              </div>
              <Sparkles className="w-5 h-5 text-[#B88A3B] group-hover:scale-110 transition-transform" />
            </button>
          )}
        </div>

        {/* 8 Promise Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {HK_PROMISES.map((promise, index) => {
            const Icon = promise.icon;
            return (
              <div
                key={index}
                className="bg-[#FCF9F5] border border-[#EAE0D2] hover:border-[#B88A3B] rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#3B0810]/10 border border-[#3B0810]/15 flex items-center justify-center text-[#3B0810]">
                    <Icon className="w-5 h-5 stroke-[1.6]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-[#2A1612] leading-snug">
                      {promise.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-[#8F6623] uppercase tracking-wider block mt-0.5">
                      {promise.subtitle}
                    </span>
                  </div>
                  <p className="text-xs text-[#2A1612]/75 leading-relaxed">
                    {promise.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#EAE0D2]/60 mt-4 flex items-center gap-1.5 text-[11px] text-[#166534] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Guaranteed by HK Jewellers
                </div>
              </div>
            );
          })}
        </div>

        {/* Store Location & Karatmeter Banner */}
        <div className="bg-[#4A0712] text-[#FFF7ED] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#D8B477]/40">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#D8B477] font-semibold">
              Visit Flagship Destination in Ahmedabad
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold">
              Experience the Purity First-Hand
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF7ED]/80 max-w-xl">
              Madhavbag Tenament, Nirnay Nagar Rd, Sector II, Nirnay Nagar, Ahmedabad, Gujarat 382481. Open Monday to Sunday with complimentary valet and certified gemologists.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://maps.google.com/maps/place/H+K+JEWELLERS/data=!4m2!3m1!1s0x0:0xd03766d520f79ae4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 bg-[#D8B477] hover:bg-[#c99f5e] text-[#2A1612] font-semibold text-xs rounded uppercase tracking-wider transition-colors text-center"
            >
              Get Store Directions
            </a>
            <a
              href="https://wa.me/917069916916?text=Hello%20HK%20Jewellers,%20I%20would%20like%20to%20book%20a%20private%20bridal%20or%20jewellery%20consultation%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-[#D8B477]/40 text-[#FFF7ED] font-semibold text-xs rounded uppercase tracking-wider transition-colors text-center"
            >
              Book Video Call / VIP Visit
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
