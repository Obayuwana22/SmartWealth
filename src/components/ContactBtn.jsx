import { NavLink } from "react-router-dom";

const ContactBtn = () => {
  return (
    <button className="border px-5 py-1 text-primaryClr bg-white rounded-lg lg:px-7 lg:py-4">
      <NavLink to="/contact">Contact</NavLink>
    </button>
  );
};
export default ContactBtn;
