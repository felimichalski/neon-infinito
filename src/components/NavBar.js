import { useEffect, useState } from 'react';
import { createStyles, Container, Group, Menu, Tabs, Anchor, Indicator, UnstyledButton, Image, Text, Box, Grid, Title } from '@mantine/core';
import { useDisclosure, useViewportSize } from '@mantine/hooks';
import { IconLogout, IconHeart, IconStar, IconMessage, IconSettings, IconPlayerPause, IconTrash, IconSwitchHorizontal, IconUser, IconShoppingCart, IconSearch, IconMenu2, IconLogin } from '@tabler/icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { IconChevronDown } from '@tabler/icons';
import useFetch from '../hooks/useFetch';

import Sidebar from './Sidebar'
import logo from '../assets/logo.png'

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const useStyles = createStyles((theme, {position, height, width}) => ({
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

    [theme.fn.smallerThan('md')]: {
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
    [theme.fn.largerThan('md')]: {
      display: 'none',
    }
  },
  
  burgerIcon: {
    cursor: 'pointer'
  },

  sidebar: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    }
  },

  tabs: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    }
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontFamily: 'Proxima Nova',
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

  dropdown: {
    backgroundColor: 'white',
    boxShadow: position === 'fixed' && '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
    border: 'none',
    textTransform: 'uppercase',
    color: theme.black,
    zIndex: 1100,
    padding: 0,
    left: '50% !important',
    whiteSpace: 'nowrap',
    transform: 'translateX(-50%)'
  },

  categoryList: {
    display: 'flex',
    padding: 0,
  },

  categorySection: {
    padding: '.5rem 1rem',
    color: theme.white
  },

  categoryTitle: {
    fontFamily: 'Proxima Nova',
    fontWeight: 400
  },

  category: {
    fontFamily: 'Vow',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
  }
}));

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6b17ff0283mshec54d16709af7dap15824ejsn21f5bf5019bb',
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
  }
};

const NavBar = ({ user, load, setLoading }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const {data, loading} = useFetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', options)

    useEffect(() => {
      setLoading({...load, 
        navbar: loading
      })
    }, [loading])

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
    const {height, width} = useViewportSize();
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    const [position, setPosition] = useState('absolute')
    const {classes, theme, cx} = useStyles({position, height, width});

    const tabs = [{
      name: 'Galería',
      link: '/galery'
    },{
      name: 'Categorías',
    }, {
      name: 'Personalizados',
      link: '/custom',
    }, {
      name: 'Contactanos',
      link: '/contact',
    }];

    const items = tabs?.map((tab, key) => (
      <Box key={key}>{tab.name === 'Categorías' ? 
        <Menu offset={23} closeDelay={200} radius='0' trigger='hover' withinPortal='true'>
          <Menu.Target>
            <Tabs.Tab value={removeAccents(tab.name.toLowerCase())} className={classes.tab}>
              <Text style={{display: 'flex', alignItems: 'center'}}>{tab.name}<IconChevronDown /></Text>
            </Tabs.Tab>
          </Menu.Target>
          <Menu.Dropdown className={classes.dropdown}>
            <Box className={classes.categoryList}>
              <Box className={classes.categorySection} style={{backgroundColor: '#ed6744'}}>
                <Title className={classes.categoryTitle}>Neones de Diseño</Title>
              </Box>
              <Box className={classes.categorySection} style={{backgroundColor: '#4EAE8B'}}>
                <Title className={classes.categoryTitle}>Artístico</Title>
              </Box>
              <Box className={classes.categorySection} style={{backgroundColor: '#586ce1'}}>
                <Title className={classes.categoryTitle}>Algo Distinto</Title>
              </Box>
            </Box>
          </Menu.Dropdown>
        </Menu>
        // <Tabs.Tab value={removeAccents(tab.name.toLowerCase())} className={classes.tab} onClick={() => setCollapseOpened(!collapseOpened)}>
        //     <Text style={{display: 'flex', alignItems: 'center'}}>{tab.name}<IconChevronDown /></Text>
        // </Tabs.Tab>
      :
        <Link to={tab.link} className={classes.tabLink}>
            <Tabs.Tab value={removeAccents(tab.name.toLowerCase())} className={classes.tab}>
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
                  <Image src={logo} height={50}/>
              </Anchor>
            </Group>

            <Group>
              <Tabs classNames={{
                root: classes.tabs,
                tabsList: classes.tabsList
              }}
              onTabChange={null}
              >
                <Tabs.List>{items}</Tabs.List>
              </Tabs>
            </Group>
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
                      Productos favoritos
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
        {/* <Collapse in={collapseOpened} className={classes.categoryList} transitionDuration={600} transitionTimingFunction="linear" animateOpacity='false'>
          <CloseButton aria-label="Close collapse" onClick={() => setCollapseOpened(!collapseOpened)} className={classes.closeButton} ref={collapseRef}/>
          <Grid style={{padding: '2rem'}}>
            <Grid.Col span={3} className={classes.category}><IconChevronRight/> Deportes</Grid.Col>
            <Grid.Col span={3} className={classes.category}><IconChevronRight/> Musica</Grid.Col>
            <Grid.Col span={3} className={classes.category}><IconChevronRight/> Botanico</Grid.Col>
            <Grid.Col span={3} className={classes.category}><IconChevronRight/> Zodíaco</Grid.Col>
            <Grid.Col span={3} className={classes.category}><IconChevronRight/> Animales</Grid.Col>
            <Grid.Col span={3} className={classes.category}><IconChevronRight/> Logos</Grid.Col>
            <Grid.Col span={3} className={classes.category}><IconChevronRight/> Frases</Grid.Col>
            <Grid.Col span={3} className={classes.category}><IconChevronRight/> Fantasía</Grid.Col>
            <Grid.Col span={3} className={classes.category}><IconChevronRight/> Películas y Series</Grid.Col>
          </Grid>
        </Collapse> */}
        <Sidebar opened={opened} toggle={toggle} className={classes.sidebar}/>
      </>
    );
}

export default NavBar;