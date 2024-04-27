import React from "react";

interface CardProps {
  icon: string; // URL or path to the icon
  title: string;
  description: string;
}

const BenefitsCards: React.FC = () => {
  const cards: CardProps[] = [
    {
      icon: "https://cdn-icons-gif.flaticon.com/14255/14255792.gif",
      // "https://cdn-icons-png.flaticon.com/128/1509/1509606.png",
      // "https://cdn-icons-png.flaticon.com/128/3494/3494271.png",
      // "/src/assets/images/InternshipImages/WhyUs-BenifitCards/png/vlogger.png",
      title: "Hands-on Experience",
      description:
        "Gain practical experience working on real-world projects and initiatives.",
    },
    {
      icon: "https://cdn-icons-gif.flaticon.com/15374/15374732.gif",
      // "/src/assets/images/InternshipImages/WhyUs-BenifitCards/png/mentorship.png",
      title: "Mentorship",
      description:
        "Receive guidance and support from experienced professionals in your field.",
    },
    {
      icon: "https://cdn-icons-gif.flaticon.com/15332/15332452.gif",
      // "/src/assets/images/InternshipImages/WhyUs-BenifitCards/gif/industry-exposure.gif",
      title: "Industry Exposure",
      description:
        "Get a firsthand look at how industries operate and gain insight into career pathways.",
    },
    {
      icon: "https://cdn-icons-gif.flaticon.com/12035/12035119.gif",
      // "/src/assets/images/InternshipImages/WhyUs-BenifitCards/gif/certificate.gif",
      title: "Certification",
      description:
        "Upon successful completion of the internship program, receive a certificate recognizing your achievements and contributions.",
    },
    {
      icon: "https://cdn-icons-gif.flaticon.com/13374/13374341.gif", 
      // "/src/assets/images/InternshipImages/WhyUs-BenifitCards/gif//time.gif",
      title: "Duration and Timing",
      description:
        "The duration and timing of our internships vary based on industry constraints and project requirements and may range from a few weeks to several months, and opportunities may be available year-round",
    },
    {
      icon: "https://cdn-icons-gif.flaticon.com/15401/15401345.gif",
      // "/src/assets/images/InternshipImages/WhyUs-BenifitCards/gif//requ.gif",
      title: "Requirements",
      description:
        "We welcome applications from graduates of all backgrounds and disciplines. We prioritize candidates who are motivated, eager to learn, and passionate about making a positive impact.",
    },
  ];

  return (
    <>
      <h2 className="text-4xl flex justify-center pt-16 items-center">
        Why choose us!!
      </h2>
      {/* <div className="text-4xl flex justify-center">
        <p>why choose us</p>
      </div> */}
      <div className="flex flex-wrap justify-center mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-4 p-4 border-2 border-transparent duration-400 ease-in-out rounded-lg shadow-lg hover:shadow-2xl transition-all"
            // className="w-80 h-90 m-4 p-4 border-2 border-transparent duration-400 ease-in-out rounded-lg shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src={card.icon}
              alt={card.title}
              className="w-fit h-32 mx-auto object-cover"
              // className="w-full h-32 mx-auto object-cover"
            />
            <h3 className="text-blue text-xl text-center mt-4">{card.title}</h3>
            <p className="text-black text-center mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BenefitsCards;
