import React from "react";
import theme from "../../theme";

interface IconCloseProps {
  fill: "succcess" | "error" | "warning" | "help";
}

const IconClose: React.FC<IconCloseProps> = ({ fill }) => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.39999 14.6913L0.808685 13.1L6.40869 7.50002L0.808685 1.90002L2.39999 0.308716L7.99998 5.90872L13.6 0.308716L15.1913 1.90002L9.59128 7.50002L15.1913 13.1L13.6 14.6913L7.99998 9.09132L2.39999 14.6913Z"
        fill={theme.colors[fill]}
      />
    </svg>
  );
};

export default IconClose;
