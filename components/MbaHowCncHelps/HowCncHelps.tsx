"use client";

import { Box, Grid, List, Button, Modal } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import styles from "./HowCncHelps.module.css";
import ContactForm from "../ContactForm";
import { useDisclosure } from "@mantine/hooks";

export default function HowCncHelps() {
    const [opened, { open, close }] = useDisclosure(false);
  
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>How CNC Helps You In Choosing The Right Course</h2>

      <p className={styles.subheading}>
        We Offer The Best Industry Expertise To You So That You Can Choose The Right
        College/University According To Your Needs.
      </p>

      <Grid gutter={20} mt={20} justify="center">
        {/* LEFT BOX */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Box className={styles.card}>
            <List spacing="sm">
              <List.Item icon={<IconCheck size={20} />}>
                Compare 50+ Universities
              </List.Item>

              <List.Item icon={<IconCheck size={20} />}>
                100% Free Career Counseling
              </List.Item>

              <List.Item icon={<IconCheck size={20} />}>
                Post Admission Support
              </List.Item>

              <List.Item icon={<IconCheck size={20} />}>
                Download 50+ Colleges Syllabus
              </List.Item>
            </List>
          </Box>
        </Grid.Col>

        {/* RIGHT BOX */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Box className={styles.card}>
            <List spacing="sm">
              <List.Item icon={<IconCheck size={20} />}>
                Download 50+ Colleges Brochure
              </List.Item>

              <List.Item icon={<IconCheck size={20} />}>
                6+ Years Of Counseling Experience
              </List.Item>

              <List.Item icon={<IconCheck size={20} />}>
                25+ Expert Mentors
              </List.Item>

              <List.Item icon={<IconCheck size={20} />}>
                95K+ Happy Students
              </List.Item>
            </List>
          </Box>
        </Grid.Col>
      </Grid>

      <Button
        className={styles.ctaBtn}
        radius="xl"
        size="lg"
        mt={35}
        onClick={open}
      >
        Get Free Career Counseling
      </Button>

       <Modal
        opened={opened}
        onClose={close}
        size="xl"
        centered
        overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
      >
        <ContactForm close={close} />
      </Modal>
    </section>
  );
}
