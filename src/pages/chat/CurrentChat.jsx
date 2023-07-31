import React, { useEffect, useState } from "react";
import { ChatBox, Conversation } from "../../components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCurrentChat, getUserById } from "../../helper/fetch";

const CurrentChat = () => {
  const auth = useSelector((state) => state.CAuth);
  const chat = useSelector((state) => state.chats.chat);
  const { chatId } = useParams();
  // const [chat, setChat] = useState([]);
  const [userdata, setUserdata] = useState([]);
  // useEffect(() => {
  //   const getCurrent = async () => {
  //     const data = await getCurrentChat(chatId);
  //     setChat(data);
  //   };
  //   getCurrent();
  // }, [chat]);

  useEffect(() => {
    const getUser = async () => {
      const userId = chat.members?.find((id) => id !== auth._id);
      const user = await getUserById(userId);
      setUserdata(user);
    };
    getUser();
  }, []);

  return (
    <div className="flex relative w-[87.5%] max-[1024px]:w-[80.5%] max-[800px]:w-[91%] max-[700px]:w-full ">
      <Conversation />
      <ChatBox chat={chat} userdata={userdata} chatId={chat._id} auth={auth} />
    </div>
  );
};

export default CurrentChat;
