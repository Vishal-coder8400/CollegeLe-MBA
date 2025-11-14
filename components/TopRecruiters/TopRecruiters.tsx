'use client';

import { useSearchParams } from 'next/navigation';
import { Marquee } from '@gfazioli/mantine-marquee';
import { Box, Container, Image, Title } from '@mantine/core';
import { urlFor } from '@/utils/sanity';

const recList = [
  '/assets/recruit/image.png',
  '/assets/recruit/image-1.png',
  '/assets/recruit/image-2.png',
  '/assets/recruit/image-3.png',
  '/assets/recruit/image-4.png',
  '/assets/recruit/image-6.png',
];

const TopRecruiters = ({ data }: { data: any }) => {
  const searchParams = useSearchParams();
  const collegeName = searchParams.get('name');

  return (
    <Container size="lg" mx="auto" my={100} c="#000">
      <Title fz={{ base: 24, sm: 48 }} fw={600} ta="center" my={60}>
        Top Recruiters at {collegeName}
      </Title>
      <Marquee fadeEdges pauseOnHover>
        {recList.map((el: string, index: number) => (
          <Box mx={10} key={index}>
            <Image w={{ base: 100, sm: 150 }} h={100} fit="contain" src={el} alt="Static Logo" />
          </Box>
        ))}

        {data?.map(
          (
            el: {
              _type: string;
              _key: string;
              asset: {
                _type: string;
                _ref: string;
              };
            },
            index: number
          ) =>
            el?._type ? (
              <Box mx={10} key={el._key || index}>
                <Image
                  width={60}
                  height={60}
                  fit="contain"
                  src={urlFor(el)?.url() || ''}
                  alt="Dynamic Logo"
                />
              </Box>
            ) : null
        )}
      </Marquee>
    </Container>
  );
};

export default TopRecruiters;
