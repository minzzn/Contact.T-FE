import { StyledIcon, IconsWrapper } from "../../css/styled/Main/main.styled";
import { ChatIconsContainer, IconsModalContainer} from "../../css/styled/common/header.styled";

export const Header = ({ setIsChatContentActive, setIconsState, iconsState }) => {

    return (
        <ChatIconsContainer className="left-pane">
            <IconsModalContainer>
                {/* 처음 진입하거나 왼쪽부분 사이즈를 줄이고 싶을때 */}
                <IconsWrapper $flexDirection="column">

                    <div className="temporary_wrapper">
                        <StyledIcon className="fas fa-user" size='30px' $marginBottom="2vh" onClick={()=> {
                            setIsChatContentActive(false);
                            setIconsState(()=> ({
                                chatList: false,
                                peopleList: true,
                                gear: false,
                            }));
                        }} $selected={iconsState["peopleList"] === true ? 'true' : 'false'} />

                        <StyledIcon className="fas fa-comment" size="30px" $marginBottom="75vh" onClick={()=> {
                            setIconsState(()=> ({
                                chatList: true,
                                peopleList: false,
                                gear: false,
                            }));
                        }} $selected={iconsState["chatList"] === true ? 'true' : 'false'} />
                    </div>

                    {/* 매안 공간 : 차트, 알림 등등 보여주기 */}
                    <StyledIcon className="fa-solid fa-gear" size="30px" onClick={() => {
                        setIconsState(()=> ({
                            chatList: false,
                            peopleList: false,
                            gear: true,
                        }));
                    }} $selected={iconsState["gear"] === true ? 'true' : 'false'}/>
                    
                </IconsWrapper>
            </IconsModalContainer>
        </ChatIconsContainer>
    )
}