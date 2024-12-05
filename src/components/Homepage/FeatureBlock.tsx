import React from "react";
import { Box, Heading, Text, Stack, Image } from "@chakra-ui/react";

interface FeatureBlockProps {
  orientation: "left" | "right" | "top";
  heading: string;
  text: string;
  imageSrc: string;
  imageWidth: string | { base: string; md: string; lg: string };
  background: string;
  boxShadow: string;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({
  orientation,
  heading,
  text,
  imageSrc,
  imageWidth,
  background,
  boxShadow,
}) => {
  // Render based on the orientation prop
  if (orientation === "left") {
    return (
      <Box
        w="100%"
        h={{ base: "auto", md: "600px" }}
        px={8}
        py={16}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg={background}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={8}
          w="100%"
          maxW="1200px"
          h="100%"
          align="center"
          justify="center"
          px={4}
          py={4}
        >
          {/* Text */}
          <Box
            w={{ base: "100%", md: "30%" }}
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            order={{ base: 1, md: 0 }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "4xl" }}
              color="gray.800"
              mb={4}
            >
              {heading}
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              textAlign={{ base: "left", md: "center" }}
            >
              {text}
            </Text>
          </Box>

          {/* Image */}
          <Image
            src={imageSrc}
            alt="Flytrap Feature Image"
            objectFit="cover"
            w={imageWidth}
            boxShadow={boxShadow}
            order={{ base: 0, md: 1 }}
          />
        </Stack>
      </Box>
    );
  } else if (orientation === "right") {
    return (
      <Box
        w="100%"
        h={{ base: "auto", md: "600px" }}
        px={8}
        py={16}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg={background}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={8}
          w="100%"
          maxW="1200px"
          h="100%"
          align="center"
          justify="center"
          px={4}
          py={4}
        >
          {/* Image */}
          <Image
            src={imageSrc}
            alt="Flytrap Feature Image"
            objectFit="cover"
            w={imageWidth}
            boxShadow={boxShadow}
            order={{ base: 0, md: 0 }}
          />
          {/* Text */}
          <Box
            w={{ base: "100%", md: "30%" }}
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            order={{ base: 1, md: 1 }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "4xl" }}
              color="gray.800"
              mb={4}
            >
              {heading}
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              textAlign={{ base: "left", md: "center" }}
            >
              {text}
            </Text>
          </Box>
        </Stack>
      </Box>
    );
  } else {
    // orientation === "top"
    return (
      <Box
        w="100%"
        h="auto"
        px={8}
        py={16}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg={background}
      >
        <Stack
          direction="column"
          spacing={8}
          w="100%"
          maxW="1200px"
          h="100%"
          align="center"
          justify="center"
          px={4}
          py={4}
        >
          {/* Text-top */}
          <Box
            textAlign="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "4xl" }}
              color="gray.800"
              mb={4}
            >
              {heading}
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              textAlign={{ base: "left", md: "center" }}
            >
              {text}
            </Text>
          </Box>
          {/* Image */}
          <Box
            maxWidth="800px"
            h="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={imageSrc}
              alt="Flytrap Feature Image"
              objectFit="cover"
              w="100%"
              h="100%"
              boxShadow="3px 3px 3px lightgray"
            />
          </Box>
        </Stack>
      </Box>
    );
  }
};

export default FeatureBlock;
