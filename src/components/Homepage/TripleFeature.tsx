import React from "react";
import { Box, Heading, Text, Stack, Image, VStack } from "@chakra-ui/react";

const TripleFeature: React.FC = () => {
  return (
    <Stack
      direction={{ base: "column", md: "column", lg: "row" }}
      spacing={8}
      w="100%"
      display="flex"
      px={4}
      py={4}
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
    >
      {/* Data Ownership */}
      <VStack w="400px" alignItems="center">
        <Image
          src="../../img/homepage/data-ownership.svg"
          alt="Flytrap Feature Image"
          objectFit="cover"
          w="200px"
        />
        <Box
          w="300px"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Heading as="h1" fontSize="2xl" color="gray.800" mb={4}>
            Data Ownership
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.600"
            textAlign={{ base: "left", md: "center" }}
          >
            Flytrap processes and stores error data on the user's own AWS
            infrastructure
          </Text>
        </Box>
      </VStack>

      {/* Infrastructure Control*/}
      <VStack w="400px" alignItems="center">
        <Image
          src="../../img/homepage/infrastructure-control.svg"
          alt="Flytrap Feature Image"
          width="50px"
          objectFit="cover"
          w="200px"
        />
        <Box
          w="300px"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Heading as="h1" fontSize="2xl" color="gray.800" mb={4}>
            Infrastructure Control
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.600"
            textAlign={{ base: "left", md: "center" }}
          >
            Flytrap provides users with full control over the cost,
            configuration, and security of their infrastructure
          </Text>
        </Box>
      </VStack>

      {/* Hassle-free Deployment */}
      <VStack w="400px" alignItems="center">
        <Image
          src="../../img/homepage/3-panel-Terraform.svg"
          alt="Flytrap Feature Image"
          objectFit="cover"
          w="200px"
          h="220px"
        />
        <Box
          w="300px"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Heading as="h1" fontSize="2xl" color="gray.800" mb={4}>
            Hassle-free Deployment
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.600"
            textAlign={{ base: "left", md: "center" }}
          >
            Flytrap's fully automated deployment process provisions all required
            AWS infrastructure in minutes
          </Text>
        </Box>
      </VStack>
    </Stack>
  );
};

export default TripleFeature;
