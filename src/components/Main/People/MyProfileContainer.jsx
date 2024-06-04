import { MyProfileBox, Container, MyProfileBoxContainer, ImgContainer, NameAndContentContainer, Divider } from "../../../css/styled/Main/People/peopleListBox.styled";
import profileImg from '../../../assets/profile.png';
export const MyProfileContainer = ({MyInfo}) => {
    const myInfoName = MyInfo && MyInfo.name ? MyInfo.name : "아직 이름을 불러오지 못했어요";
    return (
        <MyProfileBox>
            <Container style={{ overflow: 'hidden' }}>       
                <ImgContainer>
                    <img src={profileImg} alt="user-img" style={{objectFit: "cover", width: "100%", height: "100%"}}/>
                </ImgContainer>
                <NameAndContentContainer>
                    <h2>{myInfoName}</h2>
                </NameAndContentContainer>
            </Container>
            <Divider />
        </MyProfileBox>
    );
}