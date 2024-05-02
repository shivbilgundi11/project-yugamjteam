import { IoSettingsSharp } from 'react-icons/io5';
import TextEffect from '../ui/TextEffect';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from '../ui/Button';

export default function WhatWeProvide() {
  const divRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const serviceInView = useInView(divRef, { once: false });
  const serviceCardsInView = useInView(servicesRef, { once: false });
  return (
    <>
      <section className='w-full h-auto bg-off-white'>
        <div className='w-full h-auto container mx-auto p-4 py-10 md:py-14 lg:py-44 overflow-x-hidden'>
          <div className='w-full h-full flex items-center gap-x-3'>
            <div className='relative'>
              <span className='text-3xl text-blue'>
                <IoSettingsSharp className='spin-reverse' />
              </span>
              <span className='text-xl text-gray absolute -right-2 -bottom-3'>
                <IoSettingsSharp className='animate-spin' />
              </span>
            </div>
            <div>
              <TextEffect className='text-lg text-gray'>
                What we offer
              </TextEffect>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-7 md:mt-16 lg:mt-20'>
            <motion.div
              ref={divRef}
              className={`text-xl md:text-2xl lg:text-4xl duration-[1s] transition-all ease-[cubic-bezier(0.25, 1, 0.5, 1)] overflow-hidden${
                serviceInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-full'
              }`}
            >
              Elevate Your Brand <br />
              with Our Digital Solutions
            </motion.div>

            <motion.div
              ref={divRef}
              className={`text-gray text-md md:text-xl place-self-end self-center duration-[1.4s] transition-all ease-[cubic-bezier(0.25, 1, 0.5, 1)] overflow-hidden${
                serviceInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-full'
              }`}
            >
              Unlock the potential of your brand with <br /> our comprehensive
              services.
            </motion.div>
          </div>

          <div
            ref={servicesRef}
            className={`w-full xl:w-[60%] mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-24 transition-all duration-500 ease-in-out ${
              serviceCardsInView
                ? 'translate-y-0 opacity-100'
                : 'translate-y-20 opacity-0'
            }`}
          >
            {/* ----------Service Card 1---------- */}
            <div className='card w-full h-full md:h-[400px]'>
              <div className='card__inner hover:is-flipped hover:shadow-xl'>
                <div className='card__face card__face--front it-solutions-bg rounded-xl p-4 md:p-8 lg:p-12'>
                  <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4'>
                    IT Solutions
                  </h2>

                  <div className='w-full h-auto flex items-center gap-2 flex-wrap'>
                    <p className='p-1 px-2 border border-lightgray rounded-full text-sm'>
                      App Developement
                    </p>
                    <p className='p-1 px-2 border border-lightgray rounded-full text-sm'>
                      Frontend Developement
                    </p>
                    <p className='p-1 px-2 border border-lightgray rounded-full text-sm'>
                      Backend Developement
                    </p>
                    <p className='p-1 px-2 border border-lightgray rounded-full text-sm'>
                      Others
                    </p>
                  </div>
                </div>
                <div className='card__face card__face--back bg-matte-black text-white rounded-xl p-4 md:p-8 lg:p-12'>
                  <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4'>
                    IT Solutions
                  </h2>

                  <div className='w-full h-auto flex items-center gap-2 flex-wrap'>
                    <p className='p-1 px-2 border border-off-white rounded-full text-sm'>
                      App Developement
                    </p>
                    <p className='p-1 px-2 border border-off-white rounded-full text-sm'>
                      Frontend Developement
                    </p>
                    <p className='p-1 px-2 border border-off-white rounded-full text-sm'>
                      Backend Developement
                    </p>
                    <p className='p-1 px-2 border border-off-white rounded-full text-sm'>
                      Others
                    </p>
                  </div>

                  <p className='text-sm lg:text-lg mt-10'>
                    Unlocking Solutions, Powering Progress: Explore our
                    comprehensive IT services to overcome challenges and drive
                    growth.
                  </p>

                  <Button
                    text='Learn More'
                    variant='secondary'
                    className='mt-4'
                  />
                </div>
              </div>
            </div>

            {/* ----------Service Card 2---------- */}
            <div className='card w-full h-full md:h-[400px]'>
              <div className='card__inner hover:is-flipped hover:shadow-xl'>
                <div className='card__face card__face--front digital-marketing-bg rounded-xl p-4 md:p-8 lg:p-12'>
                  <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4'>
                    Digital Marketing
                  </h2>

                  <div className='w-full h-auto flex items-center gap-2 flex-wrap'>
                    <p className='p-1 px-2 border border-lightgray rounded-full text-sm'>
                      SEO
                    </p>
                    <p className='p-1 px-2 border border-lightgray rounded-full text-sm'>
                      Email MArketing
                    </p>
                    <p className='p-1 px-2 border border-lightgray rounded-full text-sm'>
                      Content Writing
                    </p>
                    <p className='p-1 px-2 border border-lightgray rounded-full text-sm'>
                      Others
                    </p>
                  </div>
                </div>
                <div className='card__face card__face--back w-full h-full bg-matte-black text-white rounded-xl p-4 md:p-8 lg:p-12'>
                  <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4'>
                    Digital Marketing
                  </h2>

                  <div className='w-full h-auto flex items-center gap-2 flex-wrap'>
                    <p className='p-1 px-2 border border-off-white rounded-full text-sm'>
                      SEO
                    </p>
                    <p className='p-1 px-2 border border-off-white rounded-full text-sm'>
                      Email MArketing
                    </p>
                    <p className='p-1 px-2 border border-off-white rounded-full text-sm'>
                      Content Writing
                    </p>
                    <p className='p-1 px-2 border border-off-white rounded-full text-sm'>
                      Others
                    </p>
                  </div>

                  <p className='text-sm lg:text-lg mt-10'>
                    Expand Your Reach, Amplify Your Impact: Partner with us for
                    digital marketing services to connect with your target
                    audience and boost brand visibility.
                  </p>

                  <Button
                    text='Learn More'
                    variant='secondary'
                    className='mt-4'
                  />
                </div>
              </div>
            </div>

            {/* ----------Service Card 3---------- */}
            <div className='card w-full h-full md:h-[400px]'>
              <div className='card__inner hover:is-flipped hover:shadow-xl'>
                <div className='card__face card__face--front it-solutions-bg rounded-xl p-3 md:p-8 lg:p-10'>
                  <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4'>
                    HR Solutions
                  </h2>

                  <div className='w-full h-auto flex items-center gap-2 flex-wrap'>
                    <p className='p-1 px-2 border border-lightgray rounded-full text-sm'>
                      Recruitment
                    </p>
                    <p className='p-1 px-2 border border-lightgray rounded-full text-sm'>
                      HR Consulting
                    </p>
                    <p className='p-1 px-2 border border-lightgray rounded-full text-sm'>
                      Head Hunting
                    </p>
                    <p className='p-1 px-2 border border-lightgray rounded-full text-sm'>
                      Database Selection
                    </p>
                    <p className='p-1 px-2 border border-lightgray rounded-full text-sm'>
                      Others
                    </p>
                  </div>
                </div>
                <div className='card__face card__face--back bg-matte-black text-white rounded-xl p-4 md:p-8 lg:p-12'>
                  <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4'>
                    HR Solutions
                  </h2>

                  <div className='w-full h-auto flex items-center gap-2 flex-wrap'>
                    <p className='p-1 px-2 border border-off-white rounded-full text-sm'>
                      Recruitment
                    </p>
                    <p className='p-1 px-2 border border-off-white rounded-full text-sm'>
                      HR Consulting
                    </p>
                    <p className='p-1 px-2 border border-off-white rounded-full text-sm'>
                      Head Hunting
                    </p>
                    <p className='p-1 px-2 border border-off-white rounded-full text-sm'>
                      Database Selection
                    </p>
                    <p className='p-1 px-2 border border-off-white rounded-full text-sm'>
                      Others
                    </p>
                  </div>

                  <p className='text-sm lg:text-lg mt-6'>
                    Simplify HR, Elevate Performance: Let us handle your HR
                    management needs to streamline processes and optimize
                    workforce efficiency.
                  </p>

                  <Button
                    text='Learn More'
                    variant='secondary'
                    className='mt-4'
                  />
                </div>
              </div>
            </div>

            {/* ----------Service Card 4---------- */}
            <div className='card w-full h-max md:h-[400px]'>
              <div className='card__inner hover:is-flipped hover:shadow-xl'>
                <div className='card__face card__face--front it-solutions-bg rounded-xl p-4 md:p-8 lg:p-12'>
                  <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4'>
                    Internships
                  </h2>

                  <div className='w-full h-auto flex items-center gap-2 flex-wrap'>
                    <p className='p-1 px-2 border border-lightgray rounded-full text-sm'>
                      Career Guidance
                    </p>
                    <p className='p-1 px-2 border border-lightgray rounded-full text-sm'>
                      Project Based Learning
                    </p>
                    <p className='p-1 px-2 border border-lightgray rounded-full text-sm'>
                      Real World Projects
                    </p>
                    <p className='p-1 px-2 border border-lightgray rounded-full text-sm'>
                      Resume Building Guide
                    </p>
                    <p className='p-1 px-2 border border-lightgray rounded-full text-sm'>
                      Others
                    </p>
                  </div>
                </div>
                <div className='card__face card__face--back w-full h-max bg-matte-black text-white rounded-xl p-4 md:p-8 lg:p-12'>
                  <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4'>
                    IT Solutions
                  </h2>

                  <div className='w-full h-auto flex items-center gap-2 flex-wrap'>
                    <p className='p-1 px-2 border border-off-white rounded-full text-sm'>
                      App Developement
                    </p>
                    <p className='p-1 px-2 border border-off-white rounded-full text-sm'>
                      Frontend Developement
                    </p>
                    <p className='p-1 px-2 border border-off-white rounded-full text-sm'>
                      Backend Developement
                    </p>
                    <p className='p-1 px-2 border border-off-white rounded-full text-sm'>
                      Others
                    </p>
                  </div>

                  <p className='text-sm lg:text-lg mt-10'>
                    Unlocking Solutions, Powering Progress: Explore our
                    comprehensive IT services to overcome challenges and drive
                    growth.
                  </p>

                  <Button
                    text='Learn More'
                    variant='secondary'
                    className='mt-4'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
