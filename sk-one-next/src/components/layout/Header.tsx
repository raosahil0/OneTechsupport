'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export interface HeaderProps {
  logo?: React.ReactNode;
  navItems?: { label: string; href: string }[];
  ctaButton?: { label: string; href: string };
  variant?: 'light' | 'dark' | 'transparent';
  sticky?: boolean;
}

export function Header({
  logo,
  navItems = [],
  ctaButton,
  variant = 'light',
  sticky = true,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const variantStyles = {
    light: 'bg-white/90 border-slate-200 text-slate-900',
    dark: 'bg-slate-900/90 border-slate-700 text-white',
    transparent: 'bg-transparent border-transparent text-white',
  };

  const linkStyles = variant === 'dark' || variant === 'transparent'
    ? 'text-slate-300 hover:text-white'
    : 'text-slate-600 hover:text-slate-900';

  return (
    <header
      className={cn(
        'header sticky top-0 z-20 h-18 border-b backdrop-blur-md transition-all duration-normal',
        variantStyles[variant],
        sticky && isScrolled && 'shadow-md',
      )}
    >
      <div className="container h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {logo || (
              <span className="text-h5 font-bold text-brand-500">
                S&apos;K One
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-body font-medium transition-colors duration-fast relative group',
                  linkStyles
                )}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-500 transition-all duration-normal group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {ctaButton && (
              <Link
                href={ctaButton.href}
                className="btn btn-primary btn-md"
              >
                {ctaButton.label}
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-inherit"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-18 left-0 right-0 bg-background border-b border-slate-200 shadow-lg animate-slide-up">
          <nav className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-body-lg font-medium py-3 border-b border-slate-100',
                  linkStyles
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {ctaButton && (
              <Link
                href={ctaButton.href}
                className="btn btn-primary btn-lg mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {ctaButton.label}
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
