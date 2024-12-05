import { Box, Heading, Text, Button, Link, Image } from "@chakra-ui/react";

function Banner() {
  return (
    <Box
      as="header"
      bgGradient="linear(200deg, rgba(36,195,173,1) 0%, rgba(39,167,138,1) 14%, rgba(29,125,85,1) 35%, rgba(19,85,57,1) 67%, rgba(10,46,30,1) 100%);"
      color="white"
      py={16}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Box>
        <Image src="../../img/homepage/transparent-logo.svg" maxWidth={400} />
        <Text as="h2" fontSize="4xl" mb={8} maxWidth="600px">
          A lightweight, self-hosted error monitoring tool designed to meet the
          needs of small to mid-sized development teams.
        </Text>
        <Box>
          <Link href="/case-study" _hover={{ textDecoration: "none" }}>
            <Button colorScheme="teal" size="lg">
              Read Case Study
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
