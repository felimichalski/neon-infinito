import { useEffect, useState } from "react";

import { useSelector } from 'react-redux'

import FeaturedCard from "./FeaturedCard"
import { createStyles, Box, Title, Container, Grid, BackgroundImage } from "@mantine/core";

// import { motion } from "framer-motion"

import background from '../../assets/lineas.jpg'

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
        WebkitTextFillColor: 'black',
        WebkitTextStroke: '1px white',
        marginBottom: '2rem',
        textShadow: '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0d4c9b, 0 0 80px #0d4c9b, 0 0 90px #0d4c9b'
    },
}))

const Featured = () => {

    const {classes} = useStyles();
    const data = useSelector(state => state.featured)
    const [products, setProducts] = useState(undefined)

    useEffect(() => {
        if(data.status === 'success') {
            setProducts(data.items);
        }
    }, [data])
    
    return (
        <Box className={classes.container}>
            <Container className={classes.titleBox} fluid>
                <Title className={classes.title}>
                    Destacados
                </Title>
            </Container>
            <Grid>
                <BackgroundImage src={background}/>
                {products?.map((product, key) => (
                    <Grid.Col span={3} key={key}>
                        <FeaturedCard data={product} />
                    </Grid.Col>
                ))}
            </Grid>
        </Box>
    )
}

export default Featured