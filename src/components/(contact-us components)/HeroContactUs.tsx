import { useRef } from "react";
import { useInView } from "framer-motion";

export default function HeroContactUs() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: false });
  
  return (
    <>
      <section className="w-full h-full mb-6 md:mb-12">
        <div ref={heroRef} className="w-full h-auto">
          <div className="w-full h-[50vh] md:h-[70vh] abouthero-bg flex items-center justify-center">
            <p
              className={`container mx-auto p-4 text-xl font-bold md:w-[50%] md:text-4xl text-center text-slate-800 transition-all duration-500 ease-in ${
                heroInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              "Explore the evolution of our innovation, from the spark of an
              idea to the cutting-edge solutions that shape the future of
              technology."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
