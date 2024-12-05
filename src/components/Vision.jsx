import React from 'react';
import { Box, Flex, Text, Heading } from '@chakra-ui/react';

const Vision = () => {
  // Combined Purpose Statement
  const purposeStatement = 'At Norlook, we offer a comprehensive range of healthcare services including emergency care, minor surgery, diagnostics, and rehabilitation care. We are committed to being close to people’s homes, responding to local needs, and serving specific populations such as the elderly.'

  return (
    <Flex
      direction="column"
      py={10}
      px={{ base: 4, md: 12 }}
      alignItems="center"
      justifyContent="center"
    >
      {/* Right Section - Title and Purpose Statement */}
      <Box w="100%" textAlign="center" maxW={800}>
        <Heading fontSize="3xl" mb={6} color="#d6431f">
          Our Purpose
        </Heading>
        <Text fontSize="2xl" color="#10a9ca" fontWeight={700} mb={6}>
         We are committed to delivering top-quality healthcare services that meet the unique needs of our community.
        </Text>
        <Text fontSize="md" color="gray.700" maxWidth="600px" mx="auto">
          {purposeStatement}
        </Text>
      </Box>
    </Flex>
  );
};

export default Vision;
