import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function AboutUs() {
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true });

  return (
    <section className='w-full h-auto border-y border-lightgray'>
      <div className='w-full h-full container mx-auto p-4 flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-between lg:gap-x-14 gap-y-8 md:gap-y-12 py-20 md:py-28 lg:py-36'>
        <p
          className={`${
            isInView ? 'opacity-100' : 'opacity-0'
          } text-lg md:text-xl text-gray duration-[0.6s] ease-[cubic-bezier(0.25, 1, 0.5, 1)] transition-all uppercase`}
        >
          Who we are
        </p>

        <div className='flex flex-col items-center justify-center lg:items-start gap-y-7'>
          <div className='w-full flex flex-col items-center justify-center lg:items-start gap-y-4'>
            <h1 className='w-max h-auto mb-2'>
              <div className='overflow-hidden'>
                <motion.div
                  ref={textRef}
                  className={`text-xl md:text-2xl lg:text-4xl leading-none duration-[1.1s] ease-[cubic-bezier(0.25, 1, 0.5, 1)] transition-all ${
                    isInView ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  Your IT Solution partners, Empowering Brands
                </motion.div>
              </div>
            </h1>
            <h1 className='w-max h-auto mb-2'>
              <div className='flex gap-x-12 overflow-hidden'>
                <motion.div
                  ref={textRef}
                  className={`text-xl md:text-2xl lg:text-4xl leading-none duration-[1.1s] ease-[cubic-bezier(0.25, 1, 0.5, 1)] transition-all ${
                    isInView ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  to Amplify Their Online Presence and
                </motion.div>
              </div>
            </h1>
            <h1 className='w-max h-auto mb-2'>
              <div className='flex gap-x-12 overflow-hidden'>
                <motion.div
                  ref={textRef}
                  className={`text-xl md:text-2xl lg:text-4xl leading-none duration-[1.1s] ease-[cubic-bezier(0.25, 1, 0.5, 1)] transition-all ${
                    isInView ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  Double Their Business Growth.
                </motion.div>
              </div>
            </h1>
          </div>

          <Button text='Learn More' variant='primary' />
        </div>
      </div>
    </section>
  );
}
