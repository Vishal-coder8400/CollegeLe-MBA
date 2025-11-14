'use client';

import { useState } from 'react';
import { IconClock, IconExternalLink, IconMail, IconMapPin, IconPhone } from '@tabler/icons-react';
import {
  ActionIcon,
  Box,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  Text,
  Title,
} from '@mantine/core';

const ContactUsHerobox = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>();

  const contactInfo = [
    {
      icon: <IconMail size={24} />,
      title: 'Email Us',
      primary: ' info@collegele.com',
      secondary: 'For general inquiries',
      href: 'mailto: info@collegele.com',
    },
    {
      icon: <IconPhone size={24} />,
      title: 'Call Us',
      primary: '+91 7042833800',
      secondary: '24/7 Emergency Support',
      href: 'tel:+917042833800',
    },
    {
      icon: <IconClock size={24} />,
      title: 'Working Hours',
      primary: 'Mon - Sat: 9:00 AM - 7:00 PM',
      secondary: 'Emergency care available 24/7',
    },
    {
      icon: <IconMapPin size={24} />,
      title: 'Visit Us',
      primary: 'H-166, Sector 63 Rd, H Block',
      secondary: 'Sector 63, Noida, UP 201301',
      href: 'https://maps.google.com/?q=H-166,Sector63,Noida',
    },
  ];

  return (
    <Container size="lg" py={50}>
      <Grid gutter={40}>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Box>
            <Title order={1} fw={600} fz={36} c="blue.8" mb={30}>
              We&apos;re Here to Help
            </Title>

            <Text size="lg" c="gray.7" mb={40}>
              CollegeLe is here to help you: <br /> Our experts are available to answer any
              questions you might have. We’ve got the answers.
            </Text>

            <Grid grow>
              {contactInfo.map((info, index) => (
                <Grid.Col span={{ base: 12, sm: 6 }} key={index}>
                  <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    style={{
                      cursor: info.href ? 'pointer' : 'default',
                      transform: hoveredCard === index ? 'translateY(-5px)' : 'none',
                      transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    component="a"
                    href={info.href}
                  >
                    <Group>
                      <Box>
                        <Text fw={500} size="lg" mb={5}>
                          {info.title}
                        </Text>
                        <Text size="sm" c="gray.7">
                          {info.primary}
                        </Text>
                        <Text size="xs" c="gray.6">
                          {info.secondary}
                        </Text>
                      </Box>
                      <ActionIcon variant="light" color="blue" size="lg" radius="xl">
                        {info.icon}
                      </ActionIcon>
                      {info.href && (
                        <IconExternalLink
                          size={16}
                          className="ml-auto"
                          style={{ opacity: hoveredCard === index ? 1 : 0 }}
                        />
                      )}
                    </Group>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper shadow="md" radius="lg" p={0} style={{ overflow: 'hidden' }}>
            <Image
              alt="Medical professionals ready to help"
              src="/assets/contact__us.png"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                minHeight: '400px',
              }}
            />
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default ContactUsHerobox;
