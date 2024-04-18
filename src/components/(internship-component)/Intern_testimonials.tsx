import Marquee from "react-fast-marquee";
import Client from "../../assets/images/client.jpg";

export default function Testimonials() {
  return (
    <>
      {/* // <Marquee> */}
      <h2 className="text-4xl font-bold flex justify-center pb-5">
        Our Intern's view
      </h2>
      {/* <div className="w-max h-max mt-8"></div> */}
      <div className="w-full h-full">
        <Marquee speed={80} style={{ margin: 0 }} loop={0}>
          <div className="px-3 w-full h-auto flex justify-center item-center gap-5">
            {/* <div className="grid grid-cols- md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
            {/* Testimonial-1 */}
            {/* <div className="w-max h-max mt-8"></div> */}
            <div className="max-w-sm md:max-w-md lg:max-w-lg p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl">
              <div className="flex items-center gap-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                  <img
                    src={Client}
                    alt="client"
                    className="w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <p className="font-semibold">Chris</p>
                  <p className="text-sm">Tech Manager @cardsystemsinc</p>
                </div>
              </div>
              <p className="mt-4">
                I have seen so many courses but finding course that gives
                lecture and playground to code is difficult to find. But
                codedamn is totally amazing in this perspective even quality of
                content is unmatchable and it helped me many times in
                understanding concepts in depth
              </p>
            </div>
            {/* </Marquee> */}
            {/* Testimonial-2 */}
            {/* <div className="w-max h-max mt-8"></div> */}
            <div className="max-w-sm md:max-w-md lg:max-w-lg p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl">
              <div className="flex items-center gap-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                  <img
                    src={Client}
                    alt="client"
                    className="w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <p className="font-semibold">John</p>
                  <p className="text-sm">Web Developer @example.com</p>
                </div>
              </div>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                natus earum voluptate quisquam porro?
              </p>
            </div>
            {/* Testimonial-3 */}
            <div className="max-w-sm md:max-w-md lg:max-w-lg p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl">
              <div className="flex items-center gap-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                  <img
                    src={Client}
                    alt="client"
                    className="w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <p className="font-semibold">Anna</p>
                  <p className="text-sm">UX Designer @designco</p>
                </div>
              </div>
              <p className="mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                velit quod incidunt pariatur eaque ipsum adipisci distinctio
                labore sunt earum ad voluptate, repellat a? Aperiam. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Voluptatum quas
                suscipit aliquid a rem exercitationem. Nihil suscipit labore
                dignissimos, reiciendis aut ratione qui maiores rem voluptates
                quod, pariatur nemo tempora ad. Esse voluptas eligendi quae est
                suscipit fugit ullam earum unde rerum ad, iusto minima aliquid
                magnam in inventore accusantium?
              </p>
            </div>
          </div>
          {/* </div> */}
        </Marquee>
      </div>
    </>
  );
}

// import Marquee from "react-fast-marquee";
// import Client from "../../assets/images/client.jpg";

