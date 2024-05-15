import { useRef } from 'react';
import Client from '../../assets/images/client.jpg';
import { useInView } from 'framer-motion';

export default function Testimonials() {
  const testimonialsref = useRef<HTMLDivElement>(null);
  const testimonialInView = useInView(testimonialsref, { once: true });
  return (
    <>
      <section className='w-full h-auto border-y border-lightgray'>
        <div
          ref={testimonialsref}
          className={`w-full h-full container mx-auto p-4 py-20 md:py-28 transition-all duration-500 ease-in-out ${
            testimonialInView
              ? 'translate-y-0 opacity-100'
              : 'translate-y-20 opacity-0'
          }`}
        >
          <p className='text-center text-2xl md:text-4xl lg:text-5xl font-lora font-semibold my-7'>
            Let's here what are clients say.
          </p>
          {/* Column-1 */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='px-1'>
              {/* Testimoial-1 */}
              <div className='w-auto h-auto p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl'>
                <div className='w- h-auto flex items-center gap-x-4'>
                  <div className='w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden'>
                    <img
                      src={Client}
                      alt='client'
                      className='w-full object-cover object-center'
                    />
                  </div>
                  <div className='flex flex-col items-start justify-center'>
                    <p className='font-semibold'>Chris</p>
                    <p className='text-sm'>Tech Manager @cardsystemsinc</p>
                  </div>
                </div>
                <p className='mt-4'>
                  I have seen so many courses but finding course that gives
                  lecture and playground to code is difficult to find. But
                  codedamn is totally amazing in this perspective even quality
                  of content is unmatchable and it helped me many times in
                  understanding concepts in depth
                </p>
              </div>
              <div className='w-auto h-auto p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl'>
                <div className='w- h-auto flex items-center gap-x-4'>
                  <div className='w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden'>
                    <img
                      src={Client}
                      alt='client'
                      className='w-full object-cover object-center'
                    />
                  </div>
                  <div className='flex flex-col items-start justify-center'>
                    <p className='font-semibold'>Chris</p>
                    <p className='text-sm'>Tech Manager @cardsystemsinc</p>
                  </div>
                </div>
                <p className='mt-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  natus earum voluptate quisquam porro?
                </p>
              </div>
              <div className='w-auto h-auto p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl'>
                <div className='w- h-auto flex items-center gap-x-4'>
                  <div className='w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden'>
                    <img
                      src={Client}
                      alt='client'
                      className='w-full object-cover object-center'
                    />
                  </div>
                  <div className='flex flex-col items-start justify-center'>
                    <p className='font-semibold'>Chris</p>
                    <p className='text-sm'>Tech Manager @cardsystemsinc</p>
                  </div>
                </div>
                <p className='mt-4'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                  velit quod incidunt pariatur eaque ipsum adipisci distinctio
                  labore sunt earum ad voluptate, repellat a? Aperiam. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                  quas suscipit aliquid a rem exercitationem. Nihil suscipit
                  labore dignissimos, reiciendis aut ratione qui maiores rem
                  voluptates quod, pariatur nemo tempora ad. Esse voluptas
                  eligendi quae est suscipit fugit ullam earum unde rerum ad,
                  iusto minima aliquid magnam in inventore accusantium?
                </p>
              </div>
            </div>

            {/* Column-2 */}
            <div className='px-1'>
              {/* Testimoial-1 */}
              <div className='w-auto h-auto p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl'>
                <div className='w- h-auto flex items-center gap-x-4'>
                  <div className='w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden'>
                    <img
                      src={Client}
                      alt='client'
                      className='w-full object-cover object-center'
                    />
                  </div>
                  <div className='flex flex-col items-start justify-center'>
                    <p className='font-semibold'>Chris</p>
                    <p className='text-sm'>Tech Manager @cardsystemsinc</p>
                  </div>
                </div>
                <p className='mt-4'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                  velit quod incidunt pariatur eaque ipsum adipisci distinctio
                  labore sunt earum ad voluptate, repellat a? Aperiam. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                  quas suscipit aliquid a rem exercitationem. Nihil suscipit
                  labore dignissimos, reiciendis aut ratione qui maiores rem
                  voluptates quod, pariatur nemo tempora ad. Esse voluptass
                </p>
              </div>
              <div className='w-auto h-auto p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl'>
                <div className='w- h-auto flex items-center gap-x-4'>
                  <div className='w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden'>
                    <img
                      src={Client}
                      alt='client'
                      className='w-full object-cover object-center'
                    />
                  </div>
                  <div className='flex flex-col items-start justify-center'>
                    <p className='font-semibold'>Chris</p>
                    <p className='text-sm'>Tech Manager @cardsystemsinc</p>
                  </div>
                </div>
                <p className='mt-4'>
                  I have seen so many courses but finding course that gives
                  lecture and playground to code is difficult to find. But
                  codedamn is totally amazing in this perspective even quality
                  of content is unmatchable and it helped me many times in
                  understanding concepts in depth
                </p>
              </div>
              <div className='w-auto h-auto p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl'>
                <div className='w- h-auto flex items-center gap-x-4'>
                  <div className='w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden'>
                    <img
                      src={Client}
                      alt='client'
                      className='w-full object-cover object-center'
                    />
                  </div>
                  <div className='flex flex-col items-start justify-center'>
                    <p className='font-semibold'>Chris</p>
                    <p className='text-sm'>Tech Manager @cardsystemsinc</p>
                  </div>
                </div>
                <p className='mt-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  natus earum voluptate quisquam porro?
                </p>
              </div>
            </div>

            {/* Column-3 */}
            <div className='px-1'>
              {/* Testimoial-1 */}
              <div className='w-auto h-auto p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl'>
                <div className='w- h-auto flex items-center gap-x-4'>
                  <div className='w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden'>
                    <img
                      src={Client}
                      alt='client'
                      className='w-full object-cover object-center'
                    />
                  </div>
                  <div className='flex flex-col items-start justify-center'>
                    <p className='font-semibold'>Chris</p>
                    <p className='text-sm'>Tech Manager @cardsystemsinc</p>
                  </div>
                </div>
                <p className='mt-4'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, expedita? Libero, consectetur? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Aliquid, dignissimos?
                </p>
              </div>
              <div className='w-auto h-auto p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl'>
                <div className='w- h-auto flex items-center gap-x-4'>
                  <div className='w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden'>
                    <img
                      src={Client}
                      alt='client'
                      className='w-full object-cover object-center'
                    />
                  </div>
                  <div className='flex flex-col items-start justify-center'>
                    <p className='font-semibold'>Chris</p>
                    <p className='text-sm'>Tech Manager @cardsystemsinc</p>
                  </div>
                </div>
                <p className='mt-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, corporis excepturi, nemo nulla deleniti. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Blanditiis beatae
                  itaque laboriosam distinctio numquam consequuntur laudantium
                  inventore laborum sit quos. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Quisquam, necessitatibus!
                </p>
              </div>
              <div className='w-auto h-auto p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl'>
                <div className='w- h-auto flex items-center gap-x-4'>
                  <div className='w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden'>
                    <img
                      src={Client}
                      alt='client'
                      className='w-full object-cover object-center'
                    />
                  </div>
                  <div className='flex flex-col items-start justify-center'>
                    <p className='font-semibold'>Chris</p>
                    <p className='text-sm'>Tech Manager @cardsystemsinc</p>
                  </div>
                </div>
                <p className='mt-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  natus earum voluptate quisquam porro? Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Veritatis, assumenda!
                  Placeat voluptatum minima nihil laborum?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
