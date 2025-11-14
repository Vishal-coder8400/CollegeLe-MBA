'use client';

import { Box, Card, Container, Flex, Text, Title } from '@mantine/core';
import classes from './OurLeaders.module.css';

const managementData = [
  {
    img: '/assets/team/management/coo.png',
    name: 'Nisha Jain',
    role: 'Chief Operating Officer',
  },
  {
    img: '/assets/team/management/cfo.png',
    name: 'Adeeshwar Prakash Jain',
    role: 'Chief Finance Officer',
  },
  {
    img: '/assets/team/management/cto.png',
    name: 'Siddartha Garg',
    role: 'Chief Technology Officer',
  },
  {
    img: '/assets/team/management/clo.png',
    name: 'Lalman Yadav',
    role: 'Chief Legal Officer',
  },
  {
    img: '/assets/team/management/cvo.png',
    name: 'Sudesh Grover',
    role: 'Chief Vigilance Officer',
  },
  {
    img: '/assets/team/management/cbo.png',
    name: 'Ajay Tomer',
    role: 'Chief Business Officer',
  },
];
const executiveData = [
  {
    img: '/assets/team/core/Saurabh_Chaudhary_Executive_Assistant_to_Managing_Director.png',
    name: 'Saurabh Chaudhary',
    role: 'Executive Assistant to Managing Director',
  },
  {
    img: '/assets/team/core/Shubham_Tyagi_Executive_Officer_Business.png',
    name: 'Shubham Tyagi',
    role: 'Executive Officer - Business',
  },
  {
    img: '/assets/team/core/Wasim_Khan_Executive_Officer_Technology.png',
    name: 'Wasim Raza',
    role: 'Executive Officer - Technology',
  },
  {
    img: '/assets/team/core/Chetan_Pratap_Singh_Executive_Officer_Finance_Accounts.png',
    name: 'Chetan Pratap Singh',
    role: 'Executive Officer - Finance & Accounts',
  },
  {
    img: '/assets/team/core/Vaishali_Tomar_Executive_Officer_Human_Resource.png',
    name: 'Vaishali Tomar',
    role: 'Executive Officer - Human Resource',
  },
  {
    img: '/assets/team/core/Aanchal_Singh_Executive_Officer_Customer_Support.png',
    name: 'Aanchal Singh',
    role: 'Executive Officer - Customer Support',
  },
  {
    img: '/assets/team/core/Suneet_Sharma_Executive_Officer_Legal_Compliance.png',
    name: 'Suneet Sharma',
    role: 'Executive Officer - Legal & Compliance',
  },
  {
    img: '/assets/team/core/Anjali_Dahiya_Executive_Officer_Product_Development.png',
    name: 'Anjali Dahiya',
    role: 'Executive Officer - Product Development',
  },
  {
    img: '/assets/team/core/Chhavi_Gupta_Executive_Officer_Business_Analysis.png',
    name: 'Chhavi Gupta',
    role: 'Executive Officer - Business Analysis',
  },
];
const supportData = [
  {
    img: '/assets/team/support/Abhishek_Kumar_Officer_Offline_PG.png',
    name: 'Abhishek Kumar',
    role: 'Officer - Offline PG',
  },
  {
    img: '/assets/team/support/Mansi_Arora_Officer_Student_Support.png',
    name: 'Mansi Arora',
    role: 'Officer - Student Support',
  },
  {
    img: '/assets/team/support/Aditya_Pratap_Singh_Officer_Online_UG.png',
    name: 'Aditya Pratap Singh',
    role: 'Officer - Online UG',
  },
  {
    img: '/assets/team/support/Mayank_Jain_Officer_Online_PG.png',
    name: 'Mayank Jain',
    role: 'Officer - Online PG',
  },
  {
    img: '/assets/team/support/Raksha_Rawat_Officer_Career_Counselling.png',
    name: 'Raksha Rawat',
    role: 'Officer - Career Counselling',
  },
  {
    img: '/assets/team/support/Akhil_Kumar_Officer_Law_Online_Offline.png',
    name: 'Akhil Kumar',
    role: 'Officer - Law Online & Offline',
  },
  {
    img: '/assets/team/support/Neha_Singh_Officer_Student_Feedback.png',
    name: 'Neha',
    role: 'Officer - Student Feedback',
  },
  {
    img: '/assets/team/support/Sajid_Hussain_Officer_Offline_UG.png',
    name: 'Sajid Hussain',
    role: 'Officer - Offline UG',
  },
  {
    img: '/assets/team/support/Priyanka_Negi_Officer_Business_Development.png',
    name: 'Priyanka Negi',
    role: 'Officer - Business Development',
  },
];

const OurLeaders = () => {
  return (
    <Container className={classes.main} size="lg" my={100} px={20} id="our-leaders">
      <Box p={10} my={100}>
        <Title ta="center" fz={48}>
          <span className="theme__red"> Management Team</span>
        </Title>

        <Flex justify="center" wrap="wrap" my={60}>
          {managementData.map((item, index) => (
            <Box
              key={index}
              m={15}
              className={classes.carousel__box}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <Card className={classes.leader__info} radius="lg">
                <Text fz={15} fw={500}>
                  {item.name}
                </Text>
                <Text fz={14} fw={500}>
                  {item.role}
                </Text>
              </Card>
            </Box>
          ))}
        </Flex>
      </Box>{' '}
      <Box p={10} my={100}>
        <Title ta="center" fz={48}>
          <span className="theme__red"> Core Enablers</span>
        </Title>

        <Flex justify="center" wrap="wrap" my={60}>
          {executiveData.map((item, index) => (
            <Box
              key={index}
              m={15}
              className={classes.carousel__box}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <Card className={classes.leader__info} radius="lg">
                <Text fz={15} fw={500}>
                  {item.name}
                </Text>
                <Text fz={13} fw={500}>
                  {item.role}
                </Text>
              </Card>
            </Box>
          ))}
        </Flex>
      </Box>{' '}
      <Box p={10} my={100}>
        <Title ta="center" fz={48}>
          <span className="theme__red"> Execution Team</span>
        </Title>

        <Flex justify="center" wrap="wrap" my={60}>
          {supportData.map((item, index) => (
            <Box
              key={index}
              m={15}
              className={classes.carousel__box}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <Card className={classes.leader__info} radius="lg">
                <Text fz={15} fw={500}>
                  {item.name}
                </Text>
                <Text fz={13} fw={500}>
                  {item.role}
                </Text>
              </Card>
            </Box>
          ))}
        </Flex>
      </Box>
    </Container>
  );
};

export default OurLeaders;
