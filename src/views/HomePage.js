import React, { useEffect } from 'react'

import NavBar from '../components/NavBar'
import ShortcutButtons from '../components/ShortcutButtons';
import CurvedCarousel from '../components/CurvedCarousel';
import TitleBox from '../components/TitleBox';
import Featured from '../components/Featured';

const HomePage = () => {

    const user = undefined;

    useEffect(() => {
        document.title = 'Neón Infinito - Inicio';
        document.body.style.backgroundColor = '#ECECEC'
    }, []);
    
    return (
        <>
            <NavBar user={user}/>
            <TitleBox />
            <Featured />
        </>
    )
}

export default HomePage;