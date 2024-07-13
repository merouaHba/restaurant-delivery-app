import { Logo } from "@assets/index";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="flex w-screen h-screen relative overflow-hidden bg-no-repeat bg-cover bg-loginbg">
      <div className="flex flex-col items-center bg-lightOverlay w-full md:w-1/4 h-full z-10 backdrop-blur-sm p-4 px-4 py-12 gap-4">
        <div className="flex items-center justify-start gap-4 w-full">
          <img src={Logo} alt="Logo" className="w-8" />
          <p className="text-2xl text-headingColor font-semibold">Foody</p>
              </div>
              <p className="text-3xl font-semibold text-headingColor">Welcome Back</p>
              <p className="text-3xl font-semibold text-headingColor"></p>
              <Outlet/>
      </div>
    </div>
  );
};

export default Auth;
