'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  ScrollArea,
  SegmentedControl,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { RootState } from '@/lib/store/store';
import { Blog } from '@/utils/blogType';
import { convertDate } from '@/utils/helper';
import { urlForBlogs } from '@/utils/sanity';
import classes from './LatestNews.module.css';

const tabData = [
  { label: 'All', value: 'all' },
  { label: 'Exam Updates', value: 'exam_updates' },
  { label: 'Trending Topics', value: 'trending_topics' },
  { label: 'College Guides', value: 'college_guides' },
  { label: 'Tech in Education', value: 'tech_in_education' },
];

const LatestNews = () => {
  const [value, setValue] = useState<string>(tabData[0].value);
  const [isMore, setIsMore] = useState<boolean>(false);
  const [blogList, setBlogList] = useState<Blog[]>([]);
  const { blogs } = useSelector((state: RootState) => state.blogs);
  const router = useRouter();
  useEffect(() => {
    setBlogList(blogs);
  }, [blogs]);

  useEffect(() => {
    let filteredList;
    if (value === 'all') {
      filteredList = blogs;
    } else {
      filteredList = blogs.filter((el) => el.mainContent.category === value);
    }
    setBlogList(filteredList);
    setIsMore(false);
  }, [value]);
  const isMoreThanThree = blogList.length > 3;

  return (
    <Box my={100}>
      <Flex
        align="center"
        wrap="wrap"
        direction={{ base: 'column', lg: 'row' }}
        justify={{ base: 'center', lg: 'space-between' }}
        my={50}
      >
        <Title c="#191919" fz={{ base: 24, sm: 40 }} my={10}>
          Latest News articles
        </Title>
        <ScrollArea maw="97%" scrollbarSize={7}>
          <SegmentedControl
            value={value}
            onChange={setValue}
            my={10}
            fullWidth
            withItemsBorders={false}
            size="md"
            color="#F24B04"
            bg="#fff"
            data={tabData}
          />
        </ScrollArea>
      </Flex>
      <Divider my="md" />
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
                  onClick={() => {
                    const route = `/blogs/${el.mainContent.blogLink}`;
                    router.push(route);
                  }}
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
  );
};

export default LatestNews;
