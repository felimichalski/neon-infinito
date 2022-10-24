import { useEffect, useState } from 'react';
import { createStyles, Container, Group, Menu, Tabs, Anchor, Indicator, UnstyledButton, Image, Text, Box, Grid } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout, IconHeart, IconStar, IconMessage, IconSettings, IconPlayerPause, IconTrash, IconSwitchHorizontal, IconUser, IconShoppingCart, IconSearch, IconMenu2, IconLogin } from '@tabler/icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { IconChevronDown } from '@tabler/icons';

import Sidebar from './Sidebar'
import logo from '../assets/logo.png'

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const useStyles = createStyles((theme, {position}) => ({
  header: {
    width: '90%',
    zIndex: 1000,
    position,
    top: position === 'absolute' ? '50px' : '25px',
    backgroundColor: position === 'absolute' ? 'transparent' : 'rgba(255, 255, 255, 0.8)',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '.5rem',
    backdropFilter: position === 'fixed' && 'saturate(200%) blur(30px)',
    boxShadow: position === 'fixed' && '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
    transition: 'background-color .3s ease-out',
  },

  mainSection: {
    padding: '.5rem 3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  iconContainer: {
    padding: `${theme.spacing.sm}px ${theme.spacing.sm}px`,
    cursor: 'default',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    }
  },

  icon: {
    color: position === 'absolute' ? theme.white : theme.black,
    cursor: 'pointer',
    transition: 'color .3s ease-out',
  },

  burger: {
    padding: `${theme.spacing.sm}px ${theme.spacing.sm}px`,
    cursor: 'default',
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    }
  },
  
  burgerIcon: {
    cursor: 'pointer'
  },

  sidebar: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    }
  },

  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    }
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontFamily: 'Gotham',
    fontWeight: '700',
    fontSize: '15px',
    backgroundColor: 'transparent',
    border: 'none',
    color: position === 'absolute' ? theme.white : theme.black,
    textTransform: 'uppercase',
    transition: 'all .3s ease-out',
    userSelect: 'none',

    '&[data-active]': {
      color: position === 'absolute' ? theme.white : 'black !important',
    },

    '&:hover': {
        backgroundColor: 'transparent'
    },
  },

  tabLink: {
    pointerEvents: 'auto',
    textDecoration: 'none',
    display: 'flex',
  },

  active: {
    color: position === 'absolute' ? '#324ACF' : '#253AA2'
    // borderBottom: position === 'absolute' ? '2px solid white' : '2px solid black',

    // '&:hover': {
    //   borderBottom: position === 'absolute' ? '2px solid white' : '2px solid black',
    // },
    
    // '&[data-active]': {
    //   borderBottom: position === 'absolute' ? '2px solid white' : '2px solid black',
    // },

    // '&[data-active]:hover': {
    //   borderBottom: position === 'absolute' ? '2px solid white' : '2px solid black',
    // }
  },

  categoryList: {
    backgroundColor: 'rgba(0, 0, 0, .8)',
    backdropFilter: position === 'fixed' && 'saturate(200%) blur(30px)',
    boxShadow: position === 'fixed' && 'rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem',
    border: 'none',
    fontFamily: 'Gotham',
    fontWeight: '800',
    padding: '2rem',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: theme.white
  }
}));

