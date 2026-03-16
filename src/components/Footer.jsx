import { FaArrowUp } from 'react-icons/fa6';
import { navItems } from '@/constants/index.js';

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='mx-auto mb-8 w-[calc(100%-1rem)] max-w-6xl sm:w-[calc(100%-2rem)]'>
      <div className='glass-panel flex flex-col gap-4 rounded-xl p-5 sm:flex-row sm:items-center sm:justify-between'>
        <div>
          <p className='text-sm font-semibold text-text'>
            © {new Date().getFullYear()} Vitalie Lozan
          </p>
          <p className='mt-1 text-sm text-muted'>
            Built with React, Vite, and a focus on clean UI engineering.
          </p>
        </div>

        <div className='flex flex-wrap items-center gap-3'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='text-sm font-medium text-muted transition hover:text-text'
              aria-label={item.ariaLabel}
            >
              {item.name}
            </a>
          ))}

          <button
            onClick={handleScrollToTop}
            title='Scroll to top'
            className='inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-strong/85 text-brand transition hover:-translate-y-0.5 hover:bg-surface'
            aria-label='Scroll to top'
          >
            <FaArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
