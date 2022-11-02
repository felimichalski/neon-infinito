import { useRef } from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { createStyles, Overlay, Title, Blockquote } from '@mantine/core';
import { Carousel } from "@mantine/carousel"
import Autoplay from 'embla-carousel-autoplay';

import pr from '../assets/pr.jpg'

const useStyles = createStyles((theme) => ({
    parallax: {
        height: '80vh'
    },

    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 30,
        flexDirection: 'column'
    },

    title: {
        marginBottom: '2rem',
        color: theme.white,
        textTransform: 'uppercase',
    },

    quote: {
        border: '1px solid gray',
        borderRadius: '7px',
        fontFamily: 'Proxima nova'
    }
}))

const CommentsParallax = () => {

    const autoplay = useRef(Autoplay({delay: 0}));
    const { classes } = useStyles();

    return (
        <ParallaxBanner className={classes.parallax}>
            <ParallaxBannerLayer image={pr} speed={-20} />
            <Overlay opacity={.6} color='#000' zIndex={20}/>
            <ParallaxBannerLayer className={classes.content}>
                <Title className={classes.title}>Clientes Satisfechos</Title>
                <Carousel
                plugins={[autoplay.current]}
                loop
                withControls={false}
                slideSize='30%'
                speed={.025}
                draggable={false}
                slideGap='xl'>
                    <Carousel.Slide>
                        <Blockquote color="blue" cite="Cliente" className={classes.quote}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis non quaerat voluptatum beatae facere quasi quis accusamus illum accusantium inventore?
                        </Blockquote>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Blockquote color="blue" cite="Cliente" className={classes.quote}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis non quaerat voluptatum beatae facere quasi quis accusamus illum accusantium inventore?
                        </Blockquote>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Blockquote color="blue" cite="Cliente" className={classes.quote}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis non quaerat voluptatum beatae facere quasi quis accusamus illum accusantium inventore?
                        </Blockquote>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Blockquote color="blue" cite="Cliente" className={classes.quote}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis non quaerat voluptatum beatae facere quasi quis accusamus illum accusantium inventore?
                        </Blockquote>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Blockquote color="blue" cite="Cliente" className={classes.quote}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis non quaerat voluptatum beatae facere quasi quis accusamus illum accusantium inventore?
                        </Blockquote>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Blockquote color="blue" cite="Cliente" className={classes.quote}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis non quaerat voluptatum beatae facere quasi quis accusamus illum accusantium inventore?
                        </Blockquote>
                    </Carousel.Slide>
                </Carousel>
            </ParallaxBannerLayer>
        </ParallaxBanner>
    )
}

export default CommentsParallax;