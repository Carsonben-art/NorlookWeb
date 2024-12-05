import React from "react";
import { Box, Heading, Text, VStack, Stack } from "@chakra-ui/react";

import Image from "next/image";

const ConstructionProgress = () => {
  return (
    <Box px={8} py={16} bg="white" id="construction-progress">
      <VStack align="start" spacing={6}>
        {/* Title */}
        <Heading size="lg" color="teal.600" textAlign="left">
          Building the Future: Construction Progress and Goals
        </Heading>
        <Text fontSize="lg" color="gray.700">
          Our journey to expand and modernize our facilities is ongoing. Below, you’ll find updates on our current progress and a glimpse of the future we’re working to achieve.
        </Text>

        {/* Construction Progress */}
        <Stack
          direction={{ base: "column", md: "row" }}
          align="center"
          spacing={8}
          w="full"
        >
          <Image
            src={"/current.jpeg"}
            alt="Construction Progress"
            borderradius="md"
            shadow="md"
            width={500}
            height={450}

          />
          <VStack align="start" flex="1" spacing={4}>
            <Text fontSize="md" color="gray.600">
              Our journey toward improving facilities is in progress! Here's a glimpse of our construction work underway to serve our community better.
            </Text>
          </VStack>
        </Stack>

        {/* Target Construction */}
        <Stack
          direction={{ base: "column", md: "row-reverse" }}
          align="center"
          spacing={8}
          w="full"
        >
          <Image
            src={"/hospital.jpg"}
            alt="Target Construction"
            borderradius="md"
            shadow="md"
            width={500}
            height={450}
            
          />
          <VStack align="start" flex="1" spacing={4}>
            <Text fontSize="md" color="gray.600">
            We are determined and committed to offer faster, comprehensive and accurate diagnosis to our patientss besides taking
            them through to a complete recovery by fully admitting them in our facility.
            </Text>
          </VStack>
        </Stack>
      </VStack>
    </Box>
  );
};

export default ConstructionProgress;
