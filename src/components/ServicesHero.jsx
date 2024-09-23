import heroAni from "../assets/Payment With Card 3.svg";

const ServicesHero = () => {
  return (
    <section>
      <div className=" flex flex-col my-10 md:flex-row-reverse md:items-center lg:justify-between lg:mx-10 lg:mb-10">
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
            Award winning business management
          </h1>
          <p className="md:text-sm xl:text-2xl mb-3 mt-5">
            We understand that running a business is challenging. That's why we
            offer business management services designed to help you achieve your
            goals and grow your business. Whether you are just starting out or
            looking to take your business to the next level, we have the tools
            and expertise you need to succeed.
          </p>
        </div>
        
          <img src={heroAni} alt="animated character" />
       
      </div>
    </section>
  )
}
export default ServicesHero