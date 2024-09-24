import React from "react";

import theme from "../theme";

interface PorpsSvg {
  width?: number;
  height?: number;
  fill?: string;
}

const TrashSvg: React.FC<PorpsSvg> = ({ width, height, fill }) => {
  return (
    <svg
      width={width || 15}
      height={height || 17}
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33329 17C2.77192 17 2.29377 16.8019 1.89884 16.4058C1.50391 16.0096 1.30645 15.53 1.30645 14.9668V3.34366H0V1.31052H5.02142V0H9.96691V1.31052H15V3.34366H13.6936V14.9562C13.6936 15.5313 13.4961 16.0157 13.1012 16.4094C12.7062 16.8031 12.2281 17 11.6667 17H3.33329ZM11.6667 3.34366H3.33329V14.9668H11.6667V3.34366ZM5.05062 13.2676H6.94314V5.03706H5.05062V13.2676ZM8.05686 13.2676H9.94938V5.03706H8.05686V13.2676Z"
        fill={fill ? fill : theme.colors.Secundary700}
      />
    </svg>
  );
};

export default TrashSvg;
