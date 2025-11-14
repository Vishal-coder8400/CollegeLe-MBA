import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogSlice';
import collegeReducer from './collegeSlice';

export const store = configureStore({
  reducer: {
    colleges: collegeReducer,
    blogs: blogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
