import React from "react";
import { PlaceholderImage } from "../../assets";

const SuggestedItem = ({ user }) => {
  return (
    <div className="flex flex-col relative h-[200px] border border-neutral-400 w-[150px]">
      <img
        src={user.userProfile?.url || PlaceholderImage}
        alt=""
        className="w-12 h12px rounded-full"
      />
    </div>
  );
};

export default SuggestedItem;
