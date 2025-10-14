import React from 'react';
import { EXPERIENCES } from '@/constants/index.js';
import { motion as Motion } from 'framer-motion';

function Experience() {
  return (
    <section id='experience' className='py-22 px-4 relative '>
      <div className='container mx-auto max-w-7xl relative z-10'>
        <Motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className='my-20 text-center text-4xl'
        >
          Experience
        </Motion.h2>
        <div>
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
              <Motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className='w-full lg:w-1/4'
              >
                <p className='mb-2 text-sm text-stone-400'>{experience.year}</p>
              </Motion.div>
              <Motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className='w-full max-w-xl lg:w-3/4'
              >
                <h3 className='mb-2 font-semibold'>
                  {experience.role} -{' '}
                  <span className='text-sm text-stone-500'>
                    {experience.company}
                  </span>
                </h3>
                <p className='mb-4 text-stone-400'>{experience.description}</p>
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className='mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300'
                  >
                    {tech}
                  </span>
                ))}
              </Motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
