import react,{useState} from "react"
import styled from "styled-components"
import { ViewProfile } from "../components/ViewProfile";

export const PeopleListBox = ({username, userimg}) => {

    const [isViewProfileActive, setIsViewProfileActive] = useState(false);

    return (
        <>
            <Container onClick={()=> {setIsViewProfileActive(true)}}>
                <ImgContainer>
                    <img src={userimg} alt="user-img"/>
                </ImgContainer>
                <NameAndContentContainer>
                    <h2>{username}</h2>
                </NameAndContentContainer>
                {
                isViewProfileActive ? (
                    <ViewProfile/>
                ) : (
                    null // 컴포넌트가 존재할 때 클릭시 컴포넌트 제거 및 컴포넌트가 존재할 때 다른 프로필 클릭 시 해당 컴포넌트 호출
                )
            }
            </Container>
        </>
    )
}

const Container = styled.div`
    min-width: 250px;
    width: 100%;
    // 콘텐츠 크기에 맞게끔 높이는 최대한 작게
    height: 11vh;
    display: flex;
    justify-content: space-between;
    /* vertical - horizontal */
    padding: 2vh 2vw;
    /* vertical - horizontal */
    margin: 1.4vh 0;
    color: var(--bg-dark-gray);
    &:hover {
        color: var(--bg-black);
        text-shadow: 2px 2px 5px var(--bg-orange);
    }
`;

const ImgContainer = styled.div`
    overflow: hidden;
    flex: 1;
    border: 1px solid var(--bg-white);
    border-radius: 10%;
    margin-right: 2vw;
`;

const NameAndContentContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // 최대한 왼쪽에 붙도록
    align-items: start;
`;
