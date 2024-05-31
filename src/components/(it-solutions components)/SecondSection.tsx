import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  featurePoints: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  featurePoints,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      className="mb-6  bg-white shadow-md hover:shadow-lg rounded-lg p-6 w-full "
    >
      <div className="mb-4 ">
        <h2 className="text-2xl  font-lora font-bold text-blue">{title}</h2>
        <p className=" text-lg mt-2">{description}</p>
      </div>
      <ul className="list-disc ml-6">
        {featurePoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const LeftImageSection: React.FC<{ imageSrc: string }> = ({ imageSrc }) => {
  return (
    <div className="w-full md:w-1/2 flex items-center justify-center  ">
      <img
        src={imageSrc}
        alt="Left Section Image"
        className="max-w-auto h-auto"
      />
    </div>
  );
};

const RightCardsSection: React.FC<{ cards: FeatureCardProps[] }> = ({
  cards,
}) => {
  return (
    <div className="pb-4 w-full md:w-full lg:w-1/2 md:flex justify-between gap-6 ">
      <div className="md:w-1/2 flex flex-col ">
        {cards.slice(0, 2).map((card, index) => (
          <FeatureCard
            key={index}
            title={card.title}
            description={card.description}
            featurePoints={card.featurePoints}
          />
        ))}
      </div>
      <div className="md:w-1/2 flex flex-col ">
        {cards.slice(2, 4).map((card, index) => (
          <FeatureCard
            key={index}
            title={card.title}
            description={card.description}
            featurePoints={card.featurePoints}
          />
        ))}
      </div>
    </div>
  );
};

// card next section
interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  details: string;
}

const ServiceCard: React.FC<ServiceCard> = ({ title, details, icon }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
        <div className="mb-4 rounded-[20px] bg-lightblue p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-4 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-8 text-2xl font-lora font-semibold text-dark dark:text-blue">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};

const SecondSection: React.FC = () => {
  const leftSectionImage =
    "https://plus.unsplash.com/premium_vector-1714618914509-ae7e36e34732?bg=FFFFFF&w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fElUJTIwU29sdXRpb25zfGVufDB8fDB8fHww"; // Replace with actual image path

  const featureCards = [
    {
      title: "Custom Software Development",
      description:
        "We design and develop bespoke software solutions to address your unique business challenges, from concept to deployment.",
      featurePoints: [
        "Comprehensive Requirement Analysis",
        "Custom Design and Development",
        "Rigorous Testing and Quality Assurance",
        "Seamless Deployment and Integration",
        "Ongoing Maintenance and Support",
      ],
    },
    {
      title: "Software Integration",
      description:
        "We design and develop bespoke software solutions to address your unique business challenges, from concept to deployment.",
      featurePoints: [
        "Seamless Integration with Existing Systems",
        "Data Synchronization and Interoperability",
        "Custom API Development",
        "Real-time Data Exchange",
        "Scalable and Future-proof Solutions",
      ],
    },
    {
      title: "Software Maintenance and Support",
      description:
        "Our dedicated support team ensures your software runs smoothly with timely updates, bug fixes, and performance optimization.",
      featurePoints: [
        "Proactive Monitoring and Maintenance",
        "Timely Bug Fixes and Updates",
        "Performance Optimization",
        "Security Patches and Vulnerability Management",
        "Dedicated Customer Support",
      ],
    },
    {
      title: "Software Consulting",
      description:
        "Gain strategic insights and actionable recommendations to achieve your business objectives with our expert consulting services.",
      featurePoints: [
        "Technology Assessments and Audits",
        "Architecture Design and Planning",
        "Feasibility Studies and Proof of Concepts",
        "Project Management and Risk Mitigation",
        "Strategic Technology Roadmaps",
      ],
    },
    // Add more cards as needed
  ];

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center items-center ">
        <p className="text-xl font-medium py-5 lg:mx-auto text-gray uppercase mt-6">
          Our Services
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center mt-4">
        {/* Left Image Section */}
        <LeftImageSection imageSrc={leftSectionImage} />

        {/* Right Cards Section */}
        <RightCardsSection cards={featureCards} />
      </div>

      {/* Icon, Heading, Description, Key Features Section */}
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {/* Your icon SVG code here */}
          </svg>
        </div>

        <h2 className="text-3xl font-lora font-bold mb-4">
          We also build our own software products
        </h2>
        <div className="flex justify-start items-start">
          <p className="text-lg text-gray lg:text-center max-w-70 mb-6">
            At YugAmjTeam, we're not just focused on solving business challenges
            – we're dedicated to making a positive impact across various
            domains. That's why we develop our own proprietary software tools to
            address a wide range of needs, from business operations to social
            causes and beyond.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center py-16">
          <ServiceCard
            title="Versatile Solutions"
            details="Our proprietary software tools are designed to serve diverse purposes, catering to the needs of businesses, nonprofits, educational institutions, and more."
            icon={
              <img
                src="https://cdn-icons-png.flaticon.com/128/4133/4133589.png"
                alt="Innovative Environment"
              />
            }
          />
          <ServiceCard
            title="Social Impact"
            details="Beyond business, we're committed to using technology for social good. Our proprietary tools support initiatives in education, healthcare, environmental conservation, and other areas, helping organizations make a meaningful difference in the world.
            "
            icon={
              <img
                src="https://cdn-icons-png.flaticon.com/128/11152/11152700.png"
                alt="Innovative Environment"
              />
            }
          />
          <ServiceCard
            title="Accessibility"
            details=" We believe in making technology accessible to all. That's why our proprietary software tools are designed to be user-friendly and accessible, ensuring that they can be utilized by people of all backgrounds and skill levels."
            icon={
              <img
                src="https://cdn-icons-png.flaticon.com/128/9438/9438318.png"
                alt="Innovative Environment"
              />
            }
          />
          <ServiceCard
            title="Community Engagement"
            details="Through our proprietary software tools, we empower communities to collaborate, communicate, and effect positive change. Whether it's facilitating communication among volunteers, organizing community events, or managing resources efficiently, our tools support community-driven initiatives.
            "
            icon={
              <img
                src="https://cdn-icons-png.flaticon.com/128/10218/10218334.png"
                alt="Innovative Environment"
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
