import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Testimonials() {
  const testimonialsref = useRef<HTMLDivElement>(null);
  const testimonialInView = useInView(testimonialsref, { once: true });
  return (
    <>
      <section className="w-full h-auto border-y border-lightgray">
        <div
          ref={testimonialsref}
          className={`w-full h-full container mx-auto p-4 py-20 md:py-28 transition-all duration-500 ease-in-out ${
            testimonialInView
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <p className="text-center text-2xl md:text-4xl lg:text-5xl font-lora font-semibold my-7">
            Let's here what are clients say.
          </p>
          {/* Column-1 */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="px-1">
              {/* Testimoial-1 */}
              <div className="w-auto h-auto p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl">
                <div className="h-auto flex items-center gap-x-4">
                  <div className="flex flex-col items-start justify-center">
                    <p className="font-semibold text-lg md:text-xl">
                      Ramesh Gupta
                    </p>
                    <p className="text-sm md:text-base text-gray font-medium">
                      CEO
                    </p>
                  </div>
                </div>
                <p className="mt-4">
                  "Working with YugAmjTeam has been a game-changer for our
                  business. Their IT solutions streamlined our operations,
                  making us more efficient and productive. Their team is
                  knowledgeable, responsive, and truly cares about our success.
                  We couldn't have asked for a better partner in our growth
                  journey."
                </p>
              </div>
              <div className="w-auto h-auto p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl">
                <div className="h-auto flex items-center gap-x-4">
                  <div className="flex flex-col items-start justify-center">
                    <p className="font-semibold text-lg md:text-xl">
                      Sarah Johnson
                    </p>
                    <p className="text-sm md:text-base text-gray font-medium">
                      COO
                    </p>
                  </div>
                </div>
                <p className="mt-4">
                  "YugAmjTeam has been instrumental in enhancing our IT
                  infrastructure. Their solutions are not only innovative but
                  also tailored to our specific needs. The team's dedication and
                  expertise have made a significant impact on our business
                  operations. We are extremely satisfied with their services and
                  look forward to a long-term partnership."
                </p>
              </div>
            </div>

            {/* Column-2 */}
            <div className="px-1">
              {/* Testimoial-1 */}
              <div className="w-auto h-auto p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl">
                <div className="h-auto flex items-center gap-x-4">
                  <div className="flex flex-col items-start justify-center">
                    <p className="font-semibold text-lg md:text-xl">
                      Priya Sharma
                    </p>
                    <p className="text-sm md:text-base text-gray font-medium">
                      HR Manager
                    </p>
                  </div>
                </div>
                <p className="mt-4">
                  "YugAmjTeam's HR solutions have revolutionized the way we
                  manage our workforce. Their innovative tools and strategies
                  have significantly improved our recruitment process and
                  employee engagement. The level of professionalism and
                  expertise they bring to the table is unmatched. Highly
                  recommended!"
                </p>
              </div>
              <div className="w-auto h-auto p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl">
                <div className="h-auto flex items-center gap-x-4">
                  <div className="flex flex-col items-start justify-center">
                    <p className="font-semibold text-lg md:text-xl">
                      Anil Mehta
                    </p>
                    <p className="text-sm md:text-base text-gray font-medium">
                      Marketing Director
                    </p>
                  </div>
                </div>
                <p className="mt-4">
                  "We partnered with YugAmjTeam for our digital marketing needs,
                  and the results have been outstanding. Their creative
                  campaigns and data-driven approach have boosted our online
                  presence and generated quality leads. The team is always ready
                  to go the extra mile to ensure our success. Thank you,
                  YugAmjTeam!"
                </p>
              </div>
            </div>

            {/* Column-3 */}
            <div className="px-1">
              {/* Testimoial-1 */}
              <div className="w-auto h-auto p-3 md:p-8 mt-2 align-middle bg-white border border-lightgray rounded-xl shadow-xl">
                <div className="h-auto flex items-center gap-x-4">
                  <div className="flex flex-col items-start justify-center">
                    <p className="font-semibold text-lg md:text-xl">
                      Michael Brown
                    </p>
                    <p className="text-sm md:text-base text-gray font-medium">
                      COO
                    </p>
                  </div>
                </div>
                <p className="mt-4">
                  "As a digital marketing agency, we needed a partner who could
                  deliver top-notch IT solutions to support our projects.
                  YugAmjTeam exceeded our expectations with their technical
                  prowess and customer-centric approach. Their ability to
                  seamlessly integrate with our team and understand our unique
                  challenges has been invaluable. We highly recommend their
                  services to any business looking for reliable IT solutions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
