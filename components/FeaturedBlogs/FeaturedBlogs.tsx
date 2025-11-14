'use client';

import { Box, Button, Divider, Flex, Image, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const FeaturedBlogs = () => {
  const mobile = useMediaQuery('(min-width: sm)');

  return (
    <Box px={20} my={50}>
      <Title fz={32} c="#282828" fw={500} ta="center">
        Featured Blogs
      </Title>
      <Text maw={417} mx="auto" my={30} ta="center" c="#606261" fz={14} fw={400}>
        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit
        aliquam sit nullam.
      </Text>
      <Flex
        bd="1px solid #E1E4ED"
        w="fit-content"
        mx="auto"
        direction={{ base: 'column', lg: 'row' }}
        style={{
          shadow: '0px 1px 4px rgba(25, 33, 61, 0.08)',
          borderRadius: 10,
          overflow: 'hidden',
        }}
      >
        <Box px={30} maw={515} my={{ base: 30, lg: 0 }}>
          <Title mt={{ base: 10, lg: 30 }} fz={32} fw={500} c="#282828">
            How to Become an IPS Officer: Role, Salary, Eligibility, Skills
          </Title>
          <Text fz={14} fw={400} my={20} c="#606261" ta="center">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit
            aliquam sit nullam neque ultrices.
          </Text>
          <Divider my="md" />
          <Flex align="center" justify="space-between">
            <Button
              px={{ base: 10, sm: 30 }}
              py={{ base: 0, sm: 10 }}
              size={!mobile ? 'xl' : 'md'}
              fz={14}
              fw={400}
              variant="outline"
              color="#F24B04"
            >
              Continue Reading
            </Button>
            <Text c="#6D758F" fw={400} fz={14}>
              Jan 24, 2024
            </Text>
          </Flex>
        </Box>
        <Image src="/assets/featured_blog.png" h={343} fit="contain" />
      </Flex>
    </Box>
  );
};
export default FeaturedBlogs;
