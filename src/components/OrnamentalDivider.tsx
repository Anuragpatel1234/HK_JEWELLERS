import React from 'react';

export const OrnamentalFlourish: React.FC<{ flip?: boolean; className?: string; color?: string }> = ({
  flip = false,
  className = "w-10 h-3",
  color = "#B88A3B"
}) => {
  return (
    <svg
      viewBox="0 0 60 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${flip ? 'transform -scale-x-100' : ''} ${className} inline-block select-none`}
    >
      {/* Central diamond */}
      <polygon points="56,8 52,5 48,8 52,11" fill={color} />
      {/* Curved scroll tendrils */}
      <path
        d="M2 8C14 8 20 2 28 2C36 2 40 8 50 8"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M6 8C16 8 22 14 30 14C38 14 42 8 48 8"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Small decorative beads */}
      <circle cx="28" cy="2" r="1.5" fill={color} />
      <circle cx="30" cy="14" r="1.5" fill={color} />
      <circle cx="12" cy="8" r="1.2" fill={color} />
    </svg>
  );
};

export const SectionHeading: React.FC<{
  title: string;
  subtitle?: string;
  className?: string;
}> = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`text-center my-6 md:my-8 px-4 ${className}`}>
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        <OrnamentalFlourish flip className="w-8 sm:w-12 h-3 sm:h-4" color="#B88A3B" />
        <h2 className="font-serif text-[22px] sm:text-[28px] md:text-[34px] tracking-wide text-[#2A1612] font-medium italic">
          {title}
        </h2>
        <OrnamentalFlourish className="w-8 sm:w-12 h-3 sm:h-4" color="#B88A3B" />
      </div>
      {subtitle && (
        <p className="font-sans text-xs sm:text-sm text-[#4A0712]/80 mt-1 max-w-lg mx-auto tracking-wide">
          {subtitle}
        </p>
      )}
    </div>
  );
};
