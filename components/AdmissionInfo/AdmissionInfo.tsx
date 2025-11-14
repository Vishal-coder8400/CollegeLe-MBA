'use client';

import { useSearchParams } from 'next/navigation';
import { Paper, Spoiler, Title } from '@mantine/core';
import classes from './AdmissionInfo.module.css';

const AdmissionInfo = ({ data }: { data: string }) => {
  const searchParams = useSearchParams();
  const collegeName = searchParams.get('name');
  return (
    <Paper id="admission" bg="#191919" radius={8} c="#fff" py={100} px="xl">
      <Title fz={{ base: 24, sm: 48 }} fw={600} ta="center">
        {collegeName} Admissions 2024
      </Title>
      <Spoiler
        classNames={{ control: classes.control }}
        maw={1100}
        my={30}
        mx="auto"
        ta="justify"
        maxHeight={120}
        showLabel="Show more"
        hideLabel="Show less"
      >
        {data}
      </Spoiler>
    </Paper>
  );
};

export default AdmissionInfo;
