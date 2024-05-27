import styled from "styled-components"

export default function HoverIcon({ isVisible }) {


    return (
        <>
            <HoverIconContainer $visible={isVisible}>
                <h4>연락처 목록 업데이트</h4>
            </HoverIconContainer>
        </>
    )
}

const HoverIconContainer = styled.div`
    position: absolute;
    background-color: var(--bg-main-green);
    padding: 12px;
    border-radius: 15px;
    top: -55px;
    left: -45px;
    white-space: nowrap; // 텍스트 줄 바꿈 방지 보장
    color: var(--bg-original-white);
    transition: opacity 0.3s;
    opacity: ${props => props.$visible === true ? 1 : 0};

    &::after {
        content: '';
        position: absolute;
        bottom: -26px;
        left: 26%;
        width: 0; height: 0;
        border-top: 20px solid var(--bg-main-green);
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 20px solid transparent;
    }
`