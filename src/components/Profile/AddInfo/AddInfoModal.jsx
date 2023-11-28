import { useState } from 'react';
import Modal from 'react-modal';
import { ExtraInfoInput, ExtraInfoForm, ExtraInfoLabel, RadioInputWrapper, ExtraInfoInputRadio, customedStyle, RadioInputContainer, SchoolsListWrapper, ChildInfoContainer, ChildInfoWrapper, StyledButton } from '../../../css/styled/Profile/AddInfo/addInfo.styled';
import { searchDB } from '../../../function/addInfo';
import { SchoolListBox } from './SchoolListBox';
import { ErrorMsgContainer } from '../../../css/styled/signin_up.styled';

// 랜더링이 좀 자주 됨 : 리팩토링 개선 여지 필요
export const AddInfoModal = () => {
    const [selectedSchool, setSelectedSchool] = useState("");
    const [isOpen, setIsOpen] = useState(true);
    const [error, setError] = useState('');
    const [schoolList, setSchoolList] = useState([]);
    const [extraInfo, setExtraInfo] = useState({
        childName: '',
        childCnt: '',
        schoolInfo: '',
        schoolType: '',
        // TODO : 나중에 선생님과 학부모 구분 지어서 보내야함
        role: 'GUEST',
    });

    async function onChange(e) {
        const { name, value } = e.target;

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
            // 나머지는 그냥 빠져나오기
            default: 
                break;
        }
    }

    function onSubmit(e) {
        e.preventDefault();

        setIsOpen(false);
    }

    Modal.setAppElement('#root');
    return (
        <>
            {/* 버튼 만들어서 제출하고 다음 화면으로 라우팅하기 */}
            <Modal
                isOpen={isOpen}
                style={customedStyle}
            >
                <ExtraInfoForm>
                    <ChildInfoContainer>
                        <ChildInfoWrapper>
                            <ExtraInfoLabel htmlFor='childName'>자녀 이름</ExtraInfoLabel>
                            <ExtraInfoInput type='text' required onChange={(e) => onChange(e)} id='childName' name="childName" value={extraInfo.childName} placeholder='자녀 이름 입력' $customizedWidth="35%" />
                        </ChildInfoWrapper>
                        <ChildInfoWrapper>
                            <ExtraInfoLabel htmlFor='childCnt'>자녀 수</ExtraInfoLabel>
                            <ExtraInfoInput type='text' required onChange={(e) => onChange(e)} id='childCnt' name="childCnt" value={extraInfo.childCnt} placeholder='자녀 수' $customizedWidth="20%" />
                        </ChildInfoWrapper>
                    </ChildInfoContainer>

                    <ExtraInfoLabel $customedBottom="-60px" >학교 검색</ExtraInfoLabel>
                    <RadioInputContainer>
                        <RadioInputWrapper>
                            <ExtraInfoInputRadio type='radio' value="elem_list" id='elementary' name='schoolType' onChange={(e) => onChange(e)} />
                            <label htmlFor='elementary'>초등학교</label>
                        </RadioInputWrapper>
                        <RadioInputWrapper>
                            <ExtraInfoInputRadio type='radio' value="midd_list" id='middle' name='schoolType' onChange={(e) => onChange(e)} />
                            <label htmlFor='middle'>중학교</label>
                        </RadioInputWrapper>
                        <RadioInputWrapper>
                            <ExtraInfoInputRadio type='radio' value="high_list" id='high' name='schoolType' onChange={(e) => onChange(e)} />
                            <label htmlFor='high'>고등학교</label>                          
                        </RadioInputWrapper>
                    </RadioInputContainer>
                    <ExtraInfoInput required id='schoolInfo' name="schoolInfo" type='text' value={selectedSchool || extraInfo.schoolInfo} disabled={extraInfo.schoolType.length < 1} onChange={onChange} placeholder='학교 정보 입력'/>

                    <SchoolsListWrapper>
                        <SchoolListBox schoolsListArray={schoolList} schoolInfo={extraInfo.schoolInfo} setSelected={setSelectedSchool}/>
                    </SchoolsListWrapper>
                    {
                        // 에러 상태값의 길이가 이상으면 error message 표현
                        error?.length > 0 && <ErrorMsgContainer>{error}</ErrorMsgContainer>
                    }
                    
                    <div style={{
                        width: '100%',
                        padding: '20px 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    }}>   
                        <StyledButton
                            type='button'
                            onClick={onSubmit}
                            disabled={error?.length > 0}
                        >제출</StyledButton>
                    </div>
                </ExtraInfoForm>
            </Modal>
        </>
    )
}

