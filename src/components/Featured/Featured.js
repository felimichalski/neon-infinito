import { useRef } from "react";
import FeaturedCard from "./FeaturedCard"
import { createStyles, Box, Title, Container } from "@mantine/core";
import { Carousel } from "@mantine/carousel"
import Autoplay from 'embla-carousel-autoplay';
import { IconChevronRight } from '@tabler/icons';
import { Link } from 'react-router-dom';

import img1 from '../../assets/products/VECTORES-01.png'
import img2 from '../../assets/products/VECTORES-02.png'
import img3 from '../../assets/products/VECTORES-03.png'
import img4 from '../../assets/products/VECTORES-04.png'

const useStyles = createStyles((theme) => ({
    container: {
        padding: '4rem 0',
    },

    titleBox: {
        padding: '0 3rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',
        fontFamily: 'Gotham',
        textTransform: 'uppercase',
    },

    title: {
        fontFamily: 'Proxima Nova',
        margin: '0 auto',
        fontSize: '4rem',
        fontWeight: 700,
        color: '#black',
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

    carousel: {
        margin: 0,
        padding: 0,
        paddingBottom: '3rem'
    }
}))

const Featured = () => {

    const {classes} = useStyles();
    const autoplay = useRef(Autoplay({ delay: 2000 }));

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
            {/* <Anchor component={Link} to='/products/featured' className={classes.titleLink} variant='text'>Ver Todo<IconChevronRight /></Anchor> */}
        </Container>
        <Carousel
        height='max-content'
        slideSize="20%"
        gap='sm'
        align='center'
        breakpoints={[
            { maxWidth: 'lg', slideSize: '25%', slideGap: 'xs' },
            { maxWidth: 'md', slideSize: '33.333333%', slideGap: 0 },
            { maxWidth: 'sm', slideSize: '50%', slideGap: 0 },
        ]}
        loop
        className={classes.carousel}
        withControls={false}
        withIndicators
        // plugins={[autoplay.current]}
        controlsOffset={20}
        styles={{indicator: {
            backgroundColor: 'rgb(0, 0, 0)',
        } }}
        >
            {data?.map((card, key) => (
                <Carousel.Slide key={key}>
                    <FeaturedCard data={card}/>
                </Carousel.Slide>
            ))}
        </Carousel>
        
    </Box>
  )
}

export default Featured