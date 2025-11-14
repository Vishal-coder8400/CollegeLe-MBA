'use client';

import { IconArrowDown } from '@tabler/icons-react';
import { Box, Button, Text, Title } from '@mantine/core';
import classes from './AboutUsHerobox.module.css';

const AboutUsHerobox = () => {
  return (
    <Box className={classes.main}>
      <Box maw={596} c="#fff" ta="left" ml={{ base: 20, sm: 100, lg: 200 }}>
        <Title fz={{ base: 68, sm: 128 }} fw={700} lh={{ base: '63px', sm: '102px' }}>
          We Are <br /> Topnotch.
        </Title>
        <Text mt={40}>
          At CollegeLe, our mission is to provide students with the insights, tools, and support
          needed to reach their goals.
        </Text>
        <Button
          component="a"
          mt={60}
          variant="outline"
          w="130px"
          h="130px"
          radius="50%"
          color="#fff"
          href="#founders"
        >
          <IconArrowDown stroke={1} size={50} />
        </Button>
      </Box>
    </Box>
  );
};

export default AboutUsHerobox;
