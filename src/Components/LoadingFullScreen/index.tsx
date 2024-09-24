import React from "react";
import Lottie from "lottie-react";
import Animation from "./inovadorsolar.json";

import { Container } from "./styles";

const LoadingFullScreen: React.FC = () => {
  return (
    <Container data-testid="loading-container">
      <div>
        <Lottie animationData={Animation} />
      </div>
    </Container>
  );
};

export default LoadingFullScreen;
