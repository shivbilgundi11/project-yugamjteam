// export default function HeroInternship() {
//   return (
//     <section className="w-full h-full">
//       <div className="w-full h-[80vh] flex items-center justify-center">
//         <section className="sm:flex items-center max-w-screen-xl">
//           <div className="sm:w-1/2 p-10">
//             <div className="image object-center pt-16 text-center">
//               <img
//                 src="https://i.imgur.com/WbQnbas.png"
//                 alt="Company Image"
//                 className="w-full h-auto"
//               />
//             </div>
//           </div>
//           <div className="sm:w-1/2 p-5">
//             {/* <div className="text"> */}
//               {/* <span className="text-gray-500 border-b-2 text-6xl border-indigo-600 uppercase ">
//                 Internships
//               </span> */}
//               {/* <h2 className="my-4 font-semibold text-3xl sm:text-4xl">
//                 Welcome to <span className="text-indigo-600">YugAmjTeam</span>
//               </h2> */}
//               {/* <p className="text-gray-700 text-xl font-poppins">
//                 At YugAmjTeam, we offer exciting internship opportunities for
//                 graduates looking to kickstart their careers in both IT and
//                 non-IT fields. Our internships provide hands-on experience,
//                 mentorship, and exposure to real-world projects, helping interns
//                 build the skills and confidence they need to succeed in their
//                 chosen field.
//               </p> */}
//             {/* </div> */}
//           </div>
//         </section>
//       </div>
//     </section>
//   );
// }

// import { useEffect } from "react";
// import Button from "../ui/Button";
// import gsap from "gsap";
// import { CustomEase } from "gsap/CustomEase";

// gsap.registerPlugin(CustomEase);
// CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

// export default function Hero() {
//   useEffect(() => {
//     const titles = document.querySelectorAll(".h_title");
//     const others = document.querySelectorAll(".opacityDelay");

//     const t1 = gsap.timeline({ defaults: { duration: 1 } });

//     others.forEach((el) => {
//       const delay = 1;

//       t1.to(
//         el,
//         {
//           opacity: 1,
//           duration: 1.5,
//           ease: "cubic-text",
//         },
//         delay
//       );
//     });
//     titles.forEach((title, index) => {
//       const el = title.querySelectorAll("span span");

//       const delay = index * 0.08;

//       t1.to(
//         el,
//         {
//           y: 0,
//           duration: 1.5,
//           ease: "cubic-text",
//         },
//         delay
//       );
//     });
//   }, []);

//   return (
//     <>
//       <section className="w-full h-[50vh] lg:h-[85vh]">
//         <div className="w-full h-full container mx-auto p-4 flex flex-row items-start justify-between gap-x-3 md:gap-x-8">
//         <div className="flex flex-col items-start justify-center gap-y-3 md:gap-y-5 w-1/2">
//           <div className="text-lg sm:text-xl md:text-2xl bg-off-white px-4 py-2 rounded-full flex items-center justify-center gap-x-4 opacityDelay opacity-0">
//             Welcome to YugAmjTeam
//           </div>
//           <div>
//             <h1 className="h_title w-full h-auto mb-2">
//               <span className="flex gap-x-2 md:gap-x-3 overflow-hidden">
//                 <span className="text-4xl md:text-5xl lg:text-6xl font-regular leading-none translate-y-full font-semibold">
//                   Internships
//                 </span>
//                 {/* <span className="text-4xl md:text-5xl lg:text-6xl font-regular leading-none translate-y-full font-semibold">
//                   to
//                 </span>
//                 <span className="text-4xl md:text-5xl lg:text-6xl font-regular leading-none translate-y-full font-semibold">
//                   YugAmjTeam
//                 </span> */}
//               </span>
//             </h1>
//             {/* <h1 className="h_title w-full h-auto mb-2">
//               <span className="flex gap-x-12 overflow-hidden">
//                 <span className="text-4xl md:text-5xl lg:text-7xl font-regular leading-none translate-y-full font-semibold">
//                   Solutions
//                 </span>
//               </span>
//             </h1> */}
//           </div>
//           <p className="font-semibold text-black text-lg opacityDelay opacity-0">
//             At YugAmjTeam, we offer exciting internship opportunities for
//             graduates looking{" "}
//             <p>
//               {" "}
//               to kickstart their careers in both IT and non-IT fields. Our
//               internships provide{" "}
//             </p>
//             hands-on experience, mentorship, and exposure to real-world
//             projects, helping
//             <p>
//               {" "}
//               interns build the skills and confidence they need to succeed in
//               their chosen field.
//             </p>
//             {/* <span className="font-semibold text-black">Growth</span>,
//             <span className="font-semibold text-black">Efficiency</span>, and{" "}
//             <span className="font-semibold text-black">Success</span> */}
//           </p>
//           <Button
//             text="Learn more"
//             className="border-blue after:bg-blue text-blue opacityDelay opacity-0"
//             spanStyles="data-[text]:text-blue"
//           />
//           <div className="image object-center pt-16 size-10 text-center w-1/2">
//             <img
//               src="https://i.imgur.com/WbQnbas.png"
//               alt="Company Image"
//               className="w-[500px] h-auto"
//             />
//           </div>
//           </div>
//         </div>
//       </section>
//     </>
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
      <section className="w-full h-[50vh] lg:h-[85vh]">
        <div className="w-full h-full container mx-auto p-4 flex flex-row items-center justify-between gap-x-3 md:gap-x-8">
          <div className="image object-center text-center">
            <img
              src="https://i.imgur.com/WbQnbas.png"
              alt="Company Image"
              className="w-[600px] h-auto"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-y-3 md:gap-y-5 w-1/2">
            <div className="text-lg sm:text-xl md:text-2xl bg-off-white px-4 py-2 rounded-full flex items-center justify-center gap-x-4 opacityDelay opacity-0">
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
