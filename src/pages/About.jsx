import AboutAchievement from "../components/AboutAchievement";
import AboutHero from "../components/AboutHero";
import AboutHistory from "../components/AboutHistory";
import AboutManagement from "../components/AboutManagement";
import img1 from "../assets/gallery money.png";
import img2 from "../assets/gallery chart.png";
import img3 from "../assets/gallery business.png";
import partner1 from "../assets/google.svg";
import partner2 from "../assets/Applepay.svg";
import partner3 from "../assets/linkedin.svg";
import partner4 from "../assets/facebook.svg";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutHistory />
      <AboutAchievement />
      {/* <AboutManagement /> */}
      <div className="flex flex-col justify-between gap-5 w-1/2 mx-auto my-10 md:flex-row md:w-auto md:my-40 lg:mx-10 2xl:mx-16">
        <div>
          <img src={partner1} alt="google " />
        </div>
        <div>
          <img src={partner2} alt="apple pay " />
        </div>
        <div>
          <img src={partner3} alt="linkedin " />
        </div>
        <div>
          <img src={partner4} alt="facebook " />
        </div>
      </div>
      <div className="bg-white px-5 py-7 rounded-2xl md:p-[50px] my-[50px]">
        <h2 className="mb-10 text-2xl lg:text-5xl">Gallery</h2>
        <div className="flex flex-col gap-5 md:justify-between md:flex-row">
          <div>
            <img src={img1} alt="picture of money" />
          </div>
          <div>
            <img src={img2} alt="picture of trade" />
          </div>
          <div>
            <img src={img3} alt="man with newspaper" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
