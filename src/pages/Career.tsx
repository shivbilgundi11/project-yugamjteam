import { useEffect } from "react";
import Herocareer from "../components/(career-page components)/HeroCareer";
import JobOpenings from "../components/(career-page components)/JobOpenings";
import WhyUs from "../components/(career-page components)/WhyUs";

export default function Career() {
  useEffect(() => { 
    window.document.title = "Career";
  })
  return (
    <>
      {/* <section className='w-full h-full'> */}
      <div className='w-full '>
      {/* <div className="container mx-auto p-1"> */}
        <Herocareer />
        <WhyUs />
        <JobOpenings />
      </div>
      {/* </section> */}
    </>
  );
}
