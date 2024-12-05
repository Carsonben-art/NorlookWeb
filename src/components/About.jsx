"use client"
import React from "react";
import { Box, Flex, Heading, Text, VStack, Button, Stack, Icon } from "@chakra-ui/react";
import { FaHeartbeat } from "react-icons/fa";
// import hospital from '../assets/hospital3.jpeg'
import Image from "next/image";
const About = () => {
  return (
    <Box
      bg="gray.50"
      py={10}
      px={5}
      borderRadius="md"
      boxShadow="md"
      id="about"
    >
      <Flex
        direction={["column", "column", "row"]}
        align="center"
        justify="space-between"
        gap={8}
      >
        {/* Left Content */}
        <VStack align="flex-start" spacing={4} flex="1">
          <Flex align="center" gap={2}>
            <Icon as={FaHeartbeat} color="blue.500" boxSize={6} />
            <Text fontWeight="bold" color="blue.600">Norlook Healthcare</Text>
          </Flex>
          <Heading size="lg" color="gray.700">
            Comprehensive Telemedicine Services
          </Heading>
          <Stack spacing={2}>
            <Text>✔ Virtual consultations from the comfort of your home</Text>
            <Text>✔ Remote vital signs monitoring</Text>
            <Text>✔ 24/7 medical support for peace of mind</Text>
          </Stack>
          <Button
            colorScheme="blue"
            size="md"
            
          >
            Learn More
          </Button>
        </VStack>

        {/* Right Image */}
        <Box flex="1" maxW="500px">
          <Image
            src={"/hospital3.jpeg"}
            width={500}
            height={450}
            alt="Healthcare Professional"
            style={{ borderRadius: "10px", objectFit: "cover", width: "100%" }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
