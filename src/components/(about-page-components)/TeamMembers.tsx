import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa6';
import Avatar from '../../assets/images/client.jpg';

export default function TeamMembers() {
  return (
    <>
      <section className='w-full h-auto bg-shadow-gray'>
        <div className='w-full h-full container mx-auto p-4 py-8 md:py-10 lg:py-16'>
          <p className='text-lg md:text-xl lg:text-3xl font-medium text-center mb-3'>
            Our Core Team
          </p>

          <p className='text-center md:text-lg font-medium mb-5 md:mb-8 lg:w-[70%] lg:mx-auto'>
            We pride ourselves on shaping innovation and delivering excellence
            in all we do as a team of skilled individuals with diverse
            expertise.
          </p>

          <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6'>
            {/* Member-1 */}
            <div className='w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7'>
              <div className='w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray'>
                <img src={Avatar} alt='profileimg' />
              </div>
              <div className='text-center'>
                <p className='text-lg md:text-xl font-semibold'>Abhishek M J</p>
                <p className='font-medium text-sm py-3 px-6 mt-2 border border-lightgray rounded-md'>
                  Founder and CEO
                </p>
              </div>
              <div className='flex items-center justify-center gap-x-3 text-xl'>
                <a href='#'>
                  <FaLinkedin />
                </a>
                <a href='#'>
                  <FaInstagram />
                </a>
                <a href='#'>
                  <FaTwitter />
                </a>
                <a href='#'>
                  <FaFacebookF />
                </a>
              </div>
            </div>

            {/* Member-2 */}
            <div className='w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7'>
              <div className='w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray'>
                <img src={Avatar} alt='profileimg' />
              </div>
              <div className='text-center'>
                <p className='text-lg md:text-xl font-semibold'>
                  Gajendra Singh N
                </p>
                <p className='font-medium text-sm py-3 px-6 mt-2 border border-lightgray rounded-md'>
                  Co-Founder and Strategist
                </p>
              </div>
              <div className='flex items-center justify-center gap-x-3 text-xl'>
                <a href='#'>
                  <FaLinkedin />
                </a>
                <a href='#'>
                  <FaInstagram />
                </a>
                <a href='#'>
                  <FaTwitter />
                </a>
                <a href='#'>
                  <FaFacebookF />
                </a>
              </div>
            </div>

            {/* Member-2 */}
            <div className='w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7'>
              <div className='w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray'>
                <img src={Avatar} alt='profileimg' />
              </div>
              <div className='text-center'>
                <p className='text-lg md:text-xl font-semibold'>John Wick</p>
                <p className='font-medium text-sm py-3 px-6 mt-2 border border-lightgray rounded-md'>
                  Senior Developer
                </p>
              </div>
              <div className='flex items-center justify-center gap-x-3 text-xl'>
                <a href='#'>
                  <FaLinkedin />
                </a>
                <a href='#'>
                  <FaInstagram />
                </a>
                <a href='#'>
                  <FaTwitter />
                </a>
                <a href='#'>
                  <FaFacebookF />
                </a>
              </div>
            </div>

            {/* Member-4 */}
            <div className='w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7'>
              <div className='w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray'>
                <img src={Avatar} alt='profileimg' />
              </div>
              <div className='text-center'>
                <p className='text-lg md:text-xl font-semibold'>John Wick</p>
                <p className='font-medium text-sm py-3 px-6 mt-2 border border-lightgray rounded-md'>
                  Senior Developer
                </p>
              </div>
              <div className='flex items-center justify-center gap-x-3 text-xl'>
                <a href='#'>
                  <FaLinkedin />
                </a>
                <a href='#'>
                  <FaInstagram />
                </a>
                <a href='#'>
                  <FaTwitter />
                </a>
                <a href='#'>
                  <FaFacebookF />
                </a>
              </div>
            </div>

            {/* Member-1 */}
            <div className='w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7'>
              <div className='w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray'>
                <img src={Avatar} alt='profileimg' />
              </div>
              <div className='text-center'>
                <p className='text-lg md:text-xl font-semibold'>John Wick</p>
                <p className='font-medium text-sm py-3 px-6 mt-2 border border-lightgray rounded-md'>
                  Senior Developer
                </p>
              </div>
              <div className='flex items-center justify-center gap-x-3 text-xl'>
                <a href='#'>
                  <FaLinkedin />
                </a>
                <a href='#'>
                  <FaInstagram />
                </a>
                <a href='#'>
                  <FaTwitter />
                </a>
                <a href='#'>
                  <FaFacebookF />
                </a>
              </div>
            </div>

            {/* Member-1 */}
            <div className='w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7'>
              <div className='w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray'>
                <img src={Avatar} alt='profileimg' />
              </div>
              <div className='text-center'>
                <p className='text-lg md:text-xl font-semibold'>John Wick</p>
                <p className='font-medium text-sm py-3 px-6 mt-2 border border-lightgray rounded-md'>
                  Senior Developer
                </p>
              </div>
              <div className='flex items-center justify-center gap-x-3 text-xl'>
                <a href='#'>
                  <FaLinkedin />
                </a>
                <a href='#'>
                  <FaInstagram />
                </a>
                <a href='#'>
                  <FaTwitter />
                </a>
                <a href='#'>
                  <FaFacebookF />
                </a>
              </div>
            </div>

            {/* Member-1 */}
            <div className='w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7'>
              <div className='w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray'>
                <img src={Avatar} alt='profileimg' />
              </div>
              <div className='text-center'>
                <p className='text-lg md:text-xl font-semibold'>John Wick</p>
                <p className='font-medium text-sm py-3 px-6 mt-2 border border-lightgray rounded-md'>
                  Senior Developer
                </p>
              </div>
              <div className='flex items-center justify-center gap-x-3 text-xl'>
                <a href='#'>
                  <FaLinkedin />
                </a>
                <a href='#'>
                  <FaInstagram />
                </a>
                <a href='#'>
                  <FaTwitter />
                </a>
                <a href='#'>
                  <FaFacebookF />
                </a>
              </div>
            </div>

            {/* Member-1 */}
            <div className='w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7'>
              <div className='w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray'>
                <img src={Avatar} alt='profileimg' />
              </div>
              <div className='text-center'>
                <p className='text-lg md:text-xl font-semibold'>John Wick</p>
                <p className='font-medium text-sm py-3 px-6 mt-2 border border-lightgray rounded-md'>
                  Senior Developer
                </p>
              </div>
              <div className='flex items-center justify-center gap-x-3 text-xl'>
                <a href='#'>
                  <FaLinkedin />
                </a>
                <a href='#'>
                  <FaInstagram />
                </a>
                <a href='#'>
                  <FaTwitter />
                </a>
                <a href='#'>
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
