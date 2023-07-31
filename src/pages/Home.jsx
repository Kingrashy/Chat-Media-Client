import React, { useEffect } from "react";
import { PostFeed, RightLayout } from "../components";
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/postSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  useEffect(() => {
    document.title = "Home - HotLesbians";
  });
  return (
    <div className="flex justify-between max-[700px]:w-full max-[700px]:p-[5px] p-[5rem] w-[80%] max-[1024px]:w-[90%] relative">
      <PostFeed />
      <RightLayout />
    </div>
  );
};

export default Home;
