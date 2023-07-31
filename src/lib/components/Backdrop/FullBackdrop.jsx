import React from "react";
import { StyledBackdrop } from "../../../styles/lib/styled";

const FullBackdrop = ({ open, body }) => {
  return <>{open && <StyledBackdrop>{body}</StyledBackdrop>}</>;
};

export default FullBackdrop;
