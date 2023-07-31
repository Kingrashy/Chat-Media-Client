import React, { useEffect, useState } from "react";
import { StyledPostFeed } from "../../styles/components/posts/styled";
import { useSelector } from "react-redux";
import { ClipLoader } from "../../lib";
import PostItem from "./PostItem";
import { getPosts } from "../../helper/fetch";
import SuggestedFeed from "../layout/SuggestedFeed";

const PostFeed = () => {
  const post = useSelector((state) => state.post);
  const isLoading = post.fetchStatus === "pending";
  // const [isLoading, setIsLoading] = useState(false);
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setIsLoading(true);
  //     const data = await getPosts();
  //     setPosts(data);
  //     setIsLoading(false);
  //   };
  //   fetchPosts();

  //   // Set an interval to fetch data every 5 seconds
  //   const intervalId = setInterval(fetchPosts, 5000);

  //   // Clean up the interval when the component unmounts
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <StyledPostFeed>
      <SuggestedFeed />
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-[70vh]">
          <ClipLoader />
        </div>
      ) : (
        post.posts?.map((post, index) => <PostItem post={post} key={index} />)
      )}
    </StyledPostFeed>
  );
};

export default PostFeed;
