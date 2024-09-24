import React, { useMemo } from "react";
import { StyledButton } from "./styles";

type MessageType = "sms" | "whatsapp" | "email";

export interface ButtonSendCodeProps {
  type: MessageType;
  onClick?: () => void;
}

export const ButtonSendCode: React.FC<ButtonSendCodeProps> = ({
  type, 
  onClick,
}) => {
  const { iconName, label } = useMemo(() => {
    let iconName: string;
    let label: string;

    if (type === "sms") {
      iconName = "SMSIcon.svg";
      label = "SMS";
    } else if (type === "whatsapp") {
      iconName = "WhatsappIcon.svg";
      label = "WhatsApp";
    } else {
      iconName = "EmailIcon.svg";
      label = "E-mail";
    }

    return { iconName, label };
  }, [type]);

  return (
    <StyledButton 
      onClick={onClick}
    >
      <div className="icon">
        <img src={`/icons/${iconName}`} alt={`${label} Icon`} />
      </div>
      <div className="label">
        <span>{label}</span>
      </div>
    </StyledButton>
  );
};

export default ButtonSendCode;