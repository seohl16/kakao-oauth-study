# kakao-oauth-study
Using Kakao OAuth with Nest.js

## how to use 
1. npm run start:dev 
2. localhost:3000/auth/kakao
3. 로그인 및 동의 
4. localhost:3000에 도착 

## 서버 사이드 
1. 로그인 및 동의하고 나면 AuthGuard에 따라 strategy의 validate함수 실행 
2. payload에 정보를 담고 callback 함수인 kakaoLoginCallback함수를 실행 
3. kakaoLoginCallback()에 있는 req.user, req.query 등 console.log 내용을 프린트하고 finish


## 구현 과정은 [issue #1](https://github.com/seohl16/kakao-oauth-study/issues/1#issue-1322904062) 을 참조 
