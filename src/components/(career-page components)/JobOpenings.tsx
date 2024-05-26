// import Avatar from "../../assets/images/client.jpg";

// export default function JobOpenings() {
//   return (
//     <>
//       <section className="w-full h-auto bg-shadow-gray">
//         <div className="w-full h-full container mx-auto p-4 py-8 md:py-10 lg:py-16">
//           <p className="text-lg md:text-xl lg:text-3xl font-medium text-center mb-3">
//             Current Job Openings
//           </p>

//           <p className="text-center md:text-lg font-medium mb-5 md:mb-8 lg:w-[70%] lg:mx-auto">
//             At YugAmjTeam, we welcome talent from diverse backgrounds and skill
//             sets. Whether you're an experienced professional or a recent
//             graduate, we invite you to explore opportunities to join our team.
//             We are open to various positions across different departments, and
//             we believe that the right candidate can make a valuable
//             contribution, regardless of their level of experience.
//           </p>

//           <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
//             <p className="text-lg md:text-xl lg:text-3xl font-medium text-center mb-3">
//               Full Time
//             </p>
//             {/* Job-1 */}
//             <div className="w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7">
//               <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/256/11180/11180563.png"
//                   alt="profileimg"
//                 />
//               </div>
//               <div className="text-center">
//                 <p className="text-lg md:text-xl font-semibold">
//                   Full Stack Developer
//                 </p>
//                 {/* <p className="font-medium text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
//                   Apply
//                 </p> */}
//                 <button className="text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
//                   Apply
//                 </button>
//               </div>
//               {/* <div className="flex items-center justify-center gap-x-3 text-xl">
//                 <a href="#">
//                   <FaLinkedin />
//                 </a>
//                 <a href="#">
//                   <FaInstagram />
//                 </a>
//                 <a href="#">
//                   <FaTwitter />
//                 </a>
//                 <a href="#">
//                   <FaFacebookF />
//                 </a>
//               </div> */}
//             </div>

//             {/* Member-2 */}
//             <div className="w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7">
//               <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/128/6554/6554103.png"
//                   alt="profileimg"
//                 />
//               </div>
//               <div className="text-center">
//                 <p className="text-lg md:text-xl font-semibold">
//                   Software Tester
//                 </p>
//                 {/* <p className="font-medium text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
//                   Apply
//                 </p> */}
//                 <button className="text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
//                   Apply
//                 </button>
//               </div>
//               {/* <div className="flex items-center justify-center gap-x-3 text-xl">
//                 <a href="#">
//                   <FaLinkedin />
//                 </a>
//                 <a href="#">
//                   <FaInstagram />
//                 </a>
//                 <a href="#">
//                   <FaTwitter />
//                 </a>
//                 <a href="#">
//                   <FaFacebookF />
//                 </a>
//               </div> */}
//             </div>

//             {/* Member-2 */}
//             {/* <div className="w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7">
//               <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray">
//                 <img src="https://cdn-icons-png.flaticon.com/128/4661/4661316.png" alt="profileimg" />
//               </div>
//               <div className="text-center">
//                 <p className="text-lg md:text-xl font-semibold">UI Designer</p> */}
//             {/* <p className="font-medium text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
//                   Apply
//                 </p> */}
//             {/* <button className="text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
//                   Apply
//                 </button>
//               </div> */}
//             {/* <div className="flex items-center justify-center gap-x-3 text-xl">
//                 <a href="#">
//                   <FaLinkedin />
//                 </a>
//                 <a href="#">
//                   <FaInstagram />
//                 </a>
//                 <a href="#">
//                   <FaTwitter />
//                 </a>
//                 <a href="#">
//                   <FaFacebookF />
//                 </a>
//               </div> */}
//             {/* </div> */}

//             {/* Member-4 */}
//             {/* <div className="w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7">
//               <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray">
//                 <img src="https://cdn-icons-png.flaticon.com/128/3929/3929168.png" alt="profileimg" />
//               </div>
//               <div className="text-center">
//                 <p className="text-lg md:text-xl font-semibold">
//                   UX Engineer
//                 </p> */}
//             {/* <p className="font-medium text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
//                   Apply
//                 </p> */}
//             {/* <button className="text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
//                   Apply
//                 </button>
//               </div> */}
//             {/* <div className="flex items-center justify-center gap-x-3 text-xl">
//                 <a href="#">
//                   <FaLinkedin />
//                 </a>
//                 <a href="#">
//                   <FaInstagram />
//                 </a>
//                 <a href="#">
//                   <FaTwitter />
//                 </a>
//                 <a href="#">
//                   <FaFacebookF />
//                 </a>
//               </div> */}
//             {/* </div> */}

//             {/* Member-1 */}
//             <div className="w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7">
//               <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/128/2770/2770337.png"
//                   alt="profileimg"
//                 />
//               </div>
//               <div className="text-center">
//                 <p className="text-lg md:text-xl font-semibold">
//                   Business Development Executive
//                 </p>
//                 {/* <p className="font-medium text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
//                   Apply
//                 </p> */}
//                 <button className="text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
//                   Apply
//                 </button>
//               </div>
//               {/* <div className="flex items-center justify-center gap-x-3 text-xl">
//                 <a href="#">
//                   <FaLinkedin />
//                 </a>
//                 <a href="#">
//                   <FaInstagram />
//                 </a>
//                 <a href="#">
//                   <FaTwitter />
//                 </a>
//                 <a href="#">
//                   <FaFacebookF />
//                 </a>
//               </div> */}
//             </div>

