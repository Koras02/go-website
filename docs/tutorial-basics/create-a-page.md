---
sidebar_position: 1
---

# Go 기본 세팅하기

Go를 VS Code에 세팅하는 방법과 변수 데이터 타입에 대해 알아보겠습니다. 먼저 go를 설치했다면 VS Code를 설치해보겠습니다. [다운로드 링크](https://code.visualstudio.com/Download)를 클릭해 VScode를 다운 받습니다

## VSCode 설치 후 Go 확장 프로그램 설치

1. **Go 확장 프로그램 설치**
   - VS Code 왼쪽 사이드바에서 **Extensions(확장 프로그램)** 아이콘 클릭
   - 검색창에 `Go`입력 -> **Go Team at Google**에서 제공하는 Go 다운
2. **Go 모듈 초기화** 
 Go는 `go.mod` 파일을 통해 의존성을 관리합니다. <br /> 
 `go mod init example.com/hello` <br />
 실행 후 프로젝트 루트에 `go.mod` 파일이 생성됩니다.

3. **기본 코드 작성**
`main.go`파일을 생성해 아래처럼 작성합니다. <br />
```go
package main

import "fmt"

func main() {
  fmt.Println("Hello, Go!");
}
```

4. **실행하기**

터미널에서 다음과 같은 명령어를 입력합니다
```bash 
go run main.go
```
실행 시 다음과 같은 결과가 출력됩니다.

```
Hello, Go!
```
 
