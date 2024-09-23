import CtaButton from "./CtaButton";
import CtaAni from "../assets/Currencies World.svg";

const SectionCTA = () => {
  return (
    <section>
      <div className="flex flex-col gap-5 bg-white rounded-lg px-5 py-7 md:flex-row md:items-center md:justify-between md:px-10 md:py-12 md:border-radius">
        <div className=" max-w-2xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl mb-8">
            Simplifying Complexity with Innovative Solutions
          </h1>
          <CtaButton />
        </div>
        <div>
          <img src={CtaAni} alt="animated character" />
        </div>
      </div>
    </section>
  );
};
export default SectionCTA;
