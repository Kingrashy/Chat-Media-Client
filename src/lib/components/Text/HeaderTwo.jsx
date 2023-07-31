import { Skeleton } from "@mui/joy";
import React from "react";

const HeaderTwo = ({
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
        <h2 className={`${className}`}>{text}</h2>
      )}
    </>
  );
};

export default HeaderTwo;
