import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  className = '', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-12 sm:h-16',
    lg: 'h-20 sm:h-24',
    xl: 'h-28 sm:h-36',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src="/images/las-colinas-logo-white.png"
        alt="Las Colinas Hospitality Management"
        className={`${sizeClasses[size]} w-auto object-contain select-none ${
          variant === 'light' ? 'invert brightness-0 filter' : ''
        }`}
      />
    </div>
  );
};

