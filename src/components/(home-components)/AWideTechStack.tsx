import Marquee from 'react-fast-marquee';
import { TechList1, TechList2 } from '../../utils';

export default function TechStack() {
  return (
    <>
      <section className='w-full h-auto bg-white py-10 md:py-14 lg:py-24 border border-lightgray'>
        <div className='w-full h-full container mx-auto'>
          <h3 className='w-full text-3xl md:text-3xl lg:text-5xl text-center mt-4 md:mt-6 font-semibold font-dm-sans'>
            Choose between a wide{' '}
            <span className='text-secondary'> range of technologies</span>.
          </h3>

          <p className='text-center mt-3 md:mt-4 lg:w-[30%] lg:mx-auto'>
            Discover multiple leading-edge technologies to help you succeed and
            innovate.
          </p>

          <div className='w-full h-auto mt-4 md:mt-8 relative'>
            <div className='w-full h-full z-[5] absolute top-0 right-0 fade-bg'></div>
            <Marquee speed={80} style={{ margin: 0 }} pauseOnHover>
              <div className='w-full h-auto flex items-center justify-center gap-8 mr-9'>
                {TechList1.map((tech) => {
                  return (
                    <div className='flex items-center' key={tech.id}>
                      <span className='w-[42px] md:w-[50px] block overflow-hidden'>
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className='block w-full object-center object-cover'
                        />
                      </span>
                      <h4 className='ml-3 text-xl font-semibold mr-4'>
                        {tech.name}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </Marquee>
          </div>

          <div className='w-full h-auto mt-6 md:mt-12 relative'>
            <div className='w-full h-full z-[5] absolute top-0 right-0 fade-bg'></div>
            <Marquee
              speed={80}
              direction='right'
              style={{ margin: 0 }}
              pauseOnHover
            >
              <div className='w-full h-auto flex items-center justify-center gap-8 mr-9'>
                {TechList2.map((tech) => {
                  return (
                    <div className='flex items-center' key={tech.id}>
                      <span className='w-[42px] md:w-[50px] block overflow-hidden'>
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className='block w-full object-center object-cover'
                        />
                      </span>
                      <h4 className='ml-3 text-xl font-semibold mr-4'>
                        {tech.name}
                      </h4>
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
