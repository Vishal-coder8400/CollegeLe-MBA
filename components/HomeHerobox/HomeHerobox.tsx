'use client';

import { Box, Text, Title } from '@mantine/core';
import GroupButton from '../GroupButton';
import classes from './HomeHerobox.module.css';

const HomeHerobox = () => {
  return (
    <Box className={classes.main}>
      <Box className={classes.content} px={{ base: 20, sm: 0 }}>
        <Title fz={{ base: 32, sm: 64 }} fw={700} lh={{ base: '32px', sm: '66px' }}>
          Achieve More with Expert Guidance
        </Title>
        <Text fw={500} my={30}>
          Discover tailored solutions that simplify your path to higher education. From guidance to
          resources, CollegeLe is here to make your academic dreams achievable and rewarding.
        </Text>
      </Box>
      <GroupButton button_1="Find Your College" button_2="Talk to Experts" button_2_color="#fff" />
    </Box>
  );
};

export default HomeHerobox;
