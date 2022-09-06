import React, { useEffect } from 'react'
import { NavBar } from './NavBar';

import CurvedCarousel from './CurvedCarousel';
import TB from './TB';
import TitleBox from './TitleBox';

const HomePage = () => {

    useEffect(() => {
        document.title = 'Neón Infinito - Inicio';
    }, []);

    const tabs = ['Inicio', 'Catálogo', 'Proyectos', 'Nosotros']
    
    return (
        <>
            <NavBar user='Felipe Michalski' tabs={tabs}/>
            <TitleBox />
            {/* <TB /> */}
            <CurvedCarousel />
        </>
    )
}

export default HomePage;