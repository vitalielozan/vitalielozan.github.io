import { motion as Motion } from 'framer-motion';
import { CONTACT } from '@/constants/index.js';

function Contact() {
  const phoneHref = `tel:${CONTACT.phoneNo.replace(/\s+/g, '')}`;

  return (
    <Motion.section
      id='contact'
      className='section-wrap'
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <span className='section-kicker'>Contact</span>
      <h2 className='section-title'>
        Let&apos;s build something useful together
      </h2>
      <p className='section-lead'>
        If you are looking for a motivated frontend developer with practical
        project experience and strong execution discipline, I would be happy to
        connect.
      </p>

      <div className='mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]'>
        <article className='glass-panel rounded-3xl p-6'>
          <h3 className='text-2xl font-semibold text-text'>
            Open for opportunities
          </h3>
          <p className='mt-3 text-muted'>
            I am currently focused on junior frontend roles where I can
            contribute to product quality, team collaboration, and continuous
            delivery.
          </p>

          <div className='mt-6 flex flex-wrap gap-3'>
            <a href={`mailto:${CONTACT.email}`} className='primary-button'>
              Send an Email
            </a>
            <a href={phoneHref} className='secondary-button'>
              Call Me
            </a>
          </div>
        </article>

        <div className='grid gap-4'>
          <article className='glass-panel rounded-2xl p-5'>
            <p className='text-xs font-semibold tracking-[0.2em] text-muted uppercase'>
              Preferred Channel
            </p>
            <p className='mt-2 text-base font-semibold text-text'>
              {CONTACT.preferredChannel}
            </p>
          </article>

          <article className='glass-panel rounded-2xl p-5'>
            <p className='text-xs font-semibold tracking-[0.2em] text-muted uppercase'>
              Email
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className='mt-2 inline-block text-base font-semibold text-brand hover:text-brand/85'
            >
              {CONTACT.email}
            </a>
          </article>

          <article className='glass-panel rounded-2xl p-5'>
            <p className='text-xs font-semibold tracking-[0.2em] text-muted uppercase'>
              Phone
            </p>
            <a
              href={phoneHref}
              className='mt-2 inline-block text-base font-semibold text-brand-alt hover:text-brand-alt/85'
            >
              {CONTACT.phoneNo}
            </a>
            <p className='mt-3 text-sm text-muted'>{CONTACT.address}</p>
          </article>
        </div>
      </div>
    </Motion.section>
  );
}

export default Contact;
