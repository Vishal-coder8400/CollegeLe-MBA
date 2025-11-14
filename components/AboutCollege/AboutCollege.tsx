'use client';

import React from 'react';
import { Box, Container, Image, Skeleton, Text, Title } from '@mantine/core';
import { urlFor } from '@/utils/sanity';

const AboutCollege = ({ data }: { data: any }) => {
  return (
    <Container
      id="about"
      my={50}
      maw={1100}
      mih={600}
      mx="auto"
      p={{ base: 30, sm: 80 }}
      bg="#191919"
      c="#fff"
      h="fit-content"
      style={{ borderRadius: 20 }}
    >
      <Title mb="md" fz={48} fw={600}>
        About
      </Title>
      <Box style={{ position: 'relative' }}>
        {data?.aboutImg ? (
          <Image
            w={{ base: '-webkit-fill-available', lg: 600 }}
            fit="contain"
            src={urlFor(data.aboutImg)?.url()}
            alt="College image"
            radius={10}
            style={{
              float: 'right',
              marginLeft: '20px',
              // marginBottom: '10px',
              maxWidth: '40%', // Adjust image size
            }}
          />
        ) : (
          <Skeleton
            animate={false}
            // w={30}
            // h={30}
            h={300}
            w={{ base: '-webkit-fill-available', lg: 300 }}
            style={{
              float: 'right',
              marginLeft: '20px',
              // marginBottom: '10px',
              maxWidth: '40%', // Adjust image size
            }}
          />
        )}
        <Text fz="md" lh="1.8" ta="justify">
          {data?.about}
        </Text>
      </Box>
    </Container>
  );
};

export default AboutCollege;
