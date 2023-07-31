import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ParaText } from "../lib";
import { useDispatch } from "react-redux";
import { setChatPage } from "../redux/chartSlice";

const BackArrow = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <MdOutlineArrowBack
      size={25}
      className="cursor-pointer hidden max-[800px]:block"
      onClick={() => {
        navigate(-1);
        // dispatch(setChatPage(false));
      }}
    />
  );
};

export default BackArrow;
