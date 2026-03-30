import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Globe, Heart, Share2, User, Mail } from 'lucide-react';

export interface FooterProps {
  columns?: {
    title: string;
    links: { label: string; href: string }[];
  }[];
  socialLinks?: { platform: string; url: string; icon?: React.ReactNode }[];
  newsletter?: boolean;
  copyright?: string;
}

export function Footer({
  columns = [],
  socialLinks = [],
  newsletter = true,
  copyright,
}: FooterProps) {
  const defaultSocialLinks = [
    { platform: 'LinkedIn', url: '#', icon: <User className="h-5 w-5" /> },
    { platform: 'Twitter', url: '#', icon: <Share2 className="h-5 w-5" /> },
    { platform: 'Facebook', url: '#', icon: <Globe className="h-5 w-5" /> },
    { platform: 'Instagram', url: '#', icon: <Heart className="h-5 w-5" /> },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-slate-900 text-slate-300">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Company Info Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-h4 font-bold text-white">
                S&apos;K One
              </span>
            </Link>
            <p className="text-body-sm text-slate-400 mb-6 max-w-sm">
              Empowering businesses with innovative IT solutions and expert staffing services.
              Your success is our mission.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {(socialLinks.length > 0 ? socialLinks : defaultSocialLinks).map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-sm transition-all duration-fast hover:bg-brand-500 hover:-translate-y-0.5"
                  aria-label={link.platform}
                >
                  {link.icon || <Globe className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-label text-white mb-6">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-slate-400 transition-colors duration-fast hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          {newsletter && (
            <div>
              <h4 className="text-label text-white mb-6">Stay Updated</h4>
              <p className="text-body-sm text-slate-400 mb-4">
                Subscribe to our newsletter for the latest insights.
              </p>
              <form className="flex flex-col gap-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-11 pl-10 pr-4 bg-white/10 border border-slate-700 rounded-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-fast"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-md w-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption text-slate-500">
            {copyright || `© ${currentYear} S&apos;K One Tech Support. All rights reserved.`}
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-caption text-slate-500 transition-colors duration-fast hover:text-slate-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-caption text-slate-500 transition-colors duration-fast hover:text-slate-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
