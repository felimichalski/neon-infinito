import { useEffect } from 'react'

import { useDocumentTitle } from '@mantine/hooks';

import NavBar from '../components/NavBar'
import CurvedCarousel from '../components/CurvedCarousel';
import TitleBox from '../components/TitleBox';
import Info from '../components/Info/Info'
import Featured from '../components/Featured/Featured';
import ScrollParallax from '../components/ScrollParallax';

const HomePage = () => {

    const user = undefined;

    useDocumentTitle('Neón Infinito - Inicio')

    useEffect(() => {
        document.body.style.backgroundColor = '#081025'
    }, []);
    
    return (
        <>
            <NavBar user={user}/>
            <TitleBox />
            <Info />
            {/* <ScrollParallax /> */}
            <Featured />
            {/* <Info /> */}
        </>
    )
}

export default HomePage;