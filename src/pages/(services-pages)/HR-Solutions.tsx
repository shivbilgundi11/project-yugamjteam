import PermanentHire from '../../assets/images/hr-solutions/permanent-hire.webp';
import ContractHire from '../../assets/images/hr-solutions/contract-hire.webp';
import ITHire from '../../assets/images/hr-solutions/it-hire.webp';
import VendorHire from '../../assets/images/hr-solutions/vendor-hire.webp';
import { Link } from 'react-router-dom';

export default function HRSolutions() {
  return (
    <>
      <main className='w-full h-auto'>
        {/* ----Hero_section---- */}
        <section className='w-full h-auto hr-hero-bg'>
          <div className='w-full h-[70vh] lg:h-[80vh] container mx-auto py-9 md:py-12 lg:py-24 flex items-start justify-center flex-col gap-y-5 md:gap-y-7'>
            <div className='w-full h-auto flex flex-col justify-center gap-y-2'>
              <p className='text-xl md:text-2xl italic font-medium'>
                Empower Your Team
              </p>
              <p className='text-xl md:text-2xl italic font-medium'>
                Elevate Your Business
              </p>
            </div>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold md:w-[70%] font-lora'>
              Transforming HR challenges into seamless solutions, one talent at
              a time.
            </h1>
          </div>
        </section>

        {/* ----Description-On-HR-Solutions---- */}
        <section className='w-full h-full hero'>
          <div className='w-full h-full container mx-auto py-9 md:py-12 lg:py-24 flex items-center justify-center'>
            <p className='text-xl md:text-2xl text-center lg:w-[70%] lg:mx-auto'>
              At YugAmjTeam, we offer comprehensive HR management services
              designed to streamline your human resources processes and optimize
              workforce efficiency. From recruitment and onboarding to
              performance management and employee engagement, we provide
              tailored solutions to meet your organization's needs.
            </p>
          </div>
        </section>

        {/* ----Our Services---- */}
        <section className='w-full h-auto border-t border-lightgray'>
          <div className='w-full h-full container mx-auto py-9 md:py-12 lg:py-24'>
            <p className='text-xl font-medium lg:w-[80%] lg:mx-auto text-gray uppercase'>
              Our Services
            </p>

            <p className='text-2xl md:text-3xl mt-4 font-semibold lg:w-[80%] lg:mx-auto italic text-slate-700 font-lora'>
              We make customer delight happen
            </p>

            <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:w-[80%] lg:mx-auto'>
              {/* --Service-One---- */}
              <div className='w-full h-full p-4 md:p-6 lg:p-7 shadow-xl rounded-xl flex flex-col justify-center items-start gap-y-4 md:gap-y-6 mt-5 border border-transparent hover:scale-[1.01] hover:border-lightgray transition-all duration-200 ease-in'>
                <div className='w-[32px] md:w-[48px] lg:w-[80px] aspect-square h-auto overflow-hidden'>
                  <img
                    src={PermanentHire}
                    alt='PermanentHire'
                    className='w-full block object-cover object-center'
                  />
                </div>

                <h1 className='text-xl md:text-2xl font-medium text-blue'>
                  Permanent Recruitment
                </h1>
                <p className='text-sm md:text-base'>
                  Over time, we've cultivated an in-depth comprehension of
                  industries and their global operational intricacies. This
                  expertise positions us as the natural recruitment partners for
                  organizations pursuing excellence and adaptability. Aligning
                  candidate aspirations with organizational visions and cultures
                  isn't just a goal, it's what we excel at – it's Humanly
                  Possible.
                </p>
              </div>

              {/* --Service-Two */}
              <div className='w-full h-full p-4 md:p-6 lg:p-7 shadow-xl rounded-xl flex flex-col justify-center items-start gap-y-4 md:gap-y-6 mt-5 border border-transparent hover:scale-[1.01] hover:border-lightgray transition-all duration-200 ease-in'>
                <div className='w-[32px] md:w-[48px] lg:w-[80px] aspect-square h-auto overflow-hidden'>
                  <img
                    src={ContractHire}
                    alt='ContractHire'
                    className='w-full block object-cover object-center'
                  />
                </div>

                <h1 className='text-xl md:text-2xl font-medium text-blue'>
                  Contract Staffing
                </h1>
                <p className='text-sm md:text-base'>
                  We've built our reputation on delivering top-notch staffing
                  solutions that cater to an organization's flexibility
                  requirements, adapting seamlessly to seasonal demands and
                  seizing opportunities as they arise. From attracting
                  candidates to managing the performance of our contingent
                  workforce, we hold ourselves accountable every step of the
                  way. Our commitment extends to efficient and effective
                  workforce management through streamlined payrolling processes.
                </p>
              </div>

              {/* --Service-Three */}
              <div className='w-full h-full p-4 md:p-6 lg:p-7 shadow-xl rounded-xl flex flex-col justify-center items-start gap-y-4 md:gap-y-6 mt-5 border border-transparent hover:scale-[1.01] hover:border-lightgray transition-all duration-200 ease-in'>
                <div className='w-[32px] md:w-[48px] lg:w-[80px] aspect-square h-auto overflow-hidden'>
                  <img
                    src={ITHire}
                    alt='ITHire'
                    className='w-full block object-cover object-center'
                  />
                </div>

                <h1 className='text-xl md:text-2xl font-medium text-blue'>
                  IT Reqruitement
                </h1>
                <p className='text-sm md:text-base'>
                  Our focus lies in providing sought-after IT talent equipped
                  with a potent blend of technical expertise and essential soft
                  skills crucial for driving business success. Our offerings
                  encompass tailored Application Development, ERP solution
                  management, cybersecurity, Web & Portal Development, and
                  Security & Storage Solutions spanning various industries.
                  Whether it's contingent staffing or permanent recruitment, we
                  cater to all IT and ITeS needs with precision and dedication.
                </p>
              </div>

              {/* --Service-Four-- */}
              <div className='w-full h-full p-4 md:p-6 lg:p-7 shadow-xl rounded-xl flex flex-col justify-center items-start gap-y-4 md:gap-y-6 mt-5 border border-transparent hover:scale-[1.01] hover:border-lightgray transition-all duration-200 ease-in'>
                <div className='w-[32px] md:w-[48px] lg:w-[80px] aspect-square h-auto overflow-hidden'>
                  <img
                    src={VendorHire}
                    alt='VendorHire'
                    className='w-full block object-cover object-center'
                  />
                </div>
                <h1 className='text-xl md:text-2xl font-medium text-blue'>
                  Vendor Management Services
                </h1>
                <p className='text-sm md:text-base'>
                  Our Managed Service Provider solutions strategically organize
                  and oversee multiple staffing vendors, enhancing contingent
                  workforce management for improved performance across people,
                  processes, and technology. Our specialization lies in cost
                  control, efficiency management, and aligning processes with
                  the unique needs of our clients. Additionally, we enhance
                  client capabilities by providing market intelligence and
                  crafting data-driven solutions throughout the contingent
                  workforce talent lifecycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ----Contact-For-HR-Solutions---- */}
        <section className='w-full h-auto'>
          <div className='w-full h-full container mx-auto mb-5'>
            <div className='w-full h-[250px] lg:h-[400px] p-6 md:p-8 lg:p-12 rounded-2xl overflow-hidden flex flex-col justify-center items-start gap-y-5 md:gap-y-7 lg:gap-y-14 lg:w-[80%] lg:mx-auto hr-contact-us-bg'>
              <p className='w-full md:w-[80%] lg:w-[60%] text-sm md:text-base lg:text-lg text-white'>
                In the realm of HR Solutions, YugAmjTeam stands as your
                steadfast ally, guiding you through the complexities of the
                modern workplace. With us, unlocking success is not just a goal;
                it's a reality made Humanly Possible.
              </p>
              <Link to={'/contact'}>
                <button className='text-white bg-yellow-500 py-1 px-3 md:py-2 md:px-6 rounded-md lg:py-3 lg:px-8 font-medium lg:text-md hover:bg-opacity-90'>
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
