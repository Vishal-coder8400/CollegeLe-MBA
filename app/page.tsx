'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Blogs,
  ChooseRightCollege,
  DiscoverCareer,
  Exams,
  FindCollege,
  GroupButton,
  HomeHerobox,
  JobReady,
  RecommendedColleges,
  Testimonials,
} from '@/components';
import { fetchBlogs } from '@/lib/api/blogAPI';
import { AppDispatch } from '@/lib/store/store';

export default function HomePage() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <>
      <HomeHerobox />
      <Exams />
      <ChooseRightCollege />
      <GroupButton button_1="Start Application" button_2="Talk to College Expert" />
      <DiscoverCareer />
      <JobReady />
      <GroupButton button_1="Start Application" button_2="Talk to College Expert" />
      <FindCollege />
      <RecommendedColleges />
      <Blogs />
      <Testimonials />
    </>
  );
}
