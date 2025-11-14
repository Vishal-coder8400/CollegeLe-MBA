'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  Flex,
  Image,
  Modal,
  Paper,
  SegmentedControl,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ContactForm from '../ContactForm';
import { offeringsData } from './offeringsData';
import classes from './Offerings.module.css';

const Offerings = () => {
  const [value, setValue] = useState('student');
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box className={classes.main}>
      <Title c="#fff" ta="center">
        Our <span className="theme__red"> Offerings</span>
      </Title>
      <Box mx="auto" w="fit-content" my={30} p={3} className={classes.segment__box}>
        <SegmentedControl
          withItemsBorders
          color="#f24b04"
          bg="transparent"
          value={value}
          classNames={{ label: classes.label }}
          onChange={setValue}
          data={[
            { label: 'For Students', value: 'student' },
            { label: 'For Colleges', value: 'college' },
          ]}
        />
      </Box>
      <Flex wrap="wrap" justify="center">
        {offeringsData.map((el, index: number) => (
          <Card key={index} bg="#474747" maw={228} m={10} c="#fff" ta="center">
            <Paper bg="#191919" w="fit-content" p={10} radius="50%" mx="auto" my={20}>
              <Image src={el.icon} w={37} h={37} fit="contain" />
            </Paper>
            <Text fz={20} fw={700} lh="26px" my={10}>
              {el.title}
            </Text>
            <Text fw={500}>{el.info}</Text>
          </Card>
        ))}
      </Flex>
      <Text fz={28} fw={600} c="#fff" ta="center" my={40}>
        Want to Secure Your Future with an Awesome Degree?
      </Text>
      <Button size="lg" onClick={open} display="block" mx="auto" color="#F24B04">
        Connect Now
      </Button>{' '}
      <Modal
        opened={opened}
        onClose={close}
        h="fit-content"
        size="xl"
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        classNames={{ header: classes.modal__header, body: classes.modal__body }}
      >
        <ContactForm close={close} />
      </Modal>
    </Box>
  );
};

export default Offerings;
