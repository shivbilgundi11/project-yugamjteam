import { useEffect } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

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
      <section className='w-full h-[70vh] lg:h-[85vh] It-hero-bg relative'>
        <img src="path/to/your/image.jpg" alt="Description of the image" className="absolute inset-0 w-full h-full object-cover" />
        <div className='w-full h-full container mx-auto p-4 flex flex-col justify-center gap-y-3 md:gap-y-5'>
          <h1 className='h_title w-full h-auto mb-2 text-center md:text-left'>
            <span className='flex flex-wrap gap-x-2 md:gap-x-3 overflow-hidden'>
              <span className='text-4xl md:text-5xl lg:text-7xl sm:text-2xl font-semibold leading-none'>
                Empowering
              </span>
              <span className='text-4xl text-lightblue sm:text-2xl md:text-5xl lg:text-7xl font-semibold leading-none'>
                IT-Solutions
              </span>
              <span className=' sm:text-2xl text-4xl md:text-5xl lg:text-7xl font-semibold leading-none'>
                for
              </span>
            </span>
          </h1>
          <h1 className='h_title w-full h-auto sm:text-2xl mb-2 sm:justify-start text-center md:text-left'>
            <span className='flex gap-x-2 overflow-hidden'>
              <span className='text-4xl md:text-5xl lg:text-7xl font-semibold leading-none'>
                Tomorrow's Challenges
              </span>
            </span>
          </h1>
          <div className='text-center md:text-left'>
            <p className='text-xl'>
              Welcome to YugAmjTeam's IT Services division, your partner for innovative software solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
