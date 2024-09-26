import img from "../assets/about 1.png";

const AboutHero = () => {
  return (
    <section>
      <div className=" mt-20 lg:mt-40 grid grid-col-1 gap-y-10 md:grid-cols-2 md:gap-x-16 lg:mx-10  ">
        <div className="md:min-w-96 md:mx-auto">
          <img src={img} alt="people planning" />
        </div>
        <div className="flex flex-col gap-2 lg:gap-5">
          <div>
            <h2 className="mb-2 text-2xl lg:text-5xl">About Company</h2>
            <p className="text-grayText">
              We're constantly pushing the boundaries of what's possible and
              seeking new ways to improve our services and help our clients
              achieve their goals.
            </p>
          </div>
          <div>
            <h3 className="mb-2 lg:mb-5 text-xl lg:text-3xl">Vision</h3>
            <p className="text-grayText">
              Our vision is to create a better financial future for everyone. We
              believe that everyone deserves access to financial services and
              resources that empower them to achieve their goals and live the
              life they want.
            </p>
          </div>
          <div>
            <h3 className="mb-2 lg:mb-5 text-xl lg:text-3xl">Mission</h3>
            <p className="text-grayText">
              We're on a mission to empower people to take control of their
              finances and achieve their goals. We believe that everyone should
              have access to the tools and resources they need to manage their
              finances effectively and make smart financial decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutHero;
