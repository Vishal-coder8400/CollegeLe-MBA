import { Button, Flex, Text } from '@mantine/core';

const CollegeDetailView = () => {
  return (
    <Flex
      bg="#0A0A0A"
      c="#fff"
      align="center"
      justify="space-around"
      my={30}
      py={50}
      px={20}
      wrap="wrap"
    >
      <Text fz={{ base: 24, sm: 32 }} fw={600} maw={447} lh="32px">
        Get details on all exams and their Cut off marks for session 2024!
      </Text>
      <Button mt={20} color="#F24B04" size="lg" fz={14}>
        View Detailed Cut Off
      </Button>
    </Flex>
  );
};

export default CollegeDetailView;
