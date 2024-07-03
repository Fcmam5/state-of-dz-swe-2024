import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs">
            Read the full report
          </Link>
        </div>
        {/* <p>
          <em>
            Explore the Algerian landscape
          </em>
        </p> */}
      </div>
    </header>
  );
}

function DemoVideo() {
  return (
    <div className={styles.demoVideo}>
      <h2>Have a sneak peek into the report!</h2>
      <iframe
        src="https://www.youtube.com/embed/-Vk4g2tFHPE?si=CYHgpypJlztKx0hA&rel=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

function SubscribeToMailingList() {
  return (
    <div className={styles.future}>
      <h2>It's just the beginning</h2>

      <p>
        This work has been challenging, and taught us a lot. Now we are more
        ready to raise the challenge again!
      </p>
      <p>
        For the next editions, we plan to gather more data, get more
        participants, talk to more people, and to make a lot of noise!
      </p>
      <div>
        <Link
          className="button button--primary button--lg"
          to="https://stateofalgeria.substack.com/"
        >
          📨 Subscribe to our newsletter!
        </Link>
      </div>
      <p>
        <small>
          We hate spam as much as you do (or maybe more),
          <br /> so we're keeping this mailing list only for{" "}
          <strong>#dzDevSurvey24</strong>-related news
        </small>
      </p>
    </div>
  );
}

function FeedbackComponent() {
  return (
    <div className={styles.future}>
      <h2>Feedback and Support</h2>

      <p>
        This work isn't the first of its kind in Algeria, and it might not be
        the perfect work Algeria deserves
      </p>
      <p>
        If you think we did a good job or have suggestions on how we can
        improve, we'd love to hear from you:
      </p>
      <div className={styles.buttonContainer}>
        <Link className="button button--secondary button--lg" to="/support">
          Say Thanks and Support Our Work
        </Link>{" "}
        <Link className="button button--secondary button--lg" to="/feedback">
          Share Your Thoughts or Suggestions
        </Link>
      </div>
    </div>
  );
}
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Exploring Algerian software engineering landscape"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <DemoVideo />
        <FeedbackComponent />
        <br />
        <SubscribeToMailingList />
      </main>
    </Layout>
  );
}
