'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { Box, Button, Grid, Group, Rating, Select, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { RootState } from '@/lib/store/store';
import client from '@/utils/sanity';

type Review = {
  name: string;
  title: string;
  category: string;
  rating: number;
  reviewInfo: string;
};

const initialValues: Review = {
  name: '',
  title: '',
  category: 'Overall',
  rating: 0,
  reviewInfo: '',
};

const validationScheme = {
  name: (value: string) => (value.length !== 0 ? null : 'Invalid Name'),
  reviewInfo: (value: string) => (value.length !== 0 ? null : 'Add review'),
};
const AddReview = () => {
  const searchParams = useSearchParams();
  const collegeName = searchParams.get('name');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { colleges: collegeList } = useSelector((state: RootState) => state.colleges);
  const form = useForm({
    initialValues,
    validate: validationScheme,
  });
  const submitHandler = async () => {
    const collegeId = collegeList.filter((el) => el.shortName === collegeName)[0]._id;
    const newData = {
      ...form.values,
      date: new Date().toISOString().split('T')[0],
      _key: `${Date.now()}-${Math.random()}`,
    };
    try {
      setIsLoading(true);
      await client
        .patch(collegeId)
        .setIfMissing({ reviews: { reviewList: [] } })
        .append('reviews.reviewList', [newData])
        .commit();
    } catch (error) {
      console.error('Error adding review:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Grid.Col span={12} bd="1px solid #D2D2D2" style={{ borderRadius: 8 }} my={10}>
      <form onSubmit={form.onSubmit(submitHandler)}>
        <Group grow>
          <TextInput
            label="Name"
            required
            key={form.key('name')}
            {...form.getInputProps('name')}
            onChange={(event) => form.setFieldValue('name', event.target.value)}
          />
          <TextInput
            label="Title"
            key={form.key('title')}
            {...form.getInputProps('title')}
            onChange={(event) => form.setFieldValue('title', event.target.value)}
          />
        </Group>
        <Group my={10} grow align="center">
          <Select
            key={form.key('category')}
            {...form.getInputProps('category')}
            onChange={(value) => form.setFieldValue('category', value || 'Overall')}
            label="Review Category"
            data={['Overall', 'Infrastructure', 'Faculty', 'Placement']}
          />
          <Box>
            <Rating
              key={form.key('rating')}
              {...form.getInputProps('rating')}
              onChange={(value) => form.setFieldValue('rating', value)}
              defaultValue={3}
              size="xl"
              color="#F24B04"
            />
          </Box>
        </Group>
        <Textarea
          required
          my={10}
          key={form.key('reviewInfo')}
          {...form.getInputProps('reviewInfo')}
          onChange={(event) => form.setFieldValue('reviewInfo', event.target.value)}
          w="-webkit-fill-available"
          resize="vertical"
          label="Your review"
        />
        <Button loading={isLoading} my={10} type="submit" color="#F24B04" fullWidth>
          {' '}
          Add review
        </Button>
      </form>
    </Grid.Col>
  );
};
export default AddReview;
