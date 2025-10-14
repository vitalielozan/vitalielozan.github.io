import React from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const Footer = () => {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className='m-6 border-t border-border mt-6 pt-4 flex flex-wrap justify-between items-center'>
      <p className='text-sm text-stone-300'>
        &copy; {new Date().getFullYear()} Vitalie Lozan. All rights reserved.
      </p>
      <button
        onClick={() => handleScroll('hero')}
        title='Scroll to top'
        className='p-2 rounded-full text-stone-300 hover:text-primary transition-colors duration-300'
        aria-label='Scroll to top'
      >
        <FaArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