// export default function Testimonials() {
//   return (
//     <>
//       <h2 className="text-4xl font-bold flex justify-center pb-5">
//         Our Intern's view
//       </h2>
//       <Marquee speed={10} style={{ margin: 0 }}>
//         {/* Duplicate the cards to ensure a continuous loop */}
//         <div className="px-3 w-1/6">
//           <div className="grid grid-cols- md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {/* Testimonial-1 */}
//             <div className="p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl">
//               <div className="flex items-center gap-x-4">
//                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
//                   <img
//                     src={Client}
//                     alt="client"
//                     className="w-full object-cover object-center"
//                   />
//                 </div>
//                 <div className="flex flex-col items-start justify-center">
//                   <p className="font-semibold">Chris</p>
//                   <p className="text-sm">Tech Manager @cardsystemsinc</p>
//                 </div>
//               </div>
//               <p className="mt-4">
//                 I have seen so many courses but finding course that gives
//                 lecture and playground to code is difficult to find. But
//                 codedamn is totally amazing in this perspective even quality of
//                 content is unmatchable and it helped me many times in
//                 understanding concepts in depth
//               </p>
//             </div>
//             {/* Testimonial-2 */}
//             <div className="p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl">
//               <div className="flex items-center gap-x-4">
//                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
//                   <img
//                     src={Client}
//                     alt="client"
//                     className="w-full object-cover object-center"
//                   />
//                 </div>
//                 <div className="flex flex-col items-start justify-center">
//                   <p className="font-semibold">John</p>
//                   <p className="text-sm">Web Developer @example.com</p>
//                 </div>
//               </div>
//               <p className="mt-4">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
//                 natus earum voluptate quisquam porro?
//               </p>
//             </div>
//             {/* Testimonial-3 */}
//             <div className="p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl">
//               <div className="flex items-center gap-x-4">
//                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
//                   <img
//                     src={Client}
//                     alt="client"
//                     className="w-full object-cover object-center"
//                   />
//                 </div>
//                 <div className="flex flex-col items-start justify-center">
//                   <p className="font-semibold">Anna</p>
//                   <p className="text-sm">UX Designer @designco</p>
//                 </div>
//               </div>
//               <p className="mt-4">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
//                 velit quod incidunt pariatur eaque ipsum adipisci distinctio
//                 labore sunt earum ad voluptate, repellat a? Aperiam. Lorem ipsum
//                 dolor sit amet consectetur adipisicing elit. Voluptatum quas
//                 suscipit aliquid a rem exercitationem. Nihil suscipit labore
//                 dignissimos, reiciendis aut ratione qui maiores rem voluptates
//                 quod, pariatur nemo tempora ad. Esse voluptas eligendi quae est
//                 suscipit fugit ullam earum unde rerum ad, iusto minima aliquid
//                 magnam in inventore accusantium?
//               </p>
//             </div>
//             {/* Repeat the cards to ensure a continuous loop */}
//             <div className="p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl">
//               {/* Testimonial-1 */}
//               <div className="flex items-center gap-x-4">
//                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
//                   <img
//                     src={Client}
//                     alt="client"
//                     className="w-full object-cover object-center"
//                   />
//                 </div>
//                 <div className="flex flex-col items-start justify-center">
//                   <p className="font-semibold">Chris</p>
//                   <p className="text-sm">Tech Manager @cardsystemsinc</p>
//                 </div>
//               </div>
//               <p className="mt-4">
//                 I have seen so many courses but finding course that gives
//                 lecture and playground to code is difficult to find. But
//                 codedamn is totally amazing in this perspective even quality of
//                 content is unmatchable and it helped me many times in
//                 understanding concepts in depth
//               </p>
//             </div>
//             {/* Testimonial-2 */}
//             <div className="p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl">
//               <div className="flex items-center gap-x-4">
//                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
//                   <img
//                     src={Client}
//                     alt="client"
//                     className="w-full object-cover object-center"
//                   />
//                 </div>
//                 <div className="flex flex-col items-start justify-center">
//                   <p className="font-semibold">John</p>
//                   <p className="text-sm">Web Developer @example.com</p>
//                 </div>
//               </div>
//               <p className="mt-4">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
//                 natus earum voluptate quisquam porro?
//               </p>
//             </div>
//             {/* Testimonial-3 */}
//             <div className="p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl">
//               <div className="flex items-center gap-x-4">
//                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
//                   <img
//                     src={Client}
//                     alt="client"
//                     className="w-full object-cover object-center"
//                   />
//                 </div>
//                 <div className="flex flex-col items-start justify-center">
//                   <p className="font-semibold">Anna</p>
//                   <p className="text-sm">UX Designer @designco</p>
//                 </div>
//               </div>
//               <p className="mt-4">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
//                 velit quod incidunt pariatur eaque ipsum adipisci distinctio
//                 labore sunt earum ad voluptate, repellat a? Aperiam. Lorem ipsum
//                 dolor sit amet consectetur adipisicing elit. Voluptatum quas
//                 suscipit aliquid a rem exercitationem. Nihil suscipit labore
//                 dignissimos, reiciendis aut ratione qui maiores rem voluptates
//                 quod, pariatur nemo tempora ad. Esse voluptas eligendi quae est
//                 suscipit fugit ullam earum unde rerum ad, iusto minima aliquid
//                 magnam in inventore accusantium?
//               </p>
//             </div>
//           </div>
//         </div>
//       </Marquee>
//     </>
//   );
// }
