"use client";

import { Box,  Button, Modal } from "@mantine/core";
import styles from "./CounsellingBanner.module.css";
import ContactForm from "../ContactForm";
import { useDisclosure } from "@mantine/hooks";

export default function CounsellingBanner() {
    const [opened, { open, close }] = useDisclosure(false);
  return (
    <section className={styles.wrapper}>
      <Box className={styles.content}>
        <h2>Finding It Difficult To Choose The Right Online MBA University?</h2>

        <p>Need Someone To Speak With You? Call Us!</p>
        <p>Book A Free 20 Minutes Career Counseling Session With An Expert</p>

        <Button
          className={styles.ctaBtn}
          radius="xl"
          size="lg"
          onClick={open}
        >
          Know more
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
    </section>
  );
}
