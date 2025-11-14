'use client';

import { useState } from 'react';
import { Accordion, Box, Image, Title } from '@mantine/core';
import classes from './FAQs.module.css';

const FAQs = ({ data }: { data: any }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  return (
    <Box my={100}>
      <Box className={classes.accordion__main} bg="#0a0a0a">
        <Title className={classes.main__title} m={{ base: 30, sm: 60 }}>
          Frequently Asked Questions
        </Title>
        <Accordion
          variant="separated"
          value={activeItem}
          onChange={setActiveItem}
          chevron={
            <Image src="assets/blog_chevron.png" className={classes.chevron__icon} alt="chevron" />
          }
          classNames={{ item: classes.item, chevron: classes.chevron }}
        >
          {data?.map((el: any, index: number) => (
            <Accordion.Item
              key={index}
              className={`${classes.item} ${activeItem === el.question ? classes.activeItem : ''}`}
              value={el.question}
            >
              <Accordion.Control c="#fff">{el?.question}</Accordion.Control>
              <Accordion.Panel c="#E5E5E5">{el?.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};
export default FAQs;
