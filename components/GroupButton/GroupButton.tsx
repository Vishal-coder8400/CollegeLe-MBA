'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IconArrowRight } from '@tabler/icons-react';
import { motion } from 'motion/react';
import { Button, Group } from '@mantine/core';

const GroupButton = ({
  button_1,
  button_2,
  button_2_color,
}: {
  button_1: string;
  button_2: string;
  button_2_color?: string;
}) => {
  const router = useRouter();
  return (
    <motion.div>
      <Group justify="center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            m={10}
            rightSection={<IconArrowRight size="16px" />}
            fz={16}
            size="xl"
            radius="xl"
            color="#F24B04"
            w={{ base: 250, sm: 300 }}
            onClick={() => router.push('/application')}
          >
            {button_1}
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            m={10}
            component={Link}
            href="https://wa.me/7042833800"
            rightSection={<IconArrowRight size="16px" />}
            fz={16}
            size="xl"
            radius="xl"
            color={button_2_color ? button_2_color : '#3E3E3E'}
            variant="outline"
            w={{ base: 250, sm: 300 }}
          >
            {button_2}
          </Button>
        </motion.div>
      </Group>
    </motion.div>
  );
};
export default GroupButton;
