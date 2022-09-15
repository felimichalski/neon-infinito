import React, { useEffect } from 'react'

import NavBar from '../components/NavBar'
import ShortcutButtons from '../components/ShortcutButtons';
import CurvedCarousel from '../components/CurvedCarousel';
import TitleBox from '../components/TitleBox';
import Featured from '../components/Featured';
import Sidebar from '../components/Sidebar';
import { Group } from '@mantine/core';

const HomePage = () => {

    const tabs = ['Inicio', 'Categorías', 'Proyectos', 'Nosotros']

    useEffect(() => {
        document.title = 'Neón Infinito - Inicio';
        document.body.style.backgroundColor = '#ECECEC'
    }, []);
    
    return (
        <>
            <NavBar user='Felipe Michalski' tabs={tabs}/>
            {/* <Sidebar /> */}
            <TitleBox />
            <Featured />
        </>
    )
}

export default HomePage;