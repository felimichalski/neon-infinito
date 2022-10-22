import FeaturedCard from "./FeaturedCard"
import { createStyles, Box } from "@mantine/core";

import img1 from '../../assets/products/VECTORES-01.png'
import img2 from '../../assets/products/VECTORES-02.png'
import img3 from '../../assets/products/VECTORES-03.png'
import img4 from '../../assets/products/VECTORES-04.png'

const useStyles = createStyles((theme) => ({
    container: {
        display: 'flex',
        padding: '2rem'
    }
}))

const Featured = () => {

    const {classes} = useStyles();

    const data = [
        {
            image: img1,
            title: 'Neon 1',
            price: '100'
        },
        {
            image: img2,
            title: 'Neon 2',
            price: '200'
        },
        {
            image: img3,
            title: 'Neon 3',
            price: '300'
        },
        {
            image: img4,
            title: 'Neon 4',
            price: '400'
        },
    ];

  return (
    <Box className={classes.container}>
        {data?.map((card, key) => (
            <FeaturedCard data={card} key={key}/>
        ))}
    </Box>
  )
}

export default Featured