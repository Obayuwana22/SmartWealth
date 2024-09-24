import FeatureCard from "../components/FeatureCard";
import { featureCards } from "../data";

const ServicesFeatures = () => {
  return (
    <section>
      <div className="my-20">
        <div className="md:mx-40 lg:mx-60 text-center my-12">
          <span className="text-secondaryClr font-bold text-xs">FEATURES</span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl  mt-5">
            Start your journey to better credit
          </h1>
          <p className="md:text-sm lg:text-xl xl:text-2xl text-grayText mt-5 xl:mx-20 ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.Amet minim
            mollit non deserunt ullamco est
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-5 mt-20 mb-12">
          {featureCards.map((item) => {
            return <FeatureCard key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default ServicesFeatures;
