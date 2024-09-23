import img from "../assets/Image (2).png";
import { blogSection } from "../data";

const SectionBlog = () => {
  return (
    <section>
      <div
        className="flex flex-col gap-10 my-20 px-5 py-7 rounded-lg  md:px-10 md:py-12
      bg-primaryClr md:border-radius mb-20 text-white"
      >
        <div className="max-w-2xl">
          <span className="text-secondaryClr font-bold text-xs">ABOUT US</span>
          <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-6xl  mt-5">
            Minimum Wage May Lead to higher levels of poverty
          </h1>
        </div>
        <div className="grid  md:grid-cols-2 place-items-center gap-10">
          <div className="max-w-2xl">
            <span className="text-secondaryClr font-bold text-xs">
              ABOUT US
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl mt-5">
              Minimum Wage May Lead to higher levels of poverty
            </h1>
            <p className="md:text-sm lg:text-xl xl:text-2xl  mb-3 mt-5">
              The U.S. government reached the $31.4 trillion debt limit imposed
              by Congress on Jan. 19, and since then has been relying on
              accounting tricks by the Treasury Department.
            </p>
          </div>
          <div>
            <img src={img} alt="image of a person" />
          </div>
        </div>
        <div className="flex flex-col gap-10 md:flex-row mt-2">
          {blogSection.map((item) => {
            const { id, img, title, text, bio } = item;
            return (
              <div key={id} className="flex flex-col gap-5">
                <img src={img} alt="finance image" />
                <div className="text-secondaryClr">{title}</div>
                <p className="md:text-sm lg:text-xl xl:text-2xl ">{text}</p>
                <div className="text-sm md:text-sm lg:text-xl xl:text-2xl ">
                  {bio}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default SectionBlog;
