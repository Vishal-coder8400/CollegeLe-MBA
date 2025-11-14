'use client';

import { Box, Text, Title } from '@mantine/core';
import VList from './Vlist';
import classes from './JobReady.module.css';

const JobReady = () => {
  return (
    <Box className={classes.top}>
      <Box ta="center" c="#191919" px={30}>
        <Box maw={817} mx="auto" className={classes.box__data_title}>
          <Title fz={{ base: 24, sm: 48 }}>With Job Ready Degree</Title>
          <Title fz={{ base: 24, sm: 72 }}>
            You could be <span className="theme__red"> Awesome</span>
          </Title>
        </Box>
        <Text fz={{ base: 14, sm: 16 }} maw={600} mx="auto" my={40}>
          From choosing the right college to navigating applications, we’re dedicated to supporting
          you at each step. With CollegeLe, gain the confidence and guidance needed for a successful
          journey.
        </Text>
      </Box>
      <Box className={classes.box__main}>
        <VList />
        <Box className={classes.image__box} />
      </Box>
    </Box>
  );
};

export default JobReady;
