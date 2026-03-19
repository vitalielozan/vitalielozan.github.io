import { motion as Motion } from 'framer-motion';
import { LuArrowUpRight } from 'react-icons/lu';
import profileImg from '@/assets/profileImg.jpg';
import {
  HERO_CONTENT,
  HERO_PITCH,
  KEY_METRICS,
  LEARNING_FOCUS,
  PROFILE,
  SOCIAL_LINK,
} from '@/constants/index.js';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

function Hero() {
  return (
    <Motion.section
      id='hero'
      className='section-wrap relative overflow-hidden'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='pointer-events-none absolute -right-20 -top-16 h-52 w-52 rounded-full bg-brand/20 blur-3xl'></div>
      <div className='pointer-events-none absolute -bottom-16 left-4 h-44 w-44 rounded-full bg-brand-alt/20 blur-3xl'></div>

      <span className='section-kicker'>Digital Portfolio 2026</span>

      <div className='grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]'>
        <div>
          <Motion.p
            variants={itemVariants}
            className='text-xs font-semibold tracking-[0.22em] text-muted uppercase'
          >
            {PROFILE.availability}
          </Motion.p>

          <Motion.h1
            variants={itemVariants}
            className='mt-4 text-4xl font-semibold leading-tight text-text sm:text-5xl lg:text-6xl'
          >
            {PROFILE.name}
            <span className='mt-2 block text-brand'>{PROFILE.role}</span>
          </Motion.h1>

          <Motion.p variants={itemVariants} className='section-lead'>
            {HERO_CONTENT}
          </Motion.p>

          <Motion.p
            variants={itemVariants}
            className='mt-5 max-w-2xl text-muted'
          >
            {HERO_PITCH}
          </Motion.p>

          <Motion.div
            variants={itemVariants}
            className='mt-8 flex flex-wrap items-center gap-3'
          >
            <a
              href='./Vitalie_Lozan_CV.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='primary-button'
            >
              Download CV
            </a>
            <a href='#projects' className='secondary-button'>
              View Projects
              <LuArrowUpRight className='ml-1.5 text-base' />
            </a>
          </Motion.div>

          <Motion.div
            variants={itemVariants}
            className='mt-8 flex flex-wrap gap-2.5'
          >
            {LEARNING_FOCUS.map((item) => (
              <span key={item} className='chip'>
                {item}
              </span>
            ))}
          </Motion.div>
        </div>

        <Motion.div
          variants={itemVariants}
          className='glass-panel overflow-hidden p-4 sm:p-6'
        >
          <div className='relative'>
            <div className='absolute inset-0 rounded-3xl bg-linear-to-tr from-brand/20 via-transparent to-brand-alt/20'></div>
            <img
              src={profileImg}
              alt='Portrait of Vitalie Lozan'
              width={640}
              height={640}
              className='relative z-10 w-full rounded-3xl object-cover shadow-[0_20px_60px_-38px_rgba(4,17,27,0.95)] ring-1 ring-white/8'
            />
          </div>

          <div className='mt-5 flex items-center justify-between gap-4'>
            <div>
              <p className='text-xs uppercase tracking-[0.2em] text-muted'>
                Location
              </p>
              <p className='mt-1 text-sm font-semibold text-text'>
                {PROFILE.location}
              </p>
            </div>
            <div className='flex items-center gap-2'>
              {SOCIAL_LINK.map((social) => {
                const isExternal = social.href.startsWith('https');

                return (
                  <a
                    key={social.title}
                    href={social.href}
                    title={social.title}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br ${social.color} text-white transition hover:-translate-y-0.5`}
                  >
                    <social.icon className='text-lg' />
                  </a>
                );
              })}
            </div>
          </div>
        </Motion.div>
      </div>

      <Motion.div
        variants={itemVariants}
        className='mt-8 grid gap-3 sm:grid-cols-3'
      >
        {KEY_METRICS.map((metric) => (
          <article key={metric.label} className='glass-panel rounded-2xl p-4'>
            <p className='text-3xl font-semibold text-brand'>{metric.value}</p>
            <p className='mt-1 text-sm text-muted'>{metric.label}</p>
          </article>
        ))}
      </Motion.div>
    </Motion.section>
  );
}

export default Hero;
