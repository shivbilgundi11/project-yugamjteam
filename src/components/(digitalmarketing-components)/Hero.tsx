import React, { useEffect } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.30, 1, 0.5, 1');

const Hero: React.FC = () => {
  useEffect(() => {
    const titles = document.querySelectorAll<HTMLDivElement>('.h_title');
    const others = document.querySelectorAll<HTMLParagraphElement>('.opacityDelay');

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
    <section className='relative w-full h-screen lg:h-[85vh] mark-bg'>
      <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: 'url(path/to/your/image.jpg)' }}></div>
      <div className='container relative mx-auto flex h-full w-full flex-col items-center justify-center gap-y-3 p-4 text-center md:items-start md:text-left md:gap-y-5'>
        <div className='font-lora'>
          <h1 className='h_title mb-2 w-full h-auto'>
            <span className='flex flex-wrap justify-center gap-x-2 overflow-hidden md:justify-start md:gap-x-3'>
              <span className='translate-y-full text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl'>
                Thrive Online
              </span>
              <span className='translate-y-full text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl'>
                Elevate Your Brand
              </span>
            </span>
          </h1>
          <h1 className='h_title mb-2 w-full h-auto'>
            <span className='flex flex-wrap justify-center gap-x-2 overflow-hidden md:justify-start md:gap-x-5'>
              <span className='translate-y-full text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl'>
                With
              </span>
              <span className='translate-y-full h-20  text-red text-2xl font-semibold leading-tight  sm:text-4xl md:text-5xl lg:text-6xl'>
                Digital
              </span>
              <span className='translate-y-full text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl'>
                Domination
              </span>
            </span>
          </h1>
        </div>
        <p className='opacityDelay bg-gray mt-4 flex items-center justify-center rounded-full bg-gray-200 p-4 font-lora text-lg font-medium text-black opacity-0'>
          SEO | PPC | Content Strategy | Engaging Audiences
        </p>
        <div className='opacityDelay opacity-0'>
          <p className='mt-4 text-lg sm:text-xl md:text-2xl lg:text-2xl font-lora'>
            At YugAmjTeam, we offer comprehensive digital marketing services to help businesses thrive online. From SEO to social media and beyond, we leverage the latest tools and strategies to drive measurable results and achieve your marketing objectives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;


