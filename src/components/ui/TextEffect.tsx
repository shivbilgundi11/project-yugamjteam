import { cva } from 'class-variance-authority';
import { ReactNode } from 'react';
import { cn } from '../../utils';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  textstyles?: string;
  variant?: 'primary' | 'secondary';
};

export default function TextEffect({ className, children, variant }: Props) {
  return (
    <div className={cn(textVariant({ variant }), className)}>
      <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]'>
        {children}
      </span>
      <span className='absolute left-0 translate-y-[120%] inline-block p-1 transition duration-500 ease-out group-hover:translate-y-[0]'>
        {children}
      </span>
    </div>
  );
}

const textVariant = cva(
  'group relative w-max cursor-pointer text-2xl leading-6 text-white overflow-hidden',
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);
