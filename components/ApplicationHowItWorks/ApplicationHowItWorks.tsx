import { Container, Flex, Text, Title } from '@mantine/core';
import classes from './ApplicationHowItWorks.module.css';

const mockdata = [
  {
    title: 'Register',
    description: 'Fill out the form with your details & preferences.',
  },
  {
    title: 'Connect',
    description: 'Our Expert counsellor will connect with you.',
  },
  {
    title: 'Expert Counselling',
    description: "We'll help you with the best college options.",
  },
  {
    title: 'Succeed',
    description: 'Get admitted to your dream college.',
  },
];

const ApplicationHowItWorks = () => {
  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        How it <span className="theme__red">Works</span>
      </Title>

      <Text c="dimmed" className={classes.description} ta="center">
        Our simple 4-steps process to help you get admission in your dream college.
      </Text>

      <Flex mt={40} direction={{ base: 'column', md: 'row' }}>
        {mockdata.map((el, index: number) => (
          <Flex
            ta="center"
            key={index}
            direction="column"
            align="center"
            justify="center"
            p={20}
            m={10}
          >
            <Flex
              w={60}
              h={60}
              align="center"
              justify="center"
              c="#ae7ecb"
              fz={20}
              fw={600}
              bg="#fbf6fc"
              p={10}
              style={{ borderRadius: 100 }}
            >
              {index + 1}
            </Flex>
            <Text my={10} c="dimmed" fw={600} fz={20}>
              {el.title}
            </Text>
            <Text c="RGBA(0,0,0,0.8)">{el.description}</Text>
          </Flex>
        ))}
      </Flex>
    </Container>
  );
};

export default ApplicationHowItWorks;
