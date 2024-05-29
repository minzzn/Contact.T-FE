import styled from "styled-components";
import { getRole } from "../../function/common";

export default function Role() {
    const role = getRole();

    return (
        <>
            <RoleContainer>
                <RoleIcon className={role === "TEACHER" ? "fa-solid fa-person-chalkboard" : "fa-solid fa-children"}/>
                {
                    role === "TEACHER" ? "선생님" : "학부모"
                }
            </RoleContainer>
        </>
    )
}

const RoleContainer = styled.div`
    background-color: var(--bg-main-green);
    color: white; font-size: 28px; font-weight: 700;
    padding: 10px;
    border-radius: 10px;

    display: inline-block;
    margin-right: 15px;
    white-space: nowrap;
`;
const RoleIcon = styled.i`
    font-size: 32px; color: white;
    margin-right: 10px;
`;