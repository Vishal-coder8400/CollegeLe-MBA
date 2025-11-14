'use client';

import { Box, ScrollArea, Text, Title } from '@mantine/core';
import classes from './ChooseRightCollege.module.css';

const data = [
  { title: 'Get Your Career Match', img: '/assets/ChooseRightCollege/box_1.png' },
  { title: 'Track Applications in one place', img: '/assets/ChooseRightCollege/box_2.png' },
  { title: 'Apply with one form', img: '/assets/ChooseRightCollege/box_3.png' },
  { title: 'Talk to Admission Experts', img: '/assets/ChooseRightCollege/box_4.png' },
  { title: 'Get Exciting Awards', img: '/assets/ChooseRightCollege/box_5.png' },
  { title: 'Easy Apply in 5 mins', img: '/assets/ChooseRightCollege/box_6.png' },
];

const ChooseRightCollege = () => {
  return (
    <Box className={classes.main} my={{ base: 50, sm: 100 }}>
      <Box className={classes.box__data} px={{ base: 20, sm: 0 }} ta="center">
        <Title fz={{ base: 24, sm: 48 }}>
          Choosing the right college can be <span className="theme__red">confusing</span>
        </Title>
        <Text c="#353E5C" mt={30} fz={{ base: 14, sm: 14 }}>
          From choosing the right college to navigating applications, we’re dedicated to supporting
          you at each step. With CollegeLe, gain the confidence and guidance needed for a successful
          journey.
        </Text>
      </Box>
      <ScrollArea
        offsetScrollbars
        scrollbarSize={6}
        scrollHideDelay={500}
        w={{ base: '90%', xl: '1350px' }}
        mx="auto"
      >
        <Box className={classes.box__cards_main} pt={60}>
          {data.map(({ title, img }: { title: string; img: string }, index: number) => (
            <Box key={index} style={{ backgroundImage: `url(${img})` }} className={classes.card}>
              <Text className={classes.card__title} c="#fff">
                {title}
              </Text>
            </Box>
          ))}
        </Box>
      </ScrollArea>
    </Box>
  );
};

export default ChooseRightCollege;
