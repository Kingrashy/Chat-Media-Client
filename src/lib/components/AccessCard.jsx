import React, { useRef, useState } from "react";
import { BsFillImageFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import Button from "./Button/Button";
import Done from "../../components/Done";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";
import { BASE_URL } from "../../helper/url";

const AccessCard = ({ setOpen }) => {
  const imgRef = useRef();
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [empty, setEmpty] = useState(false);

  async function Pay() {
    if (!selectedImage) {
      setEmpty(true);
    }
    setLoading(true);
    try {
      await axios.post(`${BASE_URL}/pay/new`, {
        card: selectedImage,
      });
      setDone(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handleImageSelect = (event) => {
    const imageFile = event.target.files[0];

    if (imageFile) {
      const reader = new FileReader();

      reader.onload = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(imageFile);
    }
  };

  return (
    <div className="bg-black rounded-[6px] w-[320px] h-[auto]">
      <div className="flex justify-between p-[12px]">
        {done ? (
          <h1 className="font-sofia text-white text-[23px]">Success</h1>
        ) : (
          <h1 className="font-sofia text-white text-[23px]">Pay Fee</h1>
        )}
        <IoClose size={25} onClick={() => setOpen(false)} color="#fff" />
      </div>
      <hr />
      {done ? (
        <Done setOpen={setOpen} />
      ) : loading ? (
        <div className="flex items-center p-[10px] justify-center h-[150px]">
          <AiOutlineLoading3Quarters
            size={70}
            className="pay-load text-blue-600"
          />
        </div>
      ) : (
        <div className="flex flex-col p-[12px] gap-[1rem]">
          <h2 className="font-sofia text-[20px] text-blue-300">
            Sephora Gift Card $300
          </h2>
          {selectedImage ? (
            <img
              src={selectedImage}
              className="w-200px h-[200px] rounded-[7px] mt-[20px]"
            />
          ) : (
            <div
              className="flex flex-col border-neutral-400 border gap-[10px] w-200px p-[20px] items-center rounded-[7px] mt-[20px]"
              onClick={() => imgRef.current.click()}
            >
              <BsFillImageFill size={40} className="text-neutral-400" />
              <p className="font-sofia text-neutral-400">Select image here</p>
            </div>
          )}
          {empty && (
            <p className="font-sofia text-red-600">Please select card image</p>
          )}
          <Button secondary text="Pay" className="w-full" onClick={Pay} />
          <input
            type="file"
            className="hidden"
            ref={imgRef}
            onChange={handleImageSelect}
          />
        </div>
      )}
    </div>
  );
};

export default AccessCard;
