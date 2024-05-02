import AboutHero from '../components/(about-page-components)/HeroSection';
import Vision from '../components/(about-page-components)/VisionMision';
import WorkWithUs from '../components/(about-page-components)/WorkWithUs';

export default function About() {
  return (
    <>
      <main className='w-full h-auto'>
        <AboutHero />
        <Vision />
        {/* <TeamMembers /> */}
        <WorkWithUs />
      </main>
    </>
  );
}
