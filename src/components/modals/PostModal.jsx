import React from "react";
import { BottomDivider, FullBackdrop, HeaderOne } from "../../lib";
import { IoClose } from "react-icons/io5";
import { usePostModal } from "../../hook";
import PostForm from "../form/PostForm";

const PostModal = () => {
  const postmodal = usePostModal();
  const body = (
    <div className="bg-white w-[500px] max-[700px]:w-[90%] shadow shadow-slate-600 rounded-md h-auto">
      <div className="flex justify-between p-[1rem]">
        <HeaderOne
          text="Create a new post"
          className="font-sofia text-[23px]"
        />
        <IoClose
          size={25}
          className="cursor-pointer"
          onClick={postmodal.onClose}
        />
      </div>
      <BottomDivider />
      <PostForm />
    </div>
  );
  return <FullBackdrop open={postmodal.isOpen} body={body} />;
};

export default PostModal;
