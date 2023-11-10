import styled from "styled-components"
import { StyledIcon } from "../../css/styled/main.styled"
import { useState } from "react"

export const Header = () => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
            <Container>
                <HeaderLeftContainer>
                    
                </HeaderLeftContainer>
                <HeaderRightContainer>
                    <StyledIcon className="fas fa-bars" size="20px" onClick={() => {
                        setIsClicked(!isClicked);
                        console.log('바 아이콘 클릭됨');
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
`