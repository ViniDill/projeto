import styled from "styled-components";
import theme from "../../theme";

interface PropsComponent {
  error?: boolean;
}

export const Container = styled.div<PropsComponent>`
  display: flex;
  border: solid 1px
    ${({ error }) => (error ? theme.colors.error : theme.colors.Primary900)};
  align-items: center;
`;

export const IconContainer = styled.div`
  background-color: ${theme.colors.Primary900};
  width: 47px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 10px 15px;
  width: fit-content;
  border: none;
  min-width: -webkit-fill-available;
  &:focus {
    outline: none;
  }
`;

export const ContainerInput = styled.div`
  flex: 1;
`;

export const ContainerEye = styled.div`
  border: none;
  background-color: white;
  cursor: pointer;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
