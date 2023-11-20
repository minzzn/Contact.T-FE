import { BellContainer, BellIcon, RedDot } from "../../../css/styled/Main/House/bell.style"

export const Bell = () => {

    return (
        <>
            <BellContainer>
                <BellIcon className="fa-solid fa-bell" />
                <RedDot />
            </BellContainer>
        </>
    )
}