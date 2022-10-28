import InfoCard from './InfoCard'
import { Box, createStyles } from '@mantine/core'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdPayments } from 'react-icons/md';
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
            icon: <TbTruckDelivery size='6rem'/>,
            title: 'Envíos',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi aut maiores dolores',
            background: '#2A3FB7'
        },
        {
            icon: <MdPayments size='6rem'/>,
            title: 'Métodos de pago',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nisi aut maiores dolores',
            background: '#273BAB'
        },
        {
            icon: <RiSecurePaymentLine size='6rem'/>,
            title: 'Compra protegida',
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