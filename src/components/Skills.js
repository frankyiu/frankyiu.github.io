import { Box, Tag, Flex } from '@chakra-ui/react';

const Skills = () => {
  const MyTag = props => <Tag colorScheme="cyan">{props.children}</Tag>;
  return (
    <Flex>
      <Box display="flex" gap={3} flexWrap="wrap">
        <MyTag>Java</MyTag>
        <MyTag>Javascript</MyTag>
        <MyTag>SQL</MyTag>
        <MyTag>Spring boot</MyTag>
        <MyTag>ReactJs</MyTag>
        <MyTag>NodeJs</MyTag>
      </Box>
    </Flex>
  );
};

export default Skills;
