import { Link } from "react-router-dom";

const Navbrar = () => {
  return (
    <div className="hidden md:absolute text-white md:flex items-center justify-between h-[80px] container">
      {/* LOGO */}
      <p className="font-bold text-[30px] hover:scale-105 transition-all ease-in-out  duration-[400ms] cursor-pointer">
        RCM Health
      </p>
      {/* Middle links bar */}
      <ul className="flex justify-between items-center">
        <Link
          to={"/"}
          className="mx-[24px] text-[20px] font-[300] hover:translate-y-[-5px] transition-all ease-in-out  duration-[400ms]"
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className="mx-[24px] text-[20px] font-[300] hover:translate-y-[-5px] transition-all ease-in-out  duration-[400ms]"
        >
          About Us
        </Link>
        <Link
          to={"/ar"}
          className="mx-[24px] text-[20px] font-[300] hover:translate-y-[-5px] transition-all ease-in-out  duration-[400ms]"
        >
          Ar
        </Link>
        <Link
          to={"/contact"}
          className="mx-[24px] text-[20px] font-[300] hover:translate-y-[-5px] transition-all ease-in-out duration-[400ms]"
        >
          Contact Us
        </Link>
      </ul>
      {/* Right Side Link */}
      <ul>
        <Link
          to={"/login"}
          className="font-[300] text-[20px] hover:scale-105 transition-all ease-in-out  duration-[400ms] cursor-pointer"
        >
          Login
        </Link>
      </ul>
    </div>
  );
};
export default Navbrar;
