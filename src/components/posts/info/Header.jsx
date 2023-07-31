import React from "react";
import {
  StyledPostHeader,
  StyledPostUserImage,
} from "../../../styles/components/posts/styled";
import { PlaceholderImage } from "../../../assets";
import { ParaText } from "../../../lib";
import { MdVerified } from "react-icons/md";

const Header = ({ post }) => {
  return (
    <StyledPostHeader>
      <div className="flex gap-[12px]">
        <StyledPostUserImage
          src={post.userProfile?.url || PlaceholderImage}
          className="rounded-full"
        />
        <ParaText text={post.name} className={"font-sofia text-[18px]"} />
        {post.verified && <MdVerified size={15} />}
      </div>
      <ParaText
        text="Follow"
        className="font-sofia text-blue-600 cursor-pointer"
      />
    </StyledPostHeader>
  );
};
export default Header;
