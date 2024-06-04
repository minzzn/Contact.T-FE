import { MyProfileBox, Container, MyProfileBoxContainer, ImgContainer, NameAndContentContainer, Divider } from "../../../css/styled/Main/People/peopleListBox.styled";
import profileImg from '../../../assets/profile.png';
export const MyProfileContainer = ({MyInfo}) => {
    if (!MyInfo || !MyInfo.name) {
        return (
            <>
                <MyProfileBox>
                    <Container style={{ overflow: 'hidden' }}>       
                        <ImgContainer>
                            <img src={profileImg} alt="user-img" style={{objectFit: "cover", width: "100%", height: "100%"}}/>
                        </ImgContainer>
                        <NameAndContentContainer>
                            <h2>"Unknown"</h2> {/* 예상치 못한 경우를 처리하기 위한 fallback */}
                        </NameAndContentContainer>
                    </Container>
                    <Divider></Divider>
                </MyProfileBox>
            </>
        );
    }

    // MyInfo 객체가 유효하고 name 속성이 정의되어 있다면 해당 정보를 사용하여 컴포넌트를 렌더링
    return (
        <>
            <MyProfileBox>
                <Container style={{ overflow: 'hidden' }}>       
                    <ImgContainer>
                        <img src={profileImg} alt="user-img" style={{objectFit: "cover", width: "100%", height: "100%"}}/>
                    </ImgContainer>
                    <NameAndContentContainer>
                        <h2>{MyInfo.name}</h2>
                    </NameAndContentContainer>
                </Container>
                <Divider></Divider>
            </MyProfileBox>
        </>
    );
}