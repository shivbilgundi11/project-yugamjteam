import { useEffect } from 'react';
import Hero from '../../components/(it-solutions components)/Hero';
import SecondSection from '../../components/(it-solutions components)/SecondSection';

export default function Home() {
  useEffect(() => {
    window.document.title = 'Services - IT Solutions';
  }, []);
  return (
    <>
      <main className='w-full h-auto'>
        <Hero />
        <SecondSection />
      </main>
    </>
  );
}
