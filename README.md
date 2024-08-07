<div align="center">
<h1>Cyber Escape (싸탈)[2024]</h1>
</div>

<div align="center"> 웹 상에서 재밌게 방탈출 게임을 수행할 수 있는, 방탈출 게임 홈페이지입니다.

총 세 가지의 테마와 테마에 맞는 랜덤 문제, 구성을 통해 실감나는 방탈출 게임을 수행할 수 있습니다.</div>

## 📜 Index

- [DEPLOY URL](#deploy)
- [REPOSITORY](#repo)
- [MEMBER](#member)
- [SPECIFICATION](#specific)
- [PROJECT OUTLINE](#outline)
- [ARCHITECT](#architect)
- [ERD](#erd)
- [SITE INTRODUCTION](#intro)
- [DISTRIBUTED ROLES](#roles)
- [FUNCTION](#function)
- [TECHNOLOGY](#technology)

<a name="deploy"></a>

## 🔗 Deploy URL

### https://k10a303.p.ssafy.io

<a name="repo"></a>

## 📚 Repository

### https://lab.ssafy.com/s10-final/S10P31A303

<br>

<a name="member"></a>

## 🤝 Member

| <a href="https://github.com/baejw3074"><img src="https://github.com/baejw3074.png" width="120"/></a> | <a href="https://github.com/sjhjack"><img src="https://github.com/sjhjack.png" width="120"/></a> | <a href="https://github.com/JinHyeonBae"><img src="https://github.com/JinHyeonBae.png" width="120"/></a> | <a href="https://github.com/ohiju"><img src="https://github.com/ohiju.png" width="120"/></a> |  <a href="https://github.com/defkimbyeongju"><img src="https://github.com/defkimbyeongju.png" width="120"/></a>   | <a href="https://github.com/amsan2"><img src="https://avatars.githubusercontent.com/u/88939170?v=4" width="120"/></a> |
| :---------------------------------------: | :----------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :--------------------------------------: | :-----------------------------------------: | :--------------------------------------: |
|                [배정우](https://github.com/baejw3074)                 |                               [송정훈](https://github.com/sjhjack)                               |                                 [배진현](https://github.com/JinHyeonBae)                                 |                [오희주](https://github.com/ohiju)                | [김병주](https://github.com/defkimbyeongju) |                [류지원](https://github.com/amsan2)                |

<br>

<a name="specific"></a>

## 📝 Specification

- [API 명세서](https://fog-fairy-7f9.notion.site/8e9ff82fe9ee4b129a4775ca166354b6?v=a57728df74d4472db77eb7dd76f843e6&pvs=4)

<br>

<a name="outline"></a>

## 🚧 Project Outline

#### 프로젝트 이름: Cyber Escape (싸탈)

#### 프로젝트 기간: 2024.04 - 2024.05 (6주)

- #### 개발 언어 및 라이브러리
  - #### Backend
    - <img src="https://img.shields.io/badge/Framework-%23121011?style=for-the-badge"><img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"><img src="https://img.shields.io/badge/3.2.4-515151?style=for-the-badge">
    - <img src="https://img.shields.io/badge/Build-%23121011?style=for-the-badge"><img src="https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=Gradle&logoColor=white"><img src="https://img.shields.io/badge/8.5-515151?style=for-the-badge">
    - <img src="https://img.shields.io/badge/Language-%23121011?style=for-the-badge"><img src="https://img.shields.io/badge/java-%23ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"><img src="https://img.shields.io/badge/21-515151?style=for-the-badge">
    - <img src="https://img.shields.io/badge/IDE-%23121011?style=for-the-badge"><img src="https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white"><img src="https://img.shields.io/badge/2021.2.4-515151?style=for-the-badge">
    - <img src="https://img.shields.io/badge/Library-%23121011?style=for-the-badge"><img alt="Spring Security" src ="https://img.shields.io/badge/springsecurity-6DB33F.svg?&style=for-the-badge&logo=springsecurity&logoColor=white"/><img src="https://img.shields.io/badge/6.2.3-515151?style=for-the-badge">
      <img alt="FLYWAY" src ="https://img.shields.io/badge/flyway-CC0200.svg?&style=for-the-badge&logo=flyway&logoColor=white"/><img src="https://img.shields.io/badge/9.22.3-515151?style=for-the-badge">
      <img alt="QUERYDSL" src ="https://img.shields.io/badge/querydsl-0078C0.svg?&style=for-the-badge"/><img src="https://img.shields.io/badge/5.0.0-515151?style=for-the-badge">
      <img alt="JJWT" src ="https://img.shields.io/badge/jjwt-F0047F.svg?&style=for-the-badge"/><img src="https://img.shields.io/badge/0.11.2-515151?style=for-the-badge">
    - <img src="https://img.shields.io/badge/DB-%23121011?style=for-the-badge"><img src="https://img.shields.io/badge/mysql-%23323330.svg?style=for-the-badge&logo=mysql&logoColor=%23F7DF1E"><img src="https://img.shields.io/badge/8.3-515151?style=for-the-badge">
    <img src="https://img.shields.io/badge/mongodb-%23323330.svg?style=for-the-badge&logo=mongodb&logoColor=%23F7DF1E"><img src="https://img.shields.io/badge/5.0.0-515151?style=for-the-badge">

  - #### Infra
    - <img src="https://img.shields.io/badge/OS-%23121011?style=for-the-badge"><img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white"><img src="https://img.shields.io/badge/20.04.6 LTS-515151?style=for-the-badge">
    - <img src="https://img.shields.io/badge/DB-%23121011?style=for-the-badge"><img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"><img src="https://img.shields.io/badge/8.3.0-515151?style=for-the-badge">
    - <img src="https://img.shields.io/badge/CACHE-%23121011?style=for-the-badge"><img src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white"><img src="https://img.shields.io/badge/7.2.4-515151?style=for-the-badge">
    - <img src="https://img.shields.io/badge/WEBSERVER-%23121011?style=for-the-badge"><img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white"><img src="https://img.shields.io/badge/1.18.0-515151?style=for-the-badge">
    - <img src="https://img.shields.io/badge/WAS-%23121011?style=for-the-badge"><img src="https://img.shields.io/badge/apache%20tomcat-%23F8DC75.svg?style=for-the-badge&logo=apache-tomcat&logoColor=black"><img src="https://img.shields.io/badge/10.1.18-515151?style=for-the-badge">
    - <img src="https://img.shields.io/badge/CICD-%23121011?style=for-the-badge"><img src="https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white"><img src="https://img.shields.io/badge/2.441-515151?style=for-the-badge">
    - <img src="https://img.shields.io/badge/CONTAINER-%23121011?style=for-the-badge"><img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"><img src="https://img.shields.io/badge/24.0.5-515151?style=for-the-badge">
  - #### Frontend
    - <img src="https://img.shields.io/badge/Design-%23121011?style=for-the-badge"><img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white">
    - <img src="https://img.shields.io/badge/Platform-%23121011?style=for-the-badge"><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"><img src="https://img.shields.io/badge/20.10.0-515151?style=for-the-badge">
    - <img src="https://img.shields.io/badge/Framework-%23121011?style=for-the-badge"><img src="https://img.shields.io/badge/nextjs-%2335495e.svg?style=for-the-badge&logo=nextdotjs&logoColor=%234FC08D">
    - <img src="https://img.shields.io/badge/Library-%23121011?style=for-the-badge"><img src="https://img.shields.io/badge/three.js-6DB33F?style=for-the-badge&logo=three.js&logoColor=white"><img src="https://img.shields.io/badge/axios-%23593d88?style=for-the-badge&logo=axios&logoColor=white"><img src="https://img.shields.io/badge/zustand-2c4f7c?style=for-the-badge&logo=zustand&logoColor=white"><img src="https://img.shields.io/badge/sockJs-006600?style=for-the-badge&logo=sockJs&logoColor=white"><img src="https://img.shields.io/badge/stomp-FF9E0F?style=for-the-badge&logo=stomp&logoColor=white">
    - <img src="https://img.shields.io/badge/Language-%23121011?style=for-the-badge"><img src="https://img.shields.io/badge/typescript-%23323330.svg?style=for-the-badge&logo=typescript&logoColor=%23F7DF1E">


<br>

- #### Team
  - #### 자율 너머 백수 (배정우, 오희주, 송정훈, 김병주, 배진현, 류지원)

<br>

<a name="architect"></a>

## 🌐 System Architecture

![a303-최종아키텍처](https://github.com/user-attachments/assets/99d50784-6d6a-481a-bac8-4a1b2a7c0025)

<br>

<a name="erd"></a>

## 💾 ERD

![erd](https://github.com/JinHyeonBae/CyberEscape/assets/47708313/907027ed-2e12-46f6-beae-e8b7caf19f60)
<br>

<a name="intro"></a>

## 📢 Site Introduction

**방탈출 게임**

- 다양한 테마의 방탈출 게임을 수행할 수 있다.
- 싱글 모드와 멀티 모드 두 가지를 제공하여, 친구와 함께 게임을 수행할 수 있다.
- 방탈출 시간을 토대로 한 랭킹 시스템으로 방탈출 실력을 점검할 수 있다.

### Site Layout

- #### 메인 페이지

![main](https://github.com/JinHyeonBae/CyberEscape/assets/47708313/1403cfaf-b676-44b3-9a52-1c8f903c57fd)

- #### 테마 선택 페이지

![themaSelect](https://github.com/JinHyeonBae/CyberEscape/assets/47708313/e4632126-1a66-402a-a95e-97934b3a6009)

- #### 멀티 모드 시 게임 참여 선택지

![multimode](https://github.com/JinHyeonBae/CyberEscape/assets/47708313/14d7879c-b9d4-49d7-8973-6d3ef34e3c64)

- #### 게임방 생성
- 
![room_create](https://github.com/JinHyeonBae/CyberEscape/assets/47708313/783fe077-5228-4213-b7fa-cb950b9d8fa1)

- #### 게임방 리스트
![roomList](https://github.com/JinHyeonBae/CyberEscape/assets/47708313/b1af1d6e-153c-48fb-97a3-c7648c9b9080)

- #### 게임 대기방 페이지
![gameWaitRoom](https://github.com/JinHyeonBae/CyberEscape/assets/47708313/b4a0e7a0-b2f5-4b27-b169-4d5cba1f9f2a)

- #### 랭킹 페이지
![ranking](https://github.com/JinHyeonBae/CyberEscape/assets/47708313/284d027e-adbc-42cc-b835-bba157b01ca9)

- #### 게임 방법 설명 페이지
![gameDescription](https://github.com/JinHyeonBae/CyberEscape/assets/47708313/f44609b4-b594-4f50-93d1-8e1b63002e52)

- #### 로그인 / 회원가입 페이지
![login](https://github.com/JinHyeonBae/CyberEscape/assets/47708313/66aefbcb-159b-482f-8a09-a6ccb3cdd990)
![signup](https://github.com/JinHyeonBae/CyberEscape/assets/47708313/cd15466b-ecf1-4d2f-af3f-ee6471053f09)

<br>

<a name="roles"></a>

## 🙋‍♂️ Distributed Roles

### BACKEND

#### 배정우 (팀장)

- 백엔드 & 인프라 팀원
- 인프라 자동 빌드, 배포 환경 구성
- 닉네임 랜덤 생성 API 연동
- 랭킹 서비스 구현
- openvidu 배포 설정 및 배포

#### 송정훈

- 백엔드 팀원
- Spring Security 적용
- JWT 적용
- 회원 서비스 구현
- 게임 대기방 관리 서비스 구현
- 인게임 p2p 서비스 구현

#### 배진현

- 백엔드 팀장
- 테마별 퀴즈 서비스 구현
- 알림 서비스 구현
- 인게임 내부 음성 채팅 구현 (openvidu)
- 친구 서비스 구현
- 홈페이지 리소스 파일 서버(nginx) 구축

### FRONTEND

#### 오희주

- 프론트엔드 팀장
- 우주 테마 스토리 구성
- 인게임 공통 컴포넌트 제작
- draw call 등 게임 최적화
- axios instance화 및 refresh token 구현

#### 김병주

- 프론트엔드 팀원
- 게임 멀티모드 웹소켓 기능 구현
- 음성 채팅 구현
- 싸피 테마 스토리 구성
- 멀티모드 페이지, 컴포넌트 생성

#### 류지원

- 프론트엔드 팀원
- 회원 관리 및 공통 컴포넌트 제작
- 메인페이지(마이홈, 랭킹, 게임설명)구현
- 친구 및 알림 기능 ui 구현
- 공포테마 및 싸피테마 구현
<br>

<br>

<a name="function"></a>

## ⚙️ Function

### 회원

💡 회원은 Spring Security & JWT를 사용하여 로그인 구현

- [x] 회원가입
- [x] 로그인 (access 토큰 및 refresh 토큰 발급)
- [x] 로그인 연장 (access 토큰 재발급)
- [x] 로그아웃
- [x] 회원 탈퇴
- [x] 닉네임 중복 검사
- [x] 아이디 중복 검사
- [x] 닉네임 랜덤 생성

### 테마

💡 공포, 싸피, 우주 총 3개의 테마로 구성

- [x] 테마 목록 조회

### 퀴즈

💡 테마별 랜덤 퀴즈 출제

- [x] 테마 별 랜덤 퀴즈 문제 출제
- [x] 퀴즈 결과 조회
- [x] 퀴즈 별 힌트 조회
- [x] 퀴즈 정답 제출

### 친구

💡 같이 게임을 즐길 수 있는 친구 기능

- [x] 유저 검색
- [x] 친구 리스트 조회
- [x] 친구 요청
- [x] 친구 추가
- [x] 친구 삭제

### 게임 대기방

💡 게임 대기방 상호작용

- [x] 게임방 리스트 조회
- [x] 게임방 생성
- [x] 게임방 삭제
- [x] 게임방 설정 변경
- [x] 멀티 모드 게임방 친구 초대
- [x] 멀티 모드 강제 퇴장
- [x] 게임방 설정 변경

### 인게임

💡 게임 시 사용자들 상호작용

- [x] 멀티 모드 시 유저별 정보 공유

### 랭킹

💡 전체 사용자의 랭킹 정보 조회

- [x] 랭킹 리스트 조회
- [x] 실시간 랭킹 정보 조회

### 사용자 정보

💡 사용자의 정보 조회

- [x] 유저 기본 정보 조회 (닉네임, 프로필 사진)
- [x] 테마별 유저 최고 기록 조회

### 알림

💡 게임 초대 및 친구 추가 알림 기능

- [x] 안 읽은 요청 조회
- [x] 알림 읽음 처리
- [x] 실시간 알림 전송

<br>

## Technology

### nginx

- 홈페이지 전체 리소스 저장

### Redis

- 출제한 퀴즈 내역 저장
- refresh Token

### Infra

- jenkins & gitlab 사용해서 자동 빌드, 자동 배포 환경 구현
- docker를 사용한 어플리케이션 환경 구성
- nginx를 사용한 경로 요청에 따른 요청 분산 처리
