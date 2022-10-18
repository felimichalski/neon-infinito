import { Container, createStyles } from '@mantine/core'
import { Carousel } from '@mantine/carousel'

import FeaturedProduct from './FeaturedProduct'

import img1 from '../../assets/products/VECTORES-01.png'
import img2 from '../../assets/products/VECTORES-02.png'
import img3 from '../../assets/products/VECTORES-03.png'
import img4 from '../../assets/products/VECTORES-04.png'
import img5 from '../../assets/products/VECTORES-05.png'

const products = [
    {
        image: img1,
        title: 'Lorem Ipsum',
        price: 500,
        link: '/products/VECTORES-05.png'
    },
    {
        image: img2,
        title: 'Lorem Ipsum',
        price: 500,
        link: '/proyectos'
    },
    {
        image: img3,
        title: 'Lorem Ipsum',
        price: 500,
        link: '/'
    },
    {
        image: img4,
        title: 'Lorem Ipsum',
        price: 500,
        link: '/'
    },
    {
        image: img5,
        title: 'Lorem Ipsum',
        price: 500,
        link: '/'
    },
]

const useStyles = createStyles((theme) => ({
    root: {
        margin: '5rem auto',
        width: '90%',
        backgroundColor: 'white',
        padding: '1rem',
        borderRadius: '.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'saturate(200%) blur(30px)',
        boxShadow: 'rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem'
    }
}))

const Featured = () => {

    const productList = products.map(({image, title, price, link}, key) => (
        <Carousel.Slide key={key}>
            <FeaturedProduct image={image} title={title} price={price} link={link}/>
        </Carousel.Slide>
    ))

    const {classes} = useStyles();

    return (
        <Container fluid className={classes.root}>
            <h1>Featured Products</h1>
            <Carousel
                slideSize="30%"
                slideGap="md"
                breakpoints={[
                    { maxWidth: 'md', slideSize: '50%' },
                    { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                ]}
                loop
                align="start"
                >
                {productList}
            </Carousel>
        </Container>
    )
}

export default Featured;