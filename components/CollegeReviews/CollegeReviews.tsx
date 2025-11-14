'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Progress,
  Rating,
  Text,
  Title,
} from '@mantine/core';
import AddReview from './AddReview';
import { ratingCount } from './reviewData';
import classes from './CollegeReviews.module.css';

const CollegeReviews = ({ data }: { data: any }) => {
  const [isMore, setIsMore] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const collegeName = searchParams.get('name');
  const reviewCard = [
    {
      title: 'Overall',
      value: data?.overallRating,
      rating: data?.overallRating,
      review: data?.totalReviews,
    },
    {
      title: 'Infrastructure',
      value: data?.infraRating,
      rating: data?.infraRating,
      review: data?.totalReviews,
    },
    {
      title: 'Faculty',
      value: data?.facultyRating,
      rating: data?.facultyRating,
      review: data?.totalReviews,
    },
    {
      title: 'Placement',
      value: data?.placementRating,
      rating: data?.placementRating,
      review: data?.totalReviews,
    },
  ];

  const hasMoreReviews = data?.reviewList?.length > 1;

  return (
    <Container maw={700} mx={{ base: 10, sm: 'auto' }}>
      <Title fz={{ base: 24, sm: 48 }} fw={600} my={50} ta="center">
        {collegeName} Reviews
      </Title>
      <Grid gutter="xl" justify="space-between">
        <Grid.Col
          span={12}
          py={20}
          px={{ base: 10, sm: 20 }}
          display="flex"
          bd="1px solid #D2D2D2"
          style={{ borderRadius: 8 }}
          className={classes.grid__1}
        >
          <Box>
            <Text fw={500}>Employee Reviews</Text>
            <Title my={10}>{data?.overallRating}</Title>
            <Rating color="#F24B04" value={3.5} size="xl" fractions={2} readOnly />
            <Text c="#858585" mt={10} fz={14}>
              ({data?.totalReviews} Reviews)
            </Text>
          </Box>
          <Box flex={1} my={20} mx={{ base: 0, sm: 30 }}>
            <Group my={7}>
              <Text fz={14}>5 stars</Text>
              <Progress mx={20} flex={1} color="#F24B04" value={ratingCount.five} />
              <Text fz={14}>488</Text>
            </Group>
            <Group my={7}>
              <Text fz={14}>4 stars</Text>
              <Progress mx={20} flex={1} color="#F24B04" value={ratingCount.four} />
              <Text fz={14}>74</Text>
            </Group>
            <Group my={7}>
              <Text fz={14}>3 stars</Text>
              <Progress mx={20} flex={1} color="#F24B04" value={ratingCount.three} />
              <Text fz={14}>14</Text>
            </Group>
            <Group my={7}>
              <Text fz={14}>2 stars</Text>
              <Progress mx={20} flex={1} color="#F24B04" value={ratingCount.two} />
              <Text fz={14}>{ratingCount.two}</Text>
            </Group>
            <Group my={7}>
              <Text fz={14}>1 stars</Text>
              <Progress mx={20} flex={1} color="#F24B04" value={ratingCount.one} />
              <Text fz={14}>{ratingCount.one}</Text>
            </Group>
          </Box>
        </Grid.Col>
        {reviewCard?.map((el, index: number) => (
          <Grid.Col
            span={{ base: 6, sm: 3 }}
            bd="1px solid #D2D2D2"
            style={{ borderRadius: 8 }}
            maw={{ base: 170, sm: '160px !important' }}
            key={index}
            ta="center"
            my={20}
          >
            <Text fw={500}>{el.title}</Text>
            <Title my={10}>{el.value}</Title>
            <Rating
              display="inline-flex"
              fractions={10}
              mx="auto"
              color="#F24B04"
              value={el.rating}
              readOnly
            />
            <Text mt={10} c="#858585" fz={14}>
              ( {el.review} Reviews)
            </Text>
          </Grid.Col>
        ))}
        <AddReview />
        {(!isMore ? [...(data?.reviewList || [])].slice(0, 1) : [...(data?.reviewList || [])])?.map(
          (el: any, index: number) => (
            <Grid.Col
              key={index}
              span={12}
              bd="1px solid #D2D2D2"
              style={{ borderRadius: 8 }}
              my={10}
            >
              <Text c="#858585" fz={14}>
                {el.date}
              </Text>
              <Rating readOnly my={15} color="#F24B04" value={el.rating} />
              <Flex align="center">
                <Avatar name={el.name} color="initials" />
                <Text ml={10} c="#0D0C22">
                  {el.name}
                </Text>
              </Flex>
              <Text mb={15} c="#858585" fz={14}>
                {el.title}
              </Text>
              <Text fz={14} c="#0A0A0A">
                {el.reviewInfo}
              </Text>
            </Grid.Col>
          )
        )}
      </Grid>
      {hasMoreReviews && (
        <Button
          onClick={() => setIsMore(!isMore)}
          fw={400}
          display="block"
          variant="transparent"
          mx="auto"
          ta="center"
          c="#F24B04"
          my={10}
          style={{ cursor: 'pointer' }}
        >
          {!isMore ? 'Show More' : 'Show Less'}
        </Button>
      )}
    </Container>
  );
};
export default CollegeReviews;
