'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { IconBrandWhatsapp, IconMailFilled } from '@tabler/icons-react';
import { Box, Button, Divider, Flex, Image, Text, TextInput } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import client from '@/utils/sanity';
import classes from './Footer.module.css';

const aboutUs = [
  { label: 'About Us', link: '/about-us' },
  { label: 'Contact Us', link: '/contact-us' },
  { label: 'Privacy policy', link: '/privacy-policy' },
  { label: 'Colleges', link: '/search' },
  { label: 'Blogs', link: '/blogs' },
  { label: 'Careers', link: '/careers' },
  { label: 'Enquiry', link: '/application' },
];

const colleges = [
  { label: 'GNIOT', link: '/college?name=GNIOT' },
  { label: 'SOIL', link: '/college?name=SOIL' },
  { label: 'IILM', link: '/college?name=IILM' },
  { label: 'NIU', link: '/college?name=NIU' },
  { label: 'G.L Bajaj', link: '/college?name=G.L%20Bajaj' },
  { label: 'K.R Magalam', link: '/college?name=K.R%20Magalam' },
  { label: 'Apeejay Satya', link: '/college?name=Apeejay%20Satya' },
  { label: 'G.D Goenka', link: '/college?name=G.D%20Goenka' },
  { label: 'BITS', link: '/college?name=BITS' },
  { label: 'Hierank', link: '/college?name=Hierank' },
  { label: 'Delhi School of Business', link: '/college?name=Delhi%20School%20of%20Business' },
  { label: 'UBS', link: '/college?name=UBS' },
  { label: 'GNIM', link: '/college?name=GNIM' },
  { label: 'IITM', link: '/college?name=IIT%20Madras' },
  { label: 'Starex University', link: '/college?name=Starex%20University' },
  { label: 'NDIM', link: '/college?name=NDIM' },
  { label: 'Jaipuria', link: '/college?name=Jaipuria' },
];
const Footer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = event.currentTarget.email.value;

    try {
      setIsLoading(true);
      const existingEmail = await client.fetch(
        `*[_type == "subscribeEmails" && email == $email][0]`,
        { email }
      );

      if (existingEmail) {
        notifications.show({
          message: 'Already registered',
        });
        return;
      }

      const response = await client.create({ email, _type: 'subscribeEmails' });
      if (response) {
        notifications.show({
          message: 'Successfully registered',
          color: 'green',
        });
      }
    } catch (error) {
      console.error('Error creating document:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Box className={classes.main} bg="#191919">
      <Box className={classes.main__box}>
        <Box className={classes.main__box_inner} mb={{ base: 40, lg: 0 }}>
          <Flex wrap="wrap" flex={{ base: 1, lg: '50%' }} justify="space-between">
            <Box maw={300}>
              <Box component={Link} href="/" className="cursor">
                <Image src="/assets/CollegeLe Logo.ai.png" alt="logo" mb={20} w={250} />
              </Box>
              <Text c="#e1e4ed" fz={14}>
                “At CollegeLe, we specialize in guiding students toward their dream colleges with
                expert counseling and personalized support. Let us help you take the next step in
                your academic journey and unlock endless opportunities for a brighter future.”
              </Text>
            </Box>
            <Box my={{ base: 40, lg: 0 }}>
              <Text c="#e1e4ed" fw={600}>
                Get the latest news and updates
              </Text>
              <form onSubmit={submitHandler}>
                <TextInput
                  my={10}
                  name="email"
                  required
                  classNames={{ wrapper: classes.input__root, input: classes.input__input }}
                  w="300"
                  type="email"
                  placeholder="Enter your email address"
                />
                <Button
                  loading={isLoading}
                  loaderProps={{ type: 'dots' }}
                  type="submit"
                  mt={10}
                  color="#F24B04"
                >
                  Subscribe
                </Button>
              </form>
            </Box>
          </Flex>
          <Flex
            flex={{ base: 1, lg: '50%' }}
            justify={{ base: 'space-between', lg: 'space-evenly' }}
          >
            <Box className={classes.box}>
              {/* <Text c="#fff" fw={600}>
                About Us
              </Text> */}
              <Box>
                {aboutUs.map((el: { label: string; link: string }, index: number) => (
                  <Text
                    component={Link}
                    display="block"
                    c="#e1e4ed"
                    href={el.link}
                    key={index}
                    className={classes.link}
                  >
                    {el.label}
                  </Text>
                ))}
              </Box>
            </Box>
            <Box className={classes.box}>
              <Text c="#e1e4ed" fw={600}>
                More to Explore
              </Text>
              <Box>
                {/* {moreToExplore.map((el: string, index: number) => (
                  <Text key={index} className={classes.link}>
                    {el}
                  </Text>
                ))} */}
                <Text c="#e1e4ed" py={2} fw={600}>
                  Noida
                </Text>
                <Text c="#e1e4ed" py={6} maw={250}>
                  H-166, Sector 63 Rd, H Block, Sector 63, Noida, Uttar Pradesh 201301
                </Text>

                <Text
                  style={{ display: 'flex', alignContent: 'center' }}
                  py={6}
                  c="#e1e4ed"
                  component={Link}
                  display="block"
                  href="tel:+918750300099"
                >
                  <IconBrandWhatsapp /> +91 7042833800
                </Text>
                <Text
                  style={{ display: 'flex', alignContent: 'center' }}
                  py={6}
                  c="#e1e4ed"
                  component={Link}
                  display="block"
                  href="mailto: info@collegele.com"
                >
                  <IconMailFilled /> info@collegele.com
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box className={`${classes.main__box_inner}  ${classes.main__box_inner_2}`} my={60}>
          <Flex flex="1" justify="space-evenly" w={500} maw={500} mb={{ base: 40, lg: 0 }}>
            <Box className={classes.box}>
              <Text c="#e1e4ed" fw={600}>
                Popular universities
              </Text>
              <Box>
                {colleges.slice(0, 5).map((el: { label: string; link: string }, index: number) => (
                  <Text
                    component={Link}
                    display="block"
                    c="#e1e4ed"
                    href={el.link}
                    key={index}
                    className={classes.link}
                  >
                    {el.label}
                  </Text>
                ))}
              </Box>
            </Box>
            <Box className={classes.box}>
              <Box>
                {colleges.slice(5, 11).map((el: { label: string; link: string }, index: number) => (
                  <Text
                    component={Link}
                    display="block"
                    c="#e1e4ed"
                    href={el.link}
                    key={index}
                    className={classes.link}
                  >
                    {el.label}
                  </Text>
                ))}
              </Box>
            </Box>
          </Flex>
          <Flex flex="1" justify="flex-start" w={387} maw={387}>
            <Box className={classes.box}>
              <Box>
                {colleges
                  .slice(12, 29)
                  .map((el: { label: string; link: string }, index: number) => (
                    <Text
                      component={Link}
                      display="block"
                      c="#e1e4ed"
                      href={el.link}
                      key={index}
                      className={classes.link}
                    >
                      {el.label}
                    </Text>
                  ))}
              </Box>
            </Box>
          </Flex>
        </Box>
        <Divider my="md" />
        <Flex wrap="wrap" justify={{ base: 'center', lg: 'space-between' }}>
          <Text ta="center" c="#e1e4ed">
            Copyright © 2025 Kundkund Group Pvt. Ltd. | All Rights Reserved |
            <a className="footer__link" href="/privacy-policy">
              Privacy Policy
            </a>
          </Text>
          <Box mt={{ base: 20, lg: 0 }}>
            <Button
              component={Link}
              href="https://www.facebook.com/share/tEgRVCfvXw38Xju7/?mibextid=wwXIfr"
              className={classes.social}
              mx={{ base: 8, sm: 5 }}
              data-aos="zoom-out"
            >
              <Image
                src="/assets/social/facebook.png"
                fit="contain"
                alt="facebook"
                width={35}
                height={35}
              />
            </Button>
            <Button
              component={Link}
              href="https://x.com/college_le_?s=21"
              className={classes.social}
              mx={{ base: 8, sm: 5 }}
              data-aos="zoom-in"
            >
              <Image
                src="/assets/social/twitter.png"
                fit="contain"
                alt="twitter"
                width={35}
                height={35}
              />
            </Button>
            <Button
              component={Link}
              href="https://www.instagram.com/collegele.officials/profilecard/?igsh=NmxsYjNyY3IyOWJv"
              className={classes.social}
              mx={{ base: 8, sm: 5 }}
              data-aos="zoom-out"
            >
              <Image
                src="/assets/social/instagram.png"
                fit="contain"
                alt="instagram"
                width={35}
                height={35}
              />
            </Button>
            <Button
              component={Link}
              href="https://www.linkedin.com/company/collegele/"
              className={classes.social}
              mx={{ base: 8, sm: 5 }}
              data-aos="zoom-in"
            >
              <Image
                src="/assets/social/linkedin.png"
                fit="contain"
                alt="linkedin"
                width={35}
                height={35}
              />
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
export default Footer;
