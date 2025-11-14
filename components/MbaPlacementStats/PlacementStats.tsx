"use client";

import { Box, Grid, Text } from "@mantine/core";
import styles from "./PlacementStats.module.css";

export default function PlacementStats() {
  const stats = [
    { value: "50%", label: "Average Salary Hike" },
    { value: "25K+", label: "Learners Joined MBA Courses" },
    { value: "96%", label: "Students Achieved Desired Outcomes" },
    { value: "416%", label: "Highest Pay Hike Received" },
  ];

  return (
    <section className={styles.wrapper}>
      <Text className={styles.subHeading}>Placements In Online MBA</Text>

      <h2 className={styles.heading}>Past Placement  <span className={styles.orangeText}>Numbers</span></h2>

      <p className={styles.description}>
        Explore our history of successful MBA placements, where we help guide
        students into top-tier job roles through our comprehensive Online MBA
        degree programs.
      </p>

      <Grid gutter={35} justify="center" mt={20}>
        {stats.map((item, i) => (
          <Grid.Col key={i} span={{ base: 12, sm: 6, md: 3 }}>
            <Box className={styles.card}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </Box>
          </Grid.Col>
        ))}
      </Grid>
    </section>
  );
}
