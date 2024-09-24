import styled from "styled-components";
import media from "styled-media-query";
import theme from "../../theme";

export const Container = styled.div`
  width: 500px;
  ${media.lessThan("medium")`
  width: 320px;
  `}
`;

export const AlignForgotPassword = styled.div`
  display: flex;
  justify-content: end;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const UploadImageContainer = styled.div`

  width: 284px;
  height: 258px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;


  `

export const TextContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  .Span-Upload-Image {
    text-align: left;
    margin-left: 20px;
    color: ${theme.colors.neutrals60};
  }
`

export const NotFoundContainer = styled.div`
  width: 1000px;
  background-color: white;
  padding: ${theme.spacing.l} ${theme.spacing["2xl"]} ${theme.spacing.xl};

  ${media.lessThan("medium")`
    width: 350px;
    padding: ${theme.spacing.s} ${theme.spacing.m} ${theme.spacing.s};
  `}
`

export const StageStatusContainer = styled.div`
  display: FLEX;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: BLUE;
  gap: 20px;
  padding: 20px;
`