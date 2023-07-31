import React, { useEffect, useState } from "react";
import { StyledUserPost } from "../../styles/components/posts/styled";
import { ClipLoader } from "../../lib";
import { useSelector } from "react-redux";
import { getUserPosts } from "../../helper/fetch";
import PostItem from "../posts/PostItem";

const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const auth = useSelector((state) => state.CAuth);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const userPost = async () => {
      setIsLoading(true);
      const data = await getUserPosts(auth);
      setIsLoading(false);
      setPosts(data);
    };
    userPost();
  }, []);
  return (
    <StyledUserPost>
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-[70vh]">
          <ClipLoader />
        </div>
      ) : (
        posts?.map((post, index) => <PostItem post={post} key={index} />)
      )}
    </StyledUserPost>
  );
};

export default UserPosts;
