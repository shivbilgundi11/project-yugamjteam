import { cva } from 'class-variance-authority';
import { cn } from '../../utils';

type DivButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  text: string;
  spanStyles?: string;
  variant?: 'primary' | 'secondary';
};

export default function Button({
  className,
  spanStyles,
  variant,
  ...props
}: DivButtonProps) {
  return (
    <>
      <div className={cn(buttonVariants({ variant }), className)}>
        <span
          data-text={props.text}
          className={cn(spanbuttonVariants({ variant }), spanStyles)}
        >
          {props.text}
        </span>
      </div>
    </>
  );
}

const buttonVariants = cva(
  'btn group border border-transparent text-md md:text-lg lg:text-[18px] font-medium lg:font-semibold w-max px-4 py-2 md:px-6 md:py-3 lg:px-6 lg:py-3 rounded-full',
  {
    variants: {
      variant: {
        primary: 'border-black after:bg-black',
        secondary: 'border-white after:bg-white',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);
const spanbuttonVariants = cva(
  'span text-md md:text-lg lg:text-[18px] font-medium',
  {
    variants: {
      variant: {
        primary: 'text-black group-hover:data-[text]:text-white',
        secondary: 'text-white group-hover:data-[text]:text-black',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);
