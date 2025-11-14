'use client';

// import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Box, Button, Card, Container, Flex, SimpleGrid, Table, Text, Title } from '@mantine/core';

const CollegeCutOff = ({ data }: { data: any }) => {
  const searchParams = useSearchParams();
  const collegeName = searchParams.get('name');

  // const [isMore, setIsMore] = useState<boolean>(false);
  return (
    <Container maw={1100} my={100} id="cutoff">
      <Title fw={600} fz={{ base: 24, sm: 48 }} my={{ base: 20, lg: 50 }} ta="center">
        {collegeName} Cut Off 2024
      </Title>
      <Text fz={14} c="#0A0A0A" my={50}>
        {data?.cutoffInfo}
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
        {data?.cutoffData?.map((el: any, index: number) => (
          <Card key={index} bd="1px solid #D9D9D9" p={10} radius={16}>
            <Flex
              bg="#D9D9D9"
              align="center"
              style={{ borderRadius: 8 }}
              px={10}
              py={6}
              justify="space-between"
            >
              <Box>
                <Text fw={500}>{el.courseShortName}</Text>
                <Text fz={14} c="#737373">
                  {el.courseFullname}
                </Text>
              </Box>
            </Flex>
            <Table
              withRowBorders={false}
              verticalSpacing={2}
              horizontalSpacing={0}
              c="#737373"
              my={10}
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th c="#000">JEE Advanced</Table.Th>
                  <Table.Th c="#000" ta="right" w={90}>
                    Closing Rank
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>SC (AI - Gender-Neutral)</Table.Td>
                  <Table.Td ta="right">{el.scNeutral === 0 ? 'xx' : el.scNeutral}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>ST (AI - Female-Only)</Table.Td>
                  <Table.Td ta="right">{el.stFemale === 0 ? 'xx' : el.stFemale}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>ST (AI - Gender-Neutral)</Table.Td>
                  <Table.Td ta="right">{el.stNeutral === 0 ? 'xx' : el.stNeutral}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>General (AI - Female-Only)</Table.Td>
                  <Table.Td ta="right">{el.genFemale === 0 ? 'xx' : el.genFemale}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>General (AI - Gender-Neutral)</Table.Td>
                  <Table.Td ta="right">{el.genNeutral === 0 ? 'xx' : el.genNeutral}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>General PwD (AI - Gender-Neutral)</Table.Td>
                  <Table.Td ta="right">{el.genPwd === 0 ? 'xx' : el.genPwd}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>OBC-NCL (AI - Female-Only)</Table.Td>
                  <Table.Td ta="right">{el.obcFemale === 0 ? 'xx' : el.obcFemale}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>OBC-NCL (AI - Gender-Neutral)</Table.Td>
                  <Table.Td ta="right">{el.obcNeutral === 0 ? 'xx' : el.obcNeutral}</Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
            <Flex justify="space-between" mb={10}>
              <Button fullWidth mr={{ base: 10, sm: 5 }} color="#F24B04" fz={14} px={9} size="md">
                Download Brochure
              </Button>
              <Button fullWidth color="#F24B04" variant="outline" fz={14} px={9} size="md">
                Talk to Our Experts
              </Button>
            </Flex>
          </Card>
        ))}
      </SimpleGrid>
      {/* <Button
        display="block"
        onClick={() => setIsMore(!isMore)}
        fw={400}
        variant="transparent"
        mx="auto"
        ta="center"
        c="#F24B04"
        my={30}
        style={{ cursor: 'pointer' }}
      >
        {!isMore ? 'Show More' : 'Show Less'}
      </Button> */}
    </Container>
  );
};

export default CollegeCutOff;
