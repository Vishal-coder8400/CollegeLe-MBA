'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@mantine/core';
import { LatestEducationNews, LatestNews, SearchHerobox } from '@/components';
import { fetchBlogs } from '@/lib/api/blogAPI';
import { fetchColleges } from '@/lib/api/collegesAPI';
import { AppDispatch } from '@/lib/store/store';

export default function HomePage() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchColleges());
    dispatch(fetchBlogs());
  }, []);

  return (
    <>
      <SearchHerobox />
      <Container size="lg">
        <LatestEducationNews />
        <LatestNews />
        {/* <FeaturedBlogs />
        <LatestNews /> */}
      </Container>
    </>
  );
}
