import { Skeleton } from "@mui/joy";
import React from "react";

const HeaderOne = ({
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
        <h1 className={`${className}`}>{text}</h1>
      )}
    </>
  );
};

export default HeaderOne;
