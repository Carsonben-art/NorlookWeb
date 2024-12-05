"use client"; // Ensures this is a client component

import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, IconButton, Heading } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

// Data for the acknowledgment section
const acknowledgments = [
  {
    name: 'Lenora & Joshua',
    position: '',
    text: 'Lenora & Joshua Orwa have been of great help providing us with financial support and many more guidance. Your generosity is unmatched, for more blessings.',
    image: '/orwas.jpeg',
  },
  {
    name: 'Chizubel Beluchi',
    position: 'Business Consultant - UK',
    text: 'Beluchi provided massive support and guidance towards coming up with this medical center. His efforts are greatly appreciated.',
    image: '/beluchi.jpeg',
  },
  {
    name: 'Madam Leticia',
    position: 'Nurse',
    text: 'Madam Leticia has provided us with great support, emotionally, physically, and always offering us guidance.',
    image: '/mrs.jpeg',
  },
  {
    name: 'Mr. Keith Gray',
    position: '',
    text: 'Keith Gray generously supported the Norlook project with a significant contribution. His invaluable support has greatly enhanced our efforts, and we deeply appreciate his kindness and commitment to our mission.',
    image: '/user.jpg',
  },
  {
    name: 'Ronald, Shanon, Corey, Lewis, Christin, Colleen & Enith',
    position: '',
    text: 'We extend our heartfelt gratitude to this incredible group of friends who provided both financial and non-financial support. Your generosity, encouragement, and invaluable contributions have played a crucial role in bringing the Norlook project to life.',
    image: '/users.jpg',
  },
];

const AcknowledgmentSection = () => {
  const [index, setIndex] = useState(0);

  // Navigate slides manually
  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? acknowledgments.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % acknowledgments.length);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [index]);

  return (
    <Box bg="gray.50" py={12} px={{ base: 4, md: 8 }} textAlign="center">
      <Heading mb={6} fontSize={{ base: '2xl', md: '3xl' }} color="#1087aa">
        Acknowledgments
      </Heading>
      <Box maxW="800px" mx="auto">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          p={6}
          boxShadow="lg"
          borderRadius="lg"
          bg="white"
        >
          {/* Adjusted Image with width and height */}
          <Box flexShrink={0} mb={{ base: 4, md: 0 }} mr={{ md: 8 }}>
            <Image
              src={acknowledgments[index].image}
              alt={`Image of ${acknowledgments[index].name}`}
              width={150} 
              height={150} 
              style={{ borderRadius: '12px', objectFit: 'cover' }} 
            />
          </Box>
          
          {/* Text Content */}
          <Box textAlign={{ base: 'center', md: 'left' }}>
            <Text fontSize="xl" fontWeight="bold" color="#1087aa">
              {acknowledgments[index].name}
            </Text>
            {acknowledgments[index].position && (
              <Text fontSize="md" color="#d6431f" mb={2}>
                {acknowledgments[index].position}
              </Text>
            )}
            <Text fontSize="md" color="gray.700">
              "{acknowledgments[index].text}"
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Navigation Buttons */}
      <Flex justify="center" mt={6}>
        <IconButton
          aria-label="Previous"
          icon={<FaArrowLeft />}
          onClick={handlePrev}
          bg="#1087aa"
          color="white"
          _hover={{ bg: '#b8341a' }}
          mx={2}
        />
        <IconButton
          aria-label="Next"
          icon={<FaArrowRight />}
          onClick={handleNext}
          bg="#d6431f"
          color="white"
          _hover={{ bg: '#b8341a' }}
          mx={2}
        />
      </Flex>
    </Box>
  );
};

export default AcknowledgmentSection;
