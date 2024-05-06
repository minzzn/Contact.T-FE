import { useRecoilState, useRecoilValue } from "recoil";
import { BellContainer, RedDot } from "../../css/styled/Bell/bell.style"
import { StyledIcon } from "../../css/styled/Main/main.styled"
import { IconsState } from "../../hooks/iconsState";
import { sseEventState } from "../../hooks/sseEventState";
import Messages from "./Messages";
import { useState } from "react";

export const Bell = ({ marginBottom = 0}) => { 
    const [iconsState, setIconsState] = useRecoilState(IconsState);
    const sseEvents = useRecoilValue(sseEventState);
    const [isBellClicked, setIsBellClicked] = useState(false);

    return (
        <>
            {/* BellContainer에 position relative 걸어놓음. marginBottom의 기준점으로 사용 : RedDot이 컨테이너 위치를 기준으로 설정되도록 */}
            <BellContainer>
                <StyledIcon className="fa-solid fa-bell" size="30px" $marginBottom={marginBottom} onClick={() => {
                    setIconsState((prevStates) => ({
                        ...prevStates,
                        bell: !isBellClicked,
                    }));
                    setIsBellClicked(!isBellClicked);
                }} $selected={iconsState["bell"] === true ? 'true' : 'false'} />
                <RedDot $isHavingAlarm={`${sseEvents?.length > 0}`} $marginBottom={marginBottom} />
                <Messages isClicked={isBellClicked} />
            </BellContainer>
        </>
    )
}