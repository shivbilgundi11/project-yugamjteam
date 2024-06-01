export default function JobOpenings() {
  return (
    <>
      <section className="w-full h-auto bg-shadow-gray">
        <div className="container mx-auto p-4 py-8 md:py-10 lg:py-16">
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

          {/* Adjusted container to use flex-wrap and center alignment */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-8">
            {/* Example Card Structure - Repeat for each job opening */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
              <div className="w-full h-64 p-6 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-lightgray">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1688/1688502.png"
                    alt="profileimg"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <p className="text-lg md:text-xl font-semibold">
                    Full Stack Developer
                  </p>
                  <button className="mt-2 text-sm py-1 px-4 border border-lightgray rounded-md">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
              <div className="w-full h-64 p-6 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-lightgray">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/7439/7439276.png"
                    alt="profileimg"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <p className="text-lg md:text-xl font-semibold">Trainer</p>
                  <button className="mt-2 text-sm py-1 px-4 border border-lightgray rounded-md">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
              <div className="w-full h-64 p-6 bg-white rounded-lg hover:shadow-xl flex items-center justify-center flex-col gap-y-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-lightgray">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/7439/7439276.png"
                    alt="profileimg"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center">
                  <p className="text-lg md:text-xl font-semibold">Freelancer</p>
                  <button className="mt-2 text-sm py-1 px-4 border border-lightgray rounded-md">
                    Apply
                  </button>
                </div>
              </div>
            </div>
            {/* Repeat the above block for each job opening, adjusting the image source and job title as necessary */}
          </div>
        </div>
      </section>
    </>
  );
}
