import React, { useState } from "react";
import { BottomDivider, ParaText } from "../../lib";
import { BsFillSignpost2Fill } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import {
  FollowDeatils,
  StyledUserInfo,
} from "../../styles/components/user/styled";
import UserPosts from "./UserPosts";

const UserInfo = ({ user }) => {
  const [upost, setupost] = useState(true);
  const [usaved, setusaved] = useState(false);
  function toggleSave() {
    setupost(!upost);
    setusaved(!usaved);
  }
  const post = (
    <div className="flex items-center gap-1">
      <BsFillSignpost2Fill />
      <ParaText text="Post" />
    </div>
  );

  const pd = (
    <div className="flex flex-col">
      <ParaText
        text={"234"}
        className="font-[600] items-center justify-center text-center"
      />
      <ParaText text="Post" className="font-[400] -translate-y-2 text-[14px]" />
    </div>
  );
  const fd = (
    <div className="flex flex-col">
      <ParaText
        text={"234M"}
        className="font-[600] items-center justify-center text-center"
      />
      <ParaText
        text="Followers"
        className="font-[400] -translate-y-2 text-[14px]"
      />
    </div>
  );
  const fsd = (
    <div className="flex flex-col">
      <ParaText
        text={"24M"}
        className="font-[600] items-center justify-center text-center"
      />
      <ParaText
        text="Following"
        className="font-[400] -translate-y-2 text-[14px]"
      />
    </div>
  );

  const save = (
    <div className="flex items-center gap-1">
      <BiBookmark />
      <ParaText text="Saved" />
    </div>
  );
  return (
    <StyledUserInfo>
      <BottomDivider className="hideFollow" />
      <FollowDeatils>
        <ParaText text={pd} className="font-poppins" />
        <ParaText text={fd} className="font-poppins" />
        <ParaText text={fsd} className="font-poppins" />
      </FollowDeatils>
      <BottomDivider />
      {/* <div className="flex gap-[2rem] items-center justify-center">
        <ParaText
          text={post}
          className={`font-poppins font-[600] text-[14px] cursor-pointer p-2 ${
            upost && "border-t-2 border-t-black"
          }`}
          onClick={toggleSave}
        />
        <ParaText
          text={save}
          className={`font-poppins font-[600] text-[14px] cursor-pointer p-2 ${
            usaved && "border-t-2  border-t-black"
          }`}
          onClick={toggleSave}
        />
      </div> */}
      {post ? <UserPosts /> : ""}
    </StyledUserInfo>
  );
};

export default UserInfo;
