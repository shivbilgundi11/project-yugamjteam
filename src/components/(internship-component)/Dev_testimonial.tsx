import profileIcon from "../../assets/images/user.png";
import femaleProfileIcon from "../../assets/images/woman.png";

export default function Dev_testi() {
  return (
    <section className="pt-20 pb-32 flex flex-wrap justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-10">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-bold">Words from our Mentors!</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              "Meet the champions of innovation, shaping the future with their
              expertise and dedication. Our heroes, tirelessly crafting
              solutions to empower your success."
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-5">
          <div className="w-full shadow-xl border border-lightgray rounded-xl p-6 md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src={profileIcon}
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold mb-2">Abhishek Jeevanagi</h5>
                <p className="mt-1 text-sm text-gray-500 mb-2 uppercase font-semibold">
                  Full Stack Developer
                </p>
                <p className="text-sm text-gray">
                  A transformative journey, offering invaluable insights into
                  teaching. This internship prepares you for a rewarding career
                  in education.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full shadow-xl border border-lightgray rounded-xl p-6 md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="profilePic"
                src={profileIcon}
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold mb-2">Sawan</h5>
                <p className="mt-1 text-sm text-gray-500 mb-2 uppercase font-semibold">
                  Full Stack Developer
                </p>
                <p className="text-sm text-gray">
                  A transformative journey, offering invaluable insights into
                  teaching. This internship prepares you for a rewarding career
                  in education.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full shadow-xl border border-lightgray rounded-xl p-6 md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="profilePic"
                src={profileIcon}
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold mb-2">Kishor</h5>
                <p className="mt-1 text-sm text-gray-500 mb-2 uppercase font-semibold">
                  Backend Developer
                </p>
                <p className="text-sm text-gray">
                  A transformative journey, offering invaluable insights into
                  teaching. This internship prepares you for a rewarding career
                  in education.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full shadow-xl border border-lightgray rounded-xl p-6 md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                className="shadow-lg rounded-full max-w-full mx-auto"
                src={femaleProfileIcon}
                style={{ maxWidth: "120px" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold mb-2">Muskaan</h5>
                <p className="mt-1 text-sm text-gray-500 mb-2 uppercase font-semibold">
                  Full Stack Developer
                </p>
                <p className="text-sm text-gray">
                  A transformative journey, offering invaluable insights into
                  teaching. This internship prepares you for a rewarding career
                  in education.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full shadow-xl border border-lightgray rounded-xl p-6 md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src={profileIcon}
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold mb-2">Chandrashekhar</h5>
                <p className="mt-1 text-sm text-gray-500 mb-2 uppercase font-semibold">
                  Soft Skills Trainer
                </p>
                <p className="text-sm text-gray">
                  A transformative journey, offering invaluable insights into
                  teaching. This internship prepares you for a rewarding career
                  in education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
