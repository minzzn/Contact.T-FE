import { Container,HeaderLeftContainer, HeaderMiddleContainer, HeaderRightContainer, ProfileContainer, ImgContainer, UserName } from "../../css/styled/Main/chatHeader.style";
import { StyledIcon } from "../../css/styled/Main/main.styled"
import { useState } from "react"

export const ChatHeader = ({userdata}) => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
            <Container>
                {/* 헤더 왼쪽 부분 */}
                <HeaderLeftContainer>
                    <ProfileContainer>
                        <ImgContainer>
                            <img src={userdata.profileImg} style={{objectFit: "cover", width: "100%", height: "100%"}}/>
                        </ImgContainer>
                        <UserName>{userdata}</UserName>
                    </ProfileContainer>
                </HeaderLeftContainer>
                {/* 헤더 오른쪽 부분 */}
                <HeaderRightContainer>
                    <StyledIcon className="fas fa-bars" size="20px" onClick={() => {
                        setIsClicked(!isClicked);
                    }} style={{color: "white"}}/>
                </HeaderRightContainer>
            </Container>
        </>
    )
}