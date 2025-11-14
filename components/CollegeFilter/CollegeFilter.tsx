'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { IconSearch } from '@tabler/icons-react';
import { useSelector } from 'react-redux';
import {
  Box,
  Checkbox,
  Flex,
  Paper,
  ScrollArea,
  Text,
  TextInput,
  UnstyledButton,
} from '@mantine/core';
import { RootState } from '@/lib/store/store';
import { indianStates } from './filterData';
import classes from './CollegeFilter.module.css';

const CollegeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const state = searchParams.get('state');
  const degree = searchParams.get('degree');
  const city = searchParams.get('city');
  const stream = searchParams.get('stream');

  const [activeState, setActiveState] = useState<string[]>([state || '']);
  const [activeDegree, setActiveDegree] = useState<string[]>([degree || '']);
  const [activeCity, setActiveCity] = useState<string[]>([city || '']);
  const [activeStreams, setActiveStreams] = useState<string[]>([stream || '']);

  const { filterCities, filterStreams, filterDegrees } = useSelector(
    (state: RootState) => state.colleges
  );
  console.log(filterDegrees);
  useEffect(() => {
    setActiveDegree([degree || '']);
    setActiveState([state || '']);
    setActiveCity([city || '']);
    setActiveStreams([stream || '']);
  }, [state, degree, stream, city]);

  const handleDegreeChange = (newDegree: string[]) => {
    setActiveDegree(newDegree);
    const newQuery = new URLSearchParams(searchParams.toString());
    newQuery.delete('degree');
    newDegree.forEach((el) => {
      if (el !== '') {
        newQuery.append('degree', el);
      }
    });
    router.push(`/search?${newQuery.toString()}`, { scroll: false });
  };

  const handleStateChange = (newState: string[]) => {
    const newQuery = new URLSearchParams(searchParams.toString());
    newQuery.delete('state');
    if (newState.length > 0) {
      const newOneState = [newState[1]];
      setActiveState(newOneState);

      newOneState.forEach((el) => {
        if (el !== '') {
          newQuery.append('state', el);
        }
      });
    } else {
      setActiveState([]);
    }

    router.push(`/search?${newQuery.toString()}`, { scroll: false });
  };

  const handleCityChange = (newCity: string[]) => {
    const newQuery = new URLSearchParams(searchParams.toString());
    newQuery.delete('city');
    if (newCity.length > 0) {
      const newOneCity = [newCity[1]];
      setActiveCity(newOneCity);

      newOneCity.forEach((el) => {
        if (el !== '') {
          newQuery.append('city', el);
        }
      });
    } else {
      setActiveCity([]);
    }

    router.push(`/search?${newQuery.toString()}`, { scroll: false });
  };

  const handleStreamChange = (newStream: string[]) => {
    setActiveStreams(newStream);
    const newQuery = new URLSearchParams(searchParams.toString());
    newQuery.delete('stream');
    newStream.forEach((el) => {
      if (el !== '') {
        newQuery.append('stream', el);
      }
    });
    router.push(`/search?${newQuery.toString()}`, { scroll: false });
  };

  const removeFilters = () => {
    router.push('/search', { scroll: false });
    setActiveCity([]);
    setActiveDegree([]);
    setActiveState(['']);
    setActiveStreams([]);
  };

  return (
    <Box my={20}>
      <Text fz={{ base: 24, sm: 32 }} c="#282828" fw={500} mr={30}>
        Filters
      </Text>
      <Flex direction="column">
        <Box flex={1}>
          <Text fz={14} mt={15} c="#A0AEC0">
            Degree
          </Text>
          <Paper
            mah={273}
            maw={{ base: 'auto', lg: 172 }}
            bd="1px solid #CED2D6"
            radius={10}
            p={10}
          >
            <TextInput radius="xl" mb={10} placeholder="Search" leftSection={<IconSearch />} />
            <ScrollArea type="always" h={170} offsetScrollbars scrollbarSize={8}>
              <Checkbox.Group value={activeDegree} onChange={handleDegreeChange}>
                {filterDegrees.map((el: { label: string; value: string }, index: number) => (
                  <Checkbox
                    classNames={{ label: classes.label }}
                    size="xs"
                    my={6}
                    color="#171923"
                    key={index}
                    c="#171923"
                    fz={14}
                    value={el.value}
                    label={el.label}
                  />
                ))}
              </Checkbox.Group>
            </ScrollArea>
          </Paper>
        </Box>
        <Box flex={1}>
          <Text fz={14} mt={15} c="#A0AEC0">
            States
          </Text>
          <Paper
            mah={273}
            maw={{ base: 'auto', lg: 172 }}
            bd="1px solid #CED2D6"
            radius={10}
            p={10}
          >
            <TextInput radius="xl" mb={10} placeholder="Search" leftSection={<IconSearch />} />
            <ScrollArea type="always" h={170} offsetScrollbars scrollbarSize={8}>
              <Checkbox.Group value={activeState} onChange={handleStateChange}>
                {indianStates.map((el: { label: string; value: string }, index: number) => (
                  <Checkbox
                    classNames={{ label: classes.label }}
                    size="xs"
                    my={6}
                    color="#171923"
                    key={index}
                    c="#171923"
                    fz={14}
                    value={el.value}
                    label={el.label}
                  />
                ))}
              </Checkbox.Group>
            </ScrollArea>
          </Paper>
        </Box>
        <Box flex={1}>
          <Text fz={14} mt={15} c="#A0AEC0">
            Cities
          </Text>
          <Paper
            mah={273}
            maw={{ base: 'auto', lg: 172 }}
            bd="1px solid #CED2D6"
            radius={10}
            p={10}
          >
            <TextInput radius="xl" mb={10} placeholder="Search" leftSection={<IconSearch />} />
            <ScrollArea type="always" h={170} offsetScrollbars scrollbarSize={8}>
              <Checkbox.Group value={activeCity} onChange={handleCityChange}>
                {filterCities.map((el: { label: string; value: string }, index: number) => (
                  <Checkbox
                    classNames={{ label: classes.label }}
                    size="xs"
                    my={6}
                    color="#171923"
                    key={index}
                    c="#171923"
                    fz={14}
                    value={el.value}
                    label={el.label}
                  />
                ))}
              </Checkbox.Group>
            </ScrollArea>
          </Paper>
        </Box>
        <Box flex={1}>
          <Text fz={14} mt={15} c="#A0AEC0">
            Stream
          </Text>
          <Paper
            mah={273}
            maw={{ base: 'auto', lg: 172 }}
            bd="1px solid #CED2D6"
            radius={10}
            p={10}
          >
            <TextInput radius="xl" mb={10} placeholder="Search" leftSection={<IconSearch />} />
            <ScrollArea type="always" h={170} offsetScrollbars scrollbarSize={8}>
              <Checkbox.Group value={activeStreams} onChange={handleStreamChange}>
                {filterStreams.map((el: { label: string; value: string }, index: number) => (
                  <Checkbox
                    classNames={{ label: classes.label }}
                    size="xs"
                    my={6}
                    color="#171923"
                    key={index}
                    c="#171923"
                    fz={14}
                    value={el.value}
                    label={el.label}
                  />
                ))}
              </Checkbox.Group>
            </ScrollArea>
          </Paper>
        </Box>
        <UnstyledButton onClick={removeFilters} c="#A0AEC0" fz={12} ta="center">
          Remove filters
        </UnstyledButton>
      </Flex>
    </Box>
  );
};
export default CollegeFilter;
