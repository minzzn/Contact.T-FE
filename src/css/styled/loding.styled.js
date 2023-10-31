import styled from 'styled-components';
import Loading from './public/assets/Loading.gif';

export const Loading = () => {
    return(
        <Background>
            <LoadingText>잠시만 기다려 주세요.</LoadingText>
            <img src={Loading} alt="로딩중" width="5%" />
        </Background>
    );
}