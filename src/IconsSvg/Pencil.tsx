import React from "react";

import theme from "../theme";

interface PorpsSvg {
  width?: number;
  height?: number;
  fill?: string;
}

const PercilSvg: React.FC<PorpsSvg> = ({ width, height, fill }) => {
  return (
    <svg
      width={width ? width : 15}
      height={height ? height : 15}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.80307 13.1911H2.91941L10.735 5.37273L9.62916 4.26123L1.80307 12.09V13.1911ZM0 15V11.332L10.8392 0.48374C11.006 0.313499 11.1877 0.19032 11.3846 0.1142C11.5814 0.0380667 11.7879 0 12.0041 0C12.2168 0 12.4227 0.0380667 12.6219 0.1142C12.8212 0.19032 13.0076 0.311763 13.1813 0.478531L14.5164 1.79849C14.6831 1.96874 14.8054 2.15439 14.8832 2.35543C14.9611 2.55647 15 2.76232 15 2.97297C15 3.19326 14.9609 3.40458 14.8828 3.60693C14.8046 3.80928 14.6825 3.99264 14.5164 4.15699L3.67718 15H0ZM10.175 4.82151L9.62916 4.26123L10.735 5.37273L10.175 4.82151Z"
        fill={fill ? fill : theme.colors.Primary600}
      />
    </svg>
  );
};

export default PercilSvg;
