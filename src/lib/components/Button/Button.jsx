import React from "react";
import ClipLoader from "../Loader/ClipLoader";

const Button = ({
  text,
  secondary,
  solid,
  soft,
  className,
  disabled,
  onClick,
  isLoading,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center h-9 rounded-[5px] font-[500] hover:opacity-75 border-none outline-none ${
        secondary && "bg-blue-600 text-white"
      } ${solid && "bg-slate-500 text-black"} ${
        soft && "bg-neutral-400 text-black"
      }`}
    >
      {isLoading ? <ClipLoader /> : text}
    </button>
  );
};

export default Button;
