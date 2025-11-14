'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { Box, Button, Container, Flex, Image, SimpleGrid, Text, Title } from '@mantine/core';
import { RootState } from '@/lib/store/store';
import { Blog } from '@/utils/blogType';
import { convertDate } from '@/utils/helper';
import { urlForBlogs } from '@/utils/sanity';
import HorizontalScroll from '../HorizontalScroll';
import { categories } from './blogsData';
import classes from './Blogs.module.css';

const Blogs = () => {
  const [active, setActive] = useState<string>(categories[0]);
  const [isMore, setIsMore] = useState<boolean>(false);
  const [blogList, setBlogList] = useState<Blog[]>([]);
  const { blogs } = useSelector((state: RootState) => state.blogs);
  const router = useRouter();
  useEffect(() => {
    setBlogList(blogs);
  }, [blogs]);

  const handleActive = (el: string) => {
    let filteredList;
    setActive(el);
    if (el === categories[1]) {
      filteredList = blogs.filter((el) => el.mainContent.category === 'exam_updates');
    } else if (el === categories[2]) {
      filteredList = blogs.filter((el) => el.mainContent.category === 'trending_topics');
    } else if (el === categories[3]) {
      filteredList = blogs.filter((el) => el.mainContent.category === 'college_guides');
    } else if (el === categories[4]) {
      filteredList = blogs.filter((el) => el.mainContent.category === 'tech_in_education');
    } else {
      filteredList = blogs;
    }
    setBlogList(filteredList);
    console.log(active);
  };

  const isMoreThanThree = blogList.length > 3;

  return (
    <Container size="lg">
      <Box my={100}>
        <Box ta="center" px={35}>
          <Title fz={{ base: 32, sm: 48 }} c="#191919">
            Find us on the Internet
          </Title>
          <Text maw={600} mx="auto" my={30} c="#353E5C">
            Unlock endless possibilities with CollegeLe. Explore top-tier colleges, key entrance
            exams, and personalized programs designed to match your career aspirations. Whether
            you're beginning your journey or refining your options, our platform offers the tools,
            insights, and expert guidance to help you make confident decisions in your chosen field.
          </Text>
        </Box>
        <HorizontalScroll categories={categories} maxWidth={900} handleActive={handleActive} />

        <SimpleGrid maw="fit-content" mx="auto" cols={{ base: 1, sm: 2, lg: 3 }}>
          {(isMore ? blogList : blogList.slice(0, 3)).map((el, index: number) => (
            <Flex
              key={index}
              maw={340}
              direction="column"
              className={classes.box}
              bd="1px solid #e1e4ed"
            >
              <Image
                src={
                  el.mainContent?.coverImage
                    ? urlForBlogs(el.mainContent.coverImage)?.url()
                    : '/assets/blogs/blog_1.png'
                }
                height={200}
                fit="unset"
                alt={el?.mainContent?.title}
              />
              <Flex flex={1} p={20} justify="space-between" direction="column">
                <Box>
                  <Text fz={{ base: 16, sm: 20 }} lh="22.4px" c="#282828" fw={500} lineClamp={2}>
                    {el.mainContent?.title}
                  </Text>
                  <Text c="#6D758F" my={10} lineClamp={3}>
                    {el.mainContent.shortInfo}
                  </Text>
                </Box>
                <Flex
                  style={{ borderTop: '1px solid #e1e4ed' }}
                  align="center"
                  justify="space-between"
                  mt={20}
                  pt={10}
                >
                  <Button
                    c="#F24B04"
                    fw={500}
                    p={0}
                    fz={14}
                    onClick={() => router.push(`/blogs/${el.mainContent.blogLink}`)}
                    variant="transparent"
                  >
                    Continue Reading
                  </Button>
                  <Text c="#6D758F" fz={14} fw={400}>
                    {convertDate(el.mainContent.publishDate)}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
        <Button
          display={isMoreThanThree ? 'block' : 'none'}
          onClick={() => setIsMore(!isMore)}
          fw={500}
          variant="transparent"
          mx="auto"
          ta="center"
          c="#F24B04"
          my={10}
          style={{ cursor: 'pointer' }}
        >
          {!isMore ? 'Show More' : 'Show Less'}
        </Button>
      </Box>
    </Container>
  );
};

export default Blogs;
