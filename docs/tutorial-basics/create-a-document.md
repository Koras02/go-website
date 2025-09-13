---
sidebar_position: 2
---
 
# 제어 구조(Control Structures)

Go 언어에서 제어 구조는 다음과 같습니다.

* 조건문(Conditional Statements)
* 반복문(Loops)
* 정의문(Definition Statements)
* 조건문 안에서의 제어 구조(Control Structures in Conditional Statements)

## 1. 조건문(Conditional Statements)

Go에서 조건문을 사용하려면 `if`문을 사용합니다.
```go
package main

import "fmt"

func main() {
       var age int = 27

	if age >= 18 {
		fmt.Println("성인입니다.")
	} else {
		fmt.Println("청소년 입니다.")
	}

	// if-elif-else 조건 체크
	var grade int = 90
	if grade >= 90 {
		fmt.Printf("A")
	} else if grade >= 80 {
		fmt.Printf("B")
	} else if grade >= 70 {
		fmt.Printf("C")
	} else if grade >= 60 {
		fmt.Printf("D")
	} else {
		fmt.Printf("F")
	}

}		
```

---

## 2. Switch 조건문 (Switch Statement)

Go에서 switch 문은 조건을 처리할 때 사용하며, case 문을 사용해 각 값에 대한 처리를 할 수 있습니다.

```go
package main

import "fmt"

func main() {
     selector := 5

	 switch selector {
	 case 1:
		fmt.Println("Booting")
	 case 2:
		fmt.Println("Shut Down")
	 case 3:
		fmt.Println("Reboot")
	 default: 
	    fmt.Println("Running...")
	 }
}
```

--- 

## 3. for 반복문(For Loop)

Go에서 for 반복문을 통해 조건문과 함께 사용해 특정 조건을 만족할 때까지 반복할 수 있습니다.

```go
package main

import "fmt"

func main() {
	for i := 0; i < 10; i++ {
		fmt.Print(i, " ") // 0 1 2 3 4 5 6 7 8 9
	}
}
```