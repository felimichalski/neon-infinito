import { useRef } from 'react'
import { Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import styles from '../styles/CurvedCarousel.module.css'

import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'
import img8 from '../assets/8.jpg'
import img9 from '../assets/9.jpg'
import img10 from '../assets/10.jpg'

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

const CurvedCarousel = () => {

	const autoplay = useRef(Autoplay({delay: 0}));

	const slides = images.map((url) => (
		<Carousel.Slide onContextMenu={(e) => e.preventDefault()} key={url} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
		  <Image src={url} style={{width: '80%', objectFit: 'cover'}} />
		</Carousel.Slide>
	  ));

    return (
		<div className={styles.carouselBox}>
			<Carousel
			plugins={[autoplay.current]}
	  		slideSize="25%"
			height={500}
			slideGap="xl"
			loop
			withControls={false}
			draggable={false}
			className={styles.carousel}
			speed={.025}>
				{slides}
			</Carousel>
		</div>
    )
}

export default CurvedCarousel