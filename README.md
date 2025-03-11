# 앞으로 할 일

- 관리자페이지 접근 권한을 추가한다.
- 관리자페이지에 설문결과를 표시하는 기능 페이지를 추가한다.

# 20250311

- 사용자페이지와 관리자페이지 경로를 분리한다.
- 사용자페이지+관리자페이지+JSON서버를 코예브 클라우드에 배포한다.

# 실행 환경 :

- 실습에 사용된 실행 환경: 노드 16.14.0버전, npm 8.3.1버전
- JSON-SERVER 기술참조 : https://github.com/hackurity01/survey-pie-server
- 초기에 1번만 npm install 명령으로 사용자페이지+관리자페이지+JSON서버에 필요한 외부 라이브러리를 설치된다.

# VS Code 셋팅 :

- eslint 플러그인(CeateReactApp에 내장됨) : 실시간으로 jsx문법 및 코드 스타일을 검사해 화면에 표시해주는 도구
  - package.json 파일의 eslintConfig 항목속 기본내용으로 그냥 둔다.
  - 단, 소스 수정 후 저장 시 eslint-config-react-app 오류가 발생 되는 버그가 있기 때문에, 항상 package.json파일을 오픈한 상태에서 저장해 주면 해결 된다.
- Prettier-Code formatter 플러그인 설치 : 문서서식을 자동으로 맞춰주는 VS Code의 도구로 코딩 스타일을 통일성있게 해 준다.
  - 플러그인 설치 후 VS Code 파읾메뉴의 설정항목에서
    - formatter로 검색 후 Default Formatter를 Prettier 로 선택한다.
    - save로 검색 후 Format on save 를 체크한다.
- 기존소스에서 import 순서를 자동으로 정리하는 simple-import-sort는 작동오류때문애 제거하고, 아래 설정내용도 지운다.

  - 라이브러리 제거 명령어: npm uninstall eslint-plugin-simple-import-sort

  ```
  /* package.json에서 아래 import 순서를 자동으로 정리하는 내용을 제거한다. */
  "plugins": [
      "simple-import-sort"
    ],
    "rules": {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error"
    }
  ```

  - 침고: .eslintrc.json 외부 파일기술 : https://velog.io/@holim0/ESLint-importorder로-import-순서-다루기

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
    /* 아래 SWR 라이브러리란? “Stale-While-Revalidate”라는 비동기 fetchAPI작업을 도와주고, 리덕스와 리코일을 대신할 수 있는 전역데이터 상태관리 라이브러리이다.
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
    위 사이트실행테스트 : npm run start
    사용자홈페이지 실행테스트 : http://localhost:3000/1/0
    관리자홈페이지 실행테스트 : http://localhost:3000/admin
  */
```
