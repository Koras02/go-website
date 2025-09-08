import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import HomePageList from "../HomepageCenter";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "간결한 문법",
    Svg: require("@site/static/img/motorcycle.svg").default,
    description: (
      <>
        Go는 개발자가 손쉽게 설치하고 배우기 쉬운 환경으로, 간결한 코드방식을
        가지고 있습니다.
      </>
    ),
  },
  {
    title: "가비지 컬렉션(GC)",
    Svg: require("@site/static/img/biplane.svg").default,
    description: (
      <>
        Go는 메모리 관리를 위한 가비지 컬렉션 기능이 내장되어 있어 개발 시
        메모리 부담을 덜어주는 역할을 하고 있음
      </>
    ),
  },
  {
    title: "높은 코드 생산성",
    Svg: require("@site/static/img/pilot-bust.svg").default,
    description: (
      <>
        단순한 문법과 강력한 도구들로 코드 생산성을 높이고, 일관된 코딩
        컨벤션으로 브로젝트 유지보수 비용을 낮춰준다
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
