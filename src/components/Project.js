import { Heading, Text, Box, Link } from '@chakra-ui/react';

const Project = () => {
  return (
    <Box>
      <Heading mb={5}>Projects</Heading>
      <Box mb={5}>
        <Link href="https://github.com/frankyiu/fyp_ANNBuilder" isExternal>
          ANNBuilder
        </Link>
        <Text fontSize="sm">
          My Final Year Project, Educational tool to visualize and construct
          Neural Network in GUI.
        </Text>
      </Box>
      <Box mb={5}>
        <Link href="https://github.com/frankyiu/UST-CHAT" isExternal>
          UST Chat
        </Link>
        <Text fontSize="sm">
          Chatroom liked mobile app built in Android Studio
        </Text>
      </Box>
      <Box mb={5}>
        <Link href="https://github.com/present42/COMP2012H_Monopoly" isExternal>
          Monopoly
        </Link>
        <Text fontSize="sm">Monopoly game with GUI implemented in C++</Text>
      </Box>
    </Box>
  );
};

export default Project;
