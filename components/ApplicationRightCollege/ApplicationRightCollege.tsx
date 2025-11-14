import {
  IconAffiliate,
  IconBook,
  IconBriefcase,
  IconClipboardList,
  IconGift,
  IconHelpCircle,
} from '@tabler/icons-react';
import { Card, Container, Flex, SimpleGrid, Text, Title } from '@mantine/core';
import classes from './FeaturesCards.module.css';

const mockdata = [
  {
    title: 'Wide Range of Colleges',
    description: 'Explore diverse programs and institutions.',
    color: '#dcfdf6',
    iconbg: '#87ddd4',
    icon: IconBriefcase,
  },
  {
    title: 'Personalized Recommendations',
    description: 'Tailored college suggestions based on your preferences.',
    color: '#e1ecfe',
    iconbg: '#9cc1ff',
    icon: IconClipboardList,
  },
  {
    title: 'Career-Focused Education',
    description: 'Colleges with strong industry ties and career support.',
    color: '#fef7d1',
    iconbg: '#fece82',
    icon: IconBook,
  },
  {
    title: 'Alumni Network',
    description: 'Connect with successful alumni for mentorship.',
    color: '#f0e6ff', // Light purple
    iconbg: '#b388ff', // Medium purple
    icon: IconAffiliate,
  },
  {
    title: 'Ongoing Support',
    description: 'Assistance even after enrollment for smooth transitions.',
    color: '#ffe6e6', // Light pink
    iconbg: '#ff8a98', // Coral pink
    icon: IconHelpCircle,
  },
  {
    title: 'Exclusive Offers',
    description: 'Special deals and discounts for applicants.',
    color: '#e6f7ff', // Light blue
    iconbg: '#64b5f6', // Sky blue
    icon: IconGift,
  },
];

const ApplicationRightCollege = () => {
  const features = mockdata.map((feature) => (
    <Card
      bg={feature.color}
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      px="xl"
    >
      <Flex w="fit-content" p={10} style={{ borderRadius: 40 }} bg={feature.iconbg}>
        <feature.icon size={25} stroke={2} color="#fff" />
      </Flex>
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Why Choose <span className="theme__red">CollegeLe</span> ?
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        From choosing the right college, to getting the right career, we are here to help you every
        step of the way. We are a team of experts who are dedicated to helping you find the right
        college and career path.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
};

export default ApplicationRightCollege;
