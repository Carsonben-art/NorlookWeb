"use client"; 

import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Button,
  Stack,
  
} from '@chakra-ui/react';
import { FiMenu, FiX } from 'react-icons/fi'; 
import Link from 'next/link';
const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="white" px={4} boxShadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <HStack spacing={4} alignItems="center">
          <Box fontWeight="bold" fontSize="lg">
            Norlook
          </Box>
        </HStack>

        {/* Desktop Menu */}
        <HStack
          as="nav"
          spacing={6}
          display={{ base: 'none', md: 'flex' }}
          fontSize="md"
          fontWeight="medium"
          color="gray.600"
        >
          <Link href="#about" passHref><Box as="a">About</Box></Link>
          <Link href="#services" passHref><Box as="a">Services</Box></Link>
          <Link href="#contact" passHref><Box as="a">Contact</Box></Link>
          <Link href="#equipment" passHref><Box as="a">Support</Box></Link>
        </HStack>

        {/* Search and Button */}
        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          <Button
            colorScheme="blue"
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.700' }}
          >
            Get Started
          </Button>
        </HStack>

        {/* Mobile Menu Toggle */}
        <IconButton
          size="md"
          icon={isOpen ? <FiX /> : <FiMenu />} // Using react-icons
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
          <Link href="#about" passHref><Box as="a">About</Box></Link>
          <Link href="#services" passHref><Box as="a">Services</Box></Link>
          <Link href="#contact" passHref><Box as="a">Contact</Box></Link>
          <Link href="#equipment" passHref><Box as="a">Support</Box></Link>
            <Button
              colorScheme="blue"
              bg="blue.800"
              color="white"
              w="full"
              _hover={{ bg: 'blue.700' }}
            >
              Get Started
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Nav;
