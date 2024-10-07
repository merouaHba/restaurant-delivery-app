import { Logo } from "@assets/index";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";


const Auth = () => {
  return (
    <AnimatePresence mode="wait">
      <ToastContainer />
      <div className="flex w-screen h-screen relative overflow-hidden bg-no-repeat bg-cover bg-loginbg">
        <div className="flex flex-col items-center bg-lightOverlay w-full md:w-2/5 h-full z-10 backdrop-blur-sm p-4 px-4 py-5 gap-2">
          <div className="w-full">
            <Link to="/" className="w-1/5 flex">
              <div className="flex items-center justify-start gap-1">
                <img src={Logo} alt="Logo" className="w-12" />
                <p className="text-2xl text-headingColor font-semibold">
                  Foody
                </p>
              </div>
            </Link>
          </div>
          <p className="text-3xl font-semibold text-headingColor">
            Welcome Back
          </p>
          <Outlet />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Auth;
