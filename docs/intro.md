---
sidebar_position: 1
---

# Go란 무엇인가

Go는 **가비지 컬렉션** 기능과 **병행성(concurrent)를** 지원하는 프로그래밍 언어 **병행 처리(concurrency)** 성능이 뛰어나면서 주로 서버 사이드 개발, 클라우드 서비스, 데이터 처리에 매우 유용하고 많이 사용되는 언어로, 정적타입의 언어이며, 컴파일 언어로써 빠른 실행 속도를 자랑합니다.

# 1. Go의 주요 특징

- **간결한 문법**: 개발자가 배우기 쉬운 언어로, 간결한 코드방식을 가지고 있음
- **병행 처리**: **고루틴(goroutine)**을 통한 쉬운 병렬 처리 프로그래밍
- **정적 타입**: 컴파일 시 타입 체크가 이루어져 안정성이 높음
- **강략한 표준 라이브러리**: 네트워킹, 파일 처리 등 다양한 기능을 제공하는 풍부한 라이브러리

---

# 2. Go 설치법

- **Windows 버전**

  - [Go 다운로드 페이지](https://go.dev/dl/)에 접속해 Windows 버전 설치
  - 다운로드한 설치파일을 실행해 Go 설치
  - 설치가 완료되면, 명령 프롬프트를 열고 `go version` 입력(안될 시 환경 변수 문제 시스템 -> 환경변수 편집->path 부분 클릭해서 go 설치 디렉토리 추가)

- **macOS**

  - [Go 다운로드 페이지](https://go.dev/dl/)에 접속해 mac 버전 설치
  - 다운로드한 .pkg파일 실행해 설치
  - 설치 완료시 `go version`을 처서 확인

- **Linux**

  - [Go 다운로드 페이지](https://go.dev/dl/)에 접속해 Linux 버전 설치
  - 터밀널을 열고 다음 명령어로 압축 풀기
    `tar -C /usr/local -xzf go1.XX.linux-amd64.tar.gz`
  - **다음 PATH 실행**
    ```echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bash_profile
    source ~/.bash_profile
    ```

- **공통** 설치 완료시 go version으로 설치 확인

---
