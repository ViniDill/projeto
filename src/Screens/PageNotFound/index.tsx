import React from 'react';
import { Container, TextContainer, Image } from "./styles";
import { useTranslation } from "react-i18next";
import { H4 } from "../../DesingSystem/Title";
import Link from '../../DesingSystem/Link';
import Spacer from '../../Components/Spacer';

const PageNotFound: React.FC = () => {
    const { t } = useTranslation();
  
    return (
        <Container>
            <Image>
                <img src="/icons/404.gif" alt="Error 404 Icon" />
            </Image>
            <TextContainer>
                <H4>{t("Page_Not_Found_Oops_Something_went_wrong")}</H4>
                <span>{t("Page_Not_Found_We_couldnt_find_this_page_or_the_link_is_incorrect")}</span>
                <Spacer size='2xl' />
                <Link href='/'>{t("Page_Not_Found_Return_to_our_system")}</Link>
            </TextContainer>
        </Container>
    );
};

export default PageNotFound;