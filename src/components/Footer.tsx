import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import Logo from "../assets/images/logo.png";

export default function Footer() {
  const navigate = useNavigate();

  const scrollToServices = () => {
    navigate("/");
    setTimeout(() => {
      const servicesSection = document.getElementById("services__section");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to ensure the page has navigated
  };
  return (
    <footer className="w-full h-auto p-4 lg:p-0 darkBlueBg text-white rounded-t-[18px]">
      <div className="w-full h-full container mx-auto p-6 sm:p-3 md:p-6 lg:py-16 grid grid-cols-1 gap-y-12 md:gap-y-8 lg:gap-y-10">
        {/* ------Logo-&-Socials------ */}
        <div className="w-full h-auto flex items-center justify-center gap-3 md:gap-5 lg:gap-7 flex-wrap">
          <div className="border-r border-gray pr-3 lg:pr-5">
            <Link to={"/"} className="">
              <img
                src={Logo}
                alt="logo"
                className="w-[100px] md:w-[140px] align-middle"
              />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-x-5">
            <a
              href="https://www.linkedin.com/company/yugamjteam-technologies-pvt-ltd/mycompany/"
              target="blank"
              className="text-lg md:text-xl text-blue hover:text-slate-600"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/amjteam_._/"
              target="blank"
              className="text-lg md:text-xl text-red hover:text-slate-600"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-lg md:text-xl text-slate-600 hover:text-slate-600"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="text-lg md:text-xl text-blue hover:text-slate-600"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="w-full h-auto flex items-center justify-center gap-3 md:gap-5 lg:gap-6 flex-wrap">
          <Button
            text="+91 9663193035"
            className="p-0 md:p-0 lg:p-0 px-2 md:px-2 lg:px-2 after:text-lg lg:text-[22px]"
            spanStyles="lg:text-[22px]"
            variant="secondary"
          />
          <Button
            text="abhi@amjteam.com"
            className="p-0 md:p-0 lg:p-0 px-2 md:px-2 lg:px-2 after:text-lg lg:text-[22px]"
            spanStyles="lg:text-[22px]"
            variant="secondary"
          />
        </div>

        {/* ------Menu------ */}
        <div className="w-full h-auto">
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 md:gap-x-0 lg:gap-x-0">
            <li className="md:px-4 lg:px-8 md:border-r border-gray text-blue hover:text-slate-600 transition-colors duration-200 ease-in hover:underline">
              <Link to={"/"} className="text-center">
                Home
              </Link>
            </li>
            <li className="md:px-4 lg:px-8 md:border-r border-gray text-blue hover:text-slate-600 transition-colors duration-200 ease-in hover:underline">
              <Link to={"/about"} className="text-center">
                About Us
              </Link>
            </li>
            <li className="md:px-4 lg:px-8 md:border-r border-gray text-blue hover:text-slate-600 transition-colors duration-200 ease-in hover:underline">
              <p onClick={scrollToServices} className="text-center">
                Services
              </p>
            </li>
            <li className="md:px-4 lg:px-8 md:border-r border-gray text-blue hover:text-slate-600 transition-colors duration-200 ease-in hover:underline">
              <Link to={"/career"} className="text-center">
                Career
              </Link>
            </li>
            <li className="md:px-4 lg:px-8 md:border-r border-gray text-blue hover:text-slate-600 transition-colors duration-200 ease-in hover:underline">
              <Link to={"/blogs"} className="text-center">
                Blogs
              </Link>
            </li>
            <li className="md:px-4 lg:px-8 text-blue hover:text-slate-600 transition-colors duration-200 ease-in hover:underline">
              <Link to={"/contact"} className="text-center">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* ------About------ */}
        <p className="text-center md:text-lg text-slate-300">
          YugAmjTeam Is Your Tech-Powered Solution Partner, Innovating{" "}
          <br className="hidden md:block" /> Beyond Software.
        </p>

        {/* ------Copyright-Section------ */}
        <div className="w-full h-auto text-slate-500">
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 md:gap-x-0 lg:gap-x-0">
            <li className="md:px-4 md:border-r border-gray">
              <p className="text-center">Copyright © 2024 YugAmjTeam</p>
            </li>
            <li className="md:px-4 md:border-r border-gray">
              <p className="text-center">All Right Reserved</p>
            </li>
            <li className="md:px-4 md:border-r border-gray hover:text-slate-500 transition-colors duration-200 ease-in hover:underline">
              <a href="#" className="hover:text-slate-300">
                Privacy Policy
              </a>
            </li>
            <li className="md:px-4 hover:text-slate-500 transition-colors duration-200 ease-in hover:underline">
              <a href="#" className="hover:text-slate-300">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
