'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IconAt } from '@tabler/icons-react';
import { Box, Button, Flex, Image, List, Select, Switch, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import classes from './ContactForm.module.css';

export const levels = ['UG', 'PG', 'Diploma', 'P.hD'];
export const stream = [
  'Commerce and Banking',
  'Design',
  'Engineering',
  'Management',
  'Hotel Management',
  'Information Technology',
  'Medical',
  'Arts and Humanities',
  'Law',
  'Science',
  'Vocational',
  'Education',
  'Paramedical',
  'Agriculture',
  'Pharmacy',
];
const initialValues = {
  name: '',
  phoneNumber: '',
  email: '',
  stream: '',
  level: '',
  isUpdates: false,
};

const validationScheme = {
  name: (value: string) => (value.length !== 0 ? null : 'Invalid Name'),
  email: (value: string) => (value.length !== 0 ? null : 'Invalid email'),
  phoneNumber: (value: string) => (value.length === 10 ? null : 'Invalid phone number'),
  stream: (value: string) => (value.length !== 0 ? null : 'Invalid stream'),
  level: (value: string) => (value.length !== 0 ? null : 'Invalid level'),
};
const form_id = `https://docs.google.com/forms/d/e/1FAIpQLSen6h8QKOz8cr1q3h4xgmIlvR9jk--JBbqS94stty7PPy_q8w/formResponse?&submit=Submit`;
const ContactForm = ({ brochureLink, close }: { brochureLink?: string; close: () => void }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm({
    initialValues,
    validate: validationScheme,
  });
  const submitHandler = async () => {
    try {
      setIsLoading(true);
      // await client.create({ ...form.values, _type: 'userInfo' });
      const formData = new FormData();
      formData.append(`entry.${process.env.NEXT_PUBLIC_CONTACT_FORM_NAME}`, form.values.name);
      formData.append(
        `entry.${process.env.NEXT_PUBLIC_CONTACT_FORM_PHONE}`,
        form.values.phoneNumber
      );
      formData.append(`entry.${process.env.NEXT_PUBLIC_CONTACT_FORM_EMAIL}`, form.values.email);
      formData.append(`entry.${process.env.NEXT_PUBLIC_CONTACT_FORM_STREAM}`, form.values.stream);
      formData.append(`entry.${process.env.NEXT_PUBLIC_CONTACT_FORM_LEVEL}`, form.values.level);
      formData.append(
        `entry.${process.env.NEXT_PUBLIC_CONTACT_FORM_UPDATES}`,
        form.values.isUpdates ? 'Yes' : 'No'
      );
      const response = await fetch(form_id, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      console.log({ formData, response });
      notifications.show({
        title: 'Done',
        message: "We'll contact you shortly",
      });
    } catch (error) {
      console.error('Error creating document:', error);
    } finally {
      setIsLoading(false);
    }
    if (brochureLink) {
      window.location.href = brochureLink;
    }
    close();
  };

  return (
    <Flex>
      <Flex
        flex={1}
        direction="column"
        justify="space-between"
        className={classes.box__1}
        px={40}
        pt={40}
        c="#fff"
        visibleFrom="sm"
      >
        <Box>
          <Text fz={24} fw={600}>
            Why Choose Us for Your College Admissions?
          </Text>
          <List my={30}>
            <List.Item>
              Secure your college seat from the comfort of your home no need to step out!
            </List.Item>
            <List.Item>Access to a curated list of top colleges across India.</List.Item>
            <List.Item>Enjoy up to 50% off on application form fees.</List.Item>
            <List.Item>Your privacy matters no spam calls.</List.Item>
          </List>
        </Box>
        <Image
          src="/assets/DiscoverCareer.png"
          fit="contain"
          h={270}
          className={classes.box__image}
        />
      </Flex>
      <Box flex={1} p={{ base: 20, md: 30 }}>
        <Text fz={16} fw={600} lh="150%" pr={20}>
          Dreaming of a seat at your dream college? Drop your details, and let CollegeLe turn your
          aspirations into reality!
        </Text>
        <form onSubmit={form.onSubmit(submitHandler)}>
          <TextInput
            my={20}
            placeholder="Name"
            key={form.key('name')}
            {...form.getInputProps('name')}
            onChange={(event) => form.setFieldValue('name', event.target.value)}
          />
          <TextInput
            type="number"
            my={20}
            leftSection={<Text>+91</Text>}
            key={form.key('phoneNumber')}
            {...form.getInputProps('phoneNumber')}
            onChange={(event) => form.setFieldValue('phoneNumber', event.target.value)}
          />
          <TextInput
            my={20}
            leftSection={<IconAt />}
            type="email"
            placeholder="Email"
            key={form.key('email')}
            {...form.getInputProps('email')}
            onChange={(event) => form.setFieldValue('email', event.target.value)}
          />
          <Select
            data={stream}
            my={20}
            placeholder="Please Select Preferred Stream"
            key={form.key('stream')}
            {...form.getInputProps('stream')}
            onChange={(value) => form.setFieldValue('stream', value || stream[0])}
          />
          <Select
            data={levels}
            my={20}
            placeholder="Please Select Preferred Level"
            key={form.key('level')}
            {...form.getInputProps('level')}
            onChange={(value) => form.setFieldValue('level', value || levels[0])}
          />
          <Switch
            color="#7A5CFA"
            label="Enable updates & important information on Whatsapp."
            key={form.key('isUpdates')}
            {...form.getInputProps('isUpdates')}
            onChange={(event) => form.setFieldValue('isUpdates', event.currentTarget.checked)}
          />
          <Button
            loading={isLoading}
            loaderProps={{ type: 'dots' }}
            my={20}
            type="submit"
            color="#7A5CFA"
            fullWidth
            size="md"
            fz={16}
            fw={400}
          >
            Apply Now
          </Button>
        </form>
        <Text c="#898989" fz={12} ta="center">
          By proceeding ahead you expressly agree to the CollegeLe{' '}
          <Text td="underline" component={Link} fz={12} href="/privacy-policy">
            Privacy Policy
          </Text>
        </Text>
      </Box>
    </Flex>
  );
};

export default ContactForm;
