import React, { useEffect, useState } from "react";
import Header from "./info/Header";
import { StyledPostImage } from "../../styles/components/posts/styled";
import { BottomDivider } from "../../lib";
import ActionBtn from "./info/ActionBtn";
import { getPostLikes } from "../../helper/fetch";

const PostItem = ({ post }) => {
  const [plikedata, setplikedata] = useState([]);
  useEffect(() => {
    const getlikes = async () => {
      const data = await getPostLikes(post);
      setplikedata(data);
    };
    getlikes();
  }, [plikedata]);
  return (
    <div className="flex flex-col w-full gap-[1rem] relative">
      <BottomDivider />
      <Header post={post} />
      <StyledPostImage src={post.postImage?.url} />
      <ActionBtn post={post} plikes={plikedata} />
      <BottomDivider />
    </div>
  );
};

export default PostItem;
