import styled from "styled-components"

export const Container = styled.div`
  min-width: 250px;
  width: 100%;
  // 콘텐츠 크기에 맞게끔 높이는 최대한 작게
  height: 11vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* vertical - horizontal */
  padding: 2vh 2vw;
  margin: 0vh 0 1vh 0;
  color: var(--bg-original-black);
  border-radius: 10px;
  background-color: var(--bg-original-white);

  &:hover {
      background-color: var(--bg-light-gray);
      color: var(--bg-original-black);
      cursor: pointer;
  }
`;

export const ImgContainer = styled.div`
    overflow: hidden;
    width: 55px;
    height: 55px;
    border-radius: 10%;
    margin-right: 7px;
`;

export const NameAndContentContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // 최대한 왼쪽에 붙도록
    align-items: start;
`;

export const DateContainer = styled.div`
    flex: 1;
    margin-top: 4px;
    display: flex;
    padding-right: 5px;
    justify-content: end;
`;