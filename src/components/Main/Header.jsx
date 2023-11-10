import styled from "styled-components"
import { StyledIcon } from "../../css/styled/Main/main.styled"
import { useState } from "react"

export const Header = ({userdata}) => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
            <Container>
                <HeaderLeftContainer>
                    <ProfileContainer>
                        <ImgContainer>
                            <img src={userdata.profileImg} style={{objectFit: "cover", width: "100%", height: "100%"}}/>
                        </ImgContainer>
                        <UserName>{userdata.name}</UserName>
                    </ProfileContainer>
                </HeaderLeftContainer>
                <HeaderRightContainer>
                    <StyledIcon className="fas fa-bars" size="20px" onClick={() => {
                        setIsClicked(!isClicked);
                    }}/>
                </HeaderRightContainer>
            </Container>
        </>
    )
}
    
const Container = styled.div`
    width: 100%;
    height: min-content;
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: end;
`
const HeaderLeftContainer = styled.div`
    display: flex;
    padding: 5px;
    justify-content: start;
`
const HeaderRightContainer = styled.div`
    display: flex;
    padding: 5px;
    justify-content: end;
    /* 이 컨테이너 아래 자식 태그들은 이 요소를 기준점으로 사용 */
    position: relative;
`
const ProfileContainer = styled.div`
    padding: 5px;
    display: flex;
    justify-content: start;
`
const ImgContainer = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 30%;
    margin-right: 10px;
    overflow: hidden;
`
const UserName = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
`