import React, { useEffect, useState } from "react";
import { Button } from "../lib";
import AccessCard from "../lib/components/AccessCard";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Access = () => {
  useEffect(() => {
    document.title = "Access - Transgen";
  });

  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center flex-col w-full h-full justify-center relative">
      <div className="flex flex-col items-center mt-[50px] relative">
        <h1 className="font-bold mt-10 text-[22px] font-sofia">
          Welcome to Transgen
        </h1>
        <p className="font-[600] text-[17px] font-sofia">
          A premium porn site for fans, access fee costs
        </p>
        <p className="font-poppins font-[800] text-[26px] text-blue-500">
          $300
        </p>
        <Button
          secondary
          text="Get access"
          className="w-36"
          onClick={() => setOpen(true)}
        />
        <div className="flex flex-col w-[100%] bg-blue-600 h-[250px] p-[20px] mt-[20px] fixed bottom-0">
          <p className="font-sofia text-white text-[18px] flex items-center">
            Get access with a one time fee of $300
          </p>
          <p className="font-sofia text-white text-[18px] flex items-center">
            Get unlimited videos and pictures live videos
          </p>
          <p className="font-sofia text-white text-[18px] flex items-center">
            Get live videos and pictures from models
          </p>
          <Button
            text="Get access now"
            className="w-36 bg-white mt-5"
            onClick={() => setOpen(true)}
          />
          {open && (
            <div className="fixed w-full h-full bg-[rgb(0,0,0,0.7)] flex items-center top-0 left-0 right-0 bottom-0 justify-center">
              <AccessCard setOpen={setOpen} />
            </div>
          )}
          {/* <Link to="https://twitter.com/allenrose645" target="_blank">
            <FaTwitter size={30} color="#fff" className="mt-[30px]" />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Access;
