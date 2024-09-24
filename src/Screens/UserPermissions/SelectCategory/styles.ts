import styled from "styled-components";
import theme from "../../../theme";
import media from "styled-media-query";

export const Container = styled.div`
  padding: ${theme.spacing.s};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .H4 {
    ${media.lessThan("small")`
      font-size: ${theme.fontSize.xl};
    `}
  }
`;

export const ButtonContainer = styled.div`
  ${media.lessThan("large")`
    display: none;
  `}

  .Send-Button {
    width: 120px;
    height: 35px;
    border: none;
    background-color: ${theme.colors.Primary700};
    color: ${theme.colors.Secundary50};
    font-size: ${theme.fontSize.lg};
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.Primary900};
    }

    &:active {
      background-color: ${theme.colors.Primary500};
    }
  }
`;

export const BackgroundContainer = styled.div`
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.l} ${theme.spacing["3xl"]} ${theme.spacing["3xl"]};

  ${media.lessThan("large")`
    padding: ${theme.spacing.l} ${theme.spacing.l} ${theme.spacing["3xl"]};
  `}

  ${media.lessThan("medium")`
    padding: ${theme.spacing.l} ${theme.spacing.l} ${theme.spacing.l};
  `}
`;

export const ContainerContent = styled.div`
`;

export const RoleInformation = styled.div`
  display: flex;
  gap: 0 ${theme.spacing.xl};
  justify-content: space-between;
  width: 100%;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: ${theme.spacing.m};

  ${media.greaterThan("large")`
    width: calc(50% - 7px);
  `}

  ${media.lessThan("large")`
    display: flex;
    flex-direction: column;

    .Label {
      margin-top: ${theme.spacing.m};
    }

    .Label-first {
      margin-top: ${theme.spacing.l};
    }
  `}

  .Input {
    margin-right: ${theme.spacing["3xl"]};

    ${media.lessThan("large")`
      margin-right: 0;
    `}
  }
`;

export const UserPermissonsContainer = styled.div`
    margin: ${theme.spacing.xl} 0;

    padding: ${theme.spacing.xl} ${theme.spacing["3xl"]} ${theme.spacing["3xl"]};
    background-color: ${theme.colors.white};

    ${media.lessThan("large")`
        padding: ${theme.spacing.m} ${theme.spacing.l} ${theme.spacing["2xl"]};
    `}

    .Subtitle {
        margin-bottom: ${theme.spacing["2xl"]};
    }
`;

export const ButtonContainerMobile = styled.div`
  display: none;

  ${media.lessThan("large")`
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  .Send-Button {
    width: 120px;
    height: 35px;
    border: none;
    background-color: ${theme.colors.Primary700};
    color: ${theme.colors.Secundary50};
    font-size: ${theme.fontSize.lg};
    border-radius: 4px;
    cursor: pointer;

    ${media.lessThan("large")`
      margin: 0 0 ${theme.spacing.l};
    `}

    &:hover {
      background-color: ${theme.colors.Primary900};
    }

    &:active {
      background-color: ${theme.colors.Primary500};
    }
  }
`;

export const PermissionRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.s} 0px;
  cursor: pointer;

  &:nth-child(even) {
    background-color: ${theme.colors.Tertiary100};
  }

  &:nth-child(odd) {
    background-color: ${theme.colors.Tertiary50};
  }

  &:hover {
    background-color: ${theme.colors.Tertiary200};
  }
`;

export const PermissionName = styled.span`
    margin: ${theme.spacing.xs} ${theme.spacing["3xl"]};

    font-size: ${theme.fontSize.lg};
    font-weight: bold;

    ${media.lessThan("large")`
        margin: ${theme.spacing.xs} ${theme.spacing["2xl"]};
    `}

    ${media.lessThan("medium")`
        margin: ${theme.spacing.xs} ${theme.spacing.xl};
    `}
`;
export const PermissionSwitch = styled.div`
    margin: ${theme.spacing.xs} ${theme.spacing["3xl"]};

    ${media.lessThan("large")`
        margin: ${theme.spacing.xs} ${theme.spacing["2xl"]};
    `}

    ${media.lessThan("medium")`
        margin: ${theme.spacing.xs} ${theme.spacing.xl};
    `}
`

export const PermissionsColumn = styled.div`
`;