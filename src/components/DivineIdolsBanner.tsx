import React from 'react';

interface DivineIdolsBannerProps {
  onExploreDivine: () => void;
}

export const DivineIdolsBanner: React.FC<DivineIdolsBannerProps> = ({ onExploreDivine }) => {
  return (
    <section className="w-full relative overflow-hidden my-4 sm:my-6 md:my-8 bg-[#3A0510]">
      {/* Aspect-ratio container matching the banner proportions (2163 x 391) */}
      <div className="relative w-full aspect-[2.2/1] sm:aspect-[3.2/1] md:aspect-[2163/391] min-h-[170px] sm:min-h-[200px] md:min-h-[220px] max-h-[340px] flex items-center">
        
        {/* Background Banner Image - zoomed out, full view */}
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/assets/divine/divine_banner_bg.webp" type="image/webp" />
          <img
            src="/assets/divine/divine_banner_bg.png"
            alt="Lord Ganesha Divine Idols"
            className="w-full h-full object-cover md:object-fill object-left md:object-center"
            loading="lazy"
          />
        </picture>

        {/* Readability gradient for smaller screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-[#3A0510]/85 md:to-transparent pointer-events-none" />

        {/* Content Container positioned cleanly on the right half */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 relative z-10 flex items-center justify-between">
          
          {/* Left spacer so Ganesha remains completely unobstructed */}
          <div className="hidden md:block w-5/12 lg:w-1/2 pointer-events-none" aria-hidden="true" />

          {/* Right: Typography & CTA */}
          <div className="w-full md:w-7/12 lg:w-1/2 text-center md:text-left pl-0 md:pl-6 lg:pl-10 space-y-1.5 sm:space-y-2 md:space-y-2.5">
            <h2 className="font-serif text-[20px] sm:text-[26px] md:text-[30px] lg:text-[34px] text-[#E6C687] font-normal tracking-[0.14em] uppercase leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Divine Idols
            </h2>

            <p className="font-serif text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-[#FDF5E6]/90 max-w-md leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              Sacred idols, crafted to fill your space with love, devotion &amp; timeless blessings.
            </p>

            <div className="pt-1 sm:pt-1.5 md:pt-2">
              <button
                onClick={onExploreDivine}
                className="inline-flex items-center justify-center bg-transparent hover:bg-[#E6C687] text-[#FDF5E6] hover:text-[#3A0510] font-sans text-[9px] sm:text-[9.5px] md:text-[10.5px] font-semibold tracking-[0.18em] py-1.5 sm:py-2 md:py-2 px-4 sm:px-6 md:px-7 rounded-[2px] border border-[#E6C687]/80 hover:border-[#E6C687] shadow-[0_2px_10px_rgba(0,0,0,0.4)] transition-all duration-300 active:scale-[0.98] uppercase cursor-pointer"
              >
                Explore Divine Collection
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
