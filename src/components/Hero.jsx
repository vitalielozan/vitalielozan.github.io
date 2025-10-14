import React from 'react';
import profileImg from '@/assets/vitalieLozanProfile.webp';
import { HERO_CONTENT, SOCIAL_LINK } from '@/constants/index.js';
import { motion as Motion } from 'framer-motion';

const MotionImg = Motion.img;

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function Hero() {
  return (
    <section id='hero' className='py-32 relative px-4'>
      <div className='flex flex-wrap lg:flex-row-reverse container max-w-7xl mx-auto text-center z-10 relative'>
        <div className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:p-8'>
            <MotionImg
              src={profileImg}
              alt='Profile Vitalie Lozan'
              className='border-border rounded-3xl'
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
          <Motion.div
            className='flex justify-center gap-6 md:gap-10 m-4'
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {SOCIAL_LINK.map((social, index) => (
              <Motion.a
                key={index}
                href={social.href}
                title={social.title}
                target={social.href.startsWith('https') ? '_blank' : undefined}
                rel={
                  social.href.startsWith('https')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className={`bg-gradient-to-r p-3 ${social.color} group rounded-2xl text-white shadow-lg transition-all duration-300 hover:shadow-xl`}
                whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7 + index * 0.1 }}
              >
                <social.icon className='text-2xl group-hover:animate-bounce' />
              </Motion.a>
            ))}
          </Motion.div>
        </div>
        <div className='w-full lg:w-1/2'>
          <Motion.div
            initial='hidden'
            animate='visible'
            variants={containerVariants}
            className='flex flex-col items-center lg:items-start mt-10'
          >
            <Motion.h2
              variants={childVariants}
              className='pb-2 text-4xl tracking-tighter lg:text-8xl'
            >
              Vitalie Lozan
            </Motion.h2>
            <Motion.span
              variants={childVariants}
              className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'
            >
              Aspiring Frontend Web Developer
            </Motion.span>
            <Motion.p
              variants={childVariants}
              className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'
            >
              {HERO_CONTENT}
            </Motion.p>
            <Motion.div
              variants={childVariants}
              className='flex items-center justify-around gap-6'
            >
              <a
                href='./vitalie_lozan.pdf'
                target='_blank'
                rel='noopener noreferrer'
                download
                className='bg-gradient-to-r from-slate-800 to-slate-900 rounded-full p-4 text-sm text-stone-300 mb-10'
              >
                Download my CV
              </a>
              <a
                href='https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/vitalie-lozan/89e7057b-03f1-4be3-897b-e7ac5a4648a3?view=html'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gradient-to-r from-slate-800 to-slate-900 rounded-full p-4 text-sm text-stone-300 mb-10'
              >
                Europass Profile
              </a>
            </Motion.div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
