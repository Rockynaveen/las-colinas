import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-11 w-full rounded-lg border border-gold-medium/25 bg-navy-medium/70 px-3.5 py-2 text-sm text-foreground shadow-sm transition-all duration-300 placeholder:text-gray-500 focus-visible:outline-none focus-visible:border-gold-bright focus-visible:ring-1 focus-visible:ring-gold-bright disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
