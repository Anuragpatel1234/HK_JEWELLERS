import React from 'react';

interface DivineIdolsBannerProps {
  onExploreDivine: () => void;
}

export const DivineIdolsBanner: React.FC<DivineIdolsBannerProps> = ({ onExploreDivine }) => {
  return (
    <section className="w-full relative overflow-hidden my-4 sm:my-6 md:my-8 bg-[#3A0510] border-y border-[#B88A3B]/30 shadow-[0_6px_20px_rgba(0,0,0,0.3)]">
      
      {/* 1. Mobile Layout (< md): Dedicated stacked luxury card so Lord Ganesha is 100% visible and unblocked */}
      <div className="md:hidden flex flex-col items-center justify-center py-6 px-4 text-center bg-gradient-to-b from-[#4A0A17] via-[#3A0510] to-[#25030A]">
        {/* Sacred Ganesha Framed Portrait */}
        <div className="relative w-full max-w-[280px] xs:max-w-[320px] aspect-[4/3] rounded-lg overflow-hidden border border-[#D8B477]/40 shadow-[0_4px_16px_rgba(0,0,0,0.6)] mb-4 bg-[#200307]">
          <picture className="w-full h-full">
            <source srcSet="/assets/divine/divine_mobile_ganesha.webp" type="image/webp" />
            <img
              src="/assets/divine/divine_mobile_ganesha.png"
              alt="Lord Ganesha Divine Idol"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-[#25030A]/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Clean Typography Container - zero overlap with idol */}
        <div className="space-y-2 max-w-sm">
          <span className="inline-block text-[9.5px] xs:text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-serif font-medium">
            The Sacred Sanctum
          </span>
          <h2 className="font-serif text-[22px] xs:text-[25px] text-[#E6C687] font-normal tracking-[0.14em] uppercase leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Divine Idols
          </h2>
          <p className="font-serif text-[12.5px] xs:text-[13.5px] text-[#FDF5E6]/95 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] px-2">
            Sacred idols, crafted to fill your space with love, devotion &amp; timeless blessings.
          </p>
          <div className="pt-2">
            <button
              onClick={onExploreDivine}
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#D8B477] to-[#B88A3B] hover:from-[#F0D5A8] hover:to-[#D8B477] text-[#2A1612] font-sans text-[10px] xs:text-[11px] font-bold tracking-[0.18em] py-2.5 px-6 rounded-[2px] shadow-[0_4px_14px_rgba(0,0,0,0.5)] transition-all duration-300 active:scale-[0.98] uppercase cursor-pointer"
            >
              Explore Collection
            </button>
          </div>
        </div>
      </div>

      {/* 2. Desktop Layout (md:): Wide panoramic banner with Ganesha on left and typography on right */}
      <div className="hidden md:flex relative w-full aspect-[2163/391] min-h-[220px] max-h-[340px] items-center">
        {/* Background Banner Image - panoramic view */}
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/assets/divine/divine_banner_bg.webp" type="image/webp" />
          <img
            src="/assets/divine/divine_banner_bg.png"
            alt="Lord Ganesha Divine Idols"
            className="w-full h-full object-fill object-center"
            loading="lazy"
          />
        </picture>

        {/* Content Container positioned cleanly on the right half */}
        <div className="w-full max-w-7xl mx-auto px-8 md:px-12 lg:px-16 relative z-10 flex items-center justify-between">
          {/* Left spacer so Ganesha remains completely unobstructed */}
          <div className="w-1/2 pointer-events-none" aria-hidden="true" />

          {/* Right: Typography & CTA */}
          <div className="w-1/2 text-left pl-6 lg:pl-10 space-y-2">
            <h2 className="font-serif md:text-[30px] lg:text-[34px] text-[#E6C687] font-normal tracking-[0.14em] uppercase leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              Divine Idols
            </h2>

            <p className="font-serif md:text-[14px] lg:text-[15px] text-[#FDF5E6]/95 max-w-md leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
              Sacred idols, crafted to fill your space with love, devotion &amp; timeless blessings.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreDivine}
                className="inline-flex items-center justify-center bg-transparent hover:bg-[#E6C687] text-[#FDF5E6] hover:text-[#3A0510] font-sans text-[10.5px] font-semibold tracking-[0.18em] py-2 px-7 rounded-[2px] border border-[#E6C687]/80 hover:border-[#E6C687] shadow-[0_2px_10px_rgba(0,0,0,0.5)] transition-all duration-300 active:scale-[0.98] uppercase cursor-pointer"
              >
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

