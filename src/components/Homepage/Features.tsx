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
        text="Blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah"
        imageSrc="../../img/homepage/projects.png"
        imageWidth="50%"
        background="white"
        boxShadow="3px 3px 3px lightgray"
      />
      <FeatureBlock
        orientation="right"
        heading="Near Real-time Notifications"
        text="Blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah"
        imageSrc="../../img/homepage/SNS.png"
        imageWidth="50%"
        background="gray.100"
        boxShadow="3px 3px 3px lightgray"
      />
      <FeatureBlock
        orientation="left"
        heading="Support for Multiple Platforms"
        text="Blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah"
        imageSrc={"../../img/homepage/platforms.svg"}
        imageWidth={{ base: "70%", md: "50%", lg: "40%" }}
        background="white"
        boxShadow="none"
      />
      <FeatureBlock
        orientation="top"
        heading="Powered By AWS"
        text="Blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah"
        imageSrc="../../img/homepage/full-architecture.png"
        imageWidth="auto"
        background="gray.100"
        boxShadow="3px 3px 3px lightgray"
      />
    </Box>
  );
}

export default Features;
