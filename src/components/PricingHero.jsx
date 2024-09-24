import PopularCard from "./PopularCard";

const PricingHero = () => {
  return (
    <section>
      <div className="md:mx-40 lg:mx-60 text-center my-12">
        <h3 className="text-2xl md:text-3xl lg:text-5xl mt-5">
          We Have The Best Pricing Package
        </h3>
        <p className="md:text-sm lg:text-xl xl:text-2xl text-grayText mt-5 xl:mx-20 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut .
        </p>
      </div>
      <PopularCard/>
    </section>
  );
};
export default PricingHero;
