import {
  Box,
  Avatar,
  Text,
  HStack,
  Flex,
  Link,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { FaGithub } from 'react-icons/fa';
const Navigation = () => {
  return (
    <Box boxShadow="md">
      <Flex
        h={20}
        w={['90%', '85%', '80%']}
        maxW={800}
        mx="auto"
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <HStack spacing={3}>
          <Avatar name="Frank Yiu" src="/profile.jpg" />
          <Text display={{ base: 'none', md: 'block' }}>Frank YIU</Text>
        </HStack>

        <HStack spacing={3}>
          <Link href="/resume.pdf" isExternal>
            Resume
          </Link>
          <Link href="https://github.com/frankyiu/" isExternal>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={'Github'}
              variant="ghost"
              color="current"
              marginLeft="2"
              icon={<Icon as={FaGithub} />}
            />
          </Link>
          <ColorModeSwitcher />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navigation;
