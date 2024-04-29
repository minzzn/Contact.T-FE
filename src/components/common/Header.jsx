import { useRecoilState, useSetRecoilState } from "recoil";
import { StyledIcon } from "../../css/styled/Main/main.styled";
import { HeaderContainer } from "../../css/styled/common/header.styled";
import { IconsState } from "../../hooks/iconsState";
import { ChatActiveState } from "../../hooks/chatActiveState";
import { Bell } from "./Bell";

export const Header = () => {
    const [iconsState, setIconsState] = useRecoilState(IconsState);
    const setIsChatActive = useSetRecoilState(ChatActiveState);
    return (
        <HeaderContainer className="left-pane">
            <div className="temporary_wrapper" style={{flex: 1}}>
                <StyledIcon className="fas fa-user" size='30px' $marginBottom="2vh" onClick={()=> {
                    setIsChatActive(false);
                    setIconsState(()=> ({
                        chatList: false,
                        peopleList: true,
                        setProfile: false,
                        house: false,
                    }));
                }} $selected={iconsState["peopleList"] === true ? 'true' : 'false'} />

                <StyledIcon className="fas fa-comment" size="30px" onClick={()=> {
                    setIconsState(()=> ({
                        chatList: true,
                        peopleList: false,
                        setProfile: false,
                        house: false,
                    }));
                }} $selected={iconsState["chatList"] === true ? 'true' : 'false'} />
            </div>
            
            <div className="temporary_wrapper" style={{
                flex: 1,
                display: "flex",
                alignItems: "center"
            }}>
                <StyledIcon className="fa-solid fa-rotate" size="30px" />
            </div>

            <div className="temporary_wrapper" style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end"
            }}>
                <Bell />
                <StyledIcon className="fa-solid fa-clock" size="30px" $marginBottom="2vh" onClick={() => {
                    setIconsState(()=> ({
                        chatList: false,
                        peopleList: false,
                        setProfile: true,
                        house: false,
                    }));
                }} $selected={iconsState["setProfile"] === true ? 'true' : 'false'}/>
    
                {/* 매안 공간 : 차트, 알림 등등 보여주기 */}
                <StyledIcon className="fa-solid fa-house" size="30px" onClick={() => {
                    setIconsState(()=> ({
                        chatList: false,
                        peopleList: false,
                        setProfile: false,
                        house: true,
                    }));
                }} $selected={iconsState["house"] === true ? 'true' : 'false'}/>
            </div>                    
        </HeaderContainer>
    )
}