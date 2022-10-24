import { createStyles, Container, Title, Text, Button, BackgroundImage, Overlay, Box } from '@mantine/core'

import background from '../assets/bg3.jpg'

const useStyles = createStyles((theme) => ({

    root: {
      minHeight: '50vh',
      height: 'min-content',
      width: '100%',
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
      
    backgroundImage: {
      zIndex: -2,
      position: 'absolute',
      height: '100%',
    },
    
    container: {
      padding: '3rem 5rem',
      margin: '4rem auto',
      textAlign: 'center',
    },

    inner: {
      display: 'flex',
      justifyContent: 'space-between',
  
      [theme.fn.smallerThan('md')]: {
        flexDirection: 'column',
      },
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
      margin: '0 auto',
      fontSize: 55,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        fontSize: 34,
        lineHeight: 1.15,
      },
    },

    control: {
      paddingLeft: 50,
      paddingRight: 50,
      fontFamily: `Gotham`,
      fontSize: 22,
  
      [theme.fn.smallerThan('md')]: {
        width: '100%',
      },
    },
}));

const TitleBox = () => {

  const { classes } = useStyles();

  return (
      <Box className={classes.root}>
          <BackgroundImage src={background} className={classes.backgroundImage}>
              <Overlay opacity={.2} blur={2} color="#000"/>
              {/* <Overlay gradient={'linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1) 100%)'}/> */}
              <Overlay gradient={'linear-gradient(180deg, rgba(0, 0, 0, 0) 70%, rgba(8, 16, 37, 1) 100%)'}/>
              <Overlay gradient={'linear-gradient(180deg, rgba(0, 0, 0, 0) 70%, rgba(8, 16, 37, 1) 100%)'}/>
          </BackgroundImage>
          <Container size="lg" className={classes.container}>
              <div className={classes.inner}>
                  <div className={classes.content}>
                      <Title className={classes.title}>
                      Lorem{' '}
                      <Text
                          component="span"
                          inherit
                          variant="gradient"
                          gradient={{ from: 'pink', to: 'yellow' }}
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
                      size="xl"
                      className={classes.control}
                      mt={40}
                      >
                      Get started
                      </Button>
                  </div>
              </div>
          </Container>
      </Box>
    )
}

export default TitleBox