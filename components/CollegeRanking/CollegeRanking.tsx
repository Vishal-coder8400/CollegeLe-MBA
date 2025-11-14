'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Spoiler, Title } from '@mantine/core';
import classes from './CollegeRanking.module.css';

const CollegeRanking = ({ data }: { data: string }) => {
  const searchParams = useSearchParams();
  const collegeName = searchParams.get('name');

  return (
    <Container id="ranking" ta="center" size="lg" px={20}>
      <Title fz={{ base: 24, sm: 48 }}>{collegeName} Rankings 2024</Title>
      <Spoiler
        classNames={{ control: classes.control }}
        my={30}
        mx="auto"
        ta="center"
        maxHeight={70}
        showLabel="Show more"
        hideLabel="Show less"
        fz={14}
        c="#0A0A0A"
      >
        {data}
      </Spoiler>
    </Container>
  );
};

export default CollegeRanking;
