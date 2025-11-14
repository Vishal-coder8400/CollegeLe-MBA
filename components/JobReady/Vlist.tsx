'use client';

import { useEffect, useRef } from 'react';
import { Box, Image, Text } from '@mantine/core';
import { data } from './jobReadyData';
import classes from './JobReady.module.css';

const VerticalScrollingList = ({ data }: { data: { info: string; icon: string }[] }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const clonedData = [...data, ...data];
  const scrollSpeed = 50;

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const totalScrollHeight = scrollContainer.scrollHeight / 2;
      let scrollTop = 0;

      const scroll = () => {
        scrollTop += 2;
        if (scrollTop >= totalScrollHeight) {
          scrollTop = 0;
        }
        scrollContainer.scrollTop = scrollTop;
      };

      const interval = setInterval(scroll, scrollSpeed);

      return () => clearInterval(interval);
    }
  }, [clonedData]);

  return (
    <Box
      ref={scrollContainerRef}
      style={{
        height: '500px',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '8px',
      }}
    >
      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          rowGap: '20px',
          columnGap: '20px',
        }}
      >
        {clonedData.map((item, index) => (
          <Box
            key={index}
            className={classes.item__box}
            p={{ base: 5, sm: 20 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#2A2A2A',
              color: '#FFF',
              borderRadius: '8px',
            }}
          >
            <Box>
              <Image src={item.icon} />
            </Box>
            <Text mt={20}>{item.info}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default function VList() {
  return (
    <Box
      style={{
        padding: ' 0 1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <VerticalScrollingList data={data} />
    </Box>
  );
}
