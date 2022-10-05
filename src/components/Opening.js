import { Heading, Text, Avatar, HStack, Box } from '@chakra-ui/react';
import Skills from './Skills';

const Opening = () => {
  return (
    <>
      <Box mt={100} mb={100} display={{ sm: 'flex' }} gap={10}>
        <Box flexShrink={0} display="flex" alignItems="center">
          <Avatar size="2xl" name="Frank Yiu" src="/profile.jpg" />
        </Box>
        <Box>
          <Heading>Hey there! &#x1F600;</Heading>
          <Text fontSize="xl" mb={5}>
            I am Frank, a junior full-stack developer graduated from university
            not far ago. Here is my website. Check them out!
          </Text>

          <Skills />
        </Box>
      </Box>
    </>
  );
};

export default Opening;
