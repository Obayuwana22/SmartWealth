import { aboutHistory } from "../data";

const AboutHistory = () => {
  return (
    <section>
      <div className="my-10 lg:mx-10 md:my-20 2xl:mx-16">
        <h2 className="mb-5 lg:mb-16 text-2xl lg:text-5xl">History</h2>
        <div className="flex flex-wrap gap-10 md:flex-nowrap ">
          {aboutHistory.map((item) => {
            const { id, img, year, text, date } = item;
            return (
              <div key={id} className="flex flex-col gap-4">
                <div>
                  <img src={img} alt="uptrend image" />
                </div>
                <div className="text-2xl">{year}</div>
                <p className="text-grayText">{text}</p>
                <div className="text-grayText">{date}</div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-secondaryClr"></div>
                  <div className="w-full h-px bg-grayText"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default AboutHistory;
