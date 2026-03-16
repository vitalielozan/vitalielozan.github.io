import Navbar from '@/components/Navbar.jsx';
import Hero from '@/components/Hero.jsx';
import Technologies from '@/components/Technologies.jsx';
import Projects from '@/components/Projects.jsx';
import Experience from '@/components/Experience.jsx';
import Contact from '@/components/Contact.jsx';
import Footer from '@/components/Footer.jsx';

function App() {
  return (
    <div className='site-shell text-text antialiased'>
      <div className='pointer-events-none fixed inset-0 -z-30'>
        <div className='site-grid absolute inset-0'></div>
        <div className='absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-brand/20 blur-3xl'></div>
        <div className='absolute bottom-0 right-[-120px] h-80 w-80 rounded-full bg-brand-alt/20 blur-3xl'></div>
      </div>

      <Navbar />

      <main className='mx-auto flex w-[calc(100%-1rem)] max-w-6xl flex-col gap-14 pb-16 pt-28 sm:w-[calc(100%-2rem)]'>
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
