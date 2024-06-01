interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  details: string;
}

const ServiceCard: React.FC<ServiceCard> = ({ title, details, icon }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-lightgray p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-blue">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};

const Service = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-black sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                If you're looking for an opportunity to grow your career, make
                an impact, and work alongside talented professionals, we invite
                you to explore our current job openings and join our team.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Innovative Environment"
            details="Join a dynamic and collaborative work environment where innovation is encouraged and ideas are valued."
            icon={
              <img
                src="https://cdn-icons-png.flaticon.com/128/4578/4578485.png"
                alt="Innovative Environment"
              ></img>
            }
          />
          <ServiceCard
            title="Career Growth"
            details="Take your career to new heights with opportunities for learning, growth, and professional development."
            icon={
              <img
                src="https://cdn-icons-png.flaticon.com/128/10434/10434014.png"
                alt="Career growth"
              ></img>
            }
          />
          <ServiceCard
            title="Impactful Work"
            details="Be part of projects that have a meaningful impact on our clients, communities, and society as a whole."
            icon={
              <img
                src="https://cdn-icons-png.flaticon.com/128/1584/1584911.png"
                alt="Impact work"
              ></img>
            }
          />
          <ServiceCard
            title="Diverse Team"
            details=" Join a diverse and inclusive team that values different perspectives, experiences, and backgrounds."
            icon={
              <img
                src="https://cdn-icons-png.flaticon.com/128/3003/3003951.png"
                alt="Diversity"
              ></img>
            }
          />
          <ServiceCard
            title="Employee Benefits"
            details="Enjoy competitive compensation, comprehensive benefits, and perks designed to support your overall well-being and work-life balance."
            icon={
              <img
                src="https://cdn-icons-png.flaticon.com/128/3194/3194298.png"
                alt="Emp Benifits"
              ></img>
            }
          />
          <ServiceCard
            title="Flexible Work Modes"
            details="We offer flexible work modes to accommodate your needs and preferences."
            icon={
              <img
                src="https://cdn-icons-png.flaticon.com/128/9463/9463507.png"
                alt="Workmode"
              ></img>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
