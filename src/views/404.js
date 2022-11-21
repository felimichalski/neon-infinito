import { useEffect } from 'react';
import { createStyles, Image, Container, Title, Text, Button, SimpleGrid, Box } from '@mantine/core';
import { Link } from 'react-router-dom';

import image from '../assets/404.svg';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
    color: theme.white
  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,
    fontFamily: 'Gotham',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  desc: {
    fontFamily: 'Proxima Nova',
    fontSize: 15
  },

  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  mobileImage: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  desktopImage: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

const ErrorPage = () => {

  const { classes } = useStyles();

  useEffect(() => {
    document.body.style.backgroundColor = 'black'
  }, [])


  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>
        <Image src={image} className={classes.mobileImage} />
        <Box>
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg" className={classes.desc}>
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
          </Text>
          <Button variant="outline" size="md" mt="xl" className={classes.control}>
            <Link to='/'>
                Get back to home page
            </Link>
          </Button>
        </Box>
        <Image src={image} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
}

export default ErrorPage;