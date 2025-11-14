'use client';

import { IconMapPin } from '@tabler/icons-react';
import {
  Box,
  Button,
  Flex,
  Group,
  Image,
  Modal,
  Paper,
  Skeleton,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { urlFor } from '@/utils/sanity';
import ContactForm from '../ContactForm';
import classes from './CollegeHerobox.module.css';

const CollegeHerobox = ({ data }: { data: any }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box className={classes.main} mih="100vh" p={30}>
      <Flex align="center" justify="space-evenly" wrap="wrap">
        <Box c="#fff" maw={600}>
          <Flex align="center">
            {data?.logo ? (
              <Image
                width={60}
                height={60}
                fit="contain"
                src={urlFor(data.logo)?.url()}
                alt="Logo"
              />
            ) : (
              <Skeleton animate={false} w={60} height={60} circle />
            )}
            <Title fz={{ base: 24, sm: 48 }} ml={40} maw={433}>
              {data?.name}
            </Title>
          </Flex>
          <Flex align="center" my={30}>
            <Paper bg="#33B65A" py={4} px={20} radius={10} mr={30}>
              {data?.overallRating}
            </Paper>
            <IconMapPin />
            <Text ml={10}>{data?.location}</Text>
          </Flex>
          <Text fw={500}>{data?.info}</Text>
          <Group my={30}>
            <Button
              // component={Link}
              size="lg"
              w={170}
              fz={14}
              px={0}
              color="#F24B04"
              // href={data?.brochureLink || ''}
              onClick={open}
            >
              Download Brochure
            </Button>
            <Button size="lg" w={170} fz={14} px={0} bg="#fff" variant="outline" color="#F24B04">
              Shortlist
            </Button>
          </Group>
        </Box>
        {/* <Image
          src="/assets/college/college.png"
          w={{ base: '-webkit-fill-available', lg: 500 }}
          fit="contain"
        /> */}
        {data?.collegeImg ? (
          <Image
            w={{ base: '-webkit-fill-available', lg: 600 }}
            fit="contain"
            src={urlFor(data.collegeImg)?.url()}
            alt="College image"
            radius={10}
          />
        ) : (
          <Skeleton
            animate={false}
            // animate={false}
            w={{ base: '-webkit-fill-available', lg: 600 }}
            height={519}
            mb="xl"
          />
        )}
      </Flex>
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
        <ContactForm brochureLink={data?.brochureLink || ''} close={close} />
      </Modal>
    </Box>
  );
};

export default CollegeHerobox;
