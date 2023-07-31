import React, { useState } from "react";
import { ParaText } from "../../lib";
import { PlaceholderImage } from "../../assets";

const Messgaes = ({ msg, currentUserId, userdata, messages, index }) => {
  const sender = msg.senderId === currentUserId;
  const recievier = msg.senderId !== currentUserId;
  const isPreviousSender =
    index > 0 && messages[index - 1]?.senderId === currentUserId;
  const [isFullWidth, setIsFullWidth] = useState(false);

  const toggleFullWidth = () => {
    setIsFullWidth((prev) => !prev);
  };

  return (
    <div
      key={msg._id}
      className={`${
        sender ? "justify-end self-end" : "flex gap-2 items-center"
      }`}
    >
      {recievier ? (
        <img
          src={userdata.userProfile?.url || PlaceholderImage}
          alt="Sender Profile"
          className="w-[30px] h-[30px] rounded-full"
        />
      ) : (
        ""
      )}
      {msg.text && (
        <ParaText
          text={msg?.text}
          className={`font-poppins message-con font-[400] max-w-[400px] ${
            isPreviousSender ? "ownTw" : ""
          } ${
            sender ? "bg-blue-600 text-white own" : "bg-neutral-300 msg"
          } p-[8px] w-auto`}
        />
      )}
      {msg?.textImg && (
        <div
          className={`cursor-pointer ${
            isFullWidth
              ? "fixed top-0 left-0 w-screen h-screen z-[100] bottom-0 flex items-center justify-center bg-[rgb(0,0,0,0.5)]"
              : ""
          }`}
          onClick={toggleFullWidth}
        >
          <img
            src={msg.textImg?.url}
            alt="Message Photo"
            className={`mx-auto ${
              isFullWidth
                ? "w-[80%] max-[700px]:w-full h-auto"
                : "w-[300px] rounded-[10px] max-[700px]:mb-0 cursor-pointer"
            }`}
          />
        </div>
      )}
    </div>
  );
};

export default Messgaes;
