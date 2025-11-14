import { Flex, Image, Paper, Text, Title } from '@mantine/core';
import classes from './OurStory.module.css';

const OurStory = () => {
  return (
    <Paper bg="#191919" py={60} px={{ base: 0, sm: 20 }} radius={8}>
      <Flex
        maw={1050}
        // h={471}
        mih={471}
        m="0 auto"
        className={classes.box__main}
        direction="column"
        align="center"
        justify="center"
        c="#fff"
        pt={40}
        px={{ base: 10, sm: 60 }}
        ta="center"
      >
        <Title fz={48} mb={40}>
          Our Story
        </Title>
        <Text fw={600}>
          CollegeLe was born from a passion for helping students navigate the often complex path to
          higher education. Our founders saw the need for a platform that provides personalized,
          reliable support as students make crucial decisions about their futures. With backgrounds
          in education and technology, they set out to create a solution that simplifies college
          research, connects students to opportunities, and eases the application process.
        </Text>
        <Image mt={50} src="/assets/ourStory.png" fit="contain" h={267} />
      </Flex>
    </Paper>
  );
};

export default OurStory;
