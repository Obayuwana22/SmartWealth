import img from "../assets/Image.png";

const SectionAbout = () => {
  return (
    <section>
      <div className="bg-white px-5 py-7 my-20 grid gap-5 rounded-md md:grid md:grid-cols-2 md:place-items-center md:gap-10  md:px-10 md:py-12 md:mb-20 md:border-radius  xl:px-20">
        <div>
          <img src={img} alt="image of a person" />
        </div>
        <div className="max-w-2xl">
          <span className="text-secondaryClr font-bold text-xs">ABOUT US</span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl mt-5">
            Providing Innovative Services and Solutions
          </h1>
          <p className="md:text-sm lg:text-xl xl:text-2xl mb-3 mt-5 text-grayText">
            We are committed to fostering the financial well-being of the next
            generation by encouraging them to take the proud and empowering step
            of micro-investing.
          </p>
        </div>
      </div>
    </section>
  );
};
export default SectionAbout;
