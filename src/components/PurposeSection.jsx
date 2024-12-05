"use client"; // Add this at the top to make it a client component

import React from 'react';
import { Box, Flex, Text, Heading, Icon, Button } from '@chakra-ui/react';
import { FaHeartbeat } from 'react-icons/fa';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';

const PurposeSection = () => {
  return (
    <Box bg="white" py={16} px={8} id="purpose">
      <Flex justifyContent="center" alignItems="center" gap={10} padding="2rem 1rem">
        <Text as="h1" color="#d6431f" fontSize="3xl" fontWeight={800}>
          Our Vision
        </Text>
      </Flex>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        gap={10}
      >
        {/* Left Section: Text Content */}
        <Box flex="1">
          <Heading as="h2" size="2xl" mb={4} color="#16c0c4">
            "Empowering Health, Enriching Lives"
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={6}>
            At Norlook Community Hospital, we are driven by a vision of care, innovation,
            and compassion. We aim to provide accessible healthcare services tailored to
            the needs of every individual, ensuring a healthier, brighter tomorrow for our community.
          </Text>
          <Button
            colorScheme="teal"
            size="lg"
            shadow="md"
            _hover={{ bg: 'blue.500' }}
          >
            Learn More About Us
          </Button>
        </Box>

        {/* Right Section: Icon Cards */}
        <Flex flex="1" direction="column" gap={6}>
          {/* Card 1 */}
          <Flex
            align="center"
            bg="teal.50"
            p={6}
            borderRadius="lg"
            shadow="md"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.05)' }}
          >
            <Icon as={FaHeartbeat} w={10} h={10} color="teal.400" />
            <Box ml={4}>
              <Heading as="h4" size="md" mb={2}>
                Comprehensive Care
              </Heading>
              <Text color="gray.600">
                Offering personalized and advanced treatments to address every health need, even for the vulnerable and elderly.
              </Text>
            </Box>
          </Flex>

          {/* Card 2 */}
          <Flex
            align="center"
            bg="blue.50"
            p={6}
            borderRadius="lg"
            shadow="md"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.05)' }}
          >
            <Icon as={MdOutlineHealthAndSafety} w={10} h={10} color="blue.400" />
            <Box ml={4}>
              <Heading as="h4" size="md" mb={2}>
                Patient-Centered Approach
              </Heading>
              <Text color="gray.600">
                Prioritizing your comfort and safety at every step of your healthcare journey.
              </Text>
            </Box>
          </Flex>

          {/* Card 3 */}
          <Flex
            align="center"
            bg="purple.50"
            p={6}
            borderRadius="lg"
            shadow="md"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.05)' }}
          >
            <Icon as={BsFillPeopleFill} w={10} h={10} color="purple.400" />
            <Box ml={4}>
              <Heading as="h4" size="md" mb={2}>
                Community First
              </Heading>
              <Text color="gray.600">
                Building a healthier future together by supporting our community's well-being through medical camps,
                creating awareness, and educating the community.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PurposeSection;
