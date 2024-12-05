"use client"
import React from "react";
import { Box, Flex, Text, VStack, HStack, Heading, Icon } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import Link from 'next/link';
const Footer = () => {
  return (
    <Box bg="gray.50" py={10} px={[4, 8, 16]}>
      <Flex
        direction={["column", "column", "row"]}
        justify="space-between"
        align={["flex-start", "flex-start", "center"]}
        wrap="wrap"
      >
        {/* Left Section */}
        <VStack align="flex-start" spacing={4} mb={[8, 8, 0]}>
          <HStack spacing={2}>
            <Icon as={FaHeart} color="blue.500" boxSize={6} />
            <Heading size="md" color="gray.700">
              Norlook
            </Heading>
          </HStack>
          <Text color="gray.500" fontSize="sm" maxW="300px">
          "Your Health, Our Priority." <br/>
          Caring for you with excellence and compassion, every step of the way.
          </Text>
        </VStack>

        {/* Links Section */}
        <Flex wrap="wrap" justify={["flex-start", "flex-start", "space-between"]} w="full" maxW="900px" gap={8}>
          {/* Column 1 */}
          <VStack align="flex-start" spacing={2}>
            <Heading size="sm" color="gray.700" mb={2}>
              Static Pages
            </Heading>
            <Link href="#about" passHref><Box as="a">About</Box></Link>
            <Link href="#services" passHref><Box as="a">Services</Box></Link>
            <Link href="#contact" passHref><Box as="a">Contact</Box></Link>
            <Link href="#equipment" passHref><Box as="a">Support</Box></Link>
          </VStack>

          {/* Column 2 */}
          <VStack align="flex-start" spacing={2}>
            <Heading size="sm" color="gray.700" mb={2}>
              CMS Pages
            </Heading>
            <Link href="#" color="gray.500" fontSize="sm" _hover={{ color: "blue.500" }}>
              Services
            </Link>
            <Link href="#" color="gray.500" fontSize="sm" _hover={{ color: "blue.500" }}>
              Doctors
            </Link>
            <Link href="#" color="gray.500" fontSize="sm" _hover={{ color: "blue.500" }}>
              Careers
            </Link>
            <Link href="#" color="gray.500" fontSize="sm" _hover={{ color: "blue.500" }}>
              Blogs
            </Link>
          </VStack>

          {/* Column 3 */}
          <VStack align="flex-start" spacing={2}>
            <Heading size="sm" color="gray.700" mb={2}>
              Details Pages
            </Heading>
            <Link href="#" color="gray.500" fontSize="sm" _hover={{ color: "blue.500" }}>
              Service (CMS)
            </Link>
            <Link href="#" color="gray.500" fontSize="sm" _hover={{ color: "blue.500" }}>
              Doctor (CMS)
            </Link>
            <Link href="#" color="gray.500" fontSize="sm" _hover={{ color: "blue.500" }}>
              Career (CMS)
            </Link>
            <Link href="#" color="gray.500" fontSize="sm" _hover={{ color: "blue.500" }}>
              Blogs (CMS)
            </Link>
          </VStack>

          
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
