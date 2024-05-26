import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
};

export default function ButtonPrimary({ children }: ButtonProps) {
  return (
    <>
      <button className='py-2 px-3 text-sm md:px-4 md:text-base md:py-3 rounded-lg border border-yellow-400 bg-yellow-200 font-semibold text-yellow-600 hover:text-yellow-600 hover:bg-white transition-colors duration-200 ease-linear hover:shadow-xl'>
        {children}
      </button>
    </>
  );
}
