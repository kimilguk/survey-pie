# 실행 환경 :

- 노드 16.14.0버전, npm 8.3.1버전
- JSON-SERVER 기술참조 : https://github.com/hackurity01/survey-pie-server

# VS Code 셋팅 :

- eslint 플러그인(CeateReactApp에 내장됨) : 실시간으로 jsx문법 및 코드 스타일을 검사해 화면에 표시해주는 도구
  - package.json 파일의 eslintConfig 항목의 속성값 추가로 처리가능(기본값으로 사용)
- simple-import-sort :
  - 설치 명령어: npm install --dev eslint-plugin-simple-import-sort
- Prettier - Code formatter 플러그인 설치 : 문서서식을 자동으로 맞춰주는 도구로 코딩 스타일을 통일성있게 해 준다.
  - 플러그인 설치 후 VS Code 파읾메뉴의 설정항목에서
    - formatter로 검색 후 Default Formatter를 Prettier 로 선택한다.
    - save로 검색 후 Format on save 를 체크한다.

# 클라우드 셋팅 및 관리자단 외부라이브러리 의존추가 :

```
  /* 아래 코예브 클라우드에서 사용할 노드 버전 설정 */
  "engines": {
    "node": ">=16.14.0 <=16.14.0"
  },
  ...
  /* 아래 부터는 관리자에서 사용하는 외부라이브러리 */
    "@ant-design/icons": "^4.7.0",
    "@reduxjs/toolkit": "^1.7.2",
    "antd": "^4.18.6",
    "immer": "^9.0.12",
    "react-redux": "^7.2.6",
    /* 아래 SWR 라이브러리란? “Stale-While-Revalidate”라는 비동기 fetchAPI작업을 도와주고, 리덕스를 대신할 수 있는 전역데이터 상태관리 라이브러리이다.
    */
    "swr": "^1.2.1"
    /* 아래 JSON-API서버에서 사용하는 외부라이브러리 추가(아래) */
    "json-server": "^0.17.0"

  /* 아래 json-server에서 사용할 실행 명령어 추가 */
  "scripts": {
    ...
    "server": "json-server --watch ./src/server/db.json --port 3001",
    ...
  }
  /*
    위 서버실행테스트 : npm run server
    서버실행테스트 : http://localhost:3001/surveys
  */
```
