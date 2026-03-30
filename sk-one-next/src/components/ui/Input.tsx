import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputSize?: 'sm' | 'md' | 'lg';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      inputSize = 'md',
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    
    const sizeStyles = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-4 text-base',
      lg: 'h-13 px-5 text-base',
    };
    
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block text-label text-slate-700 dark:text-slate-300 mb-2',
              error && 'text-error'
            )}
          >
            {label}
            {props.required && <span className="text-error ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              {leftIcon}
            </div>
          )}
          
          <input
            type={type}
            id={inputId}
            className={cn(
              'input w-full bg-background text-foreground border rounded-sm transition-all duration-fast ease-default',
              'placeholder:text-slate-400',
              'focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20',
              'disabled:bg-slate-100 disabled:text-slate-500 disabled:cursor-not-allowed',
              error && 'border-error bg-red-50 focus:border-error focus:ring-error/20',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              sizeStyles[inputSize],
              className
            )}
            ref={ref}
            disabled={disabled}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p className="text-error text-caption mt-1.5" role="alert">
            {error}
          </p>
        )}
        
        {!error && helperText && (
          <p className="text-slate-500 text-caption mt-1.5">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
