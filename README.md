# 원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제

## 1. 개요

- React + Styled-components 기반으로 제작한 투두리스트입니다.
- 사용자는 회원가입과 로그인 절차를 거치면 투두리스트 페이지로 이동할 수 있습니다.
- 사용자는 할 일을 추가, 삭제, 수정할 수 있습니다.

## 2. 팀 구성

- 개인

## 3. 개발 환경 및 배포 URL

## 4. 프로젝트 구조

- components: 페이지를 구성하는 컴포넌트들이 모여있는 폴더입니다.
- pages: 페이지가 모여있는 폴더입니다.
- styles: 전역으로 적용되는 스타일이 모여있는 폴더입니다.
- util: 여러번 사용되는 함수들이 모여있는 폴더입니다.

```
├─public
└─src
    ├─components
    │  ├─Button
    │  ├─Container
    │  ├─Form
    │  ├─Modal
    │  └─Title
    ├─pages
    │  ├─Home
    │  ├─Join
    │  ├─Login
    │  └─Todo
    ├─styles
    └─util
```

## 5. 개발 기간

- 2022.07.31 ~ 2022.08.09

## 6. UI

- 초기 페이지
  <img width="633" alt="image" src="https://user-images.githubusercontent.com/89122773/183481152-abd2c37d-9ce4-4e02-a03f-6fc6718c1c6d.png">
- 로그인, 회원가입 페이지
  <img width="633" alt="image" src="https://user-images.githubusercontent.com/89122773/183481413-0bd22dc9-f726-4493-bf95-38cd99f642ca.png">
- 투두리스트 페이지
  <img width="635" alt="image" src="https://user-images.githubusercontent.com/89122773/183481576-d5670729-09ab-4021-a46b-665e7e5c1783.png">

## 7. 구현 기능

- 로그인
- 회원가입
- 할 일 추가
- 할 일 삭제
- 할 일 수정

## 8. 개발 이슈

- 렌더링 최적화를 진행하는 과정에서 useCallback 훅을 모든 함수에 적용해야하는지에 대한 고민이 있었다.
- 로그인, 회원가입에서 공통으로 사용되는 로직을 함수만 따로 빼서 재사용성을 늘릴지, Custom Hook을 사용해야 할지에 대한 고민이 있었다.
