'use client';

import { Box, Button, Grid, Image, Modal, Text } from '@mantine/core';
import classes from './HumSection.module.css';
import ContactForm from "../ContactForm";
import { useDisclosure } from "@mantine/hooks";

export default function HumSection() {
  const [opened, { open, close }] = useDisclosure(false);
  const stats = [
    {
      img: "/assets/icons/Trusted-By-1-Lakh.png",
      title: "Trusted By 1 Lakh+",
      subtitle: "Students",
    },
    {
      img: "/assets/icons/Exclusive-College.png",
      title: "Exclusive College",
      subtitle: "Compare Portal",
    },
    {
      img: "/assets/icons/Easy-EMI.png",
      title: "Easy EMI",
      subtitle: "Options",
    },
    {
      img: "/assets/icons/25-Expert.png",
      title: "25+ Expert",
      subtitle: "Mentors",
    },
  ];

  return (
    <>
      {/* ✅ HERO SECTION */}
      <Box className={classes.heroWrapper}>
        <div className={classes.overlay} />

        <Box className={classes.content}>
          <Text className={classes.title}>
            Top 10 Online MBA Colleges/Universities
          </Text>

          <Text className={classes.subtitle}>
            Are You Looking For The Best Online MBA Colleges In India?
            <span className={classes.highlight}>
              {" "}We Have Provided a List Of India’s Top Online MBA Colleges With
              Their Key Features, College Fees, Approvals And Duration.
            </span>
          </Text>

          <Grid gutter={15} mt={20}>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <ul className={classes.list}>
                <li>Choose from 50+ Leading Online MBA Programs</li>
                <li>Compare College Features, Fees & Approvals</li>
                <li>Get Personalized Career Guidance—No Charge</li>
              </ul>
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6 }}>
              <ul className={classes.list}>
                <li>50% Average Salary Hike Across MBA courses</li>
                <li>Industry Relevant Specializations</li>
                <li>Download 50+ College Brochure</li>
              </ul>
            </Grid.Col>
          </Grid>

          <Button size="lg" radius="xl" className={classes.ctaBtn}  onClick={open}>
            Get Free Career Counseling
          </Button>
        </Box>
         <Modal
        opened={opened}
        onClose={close}
        size="xl"
        centered
        overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
      >
        <ContactForm close={close} />
      </Modal>
      </Box>

      {/* ✅ STATS SECTION */}
      <Box className={classes.statsWrapper}>
        <Grid justify="center" align="center" gutter={35}>
          {stats.map((item, index) => (
            <Grid.Col key={index} span={{ base: 6, sm: 3 }}>
              <Box className={classes.statsCard}>
                <Image src={item.img} alt="stats-icon" w={55} />
                <Text className={classes.statsTitle}>{item.title}</Text>
                <Text className={classes.statsSubtitle}>{item.subtitle}</Text>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </>
  );
}
