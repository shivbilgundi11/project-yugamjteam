import { useRef } from "react";
import { useInView } from "framer-motion";

export default function AboutHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: false });

  return (
    <>
      <section className="w-full h-full mb-6 md:mb-12">
        <div ref={heroRef} className="w-full h-auto">
          <div className="w-full h-[50vh] md:h-[70vh] careerhero-bg flex items-end justify-center">
            <p
              className={`container mx-auto p-4 text-xl font-bold md:w-[80%] md:text-4xl text-center text-white bg-blue transition-all duration-500 ease-in ${
                heroInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              "At YugAmjTeam, we believe in building a team of passionate
              individuals who are dedicated to making a difference in the world
              of technology."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
