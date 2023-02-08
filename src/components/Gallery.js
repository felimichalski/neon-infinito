import { Container, createStyles, Button, Overlay, Box, BackgroundImage } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { BsEye } from 'react-icons/bs'

// import "/slick-carousel/slick/slick.css"; 
// import "/slick-carousel/slick/slick-theme.css";

import img1 from '../assets/gallery/img1.jpg'
import img2 from '../assets/gallery/img2.jpg'
import img3 from '../assets/gallery/img3.jpg'
import img4 from '../assets/gallery/img4.jpg'
import img5 from '../assets/gallery/img5.jpg'
import img6 from '../assets/gallery/img6.jpg'

const useStyles = createStyles((theme) => ({
}))

const Gallery = () => {

    const { classes } = useStyles();

    const navigate = useNavigate();

    const settings = {
        dots: false,
        control: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <BackgroundImage src={img1}></BackgroundImage>
            <BackgroundImage src={img2}></BackgroundImage>
            <BackgroundImage src={img3}></BackgroundImage>
            <BackgroundImage src={img4}></BackgroundImage>
            <BackgroundImage src={img5}></BackgroundImage>
        </Slider>
    )
}

export default Gallery;