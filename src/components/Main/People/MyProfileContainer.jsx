import { useState } from "react";
import MyProfileModal from './MyProfileModal';
import profileImg from '../../../../public/assets/profile.png';
import { MyProfileBox, Container, ImgContainer, NameAndContentContainer, Divider } from "../../../css/styled/Main/People/peopleListBox.styled";
import { getRole } from '../../../function/common.js';

export const MyProfileContainer = ({ MyInfo }) => {
    const role = getRole() === "TEACHER" ? "선생님" : "학부모";
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const myInfoName = MyInfo && MyInfo.name ? MyInfo.name : "아직 이름을 불러오지 못했어요";
    
    return (
        <>
            <MyProfileBox>
                <Container onClick={openModal} style={{ overflow: 'hidden' }}>       
                    <ImgContainer>
                        <img src={profileImg} alt="user-img" style={{objectFit: "cover", width: "100%", height: "100%"}}/>
                    </ImgContainer>
                    <NameAndContentContainer>
                        <h2>{myInfoName}</h2>
                        <p>{role}</p>
                    </NameAndContentContainer>
                </Container>
                <Divider />
            </MyProfileBox>
            {modalIsOpen && (
                <MyProfileModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    MyInfo={MyInfo}
                    role={role}
                    profileImg={profileImg}
                    
                />
            )}
        </>
    );
}
