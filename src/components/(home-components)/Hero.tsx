import { useEffect } from 'react';
import Greeting from '../ui/Greeting';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');

export default function Hero() {
  useEffect(() => {
    const titles = document.querySelectorAll('.h_title');
    const others = document.querySelectorAll('.opacityDelay');

    const t1 = gsap.timeline({ defaults: { duration: 1 } });

    others.forEach((el) => {
      const delay = 1;

      t1.to(
        el,
        {
          opacity: 1,
          duration: 1.5,
          ease: 'cubic-text',
        },
        delay,
      );
    });
    titles.forEach((title, index) => {
      const el = title.querySelectorAll('span span');

      const delay = index * 0.08;

      t1.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: 'cubic-text',
        },
        delay,
      );
    });
  }, []);

  return (
    <>
      <section className='w-full h-[70vh] lg:h-[85vh] hero-bg'>
        <div className='w-full h-full container mx-auto p-4 flex flex-col items-start justify-center gap-y-3 md:gap-y-5'>
          <div className='text-lg sm:text-xl md:text-2xl bg-off-white px-4 py-2 rounded-full flex items-center justify-center gap-x-4 opacityDelay opacity-0'>
            <Greeting />, Welcome to YugAmjTeam
          </div>
          <div>
            <h1 className='h_title w-full h-auto mb-2'>
              <span className='flex gap-x-2 md:gap-x-3 overflow-hidden'>
                <span className='text-4xl md:text-5xl lg:text-7xl font-regular leading-none translate-y-full font-semibold'>
                  Tech
                </span>
                <span className='text-4xl md:text-5xl lg:text-7xl font-regular leading-none translate-y-full font-semibold'>
                  Solutions
                </span>
                <span className='text-4xl md:text-5xl lg:text-7xl font-regular leading-none translate-y-full font-semibold'>
                  Tailored
                </span>
              </span>
            </h1>
            <h1 className='h_title w-full h-auto mb-2'>
              <span className='flex gap-x-12 overflow-hidden'>
                <span className='text-4xl md:text-5xl lg:text-7xl font-regular leading-none translate-y-full font-semibold'>
                  to Your Success
                </span>
              </span>
            </h1>
          </div>
          <p className='font-medium text-lg opacityDelay opacity-0'>
            Unleashing Growth, Efficiency, and Success
          </p>
          <div>
            <Link to={'/contact'}>
              <Button
                text='Contact Us'
                variant='primary'
                className='border-blue after:bg-blue'
                spanStyles='data-[text]:text-blue'
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
