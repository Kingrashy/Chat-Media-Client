import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ParaText } from "../lib";

const BackArrow = () => {
  const navigate = useNavigate();
  return (
    <MdOutlineArrowBack
      size={25}
      className="cursor-pointer hidden max-[800px]:block"
      onClick={() => navigate(-1)}
    />
  );
};

export default BackArrow;
