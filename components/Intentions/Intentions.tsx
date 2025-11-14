'use client';

import Link from 'next/link';
import { Box, Card, Grid, Image, Paper, Stack, Text, Title } from '@mantine/core';
import classes from './Intentions.module.css';

const Intentions = () => {
  return (
    <Box py={60} mx={10} className={classes.main}>
      <Box maw={582} mx="auto" px={30}>
        <Title fz={48} fw={600} ta={{ base: 'left', sm: 'center' }}>
          Our <span className="theme__red"> Intentions</span> In Focus
        </Title>
        <Text c="#353E5C" my={20} ta="center">
          The process of choosing and applying to colleges can be overwhelming, especially for
          first-generation students. We believe every student deserves access to trustworthy,
          supportive guidance at this pivotal stage.
        </Text>
      </Box>
      <Box>
        <Grid maw={1000} mx="auto" mt={50} mb={100}>
          <Grid.Col span={{ base: 12, xs: 7 }}>
            <Image src="/assets/intentions/intentions_1.png" radius={16} h={317} />
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 5 }}>
            <Paper
              bg="#9747FF"
              c="#fff"
              radius={16}
              h={317}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Box mx={{ base: 20, lg: 60 }}>
                <Title mb={10}>Mission</Title>
                <Text ta="justify" lh="22.56px" fw={500}>
                  Our mission is to empower students by providing them with accessible, reliable
                  resources and personalized guidance for their higher education journey. We aim to
                  simplify the college selection and application process, making quality education
                  and choices accessible to all.
                </Text>
              </Box>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}>
            <Paper h={317} radius={16} p={20} className={classes.value__box}>
              <Card w="fit-content" py={6} px={15}>
                <Text fw={500} fz={{ base: 14, sm: 14 }}>
                  Dr. Amit Prakash Jain
                </Text>
                <Text fw={500} fz={12}>
                  Founder
                </Text>
              </Card>
              <Box c="#fff" ta="right" maw={{ base: 200, sm: 222 }} mx={10}>
                <Title>Value</Title>
                <Text ta="justify" fz={{ base: 14, sm: 16 }}>
                  Our vision is to become the leading trusted partner for students worldwide in
                  their pursuit of higher education, fostering a community where every student has
                  the tools, confidence, and resources to achieve their fullest potential.
                </Text>
              </Box>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 6, xs: 3 }}>
            <Image src="/assets/intentions/intentions_2.png" h={317} radius={16} />
          </Grid.Col>
          <Grid.Col span={{ base: 6, xs: 3 }}>
            <Stack h={317}>
              <Link href="https://www.instagram.com/collegele.officials/profilecard/?igsh=NmxsYjNyY3IyOWJv">
                <Image src="/assets/intentions/insta.png" h={149} radius={16} flex={1} />
              </Link>
              <Link href="https://www.linkedin.com/company/collegele/">
                <Image src="/assets/intentions/linkedin.png" h={149} radius={16} flex={1} />
              </Link>
            </Stack>
          </Grid.Col>
        </Grid>
      </Box>
    </Box>
  );
};
export default Intentions;
