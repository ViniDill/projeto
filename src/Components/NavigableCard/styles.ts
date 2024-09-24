import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  width: 274px;
  height: 271px;
  border-radius: 20px;
  background-color: ${theme.colors.neutrals10};

  margin: ${theme.spacing.m};

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  .Text {
    width: 188px;
    font-size: 10px;
    margin: 0 0 0 ${theme.spacing.xl};
  }

  &:hover {
    background-color: ${theme.colors.neutrals20};
  }

  &:active {
    background-color: ${theme.colors.neutrals0};
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .Subtitle {
    margin-top: ${theme.spacing["2xl"]};
    margin-left: ${theme.spacing.xl};
  }

  .Icon {
    margin: 20px;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .Vector {
    margin-top: ${theme.spacing["2xl"]};
    margin-left: ${theme.spacing.xl};
  }

  .Lines {
    margin: 40px 0;
  }
`;
