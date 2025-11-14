'use client';

import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { Anchor, Box, Breadcrumbs, Flex, Image } from '@mantine/core';
import { urlForBlogs } from '@/utils/sanity';
import RecentNews from '../RecentNews';

const items = [
  { title: 'Home', href: '/' },
  { title: 'Blogs', href: '/blogs' },
  { title: 'You are here', href: '#' },
].map((item, index) => (
  <Anchor component={Link} href={item.href} key={index}>
    {item.title}
  </Anchor>
));

export const portableTextComponents: any = {
  types: {
    image: ({ value }: { value: { asset: any; alt?: string; caption?: string } }) => {
      const imageUrl = urlForBlogs(value?.asset)?.url();
      const altText = value?.alt || 'Blog Image';

      return (
        <Box my={20}>
          <Image src={imageUrl} alt={altText} fit="contain" />
        </Box>
      );
    },
  },
};

const SingleBlog = ({ data }: { data: any }) => {
  console.log({ data });
  return (
    <>
      <Breadcrumbs my={40} separator=">" mt="xs">
        {items}
      </Breadcrumbs>
      <Flex
        wrap="wrap"
        justify="space-between"
        pos="relative"
        direction={{ base: 'column', lg: 'row' }}
      >
        <Box maw={742} flex={1}>
          <PortableText value={data?.content} components={portableTextComponents} />
        </Box>
        <Box
          w={{ base: '', lg: 400 }}
          h="fit-content"
          style={{
            position: 'sticky',
            top: 20,
          }}
        >
          <RecentNews />
        </Box>
      </Flex>
    </>
  );
};

export default SingleBlog;
