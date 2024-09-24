const FeatureCard = ({title, text}) => {
  return (
    <div className="bg-white rounded-xl px-7 py-20 text-center flex flex-col gap-5 relative">
      <div className="feature-card bg-primaryClr md:top-0"></div>
      <div className="text-2xl">{title}</div>
      <p className=" md:text-sm lg:text-xl xl:text-2xl text-grayText">{text}</p>
    </div>
  );
};
export default FeatureCard;
