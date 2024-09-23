import img from "../assets/Investing 2.svg";
import { solutions } from "../data";
import arrowImg from "../assets/arrow.svg";

const SectionSolution = () => {
  return (
    <section>
      <div className="my-5 px-5 py-7 md:px-10 md:py-12  bg-primaryClr rounded-lg  md:border-radius">
        <div className="grid grid-cols-1 md:grid-cols-2 gap place-items-center mb-10 ">
          <div className="max-w-2xl">
            <span className="text-secondaryClr font-bold text-xs">
              ABOUT US
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl mt-5 text-white ">
              Financial Plan for Long-Term Success
            </h1>
            <p className="md:text-sm lg:text-xl xl:text-2xl mb-3 mt-5 text-background">
              We are committed to fostering the financial well-being of the next
              generation by encouraging them to take the proud and empowering
              step of micro-investing.
            </p>
          </div>
          <div className="bg-white rounded-3xl white-box ">
            <img
              src={img}
              alt="animated image"
              className="px-5 py-5 xl:mx-20 xl:my-14"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-x-7 gap-y-10 capitalize ">
          {solutions.map((solution) => {
            const { id, img, title, text } = solution;
            return (
              <div
                key={id}
                className="bg-white rounded-3xl flex flex-col items-center self-start text-center gap-6 py-5 xl:py-36"
              >
                <div>
                  <img src={img} alt="svg" />
                </div>
                <h4 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl ">
                  {title}
                </h4>
                <p className="text-grayText text-sm lg:text-xl xl:text-2xl px-16">{text}</p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-4 mt-10">
          <img src={arrowImg} alt="arrow" className="w-10"/>
          <div className="text-white text-sm font-bold">LEARN MORE</div>
        </div>
      </div>
    </section>
  );
};
export default SectionSolution;

