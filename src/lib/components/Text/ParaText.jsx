import { Skeleton } from "@mui/joy";
import React from "react";

const ParaText = ({
  isLoading,
  text,
  loadingWidth,
  loadingHeight,
  className,
  onClick,
}) => {
  return (
    <>
      {isLoading ? (
        <Skeleton variant="text" width={loadingWidth} height={loadingHeight} />
      ) : (
        <p onClick={onClick} className={`${className}`}>
          {text}
        </p>
      )}
    </>
  );
};

export default ParaText;
