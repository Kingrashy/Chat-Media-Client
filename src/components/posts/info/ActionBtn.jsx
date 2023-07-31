import React from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { FaRegCommentAlt } from "react-icons/fa";
import { ParaText } from "../../../lib";
import { LikePost } from "../../../helper/post";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ActionBtn = ({ post, plikes }) => {
  const auth = useSelector((state) => state.CAuth);
  const navigate = useNavigate();
  const postId = post._id;
  const userId = auth._id;
  const liked = plikes.includes(userId);
  async function Like() {
    if (!auth?._id) {
      navigate("/auth/login");
    }
    await LikePost(postId, userId);
  }
  return (
    <div className="flex flex-col gap-[1.2rem]">
      <div className="flex gap-3">
        {liked ? (
          <BsHeartFill
            size={25}
            className="cursor-pointer text-red-600"
            onClick={Like}
          />
        ) : (
          <BsHeart
            size={25}
            className="cursor-pointer text-red-600"
            onClick={Like}
          />
        )}
        <FaRegCommentAlt size={25} className="cursor-pointer text-blue-600" />
      </div>
      <div className="flex">
        <ParaText text={post.body} className={"font-poppins font-[400]"} />
      </div>
    </div>
  );
};

export default ActionBtn;
