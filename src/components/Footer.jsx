import logo from "../assets/Logo.svg";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primaryClr rounded-t-3xl px-10 pt-14 pb-8 text-white tracking-wider">
        <div className="lg:flex lg:items-start lg:justify-between">
          <img src={logo} alt="logo" className="mb-5" />
          <FooterLinks />
        </div>
        <div className="border-t-2 my-10"></div>
        <div className="flex flex-col-reverse gap-5 text-sm lg:flex lg:flex-row lg:justify-between ">
          <div>&copy; 2024 SmartWealth, Inc.</div>
          <div className="flex gap-2 ">
            <div>Designed by Youness daoudi</div>|
            <div>Developed by Success Obayuwana</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
