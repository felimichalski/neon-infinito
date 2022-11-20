import { useSelector, useDispatch } from 'react-redux';
import { Modal, useMantineTheme, createStyles, Title, ScrollArea, Button, Container, Grid, Divider, Box, UnstyledButton } from '@mantine/core';
import { useEffect, useState } from 'react';

import { FaTrashAlt } from 'react-icons/fa'

import { getTotals, clearCart } from '../../features/slices/cartSlice';
import CartProduct from './CartProduct';

const useStyles = createStyles((theme) => ({
    title: {
        textTransform: 'uppercase',
        fontFamily: 'Gotham'
    },

    clearButton: {
        color: theme.colors.red[8],
        width: '100%',
        textAlign: 'right',
        cursor: 'default'
    },

    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem'
    },

    modalButton: {
        fontWeight: 700,
        fontFamily: 'Proxima nova'
    }
}))

const CartModal = ({opened, setOpened}) => {

    const theme = useMantineTheme();
    const { classes } = useStyles();
    const [items, setItems] = useState([])

    const data = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, []);
    
    useEffect(() => {
        setItems(data.cartItems)
    }, [data]);

    const handleClearClick = () => {
        dispatch(clearCart());
    }

    return (
        <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={<Title className={classes.title}>Mi Carrito</Title>}
        centered
        overlayColor={theme.colors.dark[9]}
        overlayOpacity={0.55}
        overlayBlur={3}
        size='90%'
        className={classes.root}
        zIndex={1001}
        styles={{
            modal: {
                backgroundColor: 'rgba(0, 0, 0, .4)',
                backdropFilter: 'saturate(200%) blur(30px)',
                boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.3)',
                maxWidth: '60rem'
            }
        }}
        >
            {items.length > 0 ?
            <> 
            <UnstyledButton className={classes.clearButton} mb={20} pr={20}><span style={{cursor: 'pointer'}} onClick={handleClearClick}><FaTrashAlt style={{marginRight: '7px'}}/>Vaciar</span></UnstyledButton>
            <ScrollArea.Autosize style={{ maxHeight: '48vh', fontFamily: 'Gotham' }} type='auto'>
                <Box mx={20}>
                    <Grid>
                        <Grid.Col span={1}></Grid.Col>
                        <Grid.Col span={3} style={{textTransform: 'uppercase', textAlign: 'center'}}>Producto</Grid.Col>
                        <Grid.Col span={3} style={{textTransform: 'uppercase', textAlign: 'center'}}>Cantidad</Grid.Col>
                        <Grid.Col span={2} style={{textTransform: 'uppercase', textAlign: 'center'}}>Precio</Grid.Col>
                        <Grid.Col span={2}></Grid.Col>
                    </Grid>
                </Box>
                {items?.map((data, key) => (
                    <CartProduct key={key} data={data} />
                    ))}
                <Divider mx={20} mt={20} color='white'/>
            </ScrollArea.Autosize>
            <Container className={classes.buttonsContainer}>
                <Button className={classes.modalButton} style={{backgroundColor: theme.colors.blue[9]}}>Ver detalles</Button>
                <Button className={classes.modalButton} style={{backgroundColor: theme.colors.orange[9]}}>Finalizar compra</Button>
            </Container>
            </>
            :
            <h1>No hay items seleccionados aun</h1>
            }
        </Modal>
    );
}

export default CartModal;