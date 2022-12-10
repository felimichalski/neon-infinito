import { createStyles, Container, Title, Text, Overlay, Box, BackgroundImage, Image, Tabs } from '@mantine/core'
import { Link } from 'react-router-dom';

import background from '../assets/descarga.jpg'
import logo from '../assets/logo.png'
import CategoriesMenu from './NavBar/CategoriesMenu';

import removeAccents from '../utils/removeAccents';

const useStyles = createStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    position: 'relative',
  },
    
  container: {
    zIndex: 3,
    height: '100%',
    width : '100%',
    backgroundColor: 'white',
    position: 'relative',
    display: 'flex',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '5rem'
  },

  title: {
    color: theme.white,
    fontFamily: `Gotham`,
    fontWeight: 900,
    lineHeight: 1.05,
    width: '60%',
    fontSize: 55,
    WebkitTextFillColor: 'transparent',
    WebkitTextStroke: '1px white',
    textAlign: 'center',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  filledTitle: {
    WebkitTextFillColor: 'white',
  },

  control: {
    fontFamily: `Gotham`,
    fontSize: 22,
    color: theme.white,
    padding: '0 2rem',

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontFamily: 'Proxima Nova',
    fontWeight: 600,
    fontSize: '12px',
    backgroundColor: 'transparent',
    border: 'none',
    color: theme.colors.gray[6],
    textTransform: 'uppercase',
    transition: 'all .3s ease-out',
    userSelect: 'none',
    margin: '0 1rem',

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
  name: 'Inicio',
  link: '/'
},{
  name: 'Galería',
  link: '/galery'
}, {
  name: 'Categorías',
}, {
  name: 'Personalizados',
  link: '/custom',
}, {
  name: 'Contactanos',
  link: '/contact',
}];

const TitleBox = () => {
   
  const { classes } = useStyles();

  const items = tabs?.map((tab, key) => (
    <Box key={key}>{tab.name === 'Categorías' ? 
      <CategoriesMenu tab={tab} position='absolute'/>
    :
      <Link to={tab.link} className={classes.tabLink}>
          <Tabs.Tab value={removeAccents(tab.name.toLowerCase())} className={classes.tab}>
              <Text style={{display: 'flex', alignItems: 'center'}}>{tab.name}</Text>
          </Tabs.Tab>
      </Link>
    }</Box>
  ));


  return (
      <Box className={classes.root}>
        <BackgroundImage src={background} className={classes.container}>
          <div className={classes.content}>
              <Title className={classes.title}>
                Bienvenidos a
              </Title>
              <Image src={logo} width={300} style={{margin: '2rem 0 4rem 0'}}/>
              <Tabs classNames={{
                root: classes.tabs,
                tabsList: classes.tabsList
              }}
              onTabChange={null}
              >
                <Tabs.List>{items}</Tabs.List>
              </Tabs>
          </div>
        </BackgroundImage>
        <Overlay color='#000' opacity={.4} zIndex={2}/>
      </Box>
    )
}

export default TitleBox