'use client';

import { Box, Button, Grid, Image, Modal, Text } from '@mantine/core';
import classes from './Universities.module.css';
import ContactForm from "../ContactForm";
import { useDisclosure } from "@mantine/hooks";


const universityLogos = [
  "/assets/universitieslogo/manipal.webp",
  "/assets/universitieslogo/Jain-University-logo.webp",
  "/assets/universitieslogo/dy-patil-vidyapeeth-university-online.webp",
  "/assets/universitieslogo/Lovely-Professional-University-Online-logo.webp",
  "/assets/universitieslogo/sastra-online-university-with-tcs-logo.webp",
  "/assets/universitieslogo/chandigarh-online-university-logo.webp",
  "/assets/universitieslogo/bimtech-logo-with-upgrad.webp",
  "/assets/universitieslogo/GLA-University-Online-logo.webp",
  "/assets/universitieslogo/Maharishi-Markandeshwar-Deemed-to-be-University-logo.webp",
  "/assets/universitieslogo/ignou-logo.webp",
  "/assets/universitieslogo/uttaranchal-online-university-logo.webp",
  "/assets/universitieslogo/svg-university-logo.webp",
  "/assets/universitieslogo/iim-raipur.webp",
  "/assets/universitieslogo/Symbiosis-SCDL-logo.webp",
  "/assets/universitieslogo/amrita-online-ahead-logo.webp",
  "/assets/universitieslogo/Vignans-Foundation-For-Science-Technology-And-Research-logo.webp",
  "/assets/universitieslogo/UPES-University-logo.webp",
  "/assets/universitieslogo/datta-meghe-institute-of-higher-education-online-logo.webp",
  "/assets/universitieslogo/shoolini-university-online-logo.webp",
  "/assets/universitieslogo/online-chitkara-university-logo.webp",
  "/assets/universitieslogo/parul-university-logo.webp",
  "/assets/universitieslogo/deakin-business-school-logo-with-upgrad.webp",
  "/assets/universitieslogo/atlas-skilltech-university-logo.webp",
  "/assets/universitieslogo/graphics-era-online-logo.webp",
];

export default function Universities() {
const [opened, { open, close }] = useDisclosure(false);
  return (
    <Box py={60} style={{ backgroundColor: '#F6FAFF' }}>
      {/* Title + underline */}
      <Box ta="center" mb={35}>
        <Text className={classes.title}>
          Explore Over <span style={{ color: '#F24B04' }}>100+</span>
        </Text>

        <Text className={classes.description}>
          Online Universities & Chuno College Le
        </Text>
      </Box>

      {/* Logo Cards */}
      <Grid
        justify="center"
        gutter={25}
        style={{ maxWidth: 1200, margin: "auto" }}
      >
        {universityLogos.map((img, idx) => (
          <Grid.Col key={idx} span={{ base: 6, sm: 4, md: 3, lg: 2 }}>
            <Box className={classes.card}>
              <Image src={img} alt={`university-logo-${idx}`} fit="contain" className={classes.logo} />
            </Box>
          </Grid.Col>
        ))}
      </Grid>

      {/* Button */}
      <Box ta="center" mt={40}>
        <Button
          size="lg"
          radius="md"
          color="#F24B04"
          onClick={open}
        >
          View More
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
  );
}
