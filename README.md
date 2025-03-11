# My Blog 프로젝트

패스트캠퍼스 "고성능 대규모 프론트엔드 10개 프로젝트" 中 블로그 앱 프로젝트 실습 내용
React와 Vite로 만든 간단한 블로그 웹사이트입니다. Firebase Hosting을 통해 배포되었습니다.

## ⚙️ 기술 스택

- **Frontend**: React, TypeScript, Vite
- **스타일링**: CSS
- **아이콘**: React Icons
- **배포 환경**: Firebase Hosting

## 🚀 주요 기능

- 블로그 게시물 작성 및 조회 기능
- 사용자 프로필 및 설정 페이지
- 다크 모드 지원

## 📂 프로젝트 구조

```
my-blog
├── public
├── src
│   ├── components   # 공통 그리고 페이지별 컴포넌트, 인증 및 다크모드 관련 Context
│   ├── pages        # 페이지 단위 컴포넌트
├── firebase.json
├── package.json
└── vite.config.ts
```

## 📸 화면 캡처
### 메인 페이지
<img width="931" alt="image" src="https://github.com/user-attachments/assets/fee51453-9e47-4b4d-b1a6-89c529aee71b" width="800px" />

모든 계정의 글들을 확인할 수 있습니다. 
필터링에 따라 내가 작성한 글, FE, BE, WEB, NATIVE에 해당하는 글만을 확인하는 것도 가능합니다
다른 계정의 글에 대해서는 글 읽기, 댓글 달기가 가능하며
본인의 글에 대해서는 글 작성, 수정, 삭제가 가능합니다

### 메인 페이지_다크모드
<img width="939" alt="image" src="https://github.com/user-attachments/assets/0ac14124-684c-447e-b877-1df51bc79e23" width="800px"/>

Context API를 통해 다크모드를 구현했습니다

### 게시글 페이지
<img width="949" alt="image" src="https://github.com/user-attachments/assets/ad501427-d990-48b1-9c4a-800bb1157a29" width="800px" />

게시글 확인 및 댓글 작성이 가능합니다

### 프로필 페이지
<img width="948" alt="image" src="https://github.com/user-attachments/assets/33aaf94a-b187-4067-9346-e8f670fd101d" width="800px" />

본인의 프로필 정보 및 내가 쓴 글의 목록 확인이 가능합니다

## 💻 프로젝트 실행 방법

### 설치

```bash
npm install
# 또는
yarn
```

### 로컬 서버 실행

```
npm run dev
또는
yarn dev
```

### 빌드 및 배포

빌드:

```
npm run build
```

Firebase Hosting 배포:

```bash
firebase deploy --only hosting
```

## 🔗 배포 주소

- [https://my-blog-react-b1123.web.app](https://my-blog-react-b1123.web.app)

## 📌 주요 기능

- 블로그 포스트 작성 및 관리
- 사용자 프로필 관리
- 다크모드 기능
- 댓글 기능

## 📝 향후 추가 예정 기능

- 간편 로그인 기능(구글, 깃허브) 추가
- 특정 기준에 따른 게시물 상위 3개 Carousel에 보여주기
- 프로필 이미지 추가
- 게시글 카테고리 복수 선택 기능 추가

## 📦 사용 방법

1. Repository를 클론합니다.
2. 의존성 패키지를 설치합니다. (`npm install` 또는 `yarn install`)
3. 로컬에서 실행하거나 Firebase에 배포하여 확인합니다.

## 📌 커밋 규칙

본 프로젝트는 Conventional Commit 규칙을 따르고자 노력했지만 완벽하지 않을 수 있습니다
```
feat: 새로운 기능 추가
fix: 버그 수정
style: UI 스타일 변경
chore: 기타 빌드 및 설정 관련 작업
```

