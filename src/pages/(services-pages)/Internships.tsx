import Dev_testi from "../../components/(internship-component)/Dev_testimonial";
import HeroInternship from "../../components/(internship-component)/HeroInternship";
import Intern_testi from "../../components/(internship-component)/Intern_testimonials";
import TypesOfInternship from "../../components/(internship-component)/TypesOfInternship";
import BenefitsCards from "../../components/(internship-component)/WhyUsBeneifitcards";

export default function Internships() {
  return (
    <div className="container mx-auto p-4">
        <HeroInternship />
        <h2 className="text-4xl flex justify-center "> Why choose us</h2>
        <BenefitsCards />
        <TypesOfInternship />
        <Dev_testi />
        <Intern_testi />
      </div>
  );
}
