import CtaButton from "./CtaButton";
import heroAni from "../assets/Investing 1.svg";

const Hero = () => {
  return (
    <section>
      <div className=" flex flex-col my-10 mt-20 md:flex-row md:items-center lg:justify-between lg:mx-10 lg:mb-10 lg:mt-40">
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
            Empower your Financial Future with FinWise
          </h1>
          <p className="md:text-sm xl:text-2xl mb-3 mt-5">
            We help businesses stand out in crowded markets. When customers have
            a positive experience with a brand, they are more likely to remember
            it.
          </p>
          <CtaButton />
        </div>
        <div>
          <img src={heroAni} alt="animated character" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
