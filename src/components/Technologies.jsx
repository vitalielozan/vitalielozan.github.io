import React from 'react';
import { DiRedis } from 'react-icons/di';
import { FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';
import { motion as Motion } from 'framer-motion';
import { FcLinux } from 'react-icons/fc';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

function Technologies() {
  return (
    <section id='technologies' className='py-22 px-4 relative'>
      <div className='container mx-auto max-w-6xl'>
        <Motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className='my-20 text-center text-4xl'
        >
          Technologies
        </Motion.h2>
        <Motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className='flex flex-wrap items-center justify-center gap-4'
        >
          <Motion.div
            initial='initial'
            animate='animate'
            variants={iconVariants(2.5)}
            className='p-4'
          >
            <TbBrandJavascript className='text-7xl text-amber-400' />
          </Motion.div>
          <Motion.div
            initial='initial'
            animate='animate'
            variants={iconVariants(3)}
            className='p-4'
          >
            <RiReactjsLine className='text-7xl text-cyan-400' />
          </Motion.div>
          <Motion.div
            initial='initial'
            animate='animate'
            variants={iconVariants(5)}
            className='p-4'
          >
            <SiMongodb className='text-7xl text-emerald-500' />
          </Motion.div>
          <Motion.div
            initial='initial'
            animate='animate'
            variants={iconVariants(2)}
            className='p-4'
          >
            <FaNodeJs className='text-7xl text-green-700' />
          </Motion.div>
          <Motion.div
            initial='initial'
            animate='animate'
            variants={iconVariants(3.5)}
            className='p-4'
          >
            <FcLinux className='text-7xl' />
          </Motion.div>
          <Motion.div
            initial='initial'
            animate='animate'
            variants={iconVariants(6)}
            className='p-4'
          >
            <RiTailwindCssFill className='text-7xl text-cyan-800' />
          </Motion.div>
          <Motion.div
            initial='initial'
            animate='animate'
            variants={iconVariants(4)}
            className='p-4'
          >
            <FaBootstrap className='text-7xl text-violet-600' />
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
}

export default Technologies;
