import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'interactive' | 'featured' | 'dark';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      padding = 'md',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'card bg-background border rounded-md transition-all duration-normal ease-default';
    
    const variantStyles = {
      default: 'border-slate-200',
      elevated: 'border-slate-200 shadow-md',
      interactive: 'border-slate-200 cursor-pointer hover:border-brand-500 hover:shadow-lg hover:-translate-y-1',
      featured: 'border-2 border-brand-500 bg-gradient-to-b from-slate-50 to-white relative',
      dark: 'border-slate-700 bg-gradient-to-b from-slate-800 to-slate-900 text-slate-100',
    };
    
    const paddingStyles = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };
    
    return (
      <div
        className={cn(baseStyles, variantStyles[variant], paddingStyles[padding], className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn('flex flex-col gap-2 mb-4', className)}
      ref={ref}
      {...props}
    />
  )
);

CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      className={cn('text-h5 text-slate-900 dark:text-slate-100', className)}
      ref={ref}
      {...props}
    />
  )
);

CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      className={cn('text-body-sm text-slate-500 dark:text-slate-400', className)}
      ref={ref}
      {...props}
    />
  )
);

CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn('', className)}
      ref={ref}
      {...props}
    />
  )
);

CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn('flex items-center gap-3 mt-6 pt-6 border-t border-slate-200', className)}
      ref={ref}
      {...props}
    />
  )
);

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
