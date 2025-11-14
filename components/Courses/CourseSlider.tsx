"use client";

import { Box, Modal, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import classes from "./CoursesSlider.module.css";
import ContactForm from "../ContactForm";
import { useDisclosure } from "@mantine/hooks";

type Course = {
  title: string;
  img: string;
  details: string[];
};

const courses: Course[] = [
  {
    title: "ONLINE MBA",
    img: "/assets/courses/ONLINEMBA.webp",
    details: [
      "No. of Universities - 36",
      "Duration - 2 Years",
      "Eligibility - Graduation",
      "Mode - Online",
      "EMI - Available",
    ],
  },
  {
    title: "DUAL MBA ONLINE",
    img: "/assets/courses/DualMBA.jpg",
    details: [
      "No. of Universities - 20",
      "Duration - 2 Years",
      "Eligibility - Graduation",
      "Mode - Online",
      "EMI - Available",
    ],
  },
  {
    title: "ONLINE MCA",
    img: "/assets/courses/MCA.jpg",
    details: [
      "No. of Universities - 14",
      "Duration - 2 Years",
      "Eligibility - Graduation / BCA",
      "Mode - Online",
      "EMI - Available",
    ],
  },
  {
    title: "ONLINE M.COM",
    img: "/assets/courses/M.COM.jpg",
    details: [
      "No. of Universities - 12",
      "Duration - 2 Years",
      "Eligibility - Graduation",
      "Mode - Online",
      "EMI - Available",
    ],
  },
  {
    title: "ONLINE BBA",
    img: "/assets/courses/bba.webp",
    details: [
      "No. of Universities - 18",
      "Duration - 3 Years",
      "Eligibility - Graduation",
      "Mode - Online",
      "EMI - Available",
    ],
  },
];

export default function CoursesSlider() {
   const [opened, { open, close }] = useDisclosure(false);
  const autoplay = Autoplay({ delay: 3500, stopOnInteraction: false });

  return (
    <Box py={70} style={{ background: "#FFFFFF" }}>
      <Box ta="center" mb={30}>
        <Text className={classes.sectionTitle}>
          Top Online Courses to Match your Interest
        </Text>
        <Text className={classes.sectionSubtitle}>
          Let us guide you to the ideal online course for a successful career journey!
        </Text>
      </Box>

    <Carousel
  classNames={{ root: classes.carouselRoot }}
  slideSize={{ base: "50%", md: "33.33%", lg: "25%" }}
  slideGap="md"
  align="start"
  loop
  draggable
  containScroll="trimSnaps"
  slidesToScroll={1}
  withIndicators={false}
  withControls
  plugins={[autoplay as any]}
  styles={{
    viewport: {
      paddingLeft: 0,
      paddingRight: 0,
      overflow: "hidden",
    },
  }}
>
  {courses.map((course, idx) => (
    <Carousel.Slide key={idx}>
      <Box className={classes.card}>
        <img src={course.img} alt={course.title} className={classes.image} />

        <Box className={classes.titleBar}>
          <Text className={classes.titleText}>{course.title}</Text>
        </Box>

        <Box className={classes.overlay}>
          <Text className={classes.overlayTitle}>{course.title}</Text>
          <ul className={classes.details}>
            {course.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </Box>
      </Box>
    </Carousel.Slide>
  ))}
</Carousel>

      <Box ta="center" mt={40}>
        <button type="button" className={classes.knowMoreBtn} onClick={open}>
          KNOW MORE →
        </button>
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
