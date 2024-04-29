import { useRecoilState } from "recoil";
import { BellContainer, RedDot } from "../../css/styled/Main/House/bell.style"
import { StyledIcon } from "../../css/styled/Main/main.styled"
import { IconsState } from "../../hooks/iconsState";

export const Bell = ({isHavingAlarm = false, marginBottom = 0}) => { 
    const [iconsState, setIconsState] = useRecoilState(IconsState);

    return (
        <>
            {/* BellContainer에 position relative 걸어놓음. marginBottom의 기준점으로 사용 : RedDot이 컨테이너 위치를 기준으로 설정되도록 */}
            <BellContainer>
                <StyledIcon className="fa-solid fa-bell" size="30px" $marginBottom={marginBottom} onClick={() => {
                    setIconsState((prevStates) => ({
                        chatList: false,
                        peopleList: false,
                        setProfile: false,
                        house: false,
                        bell: true
                    }));
                }} $selected={iconsState["bell"] === true ? 'true' : 'false'} />
                <RedDot $isHavingAlarm={`${isHavingAlarm}`} $marginBottom={marginBottom} />
            </BellContainer>
        </>
    )
}