import { GoDotFill } from 'react-icons/go';
import BlogBanner from '../assets/images/blogbanner.jpg';
import { Link } from 'react-router-dom';

export default function Blogs() {
  return (
    <>
      <main className='w-full h-auto'>
        <div className='w-full h-full container mx-auto py-8 md:py-14 lg:py-52'>
          {/* ----Blogs-Container---- */}
          <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5'>
            {/* Blog-1 */}
            <Link
              to={
                '/blogs/understanding-email-marketing-and-its-importance-for-businesses'
              }
            >
              <div className='group w-full h-auto p-3 md:p-4 rounded-2xl border border-transparent flex flex-col gap-y-3 hover:border-lightgray hover:shadow-xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-2'>
                <div className='w-full h-auto aspect-video rounded-2xl overflow-hidden'>
                  <img
                    src={BlogBanner}
                    alt='BlogBanner'
                    className='group-hover:scale-105 transition-all duration-300 ease-in-out'
                  />
                </div>
                <h3 className='px-3 py-1 bg-orange-100 text-sm text-orange-700 rounded-lg w-max'>
                  Digital Markting
                </h3>
                <div className='w-full h-auto flex items-center justify-start gap-x-4 mb-1'>
                  <p className='text-gray text-xs'>October 18, 2023</p>
                  <p className='text-gray text-xs inline-flex items-center gap-x-1'>
                    <GoDotFill /> 7 min read
                  </p>
                </div>
                <h1 className='text-lg font-semibold md:text-xl lg:text-2xl lg:font-bold'>
                  Understanding Email Marketing and Its Importance for
                  Businesses
                </h1>
                <p className='text-sm text-slate-700'>
                  No doubt, the advancement of technology has changed a lot
                  starting from user experience to the business model. In
                  between all, one thing that still hasn’t changed...
                </p>
              </div>
            </Link>
            {/*  */}

            {/* Blog-1 */}
            <div className='group w-full h-auto p-3 md:p-4 rounded-2xl border border-transparent flex flex-col gap-y-3 hover:border-lightgray hover:shadow-xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-2'>
              <div className='w-full h-auto aspect-video rounded-2xl overflow-hidden'>
                <img
                  src={BlogBanner}
                  alt='BlogBanner'
                  className='group-hover:scale-105 transition-all duration-300 ease-in-out'
                />
              </div>
              <h3 className='px-3 py-1 bg-orange-100 text-sm text-orange-700 rounded-lg w-max'>
                Digital Markting
              </h3>
              <div className='w-full h-auto flex items-center justify-start gap-x-4 mb-1'>
                <p className='text-gray text-xs'>October 18, 2023</p>
                <p className='text-gray text-xs inline-flex items-center gap-x-1'>
                  <GoDotFill /> 7 min read
                </p>
              </div>
              <h1 className='text-lg font-semibold md:text-xl lg:text-2xl lg:font-bold'>
                Understanding Email Marketing and Its Importance for Businesses
              </h1>
              <p className='text-sm text-slate-700'>
                No doubt, the advancement of technology has changed a lot
                starting from user experience to the business model. In between
                all, one thing that still hasn’t changed...
              </p>
            </div>
            {/*  */}

            {/* Blog-1 */}
            <div className='group w-full h-auto p-3 md:p-4 rounded-2xl border border-transparent flex flex-col gap-y-3 hover:border-lightgray hover:shadow-xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-2'>
              <div className='w-full h-auto aspect-video rounded-2xl overflow-hidden'>
                <img
                  src={BlogBanner}
                  alt='BlogBanner'
                  className='group-hover:scale-105 transition-all duration-300 ease-in-out'
                />
              </div>
              <h3 className='px-3 py-1 bg-orange-100 text-sm text-orange-700 rounded-lg w-max'>
                Digital Markting
              </h3>
              <div className='w-full h-auto flex items-center justify-start gap-x-4 mb-1'>
                <p className='text-gray text-xs'>October 18, 2023</p>
                <p className='text-gray text-xs inline-flex items-center gap-x-1'>
                  <GoDotFill /> 7 min read
                </p>
              </div>
              <h1 className='text-lg font-semibold md:text-xl lg:text-2xl lg:font-bold'>
                Understanding Email Marketing and Its Importance for Businesses
              </h1>
              <p className='text-sm text-slate-700'>
                No doubt, the advancement of technology has changed a lot
                starting from user experience to the business model. In between
                all, one thing that still hasn’t changed...
              </p>
            </div>
            {/*  */}

            {/* Blog-1 */}
            <div className='group w-full h-auto p-3 md:p-4 rounded-2xl border border-transparent flex flex-col gap-y-3 hover:border-lightgray hover:shadow-xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-2'>
              <div className='w-full h-auto aspect-video rounded-2xl overflow-hidden'>
                <img
                  src={BlogBanner}
                  alt='BlogBanner'
                  className='group-hover:scale-105 transition-all duration-300 ease-in-out'
                />
              </div>
              <h3 className='px-3 py-1 bg-orange-100 text-sm text-orange-700 rounded-lg w-max'>
                Digital Markting
              </h3>
              <div className='w-full h-auto flex items-center justify-start gap-x-4 mb-1'>
                <p className='text-gray text-xs'>October 18, 2023</p>
                <p className='text-gray text-xs inline-flex items-center gap-x-1'>
                  <GoDotFill /> 7 min read
                </p>
              </div>
              <h1 className='text-lg font-semibold md:text-xl lg:text-2xl lg:font-bold'>
                Understanding Email Marketing and Its Importance for Businesses
              </h1>
              <p className='text-sm text-slate-700'>
                No doubt, the advancement of technology has changed a lot
                starting from user experience to the business model. In between
                all, one thing that still hasn’t changed...
              </p>
            </div>
            {/*  */}

            {/* Blog-1 */}
            <div className='group w-full h-auto p-3 md:p-4 rounded-2xl border border-transparent flex flex-col gap-y-3 hover:border-lightgray hover:shadow-xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-2'>
              <div className='w-full h-auto aspect-video rounded-2xl overflow-hidden'>
                <img
                  src={BlogBanner}
                  alt='BlogBanner'
                  className='group-hover:scale-105 transition-all duration-300 ease-in-out'
                />
              </div>
              <h3 className='px-3 py-1 bg-orange-100 text-sm text-orange-700 rounded-lg w-max'>
                Digital Markting
              </h3>
              <div className='w-full h-auto flex items-center justify-start gap-x-4 mb-1'>
                <p className='text-gray text-xs'>October 18, 2023</p>
                <p className='text-gray text-xs inline-flex items-center gap-x-1'>
                  <GoDotFill /> 7 min read
                </p>
              </div>
              <h1 className='text-lg font-semibold md:text-xl lg:text-2xl lg:font-bold'>
                Understanding Email Marketing and Its Importance for Businesses
              </h1>
              <p className='text-sm text-slate-700'>
                No doubt, the advancement of technology has changed a lot
                starting from user experience to the business model. In between
                all, one thing that still hasn’t changed...
              </p>
            </div>
            {/*  */}
          </div>
        </div>
      </main>
    </>
  );
}
