'use client';

import { useRef } from 'react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { EmblaCarouselType } from 'embla-carousel-react';
import { Carousel } from '@mantine/carousel';
import { Avatar, Box, Button, Image, Text, Title } from '@mantine/core';
import { testimonialData } from './testimoniData';
import classes from './Testimonials.module.css';

const Testimonials = () => {
  const carouselRef = useRef<EmblaCarouselType | null>(null);
  const scrollToPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollPrev();
    }
  };

  const scrollToNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollNext();
    }
  };

  return (
    <Box className={classes.main} py={60}>
      <Box maw={836} ta="center" c="#fff" my={40} mx="auto" px={{ base: 15, sm: 30 }}>
        <Title c="#191919" fz={{ base: 32, sm: 48 }} fw={600}>
          What Our Students Have To Say!
        </Title>
        <Text my={{ base: 25, sm: 50 }} c="#353E5C">
          CollegeLe is your trusted partner in higher education, offering personalized guidance and
          resources to help students find the best colleges, programs, and opportunities. With
          expert insights, tailored recommendations, and support through the application process, we
          simplify the path to academic success and a fulfilling future.
        </Text>
      </Box>
      <Box className={classes.carousel__top}>
        <Carousel
          slideSize="30%"
          slideGap="xl"
          align="start"
          withControls={false}
          slidesToScroll={1}
          loop
          getEmblaApi={(api) => (carouselRef.current = api)}
        >
          {testimonialData.map((item, index) => (
            <Carousel.Slide key={index}>
              <Box className={classes.carousel__box}>
                <Box className={classes.icon__main}>
                  <Image src="/assets/testimonial.svg" fit="contain" />

                  <Avatar name={item.name} color="initials" />
                </Box>
                <Text
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.5,
                    marginBottom: '20px',
                    color: '#191919',
                  }}
                >
                  {item.quote}
                </Text>
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '20px',
                  }}
                >
                  <Box>
                    <Text className={classes.name}>{item.name}</Text>
                    <Text c="#fff" tt="uppercase">
                      {item.exam}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Carousel.Slide>
          ))}
        </Carousel>

        <Box visibleFrom="sm" className={classes.controls}>
          <Button
            variant="outline"
            color="#191919"
            onClick={scrollToPrev}
            radius="50%"
            w="60px"
            h="60px"
          >
            <IconArrowLeft />
          </Button>
          <Button
            variant="outline"
            color="#191919"
            radius="50%"
            w="60px"
            h="60px"
            onClick={scrollToNext}
          >
            <IconArrowRight size={20} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
