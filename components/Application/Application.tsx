'use client';

import { IconPointFilled } from '@tabler/icons-react';
import { Box, Flex, Text, Title } from '@mantine/core';
import ApplicationForm from '../ApplicationForm/ApplicationForm';
import classes from './Application.module.css';

const info = ['Paid Internships', 'Free Certification Programs', 'Placement Assistance'];

const Application = () => {
  return (
    <Flex
      className={classes.main}
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="center"
      wrap="wrap"
      py={50}
      px={20}
    >
      <Box my={20} c="#fff" flex={1} maw={800}>
        <Title fz={{ base: 32, sm: 56, md: 64 }} lh="100%" py={10}>
          Your Dream College Is Just One Click Away
        </Title>
        <Text maw="80%" py={{ base: 10, sm: 20 }}>
          Take the first step towards your academic success. Fill out the form and our experts will
          guide you through the admission porcess.
        </Text>
        <Box>
          {info.map((el: string, index: number) => (
            <Text
              key={index}
              fz={14}
              m={5}
              p={5}
              display="inline-flex"
              bg="rgba(255, 255, 255, 0.4)"
              // display="inline-block"
              style={{ borderRadius: 10, alignItems: 'center' }}
            >
              <IconPointFilled size={16} color="#7FFF94" />
              {el}
            </Text>
          ))}
        </Box>
      </Box>
      <Box my={20} flex={1}>
        <ApplicationForm />
      </Box>
    </Flex>
  );
};
export default Application;
