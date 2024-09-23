import img from "../assets/Image (1).png";
import playImg from "../assets/play_button.svg"
const SectionInvesting = () => {
  return (
    <section>
      <div className="my-20">
        <div className="md:mx-40 lg:mx-60 text-center">
          <span className="text-secondaryClr font-bold text-xs">
            OUR INVESTING
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl  mt-5">
            Empowering Your Business With Financial Capabilities
          </h1>
        </div>
        <div className="rounded-3xl relative ">
          <img src={img} alt="animated image" className="mx-auto my-14" />
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src={playImg} alt="play button" className="w-10 md:w-20 lg:w-auto"/>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionInvesting;
