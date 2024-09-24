import React from "react";

import { ImageSpacer, ContainerImage, ContainerDesktop } from "./styles";

export interface PropsHeader {
  image?: string;
}

const HeaderMobileLogin: React.FC<PropsHeader> = ({ image }) => {
  return (
    <>
      <ImageSpacer>
        <ContainerImage>
          <img
            src={image || "/logoInovador.png"}
            alt="imagem do header mobile"
          />
        </ContainerImage>
      </ImageSpacer>
      <ContainerDesktop>
        <img src={image || "/logoInovador.png"} alt="imagem do header" />
      </ContainerDesktop>
    </>
  );
};

export default HeaderMobileLogin;
