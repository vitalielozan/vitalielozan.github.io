import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { LuMenu, LuX } from 'react-icons/lu';
import logo from '@/assets/vitalieLozanLogo.webp';
import { navItems, PROFILE } from '@/constants/index.js';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 14);

      const marker = window.innerHeight * 0.32;
      let currentSection = 'hero';

      for (const item of navItems) {
        const sectionId = item.href.replace('#', '');
        const element = document.getElementById(sectionId);

        if (!element) {
          continue;
        }

        const { top, bottom } = element.getBoundingClientRect();

        if (top <= marker && bottom > marker) {
          currentSection = sectionId;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    setActiveSection(href.replace('#', ''));
  };

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled ? 'py-2' : 'py-5',
      )}
    >
      <nav
        className={clsx(
          'mx-auto flex w-[calc(100%-1rem)] max-w-6xl items-center justify-between rounded-xl px-4 py-2.5 sm:w-[calc(100%-2rem)] sm:px-6',
          isScrolled
            ? 'bg-surface/92 shadow-[0_18px_48px_-30px_rgba(5,14,22,0.95)] ring-1 ring-white/8 backdrop-blur-md'
            : 'bg-surface/70 ring-1 ring-white/6 backdrop-blur-sm',
        )}
      >
        <a href='#hero' aria-label='Home' className='flex items-center gap-3'>
          <img
            src={logo}
            alt='Vitalie Lozan logo'
            className='h-10 w-auto sm:h-11'
          />
          <div className='hidden sm:block'>
            <p className='text-sm font-semibold leading-none text-text'>
              {PROFILE.name}
            </p>
            <p className='text-xs text-muted'>Frontend Portfolio</p>
          </div>
        </a>

        <div className='hidden items-center gap-6 md:flex'>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');

            return (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.ariaLabel}
                className={clsx(
                  'text-sm font-medium tracking-wide transition-colors duration-200',
                  isActive ? 'text-brand' : 'text-muted hover:text-text',
                )}
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        <a
          href='#contact'
          className='secondary-button hidden rounded-lg! px-4! py-2! md:inline-flex'
        >
          Let&apos;s Talk
        </a>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className='inline-flex rounded-lg bg-surface-strong/80 p-2 text-text shadow-[inset_0_0_0_1px_hsl(var(--line)/0.45)] md:hidden'
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <LuX size={20} /> : <LuMenu size={20} />}
        </button>
      </nav>

      <div
        className={clsx(
          'mx-auto mt-2 w-[calc(100%-1rem)] max-w-6xl overflow-hidden transition-all duration-300 sm:w-[calc(100%-2rem)] md:hidden',
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div
          className='glass-panel rounded-xl p-4'
          role='dialog'
          aria-label='Mobile menu'
        >
          <div className='grid gap-2'>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');

              return (
                <a
                  href={item.href}
                  aria-label={item.ariaLabel}
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={clsx(
                    'rounded-lg px-4 py-3 text-sm font-medium tracking-wide transition-colors',
                    isActive
                      ? 'bg-brand/15 text-brand'
                      : 'text-muted hover:bg-surface-strong/85 hover:text-text',
                  )}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
