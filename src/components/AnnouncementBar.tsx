import React, { useState, useEffect } from 'react';
import { OrnamentalFlourish } from './OrnamentalDivider';
import { TrendingUp, RefreshCw, Sparkles, ShieldCheck } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenGoldRate?: () => void;
  onOpenExchange?: () => void;
  onOpenSavings?: () => void;
}

const MESSAGES = [
  { text: 'Live 22K Gold: ₹6,985/g · 24K: ₹7,620/g (Zero Hidden Markups)', action: 'gold-rate', icon: TrendingUp },
  { text: '100% Exchange Value for Old Gold from ANY Jeweller · Karatmeter Verified', action: 'exchange', icon: RefreshCw },
  { text: 'Swarn Samriddhi Savings: Pay 10 Months & Get 75% Brand Bonus', action: 'savings', icon: Sparkles },
  { text: '100% BIS 916 Hallmarked & HUID Certified · Free Insured Delivery', action: 'promise', icon: ShieldCheck },
];

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  onOpenGoldRate,
  onOpenExchange,
  onOpenSavings,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const activeMsg = MESSAGES[currentIndex];
  const Icon = activeMsg.icon;

  const handleActionClick = () => {
    if (activeMsg.action === 'gold-rate' && onOpenGoldRate) onOpenGoldRate();
    else if (activeMsg.action === 'exchange' && onOpenExchange) onOpenExchange();
    else if (activeMsg.action === 'savings' && onOpenSavings) onOpenSavings();
    else if (onOpenGoldRate) onOpenGoldRate();
  };

  return (
    <aside 
      aria-label="Announcement"
      className="bg-[#4A0712] text-[#FFF7ED] min-h-[36px] sm:min-h-[38px] flex items-center justify-between px-3 sm:px-6 relative z-30 transition-all duration-300 border-b border-[#D8B477]/20"
    >
      {/* Left: Quick Desktop Shortcut for Live Gold Rate */}
      <div className="hidden lg:flex items-center gap-2">
        {onOpenGoldRate && (
          <button
            onClick={onOpenGoldRate}
            className="inline-flex items-center gap-1.5 text-[11px] font-sans font-semibold tracking-wider text-[#D8B477] hover:text-white transition-colors cursor-pointer"
          >
            <TrendingUp className="w-3.5 h-3.5 text-[#D8B477]" />
            <span>Live 22K Gold: ₹6,985/g</span>
            <span className="text-[9px] bg-[#1B5E20] px-1.5 py-0.2 rounded text-white font-bold">LIVE</span>
          </button>
        )}
      </div>

      {/* Center: Dynamic Animated Message with Call-to-Action */}
      <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3 text-center py-1">
        <OrnamentalFlourish flip className="w-4 sm:w-6 h-2 sm:h-2 opacity-80 hidden xs:inline-block" color="#D8B477" />
        
        <button
          onClick={handleActionClick}
          className="group inline-flex items-center gap-2 text-[10px] sm:text-[11.5px] font-semibold tracking-[0.12em] text-[#FFF7ED] hover:text-[#D8B477] transition-all cursor-pointer truncate max-w-[85vw] sm:max-w-none"
        >
          <Icon className="w-3.5 h-3.5 text-[#D8B477] shrink-0" />
          <span className="truncate">{activeMsg.text}</span>
          <span className="text-[#D8B477] text-[10px] underline ml-1 hidden sm:inline group-hover:translate-x-0.5 transition-transform">
            View Details &rarr;
          </span>
        </button>

        <OrnamentalFlourish className="w-4 sm:w-6 h-2 sm:h-2 opacity-80 hidden xs:inline-block" color="#D8B477" />
      </div>

      {/* Right: Quick Desktop Shortcuts for Exchange & Savings */}
      <div className="hidden lg:flex items-center gap-3">
        {onOpenExchange && (
          <button
            onClick={onOpenExchange}
            className="text-[11px] font-sans font-medium text-[#FFF7ED]/90 hover:text-[#D8B477] transition-colors cursor-pointer"
          >
            Old Gold Exchange
          </button>
        )}
        <span className="text-[#D8B477]/40 text-xs">|</span>
        {onOpenSavings && (
          <button
            onClick={onOpenSavings}
            className="text-[11px] font-sans font-medium text-[#FFF7ED]/90 hover:text-[#D8B477] transition-colors cursor-pointer"
          >
            Savings Scheme (75% Bonus)
          </button>
        )}
      </div>
    </aside>
  );
};
