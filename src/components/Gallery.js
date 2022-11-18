import { Container, createStyles, Button, Overlay, Box } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { BsEye } from 'react-icons/bs'

import img1 from '../assets/gallery/img1.jpg'
import img2 from '../assets/gallery/img2.jpg'
import img3 from '../assets/gallery/img3.jpg'
import img4 from '../assets/gallery/img4.jpg'
import img5 from '../assets/gallery/img5.jpg'
import img6 from '../assets/gallery/img6.jpg'

const useStyles = createStyles((theme, _, getRef) => ({
    container: {
        width: '90%',
        margin: '10rem auto 10rem auto',
        display: 'flex',
        flexDirection: 'column'
    },

    grid: {
        padding: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(6, 8vw)',
        height: 'max-content',
        gridGap: '40px',
        marginBottom: '3rem'
    },

    imageContainer: {
        position: 'relative',
        border: '2px solid white',
        borderRadius: '7px',

        [theme.fn.largerThan('md')]: {
            '&:nth-of-type(1)': {
                gridColumn: '1 / 2',
                gridRow: '1 / 4'
            },
    
            '&:nth-of-type(2)': {
                gridColumn: '2 / 3',
                gridRow: '1 / 3'
            },
    
            '&:nth-of-type(3)': {
                gridColumn: '3 / 4',
                gridRow: '1 / 5'
            },
            
            '&:nth-of-type(4)': {
                gridColumn: '1 / 2',
                gridRow: '4 / 7'
            },
            
            '&:nth-of-type(5)': {
                gridColumn: '2 / 3',
                gridRow: '3 / 7'
            },
            
            '&:nth-of-type(6)': {
                gridColumn: '3 / 4',
                gridRow: '5 / 7'
            }
        },

        '&:hover': {
            [`& .${getRef('overlay')}`]: {
                backgroundColor: 'rgba(0, 0, 0, .5)',
                opacity: 1
            },
        }
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: '7px'
    },

    imageOverlay: {
        ref: getRef('overlay'),
        position: 'absolute',
        width: '100%',
        height: '100%',
        transition: '.3s ease-in-out',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        opacity: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '7px'
    },

    icon: {
        color: theme.white,
        fontSize: '4rem',
        cursor: 'pointer'
    },

    button: {
        margin: '0 auto',
        backgroundColor: 'transparent',
        border: '1px solid white',
        textTransform: 'uppercase',
        color: theme.white,
        fontFamily: 'Gotham',
        fontSize: '15px',
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.white,
            fontWeight: 700,
            color: theme.black,
        }
    }
}))

const Gallery = () => {

    const { classes } = useStyles();

    const navigate = useNavigate();

    return (
        <Container className={classes.container} fluid>
            <div className={classes.grid}>
                <Box className={classes.imageContainer}>
                    <div className={classes.imageOverlay}>
                        <BsEye className={classes.icon}/>
                    </div>
                    <img src={img1} className={classes.image}/>
                </Box>
                <Box className={classes.imageContainer}>
                    <div className={classes.imageOverlay}>
                        <BsEye className={classes.icon}/>
                    </div>
                    <img src={img2} className={classes.image}/>
                </Box>
                <Box className={classes.imageContainer}>
                    <div className={classes.imageOverlay}>
                        <BsEye className={classes.icon}/>
                    </div>
                    <img src={img3} className={classes.image}/>
                </Box>
                <Box className={classes.imageContainer}>
                    <div className={classes.imageOverlay}>
                        <BsEye className={classes.icon}/>
                    </div>
                    <img src={img4} className={classes.image}/>
                </Box>
                <Box className={classes.imageContainer}>
                    <div className={classes.imageOverlay}>
                        <BsEye className={classes.icon}/>
                    </div>
                    <img src={img5} className={classes.image}/>
                </Box>
                <Box className={classes.imageContainer}>
                    <div className={classes.imageOverlay}>
                        <BsEye className={classes.icon}/>
                    </div>
                    <img src={img6} className={classes.image}/>
                </Box>
            </div>
            <Button className={classes.button} onClick={() => navigate('/gallery')} size='xl' radius='3px'>Ver más</Button>
        </Container>
    )
}

export default Gallery;