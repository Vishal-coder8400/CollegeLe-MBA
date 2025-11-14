'use client';

// Use this only if in the app/ directory
import { Anchor, Container, List, Text, Title } from '@mantine/core';

const PrivacyPolicy = () => {
  return (
    <Container size="md" py="xl" color="dimmed">
      {/* Page Title */}
      <Title order={1} mb="lg">
        Privacy Policy for CollegeLe
      </Title>
      <Text size="sm" c="dimmed" mb="md">
        Effective Date: 01/08/2024
      </Text>

      {/* Introduction */}
      <Text size="md" mb="md" c="#6D758F">
        Welcome to CollegeLe! This Privacy Policy outlines how CollegeLe, a company under Kundkund
        Group Private Limited, collects, uses, stores, and protects your information. By using our
        website, you agree to the terms outlined in this policy.
      </Text>

      {/* Section 1: Information We Collect */}
      <Title order={2} mt="lg" mb="sm">
        1. Information We Collect
      </Title>
      <List withPadding>
        <List.Item>
          <Text c="#6D758F">
            <strong>Personal details:</strong> Name, email, phone number, educational
            qualifications, and other details provided through forms.
          </Text>
        </List.Item>
        <List.Item>
          <Text c="#6D758F">
            <strong>Non-personal details:</strong> Browser type, IP address, and cookies data to
            enhance user experience.
          </Text>
        </List.Item>
      </List>

      {/* Section 2: How We Use Your Information */}
      <Title order={2} mt="lg" mb="sm">
        2. How We Use Your Information
      </Title>
      <List withPadding c="#6D758F">
        <List.Item>Assisting users with counseling services and application processes.</List.Item>
        <List.Item>Providing tailored suggestions based on user profiles.</List.Item>
        <List.Item>
          Sending notifications about entrance exams, admissions, and related updates.
        </List.Item>
        <List.Item>Enhancing website functionality and user experience.</List.Item>
        <List.Item>Responding to queries or feedback provided by users.</List.Item>
      </List>

      {/* Section 3: Cookies and Tracking Technologies */}
      <Title order={2} mt="lg" mb="sm">
        3. Cookies and Tracking Technologies
      </Title>
      <Text mb="sm" c="#6D758F">
        We use cookies to improve the functionality of our website and personalize user experience.
        Cookies may:
      </Text>
      <List withPadding c="#6D758F">
        <List.Item>Store user preferences.</List.Item>
        <List.Item>Help analyze website traffic and usage.</List.Item>
      </List>
      <Text size="sm" mt="sm" c="#6D758F">
        Most browsers allow you to control cookie settings. By using our website, you consent to the
        use of cookies unless you disable them through your browser settings.
      </Text>

      {/* Additional Sections */}
      <Title order={2} mt="lg" mb="sm">
        4. Data Sharing and Security
      </Title>
      <List withPadding c="#6D758F">
        <List.Item>We do not share user data with unauthorized third parties.</List.Item>
        <List.Item>
          We may share data with trusted partners, such as educational institutions, to provide
          better services.
        </List.Item>
        <List.Item>
          User data is stored securely and is protected against unauthorized access using
          industry-standard security measures.
        </List.Item>
      </List>

      <Title order={2} mt="lg" mb="sm">
        5. User Rights
      </Title>
      <List withPadding c="#6D758F">
        <List.Item>Access the personal information we hold about you.</List.Item>
        <List.Item>Request deletion or correction of your data.</List.Item>
        <List.Item>
          Opt-out of newsletters or marketing communications by unsubscribing through the provided
          links.
        </List.Item>
      </List>

      <Title order={2} mt="lg" mb="sm">
        6. Age Restrictions
      </Title>
      <Text mb="sm" c="#6D758F">
        Our website is intended for users aged 13 and above. We do not knowingly collect data from
        users under 13 years of age. If such information is identified, it will be promptly deleted.
      </Text>

      <Title order={2} mt="lg" mb="sm">
        7. Third-Party Links
      </Title>
      <Text mb="sm" c="#6D758F">
        Our website may contain links to third-party websites. We are not responsible for the
        content or privacy policies of these external sites. Users are advised to review the privacy
        policies of these websites before engaging with them.
      </Text>

      <Title order={2} mt="lg" mb="sm">
        8. Changes to this Policy
      </Title>
      <Text mb="sm" c="#6D758F">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page
        with an updated effective date. Users are encouraged to review this policy periodically.
      </Text>

      <Title order={2} mt="lg" mb="sm">
        9. Contact Us
      </Title>
      <Text c="#6D758F">
        If you have any questions, concerns, or feedback regarding this Privacy Policy, please
        contact us at:
      </Text>
      <Text mt="sm" c="#6D758F">
        <strong>Email:</strong> <Anchor href="mailto:info@collegele.com">info@collegele.com</Anchor>
      </Text>
      <Text c="#6D758F" component="a" href="tel:+918750300099">
        <strong>Phone:</strong>+91 7042833800
      </Text>
    </Container>
  );
};
export default PrivacyPolicy;
