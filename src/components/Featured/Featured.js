import { useRef } from "react";

import FeaturedCard from "./FeaturedCard"
import { createStyles, Box, Title, Container } from "@mantine/core";
import { Carousel } from "@mantine/carousel"

import { useInView, motion } from "framer-motion"

import img1 from '../../assets/products/VECTORES-01.png'
import img2 from '../../assets/products/VECTORES-02.png'
import img3 from '../../assets/products/VECTORES-03.png'
import img4 from '../../assets/products/VECTORES-04.png'

const useStyles = createStyles((theme) => ({
    container: {
        padding: '4rem 0 0 0',
        margin: '10rem 0 0 0'
    },

    titleBox: {
        padding: '0 3rem',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',
        fontFamily: 'Gotham',
        textTransform: 'uppercase',
        height: '10rem'
    },
    
    title: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: 'Proxima Nova',
        margin: '0 auto',
        fontSize: '8rem',
        fontWeight: 700,
        color: '#003EFF',
        letterSpacing: '8px',

        '&:hover:before': {
            top: '7px',
            left: '7px'
        },

        '&:hover:after': {
            top: '-7px',
            left: '-7px'
        }
    },

    before: {
        content: '"DESTACADOS"',
        position: 'absolute',
        color: 'transparent',
        backgroundImage: 'repeating-linear-gradient(45deg, transparent 0, transparent 2px, white 2px, white 4px)',
        backgroundClip: 'text',
        top: 0,
        left: 0,
        zIndex: -1,
        transition: '.4s',
    },

    after: {
        content: '"DESTACADOS"',
        position: 'absolute',
        color: 'transparent',
        backgroundImage: 'repeating-linear-gradient(135deg, transparent 0, transparent 2px, white 2px, white 4px)',
        backgroundClip: 'text',
        top: 0,
        left: 0,
        transition: '.4s',
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
        padding: '1rem 3rem 3rem 3rem',
        boxSizing: 'border-box'
    }
}))

const Featured = () => {

    const {classes} = useStyles();

    const ref = useRef();
    const isInView = useInView(ref);

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
            <Title className={classes.title} ref={ref}>
                <motion.span 
                className={classes.before}
                initial={false}
                animate={{ x: isInView ? 7 : 0, y: isInView ? 7 : 0 }}
                >
                    Destacados
                </motion.span>
                Destacados
                <motion.span 
                className={classes.after}
                initial={false}
                animate={{ x: isInView ? -7 : 0, y: isInView ? -7 : 0 }}
                >
                    Destacados
                </motion.span>
            </Title>
            {/* <Anchor component={Link} to='/products/featured' className={classes.titleLink} variant='text'>Ver Todo<IconChevronRight /></Anchor> */}
        </Container>
        <Carousel
        height='max-content'
        slideSize="21.5%"
        breakpoints={[
            { maxWidth: 'lg', slideSize: '25%', slideGap: 'xs' },
            { maxWidth: 'md', slideSize: '33.333333%', slideGap: 0 },
            { maxWidth: 'sm', slideSize: '50%', slideGap: 0 },
        ]}
        loop
        align='center'
        className={classes.carousel}
        styles={{indicator: {
            backgroundColor: 'rgba(0, 0, 0)',
        }, control: {
            opacity: 1,
        }}}
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