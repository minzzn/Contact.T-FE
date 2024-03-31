import { useState } from 'react';
import Modal from 'react-modal';
import { ExtraInfoInput, ExtraInfoForm, ExtraInfoLabel, RadioInputWrapper, ExtraInfoInputRadio, customedStyle, RadioInputContainer, SchoolsListWrapper, ChildInfoWrapper, StyledButton, SearchSchoolContainer, ErrMsgContainer, TypeOfSchoolLabel, ExtraInfoContainer, AllLayoutContainer, RoleSelectContainer, RoleSelectInput } from '../../../css/styled/Profile/AddInfo/addInfo.styled';
import { POST, searchDB } from '../../../function/addInfo';
import { SchoolListBox } from './SchoolListBox';
import { ParentRole } from './DividedByRole/ParentRole';
import { IsBlankStringInObject } from '../../../function/common';

// 랜더링이 좀 자주 됨 : 리팩토링 개선 여지 필요
export const AddInfoModal = ({ setIsFirst }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [error, setError] = useState('');
    const [schoolList, setSchoolList] = useState([]);
    const [extraInfo, setExtraInfo] = useState({
        schoolInfo: '',
        schoolType: '',
        role: 'TEACHER',
    });

    async function onChange(e) {
        const { name, value } = e.target;
        // 이미 있는 정보는 hold, 객체에 없는 정보는 동적으로 키를 생성해서 값 할당
        setExtraInfo((prevState) => ({ ...prevState, [name]: value }));

        if(name === 'schoolInfo') {
            const schoolDB = await searchDB(extraInfo.schoolType);
            setSchoolList(schoolDB);
        }

        switch(name) {
            case 'childName':
                (value?.length < 2) ? setError('자녀 이름을 올바르게 작성해주세요') : setError('');
                break;
            case 'childCnt':
                (value?.length < 1) ? setError('자녀 수를 올바르게 적어주세요') : setError('');
                break;
            case 'schoolInfo':
                (value?.length > 0) ? setError('') : setError("학교를 선택해주세요");
                break;
            case 'teacherName':
                (value?.length < 2) ? setError('교사 성함을 올바르게 작성해주세요') : setError('');
                break;
            case 'grade':
                (value?.length < 1) ? setError('학년을 올바르게 적어주세요') : setError('');
                break;
            case 'class':
                (value?.length < 1) ? setError('반을 올바르게 적어주세요') : setError('');
                break;
            // 나머지는 그냥 빠져나오기
            default: 
                break;
        }
    }

    function onSubmit(e) {
        e.preventDefault(); 
        console.log(extraInfo);

        // POST(extraInfo); // 데이터 전송
        if(IsBlankStringInObject(extraInfo) === false) {
            setIsFirst(false);
            setIsOpen(false);
        } else {
            setError("정보를 모두 입력해주세요");
        }
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
                    <RoleSelectContainer>
                        <RoleSelectInput name='role' id='role' onChange={(e) => onChange(e)}>
                            <option value="TEACHER">교사</option>
                            <option value="PARENT">학부모</option>
                        </RoleSelectInput>
                    </RoleSelectContainer>

                    <ExtraInfoForm>
                        <ExtraInfoContainer>
                            {
                                extraInfo.role === "PARENT" ? (
                                    <ParentRole onChangeFn={onChange} extraInfo={extraInfo}/>
                                ) : (
                                    null
                                )
                            }
                            <ChildInfoWrapper>
                                <ExtraInfoLabel htmlFor='grade'>학년</ExtraInfoLabel>
                                <ExtraInfoInput required type='text' id='grade' name='grade' onChange={(e) => onChange(e)} placeholder='학년'></ExtraInfoInput>
                            </ChildInfoWrapper>
                            <ChildInfoWrapper>
                                <ExtraInfoLabel htmlFor='class'>반</ExtraInfoLabel>
                                <ExtraInfoInput required type='text' id='class' name='class' onChange={(e) => onChange(e)} placeholder='반'></ExtraInfoInput>
                            </ChildInfoWrapper>
                        </ExtraInfoContainer>
                        
                        <SearchSchoolContainer>
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
                            <ExtraInfoInput required id='schoolInfo' name="schoolInfo" type='text' value={extraInfo.schoolInfo} disabled={extraInfo.schoolType.length < 1} onChange={onChange} placeholder='학교 정보 입력'/>

                            <SchoolsListWrapper>
                                <SchoolListBox schoolsListArray={schoolList} schoolInfo={extraInfo.schoolInfo} setExtraInfo={setExtraInfo}/>
                            </SchoolsListWrapper>
                        </SearchSchoolContainer>

                        {/* 에러 상태값의 길이가 이상으면 error message 표현 */}
                        <ErrMsgContainer $visibleTrue={`${error?.length > 0}`}>{error}</ErrMsgContainer>
                        
                        <StyledButton
                            type='button'
                            onClick={onSubmit}
                            disabled={error?.length > 0}
                        >제출</StyledButton>
                    </ExtraInfoForm>
                </AllLayoutContainer>
            </Modal>
        </>
    )
}

