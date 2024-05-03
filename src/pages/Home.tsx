import AWideTechStack from '../components/(home-components)/AWideTechStack';
import AboutUs from '../components/(home-components)/AboutUs';
import Hero from '../components/(home-components)/Hero';
import HowWeWork from '../components/(home-components)/HowWeWork';
import Testimonials from '../components/(home-components)/Testimonials';
import WhatWeProvide from '../components/(home-components)/WhatWeProvide';
import NewHeroSection from '../components/(home-components)/NewHeroSection';

export default function Home() {
  return (
    <>
      <main className='w-full h-auto'>
        <Hero />
        <NewHeroSection />
        <AboutUs />
        <WhatWeProvide />
        <AWideTechStack />
        <HowWeWork />
        <Testimonials />
      </main>
    </>
  );
}
