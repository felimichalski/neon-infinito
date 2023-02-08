import { useEffect, useState } from 'react';
import { createStyles, Container, Group, Menu, Tabs, Anchor, UnstyledButton, Image, Text, Box, Grid, Title } from '@mantine/core';
import { useDisclosure, useViewportSize } from '@mantine/hooks';
import { IconLogout, IconHeart, IconStar, IconMessage, IconSettings, IconPlayerPause, IconTrash, IconSwitchHorizontal, IconUser, IconShoppingCart, IconSearch, IconMenu2, IconLogin, IconDoorEnter } from '@tabler/icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../features/slices/authSlice';
import { motion } from "framer-motion";

import removeAccents from '../../utils/removeAccents';

import CartModal from '../CartModal/CartModal';
import Sidebar from './Sidebar'
import logo from '../../assets/logo.png'
import CategoriesMenu from './CategoriesMenu';

const useStyles = createStyles((theme, {position, top, height, width}) => ({
  header: {
    width: '90%',
    zIndex: 1000,
    position,
    top,
    backgroundColor: position === 'absolute' ? 'transparent' : 'rgba(255, 255, 255, 0.8)',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '.5rem',
    backdropFilter: position === 'fixed' && 'saturate(200%) blur(30px)',
    boxShadow: position === 'fixed' && '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
    transition: 'background-color .3s ease-out',
    transition: position === 'fixed' && 'top .5s ease-out',
  },

  mainSection: {
    padding: '.5rem 3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  logo: {
    display: position === 'absolute' ? 'none' : 'default',
  },

  iconContainer: {
    padding: `${theme.spacing.sm}px ${theme.spacing.sm}px`,
    cursor: 'default',
    position: 'relative',

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    }
  },

  icon: {
    color: position === 'absolute' ? theme.white : theme.black,
    cursor: 'pointer',
    transition: 'color .3s ease-out',    
  },

  cartIndicator: {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: '#C70039',
    color: theme.white,
    top: '5px',
    right: '5px',
    fontSize: '12px',
    fontWeight: 700,
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    display: position === 'absolute' ? 'none' : 'default',
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
  }
}));

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

const NavBar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    
    const cartState = useSelector((state) => state.cart)
    const userState = useSelector((state) => state.auth)

    const [opened, { toggle }] = useDisclosure(false);
    const {height, width} = useViewportSize();
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    const [cartModalOpened, setCartModalOpened] = useState(false);
    const [position, setPosition] = useState('absolute')
    const [top, setTop] = useState('50px');
    const {classes, theme, cx} = useStyles({position, height, width, top});
    const [cartIndicator, setCartIndicator] = useState();
    const [user, setUser] = useState(undefined);

    const handleSearch = (e) => {
      if(e.key.toLowerCase() === 'enter') {
        navigate(`/search?id=${e.target.value}`)
      }
    }

    const handleScroll = () => {
      if(window.scrollY > window.innerHeight) {
        setPosition('fixed');
        setTop('25px');
      } else if(window.scrollY > 150) {
        setTop('-10rem');
      } else {
        setPosition('absolute');
        setTop('50px');
      }
    }

    useEffect(() => {
      setCartIndicator(cartState.cartTotalQuantity)
    }, [cartState])
    
    useEffect(() => {
      if(Object.keys(userState.userInfo).length > 0) {
        setUser(userState.userInfo)
      } else {
        setUser(undefined)
      }
    }, [userState])

    useEffect(() => {
      handleScroll();
      document.addEventListener('scroll', handleScroll);
      return () => document.removeEventListener('scroll', handleScroll)
    }, [])

    const items = tabs?.map((tab, key) => (
      <Box key={key}>{tab.name === 'Categorías' ? 
        <CategoriesMenu tab={tab} position={position}/>
      :
        <Link to={tab.link} className={classes.tabLink}>
            <Tabs.Tab value={removeAccents(tab.name.toLowerCase())} className={classes.tab}>
                <Text style={{display: 'flex', alignItems: 'center'}}>{tab.name}</Text>
            </Tabs.Tab>
        </Link>
      }</Box>
    ));

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

            <Group position='center'>
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
                  <Menu.Item color="red" icon={<IconLogout size={14} stroke={1.5} />} onClick={() => dispatch(logOut())}>
                      Log out
                  </Menu.Item>
                  {user.admin &&
                    <>
                      <Menu.Divider />
                      <Link to='/backoffice' style={{ textDecoration: 'none' }}>
                        <Menu.Item color="green" icon={<IconDoorEnter size={14} stroke={1.5} />}>
                            Backoffice
                        </Menu.Item>
                      </Link>
                    </>
                  }
                </Menu.Dropdown>
              </Menu>
              :
              <UnstyledButton className={classes.iconContainer}>
                  <IconLogin size={30} stroke={1.5} className={classes.icon}/>
              </UnstyledButton>
              }
              <UnstyledButton className={classes.iconContainer}>
                <motion.span className={classes.cartIndicator}>{cartIndicator}</motion.span>
                <IconShoppingCart size={30} stroke={1.5} className={classes.icon} onClick={() => setCartModalOpened(!cartModalOpened)}/>
              </UnstyledButton>
            </Group>
          </Container>
        </div>
        <Sidebar opened={opened} toggle={toggle} className={classes.sidebar}/>
        <CartModal opened={cartModalOpened} setOpened={setCartModalOpened}/>
      </>
    );
}

export default NavBar;