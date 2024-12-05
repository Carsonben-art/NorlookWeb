"use client"
import React from 'react';
import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  VStack,
  Badge,
  Icon,
} from '@chakra-ui/react';
import {
  FaBrain,
  FaHeartbeat,
  FaLungs,
  FaBaby,
  FaBone,
  FaNotesMedical,
} from 'react-icons/fa';

const ServiceCard = ({ icon, title, description }) => (
  <Box
    bg="white"
    p={8}
    borderRadius="2xl"
    borderWidth="1px"
    borderColor="gray.100"
    transition="all 0.3s"
    _hover={{
      transform: 'translateY(-4px)',
      shadow: 'lg',
    }}
    id="services"
  >
    <VStack align="flex-start" spacing={4}>
      <Box
        bg="navy.50"
        p={3}
        borderRadius="lg"
      >
        <Icon
          as={icon}
          boxSize={6}
          color="navy.900"
        />
      </Box>
      
      <Heading
        as="h3"
        size="lg"
        color="gray.800"
        fontWeight="semibold"
      >
        {title}
      </Heading>
      
      <Text
        color="gray.500"
        fontSize="lg"
        lineHeight="tall"
      >
        {description}
      </Text>
    </VStack>
  </Box>
);

const Services = () => {
  const services = [
    {
      icon: FaBaby,
      title: 'OutPatient Services',
      description: "Personalized consultations and care without hospital stays."
    },
    {
      icon: FaBone,
      title: 'Inpatient Services',
      description: 'Comprehensive medical treatment in a comfortable environment.'
    },
    {
      icon: FaLungs,
      title: 'Immunization',
      description: 'Protect your family with essential vaccinations for all ages.'
    },
    {
      icon: FaBrain,
      title: 'Merternal and child health',
      description: 'Dedicated care for mothers and children, ensuring healthy growth.'
    },
    {
      icon: FaNotesMedical,
      title: 'Screening',
      description: 'Early detection and prevention with routine health checkups.'
    },
    {
      icon: FaHeartbeat,
      title: 'Laboratory services',
      description: 'Accurate and reliable diagnostic tests for your health needs.'
    },
    {
      icon: FaHeartbeat,
      title: 'Pharmacy',
      description: 'Quick access to prescribed medicines and expert guidance.'
    },
    {
      icon: FaHeartbeat,
      title: 'Counselling',
      description: 'Professional support for mental well-being and personal growth.'
    },
    {
      icon: FaHeartbeat,
      title: 'Curative treatment',
      description: 'Targeted solutions to restore your health and vitality.'
    },
  ];

  return (
    <Box py={16} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          {/* Header Section */}
          <VStack spacing={4} textAlign="center">
            <Badge
              bg="blue.50"
              color="gray.700"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="md"
            >
              Services
            </Badge>
            
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              maxW="800px"
              textAlign="center"
              color="gray.800"
              lineHeight="shorter"
            >
              Different types of department
              <br />
              we have for your healthcare
            </Heading>
          </VStack>

          {/* Services Grid */}
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)"
            }}
            gap={8}
            w="full"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Services;