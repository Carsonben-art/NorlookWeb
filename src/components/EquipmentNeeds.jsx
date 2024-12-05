import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Flex,
  Badge,
} from "@chakra-ui/react";



import Image from "next/image";

const EquipmentNeeds = () => {
  const equipment = [
    {
      name: "Vivid E9 Ultrasound Machine",
      image: "/ultrasound.jpg",
      urgency: "Immediately",
    },
    {
      name: "Digital X-Ray Machine",
      image: "/xray.jpg",
      urgency: "Waiting",
    },
    {
      name: "Single Crank Hospital Bed",
      image: "/crank.jpg",
      urgency: "Immediately",
    },
    {
      name: "Patient Monitoring Devices",
      image: "/monitoring.jpg",
      urgency: "Immediately",
    },
    {
      name: "RX 50 Biochemistry Analyzer",
      image: "/biochemistry.jpg",
      urgency: "Immediately",
    },
  ];

  return (
    <Box px={8} py={16} bg="gray.50" id="equipment" >
      <VStack align="start" spacing={6} w="full">
        {/* Section Header */}
        <Heading size="lg" color="teal.600">
          Support Our Mission: Equipment and Facilities Needed
        </Heading>
        <Text fontSize="lg" color="gray.700">
          At Norlook, we strive to provide the best care to our patients.
          However, to meet growing needs and improve our services, we require
          additional resources. Your contribution can help us acquire these
          essential items. Explore our current needs below and join us in
          making a difference.
        </Text>

        {/* Equipment Cards */}
        <Flex
          wrap="wrap"
          spacing={4}
          justify="center"
          w="full"
          gap={6}
          align="start"
        >
          {equipment.map((item, index) => (
            <Box
              key={index}
              bg="whiteAlpha.900"
              boxShadow="lg"
              borderRadius="md"
              p={6}
              w={{ base: "full", sm: "45%", md: "30%" }}
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
              style={{
                backdropFilter: "blur(10px)",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8))",
              }}
            >
              <VStack spacing={4} align="start">
                <Image
                  src={item.image}
                  alt={item.name}
                  borderradius={10}
                  width={250}
                  height={150}
                />
                <Heading size="sm" color="teal.600">
                  {item.name}
                </Heading>
                <Badge
                  colorScheme={
                    item.urgency === "Immediately" ? "red" : "yellow"
                  }
                  fontSize="sm"
                  px={2}
                  py={1}
                  borderRadius="md"
                >
                 Urgency: {item.urgency}
                </Badge>
              </VStack>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};

export default EquipmentNeeds;
