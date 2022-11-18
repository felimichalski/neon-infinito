import { useState } from 'react';
import { Modal, useMantineTheme, createStyles, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    title: {
        textTransform: 'uppercase',
    }
}))

const CartModal = ({opened, setOpened}) => {

    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={<Title className={classes.title}>Mi Carrito</Title>}
        centered
        overlayColor={theme.colors.dark[9]}
        overlayOpacity={0.55}
        overlayBlur={3}
        size='lg'
        overflow='inside'
        className={classes.root}
        radius='7px'
        zIndex={1001}
        >
        </Modal>
    );
}

export default CartModal;