import React from "react";
import { Box, Flex, Text, Heading, VStack, Avatar, SimpleGrid } from "@chakra-ui/react";

const doctors = [
  {
    name: "Mitema Silas",
    specialty: "Doctor",
    image: "/mitema.jpeg"
  },
  {
    name: "Ben Okoth",
    specialty: "Doctor",
    image: "/doc4.jpeg"
  },
  {
    name: "Sheila Bwana",
    specialty: "Nurse",
    image: "/Doc3.jpeg"
  },
];

const Doctors = () => {
  return (
    <Box bg="gray.50" py={10} px={5}>
      {/* Section Heading */}
      <VStack spacing={4} mb={8}>
        <Text
          bg="blue.100"
          px={3}
          py={1}
          borderRadius="full"
          fontSize="sm"
          color="blue.500"
          fontWeight="bold"
        >
          Doctors
        </Text>
        <Heading size="lg" textAlign="center" color="gray.700">
          Meet our expert medical team of dedicated specialists
        </Heading>
      </VStack>

      {/* Doctor Cards */}
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {doctors.map((doctor, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            p={5}
            textAlign="center"
          >
            <Avatar size="xl" name={doctor.name} src={doctor.image} mb={4} />
            <Text fontSize="sm" color="blue.500" fontWeight="bold">
              {doctor.specialty}
            </Text>
            <Heading size="sm" mt={2} color="gray.700">
              {doctor.name}
            </Heading>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Doctors;
