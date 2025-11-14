import { Button, Container, Group, Select, TextInput, Title } from '@mantine/core';
import { levels, stream } from '../ContactForm/ContactForm';
import classes from './CollegePredict.module.css';

const CollegePredict = () => {
  return (
    <Container bg="#0A0A0A" size="xl" style={{ borderRadius: 12 }} ta="center" py={100}>
      <Title fz={{ base: 24, sm: 48 }} fw={600} c="#fff" mb={20}>
        Predict your chances for admission in IIT Madras
      </Title>
      <Group justify="center" py={30}>
        <Select
          size="xl"
          w={160}
          fz={16}
          classNames={{
            input: classes.input,
            option: classes.option,
            root: classes.root,
          }}
          placeholder="Level"
          data={levels}
        />
        <Select
          size="xl"
          w={160}
          fz={16}
          classNames={{
            input: classes.input,
            option: classes.option,
            root: classes.root,
          }}
          placeholder="Course"
          data={stream}
        />
        <Select
          size="xl"
          w={160}
          fz={16}
          classNames={{
            input: classes.input,
            option: classes.option,
            root: classes.root,
          }}
          placeholder="Select Category"
          data={['GEN', 'SC', 'ST', 'OBC']}
        />
        <TextInput
          type="number"
          size="xl"
          w={160}
          fz={16}
          placeholder="Enter Your Rank"
          classNames={{
            input: classes.input,
            root: classes.root,
          }}
        />
        <Button color="#F24B04" size="xl" fz={16} fw={400} radius="md">
          Predict My Chances
        </Button>
      </Group>
    </Container>
  );
};
export default CollegePredict;
