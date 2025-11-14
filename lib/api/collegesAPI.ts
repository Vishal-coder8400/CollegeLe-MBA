import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '@/utils/sanity';
import { setColleges } from '../store/collegeSlice';
import { AppDispatch, RootState } from '../store/store';

export const fetchColleges = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch; state: RootState }
>('colleges/fetch', async (_, { dispatch }) => {
  try {
    const colleges = await client.fetch(`
            *[_type == "college"] | order(_createdAt asc)
            `);
    dispatch(setColleges(colleges));
  } catch (error: any) {
    console.log(error);
  }
});
