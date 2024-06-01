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
      <div className='w-full '>
        <Herocareer />
        <WhyUs />
        <JobOpenings />
      </div>
    </>
  );
}
