import { createStyles, Container, Title, Text, Button, Overlay, Box } from '@mantine/core'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import background from '../assets/bg3.jpg'

const useStyles = createStyles((theme) => ({
    parallax: {
      minHeight: '130vh',
      color: theme.white
    },

    ct: {
      zIndex: 30,
      display: 'flex',
      alignItems: 'center'
    },

    root: {
      height: 'min-content',
      width: '100%',
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
      
    container: {
      padding: '3rem 5rem',
      margin: '4rem auto',
    },

    inner: {
      display: 'flex',
      textAlign: 'center'
    },
  
    image: {
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },
  
    content: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
  
      [theme.fn.smallerThan('md')]: {
        marginRight: 0,
      },
    },
  
    description: {
      color: theme.white,
      opacity: 0.75,
      maxWidth: 500,
    
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
      },
    },

    title: {
      color: theme.white,
      fontFamily: `Gotham`,
      fontWeight: 900,
      lineHeight: 1.05,
      width: '60%',
      fontSize: 55,
      margin: '0 auto',
      WebkitTextFillColor: 'transparent',
      WebkitTextStroke: '1px white',
  
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
}));

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6b17ff0283mshec54d16709af7dap15824ejsn21f5bf5019bb',
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
  }
};


const TitleBox = () => {
   
  const { classes } = useStyles();

  return (
      <Box className={classes.root}>
          <ParallaxBanner className={classes.parallax}>
            <ParallaxBannerLayer image={background} speed={-20} />
            <Overlay color='#000' opacity={.4} zIndex={2}/>
            <ParallaxBannerLayer className={classes.ct}>
              <Container size="lg" className={classes.container}>
                  <div className={classes.inner}>
                      <div className={classes.content}>
                          <Title className={classes.title} variant=''>
                          Lorem{' '}
                          <Text
                              component="span"
                              inherit
                              className={classes.filledTitle}
                          >
                              ipsum dolor sit amet
                          </Text>{' '}
                          consectetur adipisicing elit.
                          </Title>

                          {/* <Text className={classes.description} mt={30}>
                          Maiores, vitae consectetur? Esse sint vitae debitis inventore, cumque perferendis iste consequuntur, nam repellat, animi blanditiis ratione error modi alias omnis velit.
                          </Text> */}

                          <Button
                          variant="gradient"
                          gradient={{ from: 'pink', to: 'yellow' }}
                          size="lg"
                          className={classes.control}
                          mt={40}
                          >
                          Get Started
                          </Button>
                      </div>
                  </div>
              </Container>
            </ParallaxBannerLayer>
          </ParallaxBanner>
      </Box>
    )
}

export default TitleBox