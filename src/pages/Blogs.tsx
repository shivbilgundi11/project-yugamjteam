import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { blogCards } from '../utils';
import { useEffect } from 'react';

export default function Blogs() {
  useEffect(() => {
    window.document.title = 'Blogs';
  }, []);
  return (
    <>
      <main className='w-full h-auto'>
        <div className='w-full h-full container mx-auto mt-20 md:mt-0 py-8 md:py-14 lg:py-28'>
          {/* ----Blogs-Container---- */}
          <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5'>
            {blogCards &&
              blogCards.map((card) => {
                return (
                  <Link to={card.route} key={card.id}>
                    <div className='group w-full h-auto p-3 md:p-4 rounded-2xl border border-transparent flex flex-col gap-y-3 hover:border-lightgray hover:shadow-xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-2'>
                      <div className='w-full h-full aspect-video rounded-2xl overflow-hidden'>
                        <img
                          src={card.banner}
                          alt='BlogBanner'
                          className='w-full block object-cover object-center group-hover:scale-105 transition-all duration-300 ease-in-out'
                        />
                      </div>
                      <h3 className='px-3 py-1 bg-orange-100 text-sm text-orange-700 rounded-lg w-max'>
                        {card.tag}
                      </h3>
                      <div className='w-full h-auto flex items-center justify-start gap-x-4 mb-1'>
                        <p className='text-gray text-xs'>{card.postedDate}</p>
                        <p className='text-gray text-xs inline-flex items-center gap-x-1'>
                          <GoDotFill /> {card.readTime}
                        </p>
                      </div>
                      <h1 className='text-lg font-semibold md:text-xl lg:text-2xl lg:font-bold'>
                        {card.title}
                      </h1>
                      <p className='text-sm text-slate-700'>
                        {card.previewText}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
}
