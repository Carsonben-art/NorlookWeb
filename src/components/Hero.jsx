import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  HStack,
  VStack,
  Text,
  SimpleGrid,
 
} from '@chakra-ui/react';


import Image from 'next/image';




const Hero = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Flex
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
        justify="space-between"
        gap={{ base: 8, md: 12 }}
      >
        {/* Left Content */}
        <VStack
          align="flex-start"
          spacing={6}
          w={{ base: 'full', md: '50%' }}
        >
          

          {/* Heading */}
          <Heading
  as="h1"
  size={{ base: '2xl', lg: '3xl' }}
  lineHeight="tight"
>
  Compassionate Care{' '}
  <Box
    as="span"
    display="inline-flex"
    alignItems="center"
    mx={2}
  >
    <Box
      bg="blue.100"
      p={1}
      borderRadius="full"
    >
      <Icon
        viewBox="0 0 24 24"
        w={4}
        h={4}
      >
        <path
          d="M7 17L17 7M17 7H7M17 7V17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Icon>
    </Box>
  </Box>
  Close to Home – Norlook Medical Center{' '}
  <Box as="span" color="#f41901">
    Coming Soon
  </Box>
</Heading>


          {/* Statistics */}
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} w="full">
            <Box textAlign="center">
              <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                58%
              </Text>
              <Text color="gray.600">Construction Completion</Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                50%
              </Text>
              <Text color="gray.600">Equipment Acquired</Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                6
              </Text>
              <Text color="gray.600">Expert Doctors & clinicians</Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                1000+
              </Text>
              <Text color="gray.600">Targeted Population</Text>
            </Box>
          </SimpleGrid>

          {/* Buttons */}
          <HStack spacing={4}>
            <Button
              size="lg"
              bg="navy.900"
              color="white"
              _hover={{ bg: 'navy.800' }}
            >
              Book Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="gray.300"
              _hover={{ bg: 'gray.50' }}
            >
              Learn more
            </Button>
          </HStack>

          {/* Available Doctors */}
          <Box w="full">
            <Text color="#f41901" mb={4}>
             Meet our team
            </Text>
            <Image
              src="/docs.jpeg" // Path relative to the 'public' folder
              alt="Doctors"
              width={800} // Set the appropriate width
              height={400} // Set the appropriate height
              style={{ borderRadius: '12px', objectFit: 'cover' }}
            />
          </Box>
        </VStack>

        {/* Right Content - Doctor Image */}
        <Box
          w={{ base: 'full', md: '50%' }}
          bg="blue.100"
          borderRadius="3xl"
          p={6}
        >
          <Image
            src="/hospital1.jpg" 
            alt="Hospital"
            width={800} 
            height={400} 
            style={{ borderRadius: '12px', objectFit: 'cover' }}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default Hero;
