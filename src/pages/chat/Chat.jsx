import React, { useEffect, useState } from "react";
import { Conversation, EmptyChatBox } from "../../components";

const Chat = () => {
  useEffect(() => {
    document.title = "Indox . Chat - Hotlesbian";
  });
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsActive(!document.hidden);
    };

    // Add event listener for visibilitychange event
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      // Clean up event listener on component unmount
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  return (
    <div className="flex relative w-[87.5%] max-[1024px]:w-[80.5%] max-[800px]:w-[91%] max-[700px]:w-full ">
      <Conversation isActive={isActive} />
      <EmptyChatBox />
    </div>
  );
};

export default Chat;
