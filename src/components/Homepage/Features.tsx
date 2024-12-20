import React from "react";
import FeatureBlock from "./FeatureBlock";
import { Box } from "@chakra-ui/react";
import TripleFeature from "./TripleFeature";

function Features() {
  return (
    <Box w="100%">
      <TripleFeature />
      <FeatureBlock
        orientation="left"
        heading="Developer Dashboard"
        text="View real-time error data, including detailed reports, stack traces, and user impact, for quick resolution of issues"
        imageSrc="../../img/homepage/projects.png"
        imageWidth="50%"
        background="white"
        boxShadow="3px 3px 3px lightgray"
      />
      <FeatureBlock
        orientation="right"
        heading="Notifications"
        text="Recieve alerts when errors occur, enabling timely response to emerging issues"
        imageSrc="../../img/homepage/sns-notifications.png"
        imageWidth="50%"
        background="gray.100"
        boxShadow="3px 3px 3px lightgray"
      />
      <FeatureBlock
        orientation="left"
        heading="Support for Multiple Platforms"
        text="Flytrap detects and reports errors occurring in React, JavaScript, Express, and Flask code bases"
        imageSrc={"../../img/homepage/platforms.svg"}
        imageWidth={{ base: "60%", md: "50%", lg: "40%" }}
        background="white"
        boxShadow="none"
      />
      <FeatureBlock
        orientation="top"
        heading={
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
            <h1>Powered By</h1>
            <img
              src="../../img/homepage/aws.png"
              alt="Powered by AWS Cloud Computing"
              style={{ maxWidth: '90px', height: 'auto', margin: '0 1rem'}}
            />
          </div >
        }
        text="Flytrap deploys on the user's own Amazon Web Services infrastructure, utilizing AWS's powerful features to provide reliable and scalable performance"
        imageSrc="../../img/homepage/full-architecture.png"
        imageWidth="auto"
        background="gray.100"
        boxShadow="3px 3px 3px lightgray"
      />
    </Box>
  );
}

export default Features;
