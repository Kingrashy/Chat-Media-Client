import React, { useEffect, useState } from "react";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { ReadMessage } from "../../helper/post";

const ChatBox = ({ chatId, auth, userdata, chat }) => {
  useEffect(() => {
    const readmsg = async () => {
      await ReadMessage(chat);
    };
    readmsg();
  });
  return (
    <div className="flex flex-col relative w-full h-[100vh]">
      <ChatBoxHeader chat={chat} userdata={userdata} />
      <ChatMessage
        chatId={chatId}
        currentUserId={auth._id}
        userdata={userdata}
      />
      <ChatInput currentUserId={auth._id} chatId={chatId} />
    </div>
  );
};

export default ChatBox;
