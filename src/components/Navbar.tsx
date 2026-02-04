'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const { t } = useLanguage();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Brand/Logo */}
          <div className="text-xl font-bold text-primary">
            {t('nav.brand')}
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* About Us */}
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              {t('nav.about')}
            </a>

            {/* Important Information - Dropdown */}
            <div className="relative group">
              <button 
                className="text-foreground hover:text-accent transition-colors flex items-center gap-1"
                onMouseEnter={() => setOpenDropdown('info')}
              >
                {t('nav.importantInfo')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className="absolute left-0 mt-2 w-64 bg-background border border-primary/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a href="#ayahuasca" className="block px-4 py-2 hover:bg-primary/10 transition-colors">
                  {t('nav.info.ayahuasca')}
                </a>
                <a href="#san-pedro" className="block px-4 py-2 hover:bg-primary/10 transition-colors">
                  {t('nav.info.sanPedro')}
                </a>
                <a href="#sonido" className="block px-4 py-2 hover:bg-primary/10 transition-colors">
                  {t('nav.info.sonido')}
                </a>
                <a href="#hemi-sync" className="block px-4 py-2 hover:bg-primary/10 transition-colors">
                  {t('nav.info.hemiSync')}
                </a>
              </div>
            </div>

            {/* Maestros - Dropdown */}
            <div className="relative group">
              <button 
                className="text-foreground hover:text-accent transition-colors flex items-center gap-1"
                onMouseEnter={() => setOpenDropdown('maestros')}
              >
                {t('nav.maestros')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className="absolute left-0 mt-2 w-56 bg-background border border-primary/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a href="#denis" className="block px-4 py-2 hover:bg-primary/10 transition-colors">
                  {t('nav.maestros.denis')}
                </a>
                <a href="#dan" className="block px-4 py-2 hover:bg-primary/10 transition-colors">
                  {t('nav.maestros.dan')}
                </a>
              </div>
            </div>

            {/* Blog - Dropdown */}
            <div className="relative group">
              <button 
                className="text-foreground hover:text-accent transition-colors flex items-center gap-1"
                onMouseEnter={() => setOpenDropdown('blog')}
              >
                {t('nav.blog')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className="absolute left-0 mt-2 w-72 bg-background border border-primary/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a href="#blog-1" className="block px-4 py-2 hover:bg-primary/10 transition-colors">
                  {t('nav.blog.post1')}
                </a>
                <a href="#blog-2" className="block px-4 py-2 hover:bg-primary/10 transition-colors">
                  {t('nav.blog.post2')}
                </a>
                <a href="#blog-3" className="block px-4 py-2 hover:bg-primary/10 transition-colors">
                  {t('nav.blog.post3')}
                </a>
                <a href="#blog-4" className="block px-4 py-2 hover:bg-primary/10 transition-colors">
                  {t('nav.blog.post4')}
                </a>
              </div>
            </div>

            {/* Contact */}
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              {t('nav.contact')}
            </a>

            {/* Gallery - Dropdown */}
            <div className="relative group">
              <button 
                className="text-foreground hover:text-accent transition-colors flex items-center gap-1"
                onMouseEnter={() => setOpenDropdown('gallery')}
              >
                {t('nav.gallery')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className="absolute left-0 mt-2 w-56 bg-background border border-primary/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a href="#casa" className="block px-4 py-2 hover:bg-primary/10 transition-colors">
                  {t('nav.gallery.casa')}
                </a>
                <a href="#maloca" className="block px-4 py-2 hover:bg-primary/10 transition-colors">
                  {t('nav.gallery.maloca')}
                </a>
              </div>
            </div>
          </div>

            <div className="hidden lg:block">
              <LanguageToggle />
            </div>

          {/* Mobile Menu Buttons */}
          <div className="lg:hidden flex items-center gap-3">
            <LanguageToggle />
            <button 
              className="text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 space-y-2 pb-4">
            <a href="#about" className="block py-2 text-foreground hover:text-accent">
              {t('nav.about')}
            </a>
            
            <div>
              <button 
                onClick={() => toggleDropdown('info')}
                className="w-full text-left py-2 text-foreground hover:text-accent flex justify-between items-center"
              >
                {t('nav.importantInfo')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'info' && (
                <div className="pl-4 space-y-1">
                  <a href="#ayahuasca" className="block py-1 text-sm text-foreground/70">{t('nav.info.ayahuasca')}</a>
                  <a href="#san-pedro" className="block py-1 text-sm text-foreground/70">{t('nav.info.sanPedro')}</a>
                  <a href="#sonido" className="block py-1 text-sm text-foreground/70">{t('nav.info.sonido')}</a>
                  <a href="#hemi-sync" className="block py-1 text-sm text-foreground/70">{t('nav.info.hemiSync')}</a>
                </div>
              )}
            </div>

            <div>
              <button 
                onClick={() => toggleDropdown('maestros')}
                className="w-full text-left py-2 text-foreground hover:text-accent flex justify-between items-center"
              >
                {t('nav.maestros')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'maestros' && (
                <div className="pl-4 space-y-1">
                  <a href="#denis" className="block py-1 text-sm text-foreground/70">{t('nav.maestros.denis')}</a>
                  <a href="#dan" className="block py-1 text-sm text-foreground/70">{t('nav.maestros.dan')}</a>
                </div>
              )}
            </div>

            <div>
              <button 
                onClick={() => toggleDropdown('blog')}
                className="w-full text-left py-2 text-foreground hover:text-accent flex justify-between items-center"
              >
                {t('nav.blog')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'blog' && (
                <div className="pl-4 space-y-1">
                  <a href="#blog-1" className="block py-1 text-sm text-foreground/70">{t('nav.blog.post1')}</a>
                  <a href="#blog-2" className="block py-1 text-sm text-foreground/70">{t('nav.blog.post2')}</a>
                  <a href="#blog-3" className="block py-1 text-sm text-foreground/70">{t('nav.blog.post3')}</a>
                  <a href="#blog-4" className="block py-1 text-sm text-foreground/70">{t('nav.blog.post4')}</a>
                </div>
              )}
            </div>

            <a href="#contact" className="block py-2 text-foreground hover:text-accent">
              {t('nav.contact')}
            </a>

            <div>
              <button 
                onClick={() => toggleDropdown('gallery')}
                className="w-full text-left py-2 text-foreground hover:text-accent flex justify-between items-center"
              >
                {t('nav.gallery')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'gallery' && (
                <div className="pl-4 space-y-1">
                  <a href="#casa" className="block py-1 text-sm text-foreground/70">{t('nav.gallery.casa')}</a>
                  <a href="#maloca" className="block py-1 text-sm text-foreground/70">{t('nav.gallery.maloca')}</a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
