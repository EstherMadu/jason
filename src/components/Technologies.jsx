import React from "react";
import { Container, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import {
  SiDocker,
  SiGit,
  SiGraphql,
  SiPython,
  SiNodedotjs,
  SiKubernetes,
  SiFlask,
  SiGooglecloud,
  SiAmazonaws,
  SiRedis,
} from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";

const items = [
  {
    name: "Python",
    link: "https://www.python.org/",
    icon: <SiPython size="65" />,
  },
  {
    name: "Flask",
    link: "https://flask.palletsprojects.com/",
    icon: <SiFlask size="65" />,
  },
  {
    name: "MongoDB",
    link: "https://www.mongodb.com/",
    icon: <TbBrandMongodb size="65" />,
  },
  {
    name: "AWS",
    link: "https://aws.amazon.com/",
    icon: <SiAmazonaws size="65" />,
  },

  {
    name: "NodeJS",
    link: "https://nodejs.org/",
    icon: <SiNodedotjs size="65" />,
  },
  {
    name: "Kubernetes",
    link: "https://kubernetes.io/",
    icon: <SiKubernetes size="65" />,
  },
  {
    name: "GCP",
    link: "https://cloud.google.com/gcp",
    icon: <SiGooglecloud size="45" />,
  },
  { name: "Docker", link: "https://docker.com", icon: <SiDocker size="65" /> },
  { name: "Redis", link: "https://redis.io/", icon: <SiRedis size="65" /> },
  { name: "Git", link: "https://git-scm.com", icon: <SiGit size="55" /> },
  {
    name: "GraphQL",
    link: "https://www.graphql.com/",
    icon: <SiGraphql size="55" />,
  },
];

const Technologies = () => {
  return (
    <Container maxW="6xl" py="36">
      <Text
        fontSize={{ base: "1.7rem", md: "2.2rem" }}
        maxW="550"
        fontWeight="medium"
      >
        A few technologies I've been working with recently
      </Text>
      <SimpleGrid
        display={{ base: "grid", md: "none" }}
        columns={{ base: 3, md: 6 }}
        spacing="10"
        mt="20"
        textAlign="center"
      >
        {items.map((item, index) => {
          return (
            <Flex
              as="a"
              href={item.link}
              target="_blank"
              key={index}
              title={item.name}
              align="center"
              opacity=".9"
              transform="scale(.9)"
            >
              {item.icon}
            </Flex>
          );
        })}
      </SimpleGrid>
      <VStack
        display={{ base: "none", md: "flex" }}
        spacing="10"
        align="stretch"
        mt="20"
      >
        <Flex direction="row" justify="space-between" align="center">
          {items.slice(0, 6).map((item, index) => (
            <Flex
              as="a"
              href={item.link}
              target="_blank"
              key={index}
              title={item.name}
              opacity=".9"
            >
              {item.icon}
            </Flex>
          ))}
        </Flex>
        <Flex direction="row" justify="space-between" align="center">
          {items.slice(6, 12).map((item, index) => (
            <Flex
              as="a"
              href={item.link}
              target="_blank"
              key={index}
              title={item.name}
              opacity=".9"
            >
              {item.icon}
            </Flex>
          ))}
        </Flex>
      </VStack>
    </Container>
  );
};

export default Technologies;
