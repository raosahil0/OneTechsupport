import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'accent' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'btn inline-flex items-center justify-center gap-2 font-semibold transition-all duration-fast ease-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';
    
    const variantStyles = {
      primary: 'btn-primary bg-gradient-to-br from-brand-500 to-brand-600 text-white border-0 shadow-sm hover:shadow-brand-hover hover:-translate-y-0.5',
      secondary: 'btn-secondary bg-transparent text-brand-500 border-2 border-brand-500 hover:bg-brand-500/8 hover:border-brand-600 hover:text-brand-600',
      tertiary: 'btn-tertiary bg-transparent text-brand-500 border-0 hover:bg-brand-500/8 px-3',
      ghost: 'btn-ghost bg-transparent text-slate-600 border-0 hover:bg-slate-100 hover:text-slate-900',
      accent: 'btn-accent bg-gradient-to-br from-accent-cyan to-accent-cyan-hover text-white border-0 shadow-sm hover:shadow-accent hover:-translate-y-0.5',
      destructive: 'btn-destructive bg-error text-white border-0 shadow-sm hover:bg-error-hover hover:shadow-lg hover:-translate-y-0.5',
    };
    
    const sizeStyles = {
      sm: 'btn-sm h-9 px-3 text-sm',
      md: 'btn-md h-11 px-5 text-base',
      lg: 'btn-lg h-13 px-7 text-base',
      xl: 'btn-xl h-15 px-9 text-lg',
    };
    
    return (
      <button
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
