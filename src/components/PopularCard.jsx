import img from "../assets/checkmark-white.svg";

const PopularCard = () => {
  const planArray = [
    {
      img: img,
      text: "No Debit Card Fees",
    },
    {
      img: img,
      text: "No Debit Card Fees",
    },
    {
      img: img,
      text: "No Debit Card Fees",
    },
    {
      img: img,
      text: "No Debit Card Fees",
    },
    {
      img: img,
      text: "No Debit Card Fees",
    },
    {
      img: img,
      text: "No Debit Card Fees",
    },
  ];
  return (
    <div className="bg-primaryClr w-full  inline-block pt-12 pb-16 rounded-2xl px-8">
      <div className="text-secondaryClr font-bold text-xs mb-8">ENTERPRISE</div>
      {/* Spline Sans */}
      <div className="text-white mb-8">
        <span className="text-6xl">$99</span>
        {/* EB Garamond */}
        <span className="text-sm font-bold">/MONTH</span>
        {/* Spline Sans */}
      </div>
      <div>
        {planArray.map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <img src={item.img} alt="checkmark" />
              <span className="text-white text-sm ">{item.text}</span>
            </div>
          );
        })}
      </div>
      <button className="border-none bg-secondaryClr gap-2 border rounded-lg px-5 py-2 lg:px-7 lg:py-4 mt-8 w-full">
        Get Started
      </button>
    </div>
  );
};
export default PopularCard;
