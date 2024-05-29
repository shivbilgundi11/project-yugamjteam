import React, { useEffect } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');

const Hero: React.FC = () => {
  useEffect(() => {
    const titles = document.querySelectorAll<HTMLDivElement>('.h_title');
    const others = document.querySelectorAll<HTMLDivElement>('.opacityDelay');

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
      const el = title.querySelectorAll<HTMLSpanElement>('span span');

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
    <section className='relative w-full h-[70vh] lg:h-[85vh] It-hero-bg'>
      <div className='container mx-auto flex h-full w-full flex-col justify-center gap-y-3 p-4 md:gap-y-5'>
        {/* <h1 className='h_title mb-2 w-full h-auto text-center md:text-left'>
          <span className='flex flex-wrap gap-x-2 overflow-hidden sm:gap-x-3'>
            <span className='text-2xl font-lora font-semibold leading-none sm:text-4xl md:text-5xl lg:text-7xl'>
              Empowering
            </span>
            <span className='text-2xl font-lora font-semibold leading-none text-blue sm:text-4xl md:text-5xl lg:text-7xl'>
              IT-Solutions
            </span>
            <span className='text-2xl font-lora font-semibold leading-none sm:text-4xl md:text-5xl lg:text-7xl'>
              for
            </span>
          </span>
        </h1>
          <span className='flex gap-x-2 overflow-hidden'>
            <span className='text-2xl font-lora font-semibold leading-none sm:text-4xl md:text-5xl lg:text-7xl'>
              Tomorrow's Challenges
            </span>
          </span> */}

          <div className='w-full h-[70vh] lg:h-[80vh] container mx-auto py-9 md:py-12 lg:py-24  flex items-start justify-center flex-col gap-y-5 md:gap-y-7 mt-8'>
            <div className='w-full h-auto flex flex-col justify-center gap-y-2'>
              <p className='text-2xl sm:text-4xl md:text-2xl lg:text-5xl font-semibold md:w-[70%] font-lora'>
                Empowering <span className='text-2xl sm:text-4xl md:text-2xl lg:text-5xl text-blue'>IT-Solutions</span>
              </p>
              <p className='text-2xl sm:text-4xl md:text-2xl lg:text-5xl font-lora font-semibold'>
                For Tomorrow's Challenges
              </p>
            </div>
            <div className='text-start md:text-left '>
          <p className='text-lg sm:text-xl  '>
            Welcome to YugAmjTeam's IT Services division, your partner for innovative software solutions tailored to your business needs.
          </p>
        </div>
            
          </div>


      </div>
    </section>
  );
};

export default Hero;
