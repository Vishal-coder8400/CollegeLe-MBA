'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconArrowRight, IconBrandWhatsapp } from '@tabler/icons-react';
import { Box, Button, Image, Text } from '@mantine/core';
import classes from './DiscoverCareer.module.css';

const DiscoverCareer = () => {
  const router = usePathname();
  const isApplicationPath = router === '/application';

  return (
    <Box bg={isApplicationPath ? 'transparent' : '#191919'} p={30} my={60}>
      <Box className={classes.main__box}>
        <Image
          src="/assets/DiscoverCareer.png"
          fit="contain"
          h={270}
          className={classes.box__image}
        />
        <Box className={classes.box__text}>
          <Text c="#fff" fz={{ base: 24, sm: 30 }} fw={600} lh="32px">
            Confused about the best career choice for you?
          </Text>
          <Text c="#fff" fw={500} fz={{ base: 14, sm: 16 }} className={classes.info}>
            Discover your path with Career Compass, our personalised career recommendation tool.
            Explore your skills, personality, and interests for career advice and guidance designed
            just for you.
          </Text>
        </Box>
        <Box className={classes.button__group}>
          <Button
            component={Link}
            href="https://wa.me/7042833800"
            leftSection={<IconBrandWhatsapp />}
            rightSection={<IconArrowRight size="16px" />}
            fz={18}
            size="xl"
            radius="xl"
            className={classes.button}
            w={250}
          >
            Whatsapp Expert
          </Button>
          <Button
            rightSection={<IconArrowRight size="16px" />}
            component={Link}
            href="tel:+917042833800"
            fz={18}
            size="xl"
            radius="xl"
            color="#fff"
            variant="outline"
            w={250}
          >
            +91 7042833800
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DiscoverCareer;
