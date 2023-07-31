import React, { useEffect, useState } from "react";
import { PlaceholderImage } from "../../assets";
import { Badge, ParaText } from "../../lib";
import { getUnreadMessage, getUserById } from "../../helper/fetch";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selecteChat } from "../../redux/authSlice";
import { OnlineDot } from "../../styles/components/chat/styled";
import { ReadMessage } from "../../helper/post";
import { MdVerified } from "react-icons/md";
import { setChat, setChatPage } from "../../redux/chartSlice";

const ConversationItem = ({ chat, currentUserId, isActive }) => {
  const [userData, setUserData] = useState([]);
  const [unread, setUnread] = useState([]);

  useEffect(() => {
    const getunread = async () => {
      const data = await getUnreadMessage(chat);
      setUnread(data);
    };
    getunread();
  }, [unread]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserInfo = async () => {
      const userId = chat.members.find((id) => id !== currentUserId);
      const user = await getUserById(userId);
      setUserData(user);
    };
    getUserInfo();
  }, []);

  async function Chat(chat) {
    dispatch(selecteChat(chat._id));
    dispatch(setChat(chat));
    dispatch(setChatPage(true));
    await ReadMessage(chat);
    navigate(`/direct/indox/${chat._id}`);
  }

  return (
    <div
      className="flex gap-2 items-center hover:bg-neutral-100 w-full p-1 cursor-pointer"
      onClick={() => Chat(chat)}
    >
      <div className="flex flex-col relative">
        <img
          src={userData.userProfile?.url || PlaceholderImage}
          alt="UserProfile"
          className="w-[60px] h-[60px] rounded-full"
        />
        <Badge content={unread.length} title={""} />
      </div>
      <div className="flex flex-col">
        <div className="flex gap-1">
          <ParaText
            text={userData.name}
            className="font-sofia text-[19px] max-[1024px]:hidden max-[800px]:block"
          />
          {userData.verified && (
            <MdVerified size={13} className="text-blue-600 translate-y-2" />
          )}
        </div>
        {isActive ? (
          <ParaText
            text="Online"
            className="max-[1024px]:hidden max-[800px]:block font-sofia text-green-500"
          />
        ) : (
          <ParaText
            text="Offilne"
            className="max-[1024px]:hidden max-[800px]:block font-sofia text-neutral-500"
          />
        )}
      </div>
    </div>
  );
};

export default ConversationItem;
