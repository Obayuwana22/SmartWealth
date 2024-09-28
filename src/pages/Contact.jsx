const Contact = () => {
  const handleSubmit = () => {
    return <div className="loading"></div>;
  };
  return (
    <section>
      <div className="mt-[100px] mb-[50px] md:mt-[150px] md:mb-[100px] grid grid-col-1 gap-y-10 lg:mt-40 md:grid-cols-2 lg:mx-10 md:gap-x-16 ">
        <div className="flex flex-col gap-7 bg-primaryClr rounded-2xl text-white px-5 py-7 md:px-[50px] md:py-20 ">
          <div className="">
            <div className="text-secondaryClr font-bold text-xs mb-5">
              LOCATION
            </div>
            <div>Greenfields, Citytown,</div>
            <div>London, UK, 52050</div>
          </div>
          <div className="">
            <div className="text-secondaryClr font-bold text-xs mb-5">
              WORKING HOURS
            </div>
            <div>Monday To Friday</div>
            <div>9:00 AM to 8:00 PM</div>
            <p className="text-black">Our Support Team is available 24Hrs</p>
          </div>
          <div className="">
            <div className="text-secondaryClr font-bold text-xs mb-5">
              CONTACT US
            </div>
            <div>020 7993 2905</div>
            <div>Email@gmail.com</div>
          </div>
        </div>

        <div>
          <div className="text-secondaryClr font-bold text-xs mb-5">
            CONTACT
          </div>
          <h1 className="my-3 text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
            Let's get started!
          </h1>
          {/* EB Garamond */}
          <p className="text-grayText">
            Fill up the Form and our team will get back to within 24 hrs
          </p>
          <form onSubmit={handleSubmit} className="mt-[50px]">
            <div className="flex flex-col gap-5">
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="input-style"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="input-style"
                />
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="input-style"
              ></textarea>
              <button
                type="submit"
                className="bg-primaryClr text-white input-style py-[15px]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
