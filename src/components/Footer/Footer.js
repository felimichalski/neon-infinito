import { Container, createStyles, Divider, Grid, Image, Text } from "@mantine/core"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import logo from '../../assets/logo.png'

import Icon from './Icon'

const useStyles = createStyles((theme) => ({
    root: {
        backgroundColor: theme.colors.dark[7]
    },

    column: {
        display: 'flex',
        justifyContent: 'center'
    },

    copyright: {
        color: theme.white,
        textAlign: 'center',
        fontFamily: 'Gotham',
        fontWeight: 700,
        fontSize: 14,
    }
}))

function Footer() {

    const { classes } = useStyles();

    const [icons, setIcons] = useState([])
    const data = useSelector(state => state.social);

    useEffect(() => {
        if(data.status === 'success') {
            setIcons(data.items)
        }
    }, [data])

    return (
        <footer className={classes.root}>
            <Grid m={10}>
                <Grid.Col span={3} p={20} className={classes.column}>
                    <Image src={logo}/>
                </Grid.Col>
                <Grid.Col span={3} className={classes.column}></Grid.Col>
                <Grid.Col span={3} className={classes.column}></Grid.Col>
                <Grid.Col span={3} className={classes.column}>
                </Grid.Col>
            </Grid>
            <Container>
                {icons.length > 0 &&
                    icons.map((icon, key) => (
                        <Icon data={icon} key={key}/>
                    ))
                }
            </Container>
            <Divider mx={40} my={20}/>
            <Text pb={20} className={classes.copyright}>&copy; 2022 Copyright - Neon Infinito</Text>
        </footer>
    )
}

export default Footer