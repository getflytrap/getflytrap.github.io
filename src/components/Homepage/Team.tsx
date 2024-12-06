import {
  Box,
  Flex,
  Text,
  Image,
  VStack,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import Link from "@docusaurus/Link";
("https://avatars.githubusercontent.com/u/58274427?v=4");
("https://avatars.githubusercontent.com/u/96496455?v=4");
("https://avatars.githubusercontent.com/u/123587588?v=4");
("https://avatars.githubusercontent.com/u/118783042?v=4");

const Team = () => {
  const developers = [
    {
      name: "Rebecca Biancofiore",
      location: "Chattanooga, TN",
      avatarUrl: "https://avatars.githubusercontent.com/u/58274427?v=4",
      personalUrl: "https://www.rlbianco.com",
      linkedInUrl: "https://www.linkedin.com/in/rebecca-biancofiore-8341b5225/",
      githubUrl: "https://github.com/fenris55",
      email: "rebeccabiancofiore79@gmail.com",
    },
    {
      name: "Anthony Kovatch",
      location: "New York, NY",
      avatarUrl: "https://avatars.githubusercontent.com/u/96496455?v=4",
      personalUrl: "https://www.anthonykovatch.com",
      linkedInUrl: "https://www.linkedin.com/in/anthony-kovatch-45b674310/",
      githubUrl: "https://github.com/Akovatch",
      email: "Anthonykovatch@gmail.com",
    },
    {
      name: "Clarissa Röder",
      location: "Greater Munich Metropolitan Area, Germany",
      avatarUrl: "https://avatars.githubusercontent.com/u/123587588?v=4",
      personalUrl: "https://www.clarissaroeder.com",
      linkedInUrl: "https://www.linkedin.com/in/clarissaroeder/",
      githubUrl: "https://github.com/clarissaroeder",
      email: "c@clarissaroeder.com",
    },
    {
      name: "Saul Thompson",
      location: "Seattle, WA",
      avatarUrl: "https://avatars.githubusercontent.com/u/118783042?v=4",
      personalUrl: "https://www.saulthompson.com",
      linkedInUrl: "https://www.linkedin.com/in/saulthompson",
      githubUrl: "https://github.com/saulthompson",
      email: "saulthompson@hotmail.co.uk",
    },
  ];

  return (
    <Box id="team">
      <VStack spacing={6} my={8}>
        <Heading as="h2" variant="light">
          Developed By:
        </Heading>
        <Flex
          justify="space-between"
          width="100%"
          mx="5px"
          gap={4}
          maxWidth="1200px"
          direction={["column", "column", "row"]}
        >
          {developers.map((developer, index) => (
            <Box
              key={index}
              textAlign="center"
              flex="1"
              display="flex"
              flexDirection="column"
              alignItems="center"
              mx="10px"
              my="10px"
            >
              <Image
                src={developer.avatarUrl}
                alt={developer.name}
                borderRadius="full"
                boxSize={["150px", "30%", "150px", "200px"]}
                mb={2}
              />
              <Flex flexDir="column" align="center">
                <Text as="div" fontSize="20" fontWeight="semibold" mb="5px">
                  {developer.name}
                </Text>
                <Text as="div">Software Engineer</Text>
                <Text as="div">{developer.location}</Text>
                <Box display="flex" gap={4} mt="15px">
                  <Link to={developer.personalUrl}>
                    <Box
                      as="span"
                      _hover={{ color: "blue.500", cursor: "pointer" }}
                    >
                      <CiGlobe size="25px" />
                    </Box>
                  </Link>
                  <Link to={developer.githubUrl}>
                    <Box
                      as="span"
                      _hover={{ color: "blue.500", cursor: "pointer" }}
                    >
                      <FaGithub size="25px" />
                    </Box>
                  </Link>

                  <Link to={developer.linkedInUrl}>
                    <Box
                      as="span"
                      _hover={{ color: "blue.500", cursor: "pointer" }}
                    >
                      <CiLinkedin size="25px" />
                    </Box>
                  </Link>

                  <Link to={`mailto:${developer.email}`}>
                    <Box
                      as="span"
                      _hover={{ color: "blue.500", cursor: "pointer" }}
                    >
                      <CiMail size="25px" />
                    </Box>
                  </Link>
                </Box>
              </Flex>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};

export default Team;
