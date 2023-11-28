import { useState } from 'react';
import Modal from 'react-modal';
import { ExtraInfoInput, ExtraInfoForm, ExtraInfoLabel, RadioInputWrapper, ExtraInfoInputRadio, customedStyle, RadioInputContainer, SchoolInputWrapper, SchoolInputBtn, SchoolsListWrapper, ChildInfoContainer, ChildInfoWrapper, StyledButton } from '../../../css/styled/Profile/AddInfo/addInfo.styled';
import { searchDB } from '../../../function/addInfo';
import { SchoolListBox } from './SchoolListBox';

// 랜더링이 좀 자주 됨 : 리팩토링 개선 여지 필요
export const AddInfoModal = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [schoolList, setSchoolList] = useState([]);
    const [extraInfo, setExtraInfo] = useState({
        childName: '',
        childCnt: '',
        schoolInfo: '',
        schoolType: '',
    });

    async function onChange(e) {
        const { name, value } = e.target;

        setExtraInfo((prevState) => ({ ...prevState, [name]: value }))
        const schoolDB = await searchDB(extraInfo.schoolType);

        setSchoolList(schoolDB);
    }

    function onSubmit(e) {
        e.preventDefault();
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
                    <ExtraInfoInput required id='schoolInfo' name="schoolInfo" type='text' value={extraInfo.schoolInfo} disabled={extraInfo.schoolType.length < 1} onChange={onChange} placeholder='학교 정보 입력'/>

                    <SchoolsListWrapper>
                        <SchoolListBox schoolsListArray={schoolList} schoolInfo={extraInfo.schoolInfo} />
                    </SchoolsListWrapper>
                    
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
                        >제출</StyledButton>
                    </div>
                </ExtraInfoForm>
            </Modal>
        </>
    )
}

