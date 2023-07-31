import { Skeleton } from "@mui/joy";
import React from "react";

const HeaderThree = ({
  isLoading,
  text,
  loadingWidth,
  loadingHeight,
  className,
}) => {
  return (
    <>
      {isLoading ? (
        <Skeleton variant="text" width={loadingWidth} height={loadingHeight} />
      ) : (
        <h3 className={`${className}`}>{text}</h3>
      )}
    </>
  );
};

export default HeaderThree;
