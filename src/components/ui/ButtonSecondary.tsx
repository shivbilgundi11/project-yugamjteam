import { ReactNode } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

type ButtonProps = {
  children: ReactNode;
};

export default function ButtonSecondary({ children }: ButtonProps) {
  return (
    <>
      <Link
        to={'/about'}
        className='group text-primary text-sm md:text-[16px] font-medium inline-flex items-center gap-x-2 pb-1 border-b-2 border-primary border-opacity-70 hover:border-opacity-100'
      >
        {children}{' '}
        <FaArrowRightLong className='group-hover:translate-x-1 transition-transform duration-200 ease-linear' />
      </Link>
    </>
  );
}
