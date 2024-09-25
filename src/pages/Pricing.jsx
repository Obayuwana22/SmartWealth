import CardPlanAccordion from "../components/CardPlanAccordion";
import PopularCard from "../components/PopularCard";
import ProCard from "../components/ProCard";
import StarterCard from "../components/StarterCard";


const Pricing = () => {
  return (
    <section>
      <div className="mt-20 lg:mt-40">
        <div className="md:mx-40 lg:mx-60 text-center my-12 ">
          <h3 className="text-2xl md:text-3xl lg:text-5xl mt-5">
            We Have The Best Pricing Package
          </h3>
          <p className="md:text-sm lg:text-xl xl:text-2xl text-grayText mt-5 xl:mx-20 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut .
          </p>
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:justify-center md:items-center md:gap-5 xl:mx-40">
          <StarterCard />
          <PopularCard />
          <ProCard />
        </div>
        <div className="md:mx-40 lg:mx-60 text-center md:mt-20 lg:mt-40 ">
          <h3 className="text-2xl md:text-3xl lg:text-5xl mt-5">FAQs</h3>
          {/* EB Garamond */}
          <p className="md:text-sm lg:text-xl xl:text-2xl text-grayText mt-5 xl:mx-20 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut .
          </p>
          {/* Spline Sans */}
        </div>
        <CardPlanAccordion />
      </div>
    </section>
  );
};
export default Pricing;
