import React from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import Navigation from './components/Navigation';
import Opening from './components/Opening';
import Contact from './components/Contact';
import Education from './components/Education';
import Project from './components/Project';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <Flex
        flexDirection="column"
        gap={50}
        w={['90%', '85%', '80%']}
        maxW={800}
        mx="auto"
        mb={20}
      >
        <Opening />
        {/* <Skills /> */}
        <Project />
        <Education />
        <Contact />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
