import img from "../assets/about 1.png";

const AboutAchievement = () => {
  return (
    <section>
      <div className="mt-20 grid grid-col-1 gap-y-10 lg:mt-40 lg:grid lg:grid-cols-2 lg:mx-10 lg:gap-x-7 ">
        <div className="mx-0 md:min-w-96 md:mx-auto">
          <img src={img} alt="people planning" />
        </div>

        <div className="bg-primaryClr rounded-2xl text-white px-5 py-7 md:px-[50px] md:py-12 ">
          <h2 className="mb-5 text-2xl lg:text-5xl xl:text-6xl">Our achievements</h2>
          <p className="text-background">
            We're committed to achieving excellence in everything we do. Over
            the years, we've worked hard to build a reputation for providing
            exceptional services and delivering outstanding results for our
            clients. We're proud of our achievements and milestones, and we want
            to share them with you.
          </p>
          <div className="flex flex-col mt-10 md:flex-row md:justify-between md:max-w-[413px]">
            <div>
              <div>
                <h3 className="mb-2 lg:mb-5 text-xl lg:text-4xl xl:text-5xl">15+</h3>
                <div className="text-secondaryClr font-bold text-xs mb-8">
                  YEARS EXPERIENCES
                </div>
              </div>
              <div>
                <h3 className="mb-2 lg:mb-5 text-xl lg:text-4xl xl:text-5xl">3450</h3>
                <div className="text-secondaryClr font-bold text-xs mb-8">
                  LOANS APPROVED
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3 className="mb-2 lg:mb-5 text-xl lg:text-4xl xl:text-5xl">52</h3>
                <div className="text-secondaryClr font-bold text-xs mb-8">
                  BUSINESS PARTNERS
                </div>
              </div>
              <div>
                <h3 className="mb-2 lg:mb-5 text-xl lg:text-4xl xl:text-5xl">21,000+</h3>
                <div className="text-secondaryClr font-bold text-xs mb-8">
                  HAPPY CUSTOMERS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutAchievement;
