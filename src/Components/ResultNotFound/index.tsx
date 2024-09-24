import { Container, ImageContainer, TextContainer } from "./styles"
import { Subtitle } from "../../DesingSystem/Subtitle";
import Spacer from "../Spacer";
import { useTranslation } from "react-i18next";

const ResultNotFound = () => {
    const { t } = useTranslation();
    
    return (
        <Container>
            <ImageContainer>
                <img src="./icons/not_found.svg" alt="Product Not Found" className="Image" />
            </ImageContainer>
            <Spacer size="m" />
            <TextContainer>
                <Subtitle size="xl" bold={true} className="Subtitle">
                    {t("Sorry_no_products_were_found")}
                </Subtitle>
            </TextContainer>
        </Container>
    );
}

export default ResultNotFound;