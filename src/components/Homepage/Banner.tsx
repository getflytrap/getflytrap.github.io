import { Box, Text, Button, Link, Image, Stack } from "@chakra-ui/react";

function Banner() {
  return (
    <Box
      as="header"
      bgGradient="linear(200deg, rgba(36,195,173,1) 0%, rgba(39,167,138,1) 14%, rgba(29,125,85,1) 35%, rgba(19,85,57,1) 67%, rgba(10,46,30,1) 100%);"
      color="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="calc(100vh - 60px)"
    >
      <Box>
        <Image src="../../img/homepage/transparent_logo.png" maxWidth={400} my={8} mx="auto"/>
      </Box>
      <Box>
          <Text as="h1" fontSize="3xl" fontWeight={400} maxWidth="800px" className="banner">
            A lightweight, self-hosted error monitoring tool designed to meet the
            needs of small to mid-sized development teams.
          </Text>
      </Box>
      <Box>
        <Link href="/case-study" _hover={{ textDecoration: "none" }}>
          <Button 
          backgroundColor="transparent"
          border="1px solid #D1E7BA"
          color="#D1E7BA"
          height="4rem"
          my={8} 
          fontSize="20px"
          px="24px"
          transition="background-color 0.3s, transform 0.2s"
          _hover={{
            backgroundColor: "#319997",
            border: "1px solid #319997",
            color: "white",
            transform: "scale(1.05)",
          }}
          >
            Read our Case Study
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Banner;
