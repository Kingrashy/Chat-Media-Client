import React from "react";
import { BiSolidChat } from "react-icons/bi";
import { ParaText } from "../../lib";

const EmptyChatBox = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-[1rem] max-[800px]:hidden">
      <BiSolidChat size={70} />
      <ParaText
        text="Your Messages"
        className="font-poppins text-neutral-700 text-[18px]"
      />
      <ParaText
        text="Select a chat to start a conversation"
        className="font-poppins text-neutral-500 text-[15px]"
      />
    </div>
  );
};

export default EmptyChatBox;
