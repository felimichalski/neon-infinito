import { createStyles, Container, Title, Text, Button, BackgroundImage } from '@mantine/core';

import bg from '../images/bg2.jpg'

const useStyles = createStyles((theme) => ({
  root: {
      paddingTop: theme.spacing.xl * 3,
      paddingBottom: theme.spacing.xl * 3,
      backgroundImage: 'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%)',
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

const TB = () => {
  const { classes } = useStyles();
  return (
    <BackgroundImage src={bg} className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                fully featured
              </Text>{' '}
              React components library
            </Title>

            <Text className={classes.description} mt={30}>
              Build fully functional accessible web applications with ease – Mantine includes more
              than 100 customizable components and hooks to cover you in any situation
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
  );
}

export default TB;