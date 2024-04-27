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
      {/* <section className="w-full max-w-screen-xl"> */}
      <section className="w-full">
        <div className="w-full h-full container mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-x-3 md:gap-x-8">
          <div className="image object-center text-center mt-5">
            {/* Responsive Image Size */}
            <img
              src="https://i.imgur.com/WbQnbas.png"
              alt="Company Image"
              className="w-full md:w-[600px] h-auto"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-y-3 md:gap-y-5 w-full md:w-1/2">
            <div className="text-lg sm:text-xl md:text-2xl bg-off-white px-4 py-4 mt-7 rounded-full flex items-center justify-center gap-x-4 opacityDelay opacity-0">
              Welcome to YugAmjTeam
            </div>
            <div>
              <h1 className="h_title w-full h-auto mb-2">
                <span className="flex gap-x-2 md:gap-x-3 overflow-hidden">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-regular leading-none translate-y-full font-semibold">
                    Internships
                  </span>
                </span>
              </h1>
            </div>
            <p className="font-semibold text-black text-lg opacityDelay opacity-0">
              At YugAmjTeam, we offer exciting internship opportunities for
              graduates looking to kickstart their careers in both IT and non-IT
              fields. Our internships provide hands-on experience, mentorship,
              and exposure to real-world projects, helping interns build the
              skills and confidence they need to succeed in their chosen field.
            </p>
            <Button
              text="Learn more"
              className="border-blue after:bg-blue text-blue opacityDelay opacity-0"
              spanStyles="data-[text]:text-blue"
            />
          </div>
        </div>
      </section>
    </>
  );
}
