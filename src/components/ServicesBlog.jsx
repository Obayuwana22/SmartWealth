import img from "../assets/servicesBlog.png";
import { servicesBlog } from "../data";

const ServicesBlog = () => {
  return (
    <section>
      <div className="flex flex-col gap-10 my-20 px-5 py-7 rounded-lg md:px-10 md:py-12 bg-white md:border-radius mb-20">
        <div className="grid  md:grid-cols-2 place-items-center gap-10">
          <div>
            <img src={img} alt="image of a person" />
          </div>
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl lg:text-5xl mt-5">
              Personal Loans
            </h3>
            <p className="md:text-sm  lg:text-2xl  mb-3 mt-5">
              Life is full of unexpected expenses, from home repairs to medical
              bills to car accidents. If you are facing a financial challenge and
              need help getting back on track, a personal loan can provide the
              funding you need to cover your expenses.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:flex-row mt-2">
          {servicesBlog.map((item) => {
            const { id, img, title, text } = item;
            return (
              <div key={id} className="flex flex-col gap-5">
                <img src={img} alt="finance image" />
                <div className="lg:text-2xl">{title}</div>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ServicesBlog;
