import { Link } from 'react-router-dom';

export default function WorkWithUs() {
  return (
    <>
      <section className='w-full h-auto bg-white border-t border-lightgray'>
        <div className='w-full h-full container mx-auto p-4 py-8 md:py-10 lg:py-16 flex items-center justify-center'>
          <div className='w-full h-full flex items-center justify-center flex-col gap-4 md:gap-6'>
            <p className='text-lg md:text-xl lg:text-3xl lg:w-[50%] lg:mx-auto text-center'>
              If you think you can contribute your skills, checkout our career
              page we are always looking for talented people.
            </p>

            <Link to={'/career'}>
              <button className='py-3 px-8 bg-black text-white rounded-full font-medium hover:shadow-lg hover:bg-white hover:text-black border border-transparent hover:border-lightgray transition-all duration-300 ease-in'>
                Careers
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
