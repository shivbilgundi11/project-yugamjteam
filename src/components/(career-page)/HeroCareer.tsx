// import { useRef } from "react";
// import { useInView } from "framer-motion";

// export default function Herocareer() {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const heroInView = useInView(heroRef, { once: false });

//   return (
//     <div ref={heroRef} className="w-full h-auto">
//       <div className="w-full h-[50vh] md:h-[70vh] flex items-center justify-center">
//         <img src="./assets/images/careerImages/we-are-hiring-digital-collage.jpg" alt="career" />
//         <p
//           className={`container mx-auto p-4 text-xl font-bold md:w-[50%] md:text-4xl text-center text-slate-800 transition-all duration-500 ease-in ${
//             heroInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
//           }`}
//         >
//           "Explore the evolution of our innovation, from the spark of an idea to
//           the cutting-edge solutions that shape the future of technology."
//         </p>
//       </div>
//     </div>
//   );
// }

import { useEffect } from "react";
import Button from "../ui/Button";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

export default function Hero() {
  useEffect(() => {
    const titles = document.querySelectorAll(".h_title");
    const others = document.querySelectorAll(".opacityDelay");

    const t1 = gsap.timeline({ defaults: { duration: 1 } });

    others.forEach((el) => {
      const delay = 1;

      t1.to(
        el,
        {
          opacity: 1,
          duration: 1.5,
          ease: "cubic-text",
        },
        delay
      );
    });
    titles.forEach((title, index) => {
      const el = title.querySelectorAll("span span");

      const delay = index * 0.08;

      t1.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: "cubic-text",
        },
        delay
      );
    });
  }, []);

  return (
    <>
      <section className="w-full h-[70vh] lg:h-[85vh] careerhero-bg">
        <div className="w-full h-full container mx-auto p-4 flex flex-col items-start justify-center gap-y-3 md:gap-y-5">
          <div className="text-lg sm:text-xl md:text-2xl bg-off-white px-4 py-2 rounded-full flex items-center justify-center gap-x-4 opacityDelay opacity-0">
            Welcome to YugAmjTeam
          </div>
          <div>
            <h1 className="h_title w-full h-auto mb-2">
              <span className="flex gap-x-2 md:gap-x-3 overflow-hidden">
                <span className="text-4xl md:text-5xl lg:text-7xl font-regular leading-none translate-y-full font-semibold">
                  Join Our Team at
                </span>
              </span>
            </h1>
            <h1 className="h_title w-full h-auto mb-2">
              <span className="flex gap-x-12 overflow-hidden">
                <span className="text-4xl md:text-5xl lg:text-7xl font-regular leading-none translate-y-full font-semibold">
                YugAmjTeam
                </span>
              </span>
            </h1>
          </div>
          <p 
          className="font-medium text-gray text-lg opacityDelay opacity-0">
            <span className="font-semibold text-black">At YugAmjTeam, we believe in building a team of passionate individuals who are dedicated to making a difference in the world of technology. If you're looking for an opportunity to grow your career, make an impact, and work alongside talented professionals, we invite you to explore our current job openings and join our team.</span>,
            {/* <span className="font-semibold text-black">Efficiency</span>, and{" "}
            <span className="font-semibold text-black">Success</span> */}
          </p>
          <Button
            text="Contact Us"
            className="border-blue after:bg-blue text-blue opacityDelay opacity-0"
            spanStyles="data-[text]:text-blue"
          />
        </div>
      </section>
    </>
  );
}
