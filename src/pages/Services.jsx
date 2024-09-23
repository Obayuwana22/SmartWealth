import FinPlan from "../components/FinPlan";
import ServicesFeatures from "../components/ServicesFeatures";
import ServicesHero from "../components/ServicesHero";
import img1 from "../assets/finplanning 1.png";
import img2 from "../assets/finplanning 2.png";
import ServicesBlog from "../components/ServicesBlog";


const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesFeatures />
      <FinPlan imgOne={img1}  imgTwo={img2} />
      <ServicesBlog/> 
    </>
  );
};
export default Services;
