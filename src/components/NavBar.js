import { useEffect, useState } from 'react';
import { createStyles, Container, Group, Menu, Tabs, Anchor, Indicator, UnstyledButton, Image, Input } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout, IconHeart, IconStar, IconMessage, IconSettings, IconPlayerPause, IconTrash, IconSwitchHorizontal, IconUser, IconShoppingCart, IconSearch, IconMenu2 } from '@tabler/icons';
import { Link, useNavigate } from 'react-router-dom';

import Sidebar from './Sidebar'
import logo from '../assets/logo.png'

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
    cursor: 'pointer'
  },
  
  logo: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  },

  search: {
    borderBottom: position === 'absolute' ? '2px solid white' : '2px solid black',
    transition: 'all .3s ease-out'
  }
}));

const NavBar = ({ user }) => {

    const navigate = useNavigate();

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
    const [position, setPosition] = useState('absolute')
    const {classes, theme, cx} = useStyles({position});

    useEffect(() => {
      handleScroll();
      document.addEventListener('scroll', handleScroll);
      return () => document.removeEventListener('scroll', handleScroll)
    }, [])

    return (
      <>
        <div className={classes.header}>
          <Container className={classes.mainSection} fluid>  
            <Group>
              <UnstyledButton className={classes.burger}>
                <IconMenu2 onClick={toggle} className={classes.burgerIcon} size={30} color={position === 'absolute' ? 'white' : 'black'}/>
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
                {user ?
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
                :
                <Menu.Dropdown>
                  <Menu.Item>
                    Sign In
                  </Menu.Item>
                </Menu.Dropdown>
                }
              </Menu>
              <UnstyledButton className={classes.cart}>
                <Indicator size={20} radius='xl' label='0' inline styles={{ indicator: {padding: '0'} }}>
                  <IconShoppingCart size={30} stroke={1.5} className={classes.cartIcon}/>
                </Indicator>
              </UnstyledButton>
            </Group>

            <Group className={classes.logo}>
              <Anchor component={Link} to="/" style={{
                  textDecoration: 'none'
                }}>
                  <Image src={logo} height={40}/>
              </Anchor>
            </Group>

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
          </Container>
        </div>
        <Sidebar opened={opened} toggle={toggle}/>
      </>
    );
}

export default NavBar;