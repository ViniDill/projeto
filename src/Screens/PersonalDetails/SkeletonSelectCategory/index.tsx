import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Container, HeaderContainer, ButtonContainer, ButtonContainerMobile, BackgroundContainer, ContainerContent, PersonalInformation, InputContainer, Photo, Functions, DropSelect } from './styles';

const SkeletonSelectCategory: React.FC = () => {
    return (
        <Container>
                        <HeaderContainer>
                            <Skeleton variant="text" width={400} height={60}/>
                            <ButtonContainer>
                                <Skeleton className='Send-Button'/>
                            </ButtonContainer>
                        </HeaderContainer>
                       <BackgroundContainer>
                       <Skeleton variant="text" width={250} height={40} className='personal-details'/>
                         <ContainerContent>
                            <PersonalInformation>
                                <InputContainer>
                                    <Skeleton variant="text" width={200} height={20} />
                                    <Skeleton className="Input" height={75} />
                                </InputContainer>
                                <InputContainer>
                                    <Skeleton variant="text" width={200} height={20} />
                                    <Skeleton className="Input" height={75} />
                                </InputContainer>
                                <InputContainer>
                                    <Skeleton variant="text" width={200} height={20} />
                                    <Skeleton className="Input" height={75} />
                                </InputContainer>
                                <InputContainer>
                                    <Skeleton variant="text" width={200} height={20} />
                                    <Skeleton className="Input" height={75} />
                                </InputContainer>
                                <InputContainer>
                                    <Skeleton variant="text" width={200} height={20} />
                                    <Skeleton className="Input" height={75} />
                                </InputContainer>
                                <InputContainer>
                                    <Skeleton variant="text" width={200} height={20} />
                                    <Skeleton className="Input" height={75} />
                                </InputContainer>
                                <InputContainer>
                                    <Skeleton variant="text" width={200} height={20} />
                                    <Skeleton className="Input" height={75} />
                                </InputContainer>
                            </PersonalInformation>
                            <Photo>
                                <Skeleton width={90} height={25} />
                                <Skeleton width={150} height={175} />
                            </Photo>
                        </ContainerContent>
                       </BackgroundContainer>
                        <Functions>
                            <Skeleton width={150} />
                            <DropSelect>
                            <Skeleton width={350} height={75} />
                            </DropSelect>
                        </Functions>
                        <ButtonContainerMobile>
                            <Skeleton className='Send-Button' />
                        </ButtonContainerMobile>
        </Container>
    );
}

export default SkeletonSelectCategory;