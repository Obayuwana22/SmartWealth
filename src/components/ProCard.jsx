import img from "../assets/checkmark-black.svg";
const ProCard = () => {
  const planArray = [
    {
      img: img,
      text: "Get paid 2 days early",
    },
    {
      img: img,
      text: "Fee Free Overdraft",
    },
    {
      img: img,
      text: "Details spend insights",
    },
    {
      img: img,
      text: "Priority Support",
    },
  ];

  return (
    <div className=" bg-white w-full h-full inline-block py-8 rounded-2xl px-8">
      <div className="text-secondaryClr font-bold text-xs mb-8">
        Pro PLAN
      </div>
      {/* Spline Sans */}
      <div className=" mb-8">
        <span className="text-6xl">$139</span>
        {/* EB Garamond */}
        <span className="text-sm font-bold">/MONTH</span>
        {/* Spline Sans */}
      </div>
      <div>
        {planArray.map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <img src={item.img} alt="checkmark" />
              <span className="text-sm ">{item.text}</span>
            </div>
          );
        })}
      </div>

      <button className="border-none bg-grayBg gap-2 border rounded-lg px-5 py-2 lg:px-7 lg:py-4 mt-8 w-full">
        Get Started
      </button>
    </div>
  );
};
export default ProCard;
