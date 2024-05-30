import React from 'react';

const PartnershipBenefits: React.FC = () => {
  return (
    <div className='flex flex-col items-center px-4 py-8'>
      <div className='mt-4 text-xl font-medium text-gray-700 uppercase'>
        <h2 className='font-lora text-3xl mb-4'>Approach</h2>
      </div>
      <div className='max-w-xl text-center'>
        <p className='text-lg mb-6 font-lora'>
          We take a data-driven approach to develop customized strategies tailored to your unique needs and objectives. Our team continuously monitors and optimizes campaigns for maximum performance.
        </p>
      </div>
      <div className='max-w-4xl font-lora mx-auto px-4 py-8'>
        <h2 className='text-center text-3xl mb-4'>Benefits of Partnering with YugAmjTeam</h2>
        <div className='flex flex-wrap justify-center gap-2'>
          <p className='p-2 border border-red rounded-full text-sm'>
            Comprehensive Solutions
          </p>
          <p className='p-2 border border-red rounded-full text-sm'>
            Industry Expertise
          </p>
          <p className='p-2 border border-red rounded-full text-sm'>
            Measurable Results
          </p>
          <p className='p-2 border border-red rounded-full text-sm'>
            Scalability and Flexibility
          </p>
          <p className='p-2 border border-red rounded-full text-sm'>
            Personalized Support
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnershipBenefits;
