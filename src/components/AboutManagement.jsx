import { aboutManagement } from "../data";

const AboutManagement = () => {
  return (
    <section>
      <div className="my-10 lg:mx-10 md:my-20 2xl:mx-16">
        <h2 className="mb-10 text-2xl lg:text-5xl xl:text-6xl">
          Our Management
        </h2>

        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 xl:gap-x-[30px]  ">
          {aboutManagement.map((item) => {
            const { id, img, name, position, text, X, linkedin } = item;
            return (
              <div
                key={id}
                className="grid grid-cols-1 place-items-center xl:grid-cols-2 xl:relative  "
              >
                <div className="max-w-[343px] ">
                  <img src={img} alt="staff avatar" />
                </div>
                <div className="flex flex-col gap-[18px] bg-white rounded-2xl p-[30px] max-w-[332px] xl:absolute xl:top-10 xl:left-72">
                  <h3 className="g:mb-5 text-xl lg:text-3xl">{name}</h3>
                  <div className="text-secondaryClr font-bold text-xs">
                    {position}
                  </div>
                  <p className="text-grayText">{text}</p>
                  <div className="flex">
                    <div className="max-w-1 ">
                      <img src={X} alt="x-twitter" />
                    </div>
                    <div className="max-w-1 ">
                      <img src={linkedin} alt="linkedin" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AboutManagement;
