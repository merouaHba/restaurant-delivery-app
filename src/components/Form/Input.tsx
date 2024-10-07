import React, { useState } from 'react'
import {motion} from 'framer-motion'

type TInput = {
  value: string;
  type: string;
  placeholder: string;
  icon: React.ReactNode
  isSignUp?:boolean;
  changeHandler: (e: React.FocusEvent<HTMLInputElement>) => void;
};
const Input = ({isSignUp, value, type, placeholder, icon, changeHandler }: TInput) => {
  const [isfocus, setIsfocus] = useState(false)
  return (
    <motion.div
      initial={isSignUp?{ opacity: 0}:{}}
      animate={isSignUp?{ opacity: 1}:{}}
      exit={isSignUp?{ opacity: 0}:{}}
      className={`flex items-center justify-center gap-4 bg-lightOverlay backdrop-blur-md rounded-md w-full px-4 py-2 ${
        isfocus ? "shadow-md shadow-red-400" : "shadow-none"
      }`}
    >
      {icon}
      <input
        value={value}
        type={type}
        className="w-full h-full text-headingColor text-md font-semibold bg-transparent border-none  focus:outline-none focus:bg-transparent rounded-md px-2 py-1 "
        placeholder={placeholder}
        onChange={changeHandler}
        onFocus={() => setIsfocus(true)}
        onBlur={() => setIsfocus(false)}
      />
    </motion.div>
  );
}

export default Input