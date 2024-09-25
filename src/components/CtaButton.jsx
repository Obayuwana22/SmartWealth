import { NavLink } from "react-router-dom";
import arrorBtn from "../assets/arrow-forward-circle.svg";

const Button = () => {
  return (
    <NavLink to="/pricing">
      <button className="border-none bg-secondaryClr flex items-center gap-2 border rounded-lg px-5 py-2  lg:px-7 lg:py-4 ">
        Get Started
        <img src={arrorBtn} alt="arrow" />
      </button>
    </NavLink>
  );
};
export default Button;
