import { useEffect, useState } from 'react';
import { createStyles, Container, Group, Menu, Tabs, Burger, Anchor, Indicator, UnstyledButton, Image, Input } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout, IconHeart, IconStar, IconMessage, IconSettings, IconPlayerPause, IconTrash, IconSwitchHorizontal, IconUser, IconShoppingCart, IconSearch } from '@tabler/icons';
import { useLocation, Link } from 'react-router-dom';

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
    boxShadow: position === 'fixed' && 'rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem',
    transition: 'background-color .3s ease-out'
  },

  mainSection: {
    padding: '.5rem 3rem .3rem 3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  cart: {
    padding: `${theme.spacing.sm}px ${theme.spacing.sm}px`,
    cursor: 'default',

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    }
  },

  cartIcon: {
    color: position === 'absolute' ? theme.white : theme.black,
    cursor: 'pointer',
    transition: 'color .3s ease-out',
  },

  user: {
    padding: `${theme.spacing.sm}px ${theme.spacing.sm}px`,
    cursor: 'default',

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    }
  },

  userIcon: {
    color: position === 'absolute' ? theme.white : theme.black,
    cursor: 'pointer',
    transition: 'color .3s ease-out',
  },

  burger: {
    padding: `${theme.spacing.sm}px ${theme.spacing.sm}px`,
    cursor: 'default',
  },
  
  burgerIcon: {
    cursor: 'pointer',
  },

  tabs: {
    marginLeft: '2rem',

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  logo: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: '15px',
    backgroundColor: 'transparent',
    border: 'none',
    color: theme.white,
    margin: '0 .5rem',
    cursor: 'default',
    pointerEvents: 'none',

    '&:hover': {
        color: theme.white,
        backgroundColor: 'transparent',
    },

    '&[data-active]': {
        color: theme.white,
    },

    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '2px',
      backgroundColor: theme.white,
      transform: 'scaleX(0)',
      transformOrigin: 'bottom right',
      transition: 'transform .25s ease-out'
    },
    
    [`&:hover:after`]: {
      transform: 'scaleX(1)',
      transformOrigin: 'bottom left',
    }

  },

  tabLink: {
    pointerEvents: 'auto',
    textDecoration: 'none',
    color: theme.white
  },

  search: {
    borderBottom: position === 'absolute' ? '2px solid white' : '2px solid black',
    transition: 'all .3s ease-out'
  }
}));

const NavBar = ({ user, tabs }) => {

    const location = useLocation();

    const handleRoute = (route) => {
        if(route === 'Inicio') {
          return '/' 
        } else { 
          return '/' + removeAccents(route.toLowerCase())
      }
    }

    const handleSearch = (e) => {
      if(e.key.toLowerCase() === 'enter') {
        alert('hi')
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
    const [position, setPosition] = useState('absolute')
    const { classes, theme, cx } = useStyles({position});

    const items = tabs?.map((tab) => (
        <Tabs.Tab key={tab} value={removeAccents(tab.toLowerCase())}>
        {tab==='Categorías' ? 
          <Link to='/categorias' className={classes.tabLink}>{tab}</Link>
        : <Link to={handleRoute(tab)} className={classes.tabLink}>{tab}</Link>}
        </Tabs.Tab>
    ));

    useEffect(() => {
      handleScroll();
      document.addEventListener('scroll', handleScroll);
      return () => document.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={classes.header}>
          <Container className={classes.mainSection} fluid>
            <Group>
              <Input
                  icon={<IconSearch color={position === 'absolute' ? 'white' : 'black'} />}
                  variant="unstyled"
                  placeholder="Buscar"
                  type="search"
                  className={classes.search}
                  onKeyPress={(e) => handleSearch(e)}
                  styles={{ input: {color: position === 'absolute' ? 'white' : 'black'} }}
                />
            </Group>
            <Group className={classes.logo}>
              <Anchor component={Link} to="/" style={{
                  textDecoration: 'none'
                }}>
                  <Image src={logo} height={40}/>
              </Anchor>
              {/* <Tabs defaultValue={location.pathname.substring(1) !== '' ? location.pathname.substring(1) : 'inicio'} classNames={{
                  root: classes.tabs,
                  tabsList: classes.tabsList,
                  tab: classes.tab,
              }}
              >
                  <Tabs.List>{items}</Tabs.List>
              </Tabs> */}
            </Group>
            
            <Group>
              <UnstyledButton className={classes.cart}>
                <Indicator size={20} radius='xl' label='0' inline styles={{ indicator: {padding: '0'} }}>
                  <IconShoppingCart size={30} stroke={1.5} className={classes.cartIcon}/>
                </Indicator>
              </UnstyledButton>
              <Menu
                  width={260}
                  position="bottom-end"
                  transition="pop-top-right"
                  onClose={() => setUserMenuOpened(false)}
                  onOpen={() => setUserMenuOpened(true)}
              >
                <Menu.Target>
                  <UnstyledButton
                    className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                  >
                    <IconUser size={30} stroke={1.5} className={classes.userIcon}/>
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
              <UnstyledButton className={classes.burger}>
                <Burger opened={opened} onClick={toggle} className={classes.burgerIcon} size="sm" color={position === 'absolute' ? 'white' : 'black'}/>
              </UnstyledButton>
            </Group>
          </Container>
        </div>
    );
}

export default NavBar;