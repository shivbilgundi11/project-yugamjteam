import Marquee from "react-fast-marquee";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function Testimonials() {
  return (
    <>
      <h2 className="text-4xl font-bold flex justify-center pb-5">
        Our Intern's view
      </h2>
      <div className="w-full h-full">
        <Marquee speed={80} style={{ margin: 0 }} loop={0}>
          <div className="w-full h-full flex items-center justify-center gap-5 mr-5">
            <div className="group w-[350px] md:w-[500px] h-auto p-4 md:p-5 rounded-lg border border-lightgray shadow-md hover:shadow-xl">
              <h3 className="text-lg font-semibold md:text-xl mb-2">
                Praveen Kumar
              </h3>
              <p className="text-gray group-hover:text-black text-sm md:text-base">
                <ImQuotesLeft className="inline align-top mr-1 group-hover:text-black" />
                I'm thrilled to share that I've secured an internship
                opportunity to learn and grow. I appreciate AMJ Team for this
                valuable chance to enhance my skills, who played a crucial role
                for getting this opportunity. I'm eager to learn and contribute
                to the team under their guidance.
                <ImQuotesRight className="inline align-top mr-1 group-hover:text-black" />
              </p>
            </div>
            <div className="group w-[350px] md:w-[500px] h-auto p-4 md:p-5 rounded-lg border border-lightgray shadow-md hover:shadow-xl">
              <h3 className="text-lg font-semibold md:text-xl mb-2">
                Pavitra Jamadar
              </h3>
              <p className="text-slate-500 group-hover:text-black text-sm md:text-base">
                <ImQuotesLeft className="inline align-top mr-1 group-hover:text-black" />
                AmjTeam is a very Good Platform to explore new things and I got
                a opportunity to learn different Technologies.Team Members are
                very supportive and friendly. Thanks to Abhi M j Sir For
                Motivating us.
                <ImQuotesRight className="inline align-top mr-1 group-hover:text-black" />
              </p>
            </div>
            <div className="group w-[350px] md:w-[500px] h-auto p-4 md:p-5 rounded-lg border border-lightgray shadow-md hover:shadow-xl">
              <h3 className="text-lg font-semibold md:text-xl mb-2">
                Avanthi Sridhar
              </h3>
              <p className="text-slate-500 group-hover:text-black text-sm md:text-base">
                <ImQuotesLeft className="inline align-top mr-1 group-hover:text-black" />
                AmjTeam is the best organisation to work with. I have got lot of
                opportunities to learn about new technologies. This is the best
                place to work as a fresher. Abhishek sir motivates a lot and
                Team members are also very supportive.
                <ImQuotesRight className="inline align-top mr-1 group-hover:text-black" />
              </p>
            </div>
            <div className="group w-[350px] md:w-[500px] h-auto p-4 md:p-5 rounded-lg border border-lightgray shadow-md hover:shadow-xl">
              <h3 className="text-lg font-semibold md:text-xl mb-2">
                Shweta Kumari
              </h3>
              <p className="text-slate-500 group-hover:text-black text-sm md:text-base">
                <ImQuotesLeft className="inline align-top mr-1 group-hover:text-black" />
                As a part of AmjTeam I learned and explored so many things from
                scratch.I got a opportunity to work with different technologies
                here. Team members are very supportive and honest. Thanks to
                Abhi MJ sir who guide us every time.
                <ImQuotesRight className="inline align-top mr-1 group-hover:text-black" />
              </p>
            </div>
            <div className="group w-[350px] md:w-[500px] h-auto p-4 md:p-5 rounded-lg border border-lightgray shadow-md hover:shadow-xl">
              <h3 className="text-lg font-semibold md:text-xl mb-2">
                Kishore Reddy
              </h3>
              <p className="text-slate-500 group-hover:text-black text-sm md:text-base">
                <ImQuotesLeft className="inline align-top mr-1 group-hover:text-black" />
                AmjTeam is the best Organization Where we can get Anything
                Related to IT services and Placements.... Abhi MJ Sir Motivates
                Us a lot through his words
                <ImQuotesRight className="inline align-top mr-1 group-hover:text-black" />
              </p>
            </div>
            <div className="group w-[350px] md:w-[500px] h-auto p-4 md:p-5 rounded-lg border border-lightgray shadow-md hover:shadow-xl">
              <h3 className="text-lg font-semibold md:text-xl mb-2">
                Naveen Bhargav Thota
              </h3>
              <p className="text-slate-500 group-hover:text-black text-sm md:text-base">
                <ImQuotesLeft className="inline align-top mr-1 group-hover:text-black" />
                AmjTeam is a Very Good Platform to learn and Explore new
                things.They Guide us in Each and Every Step. Thanks You Abhi M J
                Sir.
                <ImQuotesRight className="inline align-top mr-1 group-hover:text-black" />
              </p>
            </div>
            <div className="group w-[350px] md:w-[500px] h-auto p-4 md:p-5 rounded-lg border border-lightgray shadow-md hover:shadow-xl">
              <h3 className="text-lg font-semibold md:text-xl mb-2">
                Vinay Chowdhary
              </h3>
              <p className="text-slate-500 group-hover:text-black text-sm md:text-base">
                <ImQuotesLeft className="inline align-top mr-1 group-hover:text-black" />
                I got intenship through amjteam. They really reffered a good
                company for the internship and now i selected for two companies.
                <ImQuotesRight className="inline align-top mr-1 group-hover:text-black" />
              </p>
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
}
