/* eslint-disable jsx-a11y/media-has-caption */
'use client';

import { IconChevronCompactLeft, IconChevronCompactRight } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import { AspectRatio, Box, Text, Title } from '@mantine/core';
import classes from './RecommendedColleges.module.css';

const collegePreviewList = [
  '/assets/TopColleges/1.png',
  '/assets/TopColleges/2.png',
  '/assets/TopColleges/3.png',
  '/assets/TopColleges/4.png',
  '/assets/TopColleges/5.png',
  '/assets/TopColleges/6.png',
  '/assets/TopColleges/7.png',
];

const RecommendedColleges = () => {
  // const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  // const handlePlay = (index: number | null) => {
  //   setPlayingIndex(index); // Set the clicked video index as playing
  // };
  return (
    <Box className={classes.base}>
      <Box className={classes.main}>
        <Box c="#fff" mx={{ base: 30, lg: 0 }}>
          <Title maw={362} fz={{ base: 32, sm: 48 }}>
            Top Colleges Recommended For You
          </Title>
          <Text maw={500} fz={{ base: 14, sm: 16 }} my={{ base: 20, lg: 0 }}>
            Find the best colleges tailored to your goals with CollegeLe's personalized
            recommendations. Our platform analyzes your preferences, academic strengths, and career
            aspirations to suggest top institutions. Make well-informed decisions and explore
            programs that align with your ambitions, setting you on the path to success.
          </Text>
        </Box>
        <Box my={{ base: 30, lg: 0 }}>
          <Carousel
            // height={329}
            h={{ base: 'auto', lg: 329 }}
            align="start"
            slidesToScroll={1}
            maw={544}
            loop
            withControls
            // controlsOffset="xl"
            className={classes.carousel__main}
            nextControlIcon={<IconChevronCompactRight color="#fff" size={30} />}
            previousControlIcon={<IconChevronCompactLeft color="#fff" size={30} />}
            // onSlideChange={() => {
            //   handlePlay(null);
            // }}
          >
            {collegePreviewList.map((preview: string, index: number) => (
              <Carousel.Slide key={index} className={classes.carousel__box}>
                {/* <Text className={classes.college__title}>{title}</Text> */}
                <AspectRatio
                  ratio={16 / 9}
                  // onClick={() => handlePlay(index)}
                >
                  <Box style={{ position: 'relative', cursor: 'pointer' }}>
                    <img
                      src={preview}
                      alt="college"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '4px',
                      }}
                    />
                    {/* <Overlay
                      color="rgba(0, 0, 0, 0.5)"
                      opacity={0.7}
                      zIndex={1}
                      style={{ borderRadius: '4px' }}
                    /> */}
                    {/* <Center
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 2,
                        }}
                      >
                        <IconPlayerPlay size={50} color="white" />
                      </Center> */}
                  </Box>
                </AspectRatio>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};
export default RecommendedColleges;
