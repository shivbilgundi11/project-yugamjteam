import { FaRegSmile } from 'react-icons/fa';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Greeting from '../ui/Greeting';
import ButtonPrimary from '../ui/ButtonPrimary';
import ButtonSecondary from '../ui/ButtonSecondary';

export default function HeroSection() {
  const homeHeroRef = useRef<HTMLDivElement>(null);
  const homeHeroInView = useInView(homeHeroRef, { once: true });
  return (
    <>
      <section className='w-full h-[60vh] lg:h-[65vh] hero'>
        <div
          ref={homeHeroRef}
          className='w-full h-full container mx-auto flex items-center justify-center flex-col gap-y-2 md:gap-y-4'
        >
          {/* Greeting Message */}
          <div className='inline-flex items-center justify-center gap-x-2 text-xs md:text-sm p-1 px-3 border rounded-full bg-yellow-50 text-yellow-600 font-dm-sans font-medium shadow-md'>
            <FaRegSmile /> <Greeting />, Welcome to YugAmjTeam
          </div>

          <p
            className={`text-center text-4xl md:text-5xl lg:text-6xl font-semibold font-dm-sans transition-all duration-[2s] ease-in-out ${
              homeHeroInView
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }`}
          >
            Tech Solutions <span className='text-secondary'>Tailored</span>
            <br /> to Your Success
          </p>

          <p
            className={`text-center text-sm md:text-lg transition-all ease-in-out duration-[2s] ${
              homeHeroInView
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }`}
          >
            Unleash Your Potential with Our <br /> Expertise: Empowering You to
            Achieve More
          </p>

          <div
            className={`flex items-center justify-center gap-4 md:gap-5 flex-wrap transition-all duration-[2s] ease-in-out ${
              homeHeroInView
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }`}
          >
            <a href='#servicesWeOffer'>
              <ButtonPrimary>Explore Services</ButtonPrimary>
            </a>

            <ButtonSecondary>Learn About us</ButtonSecondary>
          </div>
        </div>
      </section>
    </>
  );
}
