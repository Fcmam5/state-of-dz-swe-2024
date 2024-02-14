import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "For all Algerians",
    Svg: require("@site/static/img/undraw_real_time_analytics_re_yliv.svg")
      .default,
    description: (
      <>
        Gain insights into the Algerian tech landscape with detailed survey
        results, showcasing the work and trends of Algerian software engineers
        both within Algeria and abroad.
      </>
    ),
  },
  {
    title: "Exploring opportunities",
    Svg: require("@site/static/img/undraw_pair_programming_re_or4x.svg")
      .default,
    description: (
      <>
        Uncover diverse opportunities within the Algerian tech sector through
        insightful survey findings, empowering strategic decision-making and
        fostering innovation.
      </>
    ),
  },
  {
    title: "Navigating Challenges",
    Svg: require("@site/static/img/undraw_data_re_80ws.svg").default,
    description: (
      <>
        Gain valuable insights into the challenges facing the Algerian tech
        industry, equipping you with knowledge to navigate obstacles and drive
        positive change.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
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

export default function HomepageFeatures() {
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
