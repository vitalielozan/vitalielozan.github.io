import React from 'react';
import { CONTACT } from '@/constants/index.js';
import { motion as Motion } from 'framer-motion';

function Contact() {
  return (
    <section id='contact' className='border-t border-border pb-16'>
      <Motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl'
      >
        Get in Touch
      </Motion.h2>
      <div className='text-center tracking-tighter'>
        <Motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='my-4'
        >
          {CONTACT.address}
        </Motion.p>
        <Motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: 100 }}
          transition={{ duration: 0.5 }}
          href='tel:+4917645953071'
          className='block my-4'
        >
          {CONTACT.phoneNo}
        </Motion.a>
        <a href='mailto:vitalielozan17@outlook.com' className='border-b'>
          {CONTACT.email}
        </a>
      </div>
    </section>
  );
}

export default Contact;
