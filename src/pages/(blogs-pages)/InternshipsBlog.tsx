import { GoDotFill } from 'react-icons/go';
import InternshipsBanner from '../../assets/images/internshipsBlog.jpg';
import { IoIosArrowForward } from 'react-icons/io';
import PlacementSuccess1 from '../../assets/images/placementSuccess1.jpeg';
import PlacementSuccess2 from '../../assets/images/placementSuccess2.jpeg';
import PlacementSuccess3 from '../../assets/images/placementSuccess3.jpeg';
import PlacementSuccess4 from '../../assets/images/placementSuccess4.jpeg';
import Placement from '../../assets/images/placement.jpg';

const InternshipsBlog = () => {
  return (
    <>
      <main className='w-full h-auto'>
        <div className='w-full h-full container mx-auto mt-20 md:mt-16 lg:mt-0 py-8 md:py-14 lg:py-28 overflow-hidden'>
          <section className='w-full h-full relative lg:w-[80%] lg:mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-16'>
            <div className='group w-full h-full lg:col-span-3 flex flex-col gap-y-3 md:gap-y-6 border-b mb-9 border-lightgray lg:border-none lg:mb-0'>
              <div className='w-full h-auto aspect-video rounded-2xl overflow-hidden'>
                <img
                  src={InternshipsBanner}
                  alt='BlogBanner'
                  className='group-hover:scale-105 transition-all duration-300 ease-in-out'
                />
              </div>

              <div className='w-full h-auto flex items-center justify-start gap-x-4 mb-1'>
                <h3 className='px-3 py-1 bg-orange-100 text-sm text-orange-700 rounded-lg w-max'>
                  Internships
                </h3>
                <p className='text-gray text-xs'>January 3, 2024</p>
                <p className='text-gray text-xs inline-flex items-center gap-x-1'>
                  <GoDotFill /> 15 min read
                </p>
              </div>

              <h1 className='text-lg font-semibold md:text-xl lg:text-3xl lg:font-bold'>
                Unlocking Career Opportunities: The Power of Internships and
                Placement Success
              </h1>

              {/* Blog-Content */}
              <div className='w-full h-auto flex flex-col gap-y-4 md:gap-y-6'>
                <p>
                  In today's competitive job market, gaining practical
                  experience and securing placement opportunities are essential
                  steps in launching a successful career. Internships play a
                  crucial role in bridging the gap between academic learning and
                  real-world application, providing students with invaluable
                  hands-on experience and industry exposure. In this blog post,
                  we'll explore the importance of internships, the role they
                  play in shaping career trajectories, and how our company is
                  dedicated to helping students grow their careers through
                  meaningful internship experiences and successful placements.
                </p>

                <h3 className='font-bold text-lg lg:text-xl'>
                  Why Internships Matter
                </h3>

                <p>
                  Internships offer students a unique opportunity to apply
                  theoretical knowledge in a real-world setting, gaining
                  practical skills, industry insights, and professional networks
                  along the way. Here are some key reasons why internships are
                  important:
                </p>

                <div className='w-full h-auto flex gap-x-4 ml-4'>
                  <span className='font-bold text-base md:text-[18px]'>1.</span>
                  <div>
                    <h5 className='font-bold text-base md:text-[18px] mb-2'>
                      Hands-On Experience:
                    </h5>

                    <p>
                      Internships allow students to gain hands-on experience in
                      their chosen field, helping them develop practical skills
                      and competencies that are highly valued by employers.
                    </p>
                  </div>
                </div>
                <div className='w-full h-auto flex gap-x-4 ml-4'>
                  <span className='font-bold text-base md:text-[18px]'>2.</span>
                  <div>
                    <h5 className='font-bold text-base md:text-[18px] mb-2'>
                      Industry Exposure:
                    </h5>

                    <p>
                      Internships provide students with exposure to different
                      industries, company cultures, and job roles, helping them
                      make informed career decisions and explore their
                      interests.
                    </p>
                  </div>
                </div>
                <div className='w-full h-auto flex gap-x-4 ml-4'>
                  <span className='font-bold text-base md:text-[18px]'>3.</span>
                  <div>
                    <h5 className='font-bold text-base md:text-[18px] mb-2'>
                      Professional Development:
                    </h5>

                    <p>
                      Internships offer opportunities for professional growth
                      and development, allowing students to learn from
                      experienced professionals, receive mentorship, and expand
                      their professional networks.
                    </p>
                  </div>
                </div>
                <div className='w-full h-auto flex gap-x-4 ml-4'>
                  <span className='font-bold text-base md:text-[18px]'>4.</span>
                  <div>
                    <h5 className='font-bold text-base md:text-[18px] mb-2'>
                      Resume Building:
                    </h5>

                    <p>
                      Internships enhance students' resumes, making them more
                      competitive in the job market and increasing their chances
                      of securing full-time employment upon graduation.
                    </p>
                  </div>
                </div>

                <h3 className='font-bold text-lg lg:text-xl'>
                  How Our Company Helps Students Grow Their Careers
                </h3>

                <p>
                  At YugAmjTeam, we are committed to empowering students and
                  helping them unlock their full potential. Through our
                  internship programs, we provide students with the opportunity
                  to gain hands-on experience, develop industry-relevant skills,
                  and kickstart their careers. Here's how we support students in
                  their career journey:
                </p>

                <div className='w-full h-auto flex gap-x-4 ml-4'>
                  <span className='font-bold text-base md:text-[18px]'>1.</span>
                  <div>
                    <h5 className='font-bold text-base md:text-[18px] mb-2'>
                      Structured Internship Programs:
                    </h5>

                    <p>
                      We offer structured internship programs designed to
                      provide students with meaningful work experiences and
                      exposure to our industry-leading practices and
                      technologies.
                    </p>
                  </div>
                </div>
                <div className='w-full h-auto flex gap-x-4 ml-4'>
                  <span className='font-bold text-base md:text-[18px]'>2.</span>
                  <div>
                    <h5 className='font-bold text-base md:text-[18px] mb-2'>
                      Mentorship and Support:
                    </h5>

                    <p>
                      Our interns receive mentorship and guidance from
                      experienced professionals who are dedicated to helping
                      them succeed. We believe in the power of mentorship to
                      inspire, guide, and empower the next generation of talent.
                    </p>
                  </div>
                </div>
                <div className='w-full h-auto flex gap-x-4 ml-4'>
                  <span className='font-bold text-base md:text-[18px]'>3.</span>
                  <div>
                    <h5 className='font-bold text-base md:text-[18px] mb-2'>
                      Professional Development Opportunities:
                    </h5>

                    <p>
                      In addition to on-the-job training, we provide interns
                      with access to professional development opportunities,
                      including workshops, seminars, and networking events, to
                      help them enhance their skills and expand their horizons.
                    </p>
                  </div>
                </div>
                <div className='w-full h-auto flex gap-x-4 ml-4'>
                  <span className='font-bold text-base md:text-[18px]'>4.</span>
                  <div>
                    <h5 className='font-bold text-base md:text-[18px] mb-2'>
                      Placement Assistance:
                    </h5>

                    <p>
                      We are proud of our track record of placing interns in top
                      companies across various industries. Through our extensive
                      network and industry connections, we help students secure
                      rewarding placement opportunities that align with their
                      career goals and aspirations.
                    </p>
                  </div>
                </div>

                <h3 className='font-bold text-lg lg:text-xl'>
                  Celebrating Placement Success
                </h3>

                <div className='w-full lg:w-[90%] mb-6 lg:mx-auto h-auto grid grid-cols-2 grid-rows-2 gap-4'>
                  <div className='group w-full h-auto aspect-square rounded-xl overflow-hidden border border-lightgray shadow-lg'>
                    <img
                      src={PlacementSuccess1}
                      alt='PlacementSuccess1'
                      className='w-full block object-center object-cover hover:scale-105 transition-all duration-300 ease-in-out'
                    />
                  </div>
                  <div className='group w-full h-auto aspect-square rounded-xl overflow-hidden border border-lightgray shadow-lg'>
                    <img
                      src={PlacementSuccess2}
                      alt='PlacementSuccess1'
                      className='w-full block object-center object-cover hover:scale-105 transition-all duration-300 ease-in-out'
                    />
                  </div>
                  <div className='group w-full h-auto aspect-square rounded-xl overflow-hidden border border-lightgray shadow-lg'>
                    <img
                      src={PlacementSuccess3}
                      alt='PlacementSuccess1'
                      className='w-full block object-center object-cover hover:scale-105 transition-all duration-300 ease-in-out'
                    />
                  </div>
                  <div className='group w-full h-auto aspect-square rounded-xl overflow-hidden border border-lightgray shadow-lg'>
                    <img
                      src={PlacementSuccess4}
                      alt='PlacementSuccess1'
                      className='w-full block object-center object-cover hover:scale-105 transition-all duration-300 ease-in-out'
                    />
                  </div>
                </div>

                <div className='w-full h-auto aspect-video rounded-2xl overflow-hidden'>
                  <img
                    src={Placement}
                    alt='BlogBanner'
                    className='hover:scale-105 transition-all duration-300 ease-in-out'
                  />
                </div>

                <p>
                  We take pride in the success of our interns and celebrate
                  their achievements as they embark on their professional
                  journeys. Many of our interns have gone on to secure full-time
                  positions at prestigious companies, furthering their careers
                  and making significant contributions to their respective
                  fields. Here are some stories of placement success from our
                  talented interns:
                </p>

                <h3 className='font-bold text-lg lg:text-xl'>
                  Crafting a Strategic Approach to Digital Transformation
                </h3>

                <p>
                  In the era of digital disruption, success hinges not only on
                  technological prowess but also on strategic foresight,
                  organizational agility, and a culture of innovation.
                  Businesses must adopt a holistic approach to digital
                  transformation, one that encompasses not only the adoption of
                  advanced technologies but also the cultivation of digital
                  capabilities across the entire organization. This entails
                  fostering a culture of experimentation and continuous
                  learning, nurturing cross-functional collaboration, and
                  empowering employees with the skills and tools needed to
                  thrive in a rapidly evolving digital landscape.
                </p>

                <h3 className='font-bold text-lg lg:text-xl'>
                  Conclusion: Embracing the Digital Imperative
                </h3>

                <p>
                  In conclusion, technologies and IT solutions have emerged as
                  indispensable enablers of business success in the digital age.
                  By embracing a strategic approach to technology adoption,
                  businesses can unlock new opportunities, drive operational
                  efficiency, and deliver exceptional value to customers.
                  Whether through the adoption of cloud-based infrastructure,
                  the deployment of AI-driven analytics, or the integration of
                  blockchain solutions, businesses have the potential to chart a
                  course towards sustained growth, resilience, and competitive
                  advantage in an increasingly digital world.
                </p>
              </div>
            </div>
            {/* -------------SideBar-With-More-Blogs_Suggestion------------- */}
            <aside className='-full h-max relative mt-9 lg:mt-0'>
              <div className='lg:fixed lg:top-10% lg:border-l lg:pl-8 border-slate-400'>
                <h1 className='text-lg md:text-xl font-bold mb-4'>
                  Recent posts
                </h1>

                <div className='w-full h-auto flex flex-col'>
                  <div className='w-full group inline-flex items-center gap-x-1 text-base md:text-lg cursor-pointer py-4 border-b border-lightgray'>
                    <IoIosArrowForward className='font-bold' />{' '}
                    <p className='group-hover:translate-x-2 transition-all duration-300 ease-in-out text-light-black group-hover:text-black'>
                      Intership Program Awareness
                    </p>
                  </div>
                  <div className='w-full group inline-flex items-center gap-x-1 text-base md:text-lg cursor-pointer py-4 border-b border-lightgray'>
                    <IoIosArrowForward className='font-bold' />{' '}
                    <p className='group-hover:translate-x-2 transition-all duration-300 ease-in-out text-light-black group-hover:text-black'>
                      Hiring success
                    </p>
                  </div>
                  <div className='w-full group inline-flex items-center gap-x-1 text-base md:text-lg cursor-pointer py-4 border-b border-lightgray'>
                    <IoIosArrowForward className='font-bold' />{' '}
                    <p className='group-hover:translate-x-2 transition-all duration-300 ease-in-out text-light-black group-hover:text-black'>
                      Technologies Awareness
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>
    </>
  );
};

export default InternshipsBlog;
