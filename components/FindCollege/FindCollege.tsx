'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Grid,
  px,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import HorizontalScroll from '../HorizontalScroll';
import { categories, enggData, ITData, managementData, medicalData } from './collegeData';
import classes from './FindCollege.module.css';

const FindCollege = () => {
  const theme = useMantineTheme();
  const [active, setActive] = useState<string>(categories[0]);
  const [collegeData, setCollegeData] = useState(enggData);
  console.log({ active });
  const handleActive = (el: string) => {
    setActive(el);
    switch (el) {
      case categories[0]:
        setCollegeData(enggData);
        break;
      case categories[1]:
        setCollegeData(managementData);
        break;
      case categories[2]:
        setCollegeData(medicalData);
        break;
      case categories[3]:
        setCollegeData(ITData);
        break;
      default:
        setCollegeData(enggData);
        break;
    }
  };
  const BASE_HEIGHT = 360;
  const getSubHeight = (children: number, spacing: number) =>
    BASE_HEIGHT / children - spacing * ((children - 1) / children);

  return (
    <Box className={classes.base}>
      <Box ta="center" px={35}>
        <Title fz={{ base: 24, sm: 48 }}>
          Find The <span className="theme__red"> Perfect</span> College For You
        </Title>
        <Text fz={{ base: 14, sm: 16 }} maw={600} mx="auto" my={30} c="#353E5C">
          Explore a world of opportunities with CollegeLe. Discover top colleges, essential exams,
          and tailored programs that align with your career goals. Whether you're just starting your
          search or narrowing down choices, our platform provides the insights and guidance needed
          to make informed decisions in your preferred field.
        </Text>
      </Box>
      <Box className={classes.content__main}>
        <HorizontalScroll categories={categories} maxWidth={900} handleActive={handleActive} />
        <Container my="xl" size="xl">
          <SimpleGrid cols={{ base: 1, lg: 3 }}>
            <Box h={BASE_HEIGHT} className={classes.grid__box}>
              <Text fw={600} fz={20} mb={10}>
                Featured Colleges
              </Text>
              <ScrollArea
                h={290}
                scrollbarSize={10}
                scrollbars="y"
                scrollHideDelay={5000}
                offsetScrollbars="y"
              >
                {/* <Box> */}
                <Flex direction="row" wrap="wrap">
                  {collegeData.colleges.map((el: string, index: number) => (
                    <Text key={index} className={classes.college} m={10}>
                      {el}
                    </Text>
                  ))}
                </Flex>
                {/* </Box> */}
              </ScrollArea>
            </Box>
            <Stack>
              <Box
                h={{ base: 'fit-content', lg: getSubHeight(2, px(theme.spacing.md) as number) }}
                className={classes.grid__box}
              >
                <Text fw={600} fz={20} mb={10}>
                  Important Exams
                </Text>
                <ScrollArea
                  h={{ base: 'fit-content', lg: 100 }}
                  scrollbarSize={10}
                  scrollbars="y"
                  scrollHideDelay={5000}
                  offsetScrollbars="y"
                >
                  <Grid>
                    {collegeData.exams.map((el: string, index: number) => (
                      <Grid.Col key={index} span={6}>
                        <Text className={classes.college}>{el}</Text>
                      </Grid.Col>
                    ))}
                  </Grid>
                </ScrollArea>
              </Box>
              <Box
                h={{ base: 'fit-content', lg: getSubHeight(2, px(theme.spacing.md) as number) }}
                className={classes.grid__box}
              >
                <Text fw={600} fz={20} mb={10}>
                  Top States
                </Text>
                <ScrollArea
                  h={{ base: 'fit-content', lg: 100 }}
                  scrollbarSize={10}
                  scrollbars="y"
                  scrollHideDelay={5000}
                  offsetScrollbars="y"
                >
                  <Grid>
                    {collegeData.states.map((el: string, index: number) => (
                      <Grid.Col key={index} span={6}>
                        <Text className={classes.college}>{el}</Text>
                      </Grid.Col>
                    ))}
                  </Grid>
                </ScrollArea>
              </Box>
            </Stack>
            <Box h={BASE_HEIGHT} className={classes.grid__box}>
              <Text fw={600} fz={20} mb={10}>
                Related Courses
              </Text>
              <ScrollArea
                h={290}
                scrollbarSize={10}
                scrollbars="y"
                scrollHideDelay={5000}
                offsetScrollbars="y"
              >
                <Flex direction="row" wrap="wrap">
                  {collegeData.courses.map((el: string, index: number) => (
                    <Text key={index} className={classes.college} m={10}>
                      {el}
                    </Text>
                  ))}
                </Flex>
              </ScrollArea>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};
export default FindCollege;
