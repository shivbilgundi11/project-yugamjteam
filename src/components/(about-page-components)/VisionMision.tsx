import { GiTrophyCup } from 'react-icons/gi';
import { HiLightningBolt, HiOutlineSparkles } from 'react-icons/hi';
import { TbTargetArrow } from 'react-icons/tb';

export default function Vision() {
  return (
    <>
      <section className='w-full h-auto'>
        <div className='w-full hifull container mx-auto p-4 py-8 md:py-10 lg:py-14'>
          <div className='w-full h-auto lg:w-[70%] lg:mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7'>
            {/* Vision */}
            <div className='w-full h-full p-4 md:p-4 lg:p-5 border border-lightgray rounded-2xl transition-all duration-300 ease-in-out hover:shadow-xl'>
              <div className='w-max p-2 md:p-4 bg-orange-100 text-orange-600 rounded-full text-lg mb-4'>
                <HiLightningBolt />
              </div>

              <div className='w-full h-full mt-3 md:mt-8'>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-bold'>
                  Vision
                </h3>
                <p className='text-[18px] md:text-lg mt-1 md:mt-3'>
                  We aim to be more than just a software company. Our vision is
                  to be a trusted companion on our clients' journey to success,
                  fostering long-term partnerships built on trust,
                  collaboration, and shared values. Together, we empower growth
                  and achieve goals.
                </p>
              </div>
            </div>

            {/* Mision */}
            <div className='w-full h-full p-4 md:p-4 lg:p-5 border border-lightgray rounded-2xl transition-all duration-300 ease-in-out hover:shadow-xl'>
              <div className='w-max p-2 md:p-4 bg-orange-100 text-orange-600 rounded-full text-lg mb-4'>
                <TbTargetArrow />
              </div>

              <div className='w-full h-full mt-3 md:mt-8'>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-bold'>
                  Mision
                </h3>
                <p className='text-[18px] md:text-lg mt-1 md:mt-3'>
                  Our mission is clear: to build transformative software
                  solutions that are convenient, affordable, and impactful. With
                  a focus on innovation, quality, and client satisfaction, we
                  deliver solutions that exceed expectations and drive lasting
                  impact.
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div className='w-full h-full p-4 md:p-4 lg:p-5 border border-lightgray rounded-2xl transition-all duration-300 ease-in-out hover:shadow-xl'>
              <div className='w-max p-2 md:p-4 bg-orange-100 text-orange-600 rounded-full text-lg mb-4'>
                <GiTrophyCup />
              </div>

              <div className='w-full h-full mt-3 md:mt-8'>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-bold'>
                  Our Values
                </h3>
                <p className='text-[18px] md:text-lg mt-1 md:mt-3'>
                  At the heart of everything we do lie our core values – trust,
                  honesty, and commitment. We understand that trust is the
                  foundation of any successful relationship, which is why we
                  prioritize transparency, reliability, and accountability in
                  all our interactions. Our commitment to fulfilling promises
                  and delivering on our commitments drives us to exceed
                  expectations and consistently deliver exceptional results.
                </p>
              </div>
            </div>

            {/* Culture */}
            <div className='w-full h-full p-4 md:p-4 lg:p-5 border border-lightgray rounded-2xl transition-all duration-300 ease-in-out hover:shadow-xl'>
              <div className='w-max p-2 md:p-4 bg-orange-100 text-orange-600 rounded-full text-lg mb-4'>
                <HiOutlineSparkles />
              </div>

              <div className='w-full h-full mt-3 md:mt-8'>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-bold'>
                  Culture
                </h3>
                <p className='text-[18px] md:text-lg mt-1 md:mt-3'>
                  Our work environment at YugAmjTeam is characterized by
                  collaboration, creativity, and camaraderie. We foster an open
                  and inclusive atmosphere where ideas are encouraged, and
                  teamwork is celebrated. With a flat organizational structure
                  and transparent communication channels, we ensure that every
                  team member has a voice and an opportunity to contribute to
                  our success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
