import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');

export default function NavBar() {
  useEffect(() => {
    const navBar = document.querySelectorAll('header');

    const t1 = gsap.timeline({ defaults: { duration: 1 } });

    const delay = 1;

    t1.to(
      navBar,
      {
        y: 0,
        duration: 1.5,
        ease: 'cubic-text',
      },
      delay,
    );
  }, []);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isServicesExpand, setIsServicesExpand] = useState<boolean>(false);

  //Handles the opening and closing of our nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  //Handles the opening and closing of our Services for mobile menu
  const expandServices = () => {
    setIsServicesExpand(!isServicesExpand);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsServicesExpand(false);
    }
  }, [isOpen]);

  const isActivePage = {
    active:
      'relative hover:text-gray tracking-wider after:content-[""] after:w-full after:h-[2px] after:absolute after:left-0 after:bottom-0 after:bg-blue after:rounded-full after:scale-[100%] after:origin-left after:transition-all after:duration-300 hover:after:scale-[100%]',
    inActive:
      'relative hover:text-gray tracking-wider after:content-[""] after:w-full after:h-[2px] after:absolute after:left-0 after:bottom-0 after:bg-blue after:rounded-full after:scale-0 after:origin-left hover:after:scale-[100%] after:transition-all after:duration-300',
  };

  const navLinksStyles = {
    active:
      'relative text-xl text-gray w-max sm:text-2xl font-light hover:text-gray py-1 after:content-[""] after:w-full after:h-[2px] after:absolute after:left-0 after:bottom-0 after:bg-blue after:rounded-full after:scale-[100%] after:origin-left after:transition-all after:duration-300 hover:after:scale-[100%]',
    inActive:
      'relative text-xl w-max sm:text-2xl font-light hover:text-gray py-1 after:content-[""] after:w-full after:h-[2px] after:absolute after:left-0 after:bottom-0 after:bg-blue after:rounded-full after:scale-0 after:origin-left hover:after:scale-[100%] after:transition-all after:duration-300',
  };

  return (
    <header
      className={`w-full h-14 lg:h-16 z-10 fixed top-0 bg-white border border-lightgray flex items-center justify-center p-3 xl:p-0 -translate-y-full`}
    >
      <nav className='w-full h-full container mx-auto flex items-center justify-between'>
        {/* -----LOGO----- */}
        <Link
          to={'/'}
          className='h-full text-2xl text-blue italic font-fira-sans font-semibold inline-flex items-center gap-x-1 mr-auto'
        >
          LOGO
        </Link>

        {/* -----Desktop-Menu----- */}
        <div className='hidden lg:flex items-center gap-x-6'>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive ? isActivePage.active : isActivePage.inActive
            }
          >
            Home
          </NavLink>
          <NavLink
            to={'/about'}
            className={({ isActive }) =>
              isActive ? isActivePage.active : isActivePage.inActive
            }
          >
            About
          </NavLink>

          {/* ------Services Links DropDown------ */}
          <div className='relative group'>
            <span className='h-full inline-flex items-center gap-x-1'>
              <p className={isActivePage.inActive}>Services</p>
              <IoIosArrowDown className='w-4 group-hover:rotate-180 transition-all duration-200 ease-in' />
            </span>
            <div className='absolute w-max bg-white text-black shadow-lg p-4 rounded-md border border-lightgray -left-2 top-6 hidden group-hover:flex flex-col justify-center gap-y-3'>
              <NavLink
                to={'/services/it-solutions'}
                className={({ isActive }) =>
                  isActive ? isActivePage.active : isActivePage.inActive
                }
              >
                IT Solutions
              </NavLink>
              <NavLink
                to={'/services/internships'}
                className={({ isActive }) =>
                  isActive ? isActivePage.active : isActivePage.inActive
                }
              >
                Internships
              </NavLink>
              <NavLink
                to={'/services/digital-marketing'}
                className={({ isActive }) =>
                  isActive ? isActivePage.active : isActivePage.inActive
                }
              >
                Digital Marketing
              </NavLink>
              <NavLink
                to={'/services/hr-solutions'}
                className={({ isActive }) =>
                  isActive ? isActivePage.active : isActivePage.inActive
                }
              >
                HR Solutions
              </NavLink>
            </div>
          </div>
          <NavLink
            to={'/contact'}
            className={({ isActive }) =>
              isActive ? isActivePage.active : isActivePage.inActive
            }
          >
            Contact
          </NavLink>
          <NavLink
            to={'/blogs'}
            className={({ isActive }) =>
              isActive ? isActivePage.active : isActivePage.inActive
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to={'/career'}
            className={({ isActive }) =>
              isActive ? isActivePage.active : isActivePage.inActive
            }
          >
            Career
          </NavLink>
        </div>

        <div className='self-center place-self-end'>
          {/* ------Mobile-Menu-Overlay------ */}
          <div
            className={`w-full h-[100vh] lg:hidden ${
              isOpen ? 'opacity-100 block' : 'opacity-0 hidden'
            } overlay absolute top-0 left-0 right-0 bottom-0 transition-all duration-500 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]`}
            onClick={handleClick}
          ></div>

          {/* ------Mobile-Menu------ */}
          <div
            className={`w-[75%] sm:w-[60%] p-10 sm:p-20 h-[100vh] lg:hidden bg-white text-black shadow-2xl absolute right-0 top-0 z-[19] transition-all duration-500 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* ------Mobile-Menu-Toggle-Btn------ */}
            <button
              onClick={handleClick}
              className='flex flex-col justify-center items-center lg:hidden absolute top-6 right-10 p-3 rounded-full hover:text-white group'
            >
              <span
                className={`
            bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm group-hover:opacity-50 ${
                      isOpen
                        ? 'rotate-45 translate-y-0.5'
                        : '-translate-y-2 bg-black'
                    }
            `}
              ></span>
              <span
                className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm group-hover:opacity-50 ${
                      isOpen
                        ? '-rotate-45 translate-y-0'
                        : 'translate-y-0 bg-black'
                    }`}
              ></span>
            </button>
            <div className='w-full h-full flex flex-col items-start justify-between'>
              {/* ---Links--- */}
              <div className='w-full flex flex-col items-start gap-y-4'>
                <p className='text-sm text-gray tracking-normal'>Menu</p>

                <div className='w-full h-full flex flex-col gap-y-3'>
                  <NavLink
                    to={'/'}
                    className={({ isActive }) =>
                      isActive ? navLinksStyles.active : navLinksStyles.inActive
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={'/about'}
                    className={({ isActive }) =>
                      isActive ? navLinksStyles.active : navLinksStyles.inActive
                    }
                  >
                    About
                  </NavLink>
                  <div className='w-full h-auto overflow-hidden'>
                    <div className='w-full flex justify-between items-center'>
                      <p className={navLinksStyles.inActive}>Services</p>

                      <button
                        className='group p-2 border rounded-full border-black hover:border-gray'
                        onClick={expandServices}
                      >
                        <IoIosArrowDown
                          className={`text-black group-hover:text-gray transition-all duration-300 ease-in-out ${
                            isServicesExpand ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      </button>
                    </div>

                    {/* ---More-Services--- */}
                    <div
                      className={`grid ml-3 transition-all duration-200 ease-in-out overflow-hidden ${
                        isServicesExpand
                          ? 'mt-2 grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className='flex flex-col gap-y-2 overflow-hidden'>
                        <NavLink
                          to={'/services/it-solutions'}
                          className='text-md tracking-wide text-gray hover:text-black'
                        >
                          IT Solutions
                        </NavLink>
                        <NavLink
                          to={'/services/internships'}
                          className=' tracking-wide text-gray hover:text-black'
                        >
                          Internships
                        </NavLink>
                        <NavLink
                          to={'/services/hr-solutions'}
                          className='tracking-wide text-gray hover:text-black'
                        >
                          HR Solutions
                        </NavLink>
                        <NavLink
                          to={'/services/digital-marketing'}
                          className='tracking-wide text-gray hover:text-black'
                        >
                          Digital Marketing
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <NavLink
                    to={'/contact'}
                    className={({ isActive }) =>
                      isActive ? navLinksStyles.active : navLinksStyles.inActive
                    }
                  >
                    Contact
                  </NavLink>
                  <NavLink
                    to={'/blogs'}
                    className={({ isActive }) =>
                      isActive ? navLinksStyles.active : navLinksStyles.inActive
                    }
                  >
                    Blogs
                  </NavLink>
                  <NavLink
                    to={'/career'}
                    className={({ isActive }) =>
                      isActive ? navLinksStyles.active : navLinksStyles.inActive
                    }
                  >
                    Career
                  </NavLink>
                </div>
              </div>

              {/* ---Email--- */}
              <div className='flex flex-col items-start gap-y-2'>
                <p className='text-light font-normal text-md'>Get in touch</p>

                <p className='border-b border-lightBorder py-1 hover:border-black'>
                  abcd@xyz.com
                </p>
              </div>
            </div>
          </div>

          {/* ------Mobile-Menu-Toggle-Btn------ */}
          <button
            onClick={handleClick}
            className='flex flex-col justify-center items-center lg:hidden z-[20] p-3 rounded-full hover:text-white group'
          >
            <span
              className={`
            bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm group-hover:opacity-50 ${
                      isOpen
                        ? 'rotate-45 translate-y-0.5'
                        : '-translate-y-2 bg-black'
                    }
            `}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm group-hover:opacity-50 ${
                      isOpen
                        ? '-rotate-45 translate-y-0'
                        : 'translate-y-0 bg-black'
                    }`}
            ></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
