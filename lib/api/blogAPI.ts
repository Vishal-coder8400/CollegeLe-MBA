import { createAsyncThunk } from '@reduxjs/toolkit';
import { clientBlogs } from '@/utils/sanity';
import { setBlogs } from '../store/blogSlice';
import { AppDispatch, RootState } from '../store/store';

export const fetchBlogs = createAsyncThunk<void, void, { dispatch: AppDispatch; state: RootState }>(
  'blogs/fetch',
  async (_, { dispatch }) => {
    try {
      const blogs = await clientBlogs.fetch(`
            *[_type == "blogs"] | order(_createdAt asc)
            `);
      console.log({ blogs });
      dispatch(setBlogs(blogs));
    } catch (error: any) {
      console.log(error);
    }
  }
);
