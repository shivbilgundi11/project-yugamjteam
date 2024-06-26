import { useEffect } from "react";
import AWideTechStack from "../components/(home-components)/AWideTechStack";
import AboutUs from "../components/(home-components)/AboutUs";
import Hero from "../components/(home-components)/Hero";
import HowWeWork from "../components/(home-components)/HowWeWork";
import Testimonials from "../components/(home-components)/Testimonials";
import WhatWeProvide from "../components/(home-components)/WhatWeProvide";

export default function Home() {
  useEffect(() => {
    window.document.title = "YugAmjTeam Technologies Pvt Ltd";
  }, []);
  return (
    <>
      <main className="w-full h-auto">
        <Hero />
        <AboutUs />
        <WhatWeProvide />
        <AWideTechStack />
        <HowWeWork />
        <Testimonials />
      </main>
    </>
  );
}
