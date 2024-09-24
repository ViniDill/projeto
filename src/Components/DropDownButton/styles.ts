import styled from "styled-components";
import theme, { FontSize, Spacing } from "../../theme";

interface DropDownProps {
  selected?: boolean;
}

export const AccordionContainer = styled.div<DropDownProps>`
  width: 100%;
  display: flex;
  color: ${theme.colors.neutrals70};
  background-color: ${(props) =>
    props.selected ? theme.colors.Primary100 : theme.colors.white};

  .szh-accordion {
    width: 100%;
  }

  img {
    margin-right: ${Spacing.m}px;
    height: 25px;
    width: 25px;
    margin-left: 20px;
  }

  .szh-accordion__item-content {
    transition: height 0.5s cubic-bezier(0, 0, 0, 1);
  }

  .szh-accordion__item-btn {
    width: 100%;
    height: 50px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: ${FontSize.md}px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      color: ${theme.colors.Primary300};
    }

    &:active {
      color: ${theme.colors.white};
    }

    &::after {
      content: "";
      margin: 15px;
      width: 10px;
      height: 10px;
      border-left: 2px solid ${theme.colors.black};
      border-bottom: 2px solid ${theme.colors.black};
      right: 10px;
      transform: rotate(315deg);
      transition: transform 0.3s ease;
    }
  }

  .szh-accordion__item--expanded .szh-accordion__item-btn::after {
    transform: rotate(135deg);
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${theme.spacing.s};
`;
