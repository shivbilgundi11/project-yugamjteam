import React from 'react';
// import Button from "../ui/Button";

interface TypesInternship {
  icon: string; // URL or path to the icon
  title: string;
  description: string;
}

const TypesOfInternship: React.FC = () => {
  const cards: TypesInternship[] = [
    {
      icon: 'https://cdn-icons-gif.flaticon.com/11260/11260808.gif',
      // "/src/assets/images/InternshipImages/Types-of-internship-images/software_dev.gif",
      title: 'Software Development',
      description:
        'Empowering future innovators through hands-on software development internships',
    },
    {
      icon: 'https://cdn-icons-gif.flaticon.com/15591/15591404.gif',
      // "/src/assets/images/InternshipImages/Types-of-internship-images/web-developer.gif",
      title: 'Web Development',
      description:
        'Dive into the world of web development with our expert-led internship program',
    },
    {
      icon: 'https://cdn-icons-gif.flaticon.com/14255/14255803.gif',
      // "/src/assets/images/InternshipImages/Types-of-internship-images/digi_marketing.gif",
      title: 'Digital Marketing',
      description:
        'Explore the dynamic realm of digital marketing through our comprehensive internship program.',
    },
    {
      icon: 'https://cdn-icons-gif.flaticon.com/15332/15332420.gif',
      // "/src/assets/images/InternshipImages/Types-of-internship-images/hr_manager.gif",
      title: 'HR Management',
      description:
        'Unlock the potential of HR management with our hands-on internship experience.',
    },
    {
      icon: 'https://cdn-icons-gif.flaticon.com/14447/14447732.gif',
      // "/src/assets/images/InternshipImages/Types-of-internship-images/web-developer.gif",
      title: 'Content writing',
      description:
        'Harness the power of words and creativity in our content writing internship.',
    },
    {
      icon: 'https://cdn-icons-gif.flaticon.com/15401/15401490.gif',
      // "/src/assets/images/InternshipImages/Types-of-internship-images/business-development.gif",
      title: 'Business Development',
      description:
        'Forge strategic partnerships and drive growth with our business development internship opportunity.',
    },
    {
      icon: '/src/assets/images/InternshipImages/Types-of-internship-images/more.png',
      title: 'And many more!',
      description:
        "Unlock a plethora of internship opportunities - there's more awaiting your ambition!",
    },
  ];
  return (
    <>
      <h2 className='text-4xl flex font-bold justify-center pt-16 items-center'>
        Internships we offer!!
      </h2>
      <div className='flex flex-wrap justify-center'>
        {cards.map((card, index) => (
          <div
            key={index}
            className='w-80 h-90 m-4 border-2 border-transparent rounded-lg shadow-lg hover:shadow-2xl flex flex-col justify-between transform hover:scale-105 transition-transform duration-200 ease-in-out'
            // className="w-80 h-95 m-4 border-2 border-transparent transition-colors duration-300 rounded-lg shadow-lg hover:shadow-2xl flex flex-col justify-between"
          >
            <div className='p-4'>
              <img
                src={card.icon}
                alt={card.title}
                className='w-fit h-20 mx-auto object-cover'
              />
              <h3 className='text-blue text-xl text-center mt-4'>
                {card.title}
              </h3>
              <p className='text-black text-center mt-2'>{card.description}</p>
            </div>
            <a
              href='https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform'
              target='_blank'
              rel='noopener noreferrer'
              className='self-center'
            >
              <button className='bg-blue mb-4 hover:text-black text-white font-bold py-2 px-4 rounded-full mx-auto'>
                Apply Now
              </button>
              {/* <Button
                className="flex justify-center items-center mx-auto"
                variant="primary"
                text={"Apply now"}
              ></Button> */}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default TypesOfInternship;
