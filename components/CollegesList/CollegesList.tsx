'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { IconCurrencyRupee } from '@tabler/icons-react';
import { useSelector } from 'react-redux';
import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Pagination,
  Paper,
  Skeleton,
  Text,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { RootState } from '@/lib/store/store';
import { College } from '@/utils/collegeType';
import { urlFor } from '@/utils/sanity';
import classes from './CollegesList.module.css';

function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

const CollegesList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activePage, setPage] = useState(1);
  const mobile = useMediaQuery('(min-width: sm)');
  const [allColleges, setAllColleges] = useState<College[]>([]);
  const { colleges: collegeList } = useSelector((state: RootState) => state.colleges);

  const city = searchParams.get('city') || '';
  const state = searchParams.get('state') || '';
  const degree = searchParams.getAll('degree') || [];
  const stream = searchParams.getAll('stream') || [];

  useEffect(() => {
    setAllColleges(collegeList);
  }, [collegeList]);

  useEffect(() => {
    if (!collegeList) {
      return;
    }

    const filteredColleges = collegeList.filter((college) => {
      const cityMatch = city
        ? college?.filter_fields?.city?.toLowerCase().includes(city?.toLowerCase())
        : true;

      const stateMatch = state
        ? college?.filter_fields?.state?.toLowerCase().includes(state?.toLowerCase())
        : true;

      const degreeMatch = degree.length
        ? degree.every((deg) =>
            college?.filter_fields?.degree?.some((collegeDegree) =>
              collegeDegree.url.toLowerCase().includes(deg.toLowerCase())
            )
          )
        : true;

      const streamMatch = stream.length
        ? stream.every((selectedStream) =>
            college?.filter_fields?.stream?.some((collegeStream) =>
              collegeStream.toLowerCase().includes(selectedStream.toLowerCase())
            )
          )
        : true;

      return cityMatch && stateMatch && degreeMatch && streamMatch;
    });

    setAllColleges((prev) => {
      if (JSON.stringify(prev) === JSON.stringify(filteredColleges)) {
        return prev;
      }
      return filteredColleges;
    });
  }, [city, state, degree, stream, collegeList]);

  return (
    <Box my={20}>
      <Text fz={{ base: 24, sm: 32 }} my={5} c="#282828" fw={500} mr={30}>
        Recommended Colleges
      </Text>
      {allColleges.length === 0 && collegeList.length !== 0 && <Text>No colleges found</Text>}
      <Box>
        {chunk(allColleges, 4)[activePage - 1]?.map((el, index: number) => (
          <Flex
            key={index}
            bd="1px solid #CFD4D1"
            style={{ borderRadius: 16 }}
            m={10}
            my={30}
            p={10}
          >
            <Box pos="relative" visibleFrom="lg">
              {el.mainContent?.collegeImg ? (
                <Image
                  w={229}
                  fit="contain"
                  src={urlFor(el.mainContent?.collegeImg)?.url()}
                  alt="College image"
                  radius={10}
                />
              ) : (
                <Skeleton animate={false} w={229} height={219} mb="xl" />
              )}
              <Paper
                pos="absolute"
                top={10}
                left={10}
                bg="#33B65A"
                py={4}
                px={10}
                w="fit-content"
                c="#fff"
                bd="1px solid #fff"
                radius={10}
                mr={30}
                fz={13}
              >
                {el.mainContent?.overallRating}
              </Paper>
            </Box>
            <Flex direction="column" ml={20} justify="space-between">
              <Flex justify="space-between" align="center">
                <Flex align="center">
                  {el.mainContent?.logo ? (
                    <Image
                      w={30}
                      fit="cover"
                      src={urlFor(el.mainContent?.logo)?.url()}
                      alt="College logo"
                      radius={10}
                    />
                  ) : (
                    <Skeleton animate={false} w={30} h={30} circle />
                  )}
                  <Text mx={10} fz={{ base: 14, sm: 20 }} fw={500}>
                    {el?.shortName}
                  </Text>
                  <Text fz={13} c="#8C8F8E">
                    {el?.mainContent?.location}
                  </Text>
                </Flex>
              </Flex>
              <Grid maw="-webkit-fill-available" my={{ base: 10, lg: 5 }}>
                <Grid.Col
                  span={{ base: 6, sm: 3 }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <ActionIcon mr={5} size="sm" radius="xl" color="#F24B04" variant="filled">
                    <IconCurrencyRupee stroke={1} width={15} />
                  </ActionIcon>
                  <Flex direction="column">
                    <Text c="#8C8F8E" fz={13}>
                      {el.collegeInfo?.avgFee}
                    </Text>
                    <Text c="#606261" fz={12} fw={600}>
                      avg. package
                    </Text>
                  </Flex>
                </Grid.Col>
                <Grid.Col
                  span={{ base: 6, sm: 3 }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <ActionIcon mr={5} size="sm" radius="xl" color="#F24B04" variant="filled">
                    <Image w={15} src="assets/awesome/file-text.svg" />
                  </ActionIcon>
                  <Flex direction="column">
                    <Text c="#8C8F8E" fz={13}>
                      {el.qualifyingExam}
                    </Text>
                    <Text c="#606261" fz={12} fw={600}>
                      exams
                    </Text>
                  </Flex>
                </Grid.Col>
                <Grid.Col
                  span={{ base: 6, sm: 3 }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <ActionIcon mr={5} size="sm" radius="xl" color="#F24B04" variant="filled">
                    <Image w={15} src="assets/awesome/briefcase.svg" />
                  </ActionIcon>
                  <Flex direction="column">
                    <Text c="#8C8F8E" fz={13}>
                      {el.hightestPackage}
                    </Text>
                    <Text c="#606261" fz={12} fw={600}>
                      fees
                    </Text>
                  </Flex>
                </Grid.Col>
                <Grid.Col
                  span={{ base: 6, sm: 3 }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <ActionIcon mr={5} size="sm" radius="xl" color="#F24B04" variant="filled">
                    <Image w={15} src="assets/info/badge.svg" />
                  </ActionIcon>
                  <Flex direction="column">
                    <Text c="#8C8F8E" fz={13}>
                      {el.collegeInfo?.accreditationBody}
                    </Text>
                    <Text c="#606261" fz={12} fw={600}>
                      accrediation body
                    </Text>
                  </Flex>
                </Grid.Col>
              </Grid>
              <Text
                c="#606261"
                my={{ base: 10, lg: 10 }}
                className={classes.college__about}
                fz={14}
              >
                {el.mainContent?.info}
              </Text>
              <Flex mb={10} mx={10} direction={{ base: 'column', sm: 'row' }}>
                <Button
                  mr={{ base: 0, sm: 5 }}
                  mb={{ base: 10, sm: 0 }}
                  color="#F24B04"
                  fz={14}
                  px={9}
                  size={!mobile ? 'md' : 'sm'}
                  onClick={() => router.push(`/college?name=${el.shortName}`)}
                >
                  Get Free Counselling
                </Button>
                <Button
                  color="#F24B04"
                  variant="outline"
                  fz={14}
                  px={9}
                  size={!mobile ? 'md' : 'sm'}
                >
                  Download Brochure
                </Button>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Box>
      <Pagination
        mx="auto"
        w="fit-content"
        total={chunk(allColleges, 4).length}
        value={activePage}
        onChange={setPage}
        mt="sm"
      />
    </Box>
  );
};

export default CollegesList;
