import React from "react";

interface CardProps {
  icon: string; // URL or path to the icon
  title: string;
  description: string;
}

const BenefitsCards: React.FC = () => {
  const cards: CardProps[] = [
    {
      icon: "/src/assets/images/InternshipImages/WhyUs-BenifitCards/hands-on-experience.gif",
      title: "Hands-on Experience",
      description:
        "Gain practical experience working on real-world projects and initiatives.",
    },
    {
      icon: "/src/assets/images/InternshipImages/WhyUs-BenifitCards/mentorship.gif",
      title: "Mentorship",
      description:
        "Receive guidance and support from experienced professionals in your field.",
    },
    {
      icon: "/src/assets/images/InternshipImages/WhyUs-BenifitCards/industry-exposure.gif",
      title: "Industry Exposure",
      description:
        "Get a firsthand look at how industries operate and gain insight into career pathways.",
    },
    {
      icon: "/src/assets/images/InternshipImages/WhyUs-BenifitCards/certificate.png",
      title: "Certification",
      description:
        "Upon successful completion of the internship program, receive a certificate recognizing your achievements and contributions.",
    },
    {
      icon: "/src/assets/images/InternshipImages/WhyUs-BenifitCards/duration.png",
      title: "Duration and Timing",
      description:
        "The duration and timing of our internships vary based on industry constraints and project requirements and may range from a few weeks to several months, and opportunities may be available year-round",
    },
    {
      icon: "/src/assets/images/InternshipImages/WhyUs-BenifitCards/requirement.png",
      title: "Requirements",
      description:
        "We welcome applications from graduates of all backgrounds and disciplines. We prioritize candidates who are motivated, eager to learn, and passionate about making a positive impact.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-80 h-90 m-4 p-4 border-2 border-transparent duration-400 ease-in-out rounded-lg shadow-lg hover:shadow-2xl transition-all"
        >
          <img
            src={card.icon}
            alt={card.title}
            className="w-fit h-32 mx-auto object-cover"
          />
          <h3 className="text-blue text-xl text-center mt-4">{card.title}</h3>
          <p className="text-black text-center mt-2">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BenefitsCards;
