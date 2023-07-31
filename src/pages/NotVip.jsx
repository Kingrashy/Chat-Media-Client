import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, ParaText } from "../lib";
import { MdWorkspacePremium } from "react-icons/md";
import { MessageUser } from "../helper/post";
import { useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";

const NotValid = () => {
  const { chatId } = useParams();
  const auth = useSelector((state) => state.CAuth);
  const chatStats = useSelector((state) => state.chats.chatPage);
  const senderId = auth?._id;
  const receiverId = "64c74a6119b963fa73da81df";
  const path = useLocation();
  const navigate = useNavigate();
  const chatPage = chatStats === true;
  const conver = path.pathname === "/direct/indox/";
  const [close, setClose] = useState(false);

  async function Chat() {
    await MessageUser(senderId, receiverId);
    navigate(`/direct/indox/`);
  }

  return (
    <div
      className={`${close ? "hidden" : "flex"} 
       flex-col fixed w-full left-0 right-0 items-center justify-center bottom-0 top-0 bg-[rgb(0,0,0,0.5)] z-[200]`}
    >
      <div className="bg-white w-[90%] rounded-[9px] p-[1rem] h-[auto] flex flex-col items-center justify-center">
        <div className="flex gap-1 w-full relative items-center justify-between">
          <ParaText
            text={"Notice"}
            className="font-sofia text-[25px] text-red-600"
          />
          <IoClose
            size={30}
            className="cursor-pointer p-1 bg-neutral-400 rounded-full"
            onClick={() => setClose(true)}
          />
        </div>
        <ParaText
          text={"Free tier has finished"}
          className="font-sofia text-[25px]"
        />
        <MdWorkspacePremium size={60} className="text-blue-600" />
        <ParaText
          text="Benefit"
          className="font-sofia text-[22px] text-neutral-600"
        />
        <p className="font-sofia text-neutra-500">
          After Subscription you get a live video of full naked girls
        </p>
        <p className="font-sofia text-neutra-500">
          Get Unlimited videos and photo's of top lesbians
        </p>
        <p className="font-sofia text-neutra-500">
          Get Sex full sex videos of lesbians fucking
        </p>
        <p className="font-sofia text-neutra-500">
          Get free access to chat any lesbain for free
        </p>
        <p className="font-sofia text-neutra-500">
          Get access to make free video call's with lesbian's
        </p>
        <Button secondary text="Subscribe" className="w-full" onClick={Chat} />
      </div>
    </div>
  );
};

export default NotValid;
