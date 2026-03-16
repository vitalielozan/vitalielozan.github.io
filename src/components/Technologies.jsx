import { motion as Motion } from 'framer-motion';
import { FaBootstrap, FaNodeJs, FaPython } from 'react-icons/fa';
import { FcLinux } from 'react-icons/fc';
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';
import { TECHNOLOGY_GROUPS } from '@/constants/index.js';

const iconCards = [
  {
    name: 'JavaScript',
    detail: 'Core language and async flows',
    icon: TbBrandJavascript,
    className: 'text-amber-400',
  },
  {
    name: 'React',
    detail: 'Component architecture and state',
    icon: RiReactjsLine,
    className: 'text-cyan-300',
  },
  {
    name: 'Node.js',
    detail: 'REST services and tooling',
    icon: FaNodeJs,
    className: 'text-emerald-400',
  },
  {
    name: 'Python',
    detail: 'Automation and scripting workflows',
    icon: FaPython,
    className: 'text-sky-300',
  },
  {
    name: 'MongoDB',
    detail: 'Document-first data modeling',
    icon: SiMongodb,
    className: 'text-green-500',
  },
  {
    name: 'Tailwind CSS',
    detail: 'Scalable utility-based styling',
    icon: RiTailwindCssFill,
    className: 'text-sky-300',
  },
  {
    name: 'Bootstrap',
    detail: 'Rapid prototyping and grids',
    icon: FaBootstrap,
    className: 'text-indigo-300',
  },
  {
    name: 'Linux CLI',
    detail: 'Workflow and system confidence',
    icon: FcLinux,
    className: '',
  },
];

function Technologies() {
  return (
    <Motion.section
      id='technologies'
      className='section-wrap'
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <span className='section-kicker'>Technical Stack</span>
      <h2 className='section-title'>
        Tools I use to build reliable interfaces
      </h2>
      <p className='section-lead'>
        I combine frontend development with practical deployment and
        system-level awareness. The goal is not just writing code, but shipping
        maintainable products with clear user experience.
      </p>

      <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {iconCards.map((card) => (
          <article key={card.name} className='glass-panel rounded-2xl p-4'>
            <div className='flex items-start gap-3'>
              <div className='rounded-xl border border-line/70 bg-surface-strong/85 p-2.5'>
                <card.icon className={`text-3xl ${card.className}`} />
              </div>
              <div>
                <h3 className='text-lg font-semibold text-text'>{card.name}</h3>
                <p className='mt-1 text-sm text-muted'>{card.detail}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className='mt-8 grid gap-4 md:grid-cols-2'>
        {TECHNOLOGY_GROUPS.map((group) => (
          <article key={group.title} className='glass-panel rounded-2xl p-5'>
            <h3 className='text-xl font-semibold text-text'>{group.title}</h3>
            <div className='mt-4 flex flex-wrap gap-2'>
              {group.items.map((item) => (
                <span key={item} className='chip'>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Motion.section>
  );
}

export default Technologies;
