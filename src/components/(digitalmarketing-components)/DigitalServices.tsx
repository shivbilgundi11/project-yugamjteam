import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface BoxItemProps {
 image: string;
 heading: string;
 description: string;
}

const BoxItem: React.FC<BoxItemProps> = ({ image, heading, description }) => {
 const divRef = useRef<HTMLDivElement>(null);
 const cardInView = useInView(divRef, { once: false });

 return (
    <motion.div
      ref={divRef}
      className={`shadow opacity-0 group-hover:opacity-100  ease-in-out rounded-2xl text-xl md:text-2xl lg:text-4xl duration-[1s] transition-all ease-[cubic-bezier(0.25, 1, 0.5, 1)] overflow-hidden ${
        cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
      }`}
    >
      {/* <div className="flex flex-col items-center justify-center "> */}
        <div className="flex justify-start mb-2 ml-3">
          <img src={image} alt={heading} className='mr-2 w-14 h-14'/>
          <div className='flex justify-center items-center ml-4 '>
          <h3 className="text-xl   text-black font-bold text-center mb-2">{heading}</h3> 

          </div>
        </div>
        <p className="text-center text-light-black text-lg    rounded-md mt-4">{description}</p> 
      {/* </div> */}
    </motion.div>
 );
};

const DigitalServices: React.FC = () => {
 const gridRef = useRef<HTMLDivElement>(null);

 const boxItems: BoxItemProps[] = [
    {
      image: 'https://cdn-icons-png.flaticon.com/128/3494/3494271.png',
      heading: 'Search Engine Optimization',
      description: "Improve your website's visibility and organic search rankings to attract more qualified traffic",
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/128/1997/1997928.png',
      heading: 'Social Media Marketing',
      description: "Engage with your audience and build brand awareness through strategic social media campaigns.",
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/128/7078/7078252.png',
      heading: 'Pay-Per-Click Advertising',
      description: "Reach your target audience quickly and efficiently through targeted paid advertising campaigns.",
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/128/3045/3045679.png',
      heading: 'Content Marketing',
      description: "Create valuable, relevant content to attract and engage your audience and drive conversions.",
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/128/3141/3141158.png',
      heading: 'Email Marketing',
      description: "Nurture leads and drive customer loyalty through personalized email campaigns and automation.",
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/128/3748/3748288.png',
      heading: 'Digital Analytics',
      description: "Track, measure, and optimize your digital marketing efforts for maximum ROI and effectiveness.",
    },
    // Add more box items as needed
 ];

 return (
  <>
    <div className='flex items-center justify-center  text-4xl mt-8'>
      <h4>Our Digital Marketing Services
</h4>
    </div>
    <div className='flex items-center justify-center text-2xl text-blue mt-4'>
      <p>Our digital marketing services encompass a wide range of disciplines, including but not limited to</p>
    </div>
    <section className="flex justify-center py-12 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl" ref={gridRef}>
        {boxItems.map((item, index) => (
          <BoxItem key={index} {...item} />
        ))}
      </div>
    </section>
  </>
);
};

export default DigitalServices;
