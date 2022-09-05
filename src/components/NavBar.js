import { useState } from 'react';
import { createStyles, Container, UnstyledButton, Group, Text, Menu, Tabs, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout, IconHeart, IconStar, IconMessage, IconSettings, IconPlayerPause, IconTrash, IconSwitchHorizontal, IconChevronDown } from '@tabler/icons';
import { MantineLogo } from '@mantine/ds';
import { useNavigate, useLocation } from 'react-router-dom';

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const useStyles = createStyles((theme) => ({
  header: {
    position: 'fixed',
    width: '100%',
    paddingTop: theme.spacing.sm,
    backgroundColor: 'transparent'
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontWeight: 500,
    height: 38,
    backgroundColor: 'transparent',
    border: 'none',

    '&:hover': {
        color: 'white',
        backgroundColor: 'transparent',
    },

    '&[data-active]': {
        color: 'white',
    },
  },
}));

export function NavBar({ user, tabs }) {

    const navigate = useNavigate();

    const location = useLocation();

    const handleNavigate = (route) => {
        route === 'Inicio' ? navigate('/') : navigate('/' + removeAccents(route.toLowerCase()));
    }

    const { classes, theme, cx } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    const items = tabs.map((tab) => (
        <Tabs.Tab value={removeAccents(tab.toLowerCase())} key={tab} onClick={() => handleNavigate(tab)}>
        {tab}
        </Tabs.Tab>
    ));

    return (
        <div className={classes.header}>
        <Container className={classes.mainSection} fluid>
            <Group style={{display: 'flex', justifyContent: 'space-between'}}>
                <MantineLogo size={28} />
                <Tabs defaultValue={location.pathname.substring(1) !== '' ? location.pathname.substring(1) : 'inicio'} classNames={{
                    root: classes.tabs,
                    tabsList: classes.tabsList,
                    tab: classes.tab,
                }}
                >
                    <Tabs.List>{items}</Tabs.List>
                </Tabs>

                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

                <Menu
                    width={260}
                    position="bottom-end"
                    transition="pop-top-right"
                    onClose={() => setUserMenuOpened(false)}
                    onOpen={() => setUserMenuOpened(true)}
                >
                    <Menu.Target>
                    <UnstyledButton className={cx(classes.user, { [classes.userActive]: userMenuOpened })}>
                        <Group spacing={7}>
                        <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                            {user}
                        </Text>
                        <IconChevronDown size={12} stroke={1.5} />
                        </Group>
                    </UnstyledButton>
                    </Menu.Target>
                    <Menu.Dropdown>
                    <Menu.Item icon={<IconHeart size={14} color={theme.colors.red[6]} stroke={1.5} />}>
                        Liked posts
                    </Menu.Item>
                    <Menu.Item icon={<IconStar size={14} color={theme.colors.yellow[6]} stroke={1.5} />}>
                        Saved posts
                    </Menu.Item>
                    <Menu.Item icon={<IconMessage size={14} color={theme.colors.blue[6]} stroke={1.5} />}>
                        Your comments
                    </Menu.Item>

                    <Menu.Label>Settings</Menu.Label>
                    <Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>Account settings</Menu.Item>
                    <Menu.Item icon={<IconSwitchHorizontal size={14} stroke={1.5} />}>
                        Change account
                    </Menu.Item>
                    <Menu.Item icon={<IconLogout size={14} stroke={1.5} />}>Logout</Menu.Item>

                    <Menu.Divider />

                    <Menu.Label>Danger zone</Menu.Label>
                    <Menu.Item icon={<IconPlayerPause size={14} stroke={1.5} />}>
                        Pause subscription
                    </Menu.Item>
                    <Menu.Item color="red" icon={<IconTrash size={14} stroke={1.5} />}>
                        Delete account
                    </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Group>
        </Container>
        </div>
    );
}