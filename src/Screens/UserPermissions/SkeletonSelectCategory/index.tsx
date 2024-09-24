import React from "react";
import { Container, HeaderContainer, RoleContainer, PermissionContainer, HeaderRole, RoleContent, RoleBoxOne, RoleBoxTwo, HeaderPermission, PermissionContent, ButtonContainer } from "./styles";
import { Skeleton } from "@mui/material";

const SkeletonSelectCategory: React.FC = () => {
    return (
        <Container>
            <HeaderContainer>
                <Skeleton variant="text" width={199} height={42}/>
                <Skeleton width={80} height={38} className="Header-Button" />
            </HeaderContainer>
            <RoleContainer>
                <HeaderRole>
                    <Skeleton width={164} height={38} />
                </HeaderRole>
                <RoleContent>
                    <RoleBoxOne>
                        <Skeleton variant="text" width={164} height={21}/>
                        <Skeleton variant="rectangular" height={40} />
                    </RoleBoxOne>
                    <RoleBoxTwo>
                        <Skeleton variant="text" width={164} height={21}/>
                        <Skeleton variant="rectangular" height={40} />
                    </RoleBoxTwo>
                </RoleContent>
            </RoleContainer>
            <PermissionContainer>
                <HeaderPermission>
                    <Skeleton width={201} height={38} />
                </HeaderPermission>
                <PermissionContent>
                    <Skeleton variant="rectangular" width={"100%"} height={320} />
                    <Skeleton variant="rectangular" width={"100%"} height={320} />
                </PermissionContent>
            </PermissionContainer>
            <ButtonContainer>
                <Skeleton width={80} height={38} />
            </ButtonContainer>
        </Container>
    )
}

export default SkeletonSelectCategory;