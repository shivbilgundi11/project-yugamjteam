import { GoDotFill } from 'react-icons/go';
import HRSolBlogBanner from '../../assets/images/hrblog.jpg';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const HRSolBlog = () => {
  return (
    <>
      <main className='w-full h-auto'>
        <div className='w-full h-full container mx-auto mt-20 md:mt-16 lg:mt-0 py-8 md:py-14 lg:py-28 overflow-hidden'>
          <section className='w-full h-full relative lg:w-[100%] lg:mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-5'>
            <div className='group w-full h-full lg:col-span-3 flex flex-col gap-y-3 md:gap-y-6 border-b mb-9 border-lightgray lg:border-none lg:mb-0'>
              <div className='w-full h-auto aspect-video rounded-2xl overflow-hidden'>
                <img
                  src={HRSolBlogBanner}
                  alt='BlogBanner'
                  className='group-hover:scale-105 transition-all duration-300 ease-in-out'
                />
              </div>

              <div className='w-full h-auto flex items-center justify-start gap-x-4 mb-1'>
                <h3 className='px-3 py-1 bg-orange-100 text-sm text-orange-700 rounded-lg w-max'>
                  HR Solutions
                </h3>
                <p className='text-gray text-xs'>Feb 6, 2023</p>
                <p className='text-gray text-xs inline-flex items-center gap-x-1'>
                  <GoDotFill /> 10 min read
                </p>
              </div>

              <h1 className='text-lg font-semibold md:text-xl lg:text-3xl lg:font-bold'>
                Unlocking Business Potential: The Power of HR Solutions by
                YugAmjTeam
              </h1>

              {/* Blog-Content */}
              <div className='w-full h-auto flex flex-col gap-y-4 md:gap-y-6'>
                <p>
                  In the fast-paced world of business, one thing remains
                  constant: people are at the heart of every organization's
                  success. At YugAmjTeam, we understand the importance of
                  nurturing talent, fostering engagement, and empowering growth.
                  That's why we're dedicated to providing innovative HR
                  solutions tailored to meet the unique needs of businesses like
                  yours. In this blog post, we'll take a closer look at how our
                  HR solutions can help unlock your company's full potential and
                  drive sustainable growth.
                </p>

                <h3 className='font-bold text-lg lg:text-xl'>
                  Building Winning Teams
                </h3>

                <p>
                  Finding the right people for your team can be a daunting task.
                  That's where our HR solutions come in. We take the guesswork
                  out of talent acquisition by leveraging advanced recruitment
                  strategies to identify and attract top candidates who are the
                  perfect fit for your organization. From screening and
                  selection to onboarding, we're with you every step of the way,
                  ensuring that you have the talent you need to succeed.
                </p>

                <h3 className='font-bold text-lg lg:text-xl'>
                  Creating a Culture of Engagement
                </h3>

                <p>
                  Engaged employees are the backbone of any successful
                  organization. That's why we prioritize employee engagement in
                  our HR solutions. Through comprehensive training programs,
                  performance evaluations, and recognition initiatives, we help
                  create a positive work environment where employees feel
                  valued, motivated, and empowered to do their best work.
                  Because when your employees thrive, your business thrives.
                </p>

                <h3 className='font-bold text-lg lg:text-xl'>
                  Driving Performance Excellence
                </h3>

                <p>
                  Performance management is about more than just evaluating
                  employee performance—it's about setting goals, providing
                  feedback, and fostering continuous improvement. Our HR
                  solutions include robust performance management tools and
                  processes designed to help you align individual goals with
                  organizational objectives, identify areas for growth, and
                  provide meaningful development opportunities. With our
                  support, you can unleash the full potential of your workforce
                  and achieve your strategic goals.
                </p>

                <h3 className='font-bold text-lg lg:text-xl'>
                  Investing in Lifelong Learning
                </h3>

                <p>
                  In today's rapidly changing business landscape, continuous
                  learning is essential for staying ahead of the curve. That's
                  why we offer a range of learning and development initiatives
                  as part of our HR solutions. Whether it's through training
                  programs, skill assessments, or career development planning,
                  we're committed to helping your employees build the skills
                  they need to succeed today and in the future. Because when
                  your employees grow, your business grows.
                </p>

                <h3 className='font-bold text-lg lg:text-xl'>
                  Navigating Compliance with Confidence
                </h3>

                <p>
                  Staying compliant with ever-changing HR regulations can be a
                  challenge. That's where our HR solutions come in. We provide
                  comprehensive compliance management systems and risk
                  mitigation strategies to help you navigate the complex world
                  of HR regulations with confidence. With our support, you can
                  minimize legal risks, protect your reputation, and focus on
                  what you do best—running your business.
                </p>
                <h3 className='font-bold text-lg lg:text-xl'>
                  Conclusion: Partnering for Success
                </h3>

                <p>
                  In conclusion, HR solutions provided by YugAmjTeam are more
                  than just tools—they're a strategic partnership designed to
                  help your business thrive. Whether it's building winning
                  teams, fostering engagement, driving performance excellence,
                  investing in lifelong learning, or navigating compliance,
                  we're here to support you every step of the way. Because when
                  you succeed, we succeed. Let's unlock your business potential
                  together.
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
                    <Link
                      to={
                        '/blogs/technologies-and-it-solutions:-empowering-businesses-in-the-digital-age'
                      }
                      className='group-hover:translate-x-2 transition-all duration-300 ease-in-out text-light-black group-hover:text-black'
                    >
                      Technologies and IT Solutions: Empowering Businesses in
                      the Digital Age
                    </Link>
                  </div>
                  <div className='w-full group inline-flex items-center gap-x-1 text-base md:text-lg cursor-pointer py-4 border-b border-lightgray'>
                    <IoIosArrowForward className='font-bold' />{' '}
                    <Link
                      to={
                        '/blogs/unlocking-career-opportunities:-the-power-of-internships-and-placement-success'
                      }
                      className='group-hover:translate-x-2 transition-all duration-300 ease-in-out text-light-black group-hover:text-black'
                    >
                      Unlocking Career Opportunities: The Power of Internships
                      and Placement Success
                    </Link>
                  </div>
                  <div className='w-full group inline-flex items-center gap-x-1 text-base md:text-lg cursor-pointer py-4 border-b border-lightgray'>
                    <IoIosArrowForward className='font-bold' />{' '}
                    <Link
                      to={
                        '/blogs/understanding-email-marketing-and-its-importance-for-businesses'
                      }
                      className='group-hover:translate-x-2 transition-all duration-300 ease-in-out text-light-black group-hover:text-black'
                    >
                      Understanding Email Marketing and Its Importance for
                      Businesses
                    </Link>
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

export default HRSolBlog;
