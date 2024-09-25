import { useState } from "react";
import { pricingAccordion } from "../data";

const CardPlanAccordion = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = (id) => {
    setDropDown(dropDown === id ? false : id);
  };

  return (
    <div className="bg-white rounded-2xl px-5 mt-14 mb-20 xl:mx-60">
      {pricingAccordion.map((item) => {
        const { id, img, question, answer } = item;
        return (
          // Spline Sans
          <div key={id} className="border-b-2 tracking-wider">
            <div className="flex items-center gap-3 py-5">
              <div onClick={() => handleDropDown(id)}>
                <img src={img} alt="add sign" />
              </div>
              <p>{question}</p>
            </div>
            <p className={`px-8 pb-5 ${dropDown === id ? "block" : "hidden"} `}>
              {answer}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default CardPlanAccordion;
