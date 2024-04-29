import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: min-content;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    position: relative;
`
export const HeaderLeftContainer = styled.div`
    display: flex;
    justify-content: start;
`
export const HeaderRightContainer = styled.div`
    display: flex;
    padding: 5px;
    justify-content: end;
    /* 이 컨테이너 아래 자식 태그들은 이 요소를 기준점으로 사용 */
    position: relative;
`
export const ProfileContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: end;
    color: var(--bg-original-black);
`
export const ImgContainer = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 25%;
    margin-right: 10px;
    overflow: hidden;
`
export const UserName = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
`