import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[100px] w-full rounded-lg border border-gold-medium/25 bg-navy-medium/70 px-3.5 py-2.5 text-sm text-foreground shadow-sm transition-all duration-300 placeholder:text-gray-500 focus-visible:outline-none focus-visible:border-gold-bright focus-visible:ring-1 focus-visible:ring-gold-bright disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
