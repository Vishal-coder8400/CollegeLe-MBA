import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { College } from '@/utils/collegeType';

const getUniqueCities = (cities: string[]): { label: string; value: string }[] => {
  return Array.from(
    new Set(cities.filter((city) => city).map((city) => city.trim().toLowerCase()))
  ).map((city) => {
    const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);
    return { label: formattedCity, value: formattedCity };
  });
};

const getUniqueStreams = (streams: string[][]): { label: string; value: string }[] => {
  return Array.from(
    new Set(
      streams
        .flat()
        .filter((stream) => stream)
        .map((stream) => stream.trim().toLowerCase())
    )
  ).map((stream) => {
    const formattedStream = stream.charAt(0).toUpperCase() + stream.slice(1);
    return { label: formattedStream, value: formattedStream };
  });
};

const getUniqueDegrees = (arrays: { label: string; url: string }[][] | null | undefined) => {
  const seen = new Set();
  const uniqueDegrees: { label: string; value: string }[] = [];

  arrays?.flat().forEach((item) => {
    if (item && item.url) {
      const normalizedUrl = item.url.trim().toLowerCase();

      if (!seen.has(normalizedUrl)) {
        seen.add(normalizedUrl);
        uniqueDegrees.push({
          label: item.label,
          value: item.url,
        });
      }
    }
  });

  return uniqueDegrees;
};

interface Filters {
  city?: string;
  stream?: string[];
  degree?: string[];
  state?: string;
}
interface CollegeState {
  colleges: College[];
  collegesSearchList: { name: string; shortName: string }[];
  error: string | null;
  filters: Filters[];
  filterCities: { label: string; value: string }[];
  filterStreams: { label: string; value: string }[];
  filterDegrees: { label: string; value: string }[];
}

const initialState: CollegeState = {
  colleges: [],
  collegesSearchList: [],
  error: null,
  filters: [],
  filterCities: [],
  filterStreams: [],
  filterDegrees: [],
};

const collegeSlice = createSlice({
  name: 'college',
  initialState,
  reducers: {
    setColleges: (state, action: PayloadAction<College[]>) => {
      state.colleges = action.payload;

      // Extract data for collegesSearchList
      const extractedData = action.payload.map((college) => ({
        shortName: college.shortName,
        name: college.mainContent?.name,
      }));
      state.collegesSearchList = extractedData;

      // Extract filter fields from colleges
      const extractFilters = action.payload.map((college) => college?.filter_fields);
      // state.filters = extractFilters;

      // Extract cities and streams from filters
      const cities = extractFilters.map((el) => el?.city);
      const streams = extractFilters.map((el) => el?.stream);
      const degrees = extractFilters.map((el) => el?.degree);

      // Set unique cities and streams in the correct format
      state.filterCities = getUniqueCities(cities);
      state.filterStreams = getUniqueStreams(streams);
      state.filterDegrees = getUniqueDegrees(degrees);
    },
  },
});

export const { setColleges } = collegeSlice.actions;
export default collegeSlice.reducer;
