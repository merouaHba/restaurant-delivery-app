/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {motion} from 'framer-motion'
import { BsGithub, FcGoogle } from "@assets/icons";
import {
  // GithubAuthProvider, 
  getAuth, signInWithPopup, GoogleAuthProvider
} from "firebase/auth";
import { app } from '@services';
import { useStateValue } from "@context/StateProvider";
import { AUTHPROVIDER } from "@services/firebase";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { fetchUserCartData } from "@utils/functions";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AuthProvider = () => {
  const GOOGLE_PROVIDER = new GoogleAuthProvider();
  // const GITHUB_PROVIDER = new GithubAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  // const user = useStateValue();
  // const user = {}
  const navigate = useNavigate();

  const AUTH = async ({ provider }: { provider: any }) => {
    if (!user) {
      toast
        .promise(AUTHPROVIDER(provider), {
          pending: "Signing in...",
          success: "Signin successful",
          error: "Error Signing in, Please try again🤗",
        })
        .then(({ refreshToken, userData }:any) => {
          // Signed in
          const user = userData[0];
          // const userData = getUserData(user);
          dispatch({
            type: "SET_USER",
            user: user,
          });
          fetchUserCartData(user, dispatch);
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/");
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage, { autoClose: 15000 });
        });
    }
  };
  return (
    <div className="flex items-center justify-center gap-5  text-center">
      <motion.p
        whileHover={{ scale: 1.1 }}
        className="flex items-center w-36 h-10 bg-white justify-center rounded text-headingColor px-5 cursor-pointer shadow-sm hover:bg-slate-100"
        onClick={() =>
          toast.warn("GitHub Signin is not available yet", {
            autoClose: 2000,
            icon: (
              <MdOutlineNotificationsActive className="text-yellow-500 text-xl" />
            ),
            toastId: "github",
          })
        }
      >
        <BsGithub className="text-xl w-5 mr-1" />
        <span>Github</span>
      </motion.p>
      <motion.p
        whileHover={{ scale: 1.1 }}
        className="flex items-center w-36 h-10 bg-white justify-center rounded text-headingColor px-5 cursor-pointer shadow-sm hover:bg-slate-100"
        onClick={() => AUTH({ provider: GOOGLE_PROVIDER })}
      >
        <FcGoogle className="text-xl w-5 mr-1" />
        <span>Google</span>
      </motion.p>
    </div>
  );
};
export default AuthProvider