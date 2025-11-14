'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IconChevronDown } from '@tabler/icons-react';
import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Flex,
  Group,
  Image,
  Menu,
  Modal,
  NavLink,
  ScrollArea,
  SimpleGrid,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ContactForm from '../ContactForm';
import { courses, dropdownData } from './collegeData';
import classes from './Header.module.css';

const mainLinks = ['Colleges', 'About Us', 'Contact Us', 'Blogs', 'More'];

const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();
  const mainMenu = ['Colleges'].map((el: string, index: number) => (
    <Menu
      key={index}
      trigger="click-hover"
      loop={false}
      withinPortal={false}
      offset={16}
      trapFocus={false}
      menuItemTabIndex={0}
      classNames={{ dropdown: classes.dropdown }}
    >
      <Menu.Target>
        <Group gap="4px" className={classes.menu__group}>
          <Text>{el}</Text> <IconChevronDown size={12} />
        </Group>
      </Menu.Target>
      {el === mainLinks[0] ? <CollegeDropDown /> : <MenuDropDown />}
    </Menu>
  ));
  const handleRedirect = (degree: string, type: string, value: string) => {
    if (type === 'city') {
      router.push(`/search?degree=${degree}&city=${value}`);
    } else if (type === 'state') {
      router.push(`/search?degree=${degree}&state=${value}`);
    } else if (type === 'stream') {
      router.push(`/search?degree=${degree}&stream=${value}`);
    }
    closeDrawer();
  };
  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" align="center" h="100%">
          <Image
            onClick={() => router.push('/')}
            style={{ cursor: 'pointer' }}
            src="/assets/new_logo.png"
            alt="logo"
            w={140}
          />

          <Group h="100%" align="center" gap={40} visibleFrom="lg">
            {mainMenu}
            <UnstyledButton component={Link} href="/about-us">
              About Us
            </UnstyledButton>{' '}
            <UnstyledButton component={Link} href="/blogs">
              Blogs
            </UnstyledButton>
            <Menu
              trigger="click-hover"
              loop={false}
              withinPortal={false}
              offset={18}
              trapFocus={false}
              menuItemTabIndex={0}
              // classNames={{ dropdown: classes.dropdown }}
            >
              <Menu.Target>
                <Group gap="4px" className={classes.menu__group}>
                  <Text>More</Text> <IconChevronDown size={12} />
                </Group>
              </Menu.Target>
              <MenuDropDown />
            </Menu>
          </Group>

          <Group>
            <Button size="sm" onClick={open} radius="xl" color="#F24B04">
              Contact Us
            </Button>

            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="lg" />
          </Group>
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        // hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />
          <NavLink href="#required-for-focus" label="Colleges" childrenOffset={28}>
            {Object.keys(dropdownData).map((degree) => (
              <NavLink key={degree} label={degree} childrenOffset={28}>
                {Object.entries(dropdownData[degree]).map(([type, values]) => (
                  <NavLink key={type} label={type} childrenOffset={28}>
                    {(values as string[]).map((value) => (
                      <NavLink
                        key={value}
                        label={value}
                        onClick={() =>
                          handleRedirect(
                            degree,
                            type.includes('City')
                              ? 'city'
                              : type.includes('State')
                                ? 'state'
                                : 'stream',
                            value
                          )
                        }
                      />
                    ))}
                  </NavLink>
                ))}
              </NavLink>
            ))}
          </NavLink>
          <UnstyledButton
            my={10}
            onClick={closeDrawer}
            component={Link}
            href="/about-us"
            className={classes.link}
          >
            About Us
          </UnstyledButton>
          <UnstyledButton
            my={10}
            onClick={closeDrawer}
            component={Link}
            href="/blogs"
            className={classes.link}
          >
            Blogs
          </UnstyledButton>{' '}
          <UnstyledButton
            my={10}
            onClick={closeDrawer}
            component={Link}
            href="/privacy-policy"
            className={classes.link}
          >
            Privacy Policy
          </UnstyledButton>
          <Divider my="sm" />
          {/* <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group> */}
        </ScrollArea>
      </Drawer>
      <Modal
        opened={opened}
        onClose={close}
        h="fit-content"
        size="xl"
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        classNames={{ header: classes.modal__header, body: classes.modal__body }}
      >
        <ContactForm close={close} />
      </Modal>
    </Box>
  );
};

const CollegeDropDown = () => {
  const router = useRouter();
  const [active, setActive] = useState(courses[0]);
  return (
    <Menu.Dropdown display="flex">
      <ScrollArea
        p={0}
        mr={5}
        h={300}
        w={300}
        scrollbarSize={4}
        style={{ borderRight: '1px solid #868E96' }}
      >
        {courses.map((el: string, index: number) => (
          <Box key={index}>
            <Text
              py={10}
              pl={10}
              className={active === el ? classes.coursebtn__active : classes.coursebtn}
              display="block"
              onMouseOver={() => setActive(el)}
            >
              {el}
            </Text>
            <Divider />
          </Box>
        ))}
      </ScrollArea>
      <Box w={600} p={5}>
        <SimpleGrid cols={2}>
          <Box>
            <Text fw={600}> Top Cities</Text>
            <Flex direction="column">
              {dropdownData[active]['Top Cities'].slice(0, 4)?.map((colDat: any, index: number) => (
                <UnstyledButton
                  onClick={() => router.push(`/search?degree=${active}&city=${colDat}`)}
                  fz={14}
                  py={2}
                  c="dimmed"
                  key={index}
                >
                  Top {active} colleges in {colDat}
                </UnstyledButton>
              ))}
            </Flex>
          </Box>
          <Box>
            <Text fw={600}> Top States</Text>
            <Flex direction="column">
              {dropdownData[active]['Top States'].slice(0, 4)?.map((colDat: any, index: number) => (
                <UnstyledButton
                  onClick={() => router.push(`/search?degree=${active}&state=${colDat}`)}
                  fz={14}
                  py={2}
                  c="dimmed"
                  key={index}
                >
                  Top {active} colleges in {colDat}
                </UnstyledButton>
              ))}
            </Flex>
          </Box>
          <Box>
            <Text fw={600}> Popular Streams</Text>
            <Flex direction="column">
              {dropdownData[active]['Popular Streams']
                .slice(0, 4)
                ?.map((colDat: any, index: number) => (
                  <UnstyledButton
                    onClick={() => router.push(`/search?degree=${active}&stream=${colDat}`)}
                    fz={14}
                    py={2}
                    c="dimmed"
                    key={index}
                  >
                    {colDat}
                  </UnstyledButton>
                ))}
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </Menu.Dropdown>
  );
};
const MenuDropDown = () => {
  const router = useRouter();
  return (
    <Menu.Dropdown>
      <Menu.Item onClick={() => router.push('/privacy-policy')}>Privacy policy</Menu.Item>
      {/* <Menu.Item onClick={() => router.push('/privacy-policy')}>Terms & Conditions</Menu.Item> */}
    </Menu.Dropdown>
  );
};
export default Header;
