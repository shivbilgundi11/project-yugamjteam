import { useEffect } from 'react';
import DigitalServices from '../../components/(digitalmarketing-components)/DigitalServices';
import Hero from '../../components/(digitalmarketing-components)/Hero';
import PartnershipBenefits from '../../components/(digitalmarketing-components)/PartnershipBenefits';

export default function Home() {
  useEffect(() => {
    window.document.title = 'Srvices - Digital Marketing';
  }, []);
  return (
    <>
      <main className='w-full h-auto'>
        <Hero />
        <PartnershipBenefits />
        <DigitalServices />
      </main>
    </>
  );
}
