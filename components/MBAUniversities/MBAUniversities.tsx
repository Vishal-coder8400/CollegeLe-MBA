"use client";

import { Box, Card, Text, Button, Grid, Divider, Modal } from "@mantine/core";
import {
  IconDeviceLaptop,
  IconCalendar,
  IconStarFilled,
  IconCurrencyRupee,
} from "@tabler/icons-react"; // ✅ Correct Icon Import

import styles from "./MBAUniversities.module.css";

import ContactForm from "../ContactForm";
import { useDisclosure } from "@mantine/hooks";


interface UniversityCardType {
  id: number;
  image: string;
  title: string;
  mode: string;
  duration: string;
  approvals: string;
  fee: string;
  keyFeatures: string;
}

export default function MBAUniversities() {
  // ✅ Modal logic added here
  const [opened, { open, close }] = useDisclosure(false);

  const universities: UniversityCardType[] =[
    {
      id: 1,
      image: "/assets/university/Amity-University-ODL.png",
      title: "Amity University Online",
      mode: "  Online & Distance",
      duration: "2 Years",
      approvals: "UGC-DEB,NAAC A+, NIRF",
      fee: "1,75,000/-",
      keyFeatures:
        "Asia’s No.1 online education platform Carrying forward the AUO inheritance of over two decades in online…",
    },
    {
      id: 2,
      image: "/assets/university/manipal-university.webp",
      title: "Manipal University Jaipur",
      mode: "Online & Distance",
      duration: "2 Years",
      approvals: " NAAC A+, UGC, AICTE",
      fee: "1,66,000/-",
      keyFeatures:
        "Manipal University Jaipur UGC-Recognized University A specialization is offered Finance, Marketing, …",
    },
    {
      id: 3,
      image: "/assets/university/chandigrah-university.png",
      title: "Chandigarh University",
      mode: "Online",
      duration: "2 Years",
      approvals: " UGC-DEB approved and AICTE",
      fee: "1,65,000/-",
      keyFeatures:
        "UGC-approved online degrees from CU. Flexible learning options for Bachelor's and Master's.",
    },
    {
      id: 4,
      image: "/assets/university/sharda-university.webp",
      title: "Sharda University",
      mode: "Online & Distance",
      duration: "2 Years",
      approvals: "UGC,NAAC A, NIRF",
      fee: "1,00,000/-",
      keyFeatures:
        "900+ LEARNING HOURS 40 WORLD-CLASS FACULTY 4 SPECIALIZATIONS Contemporary Curriculum..",
    },
    {
      id: 5,
      image: "/assets/university/galgotias_university_logo.svg",
      title: "Galgotia University",
      mode: "online",
      duration: "2 Years",
      approvals: "UGC,AICTE,NBA,AIU,NAAC A+",
      fee: "76,200/-",
      keyFeatures:
        "Approved by UGC-DEB, allows students to complete the course from home, and offers specializations. ",
    },
    {
      id: 6,
      image: "/assets/university/Lpu-online.png",
      title: "LPU Online MBA",
      mode: "Online & Distance",
      duration: "2 Years",
      approvals: "UGC",
      fee: "54,000/-",
      keyFeatures:
        "Recognized by UGC and is also a member of AIU.LPU Online Education has a dedicated placement cell …",
    },
    {
      id: 7,
      image: "/assets/university/uttaranchal-u.webp",
      title: "Uttaranchal University",
      mode: "Online & Distance",
      duration: "2 Years",
      approvals: "UGC,NAAC A, NIRF",
      fee: "92,000/-",
      keyFeatures:
        "900+ LEARNING HOURS 40 WORLD-CLASS FACULTY 4 SPECIALIZATIONS Contemporary Curriculum..",
    },
    {
      id: 8,
      image: "/assets/university/nmims1.webp",
      title: "NMIMS-SCE",
      mode: "  Online & Distance",
      duration: "2 Years",
      approvals: " AICTE, UGC & NAAC A+ Approved University",
      fee: "1,44,000/-",
      keyFeatures: "In 2003, NMIMS was declared a deemed-to-be university under section 3 of the UGC Act 1956…",
    },
    {
      id: 9,
      image: "/assets/university/parul-logo-1.webp",
      title: "Parul University",
      mode: "Online & Distance",
      duration: "2 Years",
      approvals: "ACITE, NIRF",
      fee: "90,000/-",
      keyFeatures: "Great Lakes Advantage Cost Effective MBA Program Learn while you earn World-Class Curriculum…",
    },
    {
      id: 10,
      image: "/assets/university/DPU-online-learning (1).webp",
      title: "D.Y. Patil Online MBA",
      mode: "Online & Distance",
      duration: "2 Years",
      approvals: "UGC,AICTE,NAAC A++,AIU,NIRF,Ministry of External Affairs",
      fee: "1,40,200/-",
      keyFeatures:
        "The Institute has been approved UGC , AICTE DY Patil University (DPU) Mumbai is inviting applications for…",
    },
    {
      id: 11,
      image: "/assets/university/shoolini-university.png",
      title: "Shoolini University",
      mode: "online",
      duration: "2 Years",
      approvals: "UGC,AICTE,NAAC A+",
      fee: "1,20,000/-",
      keyFeatures: "a growth-oriented curriculum with specializations in areas like Marketing and Finance, and a focus on skill development through programs like the Stanford-based SPRINT bootcamp..",
    },
    {
      id: 12,
      image: "/assets/university/manav-rachna-university.png",
      title: "Manav Rachna University",
      mode: "online",
      duration: "2 Years",
      approvals: "UGC and AICTE",
      fee: "1,13,000/-",
      keyFeatures:
        "a dual specialization option, industry-integrated and AICTE-model curriculum, and international collaborations with institutions like KEDGE Business School, France..",
    },
  ];

    

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Online MBA Programs From Top Universities</h2>

      <Grid gutter={25}>
        {universities.map((item) => (
          <Grid.Col key={item.id} span={{ base: 12, sm: 6, md: 4 }}>
            <Card className={styles.card}>
              <img src={item.image} alt={item.title} className={styles.cardImage} />

              <div className={styles.titleBar}>
                <span>{item.title}</span>
              </div>

              <Box className={styles.details}>
                <div className={styles.detailRow}>
                  <div className={styles.iconGroup}>
                    <IconDeviceLaptop size={22} />
                    <p>{item.mode}</p>
                  </div>

                  <div className={styles.iconGroup}>
                    <IconCalendar size={22} />
                    <p>{item.duration}</p>
                  </div>
                </div>

                <div className={styles.detailRow}>
                  <div className={styles.iconGroup}>
                    <IconStarFilled size={22} />
                    <p>{item.approvals}</p>
                  </div>

                  <div className={styles.feeSection}>
                    <IconCurrencyRupee size={35} className={styles.rupeeIcon} />
                    <div>
                      <span className={styles.feeLabel}>Fee Starts</span>
                      <br />
                      <strong className={styles.feeAmount}>{item.fee}</strong>
                    </div>
                  </div>
                </div>
              </Box>

              <Divider className={styles.divider} />

              <Box className={styles.keyFeatureBox}>
                <Text size="sm">
                  <strong>Key Features: </strong>
                  {item.keyFeatures}
                </Text>
              </Box>

              {/* ✅ Enquire Now button opens modal */}
              <Button
                mt={10}
                style={{ backgroundColor: "#F24B04", color: "white" }}
                onClick={open}
              >
                Enquire Now
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {/* ✅ Modal same as header */}
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