import styled from "styled-components";
import theme, { FontSize } from "../../theme";

export const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 66px;
  border-radius: 6px;
  font-size: ${FontSize.xl}px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.Primary900};
  cursor: pointer;
  padding: 0 20px;

  &:hover {
    background-color: ${theme.colors.Primary950};
  }

  &:active {
    background-color: ${theme.colors.Primary800};
  }

  .icon {
    img {
      width: 32px;
      height: 32px;
    }
  }

  .label {
    flex: 1;
    text-align: center;
    margin-right: 32px;
  }
`;