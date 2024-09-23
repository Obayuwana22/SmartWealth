import { finPlan } from "../data";

const FinPlan = ({ imgOne, imgTwo }) => {
  return (
    <section className="flex flex-col gap-10 my-5 px-5 py-7 md:py-12 lg:gap-40  ">
      <div className="grid grid-col-1 gap-y-10 lg:grid lg:grid-cols-2 lg:mx-10 lg:gap-x-16 ">
        <div className="flex flex-col gap-2 lg:gap-5">
          <h3 className="text-2xl lg:text-5xl">Financial Planning</h3>
          <p className="text-grayText">
            We understand that financial planning can be overwhelming and
            confusing. That's why we offer expert guidance and support to help
            you make informed decisions and achieve your goals.
          </p>
          {finPlan.map((plan) => {
            const { id, title, text } = plan;
            return (
              <div key={id}>
                <h4 className="mb-2 lg:mb-5 text-xl lg:text-3xl">{title}</h4>
                <p className="text-grayText">{text}</p>
              </div>
            );
          })}
        </div>
        <div className="md:min-w-96 md:mx-auto">
          <img src={imgOne} alt="people planning" />
        </div>
      </div>

      <div className="grid grid-col-1 gap-y-10 lg:grid lg:grid-cols-2 lg:mx-10 lg:gap-x-16 ">
        <div className="hidden lg:block md:min-w-96 md:mx-auto">
          <img src={imgTwo} alt="people planning" />
        </div>
        <div className="flex flex-col gap-2 lg:gap-5">
          <h3 className="text-2xl lg:text-5xl">Financial Planning</h3>
          <p className="text-grayText">
            We understand that financial planning can be overwhelming and
            confusing. That's why we offer expert guidance and support to help
            you make informed decisions and achieve your goals.
          </p>
          {finPlan.map((plan) => {
            const { id, title, text } = plan;
            return (
              <div key={id}>
                <h4 className="mb-2 lg:mb-5 text-xl lg:text-3xl">{title}</h4>
                <p className="text-grayText">{text}</p>
              </div>
            );
          })}
        </div>
        <div className="lg:hidden md:min-w-96 md:mx-auto">
          <img src={imgTwo} alt="people planning" />
        </div>
      </div>
    </section>
  );
};
export default FinPlan;
