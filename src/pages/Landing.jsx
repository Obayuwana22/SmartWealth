import Hero from "../components/Hero";
import SectionAbout from "../components/SectionAbout";
import SectionCTA from "../components/SectionCTA";
import SectionInvesting from "../components/SectionInvesting";
import SectionSolution from "../components/SectionSolution";
import SectionBlog from "../components/SectionBlog";


const Landing = () => {
  return (
    <div>
      <Hero />
      <SectionAbout />
      <SectionSolution />
      <SectionInvesting />
      <SectionBlog />
      <SectionCTA />
    </div>
  );
};
export default Landing;
  