import { NavLink } from "react-router-dom";
import { footerCompany } from "../data";
import { footerInformation} from "../data";
import { footerSocial } from "../data";

const FooterLinks = () => {
  return (
    <div className="flex flex-col gap-5 nd:flex md:flex-row md:gap-20 xl:gap-44 lg:mr-20 capitalize">
      <div className="flex flex-col gap-2 lg:flex lg:flex-col lg:gap-5">
        {footerCompany.map((item) => {
          const { id, href, title, text } = item;
          return (
            <div key={id}>
              <div className="font-semibold">{title}</div>
              <NavLink to={href}>{text}</NavLink>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-2 lg:flex lg:flex-col lg:gap-5">
        {footerInformation.map((item) => {
          const { id, href, title, text } = item;
          return (
            <div key={id}>
             <div className="font-semibold">{title}</div>
              <NavLink to={href}>{text}</NavLink>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-2 lg:flex lg:flex-col lg:gap-5">
        {footerSocial.map((item) => {
          const { id, href, title, text } = item;
          return (
            <div key={id}>
              <div className="font-semibold">{title}</div>
              <NavLink to={href}>{text}</NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FooterLinks;
