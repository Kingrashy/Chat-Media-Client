import React, { useCallback, useEffect, useRef, useState } from "react";
import { getMessages } from "../../helper/fetch";
import { ClipLoader, ParaText } from "../../lib";
import Messgaes from "./Messgaes";

const ChatMessage = ({ chatId, currentUserId, userdata }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMsgs = async () => {
      const data = await getMessages(chatId);
      setMessages(data);
    };
    getMsgs();
  }, [messages]);
  const messageContainerRef = useRef();

  useEffect(() => {
    messageContainerRef.current?.scrollIntoView({ behavoir: "smooth" });
  }, [messages]);

  return (
    <div className="relative w-full overflow-y-auto flex flex-col gap-3 p-[10px] h-full mt-12 pb-[5rem]">
      {messages?.map((msg, index) => (
        <Messgaes
          key={index}
          msg={msg}
          currentUserId={currentUserId}
          userdata={userdata}
          messages={messages}
          index={index}
          messageContainerRef={messageContainerRef}
        />
      ))}
    </div>
  );
};

export default ChatMessage;
