import { createStyles, Container, Title, Text, Button, BackgroundImage, Overlay, Box } from '@mantine/core'

import background from '../images/bg2.jpg'

const useStyles = createStyles((theme) => ({

    root: {
        minHeight: '27rem',
        height: 'min-content',
        position: 'relative',
        padding: '5rem 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)'
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
      marginRight: theme.spacing.xl * 3,
  
      [theme.fn.smallerThan('md')]: {
        marginRight: 0,
      },
    },
  
    title: {
      color: theme.white,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      lineHeight: 1.05,
      maxWidth: 500,
      fontSize: 48,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        fontSize: 34,
        lineHeight: 1.15,
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
  
    control: {
      paddingLeft: 50,
      paddingRight: 50,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: 22,
  
      [theme.fn.smallerThan('md')]: {
        width: '100%',
      },
    },
}));

const TitleBox = () => {

    const { classes } = useStyles();

    return (
        <Box>
            <BackgroundImage src={background} className={classes.root}>
                <Overlay gradient={'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(0,0,0,1) 100%);'}/>
                <Container size="lg">
                    <div className={classes.inner}>
                        <div className={classes.content}>
                            <Title className={classes.title}>
                            Lorem{' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: 'red', to: 'blue' }}
                            >
                                ipsum dolor sit amet
                            </Text>{' '}
                            consectetur adipisicing elit.
                            </Title>

                            <Text className={classes.description} mt={30}>
                            Maiores, vitae consectetur? Esse sint vitae debitis inventore, cumque perferendis iste consequuntur, nam repellat, animi blanditiis ratione error modi alias omnis velit.
                            </Text>

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
            </BackgroundImage>
        </Box>
    )
}

export default TitleBox