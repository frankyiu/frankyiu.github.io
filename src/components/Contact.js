import { Link, Heading, Icon, Box, Flex } from '@chakra-ui/react';
import { AiFillLinkedin, AiFillMail, AiFillPhone } from 'react-icons/ai';
import { ExternalLinkIcon } from '@chakra-ui/icons';
const Contact = () => {
  return (
    <Box>
      <Heading mb={5}>Contact</Heading>
      <Flex gap={5} flexWrap="wrap">
        <Flex alignItems={'center'} gap={2}>
          <Icon as={AiFillLinkedin} />
          <Link href="https://www.linkedin.com/in/frank-yiu/" isExternal>
            LinkedIn <ExternalLinkIcon mx="2px" />
          </Link>
        </Flex>
        <Flex alignItems={'center'} gap={2}>
          <Icon as={AiFillMail} />
          <Link href="mailto:frankyiu1020111@gmail.com" isExternal>
            frankyiu1020111@gmail.com
          </Link>
        </Flex>
        <Flex alignItems={'center'} gap={2}>
          <Icon as={AiFillPhone} /> +1 (437) 324-5707
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
