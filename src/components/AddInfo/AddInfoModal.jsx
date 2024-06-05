import { useState } from 'react';
import Modal from 'react-modal';
import { ExtraInfoForm, customedStyle, StyledButton, ExtraInfoContainer, AllLayoutContainer, RoleSelectContainer, RoleSelectInput, SearchSchoolContainer, ExtraInfoLabel, RadioInputContainer, RadioInputWrapper, ExtraInfoInputRadio, TypeOfSchoolLabel, ExtraInfoInput, SchoolsListWrapper } from '../../css/styled/Profile/AddInfo/addInfo.styled';
import { findTeachers, postAddInfo, searchDB } from '../../function/addInfo';
import { SchoolListBox } from './SchoolListBox';
import { ParentRole } from './DividedByRole/ParentRole';
import { getRole, getToken, setRole } from '../../function/common';
import { sendFriendRequest } from '../../function/addInfo';
import { TeacherRole } from './DividedByRole/TeacherRole';
import { ToastifyError, ToastifySuccess, ToastifyWarn } from '../../function/toast';
import { Loading } from '../common/Loading';

export const AddInfoModal = ({ setIsFirst }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [schoolList, setSchoolList] = useState([]);
    // 서버에 전송할 추가정보 데이터들을 담는 객체
    const [extraInfo, setExtraInfo] = useState({
        role: "TEACHER",
        schoolType: ""
    });
    // 자녀 1명에 대한 정보를 담는 공간
    const [childInfo, setChildInfo] = useState({
        childName: "",
        childSchool: "",
        childClass: "",
        teacherName: ""
    });
    const [teacherInfo, setTeacherInfo] = useState({
        teacherClass: "",
        teacherSchool: ""
    });
    const [childNum, setChildNum] = useState(0);
    const [children, setChildren] = useState([]);
    const [loading, setLoading] = useState(false);

    async function onChange(e) {
        let { name, value } = e.target;

        switch(name) {
            case 'childName':
                setChildInfo(prevState => ({
                    ...prevState,
                    childName: value
                }))
                break;
            case 'childNum':
                setChildNum(value);
                break;
            case 'school':
                if(extraInfo.role === "TEACHER") {
                    setTeacherInfo(prevState => ({
                        ...prevState,
                        teacherSchool: value
                    }));
                } else {
                    setChildInfo(prevState => ({
                        ...prevState,
                        childSchool: value
                    }))
                }
                const schoolDB = await searchDB(extraInfo.schoolType);
                setSchoolList(schoolDB);
                break;
            case 'teacherName':
                setChildInfo(prevState => ({
                    ...prevState,
                    teacherName: value
                }))
                break;
            case 'class':
                if(extraInfo.role === "TEACHER") {
                    setTeacherInfo(prevState => ({
                        ...prevState,
                        teacherClass: value
                    }));
                } else {
                    setChildInfo(prevState => ({
                        ...prevState,
                        childClass: value
                    }));
                }
                break;
            // 나머지는 그냥 빠져나오기
            default:
                setExtraInfo(prevState => ({
                    ...prevState,
                    [name]: value
                })) 
                break;
        }
    }

    async function onSubmit(e) {
        e.preventDefault(); 
        setLoading(!loading);

        let isValid = false;
        let finalDataStructureBeforeSending = {};
        
        if(extraInfo.role === "TEACHER") {
            finalDataStructureBeforeSending = {...finalDataStructureBeforeSending, role: extraInfo["role"], ...teacherInfo };
        } else {
            finalDataStructureBeforeSending = { ...finalDataStructureBeforeSending, role: extraInfo["role"], childNum, children: [...children, {...childInfo}] }
        }

        Object.values(finalDataStructureBeforeSending).filter(value => {
            // Array인 경우
            if(typeof value === "object") {
                // 배열 내 각 객체에 접근(filter)해서 반환 : 결과값은 filter된 객체들의 길이가 1보다 큰지 확인
                const filtered = value.filter(obj => {
                    // 객체 내 원소값의 길이가 0보다 커야 유효한 애들
                    Object.values(obj).filter(val => {
                        return String(val).length > 0
                    })
                    .length === obj.length; // 객체 내 유효한 원소들의 개수가 객체 길이와 동일해야 객체 반환
                })
                // 배열 내 유효한 객체의 개수가 1보다 크고, childNum과 같은 경우만 올바르다 : 아이 정보가 하나 이상이며, 내가 입력한 아이 정보 수와 동일하다
                return (filtered.length >= 1 && filtered.length == childNum) ? true : false;
            } else {
                // 이건 정상작동
                return String(value).length > 1 ? true : false;
            }
        })
        .length > 0 ? isValid = true : null;


        if(!isValid) {
            // 만약 입력된 값들이 전부 유효하지 않다면 통신을 막습니다.
            ToastifyError("제대로 작성해주세요");
            setLoading(prevState => !prevState);
        } else {
            // 성공한 경우
            const result = postAddInfo({
                method: "POST",
                headers: {
                    "Authorization": `${getToken()}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(finalDataStructureBeforeSending)
            })

            if(result) {
                // 2.5초의 지연시간 유도 : 서버에 post이후 SSE 연동하는데 시간이 좀 필요하기에
                setTimeout(async () => {
                    setLoading(!loading);

                    ToastifySuccess("추가 정보 입력 완료");
                    // 모달창 닫기
                    setIsFirst(false);
                    setIsOpen(false);
                    // 로컬스토리지 상의 role값 변경
                    setRole(extraInfo.role);

                    if(getRole() === "PARENT") {
                        const teacherIds = await findTeachers();
                        
                        for(let i=0; i<teacherIds.length; i++) {
                            await sendFriendRequest(teacherIds[i]);
                        }
                    }
                }, 2500);
            } else {
                ToastifyError("에러 발생. 다시 시도해주세요");
            }
        }
    };

    function onNext(e) {
        e.preventDefault();

        // 검증 과정 필요
        // childInfo의 모든 값들이 안 비어있는지 체크 : 모두 빈 문자열이 아니면 false, 하나라도 빈 문자열이면 true
        const allValuesEmpty = Object.values(childInfo).every(value => value == "");
        if(allValuesEmpty) {
            ToastifyWarn("모든 정보를 제대로 입력해주세요");
        } else {
            setChildren(prevState => [...prevState, {...childInfo}]);
            // 초기화
            setChildInfo({
                childName: "",
                childSchool: "",
                childClass: "",
                teacherName: ""
            });
            setTeacherInfo({
                teacherClass: "",
                teacherSchool: ""
            });
            setCurrentPage(prevState => prevState+1);
        }
    };

    function renderButton(role) {
        let result = null;

        switch(role) {
            case "TEACHER":
                result = <StyledButton type='button' onClick={onSubmit}>{loading ? <Loading /> : "제출"}</StyledButton>;
                break;
            case "PARENT":
                const content = currentPage >= childNum ? "제출" : "다음";
                result = <StyledButton type='button' onClick={currentPage >= childNum ? onSubmit : onNext}>{loading ? <Loading /> : content}</StyledButton>;
                break;
            default:
                break;
        }

        return result;
    }

    Modal.setAppElement('#root');
    return (
        <>
            {/* 버튼 만들어서 제출하고 다음 화면으로 라우팅하기 */}
            <Modal
                isOpen={isOpen}
                style={customedStyle}
            >
                <AllLayoutContainer>
                    {/* select */}
                    <RoleSelectContainer>
                        <RoleSelectInput name='role' id='role' onChange={(e) => onChange(e)}>
                            <option value="TEACHER">교사</option>
                            <option value="PARENT">학부모</option>
                        </RoleSelectInput>
                    </RoleSelectContainer>
                    {/* form */}
                    <ExtraInfoForm>
                        <ExtraInfoContainer>
                            <div className='role-container' style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                marginTop: "38px"
                            }}>
                                {
                                    extraInfo.role === "PARENT" 
                                    ? <ParentRole onChange={(e) => onChange(e)} childNum={childNum} childInfo={childInfo} /> 
                                    : <TeacherRole onChange={(e) => onChange(e)} schoolList={schoolList} childNum={childNum} />
                                }
                            </div>
                            <SearchSchoolContainer className='schools-container'>
                                <ExtraInfoLabel>학교 검색</ExtraInfoLabel>
                                <RadioInputContainer>
                                    <RadioInputWrapper>
                                        <ExtraInfoInputRadio type='radio' value="elem_list" id='elementary' name='schoolType' onChange={(e) => onChange(e)} />
                                        <TypeOfSchoolLabel htmlFor='elementary'>초등학교</TypeOfSchoolLabel>
                                    </RadioInputWrapper>
                                    <RadioInputWrapper>
                                        <ExtraInfoInputRadio type='radio' value="midd_list" id='middle' name='schoolType' onChange={(e) => onChange(e)} />
                                        <TypeOfSchoolLabel htmlFor='middle'>중학교</TypeOfSchoolLabel>
                                    </RadioInputWrapper>
                                    <RadioInputWrapper>
                                        <ExtraInfoInputRadio type='radio' value="high_list" id='high' name='schoolType' onChange={(e) => onChange(e)} />
                                        <TypeOfSchoolLabel htmlFor='high'>고등학교</TypeOfSchoolLabel>                          
                                    </RadioInputWrapper>
                                </RadioInputContainer>
                                <ExtraInfoInput required id="school" name="school" type='text' value={extraInfo.role === "TEACHER" ? teacherInfo.teacherSchool : childInfo.childSchool} disabled={extraInfo.schoolType?.length < 1} onChange={(e) => onChange(e)} placeholder='학교 정보 입력'/>

                                <SchoolsListWrapper>
                                    <SchoolListBox role={extraInfo.role} schoolsListArray={schoolList} schoolInfo={extraInfo.role === "TEACHER" ? teacherInfo.teacherSchool : childInfo.childSchool} setter={extraInfo.role === "TEACHER" ? setTeacherInfo : setChildInfo} />
                                </SchoolsListWrapper>
                            </SearchSchoolContainer>
                        </ExtraInfoContainer>
                        {/* button */}
                        {
                            renderButton(extraInfo.role)
                        }
                    </ExtraInfoForm>
                </AllLayoutContainer>
            </Modal>
        </>
    )
}

