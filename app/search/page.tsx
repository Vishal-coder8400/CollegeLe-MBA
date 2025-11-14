'use client';

import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CollegeSearch, SearchHerobox } from '@/components';
import { fetchColleges } from '@/lib/api/collegesAPI';
import { AppDispatch } from '@/lib/store/store';

export default function SearchPage() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchColleges());
  }, []);
  return (
    <Suspense>
      <SearchHerobox />
      <CollegeSearch />
    </Suspense>
  );
}
