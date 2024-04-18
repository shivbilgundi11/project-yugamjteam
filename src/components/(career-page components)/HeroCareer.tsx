import { useRef } from "react";
import { useInView } from "framer-motion";

export default function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: false });
  return (
    <>
      <section className="w-full h-full mb-6 md:mb-12">
        <div ref={heroRef} className="w-full h-auto">
          <div className="text-black text-4xl">
            <h2>Join us</h2>
          </div>
          <div className="w-full h-[50vh] lg:h-[70vh] careerhero-bg flex items-center justify-center">
            <p
              className={`container mx-auto p-4 mt-96 text-xl md:w-[50%] mb-10 md:text-2xl text-center text-white font-extrabold bg-blue opacity-60 transition-all duration-500 ease-in ${
                heroInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ backgroundColor: "rgba(0, 0, 255, 0.9)" }} // Adjust opacity here
            >
              <h2>Join Us</h2> If you're looking for an opportunity to grow your career, make an
              impact, and work alongside talented professionals, we invite you
              to explore our current job openings and join our team.
            </p>
          </div>

          {/* <div className="w-full h-[50vh] lg:h-[70vh] careerhero-bg flex items-center justify-center">
            <p
              className={`container mx-auto p-4 mt-96 text-xl md:w-[50%] mb-10 md:text-2xl text-center text-white font-extraboldbold bg-blue opacity-60 transition-all duration-500 ease-in ${
                heroInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              If you're looking for an opportunity to grow your career, make an
              impact, and work alongside talented professionals, we invite you
              to explore our current job openings and join our team.
            </p>
          </div> */}
        </div>
      </section>
    </>
  );
}
