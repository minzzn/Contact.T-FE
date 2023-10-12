# 프론트엔드 : 김민주, 이시영      
### 이시영 : todo
* 회원가입
> 데이터 전송/응답 확인할 것    
좀 더 세부적으로 input값 나눌 것     

* 메인페이지
> 채팅 내역들 ui에 그려지도록 만들기     
채팅내역 데이터 전송/응답 확인

### 김민주 : todo 
* 초기 프로필 설정 컴포넌트 - SetProfile
> 로직 구현 및 반응형으로 코드 리팩토링
* 프로필 view 컴포넌트 - ViewProfile
> 로직 구현 및 반응형으로 코드 리팩토링
* 로딩창 - Loading
> 디자인 및 로직 구현, 코드 리팩토링
* 마이페이지 - Mypage
> 디자인 및 로직 구현

--- 
### 회원가입 페이지
1. 서버로부터 데이터 요청
2. 받아온 데이터 바탕으로 검색하는 화면 구현
3. 검색 화면에서 사용자가 클릭한 데이터를 회원가입 페이지에 데이터 저장
4. 학교 주소 검색하는 모달 창 컴포넌트 구현
***    
# 개발환경 세팅 문서
## scripts    
> * npm run build : 배포용 실행 스크립트
> * npm run client : 개발용 실행 스크립트 : 클라이언트 사이드
> > 3000포트로 연결
> * npm run server : 개발용 실행 스크립트 : 백 사이드 : 노드몬으로 실시간 서버 변경사항 추적
> > 8080포트로 연결
> * npm run dev : "npm run client" & "npm run server" script 모두 실행(concurrently 이용)
***    
# 회원가입 페이지
> * 커리어넷 : 학교검색 api -> JSON 형태 URL : //www.career.go.kr/cnet/openapi/getOpenApi.json?apiKey=인증키
> * request/response 파라미터/필드 정보 홈페이지 : https://www.career.go.kr/cnet/front/openapi/openApiSchoolCenter.do