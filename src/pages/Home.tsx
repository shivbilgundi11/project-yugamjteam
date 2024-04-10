import AWideTechStack from '../components/(home-components)/AWideTechStack';
import AboutUs from '../components/(home-components)/AboutUs';
import Hero from '../components/(home-components)/Hero';
import Testimonials from '../components/(home-components)/Testimonials';
import WhatWeProvide from '../components/(home-components)/WhatWeProvide';

export default function Home() {
  return (
    <>
      <main className='w-full h-auto'>
        <Hero />
        <AboutUs />
        <WhatWeProvide />
        <AWideTechStack />
        <Testimonials />
      </main>
    </>
  );
}
