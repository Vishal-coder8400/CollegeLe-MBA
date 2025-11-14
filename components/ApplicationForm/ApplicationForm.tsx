import { useState } from 'react';
import { Button, Paper, Select, Switch, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

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
  isUpdates: false,
};

const validationScheme = {
  name: (value: string) => (value.length !== 0 ? null : 'Invalid Name'),
  stream: (value: string) => (value.length !== 0 ? null : 'Invalid stream'),
  email: (value: string) => (value.length !== 0 ? null : 'Invalid email'),
  phoneNumber: (value: string) => (value.length === 10 ? null : 'Invalid phone number'),
};

const form_id = `https://docs.google.com/forms/d/e/1FAIpQLScWpQmBWdHcO1h_uOuEplXjFIGT9j3WGmN5oc-wvVDQJMcocQ/formResponse?&submit=Submit`;
//https://docs.google.com/forms/d/e/1FAIpQLScWpQmBWdHcO1h_uOuEplXjFIGT9j3WGmN5oc-wvVDQJMcocQ/viewform?usp=pp_url&entry.380347128=Yash&entry.840491930=yash@yash.in&entry.1474378232=9837665544&entry.500433632=UG&entry.1911290564=MBA
const ApplicationForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm({
    initialValues,
    validate: validationScheme,
  });
  const submitHandler = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append(`entry.${process.env.NEXT_PUBLIC_APPLICATION_FORM_NAME}`, form.values.name);
      formData.append(
        `entry.${process.env.NEXT_PUBLIC_APPLICATION_FORM_PHONE}`,
        form.values.phoneNumber
      );
      formData.append(`entry.${process.env.NEXT_PUBLIC_APPLICATION_FORM_EMAIL}`, form.values.email);
      formData.append(
        `entry.${process.env.NEXT_PUBLIC_APPLICATION_FORM_STREAM}`,
        form.values.stream
      );
      formData.append(
        `entry.${process.env.NEXT_PUBLIC_APPLICATION_FORM_UPDATES}`,
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

    close();
  };
  return (
    <Paper radius={20} shadow="lg" p={20} maw={{ base: '100%', md: '80%' }} m="0 auto">
      <Text fw={600} c="#161616">
        Talk to a Counselor Now
      </Text>
      <form onSubmit={form.onSubmit(submitHandler)}>
        <TextInput
          my={20}
          label="Full name"
          withAsterisk
          key={form.key('name')}
          {...form.getInputProps('name')}
          onChange={(event) => form.setFieldValue('name', event.target.value)}
        />
        <TextInput
          type="number"
          my={20}
          label="Phone Number"
          withAsterisk
          leftSection={<Text>+91</Text>}
          key={form.key('phoneNumber')}
          {...form.getInputProps('phoneNumber')}
          onChange={(event) => form.setFieldValue('phoneNumber', event.target.value)}
        />
        <TextInput
          type="email"
          my={20}
          label="Email"
          withAsterisk
          key={form.key('email')}
          {...form.getInputProps('email')}
          onChange={(event) => form.setFieldValue('email', event.target.value)}
        />
        <Select
          withAsterisk
          label="Stream"
          data={stream}
          my={20}
          placeholder="Please Select Preferred Stream"
          key={form.key('stream')}
          {...form.getInputProps('stream')}
          onChange={(value) => form.setFieldValue('stream', value || stream[0])}
        />
        <Switch
          color="#F24B04"
          label={
            <Text c="dimmed" fz={14} mt="-5px">
              I authorize CollegeLe and its associates to contact me with updates & notifications
              via Email, SMS, Whatsapp & Voice call.
            </Text>
          }
          key={form.key('isUpdates')}
          {...form.getInputProps('isUpdates')}
          onChange={(event) => form.setFieldValue('isUpdates', event.currentTarget.checked)}
        />
        <Button
          loading={isLoading}
          loaderProps={{ type: 'dots' }}
          my={20}
          type="submit"
          color="#F24B04"
          fullWidth
          size="md"
          fz={16}
          fw={400}
        >
          Apply Now
        </Button>
      </form>
    </Paper>
  );
};

export default ApplicationForm;
