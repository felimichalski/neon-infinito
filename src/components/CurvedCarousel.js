import { useRef } from 'react'
import { Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import styles from '../styles/CurvedCarousel.module.css'

import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'
import img9 from '../images/9.jpg'
import img10 from '../images/10.jpg'

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

const CurvedCarousel = () => {

	const autoplay = useRef(Autoplay());

	const slides = images.map((url) => (
		<Carousel.Slide key={url} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
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
			speed={.03}>
				{slides}
			</Carousel>
		</div>
    )
}

export default CurvedCarousel