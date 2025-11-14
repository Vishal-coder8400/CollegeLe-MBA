import { Box, Flex, Text } from '@mantine/core';

const examsList = ['JEE', 'CAT', 'XAT', 'MAT', 'NEET'];

const Exams = () => {
  return (
    <Box bg="#191919" px={10}>
      <Flex
        maw={1056}
        wrap="wrap"
        mx="auto"
        direction={{ base: 'column', sm: 'row' }}
        justify="space-evenly"
        py={20}
        c="#fff"
        align="center"
      >
        <Text
          fw={500}
          fz={20}
          style={{ borderRadius: 10, backgroundColor: '#3E3E3E' }}
          px={30}
          py={10}
          mb={{ base: 20, sm: 0 }}
        >
          Exams 2025
        </Text>
        <Flex justify="space-evenly" flex={1} w="-webkit-fill-available">
          {examsList.map((el: string, index: number) => (
            <Text c="#C5C5C5" fz={{ base: 24, sm: 28 }} fw={600} px={8} key={index}>
              {el}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
export default Exams;
