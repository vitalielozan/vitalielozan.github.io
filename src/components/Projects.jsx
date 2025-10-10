import { PROJECTS } from '@/constants/index.js';
import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function Projects() {
  return (
    <section id='projects' className='py-22 px-4 relative'>
      <div className='container mx-auto max-w-7xl'>
        <Motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className='my-20 text-center text-4xl'
        >
          Projects
        </Motion.h2>
        <div>
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className='mb-8 group card-hover shadow-xs overflow-hidden flex flex-wrap lg:justify-center'
            >
              <Motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className='w-full lg:w-1/4 mb-12 me-18'
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className='mb-6 rounded-md w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </Motion.div>
              <Motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className='w-full max-w-xl lg:w-3/4'
              >
                <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
                <p className='mb-4 text-stone-400'>{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span
                    className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300  hover:text-cyan-500 transition-colors duration-300'
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
                <div className='my-5 ms-3 flex justify-between items-center'>
                  <div className='flex space-x-5'>
                    <a
                      href={project.demoUrl}
                      className='text-stone-300 hover:text-cyan-500 transition-colors duration-300'
                      target='_blank'
                      aria-label='Demo URL'
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className='text-stone-300 hover:text-cyan-500 transition-colors duration-300'
                      target='_blank'
                      aria-label='GitHub'
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </Motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
