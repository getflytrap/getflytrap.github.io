import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CustomLayout from "../theme/CustomLayout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

import Banner from "../components/Homepage/Banner";
import Features from "../components/Homepage/Features";
import Team from "../components/Homepage/Team";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <CustomLayout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Banner />
      <Features />
      <Team />
    </CustomLayout>
  );
}
