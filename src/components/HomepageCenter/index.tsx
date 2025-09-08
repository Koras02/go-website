import type { ReactNode } from "react";

export type HomepageItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
  code?: string;
};

const HomePageList: HomepageItem[] = [
  {
    title: "간결한 문법",
    Svg: require("@site/static/img/motorcycle.svg").default,
    description: (
      <>
        Go는 간결하고 직관적인 코드 스타일을 제공하여 빠르게 학습할 수 있습니다.
      </>
    ),
    code: `package main

import "fmt"

func main() {
  fmt.Println("Hello World")
}`,
  },
  {
    title: "가비지 컬렉션(GC)",
    Svg: require("@site/static/img/biplane.svg").default,
    description: (
      <>
        Go는 메모리 관리를 위한 가비지 컬렉션 기능이 내장되어 있어 개발 시
        메모리 부담을 줄여줍니다.
      </>
    ),
  },
  {
    title: "높은 코드 생산성",
    Svg: require("@site/static/img/pilot-bust.svg").default,
    description: (
      <>
        단순한 문법과 강력한 도구로 코드 생산성을 높이고, 일관된 코딩 컨벤션으로
        유지보수 비용을 줄입니다.
      </>
    ),
  },
];

export default HomePageList;
