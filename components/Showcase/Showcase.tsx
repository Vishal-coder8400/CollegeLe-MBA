import { Box, Text, Title } from '@mantine/core';
import classes from './Showcase.module.css';

const data = [
  {
    value: '1000 +',
    name: 'Partner Colleges',
  },
  {
    value: '50,000 +',
    name: 'Students Guided',
  },
  {
    value: '95%',
    name: 'Success Rate',
  },
  {
    value: '100 +',
    name: 'Expert Counsellors',
  },
];
const Showcase = () => {
  return (
    <Box my={80} className={classes.main}>
      <Title className={classes.heading} data-aos="zoom-in-up">
        Numbers that showcase our success
      </Title>
      <Box className={classes.mainBox} bg="#f9fafc" mx={{ base: 10, md: 'auto' }}>
        {data.map((el, index: number) => (
          <Box className={classes.box} key={index}>
            <Text c="#ae7ecb" fz={32} fw={600} my={10}>
              {el.value}
            </Text>
            <Text c="dimmed" fw={600}>
              {el.name}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Showcase;
