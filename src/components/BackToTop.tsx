import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#4A0712] hover:bg-[#35050D] text-[#D8B477] border border-[#B88A3B]/50 flex items-center justify-center shadow-[0_4px_16px_rgba(74,7,18,0.4)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D8B477] ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
    </button>
  );
};
