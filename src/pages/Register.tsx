import Input from "@components/Form/Input";
import { useState } from "react";
import { FaEnvelope, FaLock } from "@assets/icons/index";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonClick } from "@animations";
import AuthProvider from "@components/Auth/AuthProvider";
 import { toast } from "react-toastify";
 import { useStateValue } from "@context/StateProvider";
 import { EMAILSIGNUP, firebaseAddUser } from "@services/firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [{ user }, dispatch] = useStateValue();
 

  const EmailAuth = () => {
    if (!user) {
      if (
        email.length > 0 &&
        password.length > 0 &&
        confirmPassword.length > 0
      ) {
        if (password === confirmPassword) {
          toast
            .promise(EMAILSIGNUP(email, password), {
              pending: "Creating Account...",
              success: "Signup successful: WELCOME!",
              error: "Error Creating account, Please try again🤗",
            })
            .then((userCredential: any) => {
              // Signed in
              const user = userCredential.user.providerData[0];
              firebaseAddUser(user);
              dispatch({
                type: "SET_USER",
                user: user,
              });
              localStorage.setItem("user", JSON.stringify(user));
              navigate("/");
            })
            .catch((error) => {
              // const errorCode = error.code;
              const errorMessage = error.message;
              toast.error(errorMessage, { autoClose: 15000 });
            });
        } else {
          toast.warn("confirm password doesn't maatch the first password", {
            autoClose: 15000,
          });
        }
      } else {
        toast.warn("Please fill all the fields", { autoClose: 15000 });
      }
    }
  };


  return (
    <>
      <p className="text-xl font-semibold text-textColor -mt-2 ">
        Sign Up with the Following
      </p>
      <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-2">
        <AuthProvider/>
        <div className="flex w-full items-center my-2 before:flex-1 before:border-t before:border-textColor before:mt-0.5 after:flex-1 after:border-t after:border-textColor after:mt-0.5">
          <p className="text-center text-headingColor text-sm font-semibold mx-4 mb-0">
            OR
          </p>
        </div>

        <Input
          value={email}
          icon={<FaEnvelope className="text-xl text-textColor" />}
          placeholder="Email"
          type="email"
          changeHandler={(e) => setEmail(e.target.value)}
        />
        <Input
          value={password}
          icon={<FaLock className="text-xl text-textColor" />}
          placeholder="Password"
          type="password"
          changeHandler={(e) => setPassword(e.target.value)}
        />
        <Input 
isSignUp={true}
          value={confirmPassword}
          icon={<FaLock className="text-xl text-textColor" />}
          placeholder="Confirm Password"
          type="password"
          changeHandler={(e) => setConfirmPassword(e.target.value)}
        />
     
        <motion.p onClick={EmailAuth} {...buttonClick} className="flex items-center justify-center px-7 py-3 bg-gradient-to-br from-red-400 to-red-500 text-white font-medium text-sm leading-snug uppercase rounded-md shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out w-full cursor-pointer">
          Sign Up
        </motion.p>
        <p className="flex self-auto gap-2 mr-4">
          Already have an acount
          <Link to='/login'>
          <motion.button
            whileHover={{ scale: 0.95 }}
            className="text-red-700 underline bg-transparent "
          >
            Sign In
          </motion.button></Link>
        </p>
      </div>
    </>
  );
};

export default Register;
