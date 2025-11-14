import { Flex } from '@mantine/core';
import CollegeFilter from '../CollegeFilter';
import CollegesList from '../CollegesList';

const CollegeSearch = () => {
  return (
    <Flex
      maw={1200}
      direction={{ base: 'column', lg: 'row' }}
      my={50}
      mx={{ base: 10, lg: 'auto' }}
      // justify="space-between"
    >
      {/* //Filter */}
      <CollegeFilter />
      {/* College list */}
      <CollegesList />
    </Flex>
  );
};

export default CollegeSearch;

//Btech MBA PGDM Mtech BCA MCA
