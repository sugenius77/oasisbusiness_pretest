# 오아시스비즈니스 프론트엔드 사전 과제

## 신입 개발자 이수진

### 1. 기본 요구 사항

- 템플릿: CRA
- 언어: JavaScript
- 외부 라이브러리
  - `axios`
  - `@github/time-elements`
  - `lodash`
  - `Styled Components`

### 2. 필수 구현 사항

- api로 받아온 데이터 state로 저장
- 저장된 데이터로 name을 기준으로 필터링하는 검색 기능 인풋 구현
- 저장된 데이터로 Language 필터 구현
  - 항목: C++, JavaScript, TypeScript, Java
- API Query Parameter의 sort, direction 사용하여 Sort 필터를 구현
  - 항목: 최신 업데이트순, 이름순
- 브라우저를 새로고침 후에도 현재 필터링 된 화면 유지
  - localstorage 사용
- 페이징 구현
  - 전체 페이지 4페이지
  - 페이지 당 10개

### 3. 선택 구현 사항

- 검색 창 input debouncing 처리
  - 외부 라이브러리 `lodash` 사용
- 업데이트된 시간 포맷팅
  - 외부 라이브러리 `@github/time-elements` 사용
- 필터 결과 표시와 clear 기능 구현
