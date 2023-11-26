import { useState } from 'react';
import Modal from 'react-modal';
import { ExtraInfoInput, ExtraInfoForm, ExtraInfoLabel, RadioInputWrapper, ExtraInfoInputRadio, customedStyle, RadioInputContainer, SchoolInputWrapper, SchoolInputBtn } from '../../css/styled/Profile/addInfo.styled';
import { searchDB } from '../../function/addInfo';

export const AddInfoModal = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [childInfo, setChildInfo] = useState("");
    const [schoolInfo, setSchoolInfo] = useState("");
    const [schoolType, setSchoolType] = useState("");


    // async function searchDB(schoolType, schoolInfo) {

    //     const response = await fetch(`//www.career.go.kr/cnet/openapi/getOpenApi.json?apiKey=${process.env.REACT_APP_CAREERNET_KEY}&svcType=api&svcCode=SCHOOL&contentType=json&gubun=${schoolType}`, {
    //         method: "GET",
    //     });

    //     const data = await response.json();

    //     console.log(data);
    // }

    Modal.setAppElement('#root');
    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customedStyle}
            >
                <ExtraInfoForm>
                    <ExtraInfoLabel htmlFor='child'>자녀 이름</ExtraInfoLabel>
                    <ExtraInfoInput type='text' required onChange={(e) => {
                        setChildInfo(e.target.value);
                    }} id='child' value={childInfo} placeholder='자녀 이름 입력' />

                    <ExtraInfoLabel htmlFor='school'>학교 검색</ExtraInfoLabel>
                    <RadioInputContainer>
                        <RadioInputWrapper>
                            <ExtraInfoInputRadio type='radio' value="elementary" id='elementary' name='schoolType' onChange={(e) => setSchoolType(e.target.value)} />
                            <label htmlFor='elementary'>초등학교</label>
                        </RadioInputWrapper>
                        <RadioInputWrapper>
                            <ExtraInfoInputRadio type='radio' value="middle" id='middle' name='schoolType' onChange={(e) => setSchoolType(e.target.value)} />
                            <label htmlFor='elementary'>중학교</label>
                        </RadioInputWrapper>
                        <RadioInputWrapper>
                            <ExtraInfoInputRadio type='radio' value="high" id='high' name='schoolType' onChange={(e) => setSchoolType(e.target.value)} />
                            <label htmlFor='elementary'>고등학교</label>                          
                        </RadioInputWrapper>
                    </RadioInputContainer>
                    <ExtraInfoInput required id='school' type='text' $customizedWidth="60%" value={schoolInfo} disabled={schoolType.length < 1} onChange={(e) => {
                        setSchoolInfo(e.target.value);
                        searchDB(schoolType, schoolInfo);
                    }} placeholder='학교 정보 입력'/>

                    
                </ExtraInfoForm>
            </Modal>
        </>
    )
}