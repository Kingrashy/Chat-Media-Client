import React from "react";
import { PlaceholderImage } from "../../assets";
import { ParaText } from "../../lib";
import BackArrow from "../BackArrow";

const ChatBoxHeader = ({ chat, userdata }) => {
  return (
    <div className="fixed w-full p-[6px] border-b border-b-neutral-300 flex gap-[1rem] items-center z-[90] bg-white">
      <BackArrow />
      <img
        src={userdata.userProfile?.url || PlaceholderImage}
        alt="UserProfile"
        className="w-[35px] h-[35px] rounded-full"
      />
      <ParaText
        text={userdata.name}
        className="font-sofia text-[18px] max-[1024px]:hidden max-[800px]:block"
      />
    </div>
  );
};

export default ChatBoxHeader;
