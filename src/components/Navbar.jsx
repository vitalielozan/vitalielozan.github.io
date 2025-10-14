import React, { useState, useEffect } from 'react';
import logo from '@/assets/vitalieLozanLogo.webp';
import { LuMenu, LuX } from 'react-icons/lu';
import { navItems } from '@/constants/index.js';
import clsx from 'clsx';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
    const sections = navItems.map((item) => item.href.replace('#', ''));
    let currentSection = 'hero';

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section;
          break;
        }
      }
    }
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleMobileNavClick = (href) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const sectionId = href.replace('#', '');
      setActiveSection(sectionId);
    }, 300);
  };

  return (
    <nav
      className={clsx(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled
          ? 'py-3 bg-black/85 backdrop-blur-md shadow-md border-border/30'
          : 'py-6 bg-transparent border-transparent'
      )}
    >
      <div className='container flex items-center justify-around relative'>
        <a href={navItems[0].href} aria-label='Home'>
          <img
            src={logo}
            alt='Logo'
            className='h-10 md:h-12 lg:h-14 w-auto object-contain'
          />
        </a>

        {/* dsktop nav */}
        <div className='hidden md:flex items-center space-x-8'>
          {navItems.map((item, key) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                href={item.href}
                key={key}
                className={clsx(
                  'text-md font-medium transition-all duration-300',
                  isActive
                    ? 'text-primary font-semibold'
                    : 'hover:text-primary',
                  isScrolled ? 'drop-shadow-sm' : '',
                  !isActive &&
                    (isScrolled ? 'text-foreground' : 'text-foreground/80')
                )}
                onClick={() => handleMobileNavClick(item.href)}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className='md:hidden py-2 px-6 text-foreground relative z-50'
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
        </button>

        {/* Mobile menu overlay */}
        <div
          className={clsx(
            'fixed inset-0 z-40 min-h-screen w-full overflow-y-auto bg-black/80 backdrop-blur-md flex flex-col items-center justify-center',
            'transition-all duration-300 md:hidden',
            isMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          )}
        >
          <div className='flex flex-col space-y-8 text-xl justify-center items-center'>
            {navItems.map((item, key) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  href={item.href}
                  key={key}
                  className={clsx(
                    'transition-colors duration-300 font-medium',
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-foreground/80 hover:text-primary'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
