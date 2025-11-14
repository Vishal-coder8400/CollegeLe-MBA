'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import Autoplay from 'embla-carousel-autoplay';
import type { EmblaCarouselType } from 'embla-carousel';
import { useSelector } from 'react-redux';
import { Carousel } from '@mantine/carousel';
import { Box, Button, Divider, Flex, Group, Image, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { RootState } from '@/lib/store/store';
import { convertDate } from '@/utils/helper';
import { clientBlogs, urlForBlogs } from '@/utils/sanity';

const LatestEducationNews = () => {
  const router = useRouter();
  const mobile = useMediaQuery('(min-width: sm)');
  const carouselRef = useRef<EmblaCarouselType | null>(null);

  // ✅ FINAL FIX — Embla v8 requires "active: true"
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      playOnInit: true,
      active: true,               // <-- REQUIRED FIX
      stopOnMouseEnter: false,
      stopOnInteraction: false,
    })
  );

  const { blogs } = useSelector((state: RootState) => state.blogs);

  const [pageData, setPageData] = useState({
    mainHeading: '',
    subHeading: '',
  });

  const scrollToPrev = () => {
    carouselRef.current?.scrollPrev();
  };

  const scrollToNext = () => {
    carouselRef.current?.scrollNext();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await clientBlogs.fetch(`*[_type == "blogPageContent"]`);

        setPageData({
          mainHeading: data[0].mainHeading,
          subHeading: data[0].subHeading,
        });
      } catch {}
    };

    fetchData();
  }, []);

  return (
    <Box my={50}>
      <Title maw={353} mx="auto" fz={32} c="#282828" fw={500} ta="center">
        {pageData.mainHeading}
      </Title>

      <Text maw={417} mx="auto" my={30} ta="center" c="#606261" fz={14} fw={400}>
        {pageData.subHeading}
      </Text>

      <Box>
        <Carousel
          slidesToScroll={1}
          align="start"
          loop
          slideGap={10}
          withControls={false}
          getEmblaApi={(api) => (carouselRef.current = api)}
          plugins={[autoplay.current]}   // ✅ FIXED
        >
          {blogs
            .filter((el) => el.mainContent.isFeatured)
            .map((item, index) => (
              <Carousel.Slide key={index} style={{ display: 'flex' }}>
                <Flex
                  bd="1px solid #E1E4ED"
                  mx="auto"
                  direction={{ base: 'column', lg: 'row' }}
                  style={{
                    shadow: '0px 1px 4px rgba(25, 33, 61, 0.08)',
                    borderRadius: 10,
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={
                      item.mainContent?.coverImage
                        ? urlForBlogs(item.mainContent.coverImage)?.url()
                        : '/assets/blogs/blog_1.png'
                    }
                    fallbackSrc="/assets/blogs/blog_1.png"
                    h={300}
                    fit="contain"
                  />

                  <Flex
                    flex={1}
                    direction="column"
                    justify="space-between"
                    px={30}
                    miw={{ base: 'fit-content', lg: 500 }}
                    maw={515}
                    my={{ base: 30, lg: 0 }}
                  >
                    <Box>
                      <Title
                        lineClamp={2}
                        mt={{ base: 10, lg: 30 }}
                        fz={{ base: 24, sm: 32 }}
                        fw={500}
                        c="#282828"
                      >
                        {item.mainContent.title}
                      </Title>

                      <Text lineClamp={2} fz={14} fw={400} my={20} c="#606261">
                        {item.mainContent.shortInfo}
                      </Text>
                    </Box>

                    <Box>
                      <Divider my="md" />
                      <Flex py={10} align="center" justify="space-between">
                        <Button
                          size={!mobile ? 'lg' : 'md'}
                          px={{ base: 10, sm: 30 }}
                          py={{ base: 0, sm: 10 }}
                          fz={14}
                          fw={400}
                          variant="outline"
                          color="#F24B04"
                          onClick={() => router.push(`/blogs/${item.mainContent.blogLink}`)}
                        >
                          Continue Reading
                        </Button>

                        <Text c="#6D758F" fw={400} fz={14}>
                          {convertDate(item.mainContent.publishDate)}
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Flex>
              </Carousel.Slide>
            ))}
        </Carousel>

        <Group justify="center" mt={30} my={60}>
          <Button w={40} h={40} p={0} bg="#EAEAEA" color="#000" radius="lg" onClick={scrollToPrev}>
            <IconArrowLeft color="#000" stroke={1} />
          </Button>

          <Button w={40} h={40} p={0} bg="#EAEAEA" color="#000" radius="lg" onClick={scrollToNext}>
            <IconArrowRight color="#000" stroke={1} />
          </Button>
        </Group>
      </Box>
    </Box>
  );
};

export default LatestEducationNews;
