import React from "react";
import OwnLayout from "../user/OwnLayout";
import Suggested from "../user/Suggested";
import { StyledRightNav } from "../../styles/components/layout/styled";

const RightLayout = () => {
  return (
    <StyledRightNav>
      <OwnLayout />
      <Suggested />
    </StyledRightNav>
  );
};

export default RightLayout;
