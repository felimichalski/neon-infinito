import { useEffect, useState } from 'react'
import { LoadingOverlay, Image, Divider } from '@mantine/core'
import { useDocumentTitle, useScrollLock } from '@mantine/hooks';

import NavBar from '../components/NavBar'
import CurvedCarousel from '../components/CurvedCarousel';
import TitleBox from '../components/TitleBox';
import Info from '../components/Info/Info'
import Featured from '../components/Featured/Featured';
import ScrollParallax from '../components/ScrollParallax';

import Loader from '../assets/loader.gif'

const HomePage = () => {

    useDocumentTitle('Neón Infinito - Inicio')
    const [scrollLocked, setScrollLocked] = useScrollLock(true);
    const [loading, setLoading] = useState(true)
    const user = 'Felipe michalski';

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
            setScrollLocked(false)
        }, 3000)
    }, []);
    
    return (
        <>
            <LoadingOverlay style={{position: 'fixed'}} visible={loading} loader={<Image src={Loader} />} overlayColor='black' overlayOpacity={1} transitionDuration={1500} zIndex={100000}/>
            <NavBar user={user}/>
            <TitleBox />
            <Info />
            <Featured />
            <Divider my='md' mx='20%' size='xs' color='rgba(0,0,0,.4)'/>
            <ScrollParallax />
            <Featured />
        </>
    )
}

export default HomePage;