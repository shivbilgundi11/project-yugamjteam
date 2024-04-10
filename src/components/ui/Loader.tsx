import { LuLoader } from 'react-icons/lu';

export default function Loader() {
  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
      <div className='w-max h-auto animate-spin'>
        <LuLoader className='w-8 h-8' />
      </div>
    </div>
  );
}
