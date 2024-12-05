import React from 'react';
import { Flex, Heading, Text, Stack } from '@chakra-ui/react';

const Mission = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      py={{ base: 10, md: 16 }}
      px={{ base: 4, md: 8 }}
      textAlign="center"
    >
      {/* Mission Subtitle */}
      <Text fontSize="sm" color="#d6431f" textTransform="uppercase"  mb={2}>
        Our Mission
      </Text>

      {/* Catchy Title */}
      <Heading
        fontSize={{ base: '2xl', md: '4xl' }}
        color="#1087aa"
        mb={4}
      >
        Empowering Communities Through <br/> Holistic Healthcare
      </Heading>

      {/* Mission Description */}
      <Stack spacing={4} maxW={{ base: '100%', md: '60%' }}>
        <Text fontSize="md" color="gray.600">
          At Norlook, we strive to be a center of excellence, addressing community health needs through preventive, curative, and rehabilitative services. Our approach emphasizes personalized, holistic, and affordable care, supported by enhanced diagnostic processes.
        </Text>
      </Stack>
    </Flex>
  );
};

export default Mission;
