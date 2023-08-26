import React from "react";
import { IoMdDoneAll } from "react-icons/io";
import { Button } from "../lib";

const Done = ({ setOpen }) => {
  return (
    <div className="flex flex-col p-[12px] gap-[1rem] items-center">
      <IoMdDoneAll
        size={70}
        className="text-green-600 border border-green-600 p-3 rounded-full"
      />
      <p className="font-sofia text-neutral-300 text-[17px]">
        Your payment was made successful
      </p>
      <Button
        secondary
        text="Done"
        className="w-full"
        onClick={() => setOpen(false)}
      />
    </div>
  );
};

export default Done;
