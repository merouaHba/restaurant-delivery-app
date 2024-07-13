import React from 'react'

type TInput = {
  type: string;
  placeholder: string;
  changeHandler: (e: React.FocusEvent<HTMLInputElement>) => void;
};
const Input = ({type,placeholder,changeHandler}:TInput) => {
  return (
    <div className="flex items-center justify-center gap-4 bg-lightOverlay backdrop-blur-md rounded-md w-full px-4 py-2">
      <input
        type={type}
        className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
        placeholder={placeholder}
        onChange={changeHandler}
      />
    </div>
  );
}

export default Input