import Herocareer from "../components/(career-page)/HeroCareer";
import JobOpenings from "../components/(career-page)/JobOpenings";
import WhyUs from "../components/(career-page)/WhyUs";

export default function Career() {
  return (
    <>
      {/* <section className='w-full h-full'> */}
      {/* <div className='w-full h-[80vh] flex items-center justify-center'> */}
      <div className="container mx-auto p-1">
        <Herocareer />
        <WhyUs />
        <JobOpenings />
      </div>
      {/* </section> */}
    </>
  );
}
