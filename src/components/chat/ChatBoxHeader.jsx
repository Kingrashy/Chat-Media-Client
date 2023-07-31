import React from "react";
import { PlaceholderImage } from "../../assets";
import { ParaText } from "../../lib";
import BackArrow from "../BackArrow";
import { MdVerified } from "react-icons/md";

const ChatBoxHeader = ({ chat, userdata }) => {
  return (
    <div className="fixed w-full p-[6px] border-b border-b-neutral-300 flex gap-[5px] items-center z-[90] bg-white">
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
      {userdata.verified && <MdVerified size={13} className="text-blue-600" />}
    </div>
  );
};

export default ChatBoxHeader;
