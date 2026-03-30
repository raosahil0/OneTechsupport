import React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      resize = 'vertical',
      disabled,
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');
    
    const resizeStyles = {
      none: 'resize-none',
      vertical: 'resize-y',
      horizontal: 'resize-x',
      both: 'resize',
    };
    
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              'block text-label text-slate-700 dark:text-slate-300 mb-2',
              error && 'text-error'
            )}
          >
            {label}
            {props.required && <span className="text-error ml-1">*</span>}
          </label>
        )}
        
        <textarea
          id={textareaId}
          rows={rows}
          className={cn(
            'textarea w-full bg-background text-foreground border border-slate-300 rounded-sm p-4',
            'font-body text-base leading-relaxed',
            'placeholder:text-slate-400',
            'focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20',
            'disabled:bg-slate-100 disabled:text-slate-500 disabled:cursor-not-allowed',
            error && 'border-error bg-red-50 focus:border-error focus:ring-error/20',
            resizeStyles[resize],
            'transition-all duration-fast ease-default',
            className
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        
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

Textarea.displayName = 'Textarea';

export { Textarea };
