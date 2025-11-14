'use client';

import { useSearchParams } from 'next/navigation';
import { Box, Container, Flex, Spoiler, Text, Title } from '@mantine/core';
// import { levels, stream } from '../ContactForm/ContactForm';
import classes from './CollegePlacements.module.css';

const CollegePlacements = ({ data }: { data: any }) => {
  const searchParams = useSearchParams();
  const collegeName = searchParams.get('name');

  return (
    <Box id="placement" className={classes.main} c="#fff" ta="left">
      <Container maw={1100} p={20}>
        <Title fz={{ base: 24, sm: 48 }} fw={600} ta="center" py={50}>
          {collegeName} Placements
        </Title>
        <Spoiler
          classNames={{ control: classes.control }}
          maxHeight={120}
          showLabel="Show more"
          hideLabel="Show less"
          mb={100}
        >
          {data?.placementInfo}
        </Spoiler>
        <Title fz={{ base: 24, sm: 32 }} ta="center" my={50}>
          {collegeName} Placement Stats 2023
        </Title>
        <Text>{data?.placementStatsInfo}</Text>
        <Box>
          {/* <Group justify="center" my={30}>
            <Select
              size="xl"
              w={160}
              bg="#2B2B2B"
              fz={16}
              classNames={{
                input: classes.input,
                option: classes.option,
                root: classes.root,
              }}
              placeholder="Level"
              data={levels}
            />
            <Select
              size="xl"
              w={160}
              bg="#2B2B2B"
              fz={16}
              classNames={{
                input: classes.input,
                option: classes.option,
                root: classes.root,
              }}
              placeholder="Course"
              data={stream}
            />
            <Select
              size="xl"
              w={160}
              bg="#2B2B2B"
              fz={16}
              classNames={{
                input: classes.input,
                option: classes.option,
                root: classes.root,
              }}
              placeholder="Year"
              data={['2023', '2024', '2022', '2021']}
            />
          </Group> */}
          <Flex
            bg="#2B2B2B"
            mx="auto"
            w="fit-content"
            my={60}
            py={30}
            px={20}
            style={{ borderRadius: 8 }}
            ta="center"
          >
            {/* <Box mx={{ base: 10, sm: 20 }}>
              <Text c="#DBDBDB" fz={12}>
                Median Salary
              </Text>
              <Text fz={{ base: 20, sm: 24 }} fw={600}>
                {data?.medianSalary}
              </Text>
            </Box> */}
            <Box mx={{ base: 10, sm: 20 }}>
              <Text c="#DBDBDB" fz={12}>
                Average Package
              </Text>
              <Text fz={{ base: 20, sm: 24 }} fw={600}>
                {data?.avgPackage}
              </Text>
            </Box>
            <Box mx={{ base: 10, sm: 20 }}>
              <Text c="#DBDBDB" fz={12}>
                Highest Package
              </Text>
              <Text fz={{ base: 20, sm: 24 }} fw={600}>
                {data?.highestPackage}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default CollegePlacements;
