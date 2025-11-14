import { Box, Container, Flex, Image, Text, Title } from '@mantine/core';

const Founder = () => {
  return (
    <Container size="md" my={100} px={20} id="founders">
      <Flex wrap="wrap" justify={{ base: 'center', md: 'space-between' }}>
        <Box maw={500}>
          <Title fz={{ base: 24, sm: 48 }} c="#191919" mb={{ base: 15, sm: 20, md: 40 }}>
            Meet The <span className="theme__red">Founder</span>
          </Title>
          <Text c="#353E5C">
            Dr. Amit Prakash Jain, founder of CollegeLe, is a visionary leader committed to
            reshaping the college admission experience in India. With a PhD in Integrative
            Multi-Pathy Management, a Bachelor’s in Engineering, and an MBA in International
            Business, he brings a rare blend of analytical thinking and strategic foresight. A
            former All-India Topper and gold medalist from the Ministry of Railways, Dr. Amit has
            held leadership roles in global corporations for over 15 years. His mission with
            CollegeLe is to simplify the higher education journey through transparent guidance and
            holistic student support—ensuring that students and parents make informed, confident,
            and future-ready choices in an ever-evolving academic landscape.
          </Text>
        </Box>
        <Image my={20} radius={10} src="/assets/team/boss.png" h={400} fit="contain" />
      </Flex>
    </Container>
  );
};

export default Founder;
