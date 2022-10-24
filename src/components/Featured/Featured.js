import FeaturedCard from "./FeaturedCard"
import { createStyles, Box, Title, Container, Anchor } from "@mantine/core";
import { IconChevronRight } from '@tabler/icons';
import { Link } from 'react-router-dom';

import img1 from '../../assets/products/VECTORES-01.png'
import img2 from '../../assets/products/VECTORES-02.png'
import img3 from '../../assets/products/VECTORES-03.png'
import img4 from '../../assets/products/VECTORES-04.png'

const useStyles = createStyles((theme) => ({
    container: {
        padding: '2rem',
        backgroundColor: 'white',
    },

    titleBox: {
        margin: '3rem 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',
        fontFamily: 'Gotham',
        textTransform: 'uppercase',
    },

    title: {
        fontFamily: 'Gotham',
        fontWeight: '600',
    },

    titleLink: {
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',

        '&:hover': {
            color: 'white'
        }
    },

    cardsBox: {
        display: 'flex',
    }
}))

const Featured = () => {

    const {classes} = useStyles();

    const data = [
        {
            image: img1,
            category: 'Series',
            title: 'Neon 1',
            price: '100'
        },
        {
            image: img2,
            category: 'Deportes',
            title: 'Neon 2',
            price: '200'
        },
        {
            image: img3,
            category: 'Fantasía',
            title: 'Neon 3',
            price: '300'
        },
        {
            image: img4,
            category: 'Animales',
            title: 'Neon 4',
            price: '400'
        },
    ];

  return (
    <Box className={classes.container}>
        <Container className={classes.titleBox} fluid>
            <Title className={classes.title}>Productos Destacados</Title>
            <Anchor component={Link} to='/products/featured' className={classes.titleLink} variant='text'>Ver Todo<IconChevronRight /></Anchor>
        </Container>
        <Box className={classes.cardsBox}>
            {data?.map((card, key) => (
                <FeaturedCard data={card} key={key}/>
            ))}
        </Box>
    </Box>
  )
}

export default Featured