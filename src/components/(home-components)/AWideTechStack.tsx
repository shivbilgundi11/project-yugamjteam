import Marquee from 'react-fast-marquee';
import { appTechList, webTechList } from '../../utils';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function AWideTechStack() {
  const techStackRef = useRef<HTMLDivElement>(null);
  const techstackInView = useInView(techStackRef, { once: false });
  return (
    <>
      {/* ------TechStack-Section------ */}
      <section
        ref={techStackRef}
        className={`py-6 md:py-[60px] lg:py-[70px] darkBlueBg text-white transition-all duration-500 ease-in-out ${
          techstackInView
            ? 'translate-y-0 opacity-100'
            : 'translate-y-20 opacity-0'
        }`}
      >
        <div className='container mx-auto p-4'>
          <div>
            <p className='text-xl md:text-3xl lg:text-4xl text-center font-semibold mb-5'>
              A Wide Tech Stack Selection
            </p>
            <p className='text-xl text-gray text-center'>
              Discover multiple leading-edge technologies <br />
              to help you succeed and innovate.
            </p>
          </div>

          {/* ------Marquee_Effects------ */}
          <div className='w-full h-full mt-8'>
            <Marquee speed={80} style={{ margin: 0 }}>
              <div className='w-full h-auto flex items-center justify-center gap-x-[100px]'>
                <span className='text-lg text-black font-semibold font-montserrat bg-blue py-1 px-4 rounded-3xl'>
                  MOBILE
                </span>
                {appTechList.map((tech) => {
                  return (
                    <div className='flex items-center' key={tech.id}>
                      <span className='w-[60px] block overflow-hidden'>
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className='block w-full object-center object-cover'
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className='w-full h-auto flex items-center justify-center gap-x-[80px] my-8 mr-[100px]'>
                <span className='text-lg text-black font-semibold font-montserrat bg-blue py-1 px-4 rounded-3xl'>
                  MOBILE
                </span>
                {appTechList.map((tech) => {
                  return (
                    <div className='flex items-center' key={tech.id}>
                      <span className='w-[60px] block overflow-hidden'>
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className='block w-full object-center object-cover'
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
            </Marquee>

            <Marquee speed={80} style={{ margin: 0 }} direction='right'>
              <div className='w-full h-auto flex items-center justify-center gap-x-[100px] my-2'>
                <span className='text-lg text-black font-semibold font-montserrat bg-blue py-1 px-4 rounded-3xl'>
                  WEB
                </span>
                {webTechList.map((tech) => {
                  return (
                    <div className='flex items-center' key={tech.id}>
                      <span className='w-[60px] block overflow-hidden'>
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className='block w-full object-center object-cover'
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className='w-full h-auto flex items-center justify-center gap-x-[80px] my-20 mr-[100px]'>
                <span className='text-lg text-black font-semibold font-montserrat bg-blue py-1 px-4 rounded-3xl'>
                  WEB
                </span>
                {webTechList.map((tech) => {
                  return (
                    <div className='flex items-center' key={tech.id}>
                      <span className='w-[60px] block overflow-hidden'>
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className='block w-full object-center object-cover'
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
}
