
import { useEffect } from "react";
import ContactUs from "../components/(contact-us components)/Form&Map";

import ContactUs from '../components/(contact-us components)/Form&Map';

// import HeroContactUs from "../components/(contact-us components)/HeroContactUs";

export default function Contact() {
  useEffect(() => {
    window.document.title = "Contact us";
  });
  return (
    <>
      <section className="w-full h-auto">
        {/* <div className='w-full h-[80vh] flex items-center justify-center'> */}
        {/* <HeroContactUs /> */}
        <ContactUs />
        {/* </div> */}
      </section>
    </>
  );
}
