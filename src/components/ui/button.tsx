import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground font-semibold tracking-wider uppercase shadow-lg shadow-gold-medium/20 hover:bg-gold-bright hover:shadow-xl hover:shadow-gold-medium/30 hover:scale-[1.02]',
        gold:
          'bg-gradient-to-r from-gold-medium via-gold-bright to-gold-medium text-navy-dark font-bold tracking-widest uppercase shadow-xl shadow-gold-medium/25 hover:shadow-2xl hover:shadow-gold-bright/35 hover:scale-[1.03] active:scale-[0.98]',
        'gold-outline':
          'border border-gold-medium/50 bg-transparent text-gold-bright hover:bg-gold-medium/10 hover:border-gold-bright font-semibold tracking-wider uppercase hover:shadow-lg hover:shadow-gold-medium/15',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-border bg-transparent text-foreground shadow-sm hover:bg-secondary hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost:
          'text-foreground hover:bg-gold-medium/10 hover:text-gold-bright',
        link:
          'text-gold-bright underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        default: 'h-10 px-4 py-2 text-xs sm:text-sm',
        sm: 'h-8 rounded-md px-3 text-[11px]',
        lg: 'h-12 rounded-xl px-6 sm:px-8 text-xs sm:text-sm font-bold',
        icon: 'h-9 w-9 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
