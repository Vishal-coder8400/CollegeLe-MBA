'use client';

import { useEffect, useRef, useState } from 'react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { Box, Button } from '@mantine/core';

const HorizontalScroll = ({
  categories,
  maxWidth,
  handleActive,
}: {
  categories: string[];
  maxWidth: number;
  handleActive: (el: string) => void;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string>(categories[0]);
  const [canScroll, setCanScroll] = useState<boolean>(false);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Amount to scroll
      const container = scrollContainerRef.current;

      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else if (direction === 'right') {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Check if the content is scrollable
  const checkScrollable = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setCanScroll(container.scrollWidth > container.clientWidth);
    }
  };

  // Run the check on initial render and on window resize
  useEffect(() => {
    checkScrollable();
    window.addEventListener('resize', checkScrollable);

    return () => {
      window.removeEventListener('resize', checkScrollable);
    };
  }, [categories]);

  return (
    <Box maw={maxWidth} my={40} mx={{ base: 10, md: 'auto' }}>
      <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        {canScroll && (
          <Button
            visibleFrom="sm"
            onClick={() => handleScroll('left')}
            variant="subtle"
            size="md"
            style={{
              borderRadius: '12px',
              color: '#000',
              padding: '0.5rem',
              height: '45px',
              width: '45px',
              backgroundColor: '#EAEAEA',
            }}
          >
            <IconArrowLeft />
          </Button>
        )}

        <Box
          ref={scrollContainerRef}
          style={{
            display: 'flex',
            justifyContent: `${canScroll ? 'start' : 'center'}`,
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            gap: '10px',
            padding: '10px 0',
            width: '100%',
            whiteSpace: 'nowrap',
          }}
          className="scroll-container"
        >
          {categories.map((category, index) => (
            <Box
              key={index}
              px={20}
              py={10}
              fw={500}
              display="inline-block"
              style={{
                borderRadius: '20px',
                backgroundColor: category === active ? '#009688' : '#e0e0e0',
                color: category === active ? '#fff' : '#585858',
                cursor: 'pointer',
              }}
              onClick={() => {
                setActive(category);
                handleActive(category);
              }}
            >
              {category}
            </Box>
          ))}
        </Box>

        {canScroll && (
          <Button
            visibleFrom="sm"
            onClick={() => handleScroll('right')}
            variant="subtle"
            size="md"
            style={{
              borderRadius: '12px',
              color: '#000',
              padding: '0.5rem',
              height: '45px',
              width: '45px',
              backgroundColor: '#EAEAEA',
            }}
          >
            <IconArrowRight />
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default HorizontalScroll;
