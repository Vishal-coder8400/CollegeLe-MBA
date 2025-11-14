'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { IconArrowRight } from '@tabler/icons-react';
import { Button, Card, Container, Flex, SimpleGrid, Text, Title } from '@mantine/core';
import HorizontalScroll from '../HorizontalScroll';

const categories = ['Overview', 'Courses & Fees', 'Admission', 'Placement', 'CutOffs', 'Ranking'];

// const updateList = [
//   {
//     info: 'IIT Roorkee has opened the facility to add a secondary GATE 2025 test paper. Registration for GATE 2025 is closed, but candidates can still add a paper.',
//     date: 'Jan 24, 2024',
//     link: '',
//   },
//   {
//     info: 'IIT Kanpur has released the syllabus for JEE Advanced 2025, with no changes from previous years. The syllabus covers Physics, Chemistry, and Maths.',
//     date: 'Jan 24, 2024',
//     link: '',
//   },
//   {
//     info: 'JEE Advanced 2025 candidates now have three attempts instead of two. Age requirements and other eligibility criteria remain unchanged.',
//     date: 'Jan 24, 2024',
//     link: '',
//   },
// ];

const CollegeUpdates = ({ data }: { data: any }) => {
  const [active, setActive] = useState('');

  const searchParams = useSearchParams();
  const collegeName = searchParams.get('name');

  const handleActive = (el: string) => {
    setActive(el);
    console.log(active);
    let element;
    if (el === categories[0]) {
      element = document.getElementById('about');
    } else if (el === categories[1]) {
      element = document.getElementById('courses');
    } else if (el === categories[2]) {
      element = document.getElementById('admission');
    } else if (el === categories[3]) {
      element = document.getElementById('placement');
    } else if (el === categories[4]) {
      element = document.getElementById('cutoff');
    } else if (el === categories[5]) {
      element = document.getElementById('ranking');
    }
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <Container maw={1100}>
      <HorizontalScroll maxWidth={1100} categories={categories} handleActive={handleActive} />
      <Title fz={{ base: 24, sm: 48 }} fw={600} ta="center">
        {collegeName} Latest Updates
      </Title>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {data?.map((el: any, index: number) => (
          <Card
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            bd="1px solid #E1E4ED"
            p={30}
            key={index}
            shadow="0px 1px 4px rgba(25, 33, 61, 0.08)"
            radius={10}
          >
            <Text c="#454C65" mb={20}>
              {el.info}
            </Text>
            <Flex justify="space-between">
              <Text c="#454C65" fw={600}>
                {el.releaseDate}
              </Text>
              <Button
                component={Link}
                w={40}
                h={40}
                p={0}
                href={el.updateLink || ''}
                color="#F24B04"
              >
                <IconArrowRight />
              </Button>
            </Flex>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};
export default CollegeUpdates;
