'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Box } from '@mantine/core';
import {
  Application,
  ApplicationHowItWorks,
  ApplicationRightCollege,
  DiscoverCareer,
  FAQs,
  Showcase,
} from '@/components';
// import ApplicationForm from '@/components/ApplicationForm/ApplicationForm';
import { faqs } from '@/components/FAQs/faqsData';
import { fetchBlogs } from '@/lib/api/blogAPI';
import { AppDispatch } from '@/lib/store/store';
import ExploreUniversities from '@/components/ExploreUniversities/ExploreUniversities';
import CourseSlider from '@/components/Courses/CourseSlider';
import HumSection from '@/components/HumSection/HumSection';
import MBAUniversities from '@/components/MBAUniversities/MBAUniversities';
import CounsellingBanner from '@/components/MbaSections/CounsellingBanner';
import PlacementStats from '@/components/MbaPlacementStats/PlacementStats';
import HowCncHelps from '@/components/MbaHowCncHelps/HowCncHelps';

export default function HomePage() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <>
      <Application />
      <MBAUniversities/>
      <ApplicationRightCollege />
      <DiscoverCareer />
      <CourseSlider />
      <HumSection />
       <ExploreUniversities />
      <Showcase />
      <ApplicationHowItWorks />
      <CounsellingBanner/>
      <PlacementStats/>
      <HowCncHelps/>
      <FAQs data={faqs} />
    </>
  );
}
