---
sidebar_position: 2
---
# Go 변수와 데이터 타입

## 1. 변수(Variables)

Go에서 변수를 선언하는 방법으로는 기본 변수선언인 `var` 키워드를 사용해 변수를 정의할 수 있습니다. 
```go
var 변수이름 데이터 타입
```
```go
var name string = "King"
```
함수 내에서 `:=`를 사용해 변수를 선언하고 초기화 합니다.
```go
name := "James"
```

---

## 2. 데이터 타입(Data Types)

Go 에서는 여러 기본 데이터 타입을 제공합니다.

* **정수형(integer)**
  - int, int8, int16, int32, int64
  - uint, uint8, uint16, uint32, uint64
* **부동 소수점(Floating-point)** 
  - float32, float64
* **복소수형(Complex)**
  - complex64, complex128
* **문자열(String)**
  - 문자열은 **불변(immutable)** 이며, UTF-8 인코딩 지원 
  ```go
  var greeting string = "Hello World"
  ```
* **불리언(Boolean)** 
  - bool 타입으로, true 또는 false값을 가짐
  ```go
  var isActive bool = true
  ```
* **슬라이스(Slice)**
  - 동적 길이의 배열
  ```go
  var number []int = []int{1,2,3}
  ```
* **맵(Map)** 
  - 키-값 쌍으로 구성된 데이터 구조
  ```go
  var args map[string]int = map[string]int{"Sally": 25, "Bob": 30}
  ``` 
* **구조체(Struct)**
  - 사용자 정의 데이터 타입으로, 여러 필드를 가질 수 있음
  ```go
  type Person struct {
    Name string 
    Age int 
    Job string 
  }
  ```
* **인터페이스(Interface)**
  - 메서드의 집합을 정의, 다양한 타입을 구현합
  ```go
   type Animal interface {
       Speak() string 
   }
  ```

### 전체 코드
```go
package main

import "fmt"

func main() {
	// string
	var gretting string = "Hello, Go!, from a variable";
	fmt.Println(gretting); // Hello, Go!, from a variable

	// int
	var isActive bool = true;
	fmt.Println(isActive); // true 

	// slice
	var numer []int = []int{1, 2, 3, 4, 5};
	fmt.Println(numer); // [1 2 3 4 5]

	// map
	var user map[string]string = map[string]string{
		"name": "John",
		"age":  "30",
	}
	fmt.Println(user); // map[age:30 name:John]

	// struct
	type Person struct {
		name string 
		Age int 
		Job string
	}

	var person Person = Person {
		name: "John",
		Age: 30,
		Job: "Developer",
	}
	fmt.Println(person); // {John 30 Developer}
}
```
---

## 3. 타입 추론(Type Interface)

Go는 변수 선언 시 타입을 명시하지 않더라도 초기화에 따라 타입이 자동 추론됩니다.

```go
package main

import "fmt"

func main() {	
	var age = 27; // int 추론
	name := "John"; // string 추론

	fmt.Println("Name:", name);
	fmt.Println("Age:", age)
}
```

--- 
## 4. 명시적 타입 지정 (Explicit Type Specification)

변수를 선언할 때 타입을 명시적으로 지정할 수 있으며, 이는 코드의 가독성을 높이고, 의도를 명확히할 수 있습니다.

```go
package main

import "fmt"

func main() {
	var height float64 = 1.82
	var isActivate bool = true

	fmt.Println("Height:", height)
	fmt.Println("IsActivate:", isActivate)
}
```