import { MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";

const Navigations = () => {
  return (
    <div className="flex items-center gap-8">
      <ul className={`flex items-center gap-8 `}>
        <li
          className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
        >
          <Link to={"/"}>Home</Link>
        </li>
        <li
          className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
        >
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li
          className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
        >
          <Link to={"/services"}>Services</Link>
        </li>
        <li
          className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
        >
          <Link to={"/about"}>About us</Link>
        </li>
        <li
          
          className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
        >
          Contact us
        </li>
      </ul>

      <div
        
        className="relative flex items-center justify-center text-textColor"
      >
        <MdShoppingBasket className="text-2xl cursor-pointer" />
        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center cursor-pointer">
          <p className="text-sm text-white font-semibold">0</p>
        </div>
      </div>
    </div>
  );
};

export default Navigations;
