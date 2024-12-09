import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CustomLayout from "../theme/CustomLayout";

import Banner from "../components/Homepage/Banner";
import Features from "../components/Homepage/Features";
import Team from "../components/Homepage/Team";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <CustomLayout
      title="Flytrap Error Monitoring"
      description="Flytrap is a lightweight, self-hosted error monitoring tool designed to meet the
          needs of small to mid-sized development teams."
    >
      <Banner />
      <Features />
      <Team />
    </CustomLayout>
  );
}
