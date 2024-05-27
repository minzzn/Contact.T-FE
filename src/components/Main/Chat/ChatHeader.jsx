import { Container,HeaderLeftContainer, HeaderRightContainer, ProfileContainer, ImgContainer, UserName } from "../../../css/styled/Main/Chat/chatHeader.style";
import { StyledIcon } from "../../../css/styled/Main/main.styled"
import { useState } from "react"

export const ChatHeader = ({ choosedUserRoomInfo }) => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
            <Container>
                {/* 헤더 왼쪽 부분 */}
                <HeaderLeftContainer>
                    <ProfileContainer>
                        {/* userdata가 존재하면 불러오도록 - 리렌더링 시 userdata 값이 바뀌는것 같음 확인 필요, 
                            오류는 안뜨지만 컴포넌트를 한번 더 클릭해야 채팅헤더에 정보가 뜸 */}
                        <ImgContainer>
                            {
                                choosedUserRoomInfo && <img src={choosedUserRoomInfo.profileImg} style={{objectFit: "cover", width: "100%", height: "100%"}}/>
                            }
                        </ImgContainer>
                        {choosedUserRoomInfo && <UserName>{choosedUserRoomInfo.name}</UserName>}
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