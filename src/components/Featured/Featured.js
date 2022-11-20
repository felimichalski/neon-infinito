import { useRef, useEffect, useState } from "react";

import { useSelector } from 'react-redux'

import FeaturedCard from "./FeaturedCard"
import { createStyles, Box, Title, Container } from "@mantine/core";
import { Carousel } from "@mantine/carousel"

import { useInView, motion } from "framer-motion"

const useStyles = createStyles((theme) => ({
    container: {
        padding: '4rem 0 0 0',
        marginTop: '10rem'
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

    const [products, setProducts] = useState(undefined)

    const {classes} = useStyles();
    const ref = useRef();
    const isInView = useInView(ref);

    const data = useSelector(state => state.featured)

    useEffect(() => {
        if(data.status === 'success') {
            setProducts(data.items)
        }
    }, [data])
    
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
            </Container>
            {products && 
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
                    {products.map((product, key) => (
                        <Carousel.Slide key={key}>
                            <FeaturedCard data={product}/>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            }
        </Box>
    )
}

export default Featured