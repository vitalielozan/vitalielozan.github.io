import { motion as Motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { PROJECTS } from '@/constants/index.js';

function Projects() {
  const [featuredProject, ...otherProjects] = PROJECTS;

  return (
    <Motion.section
      id='projects'
      className='section-wrap'
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <span className='section-kicker'>Selected Work</span>
      <h2 className='section-title'>
        Project portfolio with real-world learning goals
      </h2>
      <p className='section-lead'>
        Every project in this portfolio represents focused practice: from API
        integration and state management to full-stack architecture and
        practical deployment pipelines.
      </p>

      {featuredProject ? (
        <article className='project-card mt-8 grid overflow-hidden md:grid-cols-[1.1fr_0.9fr]'>
          <img
            src={featuredProject.image}
            alt={featuredProject.title}
            className='h-full min-h-64 w-full object-cover'
          />
          <div className='p-5 sm:p-7'>
            <p className='text-xs font-semibold tracking-[0.2em] text-brand uppercase'>
              Featured Case
            </p>
            <h3 className='mt-2 text-2xl font-semibold text-text'>
              {featuredProject.title}
            </h3>
            <p className='mt-4 text-muted'>{featuredProject.description}</p>

            <div className='mt-4 flex flex-wrap gap-2'>
              {featuredProject.technologies.map((technology) => (
                <span key={technology} className='chip'>
                  {technology}
                </span>
              ))}
            </div>

            <div className='mt-6 flex flex-wrap gap-3'>
              <a
                href={featuredProject.demoUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='primary-button px-4! py-2!'
              >
                Live Demo
                <FaExternalLinkAlt className='ml-2 text-xs' />
              </a>
              <a
                href={featuredProject.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='secondary-button px-4! py-2!'
              >
                Source Code
                <FaGithub className='ml-2 text-sm' />
              </a>
            </div>
          </div>
        </article>
      ) : null}

      <div className='mt-6 grid gap-4 md:grid-cols-2'>
        {otherProjects.map((project) => (
          <article key={project.title} className='project-card'>
            <img
              src={project.image}
              alt={project.title}
              className='project-image'
            />

            <div className='p-5'>
              <h3 className='text-xl font-semibold text-text'>
                {project.title}
              </h3>
              <p className='mt-3 text-sm text-muted'>{project.description}</p>

              <div className='mt-4 flex flex-wrap gap-2'>
                {project.technologies.slice(0, 5).map((technology) => (
                  <span key={technology} className='chip'>
                    {technology}
                  </span>
                ))}
              </div>

              <div className='mt-5 flex items-center gap-4'>
                <a
                  href={project.demoUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-sm font-semibold text-brand transition hover:text-brand/85'
                >
                  Demo
                  <FaExternalLinkAlt className='ml-1.5 text-xs' />
                </a>
                <a
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-sm font-semibold text-text transition hover:text-brand'
                >
                  GitHub
                  <FaGithub className='ml-1.5 text-sm' />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Motion.section>
  );
}

export default Projects;
