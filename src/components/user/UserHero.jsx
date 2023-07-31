import React from "react";
import { PlaceholderImage } from "../../assets";
import Info from "./Info";
import { Icon } from "@iconify/react";
import {
  ProfileImage,
  StyledUserHero,
} from "../../styles/components/user/styled";

const UserHero = ({ user }) => {
  return (
    <StyledUserHero>
      <ProfileImage
        src={user?.userProfile?.url || PlaceholderImage}
        alt="Profile"
        className="rounded-full "
      />
      {/* <Icon
        icon="mingcute:vip-2-fill"
        color="gold"
        fontSize={40}
        className="absolute translate-x-[1rem] icon"
      /> */}
      <Info user={user} />
    </StyledUserHero>
  );
};

export default UserHero;
