import React, { useRef, useState } from "react";
import { FaImage } from "react-icons/fa";
import { Button, FullBackdrop, ParaText } from "../../lib";
import { SendMessage } from "../../helper/post";
import { IoClose } from "react-icons/io5";

const ChatInput = ({ chatId, currentUserId }) => {
  const imgRef = useRef();
  const [photo, setPhoto] = useState("");
  const [data, setData] = useState({
    text: "",
    chatId: chatId,
    textImg: "",
    senderId: currentUserId,
  });
  const send = !data.text;

  async function Send() {
    await SendMessage(data);
    setData({ ...data, text: "" });
    setData({ ...data, textImg: "" });
    setPhoto("");
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      Send(); // Call the Send function when Enter key is pressed
      // You can also pass the 'message' state as an argument to Send function if needed
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // The reader.result will contain the data URL of the file
        const dataURL = reader.result;
        setPhoto(dataURL);
        setData({ ...data, textImg: dataURL });
      };

      reader.readAsDataURL(file);
    }
  };

  const body = (
    <div className="flex flex-col bg-white w-[400px] h-auto p-[1rem] rounded-[6px] gap-[1rem] relative">
      <IoClose
        size={30}
        onClick={() => setPhoto("")}
        className="cursor-pointer bg-neutral-400 p-1 rounded-full absolute right-2 top-2"
      />
      <img src={photo} className="w-full h-[500px]" />
      <Button secondary text="Send" onClick={Send} />
    </div>
  );

  return (
    <div className="fixed w-full p-3 pb-3 pt-4 border-t bottom-0 bg-white border-t-neutral-300 h-[55px] flex gap-[1rem] items-center z-[90]">
      <FullBackdrop open={photo} body={body} />
      <div className="flex border border-neutral-400 p-2 rounded-[13px] w-[67%] h-[40px] justify-between items-center relative max-[700px]:w-full">
        <input
          type="text"
          className="bg-transparent p-1 outline-none border-none w-[800px] max-[700px]:w-[80px]"
          placeholder="Message..."
          value={data.text}
          onKeyPress={handleKeyPress}
          onChange={(e) => setData({ ...data, text: e.target.value })}
        />
        {send ? (
          <FaImage
            // size={25}
            className="cursor-pointer text-[25px] msgIcon"
            onClick={() => imgRef.current.click()}
          />
        ) : (
          <ParaText
            text="Send"
            onClick={Send}
            className="text-blue-600 cursor-pointer font-sofia"
          />
        )}
        <input
          type="file"
          ref={imgRef}
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default ChatInput;
