import React, { useEffect } from 'react'

import NavBar from '../components/NavBar'
import CurvedCarousel from '../components/CurvedCarousel';
import TitleBox from '../components/TitleBox';
import Info from '../components/Info/Info'
import Featured from '../components/Featured/Featured';
import ScrollParallax from '../components/ScrollParallax';

const HomePage = () => {

    const user = undefined;

    useEffect(() => {
        document.title = 'Neón Infinito - Inicio';
        // document.body.style.backgroundColor = '#ECECEC'
        document.body.style.backgroundColor = 'black'
    }, []);
    
    return (
        <>
            <NavBar user={user}/>
            <TitleBox />
            <Info />
            <Featured />
            <ScrollParallax />
            <Info />
        </>
    )
}

export default HomePage;