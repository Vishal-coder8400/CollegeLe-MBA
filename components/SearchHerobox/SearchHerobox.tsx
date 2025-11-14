'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconSearch } from '@tabler/icons-react';
import { useSelector } from 'react-redux';
import { Autocomplete, Box, Button, Text, Title } from '@mantine/core';
import { RootState } from '@/lib/store/store';
import classes from './SearchHerobox.module.css';

const SearchHerobox = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const { collegesSearchList } = useSelector((state: RootState) => state.colleges);
  const autocompleteData = collegesSearchList
    .filter((college) => typeof college?.name === 'string')
    .map((college) => ({
      value: college.name,
    }))
    .filter((college, index, self) => index === self.findIndex((c) => c.value === college.value));
  const clickHandler = () => {
    if (value.length > 0) {
      const shortName = collegesSearchList.filter((el) => el.name === value)[0].shortName;
      router.push(`/college?name=${shortName}`);
    }
  };

  return (
    <Box className={classes.main}>
      <Box maw={1100} h="100%" c="#fff" mx="auto" pt={60} px={20}>
        <Title>Find Your Perfect College</Title>
        <Text my={30}>
          Explore top colleges tailored to your goals, budget, and location preferences.
        </Text>
        <Autocomplete
          size="lg"
          radius="xl"
          data={autocompleteData}
          value={value}
          onChange={setValue}
          placeholder="Search Colleges, exams and much more..."
          leftSection={<IconSearch />}
          rightSectionWidth={100}
          classNames={{ section: classes.section }}
          rightSection={
            <Button onClick={clickHandler} className="cursor" color="#F24B04" radius="xl">
              Search
            </Button>
          }
        />
      </Box>
    </Box>
  );
};

export default SearchHerobox;
