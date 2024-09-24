import React from "react";
import { Container, HeaderContainer, IconContainer } from "./styles";
import { Subtitle } from "../../DesingSystem/Subtitle";

export interface NavigableCardProps {
    iconName: string;
    label: string;
    text: string;
    onClick?: () => void;
}

const NavigableCard: React.FC<NavigableCardProps> = ({
    iconName,
    label,
    text,
    onClick
}) => {

    const handleClick = () => {
        if (onClick) {
          onClick();
        }
    };
    
    return (
        <Container onClick={handleClick} data-testid="navigable-card-container" >
            <HeaderContainer>
                <Subtitle className="Subtitle" align="left" size="lg" bold={true}>{label}</Subtitle>
                <img className="Icon" src={`/icons/NavigableIcons/${iconName}.svg`} alt={iconName} data-testid="icon" />
            </HeaderContainer>
            <p className="Text">{text}</p>
            <IconContainer>
                <img className="Vector" src={`/icons/NavigableIcons/Vector.svg`} alt={"arrow icon"} />
                <img className="Lines" src={`/icons/NavigableIcons/lines.svg`} alt={"lines"} />
            </IconContainer>
        </Container>
    )
}

export default NavigableCard;