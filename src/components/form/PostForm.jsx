import React, { useRef, useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Button, ParaText } from "../../lib";
import { Textarea } from "@mui/joy";
import { createPosts } from "../../redux/postSlice";

const PostForm = () => {
  const [photo, setPhoto] = useState("");
  const auth = useSelector((state) => state.CAuth);
  const load = useSelector((state) => state.post.createStatus);
  const dispatch = useDispatch();
  const isLoading = load === "pending";
  const imgRef = useRef();
  const [data, setData] = useState({
    body: "",
    postImage: "",
    userId: auth._id,
  });
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // The reader.result will contain the data URL of the file
        const dataURL = reader.result;
        setPhoto(dataURL);
        setData({ ...data, postImage: dataURL });
      };

      reader.readAsDataURL(file);
    }
  };
  function Post() {
    dispatch(createPosts(data));
  }
  return (
    <div className="flex flex-col relative p-[1rem] justify-center items-center w-full gap-[1rem]">
      {photo ? (
        <img src={photo} className="w-full h-[400px]" />
      ) : (
        <div className="flex flex-col justify-center items-center">
          <FaPhotoVideo
            size={60}
            className="text-neutral-500 cursor-pointer"
            onClick={() => imgRef.current.click()}
          />
          <ParaText
            className="text-neutral-700 font-poppins font-[400] text-[15px]"
            text="Click here to add posts image"
          />
        </div>
      )}
      <input
        type="file"
        ref={imgRef}
        onChange={handleImageChange}
        className="hidden"
      />
      <Textarea
        placeholder={`What on your mind?`}
        sx={{ width: "100%" }}
        value={data.body}
        onChange={(e) => setData({ ...data, body: e.target.value })}
      />
      <Button
        text="Share"
        secondary
        onClick={Post}
        className={"w-full"}
        isLoading={isLoading}
      />
    </div>
  );
};

export default PostForm;
