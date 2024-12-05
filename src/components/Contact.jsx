"use client"
import React from "react";
import { Box, Flex, Heading, Text, VStack, Icon, Button, HStack } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Contact = () => {
  const center = { lat: 40.73061, lng: -73.935242 }; 
  const containerStyle = {
    width: "100%",
    height: "300px",
    borderRadius: "15px",
  };

  return (
    <Box bg="gray.50" py={10} px={5} id="contact">
      {/* Section Header */}
      <VStack spacing={4} mb={8}>
        <Heading size="lg" textAlign="center" color="gray.700">
          Get in Touch with Norlook Medical Centers
        </Heading>
        <Text color="gray.500" fontSize="md" textAlign="center">
          Reach out to us via phone, email, or visit our location at Mawego Village, Linda Center.
        </Text>
      </VStack>

      {/* Contacts and Map */}
      <Flex
        direction={["column", "column", "row"]}
        gap={8}
        align="center"
        justify="space-between"
      >
        {/* Contact Details */}
        <VStack
          align="flex-start"
          spacing={6}
          bg="white"
          boxShadow="md"
          p={6}
          borderRadius="md"
          flex="1"
        >
          <HStack spacing={4}>
            <Icon as={FaPhone} color="blue.500" boxSize={6} />
            <VStack align="flex-start" spacing={0}>
              <Text fontSize="lg" fontWeight="bold" color="gray.700">
                Call Us
              </Text>
              <Text color="gray.500" fontSize="sm">
                +254 790140 459
              </Text>
            </VStack>
          </HStack>

          <HStack spacing={4}>
            <Icon as={FaEnvelope} color="blue.500" boxSize={6} />
            <VStack align="flex-start" spacing={0}>
              <Text fontSize="lg" fontWeight="bold" color="gray.700">
                Email Us
              </Text>
              <Text color="gray.500" fontSize="sm">
                contact@norlookmedical.com
              </Text>
            </VStack>
          </HStack>

          <HStack spacing={4}>
            <Icon as={FaMapMarkerAlt} color="blue.500" boxSize={6} />
            <VStack align="flex-start" spacing={0}>
              <Text fontSize="lg" fontWeight="bold" color="gray.700">
                Visit Us
              </Text>
              <Text color="gray.500" fontSize="sm">
                Mawego Village, Linda Centre, near Mawego polytechnic
              </Text>
            </VStack>
          </HStack>

          <Button colorScheme="blue" size="md" onClick={() => alert("Contact us clicked!")}>
            Contact Us
          </Button>
        </VStack>

        {/* Map */}
        <Box flex="1">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.723402685963!2d34.767595174356174!3d-0.39521683530009405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d4d5361a6d8229%3A0xe8667399a86520be!2sMawego%20Technical%20Training%20Institute!5e0!3m2!1sen!2ske!4v1731921994087!5m2!1sen!2ske"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </Box>

      </Flex>
    </Box>
  );
};

export default Contact;
