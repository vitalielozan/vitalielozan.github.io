import { motion as Motion } from 'framer-motion';
import { EXPERIENCES } from '@/constants/index.js';

function Experience() {
  return (
    <Motion.section
      id='experience'
      className='section-wrap'
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <span className='section-kicker'>Professional Journey</span>
      <h2 className='section-title'>
        From systems and logistics to modern frontend
      </h2>
      <p className='section-lead'>
        My path combines technical roots, operational discipline, and a clear
        transition into software development. Each role contributed practical
        skills that now shape how I design and build digital products.
      </p>

      <div className='relative mt-8 pl-6 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-linear-to-b before:from-transparent before:via-line/80 before:to-transparent'>
        <div className='grid gap-4'>
          {EXPERIENCES.map((experience) => (
            <article
              key={`${experience.company}-${experience.year}`}
              className='timeline-item'
            >
              <p className='text-xs font-semibold tracking-[0.2em] text-brand uppercase'>
                {experience.year}
              </p>

              <h3 className='mt-2 text-xl font-semibold text-text'>
                {experience.role}
              </h3>

              <p className='mt-1 text-sm font-medium text-brand-alt'>
                {experience.company}
              </p>

              <p className='mt-4 text-sm leading-relaxed text-muted sm:text-base'>
                {experience.description}
              </p>

              <div className='mt-4 flex flex-wrap gap-2'>
                {experience.technologies.map((technology) => (
                  <span key={technology} className='chip'>
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Motion.section>
  );
}

export default Experience;
