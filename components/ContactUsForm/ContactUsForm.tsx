'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Flex,
  Group,
  Image,
  Select,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import client from '@/utils/sanity';
import { indianStates } from './states';
import classes from './COntactUsForm.module.css';

const initialValues = {
  name: '',
  email: '',
  phoneNumber: '',
  state: '',
  message: '',
};

const validationScheme = {
  name: (value: string) => (value.length !== 0 ? null : 'Invalid Name'),
  email: (value: string) => (value.length !== 0 ? null : 'Invalid email'),
  phoneNumber: (value: string) => (value.length === 10 ? null : 'Invalid phoneNumber'),
  message: (value: string) => (value.length !== 0 ? null : 'Invalid message'),
};

const ContactUsForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm({
    initialValues,
    validate: validationScheme,
  });

  const submitHandler = async () => {
    try {
      setIsLoading(true);
      await client.create({ ...form.values, _type: 'contactUsInfo' });
    } catch (error) {
      console.error('Error creating document:', error);
    } finally {
      setIsLoading(false);
      notifications.show({
        title: 'Done',
        message: "We'll contact you shortly",
      });
    }
  };

  return (
    <>
      <Flex wrap="wrap" bg="#1A191A" p={20} justify="space-around" align="center">
        <Box maw={345} c="#fff" my={20}>
          <Title fz={{ base: 30, sm: 48 }}>Have a Query? Let’s discuss</Title>
          <Text>
            Thank you for getting in touch! Kindly.
            <br />
            Fill the form, have a great day!
          </Text>
        </Box>
        <Box>
          <form onSubmit={form.onSubmit(submitHandler)}>
            <Group wrap="wrap" my={20} grow>
              <TextInput
                classNames={{ label: classes.label, input: classes.input }}
                required
                label="Name"
                placeholder="name goes here"
                key={form.key('name')}
                {...form.getInputProps('name')}
                onChange={(event) => form.setFieldValue('name', event.target.value)}
              />
              <TextInput
                classNames={{ label: classes.label, input: classes.input }}
                required
                type="email"
                label="Email"
                placeholder="email goes here"
                key={form.key('email')}
                {...form.getInputProps('email')}
                onChange={(event) => form.setFieldValue('email', event.target.value)}
              />
            </Group>
            <Group wrap="wrap" my={20} grow>
              <TextInput
                classNames={{ label: classes.label, input: classes.input }}
                required
                type="number"
                label="Phone Number"
                placeholder="enter phone number"
                key={form.key('phoneNumber')}
                {...form.getInputProps('phoneNumber')}
                onChange={(event) => form.setFieldValue('phoneNumber', event.target.value)}
              />
              <Select
                data={indianStates}
                classNames={{ label: classes.label, input: classes.input }}
                type="email"
                label="Select State"
                key={form.key('state')}
                {...form.getInputProps('state')}
                onChange={(value) => form.setFieldValue('state', value || indianStates[0])}
              />
            </Group>
            <Textarea
              classNames={{ label: classes.label, input: classes.input }}
              required
              my={20}
              label="Message"
              key={form.key('message')}
              {...form.getInputProps('message')}
              onChange={(event) => form.setFieldValue('message', event.target.value)}
            />
            <Button
              loading={isLoading}
              loaderProps={{ type: 'dots' }}
              type="submit"
              color="#f24b04"
              my={20}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Flex>
      <Flex align="center" my={40} justify="center" wrap="wrap">
        <Text m={20} fz={{ base: 24, sm: 36 }}>
          Follow us on
        </Text>

        <Box my={10}>
          <Button
            component={Link}
            href="https://x.com/college_le_?s=21"
            className={classes.social}
            mx={{ base: 8, sm: 10 }}
            data-aos="zoom-in"
          >
            <Image
              src="/assets/social/twitter.png"
              fit="contain"
              alt="twitter"
              width={45}
              height={45}
            />
          </Button>
          <Button
            component={Link}
            href="https://www.facebook.com/share/tEgRVCfvXw38Xju7/?mibextid=wwXIfr"
            className={classes.social}
            mx={{ base: 8, sm: 10 }}
            data-aos="zoom-out"
          >
            <Image
              src="/assets/social/facebook.png"
              fit="contain"
              alt="facebook"
              width={45}
              height={45}
            />
          </Button>
          <Button
            component={Link}
            href="https://wa.me/7042833800"
            className={classes.social}
            mx={{ base: 8, sm: 10 }}
            data-aos="zoom-out"
          >
            <Image
              src="/assets/social/whatsapp.png"
              fit="contain"
              alt="facebook"
              width={45}
              height={45}
            />
          </Button>
          <Button
            component={Link}
            href="https://www.linkedin.com/company/collegele/"
            className={classes.social}
            mx={{ base: 8, sm: 10 }}
            data-aos="zoom-in"
          >
            <Image
              src="/assets/social/linkedin.png"
              fit="contain"
              alt="linkedin"
              width={45}
              height={45}
            />
          </Button>{' '}
          <Button
            component={Link}
            href="https://www.instagram.com/collegele.officials/profilecard/?igsh=NmxsYjNyY3IyOWJv"
            className={classes.social}
            mx={{ base: 8, sm: 10 }}
            data-aos="zoom-out"
          >
            <Image
              src="/assets/social/instagram.png"
              fit="contain"
              alt="instagram"
              width={45}
              height={45}
            />
          </Button>
        </Box>
      </Flex>
    </>
  );
};
export default ContactUsForm;
