import AboutHero from '../components/(about-page-components)/HeroSection';
import TeamMembers from '../components/(about-page-components)/TeamMembers';
import Vision from '../components/(about-page-components)/VisionMision';

export default function About() {
  return (
    <>
      <main className='w-full h-auto'>
        <AboutHero />
        <Vision />
        <TeamMembers />
      </main>
    </>
  );
}
