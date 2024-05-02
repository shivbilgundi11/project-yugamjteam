import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: false });

  const welcomeRef = useRef<HTMLDivElement>(null);
  const welcomInView = useInView(welcomeRef, { once: false });

  const howItRef = useRef<HTMLDivElement>(null);
  const howItStartedInView = useInView(howItRef, { once: false });

  return (
    <>
      <section className='w-full h-full mb-6 md:mb-12'>
        <div ref={heroRef} className='w-full h-auto'>
          <div className='w-full h-[50vh] md:h-[70vh] abouthero-bg flex items-center justify-center'>
            <p
              className={`container mx-auto p-4 text-xl font-bold md:w-[50%] md:text-4xl text-center text-slate-800 transition-all duration-500 ease-in ${
                heroInView
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              }`}
            >
              "Explore the evolution of our innovation, from the spark of an
              idea to the cutting-edge solutions that shape the future of
              technology."
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div
          ref={welcomeRef}
          className='w-full h-auto container mx-auto border-t border-lightgray p-4 py-7 md:py-10 lg:py-14 flex items-center justify-center md:w-[60%] lg:w-[55%]'
        >
          <p
            className={`text-lg md:text-xl leading-relaxed transition-all duration-500 ease-in text-center ${
              welcomInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Welcometo YugAmjTeam, where innovation meets integrity and solutions
            are crafted with care. Since our inception, we have been dedicated
            to building software solutions that not only solve problems but also
            make a meaningful difference in the lives of our clients. Our
            commitment to excellence, transparency, and client satisfaction
            drives everything we do, ensuring that every interaction with us is
            a positive and impactful experience.
          </p>
        </div>

        {/* CEO and Founder
        <div
          className={`w-full h-auto p-4 py-8 md:py-12 lg:py-16 flex items-center justify-center transition-all duration-300 ease-linear ${
            ownerInView ? 'translate-y-0' : 'translate-y-8'
          }`}
        >
          <div
            ref={ownerRef}
            className='w-max h-auto flex items-center justify-center flex-wrap gap-4 border-r  border-lightgray p-1 md:p-6 lg:p-8'
          >
            <div className='flex items-center sm:items-end justify-center flex-col order-2 md:order-none'>
              <h2 className='text-[16px] font-semibold md:text-xl'>
                Abhishek M Jeevanagi
              </h2>
              <p className='text-sm font-medium'>Founder and CEO</p>
            </div>
            <div className='w-14 md:w-14 lg:w-20 rounded-full overflow-hidden border-4 border-lightgray'>
              <img src={Avatar} alt='avatar' />
            </div>
          </div>
          <div
            ref={ownerRef}
            className='w-max h-auto flex items-center justify-center flex-wrap gap-4 p-1 md:p-6 lg:p-8'
          >
            <div className='w-14 md:w-14 lg:w-20 rounded-full overflow-hidden border-4 border-lightgray'>
              <img src={Avatar} alt='avatar' />
            </div>
            <div className='flex items-center sm:items-end justify-center flex-col'>
              <h2 className='text-[16px] font-semibold md:text-xl'>
                Gajendra Singh N
              </h2>
              <p className='text-sm font-medium'>Co-Founder and Strategist</p>
            </div>
          </div>
        </div> */}

        {/* How It Started */}
        <div className='w-full h-auto dotted p-4 mt-8 md:mt-12 py-8 md:py-12 lg:py-16'>
          <div
            ref={howItRef}
            className='w-full h-auto container mx-auto overflow-x-hidden'
          >
            {/* <div
              className={`w-full rounded-3xl lg:w-[60%] h-full flex items-center justify-center overflow-hidden place-self-center transition-all duration-500 ease-in ${
                howItStartedInView ? 'translate-x-0' : '-translate-x-20'
              }`}
            >
              <img src={TeamImg} alt='teamimg' />
            </div> */}

            <div
              className={`w-full h-full flex flex-col justify-start gap-y-5 md:gap-y-7 transition-all duration-500 ease-linear ${
                howItStartedInView ? '-translate-x-0' : 'translate-x-20'
              }`}
            >
              <h4 className='text-2xl md:text-4xl font-bold my-auto mx-auto text-center md:text-start'>
                How we started
              </h4>
              <p className='text-sm md:text-lg lg:w-[60%] lg:mx-auto text-center'>
                At YugAmjTeam, our journey began with a simple yet powerful
                vision: to bridge the gap between technology and accessibility
                while empowering individuals to pursue their dreams. Motivated
                by a desire to make a difference and inspired by the struggles
                of countless freshers navigating the complex world of
                technology, we embarked on a mission to create a place where
                possibilities abound and aspirations thrive.
              </p>

              <p></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
