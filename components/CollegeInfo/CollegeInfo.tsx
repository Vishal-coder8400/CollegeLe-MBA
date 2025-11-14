'use client';

import { ActionIcon, Box, Card, Image, SimpleGrid, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const CollegeInfo = ({ data }: { data: any }) => {
  const mobile = useMediaQuery('(min-width: sm)');

  const infoList = [
    {
      bg: '#0A9396',
      title: 'Avg. Package',
      info: data?.avgFee,
      img: '/assets/awesome/file-text.svg',
    },
    {
      bg: '#8CCAB5',
      title: 'Established Year',
      info: data?.estYear,
      img: '/assets/info/calendar.svg',
    },
    {
      bg: '#EE9B00',
      title: 'Accreditation Body',
      info: data?.approvedBy,
      img: '/assets/info/badge.svg',
    },
    {
      bg: '#F24B04',
      title: 'Approved By',
      info: data?.accreditationBody,
      img: '/assets/info/badge.svg',
    },
  ];

  return (
    <SimpleGrid
      cols={{ base: 2, md: 4 }}
      w="fit-content"
      style={{
        gridAutoRows: 'fit-content',
        // gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      }}
      mx="auto"
      my={100}
    >
      {infoList.map((el, index: number) => (
        <Card
          flex={1}
          key={index}
          w={{ base: 170, sm: 225 }}
          h={{ base: 170, sm: '-webkit-fill-available' }}
          shadow="0px 1px 4px rgba(25, 33, 61, 0.08)"
          radius={10}
          m={{ base: 5, sm: 10 }}
          ta="center"
          py={{ base: 10, sm: 50 }}
        >
          <ActionIcon
            mx="auto"
            variant="filled"
            color={el.bg}
            size={!mobile ? 50 : 30}
            radius="50%"
          >
            <Image src={el.img} w={{ base: 20, sm: 30 }} fit="contain" />
          </ActionIcon>
          <Box>
            <Text c="#8C8F8E" my={{ base: 5, sm: 15 }}>
              {el.title}
            </Text>
            <Text c="#454C65">{el.info}</Text>
          </Box>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default CollegeInfo;
