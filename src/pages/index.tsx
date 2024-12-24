import React, { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";
import CustomLayout from "../theme/CustomLayout";

import Banner from "../components/Homepage/Banner";
import Features from "../components/Homepage/Features";
import Team from "../components/Homepage/Team";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {

        setTimeout(() => {
          const element = document.querySelector(location.hash);
          if (element) {
            const yPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: yPosition, behavior: "smooth" });
          }
        }, 0);
      }
    };

    scrollToHash();

    const handleHashChange = () => scrollToHash();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
   };
  }, [location.hash]);

  return (
    <CustomLayout
      title="Error Monitoring"
      description="Flytrap is a lightweight, self-hosted error monitoring tool designed to meet the
          needs of small to mid-sized development teams."
    >
      <Banner />
      <Features />
      <Team />
    </CustomLayout>
  );
}
