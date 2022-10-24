import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { createStyles, Overlay, Text, Title } from '@mantine/core';

import bg from '../assets/bg3.jpeg'

const useStyles = createStyles((theme) => ({
    parallax: {
        height: '70vh',
        color: theme.white
    },

    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 30
    },
}))

const ScrollParallax = () => {

    const { classes } = useStyles();

    return (
        <ParallaxBanner className={classes.parallax}>
            <ParallaxBannerLayer image={bg} speed={-20} />
            <Overlay opacity={.6} color='#000' zIndex={20}/>
            <ParallaxBannerLayer className={classes.content}>
            </ParallaxBannerLayer>
        </ParallaxBanner>
    )
}

export default ScrollParallax;