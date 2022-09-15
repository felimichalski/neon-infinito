import { useState, useEffect } from 'react'
import { createStyles, UnstyledButton, Indicator, Group, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { IconShoppingCart } from '@tabler/icons';
import { motion } from'framer-motion';

const useStyles = createStyles((theme) => ({
    root: {
        position: 'fixed',
        top: '2rem',
        left: '3rem',
        right: '3rem',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 1000,
    },

    container: {
        backgroundColor: 'black',
        border: '0.2rem solid #fff',
        borderRadius: '.8rem',
    },

    blueLight: {
        boxShadow: '0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #0aabad, 0 0 0.8rem #0aabad, 0 0 2.8rem #0aabad, inset 0 0 1.3rem #0aabad'
    },

    redLight: {
        boxShadow: '0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #fc171b, 0 0 0.8rem #fc171b, 0 0 2.8rem #fc171b, inset 0 0 1.3rem #fc171b'
    },

    cart: {
        padding: `${theme.spacing.sm}px ${theme.spacing.sm}px`,
        backgroundColor: 'transparent',
        cursor: 'default',

        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        }
    },

    cartIcon: {
        color: theme.white,
        cursor: 'pointer',
        '&:hover': {
            color: theme.colors.dark[3],
        }
    },  
    
    burger: {
        padding: `${theme.spacing.sm}px ${theme.spacing.sm}px`,
        backgroundColor: 'transparent',
        cursor: 'default',

        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        }
    },

    burgerIcon: {
        color: theme.white,
        cursor: 'pointer',

        '&:hover': {
            color: theme.colors.dark[3],
        }
    },  
}));

const variants = {
    visible: {
        y: ['-100%', '0%']
    },
    hidden: {
        y: ['0%', '-180%']
    }
}

const ShortcutButtons = ({ visibleHeight }) => {

    const [visible, setVisible] = useState(false);
    const [opened, { toggle }] = useDisclosure(false);
    const { classes, cx } = useStyles();

    const handleScroll = () => {
        if(window.scrollY > visibleHeight) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }
    
    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <motion.div className={classes.root} initial={false} animate={visible ? 'visible' : 'hidden'} variants={variants} transition={{duration: .1}}>
                <Group className={cx(classes.container, classes.blueLight)}>
                    <UnstyledButton className={classes.burger}>
                        <Burger opened={opened} onClick={toggle} className={classes.burgerIcon} size="sm" />
                    </UnstyledButton>
                </Group>
                <Group className={cx(classes.container, classes.redLight)} style={{ marginRight: '1rem' }}>
                    <UnstyledButton className={classes.cart}>
                        <Indicator size={20} radius='xl' label='0' styles={{ indicator: {padding: '0'}, root: {display: 'flex', alignItems: 'center', justifyContent: 'center'} }}>
                            <IconShoppingCart sx={{ backgroundColor: ' black' }} size={30} stroke={1.5} className={classes.cartIcon}/>
                        </Indicator>
                    </UnstyledButton>
                </Group>
            </motion.div>
        </>
    )
}

export default ShortcutButtons