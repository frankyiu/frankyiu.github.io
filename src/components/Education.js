import { Box, Heading, Text, Flex, Image, HStack } from '@chakra-ui/react';

const Education = () => {
  return (
    <Box>
      <Heading mb={5}>Education</Heading>
      <HStack spacing={10}>
        {/* photo */}
        <Image
          boxSize="120px"
          boxShadow="sm"
          rounded="md"
          src="/hkust.svg"
          alt="Dan Abramov"
        />
        <Box>
          <Text>The Hong Kong University of Science and Technology </Text>
          <Text>B.Eng, Computer Science and Engineering</Text>
          <Text>Sep. 2017 - Nov. 2021</Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default Education;