const NavBar = ({ user }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleSearch = (e) => {
      if(e.key.toLowerCase() === 'enter') {
        navigate(`/search?id=${e.target.value}`)
      }
    }

    const handleScroll = () => {
      if(window.scrollY > 25) {
        setPosition('fixed');
      } else {
        setPosition('absolute');
      }
    }
    
    const [opened, { toggle }] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    const [drawerOpened, setDrawerOpened] = useState(false);
    const [position, setPosition] = useState('absolute')
    const {classes, theme, cx} = useStyles({position});
    const active = location.pathname;

    const tabs = [{
        name: 'Inicio',
        link: '/',
    }, {
        name: 'Categorías',
    }, {
        name: 'Proyectos',
        link: '/projects',
    }, {
        name: 'Contacto',
        link: '/contact',
    }];

    const items = tabs?.map((tab, key) => (
      <Box key={key}>{tab.name === 'Categorías' ? 
        <Menu offset={20} trigger='hover' closeDelay={200}>
          <Menu.Target>
            <Tabs.Tab value={removeAccents(tab.name.toLowerCase())} className={classes.tab} onClick={() => setDrawerOpened(true)} zIndex={1100}>
              <Text style={{display: 'flex', alignItems: 'center'}}>{tab.name}<IconChevronDown /></Text>
            </Tabs.Tab>
          </Menu.Target>
          <Menu.Dropdown className={classes.categoryList}>
            <Grid>
              <Grid.Col span={4}>Deportes</Grid.Col>
              <Grid.Col span={4}>Musica</Grid.Col>
              <Grid.Col span={4}>Botanico</Grid.Col>
              <Grid.Col span={4}>Zodíaco</Grid.Col>
              <Grid.Col span={4}>Animales</Grid.Col>
              <Grid.Col span={4}>Logos</Grid.Col>
              <Grid.Col span={4}>Frases</Grid.Col>
              <Grid.Col span={4}>Fantasía</Grid.Col>
              <Grid.Col span={4}>Películas y Series</Grid.Col>
            </Grid>
          </Menu.Dropdown>
        </Menu>
      :
      <Link to={tab.link} className={classes.tabLink}>
          <Tabs.Tab value={removeAccents(tab.name.toLowerCase())} className={cx(classes.tab, {[classes.active]: active === tab.link})}>
              <Text style={{display: 'flex', alignItems: 'center'}}>{tab.name}</Text>
          </Tabs.Tab>
      </Link>
      }</Box>
    ));

    useEffect(() => {
      handleScroll();
      document.addEventListener('scroll', handleScroll);
      return () => document.removeEventListener('scroll', handleScroll)
    }, [])

    return (
      <>
        <div className={classes.header}>
          <Container className={classes.mainSection} fluid>  
            <Group className={classes.logo}>
              <Anchor component={Link} to="/" style={{
                  textDecoration: 'none'
                }}>
                  <Image src={logo} height={40}/>
              </Anchor>
            </Group>

            <Group>

            </Group>
            <Tabs classNames={{
                root: classes.tabs,
                tabsList: classes.tabsList
              }}
              onTabChange={null}
            >
              <Tabs.List>{items}</Tabs.List>
            </Tabs>
            <Group>
              <UnstyledButton className={classes.burger}>
                <IconMenu2 onClick={toggle} className={classes.burgerIcon} size={30} color={position === 'absolute' ? 'white' : 'black'}/>
              </UnstyledButton>
              <UnstyledButton className={classes.iconContainer}>
                <IconSearch size={30} stroke={1.5} className={classes.icon}/>
              </UnstyledButton>
              {user?
              <Menu
                  width={260}
                  position="bottom-end"
                  transition="pop-top-right"
                  onClose={() => setUserMenuOpened(false)}
                  onOpen={() => setUserMenuOpened(true)}
              >
                <Menu.Target>
                  <UnstyledButton
                    className={cx(classes.iconContainer, { [classes.userActive]: userMenuOpened })}
                  >
                    <IconUser size={30} stroke={1.5} className={classes.icon}/>
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
              :
              <UnstyledButton className={classes.iconContainer}>
                <IconLogin size={30} stroke={1.5} className={classes.icon}/>
              </UnstyledButton>
              }
              <UnstyledButton className={classes.iconContainer}>
                <Indicator size={20} radius='xl' label='0' inline styles={{ indicator: {padding: '0'} }}>
                  <IconShoppingCart size={30} stroke={1.5} className={classes.icon}/>
                </Indicator>
              </UnstyledButton>
            </Group>
          </Container>
        </div>
        <Sidebar opened={opened} toggle={toggle} className={classes.sidebar}/>
      </>
    );
}

export default NavBar;