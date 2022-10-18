import InfoCard from './InfoCard'
import { Box, createStyles } from '@mantine/core'
import { CiMedal } from 'react-icons/ci';
import { BiSupport } from 'react-icons/bi';
import { RiSecurePaymentLine } from 'react-icons/ri';

const useStyles = createStyles({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '0 5rem 5rem 5rem',
        boxSizing: 'border-box',
        backgroundColor: 'black',
    }
})

const Info = () => {

    const {classes} = useStyles();

    const info = [
        {
            icon: <CiMedal size='6rem'/>,
            title: 'Calidad',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi aut maiores dolores'
        },
        {
            icon: <BiSupport size='6rem'/>,
            title: 'Soporte',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi aut maiores dolores'
        },
        {
            icon: <RiSecurePaymentLine size='6rem'/>,
            title: 'Seguridad',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi aut maiores dolores'
        },
    ]

    const cards = info?.map((card, key) => (
        <InfoCard key={key} icon={card.icon} title={card.title} description={card.description}/>
    ))

    return (
        <Box className={classes.container}>
            {cards}
        </Box>
    )
}

export default Info