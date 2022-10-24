import InfoCard from './InfoCard'
import { Box, createStyles } from '@mantine/core'
import { CiMedal } from 'react-icons/ci';
import { BiSupport } from 'react-icons/bi';
import { RiSecurePaymentLine } from 'react-icons/ri';

const useStyles = createStyles({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        position: 'relative',
        backgroundColor: 'white',
    },
    
    cardsBox: {
        display: 'flex',
        backgroundColor: 'transparent',
        zIndex: 100
    }
})

const Info = () => {

    const {classes} = useStyles();

    const info = [
        {
            icon: <CiMedal size='6rem'/>,
            title: 'Calidad',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi aut maiores dolores',
            background: '#2A3FB7'
        },
        {
            icon: <BiSupport size='6rem'/>,
            title: 'Soporte',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi aut maiores dolores',
            background: '#273BAB'
        },
        {
            icon: <RiSecurePaymentLine size='6rem'/>,
            title: 'Seguridad',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi aut maiores dolores',
            background: '#253AA2'
        },
    ]

    const cards = info?.map((card, key) => (
        <InfoCard key={key} icon={card.icon} title={card.title} description={card.description} background={card.background}/>
    ))

    return (
        <Box className={classes.container}>
            {cards}
        </Box>
    )
}

export default Info