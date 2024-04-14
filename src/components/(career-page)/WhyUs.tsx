import React from "react";

interface CardProps {
  icon: string; // URL or path to the icon
  title: string;
  description: string;
}

const WhyUs: React.FC = () => {
  const cards: CardProps[] = [
    {
      icon: "/src/assets/images/InternshipImages/WhyUs-BenifitCards/hands-on-experience.gif",
      title: "Innovative Environment",
      description:
        "Join a dynamic and collaborative work environment where innovation is encouraged and ideas are valued.",
    },
    {
      icon: "/src/assets/images/InternshipImages/WhyUs-BenifitCards/mentorship.gif",
      title: "Career Growth",
      description:
        "Take your career to new heights with opportunities for learning, growth, and professional development.      ",
    },
    {
      icon: "/src/assets/images/InternshipImages/WhyUs-BenifitCards/industry-exposure.gif",
      title: "Impactful Work",
      description:
        " Be part of projects that have a meaningful impact on our clients, communities, and society as a whole.",
    },
    {
      icon: "/src/assets/images/InternshipImages/WhyUs-BenifitCards/certificate.png",
      title: "Diverse Team",
      description:
        " Join a diverse and inclusive team that values different perspectives, experiences, and backgrounds.",
    },
    {
      icon: "/src/assets/images/InternshipImages/WhyUs-BenifitCards/duration.png",
      title: "Employee Benefits",
      description:
        "Enjoy competitive compensation, comprehensive benefits, and perks designed to support your overall well-being and work-life balance.      ",
    },
    {
      icon: "/src/assets/images/InternshipImages/WhyUs-BenifitCards/duration.png",
      title: "Flexible Work Modes",
      description:
        "We offer flexible work modes to accommodate your needs and preferences.",
    },
  ];

  return (
    <div className="flex flex-col pb-10 items-center">
      <h2 className="text-4xl pt-16 font-bold mb-8">Why Choose Us</h2>
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
    </div>
  );
};

export default WhyUs;
