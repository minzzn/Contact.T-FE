# 프론트엔드 : 김민주, 이시영      
# todo lists
* ~~메인페이지 골격 완성~~
* ~~회원 프로필 골격 완성~~
* 로그인/회원가입 페이지 서버와 연결
* ~~소켓 서버환경 구현~~
* 소켓 채팅화면 구현
* ~~회원 정보 수정 컴포넌트~~
* ~~프로필 컴포넌트~~
* 로딩 화면 컴포넌트    

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