'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  List,
  Modal,
  ScrollArea,
  SimpleGrid,
  Spoiler,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ContactForm from '../ContactForm';
import classes from './CollegeCourses.module.css';

const CollegeCourses = ({ data }: { data: any }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const searchParams = useSearchParams();
  const collegeName = searchParams.get('name');
  return (
    <Container maw={1200} my={80} id="courses">
      <Title fz={{ base: 24, sm: 48 }} fw={600} ta="center" my={50}>
        {collegeName} Courses 2024
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
        {data?.map((el: any, index: number) => (
          <Card
            display="flex"
            style={{
              justifyContent: 'space-between',
            }}
            bd="1px solid #D9D9D9"
            key={index}
            radius={8}
            p={5}
            m={10}
          >
            <Flex
              justify="space-between"
              bg="#D9D9D9"
              align="center"
              style={{ borderRadius: 8 }}
              px={10}
              py={6}
            >
              <Text lineClamp={1} fz={{ base: 20, sm: 24 }} fw={500}>
                {el?.name}
              </Text>
            </Flex>
            <Box p={10}>
              <Flex justify="space-between">
                <Box flex={1}>
                  <Text fw={500} style={{ display: 'flex', alignItems: 'center' }}>
                    {el?.fees}
                  </Text>
                  <Text c="#737373" fz={14} pt={0}>
                    Fees
                  </Text>
                </Box>
                <Box flex={1}>
                  <Text fw={500}>{el?.duration}</Text>
                  <Text c="#737373" fz={14} pt={0}>
                    Duration
                  </Text>
                </Box>
                <Box flex={1}>
                  <Tooltip label={el?.studyMode}>
                    <Text fw={500} lineClamp={1}>
                      {el?.studyMode}
                    </Text>
                  </Tooltip>
                  <Text c="#737373" fz={14} pt={0}>
                    Study Mode
                  </Text>
                </Box>
              </Flex>
              <Box my={10}>
                <Text fw={500}>Courses Offered</Text>
                <Spoiler
                  classNames={{ control: 'spoiler__control' }}
                  maxHeight={45}
                  showLabel="Show more"
                  hideLabel="Hide"
                >
                  <Text fz={14} c="#737373">
                    {el?.coursesOffered}
                  </Text>
                </Spoiler>
              </Box>
              <Box my={10}>
                <Text fw={500}>Eligibility</Text>
                <ScrollArea h={90} scrollbarSize={6} scrollbars="y">
                  <List fz={14} mx={10}>
                    {el?.eligibility?.map((item: string, index: number) => (
                      <List.Item key={index} c="#737373">
                        {item}
                      </List.Item>
                    ))}
                  </List>
                </ScrollArea>
              </Box>
            </Box>
            <Flex justify="space-between" mb={10} mx={10}>
              <Button
                fullWidth
                mr={{ base: 10, sm: 5 }}
                color="#F24B04"
                fz={14}
                px={9}
                size="md"
                onClick={open}
              >
                Download Brochure
              </Button>
              <Button
                component={Link}
                href="https://wa.me/7042833800"
                fullWidth
                color="#F24B04"
                variant="outline"
                fz={14}
                px={9}
                size="md"
              >
                Talk to Our Experts
              </Button>
            </Flex>
          </Card>
        ))}
      </SimpleGrid>
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
    </Container>
  );
};

export default CollegeCourses;
