import { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { Box, createStyles, Overlay, Tabs, Text } from '@mantine/core'
import { useScrollLock } from '@mantine/hooks';
import { IconHome, IconCategory, IconFolders, IconMessageCircle2, IconX, IconChevronRight } from '@tabler/icons';
import { motion } from 'framer-motion';

const variants = {
    open: (custom) => ({
        y: 0,
        opacity: 1,
        transition: {
          y: { stiffness: 1000, velocity: -100 },
          duration: 1,
          delay: .4 + .2 * custom
        }
    }),
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
};

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const useStyles = createStyles((theme, {opened}) => ({
    sidebar: {
        position: 'fixed',
        height: '100vh',
        width: '18rem',
        left: opened ? 0 : '-18rem',
        top: 0,
        transition: 'left .7s ease-in-out',
        zIndex: 10000,
        backgroundColor: 'white',
        padding: '1rem 0',
        display: 'flex',
        flexDirection: 'column'
    },

    backgroundImage: {
        zIndex: -2,
        position: 'absolute',
        height: '100%',
    },
    
    overlay: {
        opacity: opened ? 1 : 0,
        transition: 'opacity .7s ease-in-out',
        position: 'fixed',
    },

    tabs: {
        width: '100%',
    },
    
    tabsList: {
        borderBottom: '0 !important',
        display: 'flex',
        flexDirection: 'column',
    },
    
    tab: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        fontSize: '15px',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: '5px',
        color: theme.white,
        margin: '.5rem',
        padding: '.5rem 1rem',
        display: 'flex',
        justifyContent: 'left',
        width: '100%',

        '&:hover': {
            backgroundColor: 'transparent'
        }
    },

    tabLink: {
        pointerEvents: 'auto',
        textDecoration: 'none',
        color: theme.white,
        display: 'flex',
        width: '100%'
    },

    tabIcon: {
        marginRight: '1rem',
        borderRadius: '50%',
        padding: '6px'
    },

    closeButton: {
        cursor: 'pointer',
        margin: '0 1rem 2rem auto'
    }
}))

const Sidebar = ({ opened, toggle }) => {
    
    const {classes} = useStyles({opened});
    const [overlayIndex, setOverlayIndex] = useState(-100);
    const [_, setScrollLocked] = useScrollLock();

    const tabs = [{
        name: 'Inicio',
        icon: <IconHome className={classes.tabIcon} style={{border: '2px solid #e80fb9'}}/>,
        link: '/',
        color: '#e80fb9'
    }, {
        name: 'Categorías',
        icon: <IconCategory className={classes.tabIcon} style={{border: '2px solid #b04ffc'}}/>,
        link: '/categories',
        color: '#b04ffc'
    }, {
        name: 'Proyectos',
        icon: <IconFolders className={classes.tabIcon} style={{border: '2px solid #8f5cfc'}}/>,
        link: '/projects',
        color: '#8f5cfc'
    }, {
        name: 'Contacto',
        icon: <IconMessageCircle2 className={classes.tabIcon} style={{border: '2px solid #720dfc'}}/>,
        link: '/contact',
        color: '#720dfc'
    }];

    const items = tabs?.map((tab, index) => (
        <motion.div
            initial={false}
            animate={opened ? "open" : "closed"}
            variants={variants}
            custom={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link to={tab.link} className={classes.tabLink} key={tab.name}>
                <Tabs.Tab value={removeAccents(tab.name.toLowerCase())} className={classes.tab} style={{color: tab.color}}>
                    <Text style={{display: 'flex', alignItems: 'center'}}>{tab.icon}{tab.name}{tab.name === 'Categorías' && <IconChevronRight />}</Text>
                </Tabs.Tab>
            </Link>
        </motion.div>
    ));

    useEffect(() => {
        const keyDownHandler = event => {    
          if (event.key === 'Escape') {
            (opened) && toggle();
          }
        };
    
        document.addEventListener('keydown', keyDownHandler);
    }, []);
    
    useEffect(() => {
        if(!opened) {
            setTimeout(() => {
                setOverlayIndex(-100);
            }, 700)
            setScrollLocked(false);
        } else {
            setOverlayIndex(10000);
            setScrollLocked(true);
        }
    }, [opened]);

    return (
        <>
            <Overlay opacity={0.6} color="#000" blur={2} className={classes.overlay} onClick={opened ? toggle : null} zIndex={overlayIndex}/>
            <Box className={classes.sidebar}>
                <IconX className={classes.closeButton} onClick={toggle}/>
                <Tabs classNames={{
                    root: classes.tabs,
                    tabsList: classes.tabsList
                }}
                >
                    <Tabs.List>{items}</Tabs.List>
                </Tabs>
            </Box>
        </>
    )
}

export default Sidebar;