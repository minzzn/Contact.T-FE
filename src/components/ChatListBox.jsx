import styled from "styled-components"

export const ChatListBox = ({username}) => {


    return (
        <>
            <Container>
                <ImgContainer>
                    <p></p>
                </ImgContainer>
                <NameAndContentContainer>
                    <h2>{username}</h2>
                    <p>상태</p>
                </NameAndContentContainer>
                <DateContainer>
                    <p>어제</p>
                </DateContainer>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    // 콘텐츠 크기에 맞게끔 높이는 최대한 작게
    height: 11vh;
    display: flex;
    justify-content: space-between;
    /* vertical - horizontal */
    padding: 2vh 2vw;
    /* vertical - horizontal */
    margin: 1.4vh 0;
    color: var(--bg-white);
`;

const ImgContainer = styled.div`
    overflow: hiddden;
    flex: 1;
    border: 1px solid var(--bg-white);
    border-radius: 10%;
    margin-right: 2vw;
`;

const NameAndContentContainer = styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // 최대한 왼쪽에 붙도록
    align-items: start;
`;

const DateContainer = styled.div`
    flex: 1;
`;