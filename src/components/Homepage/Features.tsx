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
        text="Flytrap's intuitive dashboard allows developers to view real-time error data, including detailed reports, stack traces, and user impact, for quick resolution"
        imageSrc="../../img/homepage/projects.png"
        imageWidth="50%"
        background="white"
        boxShadow="3px 3px 3px lightgray"
      />
      <FeatureBlock
        orientation="right"
        heading="Near Real-time Notifications"
        text="Flytrap provides near real-time alerts through Amazon SNS to notify developers of new errors, ensuring quick awareness and response to emerging issues"
        imageSrc="../../img/homepage/SNS.png"
        imageWidth="50%"
        background="gray.100"
        boxShadow="3px 3px 3px lightgray"
      />
      <FeatureBlock
        orientation="left"
        heading="Support for Multiple Platforms"
        text="Flytrap's SDKs comprehensively detect and report errors occurring in React, JavaScript, Express, and Flask code bases"
        imageSrc={"../../img/homepage/platforms.svg"}
        imageWidth={{ base: "70%", md: "50%", lg: "40%" }}
        background="white"
        boxShadow="none"
      />
      <FeatureBlock
        orientation="top"
        heading="Powered By AWS"
        text="Flytrap deploys on the user's own Amazon Web Services infrastructure,  utilizing AWS's powerful features to provide reliable and scalable performance"
        imageSrc="../../img/homepage/full-architecture.png"
        imageWidth="auto"
        background="gray.100"
        boxShadow="3px 3px 3px lightgray"
      />
    </Box>
  );
}

export default Features;
