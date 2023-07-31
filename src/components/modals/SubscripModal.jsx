import React from "react";
import { useSubscribeModel } from "../../hook";
import NotValid from "../../pages/NotVip";
import { BottomDivider, Button, FullBackdrop, ParaText } from "../../lib";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MessageUser } from "../../helper/post";
import { PiArrowSquareOut } from "react-icons/pi";

const SubscripModal = () => {
  const submodal = useSubscribeModel();
  const auth = useSelector((state) => state.CAuth);
  const senderId = auth._id;
  const receiverId = "64c74a6119b963fa73da81df";
  const navigate = useNavigate();

  const get = (
    <div className="flex gap-1 items-center">
      <ParaText text="Get in touch" />
      <PiArrowSquareOut size={19} />
    </div>
  );

  async function Chat() {
    await MessageUser(senderId, receiverId);
    navigate(`/direct/indox/`);
  }
  const body = (
    <div className="flex flex-col bg-white w-[90%] relative h-auto rounded-[10px]">
      <div className="flex justify-between p-[1rem]">
        <ParaText text="How to Subscribe" className="text-[19px] font-[500]" />
        <IoClose
          size={30}
          className="cursor-pointer p-1 bg-neutral-400 rounded-full"
          onClick={submodal.onClose}
        />
      </div>
      <BottomDivider />
      <div className="flex flex-col p-3 gap-[1rem]">
        <ParaText
          text="To subscribe to hotlesbians kindly get in touch with our admin or support team right in a way, to gain full access to naked videos, live videos, pictures, and so get contact of top lesbians, they can fuck your girl-friend if you want it's free"
          className="text-[17px] font-poppins font-[450] text-neutral-600"
        />
        <Button secondary text={get} onClick={Chat} />
        <Button
          className={"bg-black text-white"}
          text="Subscribe"
          onClick={Chat}
        />
      </div>
    </div>
  );
  return (
    <div>
      <FullBackdrop open={submodal.isOpen} body={body} />
    </div>
  );
};

export default SubscripModal;
