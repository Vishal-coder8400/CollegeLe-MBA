'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '@mantine/core';
import {
  AboutCollege,
  AdmissionInfo,
  CollegeCourses,
  CollegeCutOff,
  CollegeDetailView,
  CollegeHerobox,
  CollegeInfo,
  CollegePlacements,
  CollegeRanking,
  CollegeReviews,
  CollegeUpdates,
  FAQs,
  TopRecruiters,
} from '@/components';
import { fetchColleges } from '@/lib/api/collegesAPI';
import { AppDispatch, RootState } from '@/lib/store/store';
import { College } from '@/utils/collegeType';

function CollegePage() {
  const searchParams = useSearchParams();
  const dispatch: AppDispatch = useDispatch();
  const [college, setCollege] = useState<College>();
  const name = searchParams.get('name');
  const { colleges: collegeList } = useSelector((state: RootState) => state.colleges);

  useEffect(() => {
    const filterCollege = collegeList.filter((el) => el.shortName?.trim() === name);
    if (filterCollege.length === 0) {
      dispatch(fetchColleges());
    }
    setCollege(filterCollege[0]);
  }, [collegeList, searchParams]);
  return (
    <Suspense>
      <CollegeHerobox data={college?.mainContent} />
      <CollegeUpdates data={college?.updates} />
      <AboutCollege data={college?.collegeAbout} />
      <CollegeInfo data={college?.collegeInfo} />
      <AdmissionInfo data={college?.admissionInfo || ''} />
      <CollegeCourses data={college?.courses} />
      <CollegePlacements data={college?.placementStats} />
      <TopRecruiters data={college?.recruiters} />
      {/* <CollegePredict /> */}
      {college?.cutOff?.isCutoff && <CollegeCutOff data={college?.cutOff} />}
      <CollegeDetailView />
      <CollegeReviews data={college?.reviews} />
      <FAQs data={college?.faqs} />
      <CollegeRanking data={college?.rankingInfo || ''} />
    </Suspense>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<Loader color="#DA4404" type="dots" w="100%" mx="auto" my={100} />}>
      <CollegePage />
    </Suspense>
  );
}
