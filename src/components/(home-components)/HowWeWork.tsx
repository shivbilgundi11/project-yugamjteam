import { BiSolidPhoneCall } from 'react-icons/bi';
import { GiDiscussion } from 'react-icons/gi';
import { MdOutlineTrackChanges } from 'react-icons/md';
import Conference from '../../assets/images/howwework.jpg';

export default function HowWeWork() {
  return (
    <>
      <section className='w-full h-auto border border-lightgray'>
        <div className='w-full h-full container mx-auto p-4 py-12 md:py-14 lg:py-20'>
          <p className='md:text-md font-medium text-gray uppercase'>
            How we work
          </p>

          <p className='mt-4 md:mt-10 text-2xl md:text-4xl font-semibold lg:w-[40%] font-lora'>
            We follow a Simple, seamless, and streamlined workflow
          </p>

          <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5'>
            <div className='w-full h-full flex flex-col gap-y-8 md:gap-y-12 mt-7 md:mt-9'>
              <div className='w-full h-full flex gap-x-5'>
                <div className='h-max p-2 md:p-4 rounded-full bg-blue text-white'>
                  <BiSolidPhoneCall />
                </div>

                <div>
                  <h4 className='text-xl md:text-2xl lg:text-3xl font-semibold'>
                    Join exploration call
                  </h4>

                  <p className='mt-3 md:text-lg text-slate-600'>
                    It begins with you. Arrange an exploratory call where we
                    connect to grasp your aspirations, requirements, and
                    potentials. This initial exchange sets the stage for a
                    personalized and significant journey.
                  </p>
                </div>
              </div>

              <div className='w-full h-full flex gap-x-5'>
                <div className='h-max p-2 md:p-4 rounded-full bg-blue text-white'>
                  <GiDiscussion />
                </div>

                <div>
                  <h4 className='text-xl md:text-2xl lg:text-3xl font-semibold'>
                    Discuss solution and team structure
                  </h4>

                  <p className='mt-3 md:text-lg text-slate-600'>
                    We participate in meaningful conversations regarding the
                    solution and establish the most effective team structure.
                    This ensures that our direction moving forward seamlessly
                    aligns with the needs of your project.
                  </p>
                </div>
              </div>

              <div className='w-full h-full flex gap-x-5'>
                <div className='h-max p-2 md:p-4 rounded-full bg-blue text-white'>
                  <MdOutlineTrackChanges />
                </div>

                <div>
                  <h4 className='text-xl md:text-2xl lg:text-3xl font-semibold'>
                    Get started and track performance
                  </h4>

                  <p className='mt-3 md:text-lg text-slate-600'>
                    We participate in meaningful conversations regarding the
                    solution and establish the most effective team structure.
                    This ensures that our direction moving forward seamlessly
                    aligns with the needs of your project.
                  </p>
                </div>
              </div>
            </div>

            <div className='w-full h-full overflow-hidden rounded-2xl group hover:shadow-2xl my-6 md:my-0'>
              <img
                src={Conference}
                alt='meeting-image'
                className='w-full h-full block object-cover object-center group-hover:scale-105 transition-all duration-300 ease-in-out'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
