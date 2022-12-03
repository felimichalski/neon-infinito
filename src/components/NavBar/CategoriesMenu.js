import { createStyles, Menu, Box, Title, Tabs, Text } from "@mantine/core"
import { IconChevronDown } from '@tabler/icons';


const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const useStyles = createStyles((theme, {position}) => ({
    tab: {
        fontFamily: 'Proxima Nova',
        fontWeight: '700',
        fontSize: '15px',
        backgroundColor: 'transparent',
        border: 'none',
        color: position === 'absolute' ? theme.white : theme.black,
        textTransform: 'uppercase',
        transition: 'all .3s ease-out',
        userSelect: 'none',
    
        '&[data-active]': {
          color: position === 'absolute' ? theme.white : 'black !important',
        },
    
        '&:hover': {
            backgroundColor: 'transparent'
        },
    },

    dropdown: {
        backgroundColor: 'white',
        boxShadow: position === 'fixed' && '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
        border: 'none',
        textTransform: 'uppercase',
        color: theme.black,
        zIndex: 1100,
        padding: 0,
        left: '50% !important',
        whiteSpace: 'nowrap',
        transform: 'translateX(-50%)'
    },

    categoryList: {
    display: 'flex',
    padding: 0,
    },

    categorySection: {
    padding: '.5rem 1rem',
    color: theme.white
    },

    categoryTitle: {
    fontFamily: 'Proxima Nova',
    fontWeight: 400
    }
}))

const CategoriesMenu = ({tab, position}) => {

    const { classes } = useStyles({position})

    return (
        <Menu offset={23} closeDelay={200} radius='0' trigger='hover' withinPortal='true'>
            <Menu.Target>
                <Tabs.Tab value={removeAccents(tab.name.toLowerCase())} className={classes.tab}>
                    <Text style={{display: 'flex', alignItems: 'center'}}>{tab.name}<IconChevronDown /></Text>
                </Tabs.Tab>
            </Menu.Target>
            <Menu.Dropdown className={classes.dropdown}>
            <Box className={classes.categoryList}>
                <Box className={classes.categorySection} style={{backgroundColor: '#15244c'}}>
                    <Title className={classes.categoryTitle}>Neones de Diseño</Title>
                </Box>
                <Box className={classes.categorySection} style={{backgroundColor: '#0d4c9b'}}>
                    <Title className={classes.categoryTitle}>Artístico</Title>
                </Box>
                <Box className={classes.categorySection} style={{backgroundColor: '#5c84ac'}}>
                    <Title className={classes.categoryTitle}>Algo Distinto</Title>
                </Box>
            </Box>
            </Menu.Dropdown>
        </Menu>
    )
}

export default CategoriesMenu