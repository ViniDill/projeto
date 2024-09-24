import React, { useState, useMemo } from "react";

import {
  Container,
  IconContainer,
  Input,
  ContainerEye,
  ContainerInput,
} from "./styles";

export interface LoginInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variation?: "email" | "password";
  error?: boolean;
}

const LoginInput: React.FC<LoginInputProps> = ({
  variation = "email",
  error = false,
  ...rest
}) => {
  const [controlHidden, setControlHidden] = useState<boolean>(false);

  const inputType = useMemo(() => {
    if (variation === "email") {
      return "text";
    }
    if (!controlHidden) {
      return "password";
    }
    return "text";
  }, [variation, controlHidden]);

  return (
    <Container error={error}>
      <IconContainer>
        <img
          src={variation === "email" ? "/letter.svg" : "/lockIcon.svg"}
          alt={variation === "email" ? "carta email" : "cadeado"}
        />
      </IconContainer>
      <ContainerInput>
        <Input data-testid="inputLogin" type={inputType} {...rest} />
      </ContainerInput>
      {variation === "password" && (
        <ContainerEye
          data-testid="eyeIcons"
          onClick={() => setControlHidden(!controlHidden)}
        >
          <img
            src={controlHidden ? "/closeEye.svg" : "/eye.svg"}
            alt={controlHidden ? "esconder senha" : "mostrar senha"}
          />
        </ContainerEye>
      )}
    </Container>
  );
};

export default LoginInput;