//             {/* Member-1 */}
//             <p className="text-lg md:text-xl lg:text-3xl font-medium text-center mb-3">
//               Part Time
//             </p>
//             <div className="w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7">
//               <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray">
//                 <img src={Avatar} alt="profileimg" />
//               </div>
//               <div className="text-center">
//                 <p className="text-lg md:text-xl font-semibold">Tester</p>
//                 {/* <p className="font-medium text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
//                   Apply
//                 </p> */}
//                 <button className="text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
//                   Apply
//                 </button>
//               </div>
//               {/* <div className="flex items-center justify-center gap-x-3 text-xl">
//                 <a href="#">
//                   <FaLinkedin />
//                 </a>
//                 <a href="#">
//                   <FaInstagram />
//                 </a>
//                 <a href="#">
//                   <FaTwitter />
//                 </a>
//                 <a href="#">
//                   <FaFacebookF />
//                 </a>
//               </div> */}
//             </div>

//             {/* Member-1 */}
//             <div className="w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7">
//               <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray">
//                 <img src={Avatar} alt="profileimg" />
//               </div>
//               <div className="text-center">
//                 <p className="text-lg md:text-xl font-semibold">FreeLancing</p>
//                 {/* <p className="font-medium text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
//                   Apply
//                 </p> */}
//                 <button className="text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
//                   Apply
//                 </button>
//               </div>
//               {/* <div className="flex items-center justify-center gap-x-3 text-xl">
//                 <a href="#">
//                   <FaLinkedin />
//                 </a>
//                 <a href="#">
//                   <FaInstagram />
//                 </a>
//                 <a href="#">
//                   <FaTwitter />
//                 </a>
//                 <a href="#">
//                   <FaFacebookF />
//                 </a>
//               </div> */}
//             </div>

//             {/* Member-1 */}
//             <div className="w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7">
//               <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray">
//                 <img src={Avatar} alt="profileimg" />
//               </div>
//               <div className="text-center">
//                 <p className="text-lg md:text-xl font-semibold">And more...</p>
//                 {/* <p className="font-medium text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
//                   Apply
//                 </p> */}
//                 <button className="text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
//                   Apply
//                 </button>
//               </div>
//               {/* <div className="flex items-center justify-center gap-x-3 text-xl">
//                 <a href="#">
//                   <FaLinkedin />
//                 </a>
//                 <a href="#">
//                   <FaInstagram />
//                 </a>
//                 <a href="#">
//                   <FaTwitter />
//                 </a>
//                 <a href="#">
//                   <FaFacebookF />
//                 </a>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import Avatar from "../../assets/images/client.jpg";

export default function JobOpenings() {
  return (
    <>
      <section className="w-full h-auto bg-shadow-gray">
        <div className="w-full h-full container mx-auto p-4 py-8 md:py-10 lg:py-16">
          <p className="text-lg md:text-xl lg:text-3xl font-medium text-center mb-3">
            Current Job Openings
          </p>

          <p className="text-center md:text-lg font-medium mb-5 md:mb-8 lg:w-[70%] lg:mx-auto">
            At YugAmjTeam, we welcome talent from diverse backgrounds and skill
            sets. Whether you're an experienced professional or a recent
            graduate, we invite you to explore opportunities to join our team.
            We are open to various positions across different departments, and
            we believe that the right candidate can make a valuable
            contribution, regardless of their level of experience.
          </p>

          {/* Full Time Jobs Section */}
          <div className="md:flex md:justify-between">
            <div className="w-full md:w-1/2 p-2">
              <h2 className="text-lg md:text-xl lg:text-3xl font-medium text-center  mb-3">
                Full Time
              </h2>
              {/* Full Time Job Cards */}
              <div className="space-y-4">
                {/* Card 1 */}
                <div className="w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7">
                  <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray">
                    <img src="https://cdn-icons-png.flaticon.com/256/11180/11180563.png" alt="profileimg" />
                  </div>
                  <div className="text-center">
                    <p className="text-lg md:text-xl font-semibold">
                      Full Stack Developer
                    </p>
                    <button className="text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
                      Apply
                    </button>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7">
                  <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray">
                    <img src="https://cdn-icons-png.flaticon.com/256/11180/11180563.png" alt="profileimg" />
                  </div>
                  <div className="text-center">
                    <p className="text-lg md:text-xl font-semibold">
                      Software Tester
                    </p>
                    <button className="text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
                      Apply
                    </button>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="w-full h-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7">
                  <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray">
                    <img src="https://cdn-icons-png.flaticon.com/256/11180/11180563.png" alt="profileimg" />
                  </div>
                  <div className="text-center">
                    <p className="text-lg md:text-xl font-semibold">
                    Business Development 
                    </p>
                    <button className="text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Part Time Jobs Section */}
            <div className="w-full md:w-1/2 p-2">
              <h2 className="text-lg md:text-xl lg:text-3xl font-medium text-center mb-3">
                Part Time
              </h2>
              {/* Part Time Job Cards */}
              <div className="w-full p-6 sm:p-7 md:p-8 lg:p-10 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4 md:gap-y-7">
                {/* Card Content */}
                <div className="w-12 h-12 md:w-16 md:h-16 lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden border-4 border-lightgray">
                  <img src={Avatar} alt="profileimg" />
                </div>
                <div className="text-center">
                  <p className="text-lg md:text-xl font-semibold">
                    Freelance
                  </p>
                  <button className="text-sm py-3 px-6 mt-2 border border-lightgray rounded-md">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


