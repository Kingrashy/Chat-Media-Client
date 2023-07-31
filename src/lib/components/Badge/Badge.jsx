import React, { useEffect } from "react";

const Badge = ({
  content,
  bgBlue,
  borderWhite,
  hasBorder,
  className,
  title,
}) => {
  if (content === 0) {
    return null;
  }
  return (
    <div
      title={title}
      className={`absolute flex items-center justify-center border border-white font-sofia ${
        bgBlue ? "bg-blue-600 text-white" : "bg-red-600 text-white"
      } w-5 h-5 rounded-full ${className}`}
    >
      {content}
    </div>
  );
};

export default Badge;
