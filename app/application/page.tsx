'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mantine/core';
import {
  Application,
  ApplicationHowItWorks,
  ApplicationRightCollege,
  DiscoverCareer,
  FAQs,
  Showcase,
} from '@/components';
import ApplicationForm from '@/components/ApplicationForm/ApplicationForm';
import { faqs } from '@/components/FAQs/faqsData';
import { fetchBlogs } from '@/lib/api/blogAPI';
import { AppDispatch } from '@/lib/store/store';

export default function HomePage() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <>
      <Application />
      <ApplicationRightCollege />
      <DiscoverCareer />
      <Showcase />
      <ApplicationHowItWorks />
      <Box my={20}>
        <ApplicationForm />
      </Box>

      <FAQs data={faqs} />
    </>
  );
}
