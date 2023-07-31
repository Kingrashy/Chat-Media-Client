import React, { useEffect, useState } from "react";
import { BottomDivider, ClipLoader, ParaText } from "../../lib";
import { findUserChat } from "../../helper/fetch";
import { useSelector } from "react-redux";
import ConversationItem from "./ConversationItem";
import { useParams } from "react-router-dom";
import { StyledConversation } from "../../styles/components/chat/styled";
import BackArrow from "../BackArrow";

const Conversation = ({ isActive }) => {
  const { chatId } = useParams();
  const auth = useSelector((state) => state.CAuth);
  const [charts, setCharts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getCharts = async () => {
      setIsLoading(true);
      const data = await findUserChat(auth);
      setCharts(data);
      setIsLoading(false);
    };
    getCharts();
  }, []);
  return (
    <StyledConversation
      chatId={chatId}
      className={`border-r border-neutral-300 `}
    >
      <div className="flex gap-2 items-center p-2">
        <BackArrow />
        <ParaText
          text="Conversation"
          className="text-[19px] font-[600] max-[1024px]:hidden max-[800px]:block"
        />
      </div>
      <ParaText
        text="Chat"
        className="text-[19px] font-[600] hidden p-2 max-[1024px]:block"
      />
      <BottomDivider />
      <div className="flex flex-col mt-[2rem] h-full gap-[1rem] overflow-y-auto relative w-full">
        {isLoading ? (
          <div className="flex items-center h-full justify-center">
            <ClipLoader />
          </div>
        ) : (
          charts.map((chat, index) => (
            <ConversationItem
              chat={chat}
              key={index}
              currentUserId={auth._id}
              isActive={isActive}
            />
          ))
        )}
      </div>
    </StyledConversation>
  );
};

export default Conversation;
