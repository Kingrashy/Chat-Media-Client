import React from "react";
import { Button, ParaText } from "../../lib";
import { MdVerified } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RiVipDiamondFill } from "react-icons/ri";
import { StyledProfileInfo } from "../../styles/components/user/styled";
import { useSelector } from "react-redux";
import { useEditModal, useSubscribeModel } from "../../hook";
import { MessageUser } from "../../helper/post";
import { useNavigate } from "react-router-dom";

const Info = ({ user }) => {
  const editmodel = useEditModal();
  const submodal = useSubscribeModel();
  const auth = useSelector((state) => state.CAuth);
  const navigate = useNavigate();

  const senderId = auth._id;
  const receiverId = user._id;

  async function Chat() {
    await MessageUser(senderId, receiverId);
    navigate("/direct/indox/");
  }

  return (
    <StyledProfileInfo>
      <div className="flex items-center gap-5 max-[700px]:flex-col">
        <div className="flex gap-2 items-center">
          <ParaText text={user?.name} className="font-sofia text-[25px] name" />

          {user.verified && <MdVerified size={19} className="text-blue-600" />}
          <BsThreeDots
            size={20}
            className="cursor-pointer dot2"
            onClick={submodal.onOpen}
          />
        </div>
        <div className="flex gap-1 relative">
          {auth?._id === user._id ? (
            <Button
              secondary
              text="Edit profile"
              onClick={editmodel.onOpen}
              className="w-[80px] h-[29px] text-[14px]"
            />
          ) : (
            <>
              <Button
                secondary
                text="Follow"
                className="w-[80px] h-[29px] text-[14px]"
              />
              <Button
                soft
                text="Message"
                className="w-[80px] h-[29px] text-[14px]"
                onClick={Chat}
              />
            </>
          )}
        </div>
        <BsThreeDots size={20} className="cursor-pointer dot" />
      </div>
      <div className="flex justify-between follow">
        <ParaText text={`146M Followers`} className={"font-sofia"} />
        <ParaText text={`10 Following`} className={"font-sofia"} />
        <ParaText text={`600 Post`} className={"font-sofia"} />
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2">
          {/* <div className="flex gap-1">
            <RiVipDiamondFill size={20} className="text-blue-400" />
            <ParaText
              text="Vip user"
              className={"font-sofia text-neutral-500"}
            />
          </div> */}
        </div>
      </div>
    </StyledProfileInfo>
  );
};

export default Info;
