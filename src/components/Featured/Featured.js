import { useRef, useEffect, useState } from "react";

import { useSelector } from 'react-redux'

import FeaturedCard from "./FeaturedCard"
import { createStyles, Box, Title, Container } from "@mantine/core";
import { Carousel } from "@mantine/carousel"

import { useInView, motion } from "framer-motion"
import { featuredFetch } from "../../features/slices/featuredSlice";

const useStyles = createStyles((theme) => ({
    container: {
        padding: '4rem 0 0 0',
        marginTop: '10rem'
    },

    titleBox: {
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    
    title: {
        color: theme.white,
        fontFamily: `Gotham`,
        fontSize: '8rem',
        fontWeight: 900,
        lineHeight: 1.05,
        width: '100%',
        WebkitTextFillColor: 'transparent',
        WebkitTextStroke: '1px white',
        marginBottom: '2rem'
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

    const data = useSelector(state => state.featured)

    useEffect(() => {
        if(data.status === 'success') {
            setProducts(data.items)
        }
    }, [data])
    
    return (
        <Box className={classes.container}>
            <Container className={classes.titleBox} fluid>
                <Title className={classes.title}>
                    Destacados
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